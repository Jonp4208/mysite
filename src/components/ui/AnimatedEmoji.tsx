'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

type AnimatedEmojiProps = {
  emoji: string;
  size?: string;
  delay?: number;
  duration?: number;
  className?: string;
  hoverEffect?: boolean;
};

const AnimatedEmoji = ({
  emoji,
  size = '2rem',
  delay = 0,
  duration = 2,
  className = '',
  hoverEffect = true,
}: AnimatedEmojiProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation after delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  // Random animation for initial appearance
  const initialAnimation = {
    y: [20, 0],
    rotate: [Math.random() * 20 - 10, 0],
    scale: [0, 1],
    opacity: [0, 1],
  };

  // Hover animation
  const hoverAnimation = hoverEffect
    ? {
        y: -5,
        rotate: [0, -10, 10, -5, 5, 0],
        scale: 1.2,
        transition: {
          rotate: {
            duration: 0.5,
            ease: 'easeInOut',
            repeat: 0,
          },
        },
      }
    : {};

  // Continuous floating animation
  const floatingAnimation = {
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: duration,
        ease: 'easeInOut',
      },
      rotate: {
        repeat: Infinity,
        duration: duration * 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      style={{ fontSize: size, display: 'inline-block' }}
      initial={{ opacity: 0, y: 20, scale: 0 }}
      animate={isAnimating ? { ...initialAnimation, ...floatingAnimation } : {}}
      whileHover={hoverAnimation}
      transition={{ duration: 0.5 }}
    >
      {emoji}
    </motion.span>
  );
};

export default AnimatedEmoji;
