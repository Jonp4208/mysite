# Getting the first client — what the code can't do for you

The site fixes are in. These are the steps only you can take, in order of how fast they tend to produce a lead.

## This week (about 3 hours total)

1. **Fix the www record.** In your DNS host, delete the `www` CNAME that points at `websites.durablesites.com` and replace it with a CNAME to `cname.vercel-dns.com`. Then in Vercel > Project > Settings > Domains, add `www.calhounwebcreations.com` and set it to redirect to the bare domain. Right now `https://www.calhounwebcreations.com` shows a browser security error.
2. **Create your Google Business Profile** at https://business.google.com. Category "Website designer", service-area business (hide address, list Calhoun, Dalton, Rome, Cartersville, Adairsville, Chatsworth). Add the four client-site screenshots as photos and the phone number. This is the single biggest lever for "web designer near me" searches.
3. **Ask the four existing clients for a review and a quote.** Send each one this, personalized:

   > Hi ___, quick favor. I'm building out Calhoun Web Creations and reviews make a big difference. Would you leave a one-line Google review here: [your GBP review link]? And if you're happy with the site, I'd love a sentence I can put on my own site. Thanks — and if you know anyone who needs a website, send them my way.

   Paste each quote into `src/content/site.js` under `TESTIMONIALS` (the section appears automatically once the list has entries).
4. **Add your photo.** Drop a square headshot at `public/jonathon.jpg` (about 800×800). The About section shows a "JP" monogram until it exists.
5. **Confirm the prices** in `src/content/site.js`. They are placeholders: Starter from $1,500, Business from $3,000, Store/app from $6,000. Change them to what you actually charge before pushing.
6. **Get a domain email** (`hello@calhounwebcreations.com`). Cheapest path: Cloudflare Email Routing (free, forwards to Gmail) or Google Workspace. Update `EMAIL` in `src/content/site.js` and the EmailJS template.
7. **Ask each client to add a footer credit** on their site: "Website by Calhoun Web Creations" linking to https://calhounwebcreations.com. Four local backlinks from real businesses.

## Next two weeks

8. **Verify Google Search Console** for the domain, submit `https://calhounwebcreations.com/sitemap.xml`, and use "Request indexing" on the four pages so Google drops the old /pricing and /about snippets.
9. **Direct outreach list.** Search Google Maps for Calhoun / Gordon County businesses in these categories: gyms, boutiques, contractors, restaurants, salons, dentists, churches. Pick 20 with no website or a bad one. Email or message each with a one-line personal observation about their current site, a link to the portfolio, and the starting price. Two lines, no pitch deck.
10. **Join local Facebook groups** (Calhoun/Gordon County community, buy/sell, small business) and post once with the TNU Fitness site as the example. Reply to anyone asking for a web designer.
11. **Gordon County Chamber of Commerce** listing, and Nextdoor business page. Both are free backlinks and local signals.
12. **Post the four projects on your personal Facebook and LinkedIn**, one per week, tagging the client.

## Ongoing

- One short blog post a month aimed at a local search: "How much does a website cost in Calhoun, GA?", "Best website for a gym in North Georgia", "Do I need a website if I have a Facebook page?". Each one is a page that can rank.
- Keep the Google Business Profile alive: one photo or post a week.
