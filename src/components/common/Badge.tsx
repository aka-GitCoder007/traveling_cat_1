import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'gold' | 'emerald' | 'glass';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  icon,
  variant = 'gold',
  className = '',
}) => {
  const variantStyles = {
    gold: 'bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30',
    emerald: 'bg-wanderly-emerald/15 text-wanderly-emerald border border-wanderly-emerald/30',
    glass: 'glass-dark text-white/90 border border-white/20',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest ${variantStyles[variant]} ${className}`}
    >
      {icon && <span className="text-wanderly-gold">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
