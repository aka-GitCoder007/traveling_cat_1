import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Star, MapPin, Check, ArrowRight, Sparkles } from 'lucide-react';
import type { TravelPackage } from '../../types';
import { formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';

interface PackageCardProps {
  pkg: TravelPackage;
  onViewDetails: (pkg: TravelPackage) => void;
  onEnquire: (pkg: TravelPackage) => void;
}

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  onViewDetails,
  onEnquire,
}) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-wanderly-dark border border-white/10 rounded-3xl overflow-hidden shadow-glass-sm hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Image Section */}
      <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
            {pkg.category}
          </span>
          <div className="glass-dark px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
            <Star className="w-3.5 h-3.5 text-wanderly-gold fill-wanderly-gold" />
            <span>{pkg.rating}</span>
            <span className="text-[10px] text-gray-400">({pkg.reviewCount})</span>
          </div>
        </div>

        {/* Floating Duration pill */}
        <div className="absolute bottom-4 left-4 glass-dark px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1.5 border border-white/15">
          <Clock className="w-3.5 h-3.5 text-wanderly-gold" />
          <span>{pkg.duration}</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-white">
        <div>
          <div className="flex items-center gap-1 text-xs text-wanderly-gold uppercase tracking-widest font-semibold mb-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>{pkg.country}</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-wanderly-gold transition-colors duration-200">
            {pkg.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed">
            {pkg.shortDescription}
          </p>
        </div>

        {/* Highlights Preview */}
        <div className="space-y-1.5 pt-2 border-t border-white/10">
          <span className="text-[11px] uppercase tracking-wider text-wanderly-gold font-bold block">
            Package Highlights:
          </span>
          {pkg.highlights.slice(0, 2).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
              <Check className="w-3.5 h-3.5 text-wanderly-gold shrink-0 mt-0.5" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>

        {/* Pricing Info */}
        <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-wanderly-gold">
                {formatINR(pkg.startingPriceINR)}
              </span>
              {pkg.originalPriceINR && (
                <span className="text-xs text-gray-400 line-through">
                  {formatINR(pkg.originalPriceINR)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-gray-400 block">
              Starting price per guest • Inclusive of all taxes
            </span>
          </div>
        </div>

        {/* Dual Actions: View Details & Enquire Now */}
        <div className="grid grid-cols-2 gap-2.5 pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(pkg)}
            className="w-full text-xs"
            icon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Details
          </Button>

          <Button
            variant="gold"
            size="sm"
            onClick={() => onEnquire(pkg)}
            className="w-full text-xs"
            icon={<Sparkles className="w-3.5 h-3.5" />}
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
