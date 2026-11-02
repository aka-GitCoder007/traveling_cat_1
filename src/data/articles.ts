import type { Article } from '../types';

export const articlesData: Article[] = [
  {
    id: 'art-1',
    slug: 'art-of-slow-travel-in-kyoto',
    title: 'The Art of Slow Travel: Unlocking the Timeless Quiet of Kyoto',
    category: 'Culture',
    excerpt: 'Beyond the crowded tourist corridors lies an ancient city alive with the gentle rustle of bamboo groves and centuries of Zen contemplation.',
    content: [
      'Kyoto is a city that reveals itself only to those willing to match its contemplative cadence. In an era where travel is frequently reduced to rushed checklists and selfie landmarks, this ancient imperial capital stands as an enduring sanctuary for deliberate stillness.',
      'Our journey began before dawn at Daitoku-ji, a sprawling complex of Zen sub-temples in northern Kyoto. As the morning mist curled through moss-draped stone gardens, Master Sotan welcomed us into a 400-year-old tearoom. Here, the ritual of Chado (the Way of Tea) is not merely a social courtesy; it is an active meditation on impermanence, harmony, and gratitude.',
      'To experience Kyoto authentically is to understand the Japanese aesthetic of wabi-sabi—the appreciation of beauty that is imperfect, impermanent, and incomplete. The cracked lacquer bowl repaired with real gold seam (kintsugi), the weathered wooden eaves of a Gion Machiya, and the solitary maple leaf floating on a stone basin all speak to an art of living that modernity often rushes past.',
      'When planning your own Kyoto escape, allocate entire afternoons without an itinerary. Wander through the eastern hills of Higashiyama at twilight, listen to the monks chanting evening prayers at Chion-in, and dine at humble obanzai eateries where seasonal Kyoto vegetables are celebrated with masterly subtlety.'
    ],
    author: {
      name: 'Kenji Takahashi',
      role: 'Cultural Historian & Travel Essayist',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    date: 'February 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Japan', 'Zen', 'Culture', 'Tea Ceremony', 'Slow Travel'],
    featured: true
  },
  {
    id: 'art-2',
    slug: 'swiss-alps-glacier-express-guide',
    title: 'Crossing the Roof of Europe: The Glacier Express Excellence Class',
    category: 'Luxury Travel',
    excerpt: 'An insider look into the world’s slowest express train: eight hours of panoramic alpine scenery, fine wines, and culinary excellence.',
    content: [
      'Known affectionately as the slowest express train on Earth, the Glacier Express connects the glamorous ski enclave of St. Moritz with the iconic silhouette of Zermatt. Over eight hours, it weaves through 91 tunnels and spans 291 soaring viaducts across the Swiss Alps.',
      'In Excellence Class, luxury is elevated into an unforgettable sensory ritual. Guests are greeted at the carriage door with chilled champagne by personal concierges. Floor-to-ceiling panoramic glass windows frame colossal snowy summits, sheer gorges, and centuries-old stone churches perched precariously on sheer mountainsides.',
      'The culinary experience is orchestrated by master Swiss chefs: a 5-course seasonal menu featuring regional Grisons mountain cheeses, tender alpine beef, and exquisite Valais white wines poured into tilted glassware designed specifically for mountain gradients.',
      'The pinnacle of the crossing arrives at the Landwasser Viaduct—a 65-meter-high limestone masterpiece curved into a sheer cliff face—and the 2,033-meter crest of the Oberalp Pass, where the snowbanks frequently reach window height.'
    ],
    author: {
      name: 'Claire Beauchamp',
      role: 'Luxury Rail & Hospitality Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    date: 'January 28, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    tags: ['Switzerland', 'Luxury Rail', 'Glacier Express', 'Alps', 'Winter'],
    featured: true
  },
  {
    id: 'art-3',
    slug: 'patagonia-ice-trekking-expedition',
    title: 'Dancing on Glacial Blue: Ice Trekking Across Perito Moreno',
    category: 'Adventure',
    excerpt: 'Strapping on steel crampons to navigate the labyrinthine crevasses and deep turquoise sinkholes of southern Argentina.',
    content: [
      'Standing at the foot of Perito Moreno, one is immediately humbled by the sheer scale of the southern ice field. The glacier rises like a jagged five-kilometer wall of sapphire and bone, groaning and creaking as millions of tons of ancient ice advance steadily forward into Lago Argentino.',
      'Trekking across its surface requires crampons and undivided focus. As our mountaineering guide guided us into deep seracs and luminous blue meltwater pools, the acoustics of the ice field were haunting—a subterranean music of dripping water, echoing fractures, and deep hydraulic murmurs.',
      'Reaching a pristine ice plateau, our guides surprised us by carving crystalline chunks from the glacier itself, serving single-malt Patagonian whisky in frosted tumblers beneath the soaring Andean sky. It is a moment where human fragility and geological eternity intersect.'
    ],
    author: {
      name: 'Mateo Morales',
      role: 'Expedition Guide & Mountain Photographer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    },
    date: 'January 14, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80',
    tags: ['Patagonia', 'Ice Trekking', 'Argentina', 'Adventure', 'Glaciers']
  },
  {
    id: 'art-4',
    slug: 'kashmir-shikaras-and-chinar-stories',
    title: 'Shikaras at Dawn: The Floating Markets and Cedar Houseboats of Kashmir',
    category: 'Travel Guides',
    excerpt: 'Gliding across Dal Lake before sunrise, where vegetable vendors trade from wooden boats amidst fragrant morning mist.',
    content: [
      'At 5:00 AM, Srinagar’s Dal Lake is wrapped in silver stillness. The only sound is the rhythmic dipping of our Shikara’s heart-shaped wooden paddle through glassy water coated in water lilies and lotus leaves.',
      'We navigated into the canals of Nigeen Lake, arriving at the historic floating vegetable and flower market. Here, local cultivators barter freshly plucked nadru (lotus stem), crisp radish, and vibrant saffron flowers directly from boat to boat, continuing a centuries-old community tradition untouched by modern supermarket chains.',
      'Later, we returned to our cedar wood houseboat, greeted with steaming brass samovars of Kehwa—green tea brewed with wild saffron, crushed green cardamoms, cinnamon, and slivered almonds. The hand-carved walnut woodwork and Persian rugs created an ambiance fit for Mughal royalty.'
    ],
    author: {
      name: 'Amina Mir',
      role: 'Himalayan Travel Chronicler',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    },
    date: 'February 01, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    tags: ['Kashmir', 'Dal Lake', 'India', 'Floating Market', 'Heritage']
  },
  {
    id: 'art-5',
    slug: 'essential-luxury-travel-packing-guide',
    title: 'The Essential Minimalist Packing Guide for Discerning Globetrotters',
    category: 'Travel Tips',
    excerpt: 'How to curate a versatile, wrinkle-resistant capsule wardrobe for multi-climate bespoke journeys without excess baggage.',
    content: [
      'True luxury in travel is not the volume of luggage you carry, but the intentionality of what travels with you. Traveling light affords freedom of movement, seamless arrivals, and clarity of mind.',
      'Invest in high-performance natural fabrics: extra-fine Merino wool regulates temperature effortlessly whether you are traversing the high-altitude Andes or sitting in an air-conditioned cabin. Raw silk blends and Belgian linen provide effortless breathability in tropical destinations like Bali and the Maldives.',
      'Always carry a compact leather tech organizer with universal GaN chargers, noise-cancelling headphones, and physical passport backups. Remember: the best journeys leave room in your suitcase—and your spirit—for what you will gather along the way.'
    ],
    author: {
      name: 'Julian Thorne',
      role: 'Founder & Design Critic',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
    },
    date: 'January 05, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    tags: ['Travel Tips', 'Packing', 'Minimalism', 'Luggage', 'Lifestyle']
  },
  {
    id: 'art-6',
    slug: 'santorini-volcanic-wine-renaissance',
    title: 'Roots in Volcanic Ash: Exploring Santorini’s Ancient Basket Vineyards',
    category: 'Culture',
    excerpt: 'How century-old Assyrtiko vines wound into protective nests (kouloura) produce some of the most mineral-driven white wines in the world.',
    content: [
      'Gazing across the arid volcanic slopes of Santorini, you will notice something peculiar: there are no traditional trellised vineyards. Instead, low-lying baskets of gnarled grapevine weave across the pumice and black basalt soil.',
      'This ancient viticultural technique, known as kouloura, protects the grapes from relentless Aegean winds and traps nighttime maritime sea fog, providing vital moisture in an island with practically zero summer rainfall.',
      'We visited an underground cave winery carved directly into the caldera face. Sipping a 2018 Assyrtiko, the wine revealed striking salinity, flinty minerality, and vibrant lemon zest. It tasted of volcanic earth, sea spray, and centuries of tireless Greek craftsmanship.'
    ],
    author: {
      name: 'Sophia Karalis',
      role: 'Sommelier & Aegean Wine Critic',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    },
    date: 'December 20, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    tags: ['Santorini', 'Wine', 'Greece', 'Gastronomy', 'Aegean']
  }
];
