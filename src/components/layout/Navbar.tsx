import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Compass, ArrowRight, Phone, Mail, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: '/destinations' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Packages', path: '/packages' },
  { label: 'Travel Stories', path: '/journal' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handlePlanTripClick = () => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const plannerElem = document.getElementById('trip-planner');
      if (plannerElem) {
        plannerElem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate('/#trip-planner');
    // slight delay for DOM mount if navigating from inner page
    setTimeout(() => {
      const plannerElem = document.getElementById('trip-planner');
      if (plannerElem) {
        plannerElem.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-dark py-3.5 shadow-glass border-b border-white/10'
            : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-wanderly-emerald/90 border border-wanderly-gold/40 flex items-center justify-center text-wanderly-gold shadow-gold-glow/20 group-hover:scale-105 transition-transform duration-300">
              <Compass className="w-5 h-5 animate-[spin_12s_linear_infinite]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase group-hover:text-wanderly-gold transition-colors duration-300">
                WANDERLY
              </span>
              <span className="text-[9px] tracking-[0.25em] text-wanderly-gold uppercase font-semibold -mt-1 opacity-90">
                Bespoke Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    active ? 'text-wanderly-gold font-semibold' : 'text-gray-200 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-wanderly-gold rounded-full"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              variant="gold"
              size="sm"
              onClick={handlePlanTripClick}
              icon={<Sparkles className="w-4 h-4" />}
            >
              Plan Your Trip
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-200 hover:text-wanderly-gold hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-wanderly-dark/95 lg:hidden flex flex-col pt-24 pb-8 px-6 overflow-y-auto"
          >
            <div className="flex flex-col flex-1 justify-between max-w-md mx-auto w-full">
              {/* Menu items */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                  hidden: {},
                }}
                className="flex flex-col space-y-3"
              >
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <motion.div
                      key={item.path}
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between text-2xl font-bold py-3 border-b border-white/10 transition-colors ${
                          active ? 'text-wanderly-gold' : 'text-gray-100 hover:text-wanderly-gold'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="w-5 h-5 text-wanderly-gold/60" />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Bottom Info & CTA in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-6 border-t border-white/10 space-y-5"
              >
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full justify-center"
                  onClick={handlePlanTripClick}
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Plan Your Trip
                </Button>

                <div className="text-xs text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-wanderly-gold" />
                    <span>Concierge: +91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-wanderly-gold" />
                    <span>concierge@wanderly.luxury</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
