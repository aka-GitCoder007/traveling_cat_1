import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { buttonHover, buttonTap } from '../../utils/animations';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'gold' | 'emerald' | 'outline' | 'glass' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'gold',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer tracking-wide';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 shadow-lg',
  };

  const variantStyles = {
    gold: 'bg-wanderly-gold text-wanderly-dark font-semibold hover:bg-wanderly-gold-hover shadow-gold-glow/40 focus:ring-wanderly-gold',
    emerald: 'bg-wanderly-emerald text-white hover:bg-wanderly-emerald-hover shadow-emerald-glow/40 focus:ring-wanderly-emerald border border-wanderly-gold/20',
    outline: 'bg-transparent text-white border border-white/30 hover:border-wanderly-gold hover:text-wanderly-gold focus:ring-wanderly-gold',
    glass: 'glass-dark text-white hover:bg-white/10 hover:border-wanderly-gold/50 focus:ring-wanderly-gold',
    white: 'bg-white text-wanderly-dark font-semibold hover:bg-wanderly-offwhite hover:shadow-lg focus:ring-white',
  };

  return (
    <motion.button
      whileHover={disabled || isLoading ? undefined : buttonHover}
      whileTap={disabled || isLoading ? undefined : buttonTap}
      disabled={disabled || isLoading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon && iconPosition === 'left' ? (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">{icon}</span>
      ) : null}

      <span>{children}</span>

      {!isLoading && icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>
      )}
    </motion.button>
  );
};
