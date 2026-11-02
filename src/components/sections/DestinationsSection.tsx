import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { destinationsData } from '../../data/destinations';
import type { Destination, DestinationCategory } from '../../types';
import { DestinationCard } from '../cards/DestinationCard';
import { DestinationModal } from '../modals/DestinationModal';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface DestinationsSectionProps {
  onEnquire: (dest: Destination) => void;
  showAllLink?: boolean;
}

const categories: { label: string; value: DestinationCategory }[] = [
  { label: 'All', value: 'all' },
  { label: 'Beach', value: 'beach' },
  { label: 'Mountains', value: 'mountains' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Luxury', value: 'luxury' },
];

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onEnquire,
  showAllLink = true,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null);

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((dest) => {
      const matchesCategory =
        selectedCategory === 'all' || dest.category === selectedCategory;
      const matchesSearch =
        dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dest.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="destinations" className="py-24 sm:py-32 bg-wanderly-dark relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-wanderly-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <SectionHeading
          badge="Curated Escapes"
          badgeIcon={<Compass className="w-3.5 h-3.5" />}
          title="Find Your Next Escape"
          subtitle="Explore extraordinary places that make every journey unforgettable."
          align="center"
          theme="dark"
        />

        {/* Filter Bar & Live Search */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-5">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full glass-dark border border-white/10 max-w-full overflow-x-auto">
            {categories.map((cat) => {
              const active = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-wanderly-gold text-wanderly-dark shadow-gold-glow/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination, country..."
              className="w-full bg-white/5 border border-white/15 rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold transition-colors"
            />
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-12">
          {filteredDestinations.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-12 gap-6 sm:gap-8 auto-rows-[380px] sm:auto-rows-[420px]"
            >
              <AnimatePresence>
                {filteredDestinations.map((dest) => {
                  // If filtering by search/category, make cards uniform if filtered, or use asymmetric span
                  const spanClass =
                    selectedCategory === 'all' && !searchQuery
                      ? dest.bentoSpan || 'col-span-12 md:col-span-4'
                      : 'col-span-12 md:col-span-6 lg:col-span-4';

                  return (
                    <DestinationCard
                      key={dest.id}
                      destination={dest}
                      onExplore={(d) => setActiveModalDest(d)}
                      className={spanClass}
                    />
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-20 text-center glass-dark rounded-3xl border border-white/10 p-8">
              <Compass className="w-12 h-12 text-wanderly-gold/40 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">No destinations found</h3>
              <p className="text-sm text-gray-400 mt-1 max-w-md mx-auto">
                Try clearing your search query or choosing another category like Mountains or Beach.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4"
              >
                Reset Filters
              </Button>
            </div>
          )}
        </div>

        {/* View All Inner Page Link */}
        {showAllLink && (
          <div className="mt-14 text-center">
            <Link to="/destinations">
              <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Explore All 8 World Destinations
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Destination Quick-View Modal */}
      <DestinationModal
        destination={activeModalDest}
        isOpen={Boolean(activeModalDest)}
        onClose={() => setActiveModalDest(null)}
        onEnquire={(dest) => {
          onEnquire(dest);
        }}
      />
    </section>
  );
};
