import React from 'react';
import Reveal from '../Reveal';
import { SERVICE_AREA } from '../../content/site';

/** Local copy — the part of the page that answers "web design Calhoun GA". */
const ServiceArea = () => (
  <section className="section area">
    <div className="container">
      <div className="intro__grid">
        <Reveal>
          <p className="kicker" style={{ marginBottom: '1.75rem' }}>
            <span><span className="idx">05</span> — Where we work</span>
          </p>
          <h2 className="intro__statement">
            Serving Calhoun and <em>North Georgia.</em>
          </h2>
        </Reveal>
        <Reveal className="intro__body" delay={120}>
          <p>
            Calhoun Web Creations is based in Calhoun, Georgia (30701 and 30703),
            the seat of Gordon County, just off I-75 between Chattanooga and
            Atlanta. Most of the businesses I build for are a short drive away
            &mdash; Dalton, Rome, Cartersville, Adairsville, Chatsworth and the
            small towns in between &mdash; and I&rsquo;m glad to meet at your shop,
            your job site or a table downtown to plan the project in person.
          </p>
          <p>
            Not nearby? No problem. Plenty of projects run entirely over a video
            call and email, and the work is the same wherever you are.
          </p>
        </Reveal>
      </div>

      <Reveal as="ul" className="area__list" aria-label="Areas served" delay={200}>
        {SERVICE_AREA.map((town) => (
          <li key={town}>{town}</li>
        ))}
        <li>Anywhere, over a video call</li>
      </Reveal>
    </div>
  </section>
);

export default ServiceArea;
