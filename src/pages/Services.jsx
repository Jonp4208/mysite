import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import './Services.css';

const blocks = [
  {
    num: '01',
    tagline: 'Design & Front-End',
    title: 'Websites & Interfaces',
    intro: 'Your digital handshake. We design and build sites that establish trust in the first second and never make a visitor wait.',
    feats: [
      ['Marketing & brand sites', 'Editorial layouts with a point of view — not another template.'],
      ['Landing pages that convert', 'Built around one clear action and the reasons to take it.'],
      ['Responsive, mobile-first', 'Pixel-perfect from a 4-inch phone to a 40-inch display.'],
      ['Performance & SEO baked in', 'Semantic markup, fast loads and clean foundations to rank.'],
    ],
  },
  {
    num: '02',
    tagline: 'Engineering',
    title: 'Apps & Custom Software',
    intro: 'When an off-the-shelf tool stops fitting, we build the one that does — web apps and dashboards that carry real operational weight.',
    feats: [
      ['Custom web applications', 'React-based software shaped around how you actually work.'],
      ['Dashboards & internal tools', 'Turn spreadsheets and guesswork into one source of truth.'],
      ['API & system integrations', 'Connect payments, CRMs and data — securely, reliably.'],
      ['Progressive web apps', 'Native-feeling experiences, installable, no app store needed.'],
    ],
  },
  {
    num: '03',
    tagline: 'Commerce',
    title: 'E-Commerce & Storefronts',
    intro: 'Stop losing sales to slow carts and confusing checkouts. We build retail environments engineered to reduce friction and lift order value.',
    feats: [
      ['Custom storefronts', 'Shopify, headless or fully bespoke — built for the brand.'],
      ['Frictionless checkout', 'Fewer steps, faster pages, more completed orders.'],
      ['Inventory & CRM sync', 'Your stock, customers and orders, always in agreement.'],
      ['Subscriptions & tiers', 'Recurring revenue models and flexible pricing built in.'],
    ],
  },
];

const faqs = [
  { q: 'How long does a typical project take?', a: 'Most business websites run 4–6 weeks from discovery to launch. Larger e-commerce builds or custom web apps land in the 8–12 week range depending on scope and features.' },
  { q: 'Do you offer ongoing maintenance?', a: 'Yes. We offer monthly care packages covering priority support, software updates, security monitoring and content changes so your site stays fast and safe long after launch.' },
  { q: 'Will my site be mobile-friendly and SEO-ready?', a: 'Always. Every build is mobile-first and responsive across all devices, with foundational on-page SEO — meta tags, sitemaps, semantic HTML and fast load times — in place from day one.' },
  { q: 'What do you build on?', a: 'We specialise in custom React (Vite / Next.js) for performance and unique functionality. For commerce we build headless Shopify storefronts or integrate payment platforms like Stripe.' },
  { q: 'Do I own everything when we’re done?', a: 'Completely. You get clean, documented code and full ownership — no proprietary lock-in and nothing held hostage. The work is yours.' },
];

const Services = () => {
  const [open, setOpen] = useState(0);

  return (
    <div className="services-page">
      <SEO
        path="/services"
        title="Services"
        description="Custom web design, app & software development, and high-performance e-commerce — engineered from scratch to grow your business."
      />

      {/* HEADER */}
      <header className="phead">
        <div className="container">
          <Reveal className="phead__top">
            <span>( Services — What we make )</span>
            <span>Web · Apps · Commerce</span>
          </Reveal>
          <Reveal mask className="phead__title"><h1>Built from <em>scratch.</em></h1></Reveal>
          <Reveal className="phead__lead" delay={150}>
            No drag-and-drop templates, no recycled themes. Just custom design and code,
            shaped around your business and engineered to do the heavy lifting.
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

      {/* TOOLKIT STRIP */}
      <section className="section toolkit">
        <div className="container">
          <Reveal className="toolkit__grid">
            <div>
              <p className="kicker kicker--dot" style={{ color: 'var(--on-ink-soft)', marginBottom: '1.25rem' }}>
                <span>Anything in between</span>
              </p>
              <h2>And everything <em>around</em> it.</h2>
            </div>
            <div className="toolkit__chips">
              {['Brand Systems', 'Logo & Identity', 'Copywriting', 'UX Research', 'SEO Strategy', 'Analytics', 'Hosting & Deploys', 'Maintenance', 'Migrations', 'Accessibility'].map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="container">
          <Reveal className="svc-head">
            <h2 className="h-md">How we build</h2>
            <p className="kicker kicker--bare">Process / 01—04</p>
          </Reveal>
          <div className="proc-grid">
            {[
              { no: '01', t: 'Discovery', d: 'We dig into your goals, audience and the problem actually worth solving.' },
              { no: '02', t: 'Design', d: 'Wireframes, flows and a high-fidelity visual system you sign off on.' },
              { no: '03', t: 'Build', d: 'Clean, scalable code with staging links so you watch it come together.' },
              { no: '04', t: 'Launch', d: 'Rigorous QA, final tuning, and a confident deploy to the world.' },
            ].map((p, i) => (
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
                Still wondering about something specific? Ask us directly.
              </p>
              <Link to="/contact" className="btn btn--ink">Get in touch</Link>
            </Reveal>
            <Reveal className="faq-list" delay={100}>
              {faqs.map((f, i) => (
                <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                  <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                    {f.q}
                    <span className="faq-sign" aria-hidden="true" />
                  </button>
                  <div className="faq-a"><p>{f.a}</p></div>
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
