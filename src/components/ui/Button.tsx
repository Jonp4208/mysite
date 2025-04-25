'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

const Button = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  fullWidth = false,
  icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
}: ButtonProps) => {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
    secondary: 'bg-gray-800 hover:bg-gray-900 text-white shadow-sm',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
  };

  // Disabled styles
  const disabledStyles = disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer';

  // Full width style
  const widthStyle = fullWidth ? 'w-full' : '';

  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabledStyles} ${widthStyle} ${className}`;

  // Button content with icon
  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>
  );

  // Fun animation properties
  const buttonAnimation = {
    whileHover: disabled ? {} : {
      scale: 1.05,
      rotate: variant === 'primary' ? [0, -1, 1, -1, 0] : 0,
      transition: {
        rotate: {
          duration: 0.3,
          ease: "easeInOut",
        },
        scale: {
          duration: 0.2,
        }
      }
    },
    whileTap: disabled ? {} : {
      scale: 0.95,
    },
  };

  // Render as link if href is provided
  if (href) {
    return (
      <motion.div {...buttonAnimation}>
        <Link href={href} className={buttonStyles} onClick={disabled ? (e) => e.preventDefault() : undefined}>
          {content}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...buttonAnimation}
    >
      {content}
    </motion.button>
  );
};

export default Button;
