import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../Reveal';
import { PRICING } from '../../content/site';

const money = (n) => `$${n.toLocaleString('en-US')}`;

/** Three fixed-price starting points, pulled from src/content/site.js. */
const Pricing = () => (
  <section className="section plans" id="pricing">
    <div className="container">
      <Reveal>
        <p className="kicker" style={{ marginBottom: '1.5rem' }}>
          <span><span className="idx">03</span> — Straight answers on price</span>
        </p>
        <h2 className="h-md plans__title">
          Know what it costs <em>before</em> you call.
        </h2>
      </Reveal>

      <div className="plans__grid">
        {PRICING.map((p, i) => (
          <Reveal key={p.name} className={`plan${p.featured ? ' plan--featured' : ''}`} delay={i * 90}>
            <h3 className="plan__name">{p.name}</h3>
            <p className="plan__from">
              <span className="plan__from-label">from</span>
              <span className="plan__amount">{money(p.from)}</span>
            </p>
            <p className="plan__blurb">{p.blurb}</p>
            <ul className="plan__list">
              {p.includes.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={2.25} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="plans__foot" delay={120}>
        <p className="plans__note">
          Every quote is fixed-price and written down before work starts.
          Hosting and domain are yours, not rented from us.
        </p>
        <Link to="/contact" className="btn btn--primary">
          Get a free quote <ArrowUpRight size={18} />
        </Link>
      </Reveal>
    </div>
  </section>
);

export default Pricing;
