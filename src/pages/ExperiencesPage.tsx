import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Compass,
  Landmark,
  Heart,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  MapPin,
  Gift,
  Award,
} from 'lucide-react';
import { experiencesData } from '../data/experiences';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

export const ExperiencesPage: React.FC = () => {
  const { openEnquiry } = useEnquiry();
  const [selectedExpId, setSelectedExpId] = useState<string>(experiencesData[0].id);

  const activeExp = experiencesData.find((e) => e.id === selectedExpId) || experiencesData[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-black/80 via-wanderly-dark to-wanderly-dark">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Beyond The Ordinary</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Signature Experiences
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Travel should touch the soul and expand how you see the world. Our four signature pillars represent the pinnacle of bespoke exploration.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Experience Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-2 rounded-3xl glass-dark border border-white/10">
          {experiencesData.map((exp) => {
            const isActive = exp.id === selectedExpId;
            return (
              <button
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer ${isActive
                    ? 'bg-wanderly-emerald/90 text-white border border-wanderly-gold/50 shadow-gold-glow/20'
                    : 'hover:bg-white/5 text-gray-300 hover:text-white border border-transparent'
                  }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform ${isActive
                      ? 'bg-wanderly-gold text-wanderly-dark shadow-md scale-105'
                      : 'bg-white/10 text-wanderly-gold'
                    }`}
                >
                  {getIcon(exp.iconName)}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider block opacity-75">
                    Tier {exp.number}
                  </span>
                  <span className="text-sm font-bold block truncate">{exp.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Experience Showcase Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
          >
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[460px] sm:h-[540px] border border-white/10">
                <img
                  src={activeExp.image}
                  alt={activeExp.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-black/30" />

                <div className="absolute top-6 left-6">
                  <span className="glass-dark px-3 py-1.5 rounded-full text-xs font-mono font-bold text-wanderly-gold border border-wanderly-gold/30">
                    Tier {activeExp.number} • Wanderly Signature
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 glass-dark-card p-5 rounded-2xl border border-wanderly-gold/30">
                  <div className="flex items-center gap-2 text-xs text-wanderly-gold font-semibold mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>White-Glove Private Concierge Backing</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{activeExp.title}</h3>
                  <p className="text-xs text-gray-300">{activeExp.subtitle}</p>
                </div>
              </div>

              {/* Gallery mini strip if extra images exist */}
              {activeExp.gallery && activeExp.gallery.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {activeExp.gallery.map((img, i) => (
                    <div key={i} className="h-28 rounded-2xl overflow-hidden border border-white/10">
                      <img src={img} alt="Gallery thumb" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Narrative & Highlights Column (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Main Description */}
              <div className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10 space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block">
                  Pillar Definition
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {activeExp.title}
                </h2>
                <p className="text-lg text-wanderly-gold/90 font-light italic">
                  "{activeExp.subtitle}"
                </p>
                <p className="text-base text-gray-200 leading-relaxed font-light">
                  {activeExp.description}
                </p>

                {/* Curated For Badge */}
                <div className="pt-4 border-t border-white/10 flex items-start gap-3">
                  <Award className="w-5 h-5 text-wanderly-gold shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-white block">Curated Specifically For:</span>
                    <span className="text-sm text-gray-300">{activeExp.curatedFor}</span>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-wanderly-gold" />
                  What Makes This Experience Rare
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeExp.keyHighlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-wanderly-gold shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-gray-200">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Included Perks & Sample Destinations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Included Perks */}
                <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Gift className="w-4 h-4 text-wanderly-gold" />
                    Signature Privileges
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {activeExp.includedPerks.map((perk, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wanderly-gold mt-1.5 shrink-0" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sample Destinations */}
                <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-wanderly-gold" />
                    Featured Havens
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-300">
                    {activeExp.sampleDestinations.map((dest, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-wanderly-gold shrink-0" />
                        <span>{dest}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Banner */}
              <div className="glass-dark-card p-6 rounded-3xl border border-wanderly-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Ready to craft an {activeExp.title} journey?
                  </h4>
                  <p className="text-xs text-gray-300">
                    Speak with our senior design team to tailor this tier to your dates.
                  </p>
                </div>

                <Button
                  variant="gold"
                  size="md"
                  onClick={() =>
                    openEnquiry({
                      title: `Design an Experience: ${activeExp.title}`,
                      subtitle: `Tier ${activeExp.number} • ${activeExp.subtitle}`,
                      type: 'general',
                    })
                  }
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Proposal
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
