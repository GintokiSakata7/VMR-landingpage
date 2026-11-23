# VMR Boys Hostel — React Website

A responsive, frontend-only promotional website for VMR Boys Hostel, built with React, Vite, Motion and Lucide icons.

## What's included

- A redesigned, full-bleed hostel hero with layered typography, a floating essentials panel and scroll-linked image movement.
- VMR-specific accommodation messaging for spacious five-sharing rooms.
- Clear facility highlights: hot water, clean bathrooms, a comfortable hostel environment and chicken served twice a week.
- A food section with the twice-weekly chicken detail and an interactive meal-period switcher.
- Parent/student information, hostel management contact path, gallery filters, image lightbox, FAQs, location placeholder and enquiry modal.
- WhatsApp enquiry links and click-to-call actions using the configured public number.
- Responsive mobile navigation and scroll reveal animations.
- SEO metadata, accessible labels and reduced-motion CSS handling.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview a production build:

```bash
npm run preview
```

## Project structure

```text
vmr-boys-hostel/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── siteConfig.js
    └── styles.css
```

## Business details to confirm before publishing

Edit `src/siteConfig.js` to set the exact hostel address, Google Maps pin, verified location, Google reviews URL and any official social profile. The public contact and WhatsApp number is currently configured as **+91 94915 54114**.

The five-sharing room setup, hot water, clean bathrooms, clean/comfortable environment and chicken served twice weekly are reflected from the supplied project brief. Confirm the precise wording with hostel management before launch. The weekly chicken days and actual meal menu are intentionally not invented.

## Photography note

The website currently uses externally hosted illustrative stock images (Unsplash URLs). They are not represented as photographs of VMR. Replace them with authorised VMR room, bathroom, food and building photographs for a more credible final launch. Image URLs and alt text are collected in `src/siteConfig.js` and the relevant page components.

## Enquiries

The enquiry form is frontend-only. Submitting it opens WhatsApp with the visitor's entered details in a pre-filled message. No user data is stored by this website and no backend/API is required for the current version.

## Motion and accessibility

Motion uses the existing `motion` package for staggered entry, scroll-linked hero movement, section reveals and interactive transitions. The CSS includes a native scroll-driven image treatment when supported, while the site retains its regular image styling as a fallback. Reduced-motion preferences are respected.
