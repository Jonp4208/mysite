import React, { useEffect, useRef, useState } from 'react';

/**
 * Scroll-triggered reveal. Adds `is-in` once the element scrolls into view.
 * `mask` swaps to the clip-reveal variant for big display lines.
 */
const Reveal = ({ as: Tag = 'div', mask = false, delay = 0, className = '', style, children, ...rest }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base = mask ? 'reveal-mask' : 'reveal';
  return (
    <Tag
      ref={ref}
      className={`${base}${shown ? ' is-in' : ''}${className ? ' ' + className : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
