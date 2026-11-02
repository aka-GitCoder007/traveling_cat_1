export type DestinationCategory = 'all' | 'beach' | 'mountains' | 'adventure' | 'cultural' | 'luxury';

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  category: DestinationCategory;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  bestSeason: string;
  startingPriceINR: number;
  duration: string;
  rating: number;
  reviewsCount: number;
  highlights: string[];
  itineraryPreview: ItineraryDay[];
  featured?: boolean;
  bentoSpan?: string; // styling class for asymmetric Bento grid
}

export type PackageCategory = 'all' | 'adventure' | 'luxury' | 'honeymoon' | 'cultural' | 'family';

export interface TravelPackage {
  id: string;
  slug: string;
  title: string;
  destination: string;
  country: string;
  category: PackageCategory;
  duration: string;
  startingPriceINR: number;
  originalPriceINR?: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  included: string[];
  excluded: string[];
  itinerary: ItineraryDay[];
  groupSize: string;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  featured?: boolean;
}

export interface Experience {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  image: string;
  gallery: string[];
  keyHighlights: string[];
  curatedFor: string;
  includedPerks: string[];
  sampleDestinations: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Travel Guides' | 'Adventure' | 'Culture' | 'Luxury Travel' | 'Travel Tips';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  destination: string;
  avatar: string;
  initials: string;
  rating: number;
  quote: string;
  tripTaken: string;
  year: string;
}

export interface TripPlanRequest {
  id: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  travelType: string;
  budgetRange: string;
  fullName?: string;
  email?: string;
  phone?: string;
  notes?: string;
  submittedAt: string;
}

export interface ContactSubmission {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedAt: string;
}

export interface NewsletterSubscription {
  email: string;
  subscribedAt: string;
}
