import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Clock,
  BookOpen,
  Share2,
  Sparkles,
  Tag,
  ArrowRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { articlesData } from '../data/articles';
import { ArticleCard } from '../components/cards/ArticleCard';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-wanderly-softbg text-wanderly-dark flex flex-col items-center justify-center p-6 text-center">
        <BookOpen className="w-16 h-16 text-wanderly-emerald mb-4 animate-spin-slow" />
        <h1 className="text-3xl font-extrabold text-wanderly-dark">Article Not Found</h1>
        <p className="text-gray-500 mt-2 max-w-md">
          This journal dispatch may have been moved or updated.
        </p>
        <Link to="/journal" className="mt-6">
          <Button variant="emerald" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Journal
          </Button>
        </Link>
      </div>
    );
  }

  const relatedArticles = articlesData
    .filter((a) => a.id !== article.id && a.category === article.category)
    .concat(articlesData.filter((a) => a.id !== article.id && a.category !== article.category))
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Article link copied to clipboard!');
    }
  };

  return (
    <article className="min-h-screen bg-wanderly-softbg text-wanderly-dark pt-24 pb-28">
      {/* Top Bar Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-gray-200">
        <button
          onClick={() => navigate('/journal')}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-wanderly-emerald transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Dispatches</span>
        </button>

        <button
          onClick={handleShare}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-700 hover:text-wanderly-emerald shadow-sm transition-colors cursor-pointer"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Article</span>
        </button>
      </div>

      {/* Article Header */}
      <header className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-wanderly-emerald/10 text-wanderly-emerald border border-wanderly-emerald/20">
            {article.category}
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-wanderly-emerald" />
            {article.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-wanderly-dark tracking-tight leading-[1.15]">
          {article.title}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
          {article.excerpt}
        </p>

        {/* Author Bio Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-wanderly-emerald shadow-sm"
            />
            <div>
              <span className="text-base font-bold text-wanderly-dark block">{article.author.name}</span>
              <span className="text-xs text-gray-500 block">{article.author.role}</span>
            </div>
          </div>

          <div className="text-right text-xs text-gray-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-wanderly-emerald" />
            <span>Published {article.date}</span>
          </div>
        </div>
      </header>

      {/* Main Cover Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[380px] sm:h-[500px] border border-gray-200">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Body Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className={index === 0 ? 'text-xl sm:text-2xl text-gray-900 font-light leading-relaxed' : ''}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Editorial Pull Quote */}
        <div className="my-10 p-8 rounded-3xl bg-wanderly-emerald-subtle/60 border-l-4 border-wanderly-emerald">
          <p className="text-xl sm:text-2xl font-serif italic text-wanderly-emerald">
            "To travel with Wanderly is not simply about changing latitudes—it is about entering the living poetry of a place with an open heart."
          </p>
          <span className="text-xs uppercase tracking-widest text-wanderly-dark font-bold block mt-3">
            — Wanderly Curatorial Philosophy
          </span>
        </div>

        {/* Tags */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1 text-xs text-gray-500 mr-2">
            <Tag className="w-3.5 h-3.5" />
            <span>Tags:</span>
          </div>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-white border border-gray-200 text-xs text-gray-700 shadow-sm"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Call to Action Box */}
        <div className="mt-12 p-8 rounded-3xl bg-wanderly-dark text-white border border-wanderly-gold/30 shadow-glass flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block">
              Inspired by this dispatch?
            </span>
            <h3 className="text-xl font-bold text-white">Let Us Craft Your Journey</h3>
            <p className="text-xs text-gray-300">
              Our travel authors work side-by-side with destination architects.
            </p>
          </div>

          <Button
            variant="gold"
            size="md"
            onClick={() =>
              openEnquiry({
                title: `Inspired by Story: ${article.title}`,
                subtitle: `Inquiry related to ${article.category}`,
                type: 'general',
              })
            }
            icon={<Sparkles className="w-4 h-4" />}
          >
            Design This Route
          </Button>
        </div>
      </div>

      {/* Related Articles Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 pt-16 border-t border-gray-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-emerald block mb-1">
              Keep Reading
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-wanderly-dark">
              Related Dispatches
            </h2>
          </div>
          <Link to="/journal">
            <Button variant="emerald" size="sm" icon={<ArrowRight className="w-4 h-4" />}>
              All Stories
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedArticles.map((rel) => (
            <ArticleCard key={rel.id} article={rel} />
          ))}
        </div>
      </section>
    </article>
  );
};

