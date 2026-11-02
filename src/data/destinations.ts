import type { Destination } from '../types';

export const destinationsData: Destination[] = [
  {
    id: 'dest-bali',
    slug: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'Southeast Asia',
    category: 'beach',
    shortDescription: 'Verdant terraced rice fields, sacred cliffside temples, and secluded black & white sand beaches.',
    fullDescription: 'Experience the spiritual heart of the Indonesian archipelago. From sunrise meditations overlooking the emerald terraces of Tegallalang to private sunset catamaran charters along the Uluwatu cliffs, Bali offers a rare harmony of ancient culture and tropical tranquility.',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'April – October (Dry Season)',
    startingPriceINR: 75000,
    duration: '6 Days / 5 Nights',
    rating: 4.9,
    reviewsCount: 312,
    highlights: [
      'Private sunrise spiritual blessing with a Balinese high priest in Ubud',
      'Helicopter flight over Mount Batur crater lake and lava fields',
      'Cliffside cliff-edge dining at Uluwatu with traditional Kecak performance',
      'Secluded luxury villa with private infinity pool overlooking Ayung River'
    ],
    itineraryPreview: [
      { day: 1, title: 'Arrival in Denpasar & Ubud Sanctuary Transfer', description: 'VIP tarmac welcome, private transfer to rainforest villa, evening holistic massage.' },
      { day: 2, title: 'Spiritual Ubud & Sacred Terraces', description: 'Early morning private tour of Tegallalang rice terraces, followed by herbal lunch and temple walk.' },
      { day: 3, title: 'Mount Batur Sunrise Trek or Helicopter Experience', description: 'Watch the island wake from above the clouds, followed by hot springs soak.' },
      { day: 4, title: 'Transfer to Uluwatu Coastal Cliffs', description: 'Coastal scenic drive, check-in to clifftop resort, sundowner cocktails.' },
      { day: 5, title: 'Private Catamaran to Nusa Penida', description: 'Snorkeling with manta rays, private beach picnic, and sunset champagne cruise.' },
      { day: 6, title: 'Leisure & Farewell Departure', description: 'Spa morning, artisan shopping in Seminyak, airport VIP lounge transfer.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-8 lg:col-span-8 row-span-2'
  },
  {
    id: 'dest-swiss-alps',
    slug: 'swiss-alps-switzerland',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'Central Europe',
    category: 'mountains',
    shortDescription: 'Glacial peaks, crystal-clear alpine lakes, and historic luxury chalets beneath the Matterhorn.',
    fullDescription: 'Step into a world of timeless alpine majesty. Journey through pristine valleys aboard panoramic vintage trains, ski immaculate powdered slopes, and dine on Michelin-starred cuisine in intimate fireside mountain refuges.',
    heroImage: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'December – March (Snow) or June – September (Hiking)',
    startingPriceINR: 195000,
    duration: '7 Days / 6 Nights',
    rating: 5.0,
    reviewsCount: 184,
    highlights: [
      'Glacier Express Excellence Class journey with 5-course wine pairing',
      'Private helicopter flight around the Matterhorn summit',
      'Exclusive fondue tasting in a 200-year-old alpine stone chalet',
      'Private thermal spa access at 3,000 meters elevation'
    ],
    itineraryPreview: [
      { day: 1, title: 'Zurich Arrival & Scenic Train to Zermatt', description: 'Executive pickup and first-class rail journey to the car-free village of Zermatt.' },
      { day: 2, title: 'Gornergrat & Matterhorn Glacier Paradise', description: 'High-altitude railway exploration, private ski or snowshoe guide.' },
      { day: 3, title: 'Glacier Express to St. Moritz', description: 'World-renowned panoramic rail experience crossing 291 bridges and 91 tunnels.' },
      { day: 4, title: 'Alpine Serenity & Lake St. Moritz', description: 'Private horse-drawn carriage through Val Fex, afternoon tea at Badrutt’s Palace.' },
      { day: 5, title: 'Lucerne & Mount Pilatus Golden Round Trip', description: 'Cogwheel railway descent, private boat across Lake Lucerne.' },
      { day: 6, title: 'Swiss Watchmaking Workshop & Fine Dining', description: 'Private horology atelier visit and farewell dinner at a lakeside manor.' },
      { day: 7, title: 'Departure from Zurich', description: 'Private airport transfer with tax-free concierge assistance.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-4 lg:col-span-4 row-span-1'
  },
  {
    id: 'dest-kyoto',
    slug: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'East Asia',
    category: 'cultural',
    shortDescription: 'Ancient cedar forests, quiet Zen rock gardens, and millennium-old tea ceremony traditions.',
    fullDescription: 'Kyoto is the timeless cultural soul of Japan. Wander through bamboo groves dappled in morning mist, gain rare after-hours access to UNESCO World Heritage shrines, and savor multi-course Kaiseki dining alongside masters of traditional arts.',
    heroImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'March – May (Cherry Blossom) & October – November (Autumn Foliage)',
    startingPriceINR: 165000,
    duration: '8 Days / 7 Nights',
    rating: 4.95,
    reviewsCount: 240,
    highlights: [
      'Private private tea ceremony hosted by a 15th-generation Urasenke master',
      'Exclusive dawn access to Fushimi Inari Taisha before crowds arrive',
      'Three-star Michelin Kaiseki dinner in Gion with Geiko performance',
      'Stay in an authentic luxury Machiya townhouse restored by heritage artisans'
    ],
    itineraryPreview: [
      { day: 1, title: 'Tokyo to Kyoto Shinkansen Gran Class', description: 'Bullet train arrival, check-in to historic luxury Ryokan, seasonal bath ritual.' },
      { day: 2, title: 'Arashiyama Bamboo Grove & Tenryu-ji', description: 'Dawn bamboo walk, private temple garden contemplation with resident abbot.' },
      { day: 3, title: 'Historic Gion & Traditional Arts Masterclass', description: 'Calligraphy and ceramics atelier visit, evening private tea house gathering.' },
      { day: 4, title: 'Golden Pavilion & Rock Garden Philosophy', description: 'Kinkaku-ji and Ryoan-ji meditation session with English-speaking Zen monk.' },
      { day: 5, title: 'Nara Day Excursion & Sacred Deer Park', description: 'Todai-ji colossal bronze Buddha and private Kasuga Taisha shrine blessing.' },
      { day: 6, title: 'Uji Green Tea Plantations & Sake Breweries', description: 'Harvest experience and private tasting of reserve Junmai Daiginjo.' },
      { day: 7, title: 'Philosopher’s Path & Culinary Kyoto', description: 'Nishiki Market private gastronomic tour with award-winning local chef.' },
      { day: 8, title: 'Farewell & Bullet Train Connection', description: 'Customized departure gift and private luggage forwarding service.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-4 lg:col-span-4 row-span-1'
  },
  {
    id: 'dest-santorini',
    slug: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'Mediterranean',
    category: 'luxury',
    shortDescription: 'Sun-drenched whitewashed villas perched dramatically above the azure Aegean caldera.',
    fullDescription: 'Perched high above the Aegean Sea, Santorini is a symphony of brilliant whites, deep volcanic reds, and hypnotic cobalt blues. Savor private yacht voyages to volcanic hot springs, sample rare Assyrtiko wines, and watch world-famous sunsets from your private infinity plunge pool.',
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'May – October',
    startingPriceINR: 145000,
    duration: '5 Days / 4 Nights',
    rating: 4.88,
    reviewsCount: 196,
    highlights: [
      'Sunset catamaran sailing across the submerged volcanic caldera',
      'Private sommelier-led tour of cliffside volcanic vineyards',
      'Luxury cave suite in Oia with private heated cliffside plunge pool',
      'Helicopter flight over Mykonos, Delos, and Santorini archipelago'
    ],
    itineraryPreview: [
      { day: 1, title: 'Arrival & Oia Clifftop Sanctuary', description: 'VIP airport escort to clifftop cave suite, welcome champagne and mezze.' },
      { day: 2, title: 'Catamaran Cruise & Hot Springs', description: 'Private sailing to Red Beach, White Beach, and swim in geothermal waters.' },
      { day: 3, title: 'Ancient Akrotiri & Volcanic Vineyards', description: 'Private archaeological historian guide, followed by 7-course wine pairing.' },
      { day: 4, title: 'Imerovigli Scenic Hike & Sunset Dinner', description: 'Scenic caldera rim walk to Skaros Rock, private cliffside dining table.' },
      { day: 5, title: 'Morning Swim & Departure', description: 'Breakfast on terrace overlooking the caldera, private transfer to ferry or airport.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-6 lg:col-span-6 row-span-1'
  },
  {
    id: 'dest-maldives',
    slug: 'maldives-luxury-retreat',
    name: 'Maldives',
    country: 'Maldives',
    region: 'Indian Ocean',
    category: 'luxury',
    shortDescription: 'Overwater bungalows hovering over crystal turquoise lagoons with vibrant coral atolls.',
    fullDescription: 'The pinnacle of barefoot luxury. Wake up to direct lagoon access from your private overwater sundeck, enjoy private sandbank dining under the southern stars, and plunge into crystal-clear waters teeming with sea turtles, dolphins, and manta rays.',
    heroImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'November – April (Dry Sunny Season)',
    startingPriceINR: 180000,
    duration: '5 Days / 4 Nights',
    rating: 4.96,
    reviewsCount: 280,
    highlights: [
      'Seaplane arrival with aerial views of coral atoll formations',
      'Overwater villa featuring glass floor panels and infinity plunge pool',
      'Castaway sandbank dinner arranged exclusively for two with private chef',
      'Guided marine biologist night snorkeling with bioluminescent plankton'
    ],
    itineraryPreview: [
      { day: 1, title: 'Malé Arrival & Scenic Seaplane Transfer', description: 'Private lounge at Malé airport, breathtaking 35-minute seaplane flight to atoll.' },
      { day: 2, title: 'Lagoon Discovery & Coral Restoration', description: 'Snorkel the house reef with the resident marine biologist; plant your own coral.' },
      { day: 3, title: 'Sunset Dolphin Cruise & Underwater Spa', description: 'Cruise on a traditional handcrafted Dhoni boat, evening underwater massage.' },
      { day: 4, title: 'Private Sandbank Escape', description: 'Dropped on an uninhabited sandbar with champagne, gourmet lunch, and shaded cabana.' },
      { day: 5, title: 'Breakfast in Villa & Departure', description: 'Floating breakfast in your pool, return seaplane to Malé for international flight.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-6 lg:col-span-6 row-span-1'
  },
  {
    id: 'dest-patagonia',
    slug: 'patagonia-argentina',
    name: 'Patagonia',
    country: 'Argentina & Chile',
    region: 'South America',
    category: 'adventure',
    shortDescription: 'Untamed glacial fjords, towering granite spires, and legendary windswept wilderness.',
    fullDescription: 'At the southern end of the inhabited world lies Patagonia—a realm of colossal ice fields, turquoise glacial lakes, and sheer granite peaks that pierce the skies. Trek legendary trails, kayak beside calving glaciers, and retreat to sustainable luxury eco-lodges.',
    heroImage: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'November – March (Austral Summer)',
    startingPriceINR: 210000,
    duration: '9 Days / 8 Nights',
    rating: 4.92,
    reviewsCount: 110,
    highlights: [
      'Ice trekking on Perito Moreno Glacier with crampons and whiskey toast',
      'Hike to the base of Torres del Paine granite towers with private mountaineer',
      'Luxury geodesic dome stay with unobstructed views of the Patagonian sky',
      'Traditional Patagonian lamb asado roasted over native lenga wood fires'
    ],
    itineraryPreview: [
      { day: 1, title: 'El Calafate Arrival & Estancia Welcome', description: 'Transfer to authentic luxury estancia, traditional gaucho horseback demonstration.' },
      { day: 2, title: 'Perito Moreno Glacier Exploration', description: 'Walk elevated wooden balconies and embark on an ice hike across blue crevasses.' },
      { day: 3, title: 'Cross Border into Torres del Paine', description: 'Scenic drive across the Patagonian steppe, wildlife spotting of guanacos and condors.' },
      { day: 4, title: 'Base of the Towers Trek', description: 'Iconic trek through beech forests up to the glacial lagoon beneath the spires.' },
      { day: 5, title: 'Lake Pehoé & French Valley', description: 'Catamaran crossing across turquoise waters, hike into the hanging glacier valley.' },
      { day: 6, title: 'Glacier Grey Kayaking', description: 'Paddle sea kayaks among floating icebergs in Lago Grey with certified guides.' },
      { day: 7, title: 'Ushuaia & Beagle Channel Cruise', description: 'Flight to the End of the World, cruise past sea lion colonies and Les Eclaireurs lighthouse.' },
      { day: 8, title: 'Tierra del Fuego National Park', description: 'End of Pan-American Highway trek, canoe along Lapataia Bay.' },
      { day: 9, title: 'Buenos Aires Transfer & Departure', description: 'Morning flight to Buenos Aires with ongoing international connection.' }
    ],
    featured: false,
    bentoSpan: 'col-span-12 md:col-span-4 lg:col-span-4 row-span-1'
  },
  {
    id: 'dest-dubai',
    slug: 'dubai-uae',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    category: 'luxury',
    shortDescription: 'Futuristic skylines, golden desert dunes, private yacht cruises, and unmatched Michelin dining.',
    fullDescription: 'Where visionary architecture meets Arabian desert mystique. Wanderly curates ultra-luxurious Dubai itineraries featuring private desert glamping under Arabian constellations, supercar desert driving, and VIP skydeck access above the clouds.',
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'October – April (Mild Winter)',
    startingPriceINR: 88000,
    duration: '5 Days / 4 Nights',
    rating: 4.86,
    reviewsCount: 320,
    highlights: [
      'Private sunset yacht charter along Dubai Marina, JBR, and Atlantis The Royal',
      'VIP sunrise hot air balloon flight over Dubai Desert Conservation Reserve',
      'Dinner in the desert at a private royal oasis camp with falconry show',
      'Helicopter transfer from Dubai Creek to Burj Al Arab helipad'
    ],
    itineraryPreview: [
      { day: 1, title: 'VIP Airport Welcome & Downtown Check-in', description: 'Rolls Royce private transfer to luxury suite, evening fountain view dining.' },
      { day: 2, title: 'Old Dubai Heritage & Gold Souk Walk', description: 'Private Abra boat crossing, perfume artisan atelier, and museum tour.' },
      { day: 3, title: 'Desert Safari & Royal Bedouin Dinner', description: 'Vintage Land Rover wildlife safari, falconry demonstration, 5-star outdoor feast.' },
      { day: 4, title: 'Private Mega Yacht Cruise & Beach Club', description: 'Day at exclusive Palm Jumeirah beach club followed by sunset yacht voyage.' },
      { day: 5, title: 'Future Museum & Departure', description: 'Private curator tour of Museum of the Future before airport executive departure.' }
    ],
    featured: false,
    bentoSpan: 'col-span-12 md:col-span-4 lg:col-span-4 row-span-1'
  },
  {
    id: 'dest-kashmir',
    slug: 'kashmir-india',
    name: 'Kashmir',
    country: 'India',
    region: 'Himalayas, South Asia',
    category: 'mountains',
    shortDescription: 'Paradise on Earth: tranquil Dal Lake houseboats, saffron meadows, and snow-capped Pir Panjal peaks.',
    fullDescription: 'Revered as Paradise on Earth, Kashmir invites you to glide along Dal Lake on handcrafted wooden Shikaras, stroll through Mughal gardens ablaze with Chinar leaves, and gaze out at snow-draped peaks from luxury ski resorts in Gulmarg.',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1626014303757-6466336e4f3a?auto=format&fit=crop&w=1000&q=80'
    ],
    bestSeason: 'March – May (Spring Blossoms), June – August (Summer), December – February (Snow)',
    startingPriceINR: 55000,
    duration: '6 Days / 5 Nights',
    rating: 4.94,
    reviewsCount: 350,
    highlights: [
      'Heritage Cedar Houseboat stay on Nigeen Lake with private chef and butler',
      'Morning Shikara ride to the floating flower and vegetable market at dawn',
      'Gulmarg Gondola Phase 2 ride up to 13,780 feet overlooking Apharwat Peak',
      'Pahalgam pine valley pony ride and traditional Wazwan culinary feast'
    ],
    itineraryPreview: [
      { day: 1, title: 'Srinagar Arrival & Dal Lake Shikara Ride', description: 'Traditional welcome with hot Kehwa and saffron almonds; dusk Shikara voyage.' },
      { day: 2, title: 'Mughal Gardens & Old City Craft Walk', description: 'Private tour of Nishat & Shalimar Bagh, Pashmina weaving and walnut wood carving.' },
      { day: 3, title: 'Gulmarg Meadow of Flowers & Gondola Ride', description: 'Scenic drive to Gulmarg, ride one of the highest cable cars in the world, snow activities.' },
      { day: 4, title: 'Pahalgam Valley of Shepherds', description: 'Visit saffron fields of Pampore, drive along Lidder River, explore Betaab Valley.' },
      { day: 5, title: 'Aru Valley Exploration & Wazwan Banquet', description: 'Scenic high-altitude meadows, evening 36-course royal Kashmiri Wazwan feast.' },
      { day: 6, title: 'Floating Market Sunrise & Farewell', description: 'Dawn Shikara market photography, airport escort with handcrafted Kashmiri souvenir.' }
    ],
    featured: true,
    bentoSpan: 'col-span-12 md:col-span-4 lg:col-span-4 row-span-1'
  }
];
