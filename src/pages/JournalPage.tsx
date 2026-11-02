import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BookOpen, Search, ArrowRight, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articlesData } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Button } from '../components/common/Button';

const categories = ['All', 'Travel Guides', 'Adventure', 'Culture', 'Luxury Travel', 'Travel Tips'];

export const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    return articlesData.filter((article) => {
      const matchesCategory =
        selectedCategory === 'All' || article.category === selectedCategory;
      const matchesSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articlesData.find((a) => a.featured) || articlesData[0];

  return (
    <div className="min-h-screen bg-wanderly-softbg text-wanderly-dark pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 bg-wanderly-dark text-white border-b border-white/10 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wanderly-emerald/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Reflections & Stories</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
            The Wanderly Journal
          </h1>
          <p className="mt-4 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Stories of quiet temples, high alpine rail crossings, and glacial expeditions. Written by our global historians and travel essayists.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Featured Story Hero Card */}
        {selectedCategory === 'All' && !searchQuery && (
          <div className="mb-14">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-emerald block mb-3">
              Editor's Selection
            </span>
            <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-xl grid grid-cols-1 lg:grid-cols-12 group">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-neutral-900">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-wanderly-dark/85 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-white/10">
                    {featuredArticle.category}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-wanderly-emerald" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-wanderly-emerald" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                  </div>

                  <Link to={`/journal/${featuredArticle.slug}`}>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-wanderly-dark group-hover:text-wanderly-emerald transition-colors leading-snug">
                      {featuredArticle.title}
                    </h2>
                  </Link>

                  <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={featuredArticle.author.avatar}
                      alt={featuredArticle.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-wanderly-emerald/30"
                    />
                    <div>
                      <span className="text-sm font-bold text-gray-900 block">{featuredArticle.author.name}</span>
                      <span className="text-xs text-gray-500 block">{featuredArticle.author.role}</span>
                    </div>
                  </div>

                  <Link to={`/journal/${featuredArticle.slug}`}>
                    <Button variant="emerald" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
                      Read Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 bg-white p-4 rounded-3xl border border-gray-200 shadow-sm">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-wanderly-emerald text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:text-wanderly-dark hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search stories, tags..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full pl-9 pr-4 py-2 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-wanderly-emerald transition-colors"
            />
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs text-gray-500 px-2">
          <span>
            Showing <strong className="text-gray-900">{filteredArticles.length}</strong> dispatches
          </span>
          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-wanderly-emerald font-semibold hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Article Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredArticles.length === 0 && (
          <div className="py-24 text-center bg-white rounded-3xl border border-gray-200 p-8 max-w-lg mx-auto mt-10">
            <BookOpen className="w-14 h-14 text-wanderly-emerald/40 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900">No Stories Found</h3>
            <p className="text-sm text-gray-500 mt-2">
              We couldn't locate any essays matching "{searchQuery}". Try browsing by categories or resetting.
            </p>
            <Button
              variant="emerald"
              size="sm"
              onClick={() => {
                setSelectedCategory('All');
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
