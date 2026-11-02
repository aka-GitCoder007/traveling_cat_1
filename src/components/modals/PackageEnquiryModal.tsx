import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, ShieldCheck, Calendar, Users } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../common/Button';

const TODAY_ISO = new Date().toISOString().split('T')[0];

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  type?: 'package' | 'destination' | 'general';
}

export const PackageEnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travelDate: '',
    travelers: '2',
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error('Please enter your full name.');
      return;
    }

    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    if (!formData.phone.trim() || formData.phone.length < 8) {
      toast.error('Please enter a valid contact phone number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const submission = {
        id: `enq_${Date.now()}`,
        interest: title,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem('wanderly_enquiries') || '[]');
      existing.push(submission);
      localStorage.setItem('wanderly_enquiries', JSON.stringify(existing));

      setIsSubmitting(false);
      toast.success(`Inquiry received for ${title}! A Wanderly senior travel designer will connect within 4 hours.`);
      onClose();
    }, 600);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative bg-wanderly-dark border border-white/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-glass-hover text-white z-10"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-1">
              Bespoke Concierge Inquiry
            </span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-gray-400 mt-1">{subtitle}</p>}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Lord / Lady / Dr. / First & Last Name"
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@domain.com"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-wanderly-gold" />
                  Estimated Travel Date
                </label>
                <input
                  type="date"
                  value={formData.travelDate}
                  min={TODAY_ISO}
                  onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-wanderly-gold" />
                  Number of Travelers
                </label>
                <select
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  className="w-full bg-wanderly-dark border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-wanderly-gold"
                >
                  <option value="1">1 Traveler (Solo)</option>
                  <option value="2">2 Travelers (Couple)</option>
                  <option value="3-4">3–4 Travelers (Small Group/Family)</option>
                  <option value="5-8">5–8 Travelers (Private Party)</option>
                  <option value="8+">8+ Travelers (Exclusive Buyout)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-300 mb-1.5">
                Special Requests or Specific Curations
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention flight preferences, dietary needs, suite types, or milestone celebrations..."
                className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold resize-none"
              />
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-wanderly-gold shrink-0" />
              <span>Your privacy is safeguarded. No spam or third-party sharing.</span>
            </div>

            <div className="pt-3 flex gap-3">
              <Button
                type="button"
                variant="outline"
                size="md"
                onClick={onClose}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="gold"
                size="md"
                isLoading={isSubmitting}
                className="flex-1"
                icon={<Send className="w-4 h-4" />}
              >
                Request Itinerary
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
