import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import {
  ArrowDown, ArrowDownRight, ArrowUp, ArrowUpRight, BedDouble, Bath,
  Check, Coffee, Droplets, ExternalLink, HeartHandshake, MapPin, Menu,
  MessageCircle, Moon, Phone, Sparkles, Sun, Utensils, X, Camera,
  UsersRound, CircleHelp,
} from 'lucide-react';

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

function WhatsAppIcon({ size = 20, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z"/>
    </svg>
  );
}
import {
  siteConfig, roomOptions, mealPeriods, amenityGroups, sampleFaqs, galleryItems,
} from './siteConfig';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

function Reveal({ children, className = '', delay = 0, once = true }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.14 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }) {
  return <div className={`eyebrow ${light ? 'eyebrow-light' : ''}`}><span />{children}</div>;
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
  const text = message || 'Hi, I would like to know more about VMR Boys Hostel. Please share room availability, fees, food and visiting details.';
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
      {failed && <div className="photo-fallback-mark"><span>VMR</span><small>Image preview</small></div>}
    </div>
  );
}

const amenityIconMap = {
  bed: BedDouble,
  droplet: Droplets,
  bath: Bath,
  utensils: Utensils,
  sparkles: Sparkles,
};

function Header({ onOpenEnquiry }) {
  const [open, setOpen] = useState(false);
  const links = [
    ['The hostel', '#story'], ['Rooms', '#rooms'], ['Food', '#food'],
    ['Facilities', '#facilities'], ['Gallery', '#gallery'], ['FAQs', '#faqs'],
  ];
  const close = () => setOpen(false);
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VMR Boys Hostel home" onClick={close}>
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-copy"><strong>VMR</strong><small>BOYS HOSTEL</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="header-call" href={`tel:${siteConfig.phoneNumber}`} aria-label="Call VMR Boys Hostel"><Phone size={16} /> <span>{siteConfig.phoneDisplay}</span></a>
          <button className="button button-dark button-small header-cta" onClick={onOpenEnquiry}>Enquire now <ArrowUpRight size={16} /></button>
          <button className="mobile-menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
            {links.map(([label, href], index) => (
              <motion.a key={href} href={href} onClick={close} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.04 }}>{label}<ArrowUpRight size={16} /></motion.a>
            ))}
            <WhatsAppLink className="mobile-nav-whatsapp" message="Hi, I'm interested in VMR Boys Hostel. Please share the details." onClick={close}>Chat on WhatsApp</WhatsAppLink>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  return (
    <section className="hero-clean" id="top">
      <div className="hero-clean-grid">
        <motion.div
          className="hero-clean-copy"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.03 } } }}
        >
          <motion.p
            className="hero-clean-label"
            variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
          >
            <span className="hero-clean-dot" aria-hidden="true" />
            VMR Boys Hostel · {siteConfig.city}
          </motion.p>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
          >
            A clean, comfortable<br />place to <em>call home.</em>
          </motion.h1>

          <motion.p
            className="hero-clean-desc"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
          >
            Spacious five-sharing rooms, daily hot water, hygienic bathrooms, and home-style meals with chicken twice a week. Everything a student or working professional needs.
          </motion.p>

          <motion.div
            className="hero-clean-actions"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
          >
            <WhatsAppLink
              className="hero-clean-wa"
              message="Hi, I would like to know more about VMR Boys Hostel. Please share room availability, fees, and food details."
              icon={false}
            >
              <WhatsAppIcon size={18} />
              Enquire on WhatsApp
            </WhatsAppLink>

            <div className="hero-clean-subactions">
              <a className="hero-clean-call" href={`tel:${siteConfig.phoneNumber}`}>
                <Phone size={14} /> Call {siteConfig.phoneDisplay}
              </a>
              <a className="hero-clean-secondary" href="#rooms">
                View rooms <ArrowDown size={14} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-clean-highlights"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.35, delay: 0.12 } } }}
          >
            <span><BedDouble size={15} /> 5-Sharing Rooms</span>
            <span><Droplets size={15} /> Hot Water</span>
            <span><Utensils size={15} /> Chicken 2×/week</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-clean-image"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        >
          <Photo
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1400&q=88"
            alt="Spacious hostel room with clean beds"
            eager
          />
          <div className="hero-clean-image-tag">
            <MapPin size={12} /> {siteConfig.city}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Marquee() {
  const words = ['Spacious five-sharing rooms', 'Hot water every day', 'Clean bathrooms', 'Chicken served twice a week'];
  return (
    <div className="marquee" aria-label="Spacious five-sharing rooms, hot water, clean bathrooms and chicken served twice a week">
      <div className="marquee-track">{[...words, ...words].map((word, i) => <span key={i}>{word}<i>✳</i></span>)}</div>
    </div>
  );
}

