import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import Testimonials from '../components/home/Testimonials';
import Pricing from '../components/home/Pricing';
import About from '../components/home/About';
import ServiceArea from '../components/home/ServiceArea';
import { PHONE_DISPLAY, PHONE_TEL, PRICING, YEARS_EXPERIENCE } from '../content/site';
import './Home.css';

const startingPrice = `$${PRICING[0].from.toLocaleString('en-US')}`;

const services = [
  {
    idx: '01',
    title: 'Business websites',
    desc: 'Custom-designed, mobile-first sites that make you look established and turn visitors into calls and bookings.',
  },
  {
    idx: '02',
    title: 'Online stores',
    desc: 'Storefronts that are fast, easy to run, and simple to buy from — on a phone.',
  },
  {
    idx: '03',
    title: 'Custom web apps & portals',
    desc: 'Member portals, booking systems, dashboards and internal tools when off-the-shelf software stops fitting.',
  },
];

const works = [
  {
    no: '01',
    title: 'The Pink Label',
    tag: 'Online store',
    desc: 'A boutique fashion label moved from the sidewalk to the screen — a chic, fast storefront with a southern accent.',
    result: 'Boutique moved online · fashion e-commerce',
    tags: ['Online store', 'Fashion', 'Boutique'],
    url: 'https://pinklab.vercel.app/',
    image: '/work/pink-label.webp',
  },
  {
    no: '02',
    title: 'Forge Trainer',
    tag: 'Web app',
    desc: 'A scattered coaching business, consolidated. One dashboard for scheduling, custom programming and client analytics.',
    result: 'Coaching business consolidated into one dashboard',
    tags: ['Web app', 'Dashboard', 'Coaching'],
    url: 'https://forge-trainer.com/',
    image: '/work/forge-trainer.webp',
  },
];

const industries = [
  'Gyms & fitness',
  'Boutiques & retail',
  'Contractors & trades',
  'Restaurants',
  'Salons & spas',
  'Medical & dental',
  'Churches & nonprofits',
  'Professional services',
];

const principles = [
  { no: '01', t: 'Fast on a phone', d: 'Most of your customers will find you on a phone. Every site is built mobile-first and tuned to load fast, even on a weak signal.' },
  { no: '02', t: 'Built to get calls', d: 'Every page points to one clear next step — call, book or order — so visitors turn into customers instead of wandering off.' },
  { no: '03', t: 'You own it all', d: 'Your domain, hosting and code are in your name. No lock-in, no monthly ransom. If you ever leave, you take everything with you.' },
];

