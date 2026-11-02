import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, DollarSign, Clock, CalendarCheck, Award, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const reasons = [
  {
    icon: Award,
    title: 'Personally Curated Journeys',
    description: 'No template itineraries. Every day is engineered around your individual rhythm, tastes, and private passions.',
  },
  {
    icon: Users,
    title: 'Local Travel Experts',
    description: 'Deep-rooted connections with cultural historians, private guides, and resident masters across the globe.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden taxes, surprise resort fees, or sudden surge charges. Complete financial clarity from day one.',
  },
  {
    icon: Clock,
    title: 'Dedicated Travel Assistance',
    description: 'A 24/7 senior concierge team reachable via direct WhatsApp or private satellite connection at all times.',
  },
  {
    icon: CalendarCheck,
    title: 'Flexible Travel Planning',
    description: 'Seamless rescheduling policies and comprehensive travel assurance built into every single bespoke package.',
  },
  {
    icon: HeartHandshake,
    title: 'Memorable Experiences',
    description: 'Exclusive after-hours access, private charters, and authentic encounters that leave lasting impressions.',
  },
];

const stats = [
  { value: '10K+', label: 'Happy Travelers', desc: 'Curated since inception' },
  { value: '120+', label: 'Destinations', desc: 'Across 6 continents' },
  { value: '98%', label: 'Satisfaction', desc: 'Verified traveler reviews' },
  { value: '15+', label: 'Years Experience', desc: 'Bespoke travel mastery' },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-wanderly-dark relative overflow-hidden border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-wanderly-emerald/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Wanderly Difference"
          badgeIcon={<Shield className="w-3.5 h-3.5" />}
          title="Every Journey, Thoughtfully Designed"
          subtitle="We believe the difference between an ordinary vacation and an unforgettable journey lies in meticulous craftsmanship."
          align="center"
          theme="dark"
        />

        {/* 6 Reasons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="glass-dark p-7 sm:p-8 rounded-3xl border border-white/10 hover:border-wanderly-gold/30 hover:bg-white/10 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-wanderly-emerald/80 border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-wanderly-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 glass-dark-card rounded-3xl p-8 sm:p-10 border border-wanderly-gold/25 shadow-glass"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                <div className="text-4xl sm:text-5xl font-black text-wanderly-gold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mt-1.5">{stat.label}</div>
                <div className="text-xs text-gray-400 mt-0.5">{stat.desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 text-center text-[11px] text-gray-400">
            * Illustrative figures showcasing Wanderly portfolio benchmarks and guest satisfaction.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
