import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { toast } from 'sonner';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    const existing = JSON.parse(localStorage.getItem('wanderly_newsletter') || '[]');
    if (existing.includes(email)) {
      toast.info('You are already subscribed to Wanderly travel dispatch.');
      return;
    }

    existing.push(email);
    localStorage.setItem('wanderly_newsletter', JSON.stringify(existing));
    setIsSubscribed(true);
    toast.success('Welcome to Wanderly! You are now subscribed to curated travel stories.');
    setEmail('');
  };

  return (
    <footer className="bg-wanderly-dark text-gray-300 border-t border-wanderly-emerald/30 relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-wanderly-emerald/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-wanderly-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Newsletter (Col span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-2.5 group cursor-pointer inline-flex">
              <div className="w-10 h-10 rounded-full bg-wanderly-emerald border border-wanderly-gold/40 flex items-center justify-center text-wanderly-gold shadow-gold-glow/20">
                <Compass className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-widest text-white uppercase">
                  WANDERLY
                </span>
                <span className="text-[9px] tracking-[0.25em] text-wanderly-gold uppercase font-semibold -mt-1">
                  Bespoke Journeys
                </span>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Curating rare, cinematic travel experiences for curious souls. From private alpine chalets to untouched coral atolls, we engineer journeys that stay with you forever.
            </p>

            {/* Quick newsletter subscription */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-wanderly-gold font-semibold block mb-2">
                Join The Wanderly Dispatch
              </span>
              <form onSubmit={handleSubscribe} className="flex max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/15 rounded-l-full px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-wanderly-gold flex-1"
                />
                <button
                  type="submit"
                  className="bg-wanderly-gold text-wanderly-dark font-semibold px-4 py-2.5 rounded-r-full hover:bg-wanderly-gold-hover transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  {isSubscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Explore (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white text-xs uppercase font-bold tracking-widest border-l-2 border-wanderly-gold pl-2.5">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/destinations" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/packages" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  Travel Packages
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  Travel Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier & Legal (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase font-bold tracking-widest border-l-2 border-wanderly-gold pl-2.5">
              The Atelier
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  About Wanderly
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-wanderly-gold transition-colors">
                  Contact Concierge
                </Link>
              </li>
              <li>
                <span className="text-gray-400">
                  Privacy Policy & Confidentiality
                </span>
              </li>
              <li>
                <span className="text-gray-400">
                  Terms & Reschedule Policy
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Socials (Col span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs uppercase font-bold tracking-widest border-l-2 border-wanderly-gold pl-2.5">
              Concierge Contact
            </h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-wanderly-gold shrink-0 mt-1" />
                <span>Paradeplatz 8, Zurich • Mayfair, London • New Delhi</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-wanderly-gold shrink-0" />
                <span>+91 98765 43210 (24/7 Desk)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-wanderly-gold shrink-0" />
                <span>concierge@wanderly.luxury</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs uppercase tracking-wider text-gray-400 font-medium block mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-wanderly-gold hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
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
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-wanderly-gold hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
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
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-wanderly-gold hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
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
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-wanderly-gold hover:text-wanderly-gold flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Wanderly Bespoke Journeys Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-gray-400">
              Swiss Federal License CHE-115.892.301
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
