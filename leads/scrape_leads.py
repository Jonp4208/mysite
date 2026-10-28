#!/usr/bin/env python3
"""
CWC lead scraper — Google Places API (New)

Pulls every business for a trade across a list of cities, qualifies them,
and writes leads.csv.

Keeps only businesses with NO real website: nothing listed, or a Facebook /
Instagram / Linktree / free-builder page in the website field.
Drops businesses with fewer than MIN_REVIEWS reviews or that are closed.

Usage:
  pip install requests
  export PLACES_API_KEY=...            (or paste it in below)
  python scrape_leads.py
"""

import csv, os, sys, time
from urllib.parse import urlparse
import requests

# ---------------- CONFIG ----------------
API_KEY = os.environ.get("PLACES_API_KEY", "PASTE_KEY_HERE")
TRADES = [
    # storefront / service businesses that live or die on local search
    "gym", "boutique", "restaurant", "hair salon", "barber shop", "nail salon",
    "dentist", "chiropractor", "church", "daycare", "auto repair", "bakery",
    # trades
    "pressure washing", "lawn care", "landscaping", "handyman", "junk removal",
    "mobile detailing", "painting contractor", "fence company", "tree service",
    "roofing contractor", "plumber", "electrician", "HVAC",
]
# Home market first; the further out the city, the colder the lead.
CITIES = ["Calhoun, GA", "Adairsville, GA", "Chatsworth, GA", "Dalton, GA",
          "Rome, GA", "Cartersville, GA"]
MIN_REVIEWS = 5          # enough reviews that the business is real and busy
OUT = "leads.csv"        # rerunning keeps status/demo_url/notes for rows already in the file
# ----------------------------------------

SEARCH_URL = "https://places.googleapis.com/v1/places:searchText"
FIELDS = ",".join([
    "places.id", "places.displayName", "places.formattedAddress",
    "places.nationalPhoneNumber", "places.websiteUri", "places.googleMapsUri",
    "places.rating", "places.userRatingCount",
    "places.businessStatus", "nextPageToken",
])

# A "website" on one of these hosts counts as having NO real site.
NO_SITE_DOMAINS = ("facebook.com", "fb.com", "instagram.com", "linktr.ee",
                   "business.site", "godaddysites.com", "wixsite.com",
                   "square.site", "weebly.com", "yelp.com", "nextdoor.com")

def search(query):
    """Yield all places for a text query, following page tokens."""
    body = {"textQuery": query, "pageSize": 20}
    headers = {"Content-Type": "application/json",
               "X-Goog-Api-Key": API_KEY,
               "X-Goog-FieldMask": FIELDS}
    while True:
        r = requests.post(SEARCH_URL, json=body, headers=headers, timeout=30)
        if r.status_code != 200:
            print(f"  API error {r.status_code}: {r.text[:200]}", file=sys.stderr)
            return
        data = r.json()
        for p in data.get("places", []):
            yield p
        token = data.get("nextPageToken")
        if not token:
            return
        body["pageToken"] = token
        time.sleep(2)  # page tokens need a moment to become valid


def main():
    if API_KEY == "PASTE_KEY_HERE":
        sys.exit("Set PLACES_API_KEY or paste the key into API_KEY.")
    # Carry over the columns you fill in by hand, keyed by the Maps URL.
    previous = {}
    if os.path.exists(OUT):
        with open(OUT, newline="", encoding="utf-8") as f:
            for r in csv.DictReader(f):
                if r.get("maps"):
                    previous[r["maps"]] = r
    seen, rows = set(), []
    for city in CITIES:
        for trade in TRADES:
            q = f"{trade} in {city}"
            print(f"Searching: {q}")
            for p in search(q):
                pid = p["id"]
                if pid in seen:
                    continue
                seen.add(pid)
                if p.get("businessStatus", "OPERATIONAL") != "OPERATIONAL":
                    continue
                reviews = p.get("userRatingCount", 0)
                if reviews < MIN_REVIEWS:
                    continue
                site = p.get("websiteUri", "")
                host = urlparse(site).netloc.lower() if site else ""
                if site and not any(d in host for d in NO_SITE_DOMAINS):
                    continue   # has a real website; not a lead
                if not site:
                    builder = "NO SITE"
                elif "facebook" in host or "fb.com" in host:
                    builder = "FACEBOOK ONLY"
                else:
                    builder = host.replace("www.", "")
                rows.append({
                    "business": p["displayName"]["text"],
                    "trade": trade,
                    "city": city,
                    "phone": p.get("nationalPhoneNumber", ""),
                    "website": site,
                    "builder": builder,
                    "rating": p.get("rating", ""),
                    "reviews": reviews,
                    "address": p.get("formattedAddress", "").replace(", USA", ""),
                    "maps": p.get("googleMapsUri", ""),
                    "status": "", "demo_url": "", "notes": "",
                })
                old = previous.get(rows[-1]["maps"])
                if old:
                    for k in ("status", "demo_url", "notes"):
                        rows[-1][k] = old.get(k, "")
                print(f"  + {rows[-1]['business']} ({builder}, {reviews} reviews)")
    if not rows:
        print("No qualified leads.")
        return
    # Warmest leads first: no site at all, then busiest.
    rows.sort(key=lambda r: (r["builder"] != "NO SITE", -int(r["reviews"])))
    with open(OUT, "w", newline="", encoding="utf-8") as f:
        w = csv.DictWriter(f, fieldnames=list(rows[0].keys()))
        w.writeheader()
        w.writerows(rows)
    print(f"\n{len(rows)} leads written to {OUT}")


if __name__ == "__main__":
    main()
