import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_TEL, EMAIL } from '../content/site';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home', idx: '01' },
  { to: '/services', label: 'Services', idx: '02' },
  { to: '/portfolio', label: 'Work', idx: '03' },
  { to: '/contact', label: 'Contact', idx: '04' },
];

// Visible phone text must be contained in the accessible name (axe label-content-name-mismatch)
const CALL_LABEL = `Call Jonathon at ${PHONE_DISPLAY}`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__bar">
        <Link to="/" className="nav__brand">
          <span className="nav__mark">Calhoun</span>
          <span className="nav__sub">Web&nbsp;Creations<i aria-hidden="true">✺</i>Est.&nbsp;Calhoun&nbsp;GA</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              <span className="nav__link-idx">{l.idx}</span>
              <span className="nav__link-label">{l.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="nav__actions">
          <a href={`tel:${PHONE_TEL}`} className="nav__phone" aria-label={CALL_LABEL}>
            <Phone size={16} aria-hidden="true" />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <Link to="/contact" className="btn btn--primary nav__cta">Get a free quote</Link>
        </div>

        <a href={`tel:${PHONE_TEL}`} className="nav__phone-icon" aria-label="Call">
          <Phone size={20} aria-hidden="true" />
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-sheet"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div
        id="nav-sheet"
        className="nav__sheet"
        role="dialog"
        aria-label="Menu"
        aria-modal={open ? 'true' : undefined}
        aria-hidden={!open}
      >
        <div className="nav__sheet-inner">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="nav__sheet-link"
              style={{ '--i': i }}
              onClick={close}
              tabIndex={open ? 0 : -1}
            >
              <span className="nav__sheet-idx">{l.idx}</span>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--lg nav__sheet-cta" onClick={close} tabIndex={open ? 0 : -1}>
            Get a free quote
          </Link>
          <div className="nav__sheet-meta">
            <a href={`tel:${PHONE_TEL}`} aria-label={CALL_LABEL} tabIndex={open ? 0 : -1}>
              <Phone size={16} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>{EMAIL}</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
