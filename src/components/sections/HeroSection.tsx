import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, MapPin, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { heroWordReveal } from '../../utils/animations';

interface HeroSectionProps {
  onExploreClick?: () => void;
  onStoryClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onStoryClick,
}) => {
  const [videoError, setVideoError] = useState(false);
  const headlineWords = ['Journey', 'Beyond', 'the', 'Ordinary'];

  const scrollToDestinations = () => {
    if (onExploreClick) {
      onExploreClick();
      return;
    }
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    if (onStoryClick) {
      onStoryClick();
      return;
    }
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-wanderly-dark select-none">
      {/* Background Video with Fallback Poster */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
            poster="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=90"
            className="w-full h-full object-cover scale-105 transform motion-safe:animate-[pulse_10s_ease-in-out_infinite]"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-waves-crashing-on-the-beach-40994-large.mp4"
              type="video/mp4"
            />
            {/* Secondary fallback video */}
            <source
              src="https://cdn.coverr.co/videos/coverr-drone-shot-of-tropical-island-4835/1080p.mp4"
              type="video/mp4"
            />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=2000&q=90"
            alt="Wanderly Hero Fallback"
            className="w-full h-full object-cover"
          />
        )}

        {/* Cinematic Gradient Overlays */}
        {/* Layer 1: Dark vignette */}
        <div className="absolute inset-0 bg-black/45 z-10" />
        {/* Layer 2: Deep bottom-to-top forest gradient to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/40 to-black/60 z-10" />
        {/* Layer 3: Subtle emerald tint for brand identity */}
        <div className="absolute inset-0 bg-wanderly-emerald/15 mix-blend-multiply z-10" />
      </div>

      {/* Floating Destination Label (Bottom Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:flex absolute bottom-12 right-8 lg:right-12 z-20 items-center gap-3 glass-dark py-2.5 px-4 rounded-full border border-wanderly-gold/30 shadow-glass"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-wanderly-gold animate-ping" />
        <div className="flex items-center gap-1.5 text-xs text-gray-200">
          <MapPin className="w-3.5 h-3.5 text-wanderly-gold" />
          <span className="font-semibold text-white">Current Expedition:</span>
          <span className="text-wanderly-gold">Swiss Alps & Arctic Fjords</span>
        </div>
      </motion.div>

      {/* Floating Curated Journeys Badge (Top Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:flex absolute top-28 left-8 lg:left-12 z-20 items-center gap-2 text-xs text-wanderly-gold/80 glass-dark py-1.5 px-3.5 rounded-full border border-white/10"
      >
        <Compass className="w-3.5 h-3.5 text-wanderly-gold" />
        <span>Bespoke Travel Architecture • Est. 2011</span>
      </motion.div>

      {/* Main Centered Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center pt-16">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wanderly-gold/15 text-wanderly-gold border border-wanderly-gold/30 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-6 shadow-gold-glow/20 backdrop-blur-md"
        >
          <span>✈ EXPLORE THE WORLD</span>
        </motion.div>

        {/* Staggered Word Reveal Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.08] max-w-4xl flex flex-wrap justify-center gap-x-3 sm:gap-x-5 gap-y-1 sm:gap-y-2 drop-shadow-2xl">
          {headlineWords.map((word, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={heroWordReveal}
              initial="hidden"
              animate="visible"
              className={word === 'Ordinary' ? 'text-wanderly-gold text-glow-gold' : 'text-white'}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed drop-shadow"
        >
          Discover extraordinary destinations, unforgettable experiences, and journeys that stay with you forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.9 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto"
        >
          <Button
            variant="gold"
            size="lg"
            onClick={scrollToDestinations}
            className="w-full sm:w-auto"
            icon={<Sparkles className="w-5 h-5" />}
          >
            Explore Destinations
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={scrollToAbout}
            className="w-full sm:w-auto glass-dark"
          >
            Discover Our Story
          </Button>
        </motion.div>
      </div>

      {/* Animated Scroll Indicator */}
      <motion.button
        onClick={scrollToDestinations}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-gray-400 hover:text-wanderly-gold transition-colors cursor-pointer"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
        <div className="w-8 h-12 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5 backdrop-blur-sm bg-black/20">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-1.5 h-2.5 rounded-full bg-wanderly-gold"
          />
        </div>
      </motion.button>
    </section>
  );
};
