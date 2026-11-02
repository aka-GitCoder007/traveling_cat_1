import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, Calendar, MapPin, Users, Wallet, Compass, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TripPlanRequest } from '../../types';
import { formatDate } from '../../utils/formatters';
import { Button } from '../common/Button';

interface TripPlanSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: TripPlanRequest | null;
  onReset: () => void;
}

export const TripPlanSuccessModal: React.FC<TripPlanSuccessModalProps> = ({
  isOpen,
  onClose,
  data,
  onReset,
}) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#FFC857', '#1A4F36', '#226244', '#FFFFFF'],
        });
      } catch {
        // graceful fallback if canvas not available
      }
    }
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-wanderly-dark border border-wanderly-gold/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-glass-hover text-white z-10 overflow-hidden"
        >
          {/* Subtle gold glow behind header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-wanderly-gold/15 rounded-full blur-3xl pointer-events-none" />

          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon and Title */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-wanderly-emerald/80 border border-wanderly-gold/50 flex items-center justify-center text-wanderly-gold mx-auto mb-4 shadow-gold-glow/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-1">
              Custom Itinerary Generated
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Your Journey Awaits
            </h3>
            <p className="text-sm text-gray-300 mt-2">
              We have synthesized your travel preferences into an exclusive Wanderly itinerary proposal.
            </p>
          </div>

          {/* Personalized Summary Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3.5 mb-6 text-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-wanderly-gold" />
                <span>Destination</span>
              </div>
              <span className="font-semibold text-white text-base">{data.destination}</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4 text-wanderly-gold" />
                <span>Travel Dates</span>
              </div>
              <span className="font-medium text-white">
                {formatDate(data.departureDate)} — {formatDate(data.returnDate)}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4 text-wanderly-gold" />
                <span>Travelers</span>
              </div>
              <span className="font-medium text-white">{data.travelers} Traveler(s)</span>
            </div>

            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2 text-gray-400">
                <Compass className="w-4 h-4 text-wanderly-gold" />
                <span>Travel Style</span>
              </div>
              <span className="font-medium text-wanderly-gold">{data.travelType}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-gray-400">
                <Wallet className="w-4 h-4 text-wanderly-gold" />
                <span>Budget Tier</span>
              </div>
              <span className="font-medium text-white">{data.budgetRange}</span>
            </div>
          </div>

          {/* Demo Note */}
          <div className="p-3.5 rounded-xl bg-wanderly-emerald/20 border border-wanderly-emerald/40 text-xs text-gray-300 mb-6">
            <p className="flex items-center gap-1.5 font-semibold text-wanderly-gold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Steps with Wanderly Concierge</span>
            </p>
            This demo trip proposal has been recorded in your local browser session. In live operations, a senior destination specialist would review flight routes, villa allocations, and bespoke privileges before presenting your digital day-by-day dossier.
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                onClose();
                onReset();
              }}
              className="flex-1"
            >
              Plan Another Trip
            </Button>
            <Button
              variant="gold"
              size="md"
              onClick={onClose}
              className="flex-1"
            >
              Done & Explore Site
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
