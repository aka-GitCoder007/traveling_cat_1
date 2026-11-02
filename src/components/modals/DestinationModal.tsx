import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Star, MapPin, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import type { Destination } from '../../types';
import { formatINR } from '../../utils/formatters';
import { Button } from '../common/Button';

interface DestinationModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (destination: Destination) => void;
}

export const DestinationModal: React.FC<DestinationModalProps> = ({
  destination,
  isOpen,
  onClose,
  onEnquire,
}) => {
  const navigate = useNavigate();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!isOpen || !destination) return null;

  const images = [destination.heroImage, ...(destination.gallery || [])];

  const handleViewFullPage = () => {
    onClose();
    navigate(`/destinations/${destination.slug}`);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-wanderly-dark border border-white/15 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-glass-hover text-white z-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white/80 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Visual Image & Thumbnails */}
          <div className="relative h-72 sm:h-96 w-full overflow-hidden rounded-t-3xl bg-neutral-900">
            <img
              src={images[activeImageIndex]}
              alt={destination.name}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/30 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
                {destination.category}
              </span>
              <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
                <Star className="w-3.5 h-3.5 text-wanderly-gold fill-wanderly-gold" />
                {destination.rating} ({destination.reviewsCount} reviews)
              </span>
            </div>

            {/* Bottom Title on Image */}
            <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-wanderly-gold uppercase tracking-widest font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{destination.country} • {destination.region}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {destination.name}
                </h3>
              </div>
              <div className="text-right sm:text-right">
                <span className="text-xs text-gray-400 block">Starting from</span>
                <span className="text-2xl font-bold text-wanderly-gold">
                  {formatINR(destination.startingPriceINR)}
                </span>
                <span className="text-xs text-gray-400 block font-normal">per traveler</span>
              </div>
            </div>
          </div>

          {/* Gallery Thumbnails */}
          {images.length > 1 && (
            <div className="px-6 py-3 bg-white/5 flex gap-2.5 overflow-x-auto border-b border-white/10 hide-scrollbar">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-wanderly-gold ring-2 ring-wanderly-gold/30 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Content Body */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Meta Key Details */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-wanderly-gold shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Suggested Duration</span>
                  <span className="text-sm font-semibold text-white">{destination.duration}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-wanderly-gold shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Best Travel Season</span>
                  <span className="text-sm font-semibold text-white">{destination.bestSeason}</span>
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-wanderly-gold shrink-0" />
                <div>
                  <span className="text-xs text-gray-400 block">Experience Level</span>
                  <span className="text-sm font-semibold text-white">Bespoke / Private</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-wanderly-gold font-bold mb-2">
                Destination Overview
              </h4>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {destination.fullDescription}
              </p>
            </div>

            {/* Curated Highlights */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-wanderly-gold font-bold mb-3">
                Curated Signature Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {destination.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-wanderly-gold shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary Preview */}
            <div>
              <h4 className="text-sm uppercase tracking-wider text-wanderly-gold font-bold mb-3">
                Sample Itinerary Snapshot
              </h4>
              <div className="space-y-2.5">
                {destination.itineraryPreview.slice(0, 3).map((item) => (
                  <div key={item.day} className="flex gap-3 text-sm p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="font-bold text-wanderly-gold shrink-0">Day {item.day}:</span>
                    <div>
                      <span className="font-semibold text-white">{item.title}</span>
                      <p className="text-gray-400 text-xs mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleViewFullPage}
                className="text-sm text-gray-300 hover:text-wanderly-gold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Full Comprehensive Guide</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={onClose}
                  className="flex-1 sm:flex-none"
                >
                  Close
                </Button>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onEnquire(destination);
                  }}
                  className="flex-1 sm:flex-none"
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Enquire About This Trip
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
