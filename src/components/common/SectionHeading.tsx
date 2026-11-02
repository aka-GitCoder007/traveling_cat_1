import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  theme = 'dark',
  className = '',
}) => {
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[align];

  const titleColor = theme === 'dark' ? 'text-white' : 'text-wanderly-dark';
  const subtitleColor = theme === 'dark' ? 'text-gray-300' : 'text-wanderly-muted';

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={`flex flex-col ${alignClass} max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 mb-4">
          {badgeIcon && <span>{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] ${titleColor}`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg md:text-xl font-normal leading-relaxed ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
