import React from 'react';
import {
  Compass,
  Award,
  ShieldCheck,
  Heart,
  Globe2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { useEnquiry } from '../context/EnquiryContext';

const teamMembers = [
  {
    name: 'Elena Rossi',
    role: 'Founder & Chief Travel Architect',
    location: 'Zurich, Switzerland',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    bio: 'Former architectural historian turned expedition planner, Elena established Wanderly in 2011 to replace mass tourism with contemplative, high-craft travel.',
  },
  {
    name: 'Marcus Vance',
    role: 'Director of High-Altitude Expeditions',
    location: 'Geneva & Zermatt',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80',
    bio: 'Certified IFMGA mountain guide with 22 years of alpine leadership across Patagonia, the Himalayas, and the Swiss Alps.',
  },
  {
    name: 'Priya Nair',
    role: 'Head of South Asian Cultural Heritage',
    location: 'New Delhi & Kashmir',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    bio: 'Specialist in ancient Mughal arts and traditional textiles, Priya connects travelers directly with hereditary craft masters and private estates.',
  },
  {
    name: 'Hiroshi Tanaka',
    role: 'Curator of East Asian Sanctuaries',
    location: 'Kyoto, Japan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    bio: 'Descendant of a Kyoto tea family, Hiroshi coordinates exclusive after-hours UNESCO temple permissions and Zen meditation retreats.',
  },
];

const pillars = [
  {
    icon: Compass,
    title: 'Bespoke Architecture',
    desc: 'We never duplicate an itinerary. Every day is engineered around your private tempo, sleeping preferences, and curiosity.',
  },
  {
    icon: Heart,
    title: 'Local Empowerment',
    desc: 'Our private guides are local historians, botanists, and storytellers who receive fair, market-leading compensation.',
  },
  {
    icon: Globe2,
    title: 'Ecological Stewardship',
    desc: '100% of flight carbon from our trips is offset through verified alpine rewilding and ocean coral restoration projects.',
  },
  {
    icon: ShieldCheck,
    title: 'Uncompromising Security',
    desc: 'Round-the-clock emergency medical coordination, private satellite connectivity, and discreet executive liaison.',
  },
];

const awards = [
  { year: '2025', award: "World's Leading Bespoke Travel Agency", org: 'World Travel Awards' },
  { year: '2024', award: 'Best Ultra-Luxury Itinerary Designer', org: 'Robb Report Best of the Best' },
  { year: '2023', award: 'Top Experiential Travel Curator', org: "Condé Nast Traveler Readers' Choice" },
  { year: '2022', award: 'Excellence in Sustainable Luxury', org: 'Travel + Leisure Global Honors' },
];

export const AboutPage: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <div className="min-h-screen bg-wanderly-dark text-white pt-28 pb-24">
      {/* Hero Header */}
      <div className="relative py-20 sm:py-28 border-b border-white/10 overflow-hidden bg-gradient-to-b from-black/90 via-wanderly-dark to-wanderly-dark">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-wanderly-emerald/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-wanderly-gold/10 text-wanderly-gold border border-wanderly-gold/30 text-xs font-semibold uppercase tracking-widest mb-6">
            <Compass className="w-3.5 h-3.5" />
            <span>Established 2011 • Zurich</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
            We Believe Travel Should Be an Art Form.
          </h1>
          <p className="mt-6 text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Wanderly was created to liberate travelers from generic package vacations. We engineer journeys that linger in your memories for a lifetime.
          </p>
        </div>
      </div>

      {/* Narrative Section: The Origin */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[480px] border border-white/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85"
                alt="Swiss Alpine Lake"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark p-5 rounded-2xl border border-white/15">
                <span className="text-xs uppercase font-mono font-bold text-wanderly-gold block">
                  Our Founding Principle
                </span>
                <p className="text-sm text-gray-200 mt-1">
                  "Speed is the enemy of depth. Real wonder begins when you slow down and listen."
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block">
              The Wanderly Origin
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-snug">
              From Private Alpine Chalets to a Worldwide Atelier
            </h2>
            <p className="text-base text-gray-200 leading-relaxed font-light">
              In the winter of 2011, founder Elena Rossi observed how affluent travelers were being sold identical, crowded vacation packages that skimmed the surface of local reality. Armed with personal friendships with mountain guides, historians, and vineyard owners across Europe, she began hand-crafting private journeys for select patrons.
            </p>
            <p className="text-base text-gray-300 leading-relaxed">
              Today, Wanderly operates active concierge bureaus across Zurich, New Delhi, Singapore, and London. We manage a strictly limited portfolio of private voyages every season to maintain uncompromised attention to detail.
            </p>

            <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
              <div>
                <span className="text-3xl font-black text-wanderly-gold">15+</span>
                <span className="text-xs text-gray-400 block mt-0.5">Years of Bespoke Mastery</span>
              </div>
              <div>
                <span className="text-3xl font-black text-wanderly-gold">98.4%</span>
                <span className="text-xs text-gray-400 block mt-0.5">Guest Loyalty & Referrals</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Four Defining Pillars */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
            Guiding Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            The Four Pillars of Wanderly
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-3">
            Every itinerary we design is measured against four unyielding commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="glass-dark p-8 rounded-3xl border border-white/10 hover:border-wanderly-gold/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-wanderly-emerald/90 border border-wanderly-gold/40 flex items-center justify-center text-wanderly-gold mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-wanderly-gold transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Leadership & Master Travel Designers Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-wanderly-gold block mb-2">
            The Curators
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Meet Our Travel Architects
          </h2>
          <p className="text-sm sm:text-base text-gray-300 mt-3">
            The passionate minds orchestrating your flights, permits, exclusive private suites, and personal storytellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="glass-dark rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
            >
              <div className="relative h-72 overflow-hidden bg-neutral-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wanderly-dark via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-xs text-wanderly-gold font-mono block">
                    {member.location}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-wanderly-gold transition-colors">
                    {member.name}
                  </h3>
                  <span className="text-xs text-gray-400 block mt-0.5">{member.role}</span>
                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accolades & Industry Recognition */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
        <div className="glass-dark-card p-8 sm:p-12 rounded-3xl border border-wanderly-gold/30 shadow-glass">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-wanderly-gold/15 text-wanderly-gold text-xs font-semibold uppercase tracking-widest mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>International Honors</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Recognized by Discerning Critics
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 divide-y sm:divide-y-0 sm:gap-8">
            {awards.map((item, idx) => (
              <div key={idx} className="pt-4 sm:pt-0 flex items-start gap-4">
                <div className="text-2xl font-mono font-black text-wanderly-gold/40">
                  {item.year}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">{item.award}</h4>
                  <span className="text-xs text-wanderly-gold mt-0.5 block">{item.org}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Begin Your Private Conversation
        </h2>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Whether you have a specific date in mind or wish to brainstorm ideas over espresso, our architects are available.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            onClick={() =>
              openEnquiry({
                title: 'Private Consultation with Wanderly Architects',
                subtitle: 'Arrange a 1-on-1 itinerary design consultation.',
                type: 'general',
              })
            }
            icon={<Sparkles className="w-5 h-5" />}
          >
            Schedule Consultation
          </Button>
          <Link to="/contact">
            <Button variant="outline" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Contact Our Bureaus
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
