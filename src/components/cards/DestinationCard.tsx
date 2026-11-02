import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Star, MapPin, ArrowUpRight } from 'lucide-react';
import type { Destination } from '../../types';
import { formatINR } from '../../utils/formatters';

interface DestinationCardProps {
  destination: Destination;
  onExplore: (dest: Destination) => void;
  className?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onExplore,
  className = '',
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onExplore(destination)}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 shadow-glass-sm hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between cursor-pointer ${className}`}
    >
      {/* Background Image with Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={destination.heroImage}
          alt={destination.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Layered dark gradients for editorial depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/40 to-black/20" />
        <div className="absolute inset-0 bg-wanderly-dark/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      {/* Top Badges */}
      <div className="relative z-10 p-5 sm:p-6 flex items-start justify-between">
        <span className="glass-dark px-3 py-1.5 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
          {destination.category}
        </span>
        <div className="glass-dark px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
          <Star className="w-3.5 h-3.5 text-wanderly-gold fill-wanderly-gold" />
          <span>{destination.rating}</span>
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-5 sm:p-6 text-white space-y-3">
        {/* Country and Destination Name */}
        <div>
          <div className="flex items-center gap-1 text-xs text-wanderly-gold uppercase tracking-widest font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{destination.country}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-wanderly-gold transition-colors duration-300">
            {destination.name}
          </h3>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
          {destination.shortDescription}
        </p>

        {/* Meta badges: Season & Duration */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-300 pt-1 border-t border-white/10">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-wanderly-gold" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-wanderly-gold" />
            <span className="truncate max-w-[140px]">{destination.bestSeason.split(' ')[0]} Season</span>
          </div>
        </div>

        {/* Price & CTA Action */}
        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-[11px] text-gray-400 block uppercase tracking-wider">From</span>
            <span className="text-lg sm:text-xl font-bold text-wanderly-gold">
              {formatINR(destination.startingPriceINR)}
            </span>
          </div>

          <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-wanderly-gold text-white group-hover:text-wanderly-dark flex items-center justify-center transition-all duration-300 shadow-glass">
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
