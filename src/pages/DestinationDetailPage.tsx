import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Clock,
  Star,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Compass,
  ArrowRight,
  Phone,
  Mail,
  Share2,
} from 'lucide-react';
import { toast } from 'sonner';
import { destinationsData } from '../data/destinations';
import { packagesData } from '../data/packages';
import { formatINR } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

export const DestinationDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const destination = destinationsData.find((d) => d.slug === slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!destination) {
    return (
      <div className="min-h-screen bg-wanderly-dark text-white flex flex-col items-center justify-center p-6 text-center">
        <Compass className="w-16 h-16 text-wanderly-gold mb-4 animate-spin-slow" />
        <h1 className="text-3xl font-extrabold text-white">Destination Not Found</h1>
        <p className="text-gray-400 mt-2 max-w-md">
          The sanctuary you are seeking is either secluded or the link has expired.
        </p>
        <Link to="/destinations" className="mt-6">
          <Button variant="gold" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Destinations
          </Button>
        </Link>
      </div>
    );
  }

  const allImages = [destination.heroImage, ...(destination.gallery || [])];

  // Related packages matching this destination or country
  const relatedPackages = packagesData.filter(
    (pkg) =>
      pkg.destination.toLowerCase().includes(destination.name.toLowerCase()) ||
      pkg.country.toLowerCase().includes(destination.country.toLowerCase())
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Destination link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-24 pb-28">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between border-b border-white/10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gray-300 hover:text-wanderly-gold transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Destinations</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-glass-hover bg-neutral-900 h-[420px] sm:h-[540px]">
          <motion.img
            key={activeImageIndex}
            src={allImages[activeImageIndex]}
            alt={destination.name}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/40 to-black/30" />

          {/* Top Overlays */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span className="glass-dark px-4 py-1.5 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
              {destination.category}
            </span>
            <div className="glass-dark px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20">
              <Star className="w-4 h-4 text-wanderly-gold fill-wanderly-gold" />
              <span>{destination.rating}</span>
              <span className="text-gray-400">({destination.reviewsCount} reviews)</span>
            </div>
          </div>

          {/* Bottom Hero Info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-wanderly-gold font-semibold uppercase tracking-widest mb-1.5">
                <MapPin className="w-4 h-4" />
                <span>{destination.country} • {destination.region}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                {destination.name}
              </h1>
            </div>

            <div className="glass-dark p-4 rounded-2xl border border-white/15 flex items-center gap-6">
              <div>
                <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Starting from</span>
                <span className="text-2xl sm:text-3xl font-black text-wanderly-gold">
                  {formatINR(destination.startingPriceINR)}
                </span>
                <span className="text-[11px] text-gray-400 block font-normal">per traveler</span>
              </div>
              <Button
                variant="gold"
                size="md"
                onClick={() =>
                  openEnquiry({
                    title: `Curated Voyage to ${destination.name}`,
                    subtitle: `${destination.duration} in ${destination.country} • ${destination.bestSeason}`,
                    type: 'destination',
                  })
                }
                icon={<Sparkles className="w-4 h-4" />}
              >
                Plan Journey
              </Button>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails Strip */}
        {allImages.length > 1 && (
          <div className="mt-4 flex items-center gap-3 overflow-x-auto pb-2">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative h-20 w-32 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                  activeImageIndex === idx
                    ? 'border-wanderly-gold shadow-gold-glow/40 scale-102'
                    : 'border-white/15 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Main Content & Sidebar Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column (8 cols): Overview, Highlights, Day-by-Day Itinerary */}
        <div className="lg:col-span-8 space-y-12">
          {/* Narrative Overview */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
                Sanctuary Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                About {destination.name}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              {destination.fullDescription}
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {destination.shortDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Recommended Duration</span>
                <span className="text-base font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-wanderly-gold" />
                  {destination.duration}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Prime Season</span>
                <span className="text-base font-bold text-white flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-wanderly-gold" />
                  {destination.bestSeason.split(' ')[0]} Season
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Guest Score</span>
                <span className="text-base font-bold text-white flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-wanderly-gold fill-wanderly-gold" />
                  {destination.rating} / 5.0
                </span>
              </div>
            </div>
          </section>

          {/* Curated Highlights */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
              Unmatched Exclusives
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Journey Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {destination.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3 group hover:border-wanderly-gold/40 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-wanderly-emerald flex items-center justify-center text-wanderly-gold shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-200 leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Day-by-Day Itinerary Preview */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
              Signature Route
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Sample Itinerary
            </h2>
            <p className="text-xs text-gray-400 mb-8">
              * Fully customizable by your personal Wanderly travel architect prior to departure.
            </p>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-wanderly-gold/30 space-y-8">
              {destination.itineraryPreview.map((item) => (
                <div key={item.day} className="relative group">
                  {/* Step Dot */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-0 w-8 h-8 rounded-full bg-wanderly-dark border-2 border-wanderly-gold flex items-center justify-center text-xs font-mono font-bold text-wanderly-gold shadow-gold-glow/20">
                    {item.day}
                  </div>

                  <div className="bg-white/5 p-5 rounded-2xl border border-white/10 group-hover:border-wanderly-gold/30 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-wanderly-gold font-bold">
                        Day {item.day}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Related Travel Packages */}
          {relatedPackages.length > 0 && (
            <section className="pt-4">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-1">
                    Turnkey Itineraries
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Packages in {destination.name}
                  </h2>
                </div>
                <Link to="/packages">
                  <Button variant="outline" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                    All Packages
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="glass-dark rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
                  >
                    <div className="h-44 relative overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="glass-dark px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-wanderly-gold uppercase">
                          {pkg.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-wanderly-gold transition-colors">
                          {pkg.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                          {pkg.shortDescription}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-gray-400 block">Starting from</span>
                          <span className="text-lg font-bold text-wanderly-gold">
                            {formatINR(pkg.startingPriceINR)}
                          </span>
                        </div>
                        <Link to={`/packages/${pkg.slug}`}>
                          <Button variant="outline" size="sm">
                            View Itinerary
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar (4 cols): Sticky Concierge Booking Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="glass-dark-card p-6 sm:p-8 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover space-y-6">
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-1">
                  Private Expedition
                </span>
                <h3 className="text-2xl font-black text-white">{destination.name}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  Tailored specifically to your party size, preferred flights, and pacing.
                </p>
              </div>

              {/* Price Callout */}
              <div className="space-y-1">
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Investment</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-wanderly-gold">
                    {formatINR(destination.startingPriceINR)}
                  </span>
                  <span className="text-xs text-gray-400">/ per guest</span>
                </div>
                <span className="text-[11px] text-gray-400 block">Includes 5-star lodging, private transfers & permits.</span>
              </div>

              {/* Key Attributes */}
              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="font-semibold text-white">{destination.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Best Season:</span>
                  <span className="font-semibold text-white text-right max-w-[170px] truncate">
                    {destination.bestSeason}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Travel Style:</span>
                  <span className="font-semibold text-wanderly-gold uppercase">{destination.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Dedicated Guide:</span>
                  <span className="font-semibold text-white">Private Certified Escort</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full justify-center shadow-gold-glow"
                  onClick={() =>
                    openEnquiry({
                      title: `Reserve Bespoke Tour: ${destination.name}`,
                      subtitle: `${destination.duration} • Investment from ${formatINR(destination.startingPriceINR)}`,
                      type: 'destination',
                    })
                  }
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Enquire About {destination.name}
                </Button>

                <Link to="/#trip-planner" className="block w-full">
                  <Button variant="outline" size="md" className="w-full justify-center">
                    Customize in Trip Planner
                  </Button>
                </Link>
              </div>

              {/* Concierge Assurance */}
              <div className="pt-2 flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-wanderly-gold shrink-0" />
                <span>24/7 dedicated private liaison allocated upon booking confirmation.</span>
              </div>
            </div>

            {/* Direct Telephone Liaison Box */}
            <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-wanderly-gold">
                Immediate Concierge Support
              </h4>
              <p className="text-xs text-gray-300">
                Have specific dates or requirements? Speak directly with our destination desk.
              </p>
              <div className="space-y-2 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-wanderly-gold" />
                  <span>+91 98765 43210 (Global VIP Line)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-wanderly-gold" />
                  <span>destinations@wanderly.luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

