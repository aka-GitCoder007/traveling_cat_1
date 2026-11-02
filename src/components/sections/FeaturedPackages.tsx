import React, { useState, useMemo } from 'react';
import { Sparkles, Search, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { packagesData } from '../../data/packages';
import type { TravelPackage, PackageCategory } from '../../types';
import { PackageCard } from '../cards/PackageCard';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface FeaturedPackagesProps {
  onEnquire: (pkg: TravelPackage) => void;
  showAllLink?: boolean;
}

const packageCategories: { label: string; value: PackageCategory }[] = [
  { label: 'All Journeys', value: 'all' },
  { label: 'Luxury', value: 'luxury' },
  { label: 'Adventure', value: 'adventure' },
  { label: 'Honeymoon', value: 'honeymoon' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Family', value: 'family' },
];

export const FeaturedPackages: React.FC<FeaturedPackagesProps> = ({
  onEnquire,
  showAllLink = true,
}) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<PackageCategory>('all');
  const [sortBy, setSortBy] = useState<'recommended' | 'price-asc' | 'price-desc'>('recommended');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAndSortedPackages = useMemo(() => {
    let list = packagesData.filter((pkg) => {
      const matchesCategory =
        selectedCategory === 'all' || pkg.category === selectedCategory;
      const matchesSearch =
        pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pkg.country.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.startingPriceINR - b.startingPriceINR);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.startingPriceINR - a.startingPriceINR);
    }

    return list;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <section id="packages" className="py-24 sm:py-32 bg-wanderly-dark relative overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured Curations"
          badgeIcon={<Sparkles className="w-3.5 h-3.5" />}
          title="Journeys Worth Taking"
          subtitle="Pre-designed masterpieces with flexible private customisation options."
          align="center"
          theme="dark"
        />

        {/* Controls: Category Filter, Search, and Price Sorting */}
        <div className="mt-12 flex flex-col lg:flex-row items-center justify-between gap-5">
          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-full glass-dark border border-white/10 max-w-full overflow-x-auto">
            {packageCategories.map((cat) => {
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

          {/* Search & Sort By */}
          <div className="flex items-center gap-3 w-full lg:w-auto">
            {/* Search */}
            <div className="relative flex-1 lg:w-60">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search packages..."
                className="w-full bg-white/5 border border-white/15 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-gray-400 focus:outline-none focus:border-wanderly-gold"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort packages"
                className="bg-white/5 border border-white/15 rounded-full px-4 py-2 text-xs sm:text-sm text-white focus:outline-none focus:border-wanderly-gold cursor-pointer"
              >
                <option value="recommended" className="bg-wanderly-dark text-white">Recommended</option>
                <option value="price-asc" className="bg-wanderly-dark text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-wanderly-dark text-white">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAndSortedPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onViewDetails={(p) => navigate(`/packages/${p.slug}`)}
              onEnquire={(p) => onEnquire(p)}
            />
          ))}
        </div>

        {/* View All Inner Page Link */}
        {showAllLink && (
          <div className="mt-14 text-center">
            <Link to="/packages">
              <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                View All Curated Itineraries
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
