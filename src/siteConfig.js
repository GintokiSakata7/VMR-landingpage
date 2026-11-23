/**
 * VMR HOSTEL CONTENT CONFIGURATION
 * Update this file with confirmed business information before publishing.
 * Do not publish sample menu items, placeholder amenities, or an unverified map pin as facts.
 */
export const siteConfig = {
  name: 'VMR Boys Hostel',
  shortName: 'VMR',
  tagline: 'A better place to settle in.',
  city: 'Hyderabad', // Confirm the exact city/locality before launch.
  address: '', // Add the full verified address.
  mapUrl: '', // Add a Google Maps share URL for the exact property pin.
  phoneDisplay: '94915 54114',
  whatsappNumber: '919491554114',
  phoneNumber: '+919491554114',
  email: '', // Optional: add the hostel's public email.
  instagramUrl: '', // Optional: add the official Instagram profile.
  googleReviewsUrl: '', // Add the official Google Business Profile / reviews URL.
  directionsLabel: 'Ask for directions',
  availabilityNote: 'Room types, availability, facilities and fees are shared directly by the hostel team.',
};

// These are illustrative room categories for the interface, not a claim that every option is available.
export const roomOptions = [
  {
    id: 'single',
    number: '01',
    name: 'Single sharing',
    note: 'A more private setup',
    description: 'For residents who prefer a little more personal space. Ask the team about availability and included facilities.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A softly lit, contemporary bedroom used as illustrative accommodation photography',
    tag: 'More privacy',
  },
  {
    id: 'double',
    number: '02',
    name: 'Double sharing',
    note: 'A balanced shared stay',
    description: 'A shared-room option for students who enjoy a familiar, social environment. Confirm the exact room setup with VMR.',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A neutral-toned bedroom with a made bed and natural light',
    tag: 'Shared living',
  },
  {
    id: 'shared',
    number: '03',
    name: 'Multi-sharing',
    note: 'A community-style option',
    description: 'A practical shared accommodation format. Ask about the number of beds, storage, room layout and current availability.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'A hostel-style room with multiple sleeping spaces, shown as reference imagery',
    tag: 'Value-focused',
  },
];

export const mealPeriods = [
  { id: 'breakfast', label: 'Breakfast', time: 'Start the day', icon: 'sun' },
  { id: 'lunch', label: 'Lunch', time: 'A midday reset', icon: 'meal' },
  { id: 'snacks', label: 'Evening', time: 'A little break', icon: 'coffee' },
  { id: 'dinner', label: 'Dinner', time: 'Wind down well', icon: 'moon' },
];

// Replace or remove amenities based on what VMR actually provides.
export const amenityGroups = [
  { icon: 'wifi', title: 'Connectivity', text: 'Ask about internet access, coverage and any usage details.' },
  { icon: 'book', title: 'Study & routine', text: 'Find out about quiet hours, study-friendly spaces and daily schedules.' },
  { icon: 'droplet', title: 'Water & hygiene', text: 'Confirm drinking water, washroom arrangements and cleaning routines.' },
  { icon: 'shirt', title: 'Laundry', text: 'Check whether laundry facilities or services are available.' },
  { icon: 'utensils', title: 'Food & dining', text: 'Ask about meal plans, timings, menu and dietary options.' },
  { icon: 'shield', title: 'Safety & support', text: 'Speak with management about entry rules, supervision and emergency support.' },
];

export const sampleFaqs = [
  {
    question: 'What room-sharing options are available?',
    answer: 'Room configurations and current availability can change. Message the VMR team with your preferred sharing type and expected joining date for the latest details.',
  },
  {
    question: 'Can I see the hostel before deciding?',
    answer: 'Yes, you can enquire about arranging a visit. Please contact the team in advance so they can confirm a suitable time.',
  },
  {
    question: 'How can I know the food menu and meal timings?',
    answer: 'The latest menu, meal schedule and food arrangements should be confirmed directly with the hostel team before booking.',
  },
  {
    question: 'What are the fees and deposit?',
    answer: 'Fees may depend on the room type and current availability. Contact VMR for the current rent, deposit, included services and payment terms.',
  },
  {
    question: 'What documents should I bring?',
    answer: 'Ask the management which identity, student or guardian details are required. Requirements should be confirmed before moving in.',
  },
];

// Public images are illustrative stock photography. Replace with authorised VMR property photos before launch.
export const galleryItems = [
  { id: 1, category: 'Rooms', title: 'A place to recharge', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85', alt: 'Contemporary bedroom, illustrative image' },
  { id: 2, category: 'Spaces', title: 'Room to settle in', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', alt: 'Warm modern living space, illustrative image' },
  { id: 3, category: 'Food', title: 'Everyday, served fresh', image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1400&q=85', alt: 'Fresh food bowl, illustrative image' },
  { id: 4, category: 'Rooms', title: 'A calm corner', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85', alt: 'Warm neutral bedroom interior, illustrative image' },
  { id: 5, category: 'Food', title: 'Made for a good break', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=85', alt: 'Colourful prepared meal, illustrative image' },
  { id: 6, category: 'Spaces', title: 'A welcoming shared space', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=85', alt: 'Comfortable shared living room, illustrative image' },
  { id: 7, category: 'Rooms', title: 'Simple, considered comfort', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85', alt: 'Bedroom with soft natural light, illustrative image' },
  { id: 8, category: 'Food', title: 'A little something delicious', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1400&q=85', alt: 'Prepared meal with vegetables, illustrative image' },
];
