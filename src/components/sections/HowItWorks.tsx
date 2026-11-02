import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sliders, FileText, PlaneTakeoff, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Discover',
    description: 'Tell us where your curiosity takes you.',
    details: 'Share your dream destinations, dates, and what moves your spirit.',
  },
  {
    step: '02',
    icon: Sliders,
    title: 'Customize',
    description: 'We design a journey around your interests.',
    details: 'A dedicated travel designer crafts an exclusive day-by-day itinerary tailored to you.',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Prepare',
    description: 'Get your itinerary and travel essentials.',
    details: 'Receive your comprehensive digital dossier, flight details, and local insider guides.',
  },
  {
    step: '04',
    icon: PlaneTakeoff,
    title: 'Explore',
    description: "Enjoy the experience. We'll take care of the details.",
    details: 'Immerse in pure discovery with round-the-clock concierge backing every moment.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-wanderly-dark border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Seamless Process"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="How It Works"
          subtitle="From your first spark of inspiration to your journey home, we curate every milestone."
          align="center"
          theme="dark"
        />

        {/* Timeline Layout: Horizontal on Desktop, Vertical on Mobile */}
        <div className="mt-20 relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[2px] bg-gradient-to-r from-wanderly-gold/20 via-wanderly-gold to-wanderly-gold/20 -translate-y-12 z-0" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  custom={index}
                  className="glass-dark p-7 rounded-3xl border border-white/10 hover:border-wanderly-gold/40 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
                >
                  <div>
                    {/* Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-wanderly-emerald/90 border border-wanderly-gold/40 flex items-center justify-center text-wanderly-gold shadow-gold-glow/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-3xl font-mono font-black text-wanderly-gold/30 group-hover:text-wanderly-gold transition-colors">
                        {item.step}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-wanderly-gold transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-base font-semibold text-gray-200 mb-2">
                      {item.description}
                    </p>

                    <p className="text-xs text-gray-400 leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
