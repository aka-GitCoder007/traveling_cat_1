import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Heart, Eye, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const AboutTeaser: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 overflow-hidden bg-wanderly-dark text-white">
      {/* Full-width Cinematic Travel Background with Parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Cinematic Alpine Landscape"
          loading="lazy"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-wanderly-dark/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/60 to-wanderly-dark" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-wanderly-gold/15 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
          <Compass className="w-3.5 h-3.5" />
          <span>Our Philosophy & Ethos</span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.12] max-w-3xl mx-auto">
          We Believe Every Journey Has a Story.
        </h2>

        {/* Centered Glassmorphism Brand Statement Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 glass-dark-card p-8 sm:p-12 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover max-w-4xl mx-auto text-left"
        >
          <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-6">
            At <span className="text-wanderly-gold font-bold">Wanderly</span>, we believe travel is not simply about reaching a destination. It's about the people you meet, the stories you collect, and the moments that change how you see the world.
          </p>

          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            We create thoughtfully curated journeys for curious souls who want to experience the extraordinary.
          </p>

          {/* Mission & Vision Cards */}
          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0 mt-1">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Our Mission</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  To liberate travelers from generic itineraries by delivering bespoke, culturally immersive, and ecologically responsible explorations.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-wanderly-emerald border border-wanderly-gold/30 flex items-center justify-center text-wanderly-gold shrink-0 mt-1">
                <Eye className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white mb-1">Our Vision</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  To be the global benchmark in bespoke experiential travel, where emotional connection and authentic local storytelling take center stage.
                </p>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-wanderly-gold">
              <Heart className="w-4 h-4 fill-wanderly-gold" />
              <span>Crafted with passion by our international team of travel designers</span>
            </div>

            <Link to="/about">
              <Button
                variant="gold"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Meet Our Team
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
