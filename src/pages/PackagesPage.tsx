import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Search, MapPin, Clock, Star, Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { packagesData } from '../data/packages';
import type { PackageCategory } from '../types';
import { formatINR } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

const categories: { label: string; value: PackageCategory }[] = [
  { label: 'All Packages', value: 'all' },
  { label: 'Ultra Luxury', value: 'luxury' },
  { label: 'Wild Adventure', value: 'adventure' },
  { label: 'Honeymoon & Romance', value: 'honeymoon' },
  { label: 'Cultural Living', value: 'cultural' },
  { label: 'Family & Heritage', value: 'family' },
];

const difficulties = ['All', 'Easy', 'Moderate', 'Challenging'];

export const PackagesPage: React.FC = () => {
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc' | 'rating'>('recommended');

  const filteredPackages = useMemo(() => {
    let list = packagesData.filter((pkg) => {
      const matchesCategory =
        selectedCategory === 'all' || pkg.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === 'All' || pkg.difficulty === selectedDifficulty;
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesDifficulty && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.startingPriceINR - b.startingPriceINR);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.startingPriceINR - a.startingPriceINR);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, selectedDifficulty, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 border-b border-white/10 overflow-hidden bg-gradient-to-b from-black/80 via-wanderly-dark to-wanderly-dark">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Masterpiece Itineraries</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            Curated Travel Packages
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Turnkey journeys engineered with five-star private villas, licensed cultural escorts, and VIP tarmac access. Fully adaptable to your calendar.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-wanderly-gold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" /> 100% Verified Five-Star Lodging
            </span>
            <span className="hidden sm:inline">•</span>
            <span>All-Inclusive Transfers & Private Guides</span>
          </div>
        </div>
      </div>

      {/* Filter and Control Bar */}
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
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search, Difficulty, and Sort */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-56">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold"
              />
            </div>

            {/* Difficulty Filter */}
            <div className="relative w-full sm:w-auto">
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                aria-label="Filter by difficulty"
                className="w-full bg-wanderly-dark border border-white/15 rounded-full px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-wanderly-gold cursor-pointer"
              >
                {difficulties.map((d) => (
                  <option key={d} value={d}>
                    {d === 'All' ? 'All Difficulties' : `Difficulty: ${d}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort packages"
                className="w-full bg-wanderly-dark border border-white/15 rounded-full px-3.5 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-wanderly-gold cursor-pointer"
              >
                <option value="recommended">Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-400 px-2">
          <span>
            Displaying <strong className="text-white">{filteredPackages.length}</strong> travel packages
          </span>
          {(selectedCategory !== 'all' || selectedDifficulty !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="text-wanderly-gold hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Packages Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative bg-neutral-900/90 border border-white/10 rounded-3xl overflow-hidden shadow-glass-sm hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Image Banner */}
                <div
                  className="relative h-64 overflow-hidden cursor-pointer bg-neutral-900"
                  onClick={() => navigate(`/packages/${pkg.slug}`)}
                >
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-black/30" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="glass-dark px-3 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
                      {pkg.category}
                    </span>
                    <div className="glass-dark px-2.5 py-1 rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
                      <Star className="w-3.5 h-3.5 text-wanderly-gold fill-wanderly-gold" />
                      <span>{pkg.rating}</span>
                      <span className="text-[10px] text-gray-400">({pkg.reviewCount})</span>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-4 glass-dark px-3 py-1 rounded-full text-xs text-white flex items-center gap-1.5 border border-white/15">
                    <Clock className="w-3.5 h-3.5 text-wanderly-gold" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-wanderly-gold uppercase tracking-widest font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{pkg.destination}, {pkg.country}</span>
                    </div>
                    <h3
                      onClick={() => navigate(`/packages/${pkg.slug}`)}
                      className="text-2xl font-bold text-white group-hover:text-wanderly-gold transition-colors duration-200 cursor-pointer"
                    >
                      {pkg.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 line-clamp-2 mt-2 leading-relaxed">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <span className="text-[11px] uppercase tracking-wider text-wanderly-gold font-bold block">
                      Curated Inclusions:
                    </span>
                    {pkg.highlights.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-3.5 h-3.5 text-wanderly-gold shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing and Actions */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-baseline justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-2xl font-black text-wanderly-gold">
                            {formatINR(pkg.startingPriceINR)}
                          </span>
                          {pkg.originalPriceINR && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatINR(pkg.originalPriceINR)}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-gray-400 block">per guest • all taxes included</span>
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-gray-300">
                        {pkg.difficulty}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigate(`/packages/${pkg.slug}`)}
                        className="w-full text-xs"
                        icon={<ArrowRight className="w-3.5 h-3.5" />}
                      >
                        Itinerary
                      </Button>

                      <Button
                        variant="gold"
                        size="sm"
                        onClick={() =>
                          openEnquiry({
                            title: `Package Inquiry: ${pkg.title}`,
                            subtitle: `${pkg.duration} • ${pkg.destination}, ${pkg.country}`,
                            type: 'package',
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
        {filteredPackages.length === 0 && (
          <div className="py-24 text-center glass-dark rounded-3xl border border-white/10 p-8 max-w-lg mx-auto mt-10">
            <Sparkles className="w-14 h-14 text-wanderly-gold/40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">No Packages Found</h3>
            <p className="text-sm text-gray-400 mt-2">
              No packages match your chosen filters. Please try resetting or adjusting your query.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDifficulty('All');
                setSearchQuery('');
              }}
              className="mt-6"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
