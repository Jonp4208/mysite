import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="container">
        {/* CTA band */}
        <div className="foot__cta">
          <p className="kicker kicker--dot" style={{ color: 'var(--on-ink-soft)' }}>
            <span>Available for new work — {year}</span>
          </p>
          <h2 className="foot__big">
            Let&rsquo;s build something <em>worth&nbsp;visiting.</em>
          </h2>
          <Link to="/contact" className="btn btn--ghost-light btn--lg foot__cta-btn">
            Start a project <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="foot__rule" />

        <div className="foot__grid">
          <div className="foot__brand">
            <span className="foot__mark">Calhoun Web Creations</span>
            <p className="foot__blurb">
              A design &amp; development studio building fast, characterful websites and
              applications for businesses that refuse to look like everyone else.
            </p>
          </div>

          <nav className="foot__col" aria-label="Pages">
            <h3>Pages</h3>
            <Link to="/">Index</Link>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Selected Work</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          <div className="foot__col">
            <h3>Contact</h3>
            <a href="mailto:jonp4208@gmail.com">jonp4208@gmail.com</a>
            <a href="tel:+14044254758">404 · 425 · 4758</a>
            <span className="foot__loc">Calhoun, Georgia</span>
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
