import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../components/common/Button';
import type { ContactSubmission } from '../types';

const bureaus = [
  {
    city: 'Zurich (Global HQ)',
    country: 'Switzerland',
    address: 'Paradeplatz 8, 8001 Zürich',
    phone: '+41 44 215 8000',
    email: 'zurich@wanderly.luxury',
    hours: 'Mon – Fri: 08:30 – 18:30 CET',
  },
  {
    city: 'New Delhi Bureau',
    country: 'India',
    address: 'Chanakyapuri Diplomatic Enclave, New Delhi 110021',
    phone: '+91 11 4890 2200',
    email: 'delhi@wanderly.luxury',
    hours: 'Mon – Sat: 09:30 – 19:30 IST',
  },
  {
    city: 'Singapore Atelier',
    country: 'Singapore',
    address: 'Marina Bay Financial Centre, Tower 2, Singapore 018983',
    phone: '+65 6789 1200',
    email: 'singapore@wanderly.luxury',
    hours: 'Mon – Fri: 09:00 – 19:00 SGT',
  },
  {
    city: 'London Concierge',
    country: 'United Kingdom',
    address: 'Berkeley Square, Mayfair, London W1J 6BD',
    phone: '+44 20 7946 0990',
    email: 'london@wanderly.luxury',
    hours: 'Mon – Fri: 09:00 – 18:00 GMT',
  },
];

