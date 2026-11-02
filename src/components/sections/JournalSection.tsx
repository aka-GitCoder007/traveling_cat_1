import React, { useState } from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articlesData } from '../../data/articles';
import { ArticleCard } from '../cards/ArticleCard';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

interface JournalSectionProps {
  showAllLink?: boolean;
}

export const JournalSection: React.FC<JournalSectionProps> = ({ showAllLink = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Travel Guides', 'Adventure', 'Culture', 'Luxury Travel', 'Travel Tips'];

  const filteredArticles = selectedCategory === 'All'
    ? articlesData
    : articlesData.filter((a) => a.category === selectedCategory);

  return (
    <section id="journal" className="py-24 sm:py-32 bg-wanderly-softbg text-wanderly-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Wanderly Journal"
          badgeIcon={<BookOpen className="w-3.5 h-3.5 text-wanderly-emerald" />}
          title="Stories That Inspire the Journey"
          subtitle="Reflections, essays, and insider chronicles penned by our worldwide storytellers."
          align="center"
          theme="light"
        />

        {/* Filter categories */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  active
                    ? 'bg-wanderly-emerald text-white shadow-md'
                    : 'bg-white text-gray-600 hover:text-wanderly-dark hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Articles Grid (show up to 6) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.slice(0, 6).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {showAllLink && (
          <div className="mt-14 text-center">
            <Link to="/journal">
              <Button
                variant="emerald"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore All Journal Dispatches
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
