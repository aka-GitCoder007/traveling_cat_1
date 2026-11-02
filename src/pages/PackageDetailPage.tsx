import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Star,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Compass,
  Users,
  Gauge,
  Share2,
  Phone,
  Mail,
  ChevronRight,
} from 'lucide-react';
import { toast } from 'sonner';
import { packagesData } from '../data/packages';
import { destinationsData } from '../data/destinations';
import { formatINR } from '../utils/formatters';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

export const PackageDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openEnquiry } = useEnquiry();

  const pkg = packagesData.find((p) => p.slug === slug);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!pkg) {
    return (
      <div className="min-h-screen bg-wanderly-dark text-white flex flex-col items-center justify-center p-6 text-center">
        <Compass className="w-16 h-16 text-wanderly-gold mb-4 animate-spin-slow" />
        <h1 className="text-3xl font-extrabold text-white">Package Not Found</h1>
        <p className="text-gray-400 mt-2 max-w-md">
          This itinerary is currently not available or has been modified by our concierge.
        </p>
        <Link to="/packages" className="mt-6">
          <Button variant="gold" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
            Back to Packages
          </Button>
        </Link>
      </div>
    );
  }

  const allImages = [pkg.image, ...(pkg.gallery || [])];

  // Match parent destination if exists
  const parentDestination = destinationsData.find(
    (d) =>
      pkg.destination.toLowerCase().includes(d.name.toLowerCase()) ||
      pkg.country.toLowerCase().includes(d.country.toLowerCase())
  );

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Package link copied to clipboard!');
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
          <span>Back to Packages</span>
        </button>

        <div className="flex items-center gap-3">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share Itinerary</span>
          </button>
        </div>
      </div>

      {/* Hero Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-glass-hover bg-neutral-900 h-[420px] sm:h-[540px]">
          <motion.img
            key={activeImageIndex}
            src={allImages[activeImageIndex]}
            alt={pkg.title}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-wanderly-dark/40 to-black/30" />

          {/* Top Overlays */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <span className="glass-dark px-4 py-1.5 rounded-full text-xs font-semibold text-wanderly-gold uppercase tracking-wider border border-wanderly-gold/30">
              {pkg.category} Journey
            </span>
            <div className="glass-dark px-3 py-1.5 rounded-full text-xs font-semibold text-white flex items-center gap-1.5 border border-white/20">
              <Star className="w-4 h-4 text-wanderly-gold fill-wanderly-gold" />
              <span>{pkg.rating}</span>
              <span className="text-gray-400">({pkg.reviewCount} guest reviews)</span>
            </div>
          </div>

          {/* Bottom Hero Info */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-wanderly-gold font-semibold uppercase tracking-widest mb-1.5">
                <MapPin className="w-4 h-4" />
                <span>{pkg.destination}, {pkg.country}</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
                {pkg.title}
              </h1>
            </div>

            <div className="glass-dark p-4 rounded-2xl border border-white/15 flex items-center gap-6">
              <div>
                <span className="text-[11px] text-gray-400 block uppercase tracking-wider">Per Guest From</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-black text-wanderly-gold">
                    {formatINR(pkg.startingPriceINR)}
                  </span>
                  {pkg.originalPriceINR && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatINR(pkg.originalPriceINR)}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-400 block font-normal">All taxes & permits included</span>
              </div>
              <Button
                variant="gold"
                size="md"
                onClick={() =>
                  openEnquiry({
                    title: `Package Booking: ${pkg.title}`,
                    subtitle: `${pkg.duration} in ${pkg.destination} • Starting at ${formatINR(pkg.startingPriceINR)}`,
                    type: 'package',
                  })
                }
                icon={<Sparkles className="w-4 h-4" />}
              >
                Enquire Now
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
                className={`relative h-20 w-32 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${activeImageIndex === idx
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
        {/* Left Column (8 cols): Overview, Highlights, Inclusions/Exclusions, Day-by-Day Itinerary */}
        <div className="lg:col-span-8 space-y-12">
          {/* Narrative Overview */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
                Trip Description
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                The Journey at a Glance
              </h2>
            </div>
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-light">
              {pkg.fullDescription}
            </p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {pkg.shortDescription}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Duration</span>
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-wanderly-gold" />
                  {pkg.duration}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Group Size</span>
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-wanderly-gold" />
                  {pkg.groupSize.split(' ')[0]}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Difficulty</span>
                <span className="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-wanderly-gold" />
                  {pkg.difficulty}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs text-gray-400 block mb-1">Experience Tier</span>
                <span className="text-sm sm:text-base font-bold text-wanderly-gold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Signature
                </span>
              </div>
            </div>
          </section>

          {/* Highlights */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
              Key Experiences
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Itinerary Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pkg.highlights.map((highlight, index) => (
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

          {/* What's Included & What's Excluded */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
              Transparency
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-6">
              Inclusions & Exclusions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  What Is Included
                </h3>
                <div className="space-y-2.5">
                  {pkg.included.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Excluded */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2 text-gray-400">
                  <XCircle className="w-5 h-5 text-gray-400" />
                  What Is Excluded
                </h3>
                <div className="space-y-2.5">
                  {pkg.excluded.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-500 mt-2 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Full Day-by-Day Itinerary */}
          <section className="glass-dark p-8 sm:p-10 rounded-3xl border border-white/10">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
              Day-by-Day Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Detailed Journey Route
            </h2>
            <p className="text-xs text-gray-400 mb-8">
              Each day has been curated with dedicated private transport, certified guides, and boutique lodging.
            </p>

            <div className="relative pl-6 sm:pl-8 border-l-2 border-wanderly-gold/30 space-y-8">
              {pkg.itinerary.map((item) => (
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

          {/* Parent Destination Link */}
          {parentDestination && (
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src={parentDestination.heroImage}
                  alt={parentDestination.name}
                  className="w-16 h-16 rounded-2xl object-cover"
                />
                <div>
                  <span className="text-xs text-wanderly-gold uppercase tracking-wider block">
                    Explore Destination Sanctuary
                  </span>
                  <h4 className="text-lg font-bold text-white">{parentDestination.name}, {parentDestination.country}</h4>
                  <p className="text-xs text-gray-400">Discover all seasonal highlights and regional lore.</p>
                </div>
              </div>

              <Link to={`/destinations/${parentDestination.slug}`}>
                <Button variant="outline" size="sm" icon={<ChevronRight className="w-4 h-4" />}>
                  Destination Guide
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Right Sidebar (4 cols): Sticky Concierge Booking Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            <div className="glass-dark-card p-6 sm:p-8 rounded-3xl border border-wanderly-gold/30 shadow-glass-hover space-y-6">
              <div className="border-b border-white/10 pb-5">
                <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-1">
                  Private Curated Booking
                </span>
                <h3 className="text-2xl font-black text-white">{pkg.title}</h3>
                <p className="text-xs text-gray-400 mt-1">
                  {pkg.destination}, {pkg.country}
                </p>
              </div>

              {/* Price Callout */}
              <div className="space-y-1">
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Per Guest Investment</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-wanderly-gold">
                    {formatINR(pkg.startingPriceINR)}
                  </span>
                  {pkg.originalPriceINR && (
                    <span className="text-sm text-gray-400 line-through">
                      {formatINR(pkg.originalPriceINR)}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-gray-400 block">Inclusive of handpicked luxury villas, rail/yacht transfers.</span>
              </div>

              {/* Key Attributes */}
              <div className="space-y-3 pt-3 border-t border-white/10 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total Duration:</span>
                  <span className="font-semibold text-white">{pkg.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Party Size:</span>
                  <span className="font-semibold text-white">{pkg.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Difficulty Grade:</span>
                  <span className="font-semibold text-white">{pkg.difficulty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Category:</span>
                  <span className="font-semibold text-wanderly-gold uppercase">{pkg.category}</span>
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
                      title: `Book Package: ${pkg.title}`,
                      subtitle: `${pkg.duration} • Investment from ${formatINR(pkg.startingPriceINR)}`,
                      type: 'package',
                    })
                  }
                  icon={<Sparkles className="w-5 h-5" />}
                >
                  Reserve This Itinerary
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
                <span>Zero-penalty flexible reschedule protection included.</span>
              </div>
            </div>

            {/* Direct Telephone Liaison Box */}
            <div className="glass-dark p-6 rounded-3xl border border-white/10 space-y-3">
              <h4 className="text-xs uppercase font-bold tracking-widest text-wanderly-gold">
                Direct Concierge Desk
              </h4>
              <p className="text-xs text-gray-300">
                Would you like to adjust hotels, dates, or add private helicopter transfers?
              </p>
              <div className="space-y-2 pt-2 text-xs text-gray-200">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-wanderly-gold" />
                  <span>+91 98765 43210 (VIP Desk)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-wanderly-gold" />
                  <span>concierge@wanderly.luxury</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
