import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';
import { Button } from '../common/Button';
import { SectionHeading } from '../common/SectionHeading';
import type { ContactSubmission } from '../../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Bespoke Travel Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Contact telephone is required.';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please share a brief note about your travel aspirations.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error('Please check the form for errors.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const submission: ContactSubmission = {
        id: `contact_${Date.now()}`,
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      const existing = JSON.parse(localStorage.getItem('wanderly_contact_submissions') || '[]');
      existing.unshift(submission);
      localStorage.setItem('wanderly_contact_submissions', JSON.stringify(existing));

      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Your message was received! A senior designer will contact you shortly.');
    }, 600);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-wanderly-dark relative overflow-hidden border-t border-white/5">
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-wanderly-emerald/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Concierge"
          badgeIcon={<Mail className="w-3.5 h-3.5" />}
          title="Connect with Our Travel Designers"
          subtitle="Whether you are planning a landmark anniversary or a spontaneous private charter, our team is at your disposal."
          align="center"
          theme="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-white">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
                Bespoke Office
              </span>
              <h3 className="text-3xl font-extrabold text-white">
                Start an Exclusive Conversation
              </h3>
              <p className="mt-3 text-sm text-gray-300 leading-relaxed">
                We craft each itinerary by hand. Speak directly with our destination directors to discuss custom routes, villa allocations, or helicopter connections.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-5 text-sm">
              <div className="flex items-start gap-4 p-4 rounded-2xl glass-dark border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Email Concierge</span>
                  <a href="mailto:concierge@wanderly.luxury" className="font-semibold text-white hover:text-wanderly-gold transition-colors">
                    concierge@wanderly.luxury
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-dark border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Direct Line / WhatsApp</span>
                  <a href="tel:+919876543210" className="font-semibold text-white hover:text-wanderly-gold transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-dark border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Headquarters</span>
                  <span className="font-semibold text-white block">
                    One Horizon Center, Golf Course Road, Gurugram, Delhi NCR, India
                  </span>
                  <span className="text-xs text-gray-400 mt-0.5 block">
                    Associate Studio: 18 Berkeley Square, Mayfair, London
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl glass-dark border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-wider block">Business & Support Hours</span>
                  <span className="font-semibold text-white block">Monday – Sunday: 24/7 Dedicated Concierge</span>
                  <span className="text-xs text-wanderly-gold mt-0.5 block">Active traveler emergency satellite coverage</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-gray-400 block mb-3">
                Follow Wanderly Worldwide
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.889C10.638 0 9 1.583 9 4.615V8z"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Raised White Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-2xl text-wanderly-dark border border-gray-100">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-wanderly-emerald/10 text-wanderly-emerald flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-wanderly-dark">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your message has been captured in our demo concierge ledger. A representative will contact you at <span className="font-semibold text-wanderly-emerald">{formData.email}</span>.
                </p>
                <div className="pt-4">
                  <Button
                    variant="emerald"
                    size="sm"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        subject: 'Bespoke Travel Inquiry',
                        message: '',
                      });
                    }}
                  >
                    Send Another Note
                  </Button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h4 className="text-xl font-bold text-wanderly-dark mb-1">
                    Send Us an Inquiry
                  </h4>
                  <p className="text-xs text-gray-500">
                    All demo submissions are stored securely in your browser's local state.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Meera Kapoor"
                    className={`w-full bg-gray-50 border ${
                      errors.fullName ? 'border-red-500' : 'border-gray-200'
                    } rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-wanderly-emerald transition-colors`}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="name@domain.com"
                      className={`w-full bg-gray-50 border ${
                        errors.email ? 'border-red-500' : 'border-gray-200'
                      } rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-wanderly-emerald transition-colors`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="+91 98765 43210"
                      className={`w-full bg-gray-50 border ${
                        errors.phone ? 'border-red-500' : 'border-gray-200'
                      } rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-wanderly-emerald transition-colors`}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Inquiry Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-wanderly-emerald transition-colors"
                  >
                    <option value="Bespoke Travel Inquiry">Bespoke Custom Travel Inquiry</option>
                    <option value="Package Booking Consultation">Package Consultation</option>
                    <option value="Private Jet or Yacht Charter">Private Jet or Yacht Charter</option>
                    <option value="Honeymoon & Anniversary Planning">Honeymoon & Anniversary Milestone</option>
                    <option value="Corporate / Private Retreat">Corporate / Exclusive Group Retreat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-1">
                    Your Message / Travel Vision *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Tell us about your desired destinations, timeline, family members, or dream activities..."
                    className={`w-full bg-gray-50 border ${
                      errors.message ? 'border-red-500' : 'border-gray-200'
                    } rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-wanderly-emerald transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <ShieldCheck className="w-4 h-4 text-wanderly-emerald shrink-0" />
                  <span>Strict confidentiality assured. Never shared with unverified vendors.</span>
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="emerald"
                    size="lg"
                    isLoading={isSubmitting}
                    className="w-full text-base font-semibold"
                    icon={<Send className="w-4 h-4" />}
                  >
                    Submit Inquiry
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
