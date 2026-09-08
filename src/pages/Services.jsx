import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { PRICING, PHONE_DISPLAY, PHONE_TEL } from '../content/site';
import './Services.css';

/* PRICING.from may arrive as a number (1500) or a string ("$1,500") */
const money = (v) => {
  if (typeof v === 'number') return `$${v.toLocaleString('en-US')}`;
  const s = String(v ?? '').trim();
  return s.startsWith('$') ? s : `$${s}`;
};

const blocks = [
  {
    num: '01',
    tagline: 'Most popular',
    title: 'Business websites',
    intro: 'The site people find when they Google you. It should look established, load fast on a phone, and make it easy to call, book or message you — so the visit turns into a customer.',
    feats: [
      ['Custom design, no templates', 'Built around your business, so you don’t look like the shop down the street.'],
      ['Mobile-first, loads fast on a phone', 'Most of your visitors are on a phone. That’s where I design first.'],
      ['Click-to-call, forms, booking links', 'Every page gives people an easy next step.'],
      ['Local SEO foundations + Google Business Profile setup', 'So you show up when people nearby search for what you do.'],
    ],
  },
  {
    num: '02',
    tagline: 'Sell online',
    title: 'Online stores',
    intro: 'Take what sells in the shop and sell it online too. A store that’s simple to run day to day, with a checkout that works on a phone.',
    feats: [
      ['Easy to update products yourself', 'Add items, change prices and photos without calling me.'],
      ['Simple checkout that works on phones', 'Fewer steps, fewer abandoned carts.'],
      ['Payments, shipping, tax handled', 'Card payments, shipping rates and sales tax set up and tested.'],
      ['Training so you can run it', 'A walkthrough at launch, plus notes you can come back to.'],
    ],
  },
  {
    num: '03',
    tagline: 'Built to spec',
    title: 'Custom web apps & portals',
    intro: 'When your business runs on spreadsheets, texts and three different apps, I build the one tool that does the job the way you actually work.',
    feats: [
      ['Member portals & booking systems', 'Log-ins, schedules, sign-ups and payments in one place.'],
      ['Dashboards & internal tools', 'One screen for the numbers you check every day.'],
      ['Integrations with the software you already use', 'Connects to your payment, email and scheduling tools.'],
      ['Built to spec, documented, yours', 'You get the code, the docs and full ownership.'],
    ],
  },
];

const toolkit = [
  'Logo & brand refresh', 'Copywriting', 'Photography direction', 'Google Business Profile', 'Local SEO',
  'Analytics setup', 'Hosting & domain', 'Ongoing care plans', 'Site migrations', 'Accessibility',
];

const process = [
  { no: '01', t: 'Quick call or message', d: 'Tell me about your business and what you need. I’ll send a fixed price and a timeline in writing.' },
  { no: '02', t: 'Design you sign off on', d: 'You see the look of the site before anything is built, and we adjust until it feels right.' },
  { no: '03', t: 'Build, with a preview link', d: 'Watch it come together on a private link and send feedback as we go.' },
  { no: '04', t: 'Launch + training', d: 'I put it live, connect your domain and show you how to make updates yourself.' },
];