const faqs = [
  {
    q: 'How does the bespoke planning process work?',
    a: 'We begin with an initial private consultation to understand your cadence, passions, and preferences. A senior travel architect then engineers a customized day-by-day dossier with luxury lodging, private charters, and exclusive cultural permissions.',
  },
  {
    q: 'Are your listed prices all-inclusive?',
    a: 'Yes. Wanderly adheres to absolute transparent pricing. Quoted figures encompass handpicked luxury hotels, all private chauffeured transfers, certified local private guides, national park entrance fees, and taxes. No hidden resort fees or unexpected surcharges.',
  },
  {
    q: 'What is your reschedule and cancellation flexibility?',
    a: 'We recognize executive schedules shift. All bespoke itineraries include our flexible reschedule guarantee: trip dates may be shifted up to 30 days prior to departure without administrative penalties.',
  },
  {
    q: 'Can Wanderly arrange commercial business class or private jet charters?',
    a: 'Absolutely. Our dedicated air desk arranges commercial first/business class tickets with VIP tarmac assistance, as well as private light and mid-size jet charters for point-to-point European and Asian connections.',
  },
  {
    q: 'How do you ensure safety and privacy on the ground?',
    a: 'Every party is assigned a personal bilingual liaison and has access to our 24/7 global operations desk. For remote destinations like Patagonia or the high Alps, we provide dedicated satellite communicators and emergency medical evacuation insurance.',
  },
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Bespoke Travel Inquiry',
    travelWindow: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid telephone number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your aspirations.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please complete all required fields.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const submission: ContactSubmission = {
        id: `contact_${Date.now()}`,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: `${formData.travelWindow ? `[Travel Window: ${formData.travelWindow}] ` : ''}${formData.message}`,
        submittedAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem('wanderly_contact_submissions') || '[]');
      existing.unshift(submission);
      localStorage.setItem('wanderly_contact_submissions', JSON.stringify(existing));

      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Your message has been received! Our concierge will contact you within 4 hours.');
    }, 600);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-black/80 via-wanderly-dark to-wanderly-dark">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Concierge</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Connect with Our Atelier
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Whether you are commissioning a milestone family expedition or require private yacht charters, our senior travel designers are at your service.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        {/* Bureaus Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bureaus.map((bureau, i) => (
            <div
              key={i}
              className="glass-dark p-6 rounded-3xl border border-white/10 space-y-4 hover:border-wanderly-gold/30 transition-colors"
            >
              <div>
                <span className="text-xs uppercase font-mono font-bold text-wanderly-gold block">
                  {bureau.country}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{bureau.city}</h3>
              </div>

              <div className="space-y-2 text-xs text-gray-300 pt-2 border-t border-white/10">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-wanderly-gold shrink-0 mt-0.5" />
                  <span>{bureau.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-wanderly-gold shrink-0" />
                  <span>{bureau.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-wanderly-gold shrink-0" />
                  <span>{bureau.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-wanderly-gold shrink-0" />
                  <span>{bureau.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and FAQ Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-dark-card p-8 sm:p-10 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover">
              <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
                Send an Inquiry
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Start a Private Dialogue
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 mb-8">
                Please provide your contact information and preliminary aspirations. A senior designer will contact you within 4 hours.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-wanderly-emerald/30 border border-wanderly-emerald/60 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-wanderly-emerald flex items-center justify-center text-wanderly-gold mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                  <p className="text-sm text-gray-200 max-w-md mx-auto">
                    Thank you, {formData.fullName}. Your inquiry has been forwarded to our senior desk. A travel designer will review flight options and villa allocations before contacting you.
                  </p>
                  <Button
                    variant="gold"
                    size="sm"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: 'Bespoke Travel Inquiry',
                        travelWindow: '',
                        message: '',
                      });
                    }}
                    className="mt-4"
                  >
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Lord / Lady / Dr. / Full Name"
                      className={`w-full bg-white/5 border ${
                        errors.fullName ? 'border-red-400' : 'border-white/15'
                      } rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold transition-colors`}
                    />
                    {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className={`w-full bg-white/5 border ${
                          errors.email ? 'border-red-400' : 'border-white/15'
                        } rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold transition-colors`}
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full bg-white/5 border ${
                          errors.phone ? 'border-red-400' : 'border-white/15'
                        } rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold transition-colors`}
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-wanderly-dark border border-white/15 rounded-2xl px-4 py-3 text-sm text-white focus:outline-none focus:border-wanderly-gold"
                      >
                        <option value="Bespoke Travel Inquiry">Bespoke Travel Inquiry</option>
                        <option value="Private Villa or Island Buyout">Private Villa or Island Buyout</option>
                        <option value="Honeymoon & Romantic Milestone">Honeymoon & Romantic Milestone</option>
                        <option value="High-Altitude / Ice Expedition">High-Altitude / Ice Expedition</option>
                        <option value="Corporate / Executive Retreat">Corporate / Executive Retreat</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                        Estimated Travel Window
                      </label>
                      <input
                        type="text"
                        value={formData.travelWindow}
                        onChange={(e) => setFormData({ ...formData, travelWindow: e.target.value })}
                        placeholder="e.g. October 2026 or Spring 2027"
                        className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold tracking-wider text-wanderly-gold mb-1.5">
                      Tell Us About Your Vision *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details such as target destinations, number of guests, preferred rhythm, and any special occasions..."
                      className={`w-full bg-white/5 border ${
                        errors.message ? 'border-red-400' : 'border-white/15'
                      } rounded-2xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <ShieldCheck className="w-4 h-4 text-wanderly-gold shrink-0" />
                      <span>Confidential & secure data handling</span>
                    </div>

                    <Button
                      type="submit"
                      variant="gold"
                      size="md"
                      isLoading={isSubmitting}
                      icon={<Send className="w-4 h-4" />}
                    >
                      Transmit Request
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right FAQs Accordion (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-dark p-6 sm:p-8 rounded-3xl border border-white/10">
              <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-wanderly-gold mb-2">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Clarified</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-6">
                Common Inquiries
              </h3>

              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 transition-colors"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-white hover:text-wanderly-gold transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-wanderly-gold shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="px-4 pb-4 text-xs text-gray-300 leading-relaxed border-t border-white/10 pt-3"
                          >
                            {faq.a}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Direct VIP Hotline Box */}
            <div className="glass-dark-card p-6 rounded-3xl border border-wanderly-gold/30 space-y-3">
              <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block">
                Urgent Departures
              </span>
              <h4 className="text-lg font-bold text-white">
                Planning Within 14 Days?
              </h4>
              <p className="text-xs text-gray-300">
                Call our direct VIP dispatch team to arrange expedited private aircraft and expedited suite allocations.
              </p>
              <div className="pt-2 flex items-center gap-2 text-sm font-mono font-bold text-wanderly-gold">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
