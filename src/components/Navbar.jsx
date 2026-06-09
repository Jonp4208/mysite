import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'Index', idx: '01' },
  { to: '/services', label: 'Services', idx: '02' },
  { to: '/portfolio', label: 'Work', idx: '03' },
  { to: '/contact', label: 'Contact', idx: '04' },
];

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
        <Link to="/" className="nav__brand" aria-label="Calhoun Web Creations — home">
          <span className="nav__mark">Calhoun</span>
          <span className="nav__sub">Web&nbsp;Creations<i>✺</i>Est.&nbsp;Calhoun&nbsp;GA</span>
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

        <Link to="/contact" className="btn btn--primary nav__cta">Start a project</Link>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div className="nav__sheet" role="dialog" aria-modal="true">
        <div className="nav__sheet-inner">
          {links.map((l, i) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className="nav__sheet-link"
              style={{ '--i': i }}
              onClick={close}
            >
              <span className="nav__sheet-idx">{l.idx}</span>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--lg nav__sheet-cta" onClick={close}>Start a project</Link>
          <div className="nav__sheet-meta">
            <a href="mailto:jonp4208@gmail.com">jonp4208@gmail.com</a>
            <a href="tel:+14044254758">404 · 425 · 4758</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