const Services = () => {
  const [open, setOpen] = useState(0);

  const priceList = PRICING.map((p) => `${p.name.toLowerCase()} from ${money(p.from)}`).join(', ');

  const faqs = [
    {
      q: 'How much does a website cost?',
      a: `It depends on what you need, but I publish starting prices so there are no surprises: ${priceList}. Every quote is a fixed price, written down before work starts, and it doesn’t change unless you add to the project.`,
    },
    {
      q: 'How long does it take?',
      a: 'A starter site is usually live in 1–2 weeks and a full business site in 3–5. Online stores and custom apps take 6–10 weeks depending on how much there is to build. I’ll give you a real date with your quote.',
    },
    {
      q: 'Do I have to write the content?',
      a: 'No. Send me what you have — a menu, a brochure, a few photos, your Facebook page — and I’ll write the pages and organise everything. You review it and tell me what to change.',
    },
    {
      q: 'Will it show up on Google?',
      a: 'Every site is built so Google can read it properly: fast loading, mobile-friendly, correct page titles and a Google Business Profile set up to match. That gets you found for local searches. Ranking for competitive terms across the whole state is a longer, ongoing job we can talk about separately.',
    },
    {
      q: 'Do I own it? What about hosting?',
      a: 'You own it outright — the design, the code and the domain are yours, and nothing is held hostage. I set up hosting in your name (usually a few dollars a month, or free for simple sites) and can look after updates on a care plan if you’d rather not think about it.',
    },
    {
      q: 'Can you fix my existing site?',
      a: 'Usually, yes. If the bones are good I’ll fix what’s broken and freshen it up. If it’s slow, dated or built on something that’s hard to work with, I’ll tell you straight and quote a rebuild instead.',
    },
  ];

  return (
    <div className="services-page">
      <SEO
        path="/services"
        title="Web Design & Development Services · Calhoun, GA"
        description="Business websites, online stores and custom web apps for small businesses in Calhoun, GA and North Georgia. Fixed-price quotes, launched in weeks."
      />

      {/* HEADER */}
      <header className="phead">
        <div className="container">
          <Reveal className="phead__top">
            <span>( Services — Calhoun, GA )</span>
            <span>Websites · Stores · Web apps</span>
          </Reveal>
          <Reveal mask className="phead__title"><h1>What I <em>build.</em></h1></Reveal>
          <Reveal className="phead__lead" delay={150}>
            Websites, online stores and custom tools for small businesses in Calhoun and North
            Georgia. I design and build everything myself, quote a fixed price up front, and
            have you live in weeks — not months.
          </Reveal>
        </div>
      </header>

      {/* SERVICE BLOCKS */}
      <section className="section--tight">
        <div className="container">
          {blocks.map((b) => (
            <Reveal key={b.num} className="svc-block">
              <div className="svc-block__head">
                <span className="svc-block__num">{b.num}</span>
                <p className="svc-block__tagline" style={{ marginTop: '1rem' }}>{b.tagline}</p>
                <h2>{b.title}</h2>
                <p>{b.intro}</p>
              </div>
              <ul className="svc-feats">
                {b.feats.map(([t, d], i) => (
                  <li key={t}>
                    <span className="n">0{i + 1}</span>
                    <span><strong>{t}</strong><span className="d">{d}</span></span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="section pricing" id="pricing">
        <div className="container">
          <Reveal className="svc-head">
            <div>
              <p className="kicker" style={{ marginBottom: '1.25rem' }}><span>Pricing</span></p>
              <h2 className="h-md">Straight answers on <em>price.</em></h2>
            </div>
            <p className="pricing__note">Every quote is fixed-price and written down before work starts.</p>
          </Reveal>

          <div className="price-grid">
            {PRICING.map((p, i) => (
              <Reveal key={p.name} className={`price ${p.featured ? 'price--featured' : ''}`} delay={i * 80}>
                {p.featured && <span className="price__flag">Most popular</span>}
                <h3 className="price__name">{p.name}</h3>
                <p className="price__from">
                  <span className="price__from-label">from</span>
                  <span className="price__amount">{money(p.from)}</span>
                </p>
                <p className="price__blurb">{p.blurb}</p>
                <ul className="price__list">
                  {(p.includes || []).map((item) => (
                    <li key={item}><Check size={16} aria-hidden="true" /><span>{item}</span></li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="pricing__cta" delay={100}>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get a free quote <ArrowUpRight size={18} />
            </Link>
            <a href={`tel:${PHONE_TEL}`} className="link" aria-label={`Call Jonathon at ${PHONE_DISPLAY}`}>
              or call {PHONE_DISPLAY}
            </a>
          </Reveal>
        </div>
      </section>

      {/* TOOLKIT STRIP */}
      <section className="section toolkit">
        <div className="container">
          <Reveal className="toolkit__grid">
            <div>
              <p className="kicker kicker--dot" style={{ color: 'var(--on-ink-soft)', marginBottom: '1.25rem' }}>
                <span>Also happy to help with</span>
              </p>
              <h2>And everything <em>around</em> it.</h2>
            </div>
            <ul className="toolkit__chips" aria-label="Other services">
              {toolkit.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="svc-head">
            <h2 className="h-md">How it works</h2>
            <p className="kicker kicker--bare">Four steps · 01—04</p>
          </Reveal>
          <div className="proc-grid">
            {process.map((p, i) => (
              <Reveal key={p.no} className="proc" delay={i * 80}>
                <span className="proc__no">{p.no}</span>
                <div className="proc__rule" />
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="container">
          <div className="faq-grid">
            <Reveal>
              <p className="kicker" style={{ marginBottom: '1.5rem' }}><span>Questions</span></p>
              <h2 className="h-md" style={{ maxWidth: '12ch', marginBottom: '1.5rem' }}>Good to know.</h2>
              <p className="muted" style={{ marginBottom: '2rem', maxWidth: '32ch' }}>
                Got a question that isn&rsquo;t here? Ask me directly — no obligation.
              </p>
              <Link to="/contact" className="btn btn--ink">Get a free quote</Link>
            </Reveal>
            <Reveal className="faq-list" delay={100}>
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                  <button
                    className="faq-q"
                    onClick={() => setOpen(open === i ? -1 : i)}
                    aria-expanded={open === i}
                    aria-controls={`faq-a-${i}`}
                  >
                    {f.q}
                    <span className="faq-sign" aria-hidden="true" />
                  </button>
                  <div className="faq-a" id={`faq-a-${i}`}><p>{f.a}</p></div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
