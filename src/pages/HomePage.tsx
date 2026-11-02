import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { FeatureHighlights } from '../components/sections/FeatureHighlights';
import { DestinationsSection } from '../components/sections/DestinationsSection';
import { SignatureExperiences } from '../components/sections/SignatureExperiences';
import { FeaturedPackages } from '../components/sections/FeaturedPackages';
import { HowItWorks } from '../components/sections/HowItWorks';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { TripPlannerSection } from '../components/sections/TripPlannerSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { JournalSection } from '../components/sections/JournalSection';
import { AboutTeaser } from '../components/sections/AboutTeaser';
import { NewsletterSection } from '../components/sections/NewsletterSection';
import { ContactSection } from '../components/sections/ContactSection';
import { useEnquiry } from '../context/EnquiryContext';

export const HomePage: React.FC = () => {
  const { openEnquiry } = useEnquiry();

  return (
    <main className="w-full bg-wanderly-dark text-white overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Floating Feature Highlights Banner */}
      <FeatureHighlights />

      {/* 3. Curated Escapes / Bento Destinations */}
      <DestinationsSection
        onEnquire={(dest) =>
          openEnquiry({
            title: `Inquiry: ${dest.name}, ${dest.country}`,
            subtitle: `Starting from ${dest.startingPriceINR.toLocaleString('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 })} • ${dest.duration}`,
            type: 'destination',
          })
        }
      />

      {/* 4. Signature Experiences Showcase */}
      <SignatureExperiences />

      {/* 5. Featured Travel Packages */}
      <FeaturedPackages
        onEnquire={(pkg) =>
          openEnquiry({
            title: `Package Inquiry: ${pkg.title}`,
            subtitle: `${pkg.duration} • ${pkg.destination}, ${pkg.country}`,
            type: 'package',
          })
        }
      />

      {/* 6. How It Works Timeline */}
      <HowItWorks />

      {/* 7. Why Choose Us / Value Proposition & Stats */}
      <WhyChooseUs />

      {/* 8. Interactive Trip Planner Concierge */}
      <TripPlannerSection />

      {/* 9. Verified Travelers Testimonials */}
      <TestimonialsSection />

      {/* 10. The Wanderly Journal / Travel Stories */}
      <JournalSection />

      {/* 11. Brand Philosophy / About Teaser */}
      <AboutTeaser />

      {/* 12. Dispatch Newsletter */}
      <NewsletterSection />

      {/* 13. Direct Concierge Contact Form */}
      <ContactSection />
    </main>
  );
};

