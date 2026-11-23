/**
 * VMR BOYS HOSTEL CONFIGURATION & DETAILS
 * Verified amenities, room sharing options, food schedules, and contact info.
 */

export const siteConfig = {
  name: 'VMR Boys Hostel',
  shortName: 'VMR',
  tagline: 'Spacious Living, Homestyle Food & A Peaceful Study Environment',
  city: 'Hyderabad',
  address: 'Near Main Academic & Tech Hub',
  phoneDisplay: '94915 54114',
  whatsappNumber: '919491554114',
  phoneNumber: '+919491554114',
  instagramUrl: 'https://instagram.com',
  mapUrl: 'https://maps.google.com/?q=VMR+Boys+Hostel',
  availabilityNote: 'Admissions open for students and working professionals. Immediate bed reservations available.',
};

export const roomOptions = [
  {
    id: 'five-sharing',
    number: '01',
    name: '5-Sharing Spacious Room',
    badge: 'Most Popular for Students',
    tag: 'Best Value',
    sharingCapacity: '5 Beds',
    note: 'Large, Airy & Community-Friendly',
    description: 'Designed specifically for students who want maximum savings without sacrificing space. Super spacious layout with 5 comfortable beds, individual lockable wardrobes, bedside power outlets, and attached sanitized washroom with 24/7 geyser hot water.',
    features: [
      '5 Individual Lockable Steel/Wood Wardrobes',
      'Attached Sanitized Bathroom with 24/7 Hot Water',
      'Spacious Walking Room & Large Cross-Ventilation Windows',
      'High-Speed 5G Wi-Fi Coverage & Bedside Charging Points',
      'Daily Deep Cleaning & Dusting by Housekeeping',
    ],
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Spacious 5-sharing student hostel bedroom with clean beds and individual lockers',
  },
  {
    id: 'four-sharing',
    number: '02',
    name: '4-Sharing Comfort Room',
    badge: 'Balanced Living',
    tag: 'Comfort & Study',
    sharingCapacity: '4 Beds',
    note: 'Comfortable & Well-Ventilated',
    description: 'A well-balanced room setup offering extra space and a focused environment. Features individual personal storage, study desk space, attached hot water bathroom, and abundant natural lighting.',
    features: [
      'Individual Lockable Cupboards',
      'Attached Bathroom with Geyser Hot Water',
      'Study Space & High-Speed Wi-Fi',
      'Daily Housekeeping & Regular Linen Wash',
    ],
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Clean 4-sharing student accommodation with bright lighting',
  },
  {
    id: 'three-sharing',
    number: '03',
    name: '3-Sharing Room',
    badge: 'High Demand',
    tag: 'Student Favourite',
    sharingCapacity: '3 Beds',
    note: 'Quiet & Spacious',
    description: 'An ideal setup for students preparing for competitive exams or college semesters. Ample room space, personal study desks, attached modern washroom, and a disciplined, quiet atmosphere.',
    features: [
      'Extra Floor Space & Ventilation',
      'Attached Sanitized Bathroom with 24/7 Geyser',
      'Personal Study Desks & Power Sockets',
      'CCTV Secured Floor & Power Backup',
    ],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Bright 3 sharing hostel bedroom with comfortable bedding',
  },
  {
    id: 'two-sharing',
    number: '04',
    name: '2-Sharing Room',
    badge: 'Executive Comfort',
    tag: 'Semi-Private',
    sharingCapacity: '2 Beds',
    note: 'Peaceful & Semi-Private',
    description: 'Tailored for senior students or working professionals who prefer quiet evenings and personal room. Twin beds with orthopaedic mattresses, large wardrobes, and attached clean bath.',
    features: [
      'Twin Bed Arrangement with Quality Mattresses',
      'Dual Study Workstations',
      'Attached Sanitized Washroom with Geyser',
      'Quiet, Focused Ambience',
    ],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Twin sharing modern clean bedroom',
  },
  {
    id: 'single-room',
    number: '05',
    name: 'Single Private Room',
    badge: 'Maximum Privacy',
    tag: 'Private Room',
    sharingCapacity: '1 Bed',
    note: 'Ultimate Privacy & Focus',
    description: 'Your own private sanctuary for uninterrupted study and peaceful rest. Full privacy with dedicated study station, personal wardrobe, and attached private bathroom with 24/7 hot water.',
    features: [
      '100% Private Bedroom with Personal Key',
      'Dedicated Ergonomic Study Desk & Chair',
      'Private Attached Bathroom with 24/7 Geyser',
      'Zero Noise & Complete Concentration',
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Single occupancy private hostel room with study desk',
  },
];

export const specialFeasts = {
  headline: '2 Days Chicken Special Weekly',
  subheadline: 'Hygienic, Unlimited Homestyle Food Cooked with Love & Quality Ingredients',
  schedule: [
    {
      day: 'Wednesday Special',
      type: 'Dinner Feast',
      menu: '🍗 Flavorful Chicken Gravy / Chicken Curry served with hot Rotis, fragrant Jeera Rice, Dal Tadka, and fresh Salad. (Paneer Butter Masala served for vegetarians).',
      badge: 'Mid-week Feast',
    },
    {
      day: 'Sunday Grand Feast',
      type: 'Lunch Special',
      menu: '🍗 Special Hyderabadi Style Dum Chicken Biryani with Mirchi ka Salan, Onion Raita, Egg Roast, and delicious Gulab Jamun / Sweet. (Veg Biryani for vegetarians).',
      badge: 'Weekend Highlight',
    },
    {
      day: 'Everyday Daily Meals',
      type: 'Breakfast, Lunch & Dinner',
      menu: 'Morning breakfast (Idli, Dosa, Puri, Upma with Chutney & Sambar), Afternoon lunch (Rice, Dal, Veg curries, Rasam, Curd), Evening Tea, and Warm Dinner.',
      badge: 'Daily Homestyle',
    },
  ],
};

export const mealPeriods = [
  {
    id: 'breakfast',
    label: 'Breakfast',
    time: '7:30 AM – 9:30 AM',
    title: 'Hot & Nutritious Breakfast to Start Your Day',
    description: 'Daily rotating South Indian favorites like Idli, Crispy Dosas, Hot Puris, and Upma accompanied by fresh coconut chutney, spicy sambar, and hot tea/coffee.',
    icon: 'sun',
  },
  {
    id: 'lunch',
    label: 'Lunch',
    time: '12:30 PM – 2:30 PM',
    title: 'Wholesome Homestyle Afternoon Meals',
    description: 'Steamed Basmati/Sona Masoori Rice, Daily Dal (Pappu), Seasonal Green Veggie Fry, Rich Curry, Traditional Sambar, Piping Hot Rasam, and Chilled Fresh Curd.',
    icon: 'utensils',
  },
  {
    id: 'snacks',
    label: 'Evening Tea',
    time: '5:00 PM – 6:00 PM',
    title: 'Evening Refreshment to Power Your Study',
    description: 'Hot Masala Chai / Filter Coffee served with light evening snacks (biscuits/snacks) to refresh your mind after college or work hours.',
    icon: 'coffee',
  },
  {
    id: 'dinner',
    label: 'Dinner (2 Days Chicken)',
    time: '7:30 PM – 10:00 PM',
    title: 'Warm Dinner with Weekly 2 Days Chicken Special',
    description: 'Warm dinner including fresh Phulkas/Rotis, curries, and rice. Features our famous 2-Days Chicken Special every Wednesday dinner and Sunday feast with mouth-watering gravies!',
    icon: 'moon',
  },
];

export const amenityGroups = [
  {
    icon: 'chicken',
    title: '2 Days Chicken Special',
    highlight: 'Wed & Sun Feasts',
    text: 'Delicious, authentic chicken curries and biryani feasts twice every week, plus 3 daily unlimited homestyle nutritious meals.',
  },
  {
    icon: 'droplets',
    title: '24/7 Geyser Hot Water',
    highlight: 'Instant Hot Showers',
    text: 'Modern branded geysers installed in bathrooms ensure reliable hot water whenever you need a morning or late-night shower.',
  },
  {
    icon: 'bed',
    title: 'Spacious 5-Sharing & Custom Rooms',
    highlight: '1 to 5 Sharing Beds',
    text: 'Spacious rooms with natural air cross-ventilation, comfortable spring/foam mattresses, and individual lockable wardrobes.',
  },
  {
    icon: 'sparkles',
    title: 'Clean & Sanitized Bathrooms',
    highlight: 'Daily Deep Cleaning',
    text: 'Dedicated housekeeping sanitizes all washrooms and common spaces daily with disinfectants for squeaky-clean hygiene.',
  },
  {
    icon: 'leaf',
    title: 'Peaceful Study Environment',
    highlight: 'Disciplined Atmosphere',
    text: 'Quiet hours after 10 PM, study desk zones, and a focused student community ideal for acing exams and career goals.',
  },
  {
    icon: 'wifi',
    title: 'High-Speed 5G Wi-Fi',
    highlight: 'Unlimited Broadband',
    text: 'Seamless fiber optic high-speed Wi-Fi access on all floors for uninterrupted online lectures, project submissions, and calls.',
  },
  {
    icon: 'shield',
    title: '24/7 CCTV & Security',
    highlight: 'Safe & Monitored',
    text: 'Round-the-clock CCTV surveillance at all entryways, corridors, and biometric register with resident warden supervision.',
  },
  {
    icon: 'shirt',
    title: 'Washing Machines & Laundry',
    highlight: 'Fully Automatic',
    text: 'On-premise automatic washing machines and spacious sunlit drying areas make weekend clothes washing effortless.',
  },
];

export const sampleFaqs = [
  {
    question: 'What are the food details? Is non-veg provided?',
    answer: 'Yes! We provide 3 nutritious meals daily plus evening tea, including our signature 2-Days Chicken Special every week (Wednesday dinner and Sunday feast). We also provide delicious vegetarian alternatives (like Paneer curries) on non-veg days.',
  },
  {
    question: 'Is 24/7 hot water available in all bathrooms?',
    answer: 'Yes! All attached and common bathrooms are equipped with heavy-duty geysers providing instant 24/7 hot water, ensuring you never have to worry about cold showers in winter or early mornings.',
  },
  {
    question: 'What sharing room options do you have? Is 5-sharing available?',
    answer: 'Yes, we provide 5-sharing spacious rooms which are extremely popular among budget-conscious students. We also offer 4-sharing, 3-sharing, 2-sharing, and single occupancy rooms. Every resident gets their own personal lockable wardrobe, study space, and bedside electrical socket.',
  },
  {
    question: 'How is cleanliness and hygiene maintained?',
    answer: 'Cleanliness is our top priority. We have dedicated housekeeping staff that conducts daily sanitization of all bathrooms, sweeps and mops the rooms, and maintains pristine common corridors using quality disinfectants.',
  },
  {
    question: 'Is the environment quiet and suitable for exam studies?',
    answer: 'Absolutely. VMR Boys Hostel maintains a disciplined, peaceful environment with strict quiet hours observed from 10:00 PM onwards. It is an ideal space for students preparing for competitive exams (GATE, UPSC, JEE, etc.) or university studies.',
  },
  {
    question: 'What are the rent fees and advance deposit?',
    answer: 'Fees vary depending on the chosen sharing type (5, 4, 3, 2, or single sharing). The rent is all-inclusive covering room stay, 3 daily meals, 2 days chicken, Wi-Fi, electricity, hot water, and housekeeping. Contact us directly on WhatsApp for current rates and special offers.',
  },
  {
    question: 'How do I visit or reserve a bed at VMR Boys Hostel?',
    answer: 'You can tap any "Book via WhatsApp" or "Call Hostel" button on this site. Our management will share the exact location pin, confirm current bed availability, and arrange a guided visit for you or your parents.',
  },
];

export const galleryItems = [
  {
    id: 1,
    category: 'Rooms',
    title: 'Spacious 5-Sharing Bedroom',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=85',
    alt: 'Spacious multi-sharing hostel room with sturdy beds and clean layout',
  },
  {
    id: 2,
    category: 'Food',
    title: '2 Days Chicken Special Feast',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1400&q=85',
    alt: 'Delicious chicken biryani and curry feast, illustrative image',
  },
  {
    id: 3,
    category: 'Facilities',
    title: 'Sanitized Bathrooms with 24/7 Geyser',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=85',
    alt: 'Clean and modern sanitized bathroom with hot water shower',
  },
  {
    id: 4,
    category: 'Rooms',
    title: 'Natural Light & Clean Wardrobes',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
    alt: 'Airy hostel room with sunlight and organized beds',
  },
  {
    id: 5,
    category: 'Spaces',
    title: 'Peaceful Study Environment',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    alt: 'Quiet study desk in bedroom with good lighting',
  },
  {
    id: 6,
    category: 'Food',
    title: 'Fresh Daily Homestyle Meals',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=85',
    alt: 'Freshly prepared healthy meals',
  },
  {
    id: 7,
    category: 'Rooms',
    title: '2-Sharing & 3-Sharing Comfort',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1400&q=85',
    alt: 'Twin sharing comfortable room',
  },
  {
    id: 8,
    category: 'Spaces',
    title: 'Clean Corridors & Secure Spaces',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85',
    alt: 'Bright and clean common hostel living space',
  },
];
