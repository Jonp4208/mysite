import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import pinkLabImg from '../assets/pink_lab.png';
import forgeTrainerImg from '../assets/forge_trainer.png';
import ldGrowthImg from '../assets/ld_growth.png';
import tnuFitnessImg from '../assets/tnu_fitness.jpeg';
import './Portfolio.css';

const projects = [
  {
    no: '01',
    title: 'The Pink Label',
    cat: 'E-Commerce / Fashion',
    url: 'https://pinklab.vercel.app/',
    host: 'pinklab.vercel.app',
    lead: 'A boutique fashion label, moved from the sidewalk to the screen — modern styles with a southern twist.',
    challenge: 'The client needed an elegant transition from a brick-and-mortar boutique into a scalable, easy-to-run online shopping experience.',
    solution: 'A responsive, fast-loading storefront that showcases each collection and quietly nudges every visit toward a higher conversion rate.',
    tags: ['E-Commerce', 'Fashion', 'React'],
    image: pinkLabImg,
  },
  {
    no: '02',
    title: 'Forge Trainer',
    cat: 'SaaS / Software',
    url: 'https://forge-trainer.com/',
    host: 'forge-trainer.com',
    lead: 'One dashboard to run an entire coaching business — clients, programming and progress, finally in one place.',
    challenge: 'Trainers were juggling spreadsheets, texts and half a dozen apps, leaking revenue and quietly losing clients to the chaos.',
    solution: 'An all-in-one platform that became the single source of truth for scheduling, custom workout programming and client analytics.',
    tags: ['SaaS', 'Dashboard', 'Web App'],
    image: forgeTrainerImg,
  },
  {
    no: '03',
    title: 'LD Growth',
    cat: 'Lead Gen / Corporate',
    url: 'https://ld-growth.com/',
    host: 'ld-growth.com',
    lead: 'A B2B growth agency that needed its own site to finally start closing high-ticket traffic.',
    challenge: 'A dated, confusing layout was failing to turn expensive B2B visitors into booked consultations.',
    solution: 'A conversion-focused marketing site with clear value propositions, real trust signals and integrated scheduling front and centre.',
    tags: ['Lead Gen', 'Corporate', 'SEO'],
    image: ldGrowthImg,
  },
  {
    no: '04',
    title: 'TNU Fitness',
    cat: 'Local Business / Fitness',
    url: 'https://www.tnufitness.com/',
    host: 'tnufitness.com',
    lead: 'A 24/7 gym in Calhoun, built to recruit — high-energy, community-first, and open for business around the clock.',
    challenge: 'A growing gym needed a site with the intensity to match the room — one that turns local searches into booked tours and signups, not just a list of hours.',
    solution: 'A bold, conversion-driven build with membership tiers, coaching, a member portal and lead capture throughout, all wrapped in the brand’s electric identity.',
    tags: ['Local Business', 'Memberships', 'React'],
    image: tnuFitnessImg,
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <SEO
        title="Selected Work"
        description="A look at recent Calhoun Web Creations projects — custom e-commerce storefronts, SaaS dashboards and conversion-focused corporate sites."
      />

      {/* HEADER */}
      <header className="phead">
        <div className="container">
          <Reveal className="phead__top">
            <span>( Selected Work — 2024/25 )</span>
            <span>04 Projects</span>
          </Reveal>
          <Reveal mask className="phead__title"><h1>The <em>proof.</em></h1></Reveal>
          <Reveal className="phead__lead" delay={150}>
            A studio is only as good as what it ships. Here are a few businesses we&rsquo;ve
            helped look sharper, load faster and sell more.
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
                  <img src={p.image} alt={`${p.title} website`} loading="lazy" />
                </div>
                <span className="case__live">Live site <ArrowUpRight size={14} /></span>
              </a>

              <div className="case__body">
                <div className="case__col case__col--lead">
                  <h4>Overview</h4>
                  <p>{p.lead}</p>
                </div>
                <div className="case__col">
                  <h4>The Challenge</h4>
                  <p>{p.challenge}</p>
                  <h4 style={{ marginTop: '1.75rem' }}>The Solution</h4>
                  <p>{p.solution}</p>
                </div>
                <div className="case__col case__meta">
                  <h4>Stack</h4>
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
