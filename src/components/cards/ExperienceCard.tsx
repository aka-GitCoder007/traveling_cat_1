import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles, Landmark, Heart } from 'lucide-react';
import type { Experience } from '../../types';

interface ExperienceCardProps {
  experience: Experience;
  onSelect: (exp: Experience) => void;
  isActive?: boolean;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onSelect,
  isActive = false,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6" />;
      case 'Heart':
        return <Heart className="w-6 h-6" />;
      default:
        return <Compass className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(experience)}
      className={`group p-6 sm:p-7 rounded-3xl border transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-wanderly-emerald/30 border-wanderly-gold shadow-gold-glow/20'
          : 'bg-white/5 border-white/10 hover:border-wanderly-gold/40 hover:bg-white/10'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-wanderly-emerald/70 border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold group-hover:scale-110 transition-transform duration-300">
          {getIcon(experience.iconName)}
        </div>
        <span className="text-xl font-mono font-bold text-wanderly-gold/50 group-hover:text-wanderly-gold transition-colors">
          {experience.number}
        </span>
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-wanderly-gold transition-colors">
        {experience.title}
      </h3>

      <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-3">
        {experience.description}
      </p>

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-wanderly-gold group-hover:underline">
        <span>Explore Experience</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </motion.div>
  );
};
