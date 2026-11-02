import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Compass, Wallet, MapPin, Sparkles, RotateCcw } from 'lucide-react';
import { toast } from 'sonner';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';
import { TripPlanSuccessModal } from '../modals/TripPlanSuccessModal';
import type { TripPlanRequest } from '../../types';

const travelTypes = [
  'Adventure',
  'Luxury',
  'Honeymoon',
  'Family',
  'Cultural',
  'Relaxation',
];

const budgetRanges = [
  'Under ₹25,000',
  '₹25,000–₹50,000',
  '₹50,000–₹1,00,000',
  '₹1,00,000+',
];

const popularDestinations = [
  'Swiss Alps, Switzerland',
  'Bali, Indonesia',
  'Kyoto, Japan',
  'Santorini, Greece',
  'Maldives Atolls',
  'Kashmir Valley, India',
  'Patagonia, Argentina',
  'Dubai, UAE',
];

const TODAY_STR = new Date().toISOString().split('T')[0];

export const TripPlannerSection: React.FC = () => {
  const initialForm = {
    destination: 'Swiss Alps, Switzerland',
    departureDate: '',
    returnDate: '',
    travelers: 2,
    travelType: 'Luxury',
    budgetRange: '₹1,00,000+',
    notes: '',
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState<TripPlanRequest | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.destination.trim()) {
      errs.destination = 'Please specify your intended destination.';
    }

    if (!formData.departureDate) {
      errs.departureDate = 'Please select your departure date.';
    } else if (formData.departureDate < TODAY_STR) {
      errs.departureDate = 'Departure date cannot be in the past.';
    }

    if (!formData.returnDate) {
      errs.returnDate = 'Please select your return date.';
    } else if (formData.departureDate && formData.returnDate < formData.departureDate) {
      errs.returnDate = 'Return date cannot precede departure date.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please review the dates and required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const planRequest: TripPlanRequest = {
        id: `plan_${Date.now()}`,
        destination: formData.destination,
        departureDate: formData.departureDate,
        returnDate: formData.returnDate,
        travelers: Number(formData.travelers),
        travelType: formData.travelType,
        budgetRange: formData.budgetRange,
        notes: formData.notes,
        submittedAt: new Date().toISOString(),
      };

      // Store in localStorage
      const existing = JSON.parse(localStorage.getItem('wanderly_tripplans') || '[]');
      existing.unshift(planRequest);
      localStorage.setItem('wanderly_tripplans', JSON.stringify(existing));

      setIsSubmitting(false);
      setSuccessData(planRequest);
      toast.success('Your bespoke trip plan has been generated!');
    }, 600);
  };

  const handleReset = () => {
    setFormData(initialForm);
    setErrors({});
  };

  return (
    <section
      id="trip-planner"
      className="py-24 sm:py-32 bg-wanderly-emerald/90 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFC857_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-wanderly-gold/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Interactive Concierge"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Your Next Adventure Starts Here"
          subtitle="Tell us what you're dreaming of. We'll help you make it happen."
          align="center"
          theme="dark"
        />

        {/* Trip Planner Glassmorphic Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 glass-dark p-6 sm:p-10 lg:p-12 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Field: Destination */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Target Destination *
                </span>
                <span className="text-[11px] text-gray-400 font-normal">Choose popular or type custom</span>
              </label>

              <div className="relative">
                <input
                  type="text"
                  required
                  list="popular-destinations"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Swiss Alps, Switzerland or Bali, Indonesia"
                  className={`w-full bg-white/10 border ${errors.destination ? 'border-red-400' : 'border-white/20'
                    } rounded-2xl px-5 py-3.5 text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold text-sm sm:text-base transition-colors`}
                />
                <datalist id="popular-destinations">
                  {popularDestinations.map((d, i) => (
                    <option key={i} value={d} />
                  ))}
                </datalist>
              </div>
              {errors.destination && (
                <p className="text-red-400 text-xs mt-1.5">{errors.destination}</p>
              )}
            </div>

            {/* Field: Departure & Return Dates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Departure Date *
                </label>
                <input
                  type="date"
                  required
                  min={TODAY_STR}
                  value={formData.departureDate}
                  onChange={(e) => {
                    setFormData({ ...formData, departureDate: e.target.value });
                    if (errors.departureDate) setErrors({ ...errors, departureDate: '' });
                  }}
                  className={`w-full bg-white/10 border ${errors.departureDate ? 'border-red-400' : 'border-white/20'
                    } rounded-2xl px-5 py-3.5 text-white text-sm sm:text-base focus:outline-none focus:border-wanderly-gold transition-colors`}
                />
                {errors.departureDate && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.departureDate}</p>
                )}
              </div>

              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Return Date *
                </label>
                <input
                  type="date"
                  required
                  min={formData.departureDate || TODAY_STR}
                  value={formData.returnDate}
                  onChange={(e) => {
                    setFormData({ ...formData, returnDate: e.target.value });
                    if (errors.returnDate) setErrors({ ...errors, returnDate: '' });
                  }}
                  className={`w-full bg-white/10 border ${errors.returnDate ? 'border-red-400' : 'border-white/20'
                    } rounded-2xl px-5 py-3.5 text-white text-sm sm:text-base focus:outline-none focus:border-wanderly-gold transition-colors`}
                />
                {errors.returnDate && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.returnDate}</p>
                )}
              </div>
            </div>

            {/* Field: Number of Travelers */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                Number of Travelers
              </label>
              <div className="grid grid-cols-5 gap-2 sm:gap-3">
                {[1, 2, 3, 4, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelers: num })}
                    className={`py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${formData.travelers === num
                        ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/40'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                      }`}
                  >
                    {num === 6 ? '6+' : `${num} ${num === 1 ? 'Guest' : 'Guests'}`}
                  </button>
                ))}
              </div>
            </div>

            {/* Field: Travel Type */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Travel Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {travelTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, travelType: type })}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${formData.travelType === type
                        ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/30'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/10'
                      }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Field: Budget Range */}
            <div>
              <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-2 flex items-center gap-1.5">
                <Wallet className="w-4 h-4" />
                Estimated Budget Range (INR)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {budgetRanges.map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setFormData({ ...formData, budgetRange: range })}
                    className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${formData.budgetRange === range
                        ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/30'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20 border border-white/10'
                      }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Actions: Submit & Reset */}
            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleReset}
                className="text-xs uppercase tracking-wider text-gray-300 hover:text-wanderly-gold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Selections</span>
              </button>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                isLoading={isSubmitting}
                className="w-full sm:w-auto px-10 shadow-gold-glow"
                icon={<Sparkles className="w-5 h-5" />}
              >
                Build My Trip
              </Button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Confirmation Modal */}
      <TripPlanSuccessModal
        isOpen={Boolean(successData)}
        data={successData}
        onClose={() => setSuccessData(null)}
        onReset={handleReset}
      />
    </section>
  );
};
