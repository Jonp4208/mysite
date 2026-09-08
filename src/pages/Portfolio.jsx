import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import { PHONE_DISPLAY, PHONE_TEL } from '../content/site';
import './Portfolio.css';

const projects = [
  {
    no: '01',
    title: 'TNU Fitness',
    cat: 'Local Business / Fitness · Calhoun, GA',
    url: 'https://www.tnufitness.com/',
    host: 'tnufitness.com',
    lead: 'A 24/7 gym right here in Calhoun, built to recruit — high-energy, community-first, and open for business around the clock.',
    challenge: 'A growing gym needed a site with the intensity to match the room — one that turns local searches into booked tours and signups, not just a list of hours.',
    solution: 'A bold, conversion-driven build with membership tiers, coaching, a member portal and lead capture throughout, all wrapped in the brand’s electric identity.',
    outcome: 'Membership tiers, coaching and a member portal, all with lead capture.',
    tags: ['Local Business', 'Memberships', 'Member portal'],
    image: '/work/tnu-fitness.webp',
  },
  {
    no: '02',
    title: 'The Pink Label',
    cat: 'Online Store / Fashion',
    url: 'https://pinklab.vercel.app/',
    host: 'pinklab.vercel.app',
    lead: 'A boutique fashion label, moved from the sidewalk to the screen — modern styles with a southern twist.',
    challenge: 'The owner needed an elegant move from a brick-and-mortar boutique into an online shop that’s easy to run and can grow with the business.',
    solution: 'A responsive, fast-loading storefront that showcases each collection and quietly nudges every visit toward a purchase.',
    outcome: 'Brick-and-mortar boutique now sells online with a fast, mobile-first storefront.',
    tags: ['Online Store', 'Fashion', 'Mobile-first'],
    image: '/work/pink-label.webp',
  },
  {
    no: '03',
    title: 'LD Growth',
    cat: 'Lead Generation / Consulting',
    url: 'https://ld-growth.com/',
    host: 'ld-growth.com',
    lead: 'A business growth agency that needed its own site to finally start turning visitors into booked consultations.',
    challenge: 'A dated, confusing layout was failing to turn expensive visitors into booked consultations.',
    solution: 'A conversion-focused site with a clear pitch, real trust signals and consultation booking front and centre on every page.',
    outcome: 'Consultation booking placed front and centre on every page.',
    tags: ['Lead Generation', 'Booking', 'SEO'],
    image: '/work/ld-growth.webp',
  },
  {
    no: '04',
    title: 'Forge Trainer',
    cat: 'Custom Web App / Coaching',
    url: 'https://forge-trainer.com/',
    host: 'forge-trainer.com',
    lead: 'One dashboard to run an entire coaching business — clients, programming and progress, finally in one place.',
    challenge: 'Trainers were juggling spreadsheets, texts and half a dozen apps, leaking revenue and quietly losing clients to the chaos.',
    solution: 'An all-in-one platform that became the single source of truth for scheduling, custom workout programming and client progress.',
    outcome: 'Spreadsheets, texts and six apps replaced by one dashboard.',
    tags: ['Web App', 'Dashboard', 'Scheduling'],
    image: '/work/forge-trainer.webp',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <SEO
        path="/portfolio"
        title="Web Design Portfolio · Calhoun, GA"
        description="Recent websites, online stores and web apps built for businesses in Calhoun, GA and beyond by Calhoun Web Creations."
      />

      {/* HEADER */}
      <header className="phead">
        <div className="container">
          <Reveal className="phead__top">
            <span>( Recent Work — 2024/25 )</span>
            <span>{String(projects.length).padStart(2, '0')} Projects</span>
          </Reveal>
          <Reveal mask className="phead__title"><h1>The <em>proof.</em></h1></Reveal>
          <Reveal className="phead__lead" delay={150}>
            Real businesses, real sites. Here are a few I&rsquo;ve designed and built — including
            one right here in Calhoun.
          </Reveal>
        </div>
      </header>

      {/* CASES */}
      <section className="section--tight" style={{ paddingTop: 0 }}>
        <div className="container">
          {projects.map((p) => (
            <Reveal key={p.no} className="case">
              <div className="case__top">
                <span className="case__no">{p.no}</span>
                <h2 className="case__title">{p.title}</h2>
                <span className="case__cat">{p.cat}</span>
              </div>

              <a className="case__plate" href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} — open live site`}>
                <div className="case__chrome">
                  <i /><i /><i />
                  <span className="url">{p.host}</span>
                </div>
                <div className="case__scroll">
                  <img src={p.image} alt={`${p.title} website`} loading="lazy" decoding="async" />
                </div>
                <span className="case__live">Live site <ArrowUpRight size={14} /></span>
              </a>

              <div className="case__body">
                <div className="case__col case__col--lead">
                  <h4>Overview</h4>
                  <p>{p.lead}</p>
                  <div className="case__result">
                    <span className="case__result-kicker">Result</span>
                    <p className="case__result-text">{p.outcome}</p>
                  </div>
                </div>
                <div className="case__col">
                  <h4>The Challenge</h4>
                  <p>{p.challenge}</p>
                  <h4 style={{ marginTop: '1.75rem' }}>What I built</h4>
                  <p>{p.solution}</p>
                </div>
                <div className="case__col case__meta">
                  <h4>Type</h4>
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}

          {/* CLOSING CTA */}
          <Reveal className="case-cta">
            <p className="kicker kicker--dot"><span>Yours next?</span></p>
            <h2 className="case-cta__title">Want a site like <em>these?</em></h2>
            <p className="case-cta__lead">
              Tell me about your business and I&rsquo;ll reply within one business day with a
              fixed price and a timeline.
            </p>
            <div className="case-cta__actions">
              <Link to="/contact" className="btn btn--primary btn--lg">
                Get a free quote <ArrowUpRight size={18} />
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="case-cta__phone" aria-label={`Call Jonathon at ${PHONE_DISPLAY}`}>
                <Phone size={16} aria-hidden="true" />
                or call {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
