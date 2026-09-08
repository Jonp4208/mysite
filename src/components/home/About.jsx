import React, { useCallback, useState } from 'react';
import { Phone } from 'lucide-react';
import Reveal from '../Reveal';
import { OWNER, PHONE_DISPLAY, PHONE_TEL, EMAIL, YEARS_EXPERIENCE } from '../../content/site';

/**
 * The person behind the business. The photo slot expects /jonathon.jpg in
 * public/; until that exists it falls back to a serif "JP" monogram so the
 * layout never shows a broken image.
 */
const About = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  // If the image already 404'd before hydration, onError never fires —
  // so the ref callback checks the natural size once the node is attached.
  const checkPhoto = useCallback((img) => {
    if (img && img.complete && img.naturalWidth === 0) setPhotoFailed(true);
  }, []);

  return (
    <section className="section--tight about">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__photo-col">
            <div className={`about__photo${photoFailed ? ' about__photo--fallback' : ''}`}>
              {!photoFailed && (
                <img
                  ref={checkPhoto}
                  src="/jonathon.jpg"
                  alt={`${OWNER}, web designer in Calhoun, GA`}
                  loading="lazy"
                  decoding="async"
                  onError={() => setPhotoFailed(true)}
                />
              )}
              {photoFailed && (
                <div className="about__monogram" aria-hidden="true">JP</div>
              )}
              <span className="about__photo-tag">{OWNER} · Calhoun, GA</span>
            </div>
          </Reveal>

          <Reveal className="about__body" delay={120}>
            <p className="kicker" style={{ marginBottom: '1.5rem' }}>
              <span><span className="idx">04</span> — The person behind it</span>
            </p>
            <h2 className="intro__statement">Hi, I&rsquo;m <em>Jonathon.</em></h2>
            <div className="about__text">
              <p>
                I&rsquo;ve spent {YEARS_EXPERIENCE}+ years designing and building websites,
                and I run Calhoun Web Creations from right here in Calhoun. When you
                hire me, you work with me &mdash; no account managers, no offshore team,
                no hand-offs. I design it, I build it, I answer the phone.
              </p>
              <p>
                Every project gets a fixed, written quote before any work starts. When
                it launches, the domain, the hosting and the code are in your name.
                You own all of it.
              </p>
              <p>
                Want to talk it through? Call{' '}
                <a href={`tel:${PHONE_TEL}`} className="about__inline-link">{PHONE_DISPLAY}</a>{' '}
                or email <a href={`mailto:${EMAIL}`} className="about__inline-link">{EMAIL}</a>.
              </p>
            </div>
            <a href={`tel:${PHONE_TEL}`} className="btn btn--ink">
              <Phone size={16} /> Call Jonathon
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
