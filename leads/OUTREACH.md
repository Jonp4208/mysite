# Outreach — how to work the list

## Start here (this week)

`leads.csv` has 178 businesses within 45 minutes of Calhoun that show up on Google
with reviews and **no website at all**. Pulled from Google's local results on
2026-10-28. Sorted home market first, then by review count. The first 20 rows
are the week-one list: Calhoun businesses with 49+ reviews and nowhere to send
the people who find them.

Most of them are storefronts in town. Walk in.

What the list does NOT cover yet (needs the Places API run, see `scrape_leads.py`):
- Businesses whose "website" is a Facebook page or a free GoDaddy/Wix site.
  Google shows those as having a website, so they are not in this file.
- Restaurants, boutiques and other retail. Google's local results hide the
  Website button for those categories, so they could not be judged.

Row count by city: Calhoun 88 · Dalton 31 · Rome 31 · Cartersville 21 · other 7.

Goal: 20 to 40 messages a week, two lines each, one real observation per business.
Nobody reads a pitch. They read "this person actually looked at my business."

## Working the CSV

`leads.csv` columns you fill in: `status`, `demo_url`, `notes`.
Use these status values so the file sorts cleanly:

| status      | meaning                                              |
|-------------|------------------------------------------------------|
| (blank)     | not contacted                                        |
| `sent`      | first message sent — put the date in `notes`         |
| `followup1` | second touch sent (3 to 4 days later)                |
| `followup2` | third touch sent (a week after that), then stop      |
| `replied`   | they answered — move to a conversation               |
| `won`       | signed                                               |
| `no`        | said no, or wrong fit; leave them alone              |

Order of contact: `NO SITE` rows first, highest review count first. A busy
business with no site is already losing customers and knows it.

How to reach them, in order of reply rate:
1. **Walk in** if they are in Calhoun or Adairsville. Ask for the owner, hand them a card, say one sentence.
2. **Facebook Messenger** to the business page (most no-site businesses live here).
3. **Phone** — call, ask for the owner, use the phone script.
4. **Email** only if the Maps listing or Facebook page shows one.

## Message 1 — no website at all

Subject (email) / first line (Messenger): `Quick question about {Business}`

> Hi {First name}, I was looking for {trade} in {City} and found you on Google —
> {reviews} reviews at {rating} stars is a lot of happy customers. I noticed you
> don't have a website, so people who find you on Google have nowhere to go next.
>
> I build simple sites for Calhoun businesses that load fast and get the phone
> ringing. One I did recently: {portfolio link}. Starter sites are $500, done in
> about a week. Worth a 10-minute call?
>
> Jonathon
> Calhoun Web Creations · calhounwebcreations.com · {phone}

## Message 1 — Facebook page only

> Hi {First name}, found {Business} while looking for {trade} in {City}. Your
> Facebook page is doing the work a website should: anyone who isn't logged in
> hits a wall, and Google barely shows Facebook pages for "{trade} near me."
>
> I build simple sites for local businesses that sit alongside Facebook and catch
> the Google searches you're missing. Example: {portfolio link}. Starter sites are
> $500, about a week. Happy to show you what yours would look like.
>
> Jonathon
> Calhoun Web Creations · calhounwebcreations.com · {phone}

## Message 1 — free builder site (GoDaddy / Wix / Weebly / business.site)

Open on something true and specific about THEIR site. Look at it on your phone
first and pick one: slow to load, no prices, no click-to-call, outdated hours,
stock photos, "Powered by" badge in the footer, not showing on Google.

> Hi {First name}, I pulled up {Business}'s site on my phone and {one specific
> thing you saw}. You've clearly built something people like ({reviews} reviews),
> and the site isn't keeping up with the business.
>
> I rebuild sites like this for local businesses — fast, mobile-first, and set
> up so Google actually ranks them. Example: {portfolio link}. $500 to $1,500
> depending on size, about a week. Want me to send over a quick mockup?
>
> Jonathon
> Calhoun Web Creations · calhounwebcreations.com · {phone}

## Follow-up 1 (3 to 4 days later)

> Hi {First name}, bumping this in case it got buried. If a website isn't a
> priority right now, no worries — just say so and I'll stop. If it is, I can
> have a draft of yours up this week.

## Follow-up 2 (a week after that, last one)

> {First name} — last note from me. I went ahead and mocked up a homepage for
> {Business}: {demo_url}. It's yours if you want it, and I'm happy to change
> anything. If not, I'll leave you be. Thanks either way.

The demo in follow-up 2 is the highest-converting thing you can do. Build it
only for the 5 to 10 best leads (most reviews, no site, close to Calhoun). A
one-page Vite site with their name, photos from their Google listing, hours,
phone, and a map takes under an hour and is almost impossible to say no to.

## Phone script (owner on the line)

> Hi, is this {First name}? This is Jonathon with Calhoun Web Creations here in
> town. I'll be quick. I found {Business} on Google — great reviews — and noticed
> there's no website, so I wanted to ask: is that on purpose, or just never got
> around to it?

Then listen. Whatever they say, the ask is the same:

> I build simple sites for local businesses, $500 and done in about a week.
> Can I text you a link to one I did for a business like yours?

Get the cell number, text the portfolio link within five minutes, and set a
reminder to follow up in three days.

## What to send as the example

Match the example to the lead:
- Gym, fitness, sports → the TNU Fitness site
- Any other service business → whichever of the four client sites is closest in feel

Always link the client's live site, not your portfolio page. A real business
with a real site is the proof.

## Don'ts

- No "I hope this finds you well." No "I'm reaching out because."
- No attachments, no PDFs, no long lists of features.
- Don't mention SEO, hosting, or technology. Say "show up on Google" and "the phone rings."
- Don't contact the same business more than three times.
- Don't message after 7pm or on Sunday mornings.
