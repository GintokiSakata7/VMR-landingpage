/**
 * VMR HOSTEL CONTENT CONFIGURATION
 * Update this file with confirmed business information before publishing.
 * Do not publish sample menu items, placeholder amenities, or an unverified map pin as facts.
 */
export const siteConfig = {
  name: 'VMR Boys Hostel',
  shortName: 'VMR',
  tagline: 'Spacious rooms. Everyday comfort.',
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

// VMR-specific room configuration supplied for this project; photography remains illustrative.
export const roomOptions = [
  {
    id: 'five-sharing',
    number: '01',
    name: 'Five-sharing rooms',
    note: 'Spacious shared accommodation',
    description: 'VMR offers spacious five-sharing rooms. Ask the team about the current room layout, availability, fees and visiting times.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=88',
    imageAlt: 'Illustrative hostel dormitory with multiple sleeping spaces; not a verified photograph of VMR',
    tag: 'Five sharing',
  },
];

export const mealPeriods = [
  { id: 'breakfast', label: 'Breakfast', time: 'Start the day', icon: 'sun' },
  { id: 'lunch', label: 'Lunch', time: 'A midday reset', icon: 'meal' },
  { id: 'snacks', label: 'Evening', time: 'A little break', icon: 'coffee' },
  { id: 'dinner', label: 'Dinner', time: 'Wind down well', icon: 'moon' },
];

// Confirm these business details with VMR before public launch.
export const amenityGroups = [
  { icon: 'bed', title: 'Spacious five-sharing rooms', text: 'A shared room setup for five residents, with a spacious room environment for everyday hostel living.' },
  { icon: 'droplet', title: 'Hot water', text: 'Hot water is available for residents as part of the everyday facilities.' },
  { icon: 'bath', title: 'Clean bathrooms', text: 'Clean bathroom facilities to make daily routines more comfortable.' },
  { icon: 'utensils', title: 'Chicken twice a week', text: 'Chicken is served on two days each week. Ask management for the current days and menu.' },
  { icon: 'sparkles', title: 'Clean, comfortable environment', text: 'A hostel environment focused on keeping everyday shared living comfortable and welcoming.' },
];

export const sampleFaqs = [
  {
    question: 'What room-sharing option does VMR offer?',
    answer: 'VMR offers spacious five-sharing rooms. Contact the team for current availability, the exact room layout, fees and visiting details.',
  },
  {
    question: 'Is hot water available?',
    answer: 'Yes. Hot water is available for residents. You can contact the team for any details about timings or usage arrangements.',
  },
  {
    question: 'Are the bathrooms clean?',
    answer: 'VMR provides clean bathroom facilities. We recommend visiting the hostel to see the rooms and bathrooms in person before deciding.',
  },
  {
    question: 'How often is chicken served?',
    answer: 'Chicken is served twice a week. Message the team to confirm the current days, menu and meal timings.',
  },
  {
    question: 'Can I visit the hostel before booking?',
    answer: 'Yes, you can contact the VMR team to arrange a visit and see the five-sharing rooms, bathrooms and overall environment.',
  },
  {
    question: 'How can I know the fees and deposit?',
    answer: 'Contact VMR directly for current rent, deposit, inclusions and payment details. These can be discussed when you enquire about availability.',
  },
];

// Public image URLs are illustrative stock photography. Replace with authorised VMR property photos before launch.
export const galleryItems = [
  { id: 1, category: 'Rooms', title: 'Shared room inspiration', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=85', alt: 'Hostel dormitory with multiple sleeping spaces, illustrative image' },
  { id: 2, category: 'Spaces', title: 'A welcoming shared space', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85', alt: 'Warm modern living space, illustrative image' },
  { id: 3, category: 'Food', title: 'A hearty chicken meal', image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1400&q=85', alt: 'Indian chicken curry meal, illustrative image' },
  { id: 4, category: 'Bathrooms', title: 'Clean bathroom inspiration', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1400&q=85', alt: 'Bright clean bathroom interior, illustrative image' },
  { id: 5, category: 'Rooms', title: 'A calm place to recharge', image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=85', alt: 'Contemporary bedroom interior, illustrative image' },
  { id: 6, category: 'Food', title: 'Freshly prepared food', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1400&q=85', alt: 'Fresh prepared meal, illustrative image' },
  { id: 7, category: 'Spaces', title: 'Comfortable common areas', image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1400&q=85', alt: 'Comfortable living room, illustrative image' },
  { id: 8, category: 'Rooms', title: 'Simple, considered comfort', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85', alt: 'Bedroom with soft natural light, illustrative image' },
  { id: 9, category: 'Bathrooms', title: 'Bright washroom details', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85', alt: 'Modern bathroom interior, illustrative image' },
];