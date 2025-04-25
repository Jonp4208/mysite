'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ScrollAnimationProps = {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
};

const ScrollAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  distance = 50,
  once = true,
  className = '',
}: ScrollAnimationProps) => {
  // Define animation variants based on direction
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: distance, opacity: 0 };
      case 'down':
        return { y: -distance, opacity: 0 };
      case 'left':
        return { x: distance, opacity: 0 };
      case 'right':
        return { x: -distance, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
