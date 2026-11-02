import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="relative glass-dark-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-glass flex flex-col justify-between text-white h-full">
      <div className="absolute top-6 right-8 text-wanderly-gold/20 pointer-events-none">
        <Quote className="w-16 h-16" />
      </div>

      <div className="space-y-4 relative z-10">
        {/* Star Rating */}
        <div className="flex items-center gap-1 text-wanderly-gold">
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <Star key={idx} className="w-4 h-4 fill-wanderly-gold text-wanderly-gold" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-base sm:text-lg font-normal text-gray-200 leading-relaxed italic">
          "{testimonial.quote}"
        </blockquote>
      </div>

      {/* Author Details */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3.5">
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-wanderly-gold/40 shadow-sm"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-wanderly-emerald border-2 border-wanderly-gold/40 flex items-center justify-center text-sm font-bold text-wanderly-gold">
              {testimonial.initials}
            </div>
          )}

          <div>
            <h4 className="text-base font-bold text-white">{testimonial.name}</h4>
            <p className="text-xs text-gray-400">{testimonial.role} • {testimonial.location}</p>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end text-xs text-gray-400">
          <div className="flex items-center gap-1 text-wanderly-gold font-medium">
            <MapPin className="w-3.5 h-3.5" />
            <span>{testimonial.destination}</span>
          </div>
          <span className="text-[11px] text-gray-400 mt-0.5">{testimonial.tripTaken}</span>
        </div>
      </div>
    </div>
  );
};
