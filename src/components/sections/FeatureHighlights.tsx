import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, ShieldCheck, Headphones } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const features = [
  {
    number: '01',
    icon: MapPin,
    title: 'Handpicked Destinations',
    description: "Only the world's most extraordinary places.",
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'Unique Experiences',
    description: 'Travel beyond the ordinary tourist trail.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Trusted & Safe',
    description: 'Travel confidently with experienced professionals.',
  },
  {
    number: '04',
    icon: Headphones,
    title: '24/7 Travel Support',
    description: "We're here whenever your journey needs us.",
  },
];

export const FeatureHighlights: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Large Glassmorphic Container with 4 Columns */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="glass-dark-card rounded-3xl p-6 sm:p-8 lg:p-10 shadow-glass-hover border border-wanderly-gold/25"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                className={`pt-5 sm:pt-0 ${index > 0 ? 'lg:pl-8' : ''} flex flex-col justify-between group cursor-default`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-wanderly-emerald/80 border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shadow-gold-glow/20 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-wanderly-gold/40 tracking-wider">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-wanderly-gold transition-colors duration-200">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
