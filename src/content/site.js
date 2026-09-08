/**
 * Single source of truth for the facts the site repeats: who runs it,
 * how to reach them, where they work, and what things cost.
 * Change a number here and every page picks it up.
 */
export const OWNER = 'Jonathon Pope';
export const PHONE_DISPLAY = '404 · 425 · 4758';
export const PHONE_TEL = '+14044254758';
export const EMAIL = 'jonp4208@gmail.com';
export const CITY = 'Calhoun, Georgia';
export const SERVICE_AREA = ['Calhoun', 'Dalton', 'Rome', 'Cartersville', 'Adairsville', 'Chatsworth', 'Gordon County'];

// Placeholder prices — the owner should confirm these before launch.
export const PRICING = [
  {
    name: 'Starter site',
    from: 500,
    blurb: 'A sharp 1–3 page site for a business that needs to look legit and get calls.',
    includes: ['Custom design, no template', 'Mobile-first build', 'Contact form + click-to-call', 'Google Business Profile setup', 'Launched in 1–2 weeks'],
  },
  {
    name: 'Business site',
    from: 1500,
    featured: true,
    blurb: 'The full package for an established local business that wants to rank and convert.',
    includes: ['5–8 custom pages', 'Local SEO foundations', 'Reviews, photos & booking links', 'Speed & accessibility tuned', 'Launched in 3–5 weeks'],
  },
  {
    name: 'Store or custom app',
    from: 3500,
    blurb: 'Online stores, member portals, booking systems and dashboards built to spec.',
    includes: ['E-commerce or web app', 'Payments, accounts, integrations', 'Admin tools you can actually use', 'Training + documentation', '6–10 weeks, scoped together'],
  },
];

// Real client quotes go here: { quote, name, business, town }.
// The testimonials section is hidden while this is empty. Do NOT invent quotes.
export const TESTIMONIALS = [];

export const YEARS_EXPERIENCE = 15;
