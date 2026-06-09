import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import Marquee from '../components/Marquee';
import pinkLabImg from '../assets/pink_lab.png';
import forgeTrainerImg from '../assets/forge_trainer.png';
import './Home.css';

const services = [
  {
    idx: '01',
    title: 'Web Design & Interfaces',
    desc: 'Marketing sites, portfolios and landing pages — designed to look like nobody else and built to load in a blink.',
  },
  {
    idx: '02',
    title: 'App & Software Development',
    desc: 'Custom web apps, dashboards and tools. Real software that carries the weight your business actually puts on it.',
  },
  {
    idx: '03',
    title: 'E-Commerce & Growth',
    desc: 'Storefronts engineered for the sale — frictionless checkouts, fast pages, and a path that turns browsers into buyers.',
  },
];

const works = [
  {
    no: '01',
    title: 'The Pink Label',
    tag: 'E-Commerce',
    desc: 'A boutique fashion label moved from the sidewalk to the screen — a chic, fast storefront with a southern accent.',
    tags: ['E-Commerce', 'Fashion', 'React'],
    url: 'https://pinklab.vercel.app/',
    image: pinkLabImg,
  },
  {
    no: '02',
    title: 'Forge Trainer',
    tag: 'Software',
    desc: 'A scattered coaching business, consolidated. One dashboard for scheduling, custom programming and client analytics.',
    tags: ['SaaS', 'Dashboard', 'Web App'],
    url: 'https://forge-trainer.com/',
    image: forgeTrainerImg,
  },
];

const Home = () => {
  return (
    <div className="home">
      <SEO
        path="/"
        title="Design & Development Studio"
        description="Calhoun Web Creations is a design-and-development studio in Calhoun, GA crafting fast, distinctive websites, custom apps and e-commerce storefronts for businesses ready to outgrow the template."
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <Reveal className="hero__meta">
            <span>( Design &amp; Development Studio )</span>
            <span>Est. <b>—</b> Calhoun, Georgia</span>
          </Reveal>

          <h1 className="hero__title">
            <Reveal as="div" mask delay={80}><span>We design &amp; build</span></Reveal>
            <Reveal as="div" mask delay={180}><span className="indent">websites and apps</span></Reveal>
            <Reveal as="div" mask delay={280}><span>that <em>mean business.</em></span></Reveal>
          </h1>

          <div className="hero__lead-row">
            <Reveal className="hero__lead" delay={420}>
              <strong>Calhoun Web Creations</strong> is a small studio with serious
              craft — making fast, characterful digital experiences, from boutique
              storefronts to custom software, for brands ready to stand out.
            </Reveal>
            <Reveal className="hero__actions" delay={520}>
              <Link to="/contact" className="btn btn--primary btn--lg">
                Start a project <ArrowUpRight size={18} />
              </Link>
              <Link to="/portfolio" className="link">View selected work <ArrowRight size={15} /></Link>
            </Reveal>
          </div>

          <Reveal as="dl" className="hero__stats" delay={120}>
            <div className="hero__stat"><dt>Disciplines</dt><dd>Web · Apps · Commerce</dd></div>
            <div className="hero__stat"><dt>Approach</dt><dd>Built 1-to-1, never templated</dd></div>
            <div className="hero__stat"><dt>Based in</dt><dd>Calhoun, Georgia</dd></div>
          </Reveal>
        </div>
      </section>

      {/* ── MARQUEE BAND ─────────────────────────────────────── */}
      <div className="band">
        <Marquee
          duration={34}
          items={['Web Design', 'App Development', 'E-Commerce', 'Brand Systems', 'UX & Interface', 'Performance', 'SEO Foundations']}
        />
      </div>

      {/* ── INTRO / POSITIONING ──────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="intro__grid">
            <Reveal>
              <p className="kicker" style={{ marginBottom: '1.75rem' }}>
                <span><span className="idx">01</span> — The Studio</span>
              </p>
              <h2 className="intro__statement">
                Small studio. <em>Serious</em> craft. Every pixel, line of code and
                load-time decision made on purpose.
              </h2>
            </Reveal>
            <Reveal className="intro__body" delay={120}>
              <p>
                Most agencies hand you a template with your logo dropped in. We don&rsquo;t.
                Every project is designed and coded from scratch around your business —
                your customers, your goals, your voice.
              </p>
              <p>
                The result is a site or app that feels handmade, performs effortlessly,
                and actually moves the numbers that matter: trust, time-on-page, and
                customers through the door.
              </p>
              <Link to="/services" className="link link--accent">How we work <ArrowRight size={15} /></Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICES LIST ────────────────────────────────────── */}
      <section className="section--tight">
        <div className="container">
          <Reveal className="svc-head">
            <h2>What we do</h2>
            <p className="kicker kicker--bare">Capabilities / 02</p>
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
            <h2>Selected work</h2>
            <Link to="/portfolio" className="link link--accent">All projects <ArrowRight size={15} /></Link>
          </Reveal>
          {works.map((w, i) => (
            <Reveal key={w.no} className={`work-row ${i % 2 ? 'work-row--flip' : ''}`}>
              <a className="work-plate" href={w.url} target="_blank" rel="noopener noreferrer" aria-label={`${w.title} — visit live site`}>
                <span className="work-plate__tag">{w.tag}</span>
                <img src={w.image} alt={`${w.title} website`} loading="lazy" />
              </a>
              <div className="work-info">
                <span className="numeral">{w.no}</span>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
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

      {/* ── PRINCIPLES ───────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="kicker" style={{ marginBottom: '1.5rem' }}>
              <span><span className="idx">03</span> — Principles</span>
            </p>
            <h2 className="h-md" style={{ maxWidth: '18ch' }}>
              Three things we refuse to compromise on.
            </h2>
          </Reveal>
          <div className="principles__grid">
            {[
              { no: '01', t: 'Fast by default', d: 'Speed is a feature. We build lean and ship pages that load before your visitor loses patience.' },
              { no: '02', t: 'Designed to convert', d: 'Pretty is the baseline. Every layout is shaped around a clear action and a reason to take it.' },
              { no: '03', t: 'Yours to keep', d: 'Clean, documented code and no lock-in. You own everything we make, top to bottom.' },
            ].map((p, i) => (
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
