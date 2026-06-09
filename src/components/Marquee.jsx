import React from 'react';

/**
 * Infinite horizontal marquee. The items array is duplicated so the
 * -50% translate loops seamlessly.
 */
const Marquee = ({ items = [], duration = 32, reverse = false, className = '' }) => {
  const run = [...items, ...items];
  return (
    <div
      className={`marquee${reverse ? ' marquee--reverse' : ''}${className ? ' ' + className : ''}`}
      style={{ '--marquee-dur': `${duration}s` }}
      aria-hidden="true"
    >
      <div className="marquee__track">
        {run.map((item, i) => (
          <span className="marquee__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
