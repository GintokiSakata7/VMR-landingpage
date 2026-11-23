import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'motion/react';
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUp, ArrowUpRight, BedDouble, Bed,
  BookOpen, CalendarDays, Check, CheckCircle2, ChevronDown, Clock3, Coffee, Droplets,
  ExternalLink, HeartHandshake, MapPin, Menu, MessageCircle,
  Moon, Phone, ShieldCheck, Sparkles, Sun, Utensils, Wifi, X, Camera,
  UsersRound, WashingMachine, CircleHelp, Leaf, GraduationCap, Mail,
  ShowerHead, Bath, Drumstick, Flame, Shield,
} from 'lucide-react';
import {
  siteConfig, roomOptions, mealPeriods, specialFeasts, amenityGroups, sampleFaqs, galleryItems,
} from './siteConfig';

function Instagram({ size = 24, color = 'currentColor', strokeWidth = 2, className = '', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = '', delay = 0, once = true }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.12 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false, dot = true }) {
  return (
    <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}>
      {dot && <span className="eyebrow-dot" />}
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, description, dark = false, align = 'left' }) {
  return (
    <div className={`section-heading ${dark ? 'section-heading-dark' : ''} align-${align}`}>
      {eyebrow && <Eyebrow light={dark}>{eyebrow}</Eyebrow>}
      <h2>{title} {accent && <em>{accent}</em>}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function WhatsAppLink({ children, className = '', message, icon = true, onClick, ...props }) {
  const text = message || 'Hi, I would like to know more about VMR Boys Hostel. Please share room options, fees, food menu and visiting details.';
  const href = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(text)}`;
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" onClick={onClick} {...props}>
      {children}
      {icon && <ArrowUpRight size={17} strokeWidth={1.8} />}
    </a>
  );
}

function Photo({ src, alt, className = '', eager = false }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`photo ${failed ? 'photo-fallback' : ''} ${className}`}>
      {!failed && <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} />}
      {failed && (
        <div className="photo-fallback-mark">
          <span>VMR</span>
          <small>Boys Hostel</small>
        </div>
      )}
    </div>
  );
}

const amenityIconMap = {
  chicken: Drumstick,
  droplets: ShowerHead,
  bed: Bed,
  sparkles: Sparkles,
  leaf: BookOpen,
  wifi: Wifi,
  shield: ShieldCheck,
  shirt: WashingMachine,
  utensils: Utensils,
};

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-inner">
        <span className="announcement-badge">NEW ADMISSIONS OPEN</span>
        <span className="announcement-text">
          🍗 <strong>2 Days Chicken Special Weekly</strong> • 🚿 <strong>24/7 Geyser Hot Water</strong> • 🛏️ <strong>5-Sharing & Custom Rooms Available</strong>
        </span>
        <WhatsAppLink className="announcement-link" message="Hi, I saw admissions are open. Please check availability for VMR Boys Hostel." icon={false}>
          Reserve a Bed ↗
        </WhatsAppLink>
      </div>
    </div>
  );
}

function Header({ onOpenEnquiry }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['Overview', '#overview'],
    ['Services', '#services'],
    ['Rooms', '#rooms'],
    ['Food Menu', '#food'],
    ['Hygiene & Hot Water', '#hygiene'],
    ['Gallery', '#gallery'],
    ['FAQs', '#faqs'],
    ['Contact', '#contact'],
  ];
  const close = () => setOpen(false);
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VMR Boys Hostel home" onClick={close}>
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-copy">
            <strong>VMR</strong>
            <small>BOYS HOSTEL</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="header-call" href={`tel:${siteConfig.phoneNumber}`} aria-label="Call VMR Boys Hostel">
            <Phone size={15} /> <span>{siteConfig.phoneDisplay}</span>
          </a>
          <button className="button button-dark button-small header-cta" onClick={onOpenEnquiry}>
            Enquire Now <ArrowUpRight size={15} />
          </button>
          <button
            className="mobile-menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map(([label, href], index) => (
              <motion.a
                key={href}
                href={href}
                onClick={close}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.035 }}
              >
                {label}
                <ArrowUpRight size={16} />
              </motion.a>
            ))}
            <WhatsAppLink
              className="mobile-nav-whatsapp"
              message="Hi, I am interested in joining VMR Boys Hostel. Please share room options and fees."
              onClick={close}
            >
              Chat on WhatsApp
            </WhatsAppLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero({ onOpenEnquiry }) {
  const [selectedSharing, setSelectedSharing] = useState('5-sharing');

  const sharingDescriptions = {
    '5-sharing': '5-Sharing: Budget-friendly with personal lockable wardrobe & attached bath.',
    '4-sharing': '4-Sharing: Great ventilation, study tables & comfortable beds.',
    '3-sharing': '3-Sharing: Spacious layout with ample natural light & quiet vibe.',
    '2-sharing': '2-Sharing: Semi-private twin bed room with dedicated study desks.',
    'single': 'Single Room: 100% private sanctuary for focused competitive studies.',
  };

  const getWhatsAppMessage = () => {
    return `Hi, I am interested in booking a ${selectedSharing.toUpperCase()} room at VMR Boys Hostel. Please share current availability, monthly rent, and food details.`;
  };

  return (
    <section className="hero" id="top">
      <div className="hero-ambient-glow" />
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="hero-status-pill">
              <span className="live-ping" />
              <span>ADMISSIONS OPEN 2026-2027 • VMR BOYS HOSTEL</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            A spacious stay with<br />
            homestyle meals &<br />
            <em>peaceful vibes.</em>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65 }}
          >
            Built for college students and working professionals. Enjoy <strong>spacious 5-sharing & custom rooms</strong>, delicious daily food with <strong>2 days chicken special</strong> every week, <strong>24/7 geyser hot water</strong>, sanitized bathrooms, and a calm study atmosphere.
          </motion.p>

          {/* Interactive Hero Quick Booking & Availability Widget */}
          <motion.div
            className="hero-booking-widget"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
          >
            <div className="widget-header">
              <span>SELECT YOUR SHARING PREFERENCE</span>
              <span className="widget-tag">INSTANT AVAILABILITY CHECK</span>
            </div>

            <div className="sharing-pills" role="tablist">
              {[
                { id: '5-sharing', label: '5 Sharing', badge: 'Popular' },
                { id: '4-sharing', label: '4 Sharing', badge: 'Spacious' },
                { id: '3-sharing', label: '3 Sharing', badge: 'Comfort' },
                { id: '2-sharing', label: '2 Sharing', badge: 'Cozy' },
                { id: 'single', label: 'Single', badge: 'Private' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  className={`sharing-pill ${selectedSharing === pill.id ? 'active' : ''}`}
                  onClick={() => setSelectedSharing(pill.id)}
                >
                  <span className="pill-name">{pill.label}</span>
                  {pill.badge && <span className="pill-badge">{pill.badge}</span>}
                </button>
              ))}
            </div>

            <p className="widget-summary">{sharingDescriptions[selectedSharing]}</p>

            <div className="widget-actions">
              <WhatsAppLink
                className="button button-dark widget-btn"
                message={getWhatsAppMessage()}
              >
                Check Bed Availability <ArrowUpRight size={16} />
              </WhatsAppLink>
              <button
                className="button button-outline widget-btn-secondary"
                onClick={() => onOpenEnquiry(`${selectedSharing.toUpperCase()} Room Enquiry`)}
              >
                Get Hostel Brochure
              </button>
            </div>
          </motion.div>

          {/* Quick Perks Line */}
          <motion.div
            className="hero-perks-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <div className="perk-chip">
              <Check size={14} className="perk-check" />
              <span>2 Days Chicken (Wed & Sun)</span>
            </div>
            <div className="perk-chip">
              <Check size={14} className="perk-check" />
              <span>24/7 Geyser Hot Water</span>
            </div>
            <div className="perk-chip">
              <Check size={14} className="perk-check" />
              <span>Daily Sanitized Washrooms</span>
            </div>
            <div className="perk-chip">
              <Check size={14} className="perk-check" />
              <span>Quiet Study Environment</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Visual Section with Dynamic Floating Badges */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-main-photo-frame">
            <Photo
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&q=90"
              alt="VMR Boys Hostel clean and spacious student bedroom setup"
              eager
            />
            <div className="hero-image-overlay" />

            <div className="hero-image-topline">
              <span className="live-badge">VMR HOSTEL LIVING</span>
              <span>HYDERABAD</span>
            </div>

            {/* Floating Highlight Card 1: 2 Days Chicken Special */}
            <motion.div
              className="hero-floating-card card-chicken"
              animate={{ y: [0, -7, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
            >
              <div className="floating-card-icon chicken-icon">
                <Drumstick size={20} />
              </div>
              <div className="floating-card-info">
                <strong>2 Days Chicken Special</strong>
                <small>Wed Dinner & Sun Feast</small>
              </div>
            </motion.div>

            {/* Floating Highlight Card 2: 24/7 Geyser Hot Water */}
            <motion.div
              className="hero-floating-card card-water"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.4 }}
            >
              <div className="floating-card-icon water-icon">
                <ShowerHead size={20} />
              </div>
              <div className="floating-card-info">
                <strong>24/7 Hot Water Facility</strong>
                <small>Heavy-Duty Geysers Fitted</small>
              </div>
            </motion.div>

            {/* Floating Highlight Card 3: 5-Sharing & Clean Bathrooms */}
            <motion.div
              className="hero-floating-card card-beds"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: 'easeInOut', delay: 0.8 }}
            >
              <div className="floating-card-icon bed-icon">
                <BedDouble size={20} />
              </div>
              <div className="floating-card-info">
                <strong>5-Sharing & Spacious Beds</strong>
                <small>Personal Wardrobes + Lockers</small>
              </div>
            </motion.div>

            <div className="hero-visual-footer">
              <div className="visual-stat">
                <strong>100%</strong>
                <span>Sanitized Daily</span>
              </div>
              <div className="visual-stat-divider" />
              <div className="visual-stat">
                <strong>24/7</strong>
                <span>Hot Water & Wi-Fi</span>
              </div>
              <div className="visual-stat-divider" />
              <div className="visual-stat">
                <strong>3 Meals</strong>
                <span>+ 2 Days Chicken</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hero Interactive Live Strip */}
      <div className="hero-stats-strip">
        <div className="stat-card">
          <div className="stat-icon-wrap"><Drumstick size={22} /></div>
          <div>
            <strong>2 Days Chicken Weekly</strong>
            <span>Wednesday & Sunday Non-Veg Feasts</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap"><ShowerHead size={22} /></div>
          <div>
            <strong>24/7 Geyser Hot Water</strong>
            <span>Instant hot water in all washrooms</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap"><Bed size={22} /></div>
          <div>
            <strong>5-Sharing & Custom Rooms</strong>
            <span>Spacious rooms with personal wardrobes</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon-wrap"><Sparkles size={22} /></div>
          <div>
            <strong>Clean & Sanitized Daily</strong>
            <span>Professional housekeeping & hygiene</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = [
    { text: '2 Days Chicken Special (Wed & Sun)', icon: '🍗' },
    { text: '24/7 Geyser Hot Water in All Bathrooms', icon: '🚿' },
    { text: 'Spacious 5-Sharing & Flexible Occupancy', icon: '🛏️' },
    { text: 'Daily Sanitized Bathrooms & Rooms', icon: '🧼' },
    { text: 'Peaceful & Disciplined Study Environment', icon: '📚' },
    { text: 'High-Speed 5G Wi-Fi on All Floors', icon: '📶' },
    { text: '24/7 CCTV Surveillance & Resident Care', icon: '🔒' },
    { text: 'Automatic Washing Machines & Laundry', icon: '🧺' },
  ];
  return (
    <div className="marquee" aria-label="Hostel key facilities and amenities">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i}>
            <i>{item.icon}</i>
            {item.text}
            <em className="marquee-sep">✦</em>
          </span>
        ))}
      </div>
    </div>
  );
}

function BentoServicesSection({ onOpenEnquiry }) {
  return (
    <section className="bento-section section-pad" id="services">
      <div className="section-topline">
        <span className="section-index">01 / WHY VMR HOSTEL</span>
        <Eyebrow>ESSENTIAL LIVING FACILITIES</Eyebrow>
      </div>

      <div className="bento-heading-row">
        <SectionHeading
          eyebrow="FACILITIES & SERVICES"
          title="Everything you need for a"
          accent="comfortable, focused stay."
          description="We built VMR Boys Hostel specifically addressing what students and parents care about most: delicious food, clean bathrooms, hot water, spacious rooms, and a peaceful environment."
        />
        <div className="bento-cta-aside">
          <WhatsAppLink
            className="button button-dark"
            message="Hi, I would like to enquire about all services and room facilities at VMR Boys Hostel."
          >
            Ask Us Anything
          </WhatsAppLink>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Card 1: 2 Days Chicken Special */}
        <Reveal className="bento-card bento-card-large bento-food-card">
          <div className="bento-content">
            <div className="bento-tag food-tag">
              <Drumstick size={14} /> 2 DAYS CHICKEN FEAST
            </div>
            <h3>Homestyle Dining with Weekly Non-Veg Specials</h3>
            <p>
              Food is what makes you feel at home. Enjoy <strong>2 days of rich chicken dishes</strong> every week (Wednesday Dinner & Sunday Grand Feast) along with 3 fresh daily homestyle meals, evening tea, and unlimited rice, sambar, rasam, and fresh curries.
            </p>
            <div className="food-pill-row">
              <span className="pill">🍗 Wednesday Chicken Curry</span>
              <span className="pill">🍗 Sunday Dum Biryani</span>
              <span className="pill">🥗 Veg Alternative (Paneer)</span>
              <span className="pill">☕ Evening Tea & Snacks</span>
            </div>
          </div>
          <div className="bento-image-side">
            <Photo
              src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1200&q=85"
              alt="Delicious chicken feast served hot at VMR Boys Hostel"
            />
          </div>
        </Reveal>

        {/* Card 2: 24/7 Geyser Hot Water */}
        <Reveal className="bento-card bento-water-card" delay={0.08}>
          <div className="bento-card-header">
            <div className="bento-icon-circle water-glow">
              <ShowerHead size={24} />
            </div>
            <span className="bento-badge">ALWAYS ON</span>
          </div>
          <h3>24/7 Geyser Hot Water</h3>
          <p>
            No waiting for morning warm water. Branded electric geysers are fitted in all bathrooms, providing round-the-clock instant hot showers for early classes or late study hours.
          </p>
          <ul className="bento-feature-list">
            <li><Check size={14} /> Instant hot water round-the-clock</li>
            <li><Check size={14} /> High-pressure modern fittings</li>
            <li><Check size={14} /> Clean, uninterrupted water supply</li>
          </ul>
        </Reveal>

        {/* Card 3: Spacious 5-Sharing Rooms */}
        <Reveal className="bento-card bento-room-card" delay={0.14}>
          <div className="bento-card-header">
            <div className="bento-icon-circle bed-glow">
              <Bed size={24} />
            </div>
            <span className="bento-badge">MOST POPULAR</span>
          </div>
          <h3>Spacious 5-Sharing Rooms</h3>
          <p>
            Our flagship 5-sharing rooms are deliberately built with large floor space, cross-ventilation windows, personal lockable wardrobes, sturdy beds, and bedside charging points.
          </p>
          <ul className="bento-feature-list">
            <li><Check size={14} /> 5 Individual lockable wardrobes</li>
            <li><Check size={14} /> Wide walking and study room</li>
            <li><Check size={14} /> Best value for students & freshers</li>
          </ul>
        </Reveal>

        {/* Card 4: Daily Sanitized Bathrooms */}
        <Reveal className="bento-card bento-hygiene-card" delay={0.18}>
          <div className="bento-card-header">
            <div className="bento-icon-circle hygiene-glow">
              <Sparkles size={24} />
            </div>
            <span className="bento-badge">STRICT HYGIENE</span>
          </div>
          <h3>Clean & Sanitized Bathrooms</h3>
          <p>
            Hygiene is non-negotiable. Dedicated in-house staff cleans and sanitizes washrooms daily with quality disinfectants, ensuring spotless tiles, sanitized seats, and odorless facilities.
          </p>
          <ul className="bento-feature-list">
            <li><Check size={14} /> Daily bathroom disinfection</li>
            <li><Check size={14} /> Non-slip safety flooring</li>
            <li><Check size={14} /> Regular room sweeping & mopping</li>
          </ul>
        </Reveal>

        {/* Card 5: Peaceful Study Environment */}
        <Reveal className="bento-card bento-study-card" delay={0.22}>
          <div className="bento-card-header">
            <div className="bento-icon-circle study-glow">
              <BookOpen size={24} />
            </div>
            <span className="bento-badge">DISCIPLINED</span>
          </div>
          <h3>Peaceful Study Environment</h3>
          <p>
            Created for aspirants preparing for semester exams, competitive tests (GATE, UPSC, JEE), or IT careers. Strict quiet hours after 10 PM ensure uninterrupted rest and concentration.
          </p>
          <ul className="bento-feature-list">
            <li><Check size={14} /> Silent hours enforced after 10 PM</li>
            <li><Check size={14} /> High-speed 5G Wi-Fi coverage</li>
            <li><Check size={14} /> Positive, focused peer circle</li>
          </ul>
        </Reveal>

        {/* Card 6: Security & Laundry */}
        <Reveal className="bento-card bento-security-card" delay={0.26}>
          <div className="bento-card-header">
            <div className="bento-icon-circle security-glow">
              <ShieldCheck size={24} />
            </div>
            <span className="bento-badge">SAFE & CARED</span>
          </div>
          <h3>24/7 CCTV & Auto Laundry</h3>
          <p>
            Live safely with round-the-clock CCTV cameras covering all corridors and entries, dedicated resident management, and on-premise automatic washing machines for effortless laundry.
          </p>
          <ul className="bento-feature-list">
            <li><Check size={14} /> 24/7 CCTV surveillance cameras</li>
            <li><Check size={14} /> Fully automatic washing machines</li>
            <li><Check size={14} /> RO purified drinking water</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function RoomsSection({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('five-sharing');
  const activeRoom = roomOptions.find((r) => r.id === activeTab) || roomOptions[0];

  return (
    <section className="rooms-section section-pad" id="rooms">
      <div className="section-topline">
        <span className="section-index">02 / ACCOMMODATION</span>
        <Eyebrow>FIND YOUR COMFORTABLE ROOM</Eyebrow>
      </div>

      <div className="rooms-heading-row">
        <SectionHeading
          eyebrow="SPACIOUS ROOM OPTIONS"
          title="Designed for comfort,"
          accent="built for your budget."
          description="Choose from our highly sought-after 5-sharing rooms or select 4, 3, 2, or single sharing rooms. Every room comes with comfortable beds, individual lockable wardrobes, bedside power outlets, and attached hot water bathrooms."
        />
        <div className="rooms-heading-aside">
          <span className="round-arrow"><ArrowDownRight size={28} /></span>
          <p>Need advice on room selection? Talk to our resident warden.</p>
        </div>
      </div>

      {/* Interactive Room Tabs */}
      <div className="room-selector-tabs" role="tablist">
        {roomOptions.map((room) => (
          <button
            key={room.id}
            role="tab"
            aria-selected={activeTab === room.id}
            className={`room-tab-btn ${activeTab === room.id ? 'active' : ''}`}
            onClick={() => setActiveTab(room.id)}
          >
            <span className="tab-badge">{room.tag}</span>
            <strong className="tab-title">{room.name}</strong>
            <small className="tab-sub">{room.sharingCapacity}</small>
          </button>
        ))}
      </div>

      {/* Interactive Active Room Feature Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoom.id}
          className="featured-room-showcase"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <div className="showcase-photo-wrap">
            <Photo src={activeRoom.image} alt={activeRoom.imageAlt} />
            <div className="showcase-photo-badge">
              <span>{activeRoom.badge}</span>
            </div>
            <div className="showcase-photo-bottom">
              <span>ATTACHED BATHROOM • 24/7 HOT WATER • HIGH-SPEED WI-FI</span>
            </div>
          </div>

          <div className="showcase-info">
            <div className="showcase-top">
              <span className="showcase-num">ROOM OPTION {activeRoom.number}</span>
              <span className="showcase-tag">{activeRoom.tag}</span>
            </div>
            <h3>{activeRoom.name}</h3>
            <span className="showcase-note">{activeRoom.note}</span>
            <p className="showcase-desc">{activeRoom.description}</p>

            <div className="showcase-features">
              <strong>ROOM AMENITIES INCLUDED:</strong>
              <div className="feature-grid">
                {activeRoom.features.map((feat, idx) => (
                  <div key={idx} className="feat-item">
                    <CheckCircle2 size={16} className="feat-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="showcase-actions">
              <WhatsAppLink
                className="button button-dark"
                message={`Hi, I want to reserve a bed in the ${activeRoom.name}. Please confirm current vacancy, monthly rent, and visit schedule.`}
              >
                Reserve This Room on WhatsApp <ArrowUpRight size={17} />
              </WhatsAppLink>
              <button
                className="button button-outline"
                onClick={() => onOpenEnquiry(`${activeRoom.name} Enquiry`)}
              >
                Enquire Details
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* All Rooms Card Grid */}
      <div className="room-grid">
        {roomOptions.map((room, index) => (
          <Reveal className={`room-card room-card-${index + 1}`} key={room.id} delay={index * 0.06}>
            <div className="room-image-wrap">
              <Photo src={room.image} alt={room.imageAlt} />
              <span className="room-number">{room.number}</span>
              <span className="room-tag">{room.badge || room.tag}</span>
            </div>
            <div className="room-card-copy">
              <div>
                <span className="room-note">{room.note}</span>
                <h3>{room.name}</h3>
              </div>
              <button
                className="round-link"
                aria-label={`Enquire about ${room.name}`}
                onClick={() => onOpenEnquiry(room.name)}
              >
                <ArrowUpRight size={20} />
              </button>
            </div>
            <p>{room.description}</p>
            <div className="room-card-perks">
              <span>🚿 24/7 Hot Water</span>
              <span>🗄️ Lockable Wardrobe</span>
              <span>📶 5G Wi-Fi</span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="rooms-foot">
        <span>
          <span className="tiny-dot" /> IMMEDIATE ADMISSIONS AVAILABLE • ALL ROOM TYPES FEATURE ATTACHED/CLEAN BATHROOMS
        </span>
        <button
          className="button button-outline"
          onClick={() => onOpenEnquiry('Room options and bed availability')}
        >
          Check All Vacancies <ArrowUpRight size={16} />
        </button>
      </div>
    </section>
  );
}

function FoodSection() {
  const [activeMeal, setActiveMeal] = useState('dinner');
  const meal = mealPeriods.find((item) => item.id === activeMeal) || mealPeriods[0];
  const MealIcon = activeMeal === 'breakfast' ? Sun : activeMeal === 'lunch' ? Utensils : activeMeal === 'snacks' ? Coffee : Moon;

  return (
    <section className="food-section" id="food">
      <div className="food-image-side">
        <Photo
          src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=1500&q=90"
          alt="2 Days Chicken Special Feast at VMR Boys Hostel"
        />
        <div className="food-image-stamp">
          <Drumstick size={24} />
          <span>2 DAYS</span>
          <span>CHICKEN</span>
          <i>SPECIAL</i>
        </div>
        <div className="food-floating-schedule">
          <div className="schedule-item">
            <span className="sched-day">WEDNESDAY</span>
            <strong>🍗 Spicy Chicken Curry + Rotis & Jeera Rice</strong>
          </div>
          <div className="schedule-divider" />
          <div className="schedule-item">
            <span className="sched-day">SUNDAY</span>
            <strong>🍗 Dum Chicken Biryani + Egg & Sweet</strong>
          </div>
        </div>
      </div>

      <div className="food-content">
        <Eyebrow light>HOMESTYLE DINING & NUTRITION</Eyebrow>
        <h2>
          Delicious food with<br />
          <em>2 days chicken special</em><br />
          every single week.
        </h2>
        <p className="food-intro">
          We understand that tasty, hygienic food is the heart of good hostel life. Our experienced kitchen cooks prepare fresh meals daily with quality oils, filtered water, and authentic spices — ensuring you never miss home-cooked food.
        </p>

        {/* Weekly Feast Banner */}
        <div className="feast-spotlight-box">
          <div className="feast-header">
            <Drumstick size={20} className="feast-icon" />
            <strong>WEEKLY NON-VEG FEAST SCHEDULE</strong>
          </div>
          <div className="feast-days-grid">
            <div className="feast-day-card">
              <span className="day-name">WEDNESDAY DINNER</span>
              <h4>Special Chicken Curry & Gravy</h4>
              <p>Hot wheat rotis, flavorful chicken curry, fragrant rice, dal, and fresh green salad. (Paneer Butter Masala for vegetarians).</p>
            </div>
            <div className="feast-day-card">
              <span className="day-name">SUNDAY GRAND FEAST</span>
              <h4>Hyderabadi Chicken Biryani</h4>
              <p>Mouthwatering slow-cooked chicken dum biryani, mirchi ka salan, onion raita, boiled egg, and delicious sweets.</p>
            </div>
          </div>
        </div>

        {/* Meal Switcher */}
        <div className="meal-switcher" role="tablist" aria-label="Meal periods">
          {mealPeriods.map((item) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeMeal === item.id}
              className={activeMeal === item.id ? 'meal-tab active' : 'meal-tab'}
              onClick={() => setActiveMeal(item.id)}
            >
              <span>{item.label}</span>
              <small>{item.time}</small>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            className="meal-detail"
            key={activeMeal}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="meal-detail-icon"><MealIcon size={22} /></div>
            <div>
              <span className="meal-detail-kicker">{meal.time} • {meal.label.toUpperCase()}</span>
              <h3>{meal.title}</h3>
              <p>{meal.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <WhatsAppLink
          className="food-cta"
          message="Hi, please share this week's food menu and meal timings for VMR Boys Hostel."
        >
          <span>Ask for Complete Weekly Food Menu</span> <ArrowUpRight size={18} />
        </WhatsAppLink>
        <p className="food-disclaimer">
          Pure vegetarian alternatives (Paneer / Mushroom / Special Dal) are freshly prepared for vegetarian residents on all chicken days.
        </p>
      </div>
    </section>
  );
}

function HygieneAndWaterSection({ onOpenEnquiry }) {
  return (
    <section className="hygiene-section section-pad" id="hygiene">
      <div className="section-topline">
        <span className="section-index">03 / HEALTH & HYGIENE</span>
        <Eyebrow>UNCOMPROMISING CLEANLINESS</Eyebrow>
      </div>

      <div className="hygiene-grid">
        <div className="hygiene-copy">
          <SectionHeading
            eyebrow="24/7 HOT WATER & SANITIZED BATHROOMS"
            title="Clean spaces and"
            accent="reliable comfort always."
            description="We know dirty bathrooms and cold showers ruin the hostel experience. That's why VMR Boys Hostel guarantees 24/7 geyser hot water in every washroom and scheduled daily disinfection."
          />

          <div className="hygiene-cards-stack">
            <div className="hygiene-mini-card">
              <div className="mini-card-icon"><ShowerHead size={24} /></div>
              <div>
                <strong>24/7 Geyser Hot Water</strong>
                <p>Heavy-duty, quick-heating geysers installed in all washrooms. Never worry about early morning cold showers during winters or exam seasons.</p>
              </div>
            </div>

            <div className="hygiene-mini-card">
              <div className="mini-card-icon"><Sparkles size={24} /></div>
              <div>
                <strong>Sanitized Bathrooms Daily</strong>
                <p>Dedicated cleaning staff disinfects toilets, washbasins, tiles, and mirrors every morning with hospital-grade sanitizers and pleasant fresheners.</p>
              </div>
            </div>

            <div className="hygiene-mini-card">
              <div className="mini-card-icon"><Droplets size={24} /></div>
              <div>
                <strong>RO Purified Water Stations</strong>
                <p>Multi-stage Reverse Osmosis (RO) drinking water dispensing units on each floor, with regular TDS testing and filter replacements.</p>
              </div>
            </div>

            <div className="hygiene-mini-card">
              <div className="mini-card-icon"><WashingMachine size={24} /></div>
              <div>
                <strong>Automatic Washing Machines</strong>
                <p>On-site high-capacity washing machines so residents can wash clothes anytime without waiting for weekend laundry trips.</p>
              </div>
            </div>
          </div>

          <div className="hygiene-actions">
            <WhatsAppLink
              className="button button-dark"
              message="Hi, I want to confirm the bathroom arrangements and hot water facilities at VMR Boys Hostel."
            >
              Verify Hygiene Standards on WhatsApp <ArrowUpRight size={17} />
            </WhatsAppLink>
          </div>
        </div>

        <div className="hygiene-visual">
          <div className="hygiene-photo-stack">
            <div className="photo-card photo-card-one">
              <Photo
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85"
                alt="Sanitized clean modern bathroom with hot water shower"
              />
              <span className="photo-tag">CLEAN & SANITIZED WASHROOMS</span>
            </div>
            <div className="photo-card photo-card-two">
              <Photo
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
                alt="Clean study desk in bedroom"
              />
              <span className="photo-tag">QUIET STUDY ENVIRONMENT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection({ onOpenEnquiry }) {
  return (
    <section className="facilities-section section-pad" id="facilities">
      <div className="facilities-intro">
        <Reveal>
          <Eyebrow>ALL-INCLUSIVE HOSTEL AMENITIES</Eyebrow>
          <h2>
            Everything included<br />
            in one simple<br />
            <em>monthly fee.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p>
            No hidden charges or surprise electricity bills. Your monthly stay includes room rent, 3 daily homestyle meals with 2 days chicken, 24/7 hot water, high-speed Wi-Fi, and daily housekeeping.
          </p>
          <button className="button button-dark" onClick={() => onOpenEnquiry('All-inclusive fees & facilities')}>
            Get Fee Structure <ArrowUpRight size={17} />
          </button>
        </Reveal>
        <div className="facilities-art">
          <span className="art-orbit orbit-one" />
          <span className="art-orbit orbit-two" />
          <span className="art-spark">✳</span>
          <span className="art-word">
            LIVE<br />
            <em>WELL.</em>
          </span>
        </div>
      </div>

      <div className="amenity-list">
        {amenityGroups.map((item, i) => {
          const Icon = amenityIconMap[item.icon] || CircleHelp;
          return (
            <Reveal key={item.title} delay={i * 0.045}>
              <div className="amenity-row">
                <span className="amenity-icon"><Icon size={21} strokeWidth={1.6} /></span>
                <span className="amenity-number">0{i + 1}</span>
                <div className="amenity-text">
                  <div className="amenity-title-line">
                    <h3>{item.title}</h3>
                    {item.highlight && <span className="amenity-tag">{item.highlight}</span>}
                  </div>
                  <p>{item.text}</p>
                </div>
                <ArrowUpRight className="amenity-arrow" size={20} />
              </div>
            </Reveal>
          );
        })}
        <div className="amenity-footnote">
          <span className="tiny-dot" /> ALL AMENITIES ARE ACTIVE & MAINTAINED 24/7 BY IN-HOUSE HOSTEL STAFF.
        </div>
      </div>
    </section>
  );
}

function GallerySection({ onOpenGallery }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Rooms', 'Food', 'Facilities', 'Spaces'];
  const visibleItems = useMemo(() => {
    return filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section className="gallery-section section-pad" id="gallery">
      <div className="gallery-heading-row">
        <SectionHeading
          eyebrow="A CLOSER LOOK AT VMR"
          title="Explore our rooms,"
          accent="food & spaces."
          description="Browse visual previews of our spacious 5-sharing rooms, 2 days chicken feasts, clean bathrooms, and peaceful study areas."
        />
        <div className="gallery-counter">
          <Camera size={18} />
          <span>08</span>
          <small>PHOTO SHOWCASE</small>
        </div>
      </div>

      <div className="gallery-controls">
        <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
          {filters.map((item) => (
            <button
              key={item}
              className={filter === item ? 'gallery-filter active' : 'gallery-filter'}
              onClick={() => setFilter(item)}
              role="tab"
              aria-selected={filter === item}
            >
              {item}
            </button>
          ))}
        </div>
        <span>CLICK ANY PHOTO TO ENLARGE</span>
      </div>

      <motion.div className="gallery-grid" layout>
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.button
              className={`gallery-item gallery-item-${index % 4}`}
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              onClick={() => onOpenGallery(item)}
              aria-label={`View ${item.title}`}
            >
              <Photo src={item.image} alt={item.alt} />
              <span className="gallery-item-overlay">
                <small>{item.category.toUpperCase()}</small>
                <strong>{item.title}</strong>
                <i><ArrowUpRight size={19} /></i>
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function LocationSection({ onOpenEnquiry }) {
  const mapHref = siteConfig.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VMR Boys Hostel Hyderabad')}`;
  return (
    <section className="location-section" id="location">
      <div className="location-copy">
        <Eyebrow light>PRIME & ACCESSIBLE LOCATION</Eyebrow>
        <h2>
          Close to top colleges,<br />
          coaching & <em>IT hubs.</em>
        </h2>
        <p>
          Situated in a prime student-friendly locality with effortless connectivity to colleges, competitive coaching institutes, bus stands, and metro stations. Enjoy walking access to supermarkets, pharmacies, and stationery shops.
        </p>
        <div className="location-detail">
          <MapPin size={21} />
          <div>
            <strong>VMR Boys Hostel</strong>
            <span>{siteConfig.address}, {siteConfig.city}</span>
          </div>
        </div>
        <div className="location-actions">
          <a href={mapHref} target="_blank" rel="noreferrer" className="button button-light">
            Open in Google Maps <ExternalLink size={16} />
          </a>
          <WhatsAppLink
            className="location-text-link"
            message="Hi, please share the exact Google Maps location pin and nearby landmarks for VMR Boys Hostel."
          >
            Get Location Pin on WhatsApp <ArrowUpRight size={16} />
          </WhatsAppLink>
        </div>
      </div>

      <div className="location-map-art" aria-label="Location map visual representation">
        <div className="map-grid-lines" />
        <svg className="map-lines" viewBox="0 0 650 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <path d="M-20 110 C120 100 120 190 250 180 S400 100 690 140" />
          <path d="M-20 270 C100 250 170 310 280 270 S480 240 690 320" />
          <path d="M100 -20 C110 90 210 110 180 230 S200 410 260 540" />
          <path d="M390 -20 C370 90 460 170 410 260 S400 400 500 550" />
          <path d="M-30 430 C120 380 150 470 270 420 S480 410 690 450" />
        </svg>
        <div className="map-block map-block-one" />
        <div className="map-block map-block-two" />
        <div className="map-block map-block-three" />
        <div className="map-block map-block-four" />
        <div className="map-marker">
          <span className="map-marker-pulse" />
          <span className="map-marker-pin">
            <MapPin size={21} fill="currentColor" />
          </span>
          <span className="map-marker-label">
            VMR BOYS HOSTEL<br />
            <small>HYDERABAD • ACCESSIBLE & SAFE</small>
          </span>
        </div>
        <div className="map-compass">N <ArrowUp size={15} /></div>
        <div className="map-coordinates">STUDENT FRIENDLY HUB<br />WALKING TO COMMUTE</div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="faq-section section-pad" id="faqs">
      <div className="faq-intro">
        <Eyebrow>FREQUENTLY ASKED QUESTIONS</Eyebrow>
        <h2>
          Clear answers to<br />
          what matters <em>most.</em>
        </h2>
        <p>
          Everything you need to know about food, chicken days, hot water, 5-sharing beds, cleanliness, fees, and rules. Have a specific question? Ask us directly on WhatsApp.
        </p>
        <WhatsAppLink
          className="underlined-link"
          message="Hi, I have a few specific questions regarding VMR Boys Hostel facilities."
        >
          Chat with the Hostel Warden <ArrowUpRight size={16} />
        </WhatsAppLink>
      </div>

      <div className="faq-list">
        {sampleFaqs.map((faq, index) => (
          <div className={`faq-item ${active === index ? 'faq-active' : ''}`} key={faq.question}>
            <button
              className="faq-question"
              onClick={() => setActive(active === index ? -1 : index)}
              aria-expanded={active === index}
            >
              <span className="faq-number">0{index + 1}</span>
              <strong>{faq.question}</strong>
              <span className="faq-toggle">
                {active === index ? <X size={17} /> : <ArrowDownRight size={19} />}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {active === index && (
                <motion.div
                  className="faq-answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28 }}
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection({ onOpenEnquiry }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-text">
        <Eyebrow light>JOIN VMR BOYS HOSTEL</Eyebrow>
        <h2>
          Book your bed today.<br />
          Live with <em>peace of mind.</em>
        </h2>
        <p>
          Admissions are now open for this academic year. Speak directly with the management to confirm bed vacancy, ask about 5-sharing or private options, or schedule a physical visit.
        </p>
        <div className="contact-quick-links">
          <a href={`tel:${siteConfig.phoneNumber}`}>
            <Phone size={17} />
            <span>Call Hostel: {siteConfig.phoneDisplay}</span>
            <ArrowUpRight size={16} />
          </a>
          <WhatsAppLink
            className="contact-whatsapp"
            message="Hi, I want to reserve a room at VMR Boys Hostel. Please help me with the joining process."
          >
            <MessageCircle size={17} />
            <span>Chat on WhatsApp</span>
          </WhatsAppLink>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-card-top">
          <span>HOSTEL ADMISSIONS DESK</span>
          <span>VMR / 2026-27</span>
        </div>
        <div className="contact-card-icon">
          <MessageCircle size={25} />
        </div>
        <h3>Reserve your room in 1 minute.</h3>
        <p>
          Tell us your preferred sharing type (e.g. 5-sharing or single) and your joining date. We'll prepare an instant WhatsApp booking request for you.
        </p>
        <button
          className="button button-dark contact-card-button"
          onClick={() => onOpenEnquiry('5-Sharing / Bed Reservation Enquiry')}
        >
          Start Bed Enquiry <ArrowUpRight size={17} />
        </button>
        <div className="contact-card-bottom">
          <span>DIRECT HELPLINE</span>
          <strong>{siteConfig.phoneDisplay}</strong>
        </div>
      </div>
      <div className="contact-watermark">VMR</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="footer-brand" href="#top">
          <span className="brand-mark">V<span>.</span></span>
          <span><strong>VMR</strong><small>BOYS HOSTEL</small></span>
        </a>
        <p>
          Spacious Living • 2 Days Chicken Special • 24/7 Hot Water<br />
          <em>A Peaceful Environment to Study and Thrive.</em>
        </p>
        <a href="#top" className="back-top">
          BACK TO TOP <ArrowUp size={15} />
        </a>
      </div>

      <div className="footer-middle">
        <div>
          <span>KEY SERVICES</span>
          <a href="#rooms">5-Sharing Spacious Rooms</a>
          <a href="#food">2 Days Chicken Feast (Wed & Sun)</a>
          <a href="#hygiene">24/7 Geyser Hot Water</a>
          <a href="#hygiene">Sanitized Bathrooms</a>
        </div>
        <div>
          <span>QUICK NAVIGATION</span>
          <a href="#services">All Facilities</a>
          <a href="#gallery">Hostel Gallery</a>
          <a href="#location">Location & Directions</a>
          <a href="#faqs">Frequently Asked Questions</a>
        </div>
        <div className="footer-contact">
          <span>CALL OR WHATSAPP DIRECTLY</span>
          <a href={`tel:${siteConfig.phoneNumber}`}>{siteConfig.phoneDisplay} <ArrowUpRight size={15} /></a>
          <WhatsAppLink message="Hi, I'd like to enquire about room availability at VMR Boys Hostel.">
            Message on WhatsApp <ArrowUpRight size={15} />
          </WhatsAppLink>
          {siteConfig.instagramUrl && (
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              Follow on Instagram <Instagram size={15} />
            </a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} VMR BOYS HOSTEL. ALL RIGHTS RESERVED.</span>
        <span>HYDERABAD • STUDENTS & WORKING PROFESSIONALS</span>
        <span>BUILT WITH PRIDE</span>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a className="floating-call" href={`tel:${siteConfig.phoneNumber}`} aria-label="Call VMR Boys Hostel">
        <Phone size={18} />
      </a>
      <WhatsAppLink
        className="floating-whatsapp"
        message="Hi, I am looking for accommodation at VMR Boys Hostel. Please share room options and fees."
        aria-label="WhatsApp VMR Boys Hostel"
      >
        <MessageCircle size={21} />
        <span className="whatsapp-floating-tooltip">Chat with us</span>
      </WhatsAppLink>
    </div>
  );
}

function EnquiryModal({ open, onClose, initialInterest }) {
  const [form, setForm] = useState({
    name: '',
    role: 'Student',
    interest: initialInterest || '5-Sharing Room',
    joining: '',
    message: '',
  });

  useEffect(() => {
    setForm((prev) => ({ ...prev, interest: initialInterest || '5-Sharing Room' }));
  }, [initialInterest, open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const submit = (event) => {
    event.preventDefault();
    const message = [
      'Hi, I would like to enquire about VMR Boys Hostel.',
      `Name: ${form.name || 'Not provided'}`,
      `Enquiring as: ${form.role}`,
      `Interested in: ${form.interest}`,
      `Expected joining: ${form.joining || 'Immediate / Next Month'}`,
      form.message ? `Notes: ${form.message}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            className="enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <div className="modal-topline">
              <span>VMR BOYS HOSTEL / BED RESERVATION</span>
              <button className="modal-close" onClick={onClose} aria-label="Close enquiry form">
                <X size={19} />
              </button>
            </div>
            <h2 id="enquiry-title">
              Reserve your bed at<br />
              <em>VMR Boys Hostel.</em>
            </h2>
            <p className="modal-intro">
              Enter your details below. This will open a pre-filled WhatsApp message directly with hostel management.
            </p>
            <form onSubmit={submit}>
              <label>
                Your Full Name
                <input
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  autoFocus
                  required
                />
              </label>
              <div className="form-two">
                <label>
                  I am a
                  <select value={form.role} onChange={(e) => update('role', e.target.value)}>
                    <option>Student (College / Coaching)</option>
                    <option>Parent / Guardian</option>
                    <option>Working Professional</option>
                    <option>Exam Aspirant (GATE / UPSC / etc.)</option>
                  </select>
                </label>
                <label>
                  Expected Joining Date
                  <input
                    type="text"
                    value={form.joining}
                    onChange={(e) => update('joining', e.target.value)}
                    placeholder="e.g. Tomorrow / Next Monday"
                  />
                </label>
              </div>
              <label>
                Select Sharing Room Type
                <select value={form.interest} onChange={(e) => update('interest', e.target.value)}>
                  <option>5-Sharing Spacious Room (Most Popular)</option>
                  <option>4-Sharing Room</option>
                  <option>3-Sharing Room</option>
                  <option>2-Sharing Semi-Private Room</option>
                  <option>Single Private Room</option>
                  <option>Food & 2 Days Chicken Details</option>
                  <option>Schedule a Hostel Visit</option>
                  <option>General Fee & Deposit Enquiry</option>
                </select>
              </label>
              <label>
                Any specific requirements? <span className="optional">OPTIONAL</span>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="e.g. Need attached bathroom, quiet study floor, etc."
                  rows="3"
                />
              </label>
              <button className="button button-dark modal-submit" type="submit">
                Submit on WhatsApp <ArrowUpRight size={17} />
              </button>
              <small className="form-privacy">
                Your enquiry opens directly in WhatsApp. Instant responses from the hostel warden.
              </small>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="gallery-modal-inner"
            initial={{ scale: 0.96, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.97, y: 12 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="gallery-modal-close" onClick={onClose} aria-label="Close image">
              <X size={20} />
            </button>
            <img src={item.image} alt={item.alt} />
            <div className="gallery-modal-caption">
              <span>{item.category.toUpperCase()}</span>
              <strong>{item.title}</strong>
              <small>VMR Boys Hostel • Clean, Comfortable & High-Quality Living</small>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState('5-Sharing Spacious Room');
  const [galleryItem, setGalleryItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const openEnquiry = (value) => {
    setInterest(value || '5-Sharing Spacious Room');
    setEnquiryOpen(true);
  };
  const closeEnquiry = () => setEnquiryOpen(false);
  const closeGallery = () => setGalleryItem(null);

  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <AnnouncementBar />
      <Header onOpenEnquiry={() => openEnquiry('General bed enquiry')} />
      <main>
        <Hero onOpenEnquiry={openEnquiry} />
        <Marquee />
        <BentoServicesSection onOpenEnquiry={openEnquiry} />
        <RoomsSection onOpenEnquiry={openEnquiry} />
        <FoodSection />
        <HygieneAndWaterSection onOpenEnquiry={openEnquiry} />
        <FacilitiesSection onOpenEnquiry={openEnquiry} />
        <GallerySection onOpenGallery={setGalleryItem} />
        <LocationSection onOpenEnquiry={openEnquiry} />
        <FaqSection />
        <ContactSection onOpenEnquiry={openEnquiry} />
      </main>
      <Footer />
      <FloatingActions />
      <EnquiryModal open={enquiryOpen} onClose={closeEnquiry} initialInterest={interest} />
      <GalleryModal item={galleryItem} onClose={closeGallery} />
    </div>
  );
}
