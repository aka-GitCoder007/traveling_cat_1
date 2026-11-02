import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Search, MapPin, Clock, Calendar, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { destinationsData } from '../data/destinations';
import type { Destination, DestinationCategory } from '../types';
import { formatINR } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { DestinationModal } from '../components/modals/DestinationModal';
import { useEnquiry } from '../context/EnquiryContext';

const categories: { label: string; value: DestinationCategory }[] = [
  { label: 'All Destinations', value: 'all' },
  { label: 'Beach & Atolls', value: 'beach' },
  { label: 'Mountains & Alps', value: 'mountains' },
  { label: 'Wild Adventure', value: 'adventure' },
  { label: 'Cultural Heritage', value: 'cultural' },
  { label: 'Ultra Luxury', value: 'luxury' },
];

export const DestinationsPage: React.FC = () => {
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [modalDest, setModalDest] = useState<Destination | null>(null);

  const filteredDestinations = useMemo(() => {
    let list = destinationsData.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'all' || dest.category === selectedCategory;
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.startingPriceINR - b.startingPriceINR);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.startingPriceINR - a.startingPriceINR);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-black/80 via-wanderly-dark to-wanderly-dark">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>Worldwide Escapes</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Curated Destinations
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            From the high glaciers of the Swiss Alps to the secluded coral atolls of the Maldives, explore sanctuaries handpicked for their beauty, serenity, and rarity.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-wanderly-gold">
            <Sparkles className="w-4 h-4" />
            <span>8 Rare Global Havens • Fully Customizable Private Itineraries</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${active
                      ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by country, city..."
                className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold"
              />
            </div>

            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort destinations"
                className="w-full bg-wanderly-dark border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-wanderly-gold cursor-pointer"
              >
                <option value="featured">Featured Curations</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-400 px-2">
          <span>
            Showing <strong className="text-white">{filteredDestinations.length}</strong> of{' '}
            {destinationsData.length} destinations
          </span>
          {(selectedCategory !== 'all' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-wanderly-gold hover:underline cursor-pointer"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Destination Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredDestinations.map((dest) => (
              <motion.div
                key={dest.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-neutral-900/90 border border-white/10 rounded-3xl overflow-hidden shadow-glass-sm hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Section */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => navigate(`/destinations/${dest.slug}`)}
                >
                  <img
                    src={dest.heroImage}
                    alt={dest.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
                      {dest.category}
                    </span>
                    <div className="glass-dark px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
                      <Star className="w-3.5 h-3.5 text-wanderly-gold fill-wanderly-gold" />
                      <span>{dest.rating}</span>
                      <span className="text-[10px] text-gray-400">({dest.reviewsCount})</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 glass-dark px-3 py-1 rounded-full text-xs text-white flex items-center gap-1.5 border border-white/15">
                    <Clock className="w-3.5 h-3.5 text-wanderly-gold" />
                    <span>{dest.duration}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-wanderly-gold uppercase tracking-widest font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{dest.country} • {dest.region}</span>
                    </div>
                    <h3
                      onClick={() => navigate(`/destinations/${dest.slug}`)}
                      className="text-2xl font-bold text-white group-hover:text-wanderly-gold transition-colors duration-200 cursor-pointer"
                    >
                      {dest.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed">
                      {dest.shortDescription}
                    </p>
                  </div>

                  {/* Best Season */}
                  <div className="text-xs text-gray-400 pt-2 border-t border-white/10 flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-wanderly-gold shrink-0" />
                    <span className="truncate">Best time: {dest.bestSeason}</span>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Starting from</span>
                        <span className="text-2xl font-black text-wanderly-gold">
                          {formatINR(dest.startingPriceINR)}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">per traveler</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/destinations/${dest.slug}`)}
                        className="w-full text-xs"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Explore Page
                      </Button>

                      <Button
                        variant="gold"
                        size="sm"
                        onClick={() =>
                          openEnquiry({
                            title: `Inquiry for ${dest.name}, ${dest.country}`,
                            subtitle: `${dest.duration} • Best: ${dest.bestSeason}`,
                            type: 'destination',
                          })
                        }
                        className="w-full text-xs"
                        icon={<Sparkles className="w-3.5 h-3.5" />}
                      >
                        Enquire
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredDestinations.length === 0 && (
          <div className="py-24 text-center glass-dark rounded-3xl border border-white/10 p-8 max-w-lg mx-auto mt-10">
            <Compass className="w-14 h-14 text-wanderly-gold/40 mx-auto mb-4 animate-spin-slow" />
            <h3 className="text-2xl font-bold text-white">No Escapes Match Your Query</h3>
            <p className="text-sm text-gray-400 mt-2">
              We couldn't find destinations matching "{searchQuery}". Try searching for countries like "Switzerland", "Japan", or "Indonesia".
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-6"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>

      {/* Quick-view Destination Modal */}
      <DestinationModal
        destination={modalDest}
        isOpen={Boolean(modalDest)}
        onClose={() => setModalDest(null)}
        onEnquire={(dest) =>
          openEnquiry({
            title: `Inquiry for ${dest.name}`,
            subtitle: `${dest.duration} • ${dest.country}`,
            type: 'destination',
          })
        }
      />
    </div>
  );
};
