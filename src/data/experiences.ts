import type { Experience } from '../types';

export const experiencesData: Experience[] = [
  {
    id: 'exp-adventure',
    number: '01',
    title: 'Adventure Escapes',
    subtitle: 'Where raw adrenaline meets untouched horizons',
    description: 'Traverse uncharted mountain passes, trek across ancient glaciers, and dive into oceanic trenches with world-renowned expedition leaders. Engineered for travelers who seek the thrill of genuine discovery without compromising on supreme safety and comfort.',
    iconName: 'Compass',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80'
    ],
    keyHighlights: [
      'Certified IFMGA mountain guides & expedition doctors on all alpine routes',
      'Private helicopter drops to inaccessible powder slopes and remote summits',
      'Ultra-exclusive mobile glamping setups in untouched natural sanctuaries',
      'State-of-the-art satellite safety trackers and expedition-grade gear'
    ],
    curatedFor: 'Thrill-seekers, mountaineers, photographers, and wilderness enthusiasts.',
    includedPerks: [
      'Top-tier technical gear and drysuit equipment included',
      'Expedition photographer capturing high-resolution personal moments',
      'Post-trek thermal recovery sessions in luxury alpine lodges'
    ],
    sampleDestinations: ['Patagonia, Argentina', 'Swiss Alps, Switzerland', 'Ladakh & Kashmir, India']
  },
  {
    id: 'exp-luxury',
    number: '02',
    title: 'Luxury Retreats',
    subtitle: 'Unrivaled privacy, flawless service, and sanctuaries of peace',
    description: 'Enter secluded private islands, architectural cliff villas, and palace suites where your every preference is anticipated before you utter a word. Experience wellness sanctuaries, Michelin-starred chefs, and bespoke itineraries tuned to your rhythm.',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80'
    ],
    keyHighlights: [
      'Dedicated round-the-clock private butler and personal concierge',
      'Exclusive buyout options for private islands and mountain estates',
      'Private air travel connections, jet charters, and yacht arrivals',
      'Custom bespoke culinary menus prepared by Michelin-trained personal chefs'
    ],
    curatedFor: 'Discerning travelers, executives, and families seeking total privacy and effortless luxury.',
    includedPerks: [
      'Tarmac VIP customs escort and private lounge transfers',
      'Unlimited vintage champagne and bespoke sommelier wine pairings',
      'Daily holistic in-villa wellness and restorative spa rituals'
    ],
    sampleDestinations: ['Maldives', 'Santorini, Greece', 'Dubai, UAE', 'French Riviera']
  },
  {
    id: 'exp-cultural',
    number: '03',
    title: 'Cultural Immersions',
    subtitle: 'Deep human connections, living heritage, and sacred traditions',
    description: 'Go beyond the velvet ropes. Dine with hereditary artisans, enter ancient monasteries closed to the public, learn centuries-old culinary secrets from master matriarchs, and immerse yourself in the living stories of the world’s most fascinating civilizations.',
    iconName: 'Landmark',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80'
    ],
    keyHighlights: [
      'Historian and archaeologist-led private tours of UNESCO World Heritage sites',
      'Exclusive after-hours shrine and museum access with resident curators',
      'Hands-on artisan workshops: ceramics, calligraphy, textile weaving, and silversmithing',
      'Meaningful community exchanges that directly support cultural preservation'
    ],
    curatedFor: 'Curious minds, literature lovers, culinary travelers, and history enthusiasts.',
    includedPerks: [
      'Private bilingual cultural storyteller on all excursions',
      'Authentic heirloom artisanal gifts hand-crafted by local masters',
      'Access to private historical collections and private estate dinners'
    ],
    sampleDestinations: ['Kyoto, Japan', 'Kashmir, India', 'Florence, Italy', 'Oaxaca, Mexico']
  },
  {
    id: 'exp-romantic',
    number: '04',
    title: 'Romantic Getaways',
    subtitle: 'Intimate escapes designed for two beneath star-filled skies',
    description: 'Celebrate love in the world’s most enchanting settings. From private overwater hammocks hovering above luminous lagoons to candlelit cave dinners carved into volcanic cliffs, Wanderly creates unforgettable milestones for honeymoons and romantic anniversaries.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1400&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80'
    ],
    keyHighlights: [
      'Secluded sandbank dinners illuminated by hundred-lantern arrangements',
      'Private sunset catamaran voyages with live acoustic musicians',
      'Complimentary honeymoon amenities, champagne welcomes, and flower baths',
      'Personal fine-art couples photoshoot at iconic golden-hour locations'
    ],
    curatedFor: 'Honeymooners, couples celebrating anniversaries, and romantic milestone getaways.',
    includedPerks: [
      'Guaranteed best villa positioning with uninterrupted sunset views',
      'In-villa couple massage therapy with organic essential oils',
      'Keepsake memory book and personalized leather travel journals'
    ],
    sampleDestinations: ['Santorini, Greece', 'Maldives', 'Bali, Indonesia', 'Amalfi Coast, Italy']
  }
];