function StorySection() {
  return (
    <section className="story-section section-pad" id="story">
      <div className="story-topline"><Eyebrow>THE IDEA OF VMR</Eyebrow><span className="story-index">01 — A PLACE TO BEGIN</span></div>
      <div className="story-layout">
        <Reveal className="story-heading-wrap">
          <h2>Comfort lives in the <em>everyday details.</em></h2>
        </Reveal>
        <Reveal className="story-copy" delay={0.1}>
          <p className="story-lead">A good hostel stay is about more than a bed. It is about having enough room, a clean place to freshen up and dependable everyday comforts.</p>
          <p>At VMR Boys Hostel, residents can enquire about spacious five-sharing rooms, hot water, clean bathrooms and a weekly food routine that includes chicken twice a week. Explore the details and speak with the team before planning your stay.</p>
          <a href="#contact" className="underlined-link">Get to know VMR <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
      <div className="story-image-grid">
        <Reveal className="story-image-main"><Photo src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=85" alt="Warm shared living room interior, illustrative stock image" /><span className="image-caption">A SPACE THAT FEELS LIKE YOURS <i>01</i></span></Reveal>
        <Reveal className="story-image-side" delay={0.12}><Photo src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85" alt="Calm bedroom interior with neutral palette, illustrative stock image" /><div className="side-note"><span className="side-note-mark">✳</span><p>Good living is not one big thing. It's many little things, done well.</p></div></Reveal>
      </div>
      <div className="story-principles">
        <div><span>01</span><strong>Room to settle in</strong><small>Spacious five-sharing accommodation.</small></div>
        <div><span>02</span><strong>Daily essentials</strong><small>Hot water and clean bathrooms.</small></div>
        <div><span>03</span><strong>Food that feels familiar</strong><small>Chicken served twice each week.</small></div>
      </div>
      <p className="stock-note">The photographs in this preview are illustrative stock imagery, not verified photographs of VMR Boys Hostel.</p>
    </section>
  );
}

function RoomsSection({ onOpenEnquiry }) {
  const room = roomOptions[0];
  return (
    <section className="rooms-section section-pad" id="rooms">
      <div className="section-topline"><span className="section-index">02 / ACCOMMODATION</span><Eyebrow>YOUR SPACE AT VMR</Eyebrow></div>
      <div className="rooms-heading-row">
        <SectionHeading eyebrow="FIVE-SHARING ACCOMMODATION" title="Room to rest." accent="Space to settle." description="VMR's spacious five-sharing rooms offer a shared place to live while you focus on your studies, work and everyday routine." />
        <div className="rooms-heading-aside"><span className="round-arrow"><ArrowDownRight size={28} /></span><p>See the room in person and ask about current availability.</p></div>
      </div>
      <div className="room-feature-layout">
        <Reveal className="room-feature-photo">
          <Photo src={room.image} alt={room.imageAlt} />
          <span className="room-feature-photo-tag">VMR ROOM STYLE / FIVE SHARING</span>
          <span className="room-feature-photo-index">01 — SHARED LIVING</span>
        </Reveal>
        <Reveal className="room-feature-copy" delay={0.12}>
          <span className="room-feature-number">05 <small>RESIDENTS / ROOM</small></span>
          <h3>Spacious five-sharing rooms.</h3>
          <p>Share the space without feeling boxed in. VMR's five-sharing setup is designed around a spacious room environment for day-to-day hostel living.</p>
          <div className="room-feature-details">
            <div><span>01</span><strong>Five-sharing setup</strong><small>A shared room arrangement for five residents.</small></div>
            <div><span>02</span><strong>Spacious room environment</strong><small>Room to move around and settle into your routine.</small></div>
            <div><span>03</span><strong>See before you decide</strong><small>Ask about the actual room layout and visit timings.</small></div>
          </div>
          <WhatsAppLink className="room-enquire-link" message="Hi, I would like to know more about VMR Boys Hostel's spacious five-sharing rooms. Please share room photos, availability, fees and visiting details.">Ask about five-sharing rooms <ArrowUpRight size={17} /></WhatsAppLink>
        </Reveal>
      </div>
      <div className="rooms-foot"><span><span className="tiny-dot" /> ACTUAL ROOM PHOTOGRAPHS CAN BE ADDED AFTER A VMR PHOTO VISIT.</span><button className="button button-outline" onClick={() => onOpenEnquiry('Five-sharing room availability and fees')}>Check room availability <ArrowUpRight size={16} /></button></div>
    </section>
  );
}