const Home = () => {
  return (
    <div className="home">
      <SEO
        path="/"
        title="Web Design in Calhoun, GA"
        description="Custom websites for small businesses in Calhoun, GA and North Georgia. Designed and built by Jonathon Pope — fast, mobile-first, and priced up front. Free quotes."
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <Reveal className="hero__meta">
            <span>( Web design · Calhoun, GA )</span>
          </Reveal>

          <h1 className="hero__title">
            <Reveal as="div" mask delay={80}><span>Websites for Calhoun</span></Reveal>
            <Reveal as="div" mask delay={180}><span className="indent">businesses that</span></Reveal>
            <Reveal as="div" mask delay={280}><span>bring in <em>customers.</em></span></Reveal>
          </h1>

          <div className="hero__lead-row">
            <Reveal className="hero__lead" delay={420}>
              <strong>Calhoun Web Creations</strong> is Jonathon Pope, a web designer in
              Calhoun, GA. Custom-built sites for local businesses, launched in weeks,
              starting at {startingPrice}. You talk to the person who builds it.
            </Reveal>
            <Reveal className="hero__actions" delay={520}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Get a free quote <ArrowUpRight size={18} />
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="hero__call">
                or call <span>{PHONE_DISPLAY}</span>
              </a>
              <Link to="/portfolio" className="link">See recent work <ArrowRight size={15} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CREDENTIALS STRIP ────────────────────────────────── */}
      <section className="statstrip">
        <div className="container">
          <Reveal as="dl" className="hero__stats">
            <div className="hero__stat"><dt>Based in</dt><dd>Calhoun, Georgia</dd></div>
            <div className="hero__stat"><dt>Experience</dt><dd>{YEARS_EXPERIENCE}+ years building sites</dd></div>
            <div className="hero__stat"><dt>Turnaround</dt><dd>Most sites live in 2–6 weeks</dd></div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE BAND ─────────────────────────────────────── */}
      <div className="band">
        <Marquee
          duration={34}
          items={['Web Design', 'Local SEO', 'Online Stores', 'Booking & Forms', 'Google Business Profile', 'Fast Load Times', 'Mobile-First']}
        />
      </div>

      {/* ── WHO IT'S FOR ─────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <p className="kicker" style={{ marginBottom: '1.75rem' }}>
                <span><span className="idx">01</span> — Who we work with</span>
              </p>
              <h2 className="intro__statement">
                Built for the businesses that keep <em>Calhoun</em> running.
              </h2>
            </Reveal>
            <Reveal className="intro__body" delay={120}>
              <p>
                Gyms, boutiques, contractors, restaurants, salons, churches, clinics and
                service businesses across Gordon County and North Georgia. If your
                customers are local and your phone should be ringing more, this is for you.
              </p>
              <p>
                The goal isn&rsquo;t a design award. It&rsquo;s a site that brings in calls,
                bookings and orders &mdash; and that you don&rsquo;t have to babysit
                after launch.
              </p>
              <Link to="/services" className="link link--accent">What&rsquo;s included <ArrowRight size={15} /></Link>
            </Reveal>
          </div>
          <Reveal as="ul" className="chips intro__chips" aria-label="Industries we build for" delay={200}>
            {industries.map((name) => <li key={name} className="chip">{name}</li>)}
          </Reveal>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────── */}
      <section className="section--tight">
        <div className="container">
          <Reveal className="svc-head">
            <h2>What we build</h2>
            <p className="kicker kicker--bare">Services / 02</p>
          </Reveal>
          <div className="svc-list">
            {services.map((s, i) => (
              <Reveal key={s.idx} delay={i * 80}>
                <Link to="/services" className="svc-row">
                  <span className="svc-row__idx">{s.idx}</span>
                  <span className="svc-row__title">{s.title}</span>
                  <span className="svc-row__desc">{s.desc}</span>
                  <span className="svc-row__arrow"><ArrowUpRight size={20} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ────────────────────────────────────── */}
      <section className="section work">
        <div className="container">
          <Reveal className="svc-head">
            <h2>Recent work</h2>
            <Link to="/portfolio" className="link">All projects <ArrowRight size={15} /></Link>
          </Reveal>
          {works.map((w, i) => (
            <Reveal key={w.no} className={`work-row ${i % 2 ? 'work-row--flip' : ''}`}>
              <a className="work-plate" href={w.url} target="_blank" rel="noopener noreferrer" aria-label={`${w.title} — visit live site`}>
                <span className="work-plate__tag">{w.tag}</span>
                <img src={w.image} alt={`${w.title} website`} loading="lazy" decoding="async" />
              </a>
              <div className="work-info">
                <span className="numeral">{w.no}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
                <p className="work-result">{w.result}</p>
                <div className="work-info__tags">
                  {w.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <a href={w.url} target="_blank" rel="noopener noreferrer" className="link">
                  Visit live site <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS (hidden until real quotes exist) ────── */}
      <Testimonials />

      {/* ── PRICING ──────────────────────────────────────────── */}
      <Pricing />

      {/* ── ABOUT JONATHON ───────────────────────────────────── */}
      <About />

      {/* ── SERVICE AREA ─────────────────────────────────────── */}
      <ServiceArea />

      {/* ── PRINCIPLES ───────────────────────────────────────── */}
      <section className="section principles">
        <div className="container">
          <Reveal>
            <p className="kicker" style={{ marginBottom: '1.5rem' }}>
              <span><span className="idx">06</span> — Principles</span>
            </p>
            <h2 className="h-md" style={{ maxWidth: '20ch' }}>
              Three things every site gets, whatever the budget.
            </h2>
          </Reveal>
          <div className="principles__grid">
            {principles.map((p, i) => (
              <Reveal key={p.no} className="principle" delay={i * 90}>
                <div className="principle__no">{p.no}</div>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
