import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <Link to={`/journal/${article.slug}`} className="block relative h-60 overflow-hidden bg-neutral-100">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-wanderly-dark/85 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-white/10">
            {article.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-wanderly-muted mb-2.5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-wanderly-emerald" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-wanderly-emerald" />
              <span>{article.readTime}</span>
            </div>
          </div>

          {/* Title */}
          <Link to={`/journal/${article.slug}`}>
            <h3 className="text-xl font-bold text-wanderly-dark group-hover:text-wanderly-emerald transition-colors duration-200 line-clamp-2 leading-snug">
              {article.title}
            </h3>
          </Link>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 line-clamp-2 mt-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>

        {/* Footer: Author & Link */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-7 h-7 rounded-full object-cover border border-wanderly-emerald/20"
            />
            <span className="text-xs font-medium text-gray-700">{article.author.name}</span>
          </div>

          <Link
            to={`/journal/${article.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-wanderly-emerald group-hover:text-wanderly-emerald-hover group-hover:translate-x-1 transition-all"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};