function FoodSection() {
  const [activeMeal, setActiveMeal] = useState('breakfast');
  const meal = mealPeriods.find((item) => item.id === activeMeal) || mealPeriods[0];
  const MealIcon = activeMeal === 'breakfast' ? Sun : activeMeal === 'lunch' ? Utensils : activeMeal === 'snacks' ? Coffee : Moon;
  return (
    <section className="food-section" id="food">
      <div className="food-image-side">
        <Photo src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1500&q=90" alt="Indian chicken curry meal, illustrative stock photography" />
        <div className="food-image-stamp"><span>CHICKEN</span><span>TWICE A WEEK</span><i>✳</i></div>
        <span className="food-image-credit">ILLUSTRATIVE FOOD IMAGE · ACTUAL MENU ON REQUEST</span>
      </div>
      <div className="food-content">
        <Eyebrow light>FOOD & EVERYDAY RHYTHM</Eyebrow>
        <h2>A good meal<br />makes a <em>good day.</em></h2>
        <p className="food-intro">Food is part of everyday comfort at VMR. Chicken is served twice a week, alongside the regular meal routine. Ask the team for the current dishes, exact days and serving timings.</p>
        <div className="chicken-frequency"><span className="chicken-frequency-icon"><Utensils size={17} /></span><span><strong>Chicken served 2 days a week</strong><small>Ask the team which days are currently scheduled.</small></span><span className="chicken-frequency-count">2×</span></div>
        <div className="meal-switcher" role="tablist" aria-label="Meal periods">
          {mealPeriods.map((item) => (
            <button key={item.id} role="tab" aria-selected={activeMeal === item.id} className={activeMeal === item.id ? 'meal-tab active' : 'meal-tab'} onClick={() => setActiveMeal(item.id)}>
              <span>{item.label}</span><small>{item.time}</small>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div className="meal-detail" key={activeMeal} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <div className="meal-detail-icon"><MealIcon size={22} /></div>
            <div><span className="meal-detail-kicker">{meal.label.toUpperCase()}</span><h3>{activeMeal === 'breakfast' ? 'A fresh start to the day.' : activeMeal === 'lunch' ? 'A proper pause in the day.' : activeMeal === 'snacks' ? 'A little something between.' : 'A good way to wind down.'}</h3><p>Ask the team for today's dishes, serving time and current meal plan.</p></div>
          </motion.div>
        </AnimatePresence>
        <WhatsAppLink className="food-cta" message="Hi, could you please share the latest VMR Boys Hostel food menu, meal timings and dining details?" icon={false}>Ask for the current menu <ArrowUpRight size={16} /></WhatsAppLink>
        <p className="food-disclaimer">The weekly chicken days, dishes and meal timings can be confirmed directly with VMR management.</p>
      </div>
    </section>
  );
}

function FacilitiesSection({ onOpenEnquiry }) {
  return (
    <section className="facilities-section section-pad" id="facilities">
      <div className="facilities-intro">
        <Reveal><Eyebrow>THE DETAILS THAT MATTER</Eyebrow><h2>Everyday comfort,<br /><em>taken care of.</em></h2></Reveal>
        <Reveal delay={0.12}><p>A comfortable hostel is built around the things residents use every day. VMR brings together spacious shared rooms, hot water, clean bathrooms and a well-kept living environment.</p><button className="button button-dark" onClick={() => onOpenEnquiry('Facilities and everyday services')}>Ask about facilities <ArrowUpRight size={17} /></button></Reveal>
        <div className="facilities-art"><span className="art-orbit orbit-one" /><span className="art-orbit orbit-two" /><span className="art-spark">✳</span><span className="art-word">LIVE<br /><em>WELL.</em></span></div>
      </div>
      <div className="amenity-list">
        {amenityGroups.map((item, i) => {
          const Icon = amenityIconMap[item.icon] || CircleHelp;
          return <Reveal key={item.title} delay={i * 0.07}><div className="amenity-row"><span className="amenity-icon"><Icon size={21} strokeWidth={1.6} /></span><span className="amenity-number">0{i + 1}</span><div className="amenity-text"><h3>{item.title}</h3><p>{item.text}</p></div><ArrowUpRight className="amenity-arrow" size={20} /></div></Reveal>;
        })}
        <div className="amenity-footnote"><span className="tiny-dot" /> CONTACT VMR TO CHECK CURRENT ROOM AVAILABILITY, FEES AND VISIT TIMINGS.</div>
      </div>
    </section>
  );
}

function CareSection() {
  return (
    <section className="care-section">
      <div className="care-image"><Photo src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1500&q=85" alt="Bright, clean shared bathroom interior used as illustrative stock photography" /><span className="care-image-index">CLEAN BATHROOMS / EVERYDAY COMFORT</span></div>
      <div className="care-copy">
        <Eyebrow light>FOR STUDENTS & FAMILIES</Eyebrow>
        <h2>Feel settled in the <em>little things.</em></h2>
        <p>A hostel should feel comfortable to return to after a long day. VMR focuses on the everyday essentials that matter when you are living away from home.</p>
        <div className="care-checks"><div><Check size={16} /> Spacious five-sharing rooms</div><div><Check size={16} /> Hot water for daily use</div><div><Check size={16} /> Clean bathrooms</div><div><Check size={16} /> A clean and comfortable hostel environment</div></div>
        <WhatsAppLink className="care-link" message="Hi, I am enquiring about VMR Boys Hostel. Could you please share details about the five-sharing rooms, hot water, bathroom facilities and hostel environment?">Ask about the living experience <ArrowUpRight size={17} /></WhatsAppLink>
      </div>
    </section>
  );
}

function PeopleSection({ onOpenEnquiry }) {
  return (
    <section className="people-section section-pad">
      <div className="people-heading"><SectionHeading eyebrow="THE PEOPLE BEHIND THE PLACE" title="Good support starts" accent="with a conversation." description="Know who to speak with, how residents are supported and who handles everyday questions. The VMR team can share the right contact details directly." /></div>
      <div className="people-layout">
        <div className="people-quote"><div className="quote-mark">“</div><p>The best way to understand a place is to see it, ask questions and meet the people who look after it.</p><span>THE VMR APPROACH</span></div>
        <div className="people-cards">
          <div className="people-card people-card-main"><div className="people-avatar avatar-olive"><UsersRound size={26} /></div><div><span>01 / FIRST POINT OF CONTACT</span><h3>Hostel management</h3><p>Speak directly with the team about rooms, fees, policies and availability.</p></div><button className="people-card-arrow" onClick={() => onOpenEnquiry('Speak with hostel management')} aria-label="Contact hostel management"><ArrowUpRight size={19} /></button></div>
          <div className="people-card"><div className="people-avatar avatar-sand"><HeartHandshake size={26} /></div><div><span>02 / RESIDENT SUPPORT</span><h3>Everyday assistance</h3><p>Ask who to reach for routine queries, maintenance and resident support.</p></div><button className="people-card-arrow" onClick={() => onOpenEnquiry('Resident support details')} aria-label="Ask about resident support"><ArrowUpRight size={19} /></button></div>
        </div>
      </div>
      <p className="people-note">Named team members and staff photographs can be added here after VMR confirms who should be featured.</p>
    </section>
  );
}

function GallerySection({ onOpenGallery }) {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Rooms', 'Bathrooms', 'Food', 'Spaces'];
  const visibleItems = useMemo(() => filter === 'All' ? galleryItems : galleryItems.filter((item) => item.category === filter), [filter]);
  return (
    <section className="gallery-section section-pad" id="gallery">
      <div className="gallery-heading-row"><SectionHeading eyebrow="A CLOSER LOOK" title="A little more" accent="to explore." description="Browse illustrative references for rooms, bathrooms and food. Replace these with real VMR photographs before the site goes public." /><div className="gallery-counter"><Camera size={18} /><span>09</span><small>VISUAL REFERENCES</small></div></div>
      <div className="gallery-controls"><div className="gallery-filters" role="tablist" aria-label="Filter gallery">{filters.map((item) => <button key={item} className={filter === item ? 'gallery-filter active' : 'gallery-filter'} onClick={() => setFilter(item)} role="tab" aria-selected={filter === item}>{item}</button>)}</div><span>ILLUSTRATIVE PHOTOGRAPHY · NOT VMR PROPERTY PHOTOS</span></div>
      <motion.div className="gallery-grid" layout>
        <AnimatePresence mode="popLayout">
          {visibleItems.map((item, index) => (
            <motion.button className={`gallery-item gallery-item-${index % 4}`} key={item.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }} onClick={() => onOpenGallery(item)} aria-label={`View ${item.title}`}>
              <Photo src={item.image} alt={item.alt} /><span className="gallery-item-overlay"><small>{item.category.toUpperCase()}</small><strong>{item.title}</strong><i><ArrowUpRight size={19} /></i></span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
      <div className="gallery-foot"><span>01 — A VISUAL PREVIEW</span><p>Real VMR room, dining and building photos will make this gallery truly yours.</p></div>
    </section>
  );
}

function LocationSection({ onOpenEnquiry }) {
  const mapHref = siteConfig.mapUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('VMR Boys Hostel')}`;
  return (
    <section className="location-section" id="location">
      <div className="location-copy">
        <Eyebrow light>FIND YOUR WAY</Eyebrow>
        <h2>Close to what<br />comes <em>next.</em></h2>
        <p>Location matters. Ask the VMR team for the exact address, verified map pin and nearby colleges, workplaces and daily essentials before planning your visit.</p>
        <div className="location-detail"><MapPin size={19} /><div><strong>VMR Boys Hostel</strong><span>{siteConfig.address || 'Exact address to be confirmed by the hostel team'}</span></div></div>
        <div className="location-actions"><a href={mapHref} target="_blank" rel="noreferrer" className="button button-light">Search on Google Maps <ExternalLink size={16} /></a><button className="location-text-link" onClick={() => onOpenEnquiry('Hostel address and directions')}>Request exact location <ArrowUpRight size={16} /></button></div>
      </div>
      <div className="location-map-art" aria-label="Location details are being verified">
        <div className="map-grid-lines" />
        <svg className="map-lines" viewBox="0 0 650 520" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M-20 110 C120 100 120 190 250 180 S400 100 690 140"/><path d="M-20 270 C100 250 170 310 280 270 S480 240 690 320"/><path d="M100 -20 C110 90 210 110 180 230 S200 410 260 540"/><path d="M390 -20 C370 90 460 170 410 260 S400 400 500 550"/><path d="M-30 430 C120 380 150 470 270 420 S480 410 690 450"/></svg>
        <div className="map-block map-block-one"/><div className="map-block map-block-two"/><div className="map-block map-block-three"/><div className="map-block map-block-four"/>
        <div className="map-marker"><span className="map-marker-pulse"/><span className="map-marker-pin"><MapPin size={21} fill="currentColor" /></span><span className="map-marker-label">VMR BOYS HOSTEL<br /><small>LOCATION PIN TO BE VERIFIED</small></span></div>
        <div className="map-compass">N <ArrowUp size={15} /></div>
        <div className="map-coordinates">ADDRESS DETAILS<br />PENDING CONFIRMATION</div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="faq-section section-pad" id="faqs">
      <div className="faq-intro"><Eyebrow>GOOD TO KNOW</Eyebrow><h2>Questions are<br />always <em>welcome.</em></h2><p>A few things worth knowing before you enquire. For anything specific, the VMR team is just a message away.</p><WhatsAppLink className="underlined-link" message="Hi, I have a few questions about VMR Boys Hostel. Could someone please help me?">Ask us anything <ArrowUpRight size={16} /></WhatsAppLink></div>
      <div className="faq-list">{sampleFaqs.map((faq, index) => <div className={`faq-item ${active === index ? 'faq-active' : ''}`} key={faq.question}><button className="faq-question" onClick={() => setActive(active === index ? -1 : index)} aria-expanded={active === index}><span className="faq-number">0{index + 1}</span><strong>{faq.question}</strong><span className="faq-toggle">{active === index ? <X size={17} /> : <ArrowDownRight size={19} />}</span></button><AnimatePresence initial={false}>{active === index && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28 }}><p>{faq.answer}</p></motion.div>}</AnimatePresence></div>)}</div>
    </section>
  );
}

function ContactSection({ onOpenEnquiry }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-text"><Eyebrow light>YOUR NEXT STEP</Eyebrow><h2>Let's find the<br />right place for <em>you.</em></h2><p>Ask about five-sharing rooms, hot water, clean bathrooms, the weekly food routine, fees and arranging a visit.</p><div className="contact-quick-links"><a href={`tel:${siteConfig.phoneNumber}`}><Phone size={17} /><span>Call the hostel</span><ArrowUpRight size={16} /></a><WhatsAppLink className="contact-whatsapp" message="Hi, I'm interested in VMR Boys Hostel. Please share details about five-sharing rooms, facilities, food, fees and availability."><MessageCircle size={17} /><span>WhatsApp us</span></WhatsAppLink></div></div>
      <div className="contact-card"><div className="contact-card-top"><span>ENQUIRY DESK</span><span>VMR / 01</span></div><div className="contact-card-icon"><MessageCircle size={25} /></div><h3>One message can make it easier.</h3><p>Share your preferred room type and joining timeline. We'll open a pre-filled WhatsApp enquiry for you.</p><button className="button button-dark contact-card-button" onClick={() => onOpenEnquiry('General hostel enquiry')}>Start an enquiry <ArrowUpRight size={17} /></button><div className="contact-card-bottom"><span>DIRECT CONTACT</span><strong>{siteConfig.phoneDisplay}</strong></div></div>
      <div className="contact-watermark">VMR</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top"><a className="footer-brand" href="#top"><span className="brand-mark">V<span>.</span></span><span><strong>VMR</strong><small>BOYS HOSTEL</small></span></a><p>A place to settle in.<br /><em>Room to grow.</em></p><a href="#top" className="back-top">BACK TO TOP <ArrowUp size={15} /></a></div>
      <div className="footer-middle"><div><span>EXPLORE</span><a href="#story">The hostel</a><a href="#rooms">Room options</a><a href="#food">Food & dining</a><a href="#facilities">Facilities</a></div><div><span>GOOD TO KNOW</span><a href="#gallery">Gallery</a><a href="#location">Location</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></div><div className="footer-contact"><span>START A CONVERSATION</span><a href={`tel:${siteConfig.phoneNumber}`}>{siteConfig.phoneDisplay} <ArrowUpRight size={15} /></a><WhatsAppLink message="Hi, I'd like to know more about VMR Boys Hostel.">Message on WhatsApp <ArrowUpRight size={15} /></WhatsAppLink>{siteConfig.instagramUrl && <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">Instagram <Instagram size={15} /></a>}</div></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} VMR BOYS HOSTEL. ALL RIGHTS RESERVED.</span><span>PHOTOGRAPHY SHOWN IS ILLUSTRATIVE UNTIL REPLACED WITH VMR IMAGES.</span><span>WEBSITE BY <a href="https://majinstudios.tech" target="_blank" rel="noreferrer">MAJIN STUDIOS ↗</a></span></div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a className="floating-call" href={`tel:${siteConfig.phoneNumber}`} aria-label="Call hostel">
        <Phone size={18} />
      </a>
      <WhatsAppLink
        className="floating-whatsapp"
        message="Hi, I would like to enquire about VMR Boys Hostel. Please contact me with the details."
        aria-label="WhatsApp VMR Boys Hostel"
        icon={false}
      >
        <WhatsAppIcon size={22} />
      </WhatsAppLink>
    </div>
  );
}

function EnquiryModal({ open, onClose, initialInterest }) {
  const [form, setForm] = useState({ name: '', role: 'Student', interest: initialInterest || 'Room options and availability', joining: '', message: '' });
  useEffect(() => { setForm((prev) => ({ ...prev, interest: initialInterest || 'Room options and availability' })); }, [initialInterest, open]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, onClose]);
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const submit = (event) => {
    event.preventDefault();
    const message = [
      'Hi, I would like to enquire about VMR Boys Hostel.',
      `Name: ${form.name || 'Not provided'}`,
      `Enquiring as: ${form.role}`,
      `Interested in: ${form.interest}`,
      `Expected joining: ${form.joining || 'Not decided yet'}`,
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean).join('\n');
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };
  return (
    <AnimatePresence>
      {open && <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
        <motion.div className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title" initial={{ opacity: 0, y: 22, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ duration: 0.25 }}>
          <div className="modal-topline"><span>VMR / ENQUIRY FORM</span><button className="modal-close" onClick={onClose} aria-label="Close enquiry form"><X size={19} /></button></div>
          <h2 id="enquiry-title">Let's get to<br /><em>know what you need.</em></h2>
          <p className="modal-intro">Fill in a few details. Your message will open in WhatsApp so you can send it directly to the hostel team.</p>
          <form onSubmit={submit}>
            <label>Your name<input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Enter your name" autoFocus /></label>
            <div className="form-two"><label>I'm enquiring as<select value={form.role} onChange={(e) => update('role', e.target.value)}><option>Student</option><option>Parent / Guardian</option><option>Working professional</option><option>Other</option></select></label><label>Expected joining<input type="text" value={form.joining} onChange={(e) => update('joining', e.target.value)} placeholder="e.g. December 2026" /></label></div>
            <label>What would you like to know?<select value={form.interest} onChange={(e) => update('interest', e.target.value)}><option>Room options and availability</option><option>Five-sharing rooms</option><option>Fees and deposit</option><option>Food menu and meal timings</option><option>Facilities and services</option><option>Hostel address and directions</option><option>Arrange a hostel visit</option><option>General hostel enquiry</option></select></label>
            <label>Anything else? <span className="optional">OPTIONAL</span><textarea value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Tell us what matters most to you..." rows="3" /></label>
            <button className="button button-dark modal-submit" type="submit">Continue to WhatsApp <ArrowUpRight size={17} /></button>
            <small className="form-privacy">Your details are used only to prepare this enquiry. Nothing is submitted to a website database.</small>
          </form>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  );
}

function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [item, onClose]);
  return <AnimatePresence>{item && <motion.div className="gallery-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}><motion.div className="gallery-modal-inner" initial={{ scale: 0.96, y: 12 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.97, y: 12 }} onClick={(e) => e.stopPropagation()}><button className="gallery-modal-close" onClick={onClose} aria-label="Close image"><X size={20} /></button><img src={item.image} alt={item.alt} /><div className="gallery-modal-caption"><span>{item.category.toUpperCase()}</span><strong>{item.title}</strong><small>Illustrative reference image — replace with an authorised VMR photograph.</small></div></motion.div></motion.div>}</AnimatePresence>;
}

export default function App() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [interest, setInterest] = useState('Room options and availability');
  const [galleryItem, setGalleryItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const openEnquiry = (value) => { setInterest(value || 'Room options and availability'); setEnquiryOpen(true); };
  const closeEnquiry = () => setEnquiryOpen(false);
  const closeGallery = () => setGalleryItem(null);
  return (
    <div className="app-shell">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <Header onOpenEnquiry={() => openEnquiry('General hostel enquiry')} />
      <main>
        <Hero />
        <Marquee />
        <StorySection />
        <RoomsSection onOpenEnquiry={openEnquiry} />
        <FoodSection />
        <FacilitiesSection onOpenEnquiry={openEnquiry} />
        <CareSection />
        <PeopleSection onOpenEnquiry={openEnquiry} />
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
