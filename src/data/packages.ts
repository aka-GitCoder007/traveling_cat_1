import type { TravelPackage } from '../types';

export const packagesData: TravelPackage[] = [
  {
    id: 'pkg-bali',
    slug: 'bali-tropical-escape',
    title: 'Bali Tropical Escape',
    destination: 'Bali',
    country: 'Indonesia',
    category: 'luxury',
    duration: '6 Days / 5 Nights',
    startingPriceINR: 75000,
    originalPriceINR: 92000,
    rating: 4.9,
    reviewCount: 142,
    shortDescription: 'Rainforest wellness sanctuaries in Ubud, sacred temple water blessings, and clifftop sunsets in Uluwatu.',
    fullDescription: 'Indulge in an exquisite 6-day voyage across the Island of the Gods. Relax in private infinity pool villas, practice mindfulness in tranquil jungles, sail by private catamaran to hidden snorkeling coves, and dine on Balinese fusion cuisine created by master chefs.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      '3 nights luxury valley villa in Ubud + 2 nights clifftop suite in Uluwatu',
      'Private sunrise spiritual blessing ceremony at Tirta Empul Temple',
      'Full-day private luxury yacht charter to Nusa Lembongan with snorkeling',
      'VIP airport arrivals with fast-track immigration and private limousine'
    ],
    included: [
      '5 Nights in 5-star handpicked luxury villas with private pools',
      'Daily gourmet breakfast & 3 curated chef-table dining experiences',
      'All private chauffeured transfers in premium air-conditioned vehicle',
      'English-speaking licensed private cultural escort & local concierge',
      'Entrance fees, temple sarongs, and government permits'
    ],
    excluded: [
      'International flights to/from Denpasar',
      'Travel insurance (we provide concierge assistance to arrange)',
      'Alcoholic beverages outside curated tasting sessions',
      'Personal discretionary expenses and gratuities'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Welcome to Ubud Rainforest', description: 'Meet your personal concierge upon exit, transfer to Ubud luxury sanctuary with cold towel and young coconut service. Evening Ayurvedic massage.' },
      { day: 2, title: 'Sacred Water Blessing & Artisan Villages', description: 'Early morning purification ritual at sacred spring, private tour of Celuk silversmiths and Mas woodcarving ateliers.' },
      { day: 3, title: 'Mount Batur Sunrise & Coffee Estate', description: 'Optional sunrise 4x4 Jeep ride over volcanic fields, followed by artisanal organic coffee tasting.' },
      { day: 4, title: 'Transfer to Uluwatu Coastal Paradise', description: 'Scenic transfer south with a stop at Tanah Lot. Settle into clifftop oceanfront pool villa.' },
      { day: 5, title: 'Private Catamaran & Kecak Fire Dance', description: 'Day at sea exploring crystalline bays, evening Kecak performance with sunset cocktail dinner.' },
      { day: 6, title: 'Tropical Leisure & Airport Transfer', description: 'Floating breakfast in your pool, leisurely afternoon shopping, VIP airport escort.' }
    ],
    groupSize: 'Private (1-6 travelers)',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'pkg-swiss-alps',
    slug: 'swiss-alpine-adventure',
    title: 'Swiss Alpine Adventure',
    destination: 'Swiss Alps (Zermatt & St. Moritz)',
    country: 'Switzerland',
    category: 'adventure',
    duration: '7 Days / 6 Nights',
    startingPriceINR: 195000,
    originalPriceINR: 235000,
    rating: 5.0,
    reviewCount: 98,
    shortDescription: 'World-famous Glacier Express scenic rail, Matterhorn glacier trails, and luxury boutique mountain chalets.',
    fullDescription: 'Discover Switzerland’s alpine wonders in consummate elegance. Marvel at towering peaks aboard first-class panoramic trains, ascend to glacier paradises, sample artisanal cheeses in historic cellars, and unwind in world-class thermal mineral spas.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Glacier Express Excellence Class ticket with 5-course gourmet dining',
      'Matterhorn Glacier Paradise cable car ascent to Europe’s highest station',
      'Private alpine guide for custom snowshoeing or hiking excursions',
      '3 nights luxury alpine hotel in Zermatt + 3 nights 5-star grand hotel in St. Moritz'
    ],
    included: [
      '6 Nights accommodation in leading hotels of the world',
      'Swiss Travel Pass First Class for unlimited rail, boat, and mountain bus travel',
      'Glacier Express Excellence Class seat reservation & fine dining menu',
      'Private mountain guide for 2 full days',
      'Daily Swiss buffet breakfast and 4-course alpine dinners'
    ],
    excluded: [
      'International flights to Zurich/Geneva',
      'Ski gear rentals & lift passes (can be pre-arranged on request)',
      'Personal travel insurance'
    ],
    itinerary: [
      { day: 1, title: 'Zurich to Zermatt by Panoramic Train', description: 'Arrive at Zurich Airport, board first-class train past Lake Thun to car-free Zermatt.' },
      { day: 2, title: 'Gornergrat & Matterhorn Reflection', description: 'Ascend the historic cogwheel railway to 3,089m with views of 29 four-thousand-meter peaks.' },
      { day: 3, title: 'Glacier Cave & High Altitude Thermal Spa', description: 'Explore ice sculptures inside the glacier and relax in outdoor heated pools overlooking snow.' },
      { day: 4, title: 'Glacier Express Excellence Class to St. Moritz', description: 'The slowest express train in the world, crossing the Landwasser Viaduct with sommelier pairing.' },
      { day: 5, title: 'St. Moritz Lake Walk & Horse-Drawn Carriage', description: 'Carriage ride into Val Roseg valley with traditional fondue lunch at an alpine lodge.' },
      { day: 6, title: 'Diavolezza Glacier Viewpoint & Bernina Pass', description: 'Witness the Pers and Morteratsch glaciers; farewell celebratory dinner.' },
      { day: 7, title: 'Scenic Descent to Zurich & Departure', description: 'Morning train to Zurich airport with dedicated tax-free concierge.' }
    ],
    groupSize: 'Private or Small Group (Max 8)',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'pkg-maldives',
    slug: 'maldives-luxury-retreat',
    title: 'Maldives Luxury Retreat',
    destination: 'South Ari Atoll',
    country: 'Maldives',
    category: 'luxury',
    duration: '5 Days / 4 Nights',
    startingPriceINR: 180000,
    originalPriceINR: 220000,
    rating: 4.96,
    reviewCount: 164,
    shortDescription: 'Iconic overwater pool villa, seaplane transfers, private sandbank dinner, and vibrant coral snorkeling.',
    fullDescription: 'Surrender to the rhythm of turquoise waves. This all-inclusive escape pairs world-class Maldivian hospitality with private marine conservation adventures, underwater spa treatments, and unforgettable sunsets on deserted white sand islands.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Direct lagoon access overwater villa with private infinity plunge pool',
      'Roundtrip seaplane transfers between Malé international airport and resort',
      'Private sunset dolphin safari on a traditional handcrafted Maldivian Dhoni',
      'Exclusive private sandbank champagne lunch served by personal chef'
    ],
    included: [
      '4 Nights in Ocean Overwater Pool Villa',
      'All-inclusive gourmet meal plan (all meals, fine wines, premium spirits)',
      'Return VIP seaplane transfers',
      'Complimentary non-motorized water sports (kayaking, paddleboarding, snorkeling)',
      'One 60-minute overwater signature couple spa treatment'
    ],
    excluded: [
      'International flights to Malé (MLE)',
      'Motorized water sports and scuba diving certification',
      'Eco-tax and personal expenses'
    ],
    itinerary: [
      { day: 1, title: 'Seaplane Arrival & Overwater Check-in', description: 'Scenic seaplane flight over atolls. Welcome champagne in villa and sunset deck cocktails.' },
      { day: 2, title: 'House Reef Snorkeling & Marine Safari', description: 'Encounter sea turtles, rays, and tropical fish with resident marine biologist.' },
      { day: 3, title: 'Private Sandbank Castaway Experience', description: 'Speedboat transfer to isolated sandbank with shaded pergola and 4-course picnic lunch.' },
      { day: 4, title: 'Overwater Spa & Sunset Dolphin Cruise', description: 'Relaxing spa therapies with glass-bottom viewing panels, evening dolphin spotting.' },
      { day: 5, title: 'Floating Breakfast & Seaplane Departure', description: 'Enjoy breakfast floating in your pool before seaplane transfer to Malé.' }
    ],
    groupSize: 'Couples / Private',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'pkg-kashmir',
    slug: 'kashmir-paradise-journey',
    title: 'Kashmir Paradise Journey',
    destination: 'Srinagar, Gulmarg & Pahalgam',
    country: 'India',
    category: 'family',
    duration: '6 Days / 5 Nights',
    startingPriceINR: 55000,
    originalPriceINR: 68000,
    rating: 4.94,
    reviewCount: 220,
    shortDescription: 'Heritage luxury houseboats on Dal Lake, Gulmarg cable car, saffron fields, and pine-clad valleys.',
    fullDescription: 'Discover the emerald jewel of the Himalayas. Experience royal hospitality in a handcrafted walnut-wood houseboat on quiet Nigeen Lake, ascend into the snows of Gulmarg via the world’s second-highest cable car, and ride through the pristine pine forests of Pahalgam.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      '2 nights in a 5-star heritage cedar houseboat with private butler on Nigeen Lake',
      'Phase 1 and Phase 2 Gulmarg Gondola tickets up to 13,780 feet elevation',
      'Private Shikara photography excursion to the floating flower market at dawn',
      'Authentic 18-dish Wazwan dinner experience served in a traditional copper trami'
    ],
    included: [
      '5 Nights accommodation (2 nights Srinagar Houseboat, 1 night Gulmarg, 2 nights Pahalgam)',
      'All meals (Breakfast, Lunch & Dinner) featuring authentic Kashmiri cuisine',
      'Chauffeured luxury SUV for all sightseeing and airport transfers',
      'Gulmarg Gondola cable car passes (Phase 1 & 2)',
      '2 Shikara rides on Dal and Nigeen Lakes'
    ],
    excluded: [
      'Domestic flights to Srinagar (SXR)',
      'Pony rides in Pahalgam and Gulmarg (optional local fees)',
      'Winter clothing/boots rental'
    ],
    itinerary: [
      { day: 1, title: 'Srinagar Airport & Luxury Houseboat Welcome', description: 'Traditional saffron Kehwa welcome, check into lakefront houseboat, sunset Shikara tour.' },
      { day: 2, title: 'Mughal Gardens & Old Srinagar Heritage Walk', description: 'Visit Nishat Bagh, Shalimar Bagh, Jamia Masjid, and observe Pashmina weaving.' },
      { day: 3, title: 'Scenic Gulmarg & Gondola High Altitude Experience', description: 'Drive past apple orchards, board Gondola Phase 2 to Apharwat peak for snow fun.' },
      { day: 4, title: 'Transfer to Pahalgam Valley of Shepherds', description: 'Visit saffron fields in Pampore, Awantipora ruins, check-in to Lidder river resort.' },
      { day: 5, title: 'Betaab Valley, Chandanwari & Aru Valley', description: 'Explore lush valleys framed by snow peaks; evening riverside bonfire & Wazwan dinner.' },
      { day: 6, title: 'Dawn Shikara Market & Airport Departure', description: 'Early morning floating market photography, shopping for walnuts and saffron, airport escort.' }
    ],
    groupSize: 'Families / Couples / Small Group',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'pkg-japan',
    slug: 'japan-cultural-discovery',
    title: 'Japan Cultural Discovery',
    destination: 'Tokyo & Kyoto',
    country: 'Japan',
    category: 'cultural',
    duration: '8 Days / 7 Nights',
    startingPriceINR: 165000,
    originalPriceINR: 198000,
    rating: 4.95,
    reviewCount: 115,
    shortDescription: 'Shinkansen bullet train journey, after-hours temple visits, tea masterclasses, and Michelin Kaiseki dining.',
    fullDescription: 'A seamless journey connecting the neon-lit future of Tokyo with the timeless tranquility of Kyoto. Designed for curious travelers who wish to experience authentic Japanese craftsmanship, sublime gastronomy, and sacred Zen philosophies.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Shinkansen Gran Class high-speed train between Tokyo and Kyoto',
      'Private tea ceremony with a 15th-generation master in a hidden Kyoto garden',
      'Stay in an authentic luxury Machiya boutique townhouse with private onsen bath',
      'Exclusive early-morning access to Fushimi Inari and Arashiyama Bamboo Grove'
    ],
    included: [
      '7 Nights in 5-star boutique hotels & traditional luxury Ryokan',
      '7-Day JR Pass First Class & all inter-city transfers',
      'Licensed bilingual cultural historian guide in both Tokyo and Kyoto',
      'Daily breakfast, 2 Michelin-starred dinners (Kaiseki & Wagyu Teppanyaki)',
      'Luggage forward service between hotels'
    ],
    excluded: [
      'International flights to Tokyo Narita/Haneda',
      'Personal shopping and optional evening izakaya crawls'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Tokyo & Ginza Evening Walk', description: 'Executive airport welcome, transfer to luxury hotel, welcome sake tasting in Ginza.' },
      { day: 2, title: 'Meiji Shrine, Harajuku & Shibuya Sky', description: 'Walk through cedar forests of Meiji Jingu, panoramic Shibuya views from 229m.' },
      { day: 3, title: 'Tsukiji Gastronomy & teamLab Borderless', description: 'Behind-the-scenes sushi workshop followed by interactive digital art museum.' },
      { day: 4, title: 'Gran Class Shinkansen to Kyoto', description: 'Bullet train past Mount Fuji to Kyoto. Check in to heritage Machiya.' },
      { day: 5, title: 'Golden Pavilion & Zen Meditation', description: 'Private morning meditation with resident Zen priest, walk through Philosopher’s Path.' },
      { day: 6, title: 'Fushimi Inari Dawn Walk & Uji Tea Farm', description: '10,000 torii gates without the crowds, followed by matcha whisking class in Uji.' },
      { day: 7, title: 'Gion Geiko Cultural Evening', description: 'Historic walking tour of lantern-lit Gion alleyways followed by multi-course Kaiseki dinner.' },
      { day: 8, title: 'Depart via Osaka Kansai or Return to Tokyo', description: 'Luggage assistance, airport express train ticket, and souvenir presentation.' }
    ],
    groupSize: 'Small Group / Private',
    difficulty: 'Moderate',
    featured: true
  },
  {
    id: 'pkg-dubai',
    slug: 'dubai-luxury-experience',
    title: 'Dubai Luxury Experience',
    destination: 'Dubai',
    country: 'United Arab Emirates',
    category: 'luxury',
    duration: '5 Days / 4 Nights',
    startingPriceINR: 88000,
    originalPriceINR: 110000,
    rating: 4.86,
    reviewCount: 188,
    shortDescription: 'Sunset private yacht cruise along Palm Jumeirah, royal desert camp with falconry, and VIP Burj Khalifa lounge.',
    fullDescription: 'Indulge in Dubai’s superlative wonders. From high-speed private yacht cruises along the sparkling Arabian Gulf to dinner under the stars at a private royal desert oasis, every moment is crafted for supreme comfort and unforgettable glamour.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      '4-hour private yacht cruise with champagne and chef-prepared seafood grill',
      'Burj Khalifa Level 148 "At The Top SKY" VIP lounge with fast-track entry',
      'Royal Desert Conservation safari with vintage 1950s Land Rovers & falconry',
      '4 Nights in iconic 5-star waterfront suite on The Palm'
    ],
    included: [
      '4 Nights in 5-star luxury suite on Palm Jumeirah',
      'Private luxury airport limousine transfers (Mercedes S-Class or BMW 7-Series)',
      'Private yacht charter including crew, fuel, and refreshments',
      'Platinum desert safari package with 6-course open-air dinner',
      'All entry fees and concierge assistance'
    ],
    excluded: [
      'International flights to Dubai (DXB)',
      'UAE tourist visa (available upon request)',
      'Personal shopping at Dubai Mall'
    ],
    itinerary: [
      { day: 1, title: 'VIP Airport Meet & Limousine Transfer', description: 'Luggage concierge, transfer to Palm Jumeirah resort, welcome dinner at Michelin-star restaurant.' },
      { day: 2, title: 'Modern Architecture & Burj Khalifa VIP', description: 'Museum of the Future curator tour, VIP lounge entry to level 148 of Burj Khalifa.' },
      { day: 3, title: 'Heritage Al Fahidi & Royal Desert Safari', description: 'Morning souks and perfume tour, afternoon vintage safari in protected desert sanctuary.' },
      { day: 4, title: 'Private Mega Yacht Charter & Atlantis', description: 'Cruise past Dubai Marina and Ain Dubai; evening dinner at Atlantis The Royal.' },
      { day: 5, title: 'Breakfast Overlooking Arabian Gulf & Departure', description: 'Spa morning, late checkout, private airport transfer.' }
    ],
    groupSize: 'Private (1-8 travelers)',
    difficulty: 'Easy',
    featured: true
  },
  {
    id: 'pkg-patagonia',
    slug: 'patagonia-wild-frontier',
    title: 'Patagonia Wild Frontier',
    destination: 'Torres del Paine & El Calafate',
    country: 'Argentina & Chile',
    category: 'adventure',
    duration: '9 Days / 8 Nights',
    startingPriceINR: 210000,
    originalPriceINR: 250000,
    rating: 4.92,
    reviewCount: 76,
    shortDescription: 'Crampon ice trekking on Perito Moreno Glacier, Torres del Paine granite towers, and geodesic luxury dome stay.',
    fullDescription: 'Journey to the edge of the planet. Walk across ancient cobalt-blue glaciers, kayak amidst floating icebergs, watch Andean condors soar on high winds, and sleep beneath pristine starlit skies in luxury eco-domes.',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      'Perito Moreno Big Ice trek with crampons and whisky over glacier ice',
      'Luxury eco-dome stay with direct view of Torres del Paine towers',
      'Private Zodiac boat navigation to Glacier Grey with sea kayaking',
      'Traditional Patagonian sheep ranch estancia stay with gauchos'
    ],
    included: [
      '8 Nights in luxury eco-lodges and boutique estancias',
      'Certified IFMGA mountain guides for all hiking excursions',
      'All regional flights between Buenos Aires, El Calafate, and Puerto Natales',
      'Full-board gourmet meals and Argentine Malbec wine pairings',
      'National park permits and specialized glacier trekking equipment'
    ],
    excluded: [
      'International flights to Buenos Aires (EZE)',
      'Personal trekking boots and technical outerwear'
    ],
    itinerary: [
      { day: 1, title: 'Buenos Aires to El Calafate Transfer', description: 'Flight south over Patagonia, check in to lakeside estancia, gaucho barbecue.' },
      { day: 2, title: 'Perito Moreno Glacier Big Ice Hike', description: 'Walk across the blue heart of one of the world’s few advancing glaciers.' },
      { day: 3, title: 'Scenic Crossing into Chile & Torres del Paine', description: 'Spectacular wildlife safari observing guanacos, rheas, and flamingos.' },
      { day: 4, title: 'Base of the Towers Epic Trek', description: 'Trek through beech forests to the turquoise tarn beneath the three vertical granite horns.' },
      { day: 5, title: 'French Valley & Lake Pehoé', description: 'Catamaran cruise across turquoise waters, hike into the natural amphitheater of granite cliffs.' },
      { day: 6, title: 'Glacier Grey Iceberg Kayaking', description: 'Paddle among floating ice formations in dry suits with trained guides.' },
      { day: 7, title: 'Puerto Natales Fjord Cruise', description: 'Scenic boat through Ultima Esperanza fjord, visit Balmaceda and Serrano glaciers.' },
      { day: 8, title: 'Estancia Equestrian Adventure', description: 'Ride with native gauchos across open steppe, celebrate with farewell lamb asado.' },
      { day: 9, title: 'Return Flight to Buenos Aires & Departure', description: 'Transfer to airport for domestic connection to international terminal.' }
    ],
    groupSize: 'Small Group (Max 10)',
    difficulty: 'Challenging',
    featured: false
  },
  {
    id: 'pkg-santorini',
    slug: 'santorini-sunset-odyssey',
    title: 'Santorini Sunset Odyssey',
    destination: 'Santorini',
    country: 'Greece',
    category: 'honeymoon',
    duration: '5 Days / 4 Nights',
    startingPriceINR: 145000,
    originalPriceINR: 175000,
    rating: 4.88,
    reviewCount: 130,
    shortDescription: 'Private cave suite with cliffside infinity plunge pool, catamaran caldera cruise, and volcanic wine tasting.',
    fullDescription: 'The ultimate romantic Aegean retreat. Stay perched on the high cliffs of Oia in a restored traditional cave villa, swim in geothermal volcanic springs, and enjoy five-course candlelit dinners with unmatched views of the sinking sun.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80'
    ],
    highlights: [
      '4 Nights in cliffside luxury cave suite with heated plunge pool overlooking caldera',
      'Private sunset catamaran cruise with open bar and Mediterranean barbecue',
      'Sommelier-guided tasting of rare Assyrtiko and Vinsanto wines at 3 estates',
      'Helicopter flight over the caldera and volcanic crater'
    ],
    included: [
      '4 Nights accommodation in 5-star cliffside boutique hotel in Oia',
      'Daily champagne breakfast served on your private panoramic balcony',
      'VIP Mercedes transfer service throughout the island',
      'Private 5-hour catamaran charter with barbecue lunch and snorkeling gear',
      'All local taxes, baggage portage on steep caldera steps'
    ],
    excluded: [
      'International flights to Athens/Santorini',
      'Discretionary tips for yacht crew and guides'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Santorini & Oia Cliffside Check-in', description: 'Private chauffeur to Oia, luggage porterage, welcome champagne on your terrace.' },
      { day: 2, title: 'Private Catamaran Sailing & Hot Springs', description: 'Sail past Red and White Beaches, swim in warm sulfur springs, enjoy onboard seafood grill.' },
      { day: 3, title: 'Akrotiri Bronze Age Ruins & Wine Tour', description: 'Visit the "Pompeii of the Aegean", private wine cellar tasting with local vintners.' },
      { day: 4, title: 'Imerovigli Scenic Hike & Candlelit Clifftop Feast', description: 'Caldera cliff walk to Skaros Rock; private balcony dinner during world-famous Oia sunset.' },
      { day: 5, title: 'Morning Balcony Breakfast & Departure', description: 'Slow breakfast, final photos, chauffeured transfer to Santorini airport or port.' }
    ],
    groupSize: 'Couples / Honeymooners',
    difficulty: 'Easy',
    featured: false
  }
];
