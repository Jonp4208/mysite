import React from 'react';
import Reveal from '../Reveal';
import { TESTIMONIALS } from '../../content/site';

/**
 * Client quotes. Renders nothing until TESTIMONIALS in src/content/site.js
 * has real entries — never show invented proof.
 */
const Testimonials = () => {
  if (!TESTIMONIALS.length) return null;

  return (
    <section className="section--tight testimonials">
      <div className="container">
        <Reveal>
          <p className="kicker" style={{ marginBottom: '1.5rem' }}>
            <span><span className="idx">02</span> — What clients say</span>
          </p>
          <h2 className="h-md">In their own words.</h2>
        </Reveal>
        <div className="quotes__grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={`${t.name}-${t.business}`} as="figure" className="quote" delay={i * 90}>
              <blockquote className="quote__text">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="quote__by">
                <span className="quote__name">{t.name}</span>
                <span className="quote__biz">{t.business}{t.town ? ` · ${t.town}` : ''}</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
