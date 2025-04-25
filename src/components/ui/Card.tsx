'use client';

import { ReactNode, Children, isValidElement, cloneElement } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type CardProps = {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  image?: string;
  href?: string;
  className?: string;
  hoverEffect?: boolean;
  icon?: ReactNode;
};

const Card = ({
  title,
  subtitle,
  children,
  image,
  href,
  className = '',
  hoverEffect = true,
  icon,
}: CardProps) => {
  // Process children to remove any Link components when the card itself is a link
  const processChildren = (children: ReactNode): ReactNode => {
    return Children.map(children, child => {
      // If child is not a valid element, return it as is
      if (!isValidElement(child)) return child;

      // Check if the child is a Link or has a href prop
      const isLink = child.type === Link ||
                    (typeof child.type === 'function' && child.type.name === 'Button' && child.props.href);

      // If it's a link, extract its children
      if (isLink) {
        return processChildren(child.props.children);
      }

      // If it has children, process them recursively
      if (child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: processChildren(child.props.children)
        });
      }

      return child;
    });
  };

  const processedChildren = href ? processChildren(children) : children;

  const cardContent = (
    <>
      {image && (
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className={`p-6 ${!image ? 'rounded-t-lg' : ''}`}>
        {icon && (
          <motion.div
            whileHover={{ rotate: [0, -10, 10, -5, 5, 0], scale: 1.1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full inline-block"
          >
            {icon}
          </motion.div>
        )}
        {title && (
          <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
            {title}
          </h3>
        )}
        {subtitle && <p className="text-gray-600 mb-3">{subtitle}</p>}
        <div className="text-gray-700">{processedChildren}</div>
      </div>
    </>
  );

  const cardClasses = `bg-white rounded-lg shadow-lg overflow-hidden group relative ${className}`;

  // Fun card animations and effects
  const cardAnimations = {
    whileHover: hoverEffect ? {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    } : {},
    whileTap: { scale: 0.98 },
    transition: { duration: 0.3 }
  };

  if (href) {
    return (
      <motion.div
        {...cardAnimations}
        className={cardClasses}
      >
        {/* Fun decorative elements */}
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-400 rounded-full opacity-20 transform rotate-45"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-400 rounded-full opacity-20"></div>

        <Link href={href} className="block h-full relative z-10">
          {cardContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      {...cardAnimations}
      className={cardClasses}
    >
      {/* Fun decorative elements */}
      <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-400 rounded-full opacity-20 transform rotate-45"></div>
      <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-400 rounded-full opacity-20"></div>

      <div className="relative z-10">
        {cardContent}
      </div>
    </motion.div>
  );
};

export default Card;
