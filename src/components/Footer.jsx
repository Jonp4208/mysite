import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone } from 'lucide-react';
import { OWNER, PHONE_DISPLAY, PHONE_TEL, EMAIL, CITY, SERVICE_AREA } from '../content/site';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="container">
        {/* CTA band */}
        <div className="foot__cta">
          <p className="kicker kicker--dot" style={{ color: 'var(--on-ink-soft)' }}>
            <span>Taking on new projects — {year}</span>
          </p>
          <h2 className="foot__big">
            Let&rsquo;s build something <em>worth&nbsp;visiting.</em>
          </h2>
          <Link to="/contact" className="btn btn--ghost-light btn--lg foot__cta-btn">
            Get a free quote <ArrowUpRight size={18} />
          </Link>
          <p className="foot__cta-call">
            or call{' '}
            <a href={`tel:${PHONE_TEL}`} aria-label={`Call Jonathon at ${PHONE_DISPLAY}`}>
              <Phone size={14} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
          </p>
        </div>

        <div className="foot__rule" />

        <div className="foot__grid">
          <div className="foot__brand">
            <span className="foot__mark">Calhoun Web Creations</span>
            <p className="foot__blurb">
              I design and build fast, good-looking websites and web apps for small
              businesses in Calhoun and North Georgia. One person, start to finish.
            </p>
          </div>

          <nav className="foot__col" aria-label="Pages">
            <h3>Pages</h3>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Work</Link>
            <Link to="/contact">Get a quote</Link>
          </nav>

          <div className="foot__col">
            <h3>Contact</h3>
            <a href={`tel:${PHONE_TEL}`} aria-label={`Call Jonathon at ${PHONE_DISPLAY}`}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <span className="foot__loc">{OWNER}, owner</span>
            <span className="foot__loc">{CITY}</span>
          </div>

          <div className="foot__col foot__area">
            <h3>Service area</h3>
            <p>{SERVICE_AREA.join(' · ')}</p>
          </div>
        </div>

        <div className="foot__bottom">
          <span>© {year} Calhoun Web Creations</span>
          <span className="foot__colophon">Set in Fraunces &amp; Hanken Grotesk · Built by hand</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
