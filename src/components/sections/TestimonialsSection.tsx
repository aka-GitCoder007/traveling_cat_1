import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MessageSquareQuote, ShieldAlert } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { TestimonialCard } from '../cards/TestimonialCard';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 sm:py-32 bg-wanderly-dark relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Voices of Wanderly"
          badgeIcon={<MessageSquareQuote className="w-3.5 h-3.5" />}
          title="Stories From Our Travelers"
          subtitle="Read personal accounts from voyagers who stepped beyond the ordinary."
          align="center"
          theme="dark"
        />

        {/* Carousel Container */}
        <div className="mt-14 relative min-h-[360px] sm:min-h-[320px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <TestimonialCard testimonial={testimonialsData[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls & Pagination */}
        <div className="mt-10 flex items-center justify-between">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? 'w-8 bg-wanderly-gold'
                    : 'w-2.5 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-12 h-12 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all cursor-pointer shadow-glass"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-12 h-12 rounded-full glass-dark border border-white/10 hover:border-wanderly-gold text-white hover:text-wanderly-gold flex items-center justify-center transition-all cursor-pointer shadow-glass"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mandatory Transparency Disclaimer */}
        <div className="mt-8 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
          <ShieldAlert className="w-3.5 h-3.5 text-wanderly-gold/70" />
          <span>Illustrative demo testimonials representing typical guest itineraries and feedback.</span>
        </div>
      </div>
    </section>
  );
};
