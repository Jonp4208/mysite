import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import Reveal from '../components/Reveal';
import './NotFound.css';

/**
 * 404 page. Prerendered to dist/404.html via the explicit `404` route
 * (Vercel serves that file for unknown paths); the `*` route renders the
 * same component for client-side navigation to a bad URL.
 */
const NotFound = () => (
  <div className="notfound-page">
    <SEO
      path="/404"
      title="Page not found"
      description="That page has moved or never existed. Head back to Calhoun Web Creations or get a free quote."
      noindex
    />

    <header className="phead nf">
      <div className="container">
        <Reveal className="phead__top">
          <span>( 404 — Page not found )</span>
          <span>Calhoun, GA</span>
        </Reveal>

        <div className="nf__body">
          <span className="nf__numeral" aria-hidden="true">404</span>
          <Reveal mask className="phead__title"><h1>Lost the <em>trail.</em></h1></Reveal>
          <Reveal className="phead__lead" delay={150}>
            This page has moved or never existed. The rest of the site is right where you left it.
          </Reveal>
          <Reveal className="nf__actions" delay={250}>
            <Link to="/" className="btn btn--primary">Back home</Link>
            <Link to="/contact" className="link link--accent">
              Get a free quote <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </div>
    </header>
  </div>
);

export default NotFound;
