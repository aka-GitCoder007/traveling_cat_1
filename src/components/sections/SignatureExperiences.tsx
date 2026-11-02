import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experiencesData } from '../../data/experiences';
import type { Experience } from '../../types';
import { ExperienceCard } from '../cards/ExperienceCard';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const SignatureExperiences: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience>(experiencesData[0]);

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-wanderly-dark border-t border-white/5 relative overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-wanderly-emerald/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Signature Journeys"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Travel Is More Than the Destination"
          subtitle="We craft transformative journeys designed around emotion, curiosity, and unmatched exclusivity."
          align="center"
          theme="dark"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Large Cinematic Travel Image & Floating Glass Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[480px] sm:h-[580px] border border-white/10 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedExp.id}
                  src={selectedExp.image}
                  alt={selectedExp.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-black/30" />

              {/* Floating Glassmorphic Info Card on Left Image */}
              <div className="absolute bottom-6 left-6 right-6 glass-dark-card p-5 sm:p-6 rounded-2xl border border-wanderly-gold/30 shadow-glass">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase font-mono font-bold text-wanderly-gold">
                    {selectedExp.number} • Signature Tier
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-gray-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-wanderly-gold" />
                    <span>Private Escort</span>
                  </div>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-white mb-1.5">
                  {selectedExp.title}
                </h4>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                  {selectedExp.subtitle}
                </p>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Key Feature:</span>
                  <span className="font-semibold text-wanderly-gold truncate max-w-[200px]">
                    {selectedExp.keyHighlights[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Four Signature Experiences Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {experiencesData.map((exp) => (
                <ExperienceCard
                  key={exp.id}
                  experience={exp}
                  isActive={selectedExp.id === exp.id}
                  onSelect={(e) => setSelectedExp(e)}
                />
              ))}
            </div>

            {/* Selected experience detail preview bar */}
            <div className="mt-4 p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-wanderly-gold shrink-0" />
                <div className="text-xs sm:text-sm text-gray-200">
                  <span className="font-semibold text-white">Ideal for: </span>
                  <span>{selectedExp.curatedFor}</span>
                </div>
              </div>

              <Link to="/experiences" className="shrink-0">
                <Button variant="gold" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                  Explore Experiences
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
