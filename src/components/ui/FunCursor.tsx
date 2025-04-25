'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FunCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  // Generate random colors for the particles
  const colors = ['#3B82F6', '#EC4899', '#8B5CF6', '#10B981', '#F59E0B'];

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500 mix-blend-difference pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
      />

      {/* Cursor trail particles */}
      {isVisible &&
        Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-40"
            style={{ backgroundColor: colors[i % colors.length] }}
            initial={{ opacity: 0.7, scale: 0.5 }}
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: 0.8,
              delay: i * 0.05,
              ease: 'easeOut',
            }}
          />
        ))}
    </>
  );
};

export default FunCursor;
