'use client';

import { motion } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  staggerChildren?: number;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
};

const AnimatedText = ({
  text,
  className = '',
  once = true,
  delay = 0,
  duration = 0.05,
  staggerChildren = 0.03,
  tag = 'h2',
}: AnimatedTextProps) => {
  // Split the text into words
  const words = text.split(' ');

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren, 
        delayChildren: delay,
      },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
        duration,
      },
    },
  };

  // Render the appropriate HTML tag
  const renderTag = () => {
    const props = {
      variants: container,
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once },
      className,
    };

    switch (tag) {
      case 'h1':
        return <motion.h1 {...props}>{renderWords()}</motion.h1>;
      case 'h2':
        return <motion.h2 {...props}>{renderWords()}</motion.h2>;
      case 'h3':
        return <motion.h3 {...props}>{renderWords()}</motion.h3>;
      case 'h4':
        return <motion.h4 {...props}>{renderWords()}</motion.h4>;
      case 'h5':
        return <motion.h5 {...props}>{renderWords()}</motion.h5>;
      case 'h6':
        return <motion.h6 {...props}>{renderWords()}</motion.h6>;
      case 'p':
        return <motion.p {...props}>{renderWords()}</motion.p>;
      case 'span':
        return <motion.span {...props}>{renderWords()}</motion.span>;
      default:
        return <motion.h2 {...props}>{renderWords()}</motion.h2>;
    }
  };

  // Render words with animation
  const renderWords = () => {
    return words.map((word, index) => (
      <motion.span
        key={index}
        variants={child}
        style={{ display: 'inline-block', marginRight: '0.25em', marginBottom: '0.15em' }}
      >
        {word}
      </motion.span>
    ));
  };

  return renderTag();
};

export default AnimatedText;
