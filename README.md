# VMR Boys Hostel — React Website

A complete responsive, frontend-only promotional and enquiry website for VMR Boys Hostel, built with React, Vite, Motion for React and Lucide icons.

## Features

- Editorial, premium visual design with responsive desktop, tablet and mobile layouts
- Sticky navigation, mobile navigation and scroll progress indicator
- Animated hero and scroll-reveal sections
- Hostel introduction and accommodation options
- Interactive meal-period selector
- Facilities / amenities information guide
- Student and parent information section
- People and management contact section
- Filterable image gallery with full-screen lightbox
- Location section with editable Google Maps link / address fields
- Expandable FAQs
- Enquiry form that composes a WhatsApp message (no backend or database)
- Floating WhatsApp and phone actions
- SEO metadata, social sharing metadata and favicon
- Reduced-motion accessibility support

## Run locally

Requires Node.js 20.19+ or 22.12+ (Node 22+ recommended).

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Important: configure before publishing

Open `src/siteConfig.js` and update the confirmed business details:

- Exact VMR address and locality
- Exact Google Maps share URL for the property pin
- Confirmed public contact number and WhatsApp number
- Official Instagram URL (optional)
- Official Google Business Profile / reviews URL (optional)
- Confirm city and locality in page copy / metadata

Review `roomOptions`, `amenityGroups` and `sampleFaqs` in the same file. Room categories are illustrative examples. Remove or edit any option that VMR does not offer. Amenities are presented as questions to confirm rather than claims about services.

The food section intentionally asks visitors to request the current menu and timings rather than displaying invented dishes or meal times. Add the hostel's confirmed weekly menu once supplied.

## Photography

The current photos are remotely hosted Unsplash stock images used as illustrative visual placeholders. They are **not photographs of VMR Boys Hostel**. Replace them with authorised photographs of the actual property before publishing, especially for rooms, dining, bathrooms, security, building exterior and shared spaces.

Image URLs are collected in `src/siteConfig.js` and in the Hero / story / food / care components in `src/App.jsx`. Search for `images.unsplash.com` to update them. Ensure the replacement images are approved for use and have accurate alt text.

## WhatsApp behaviour

The contact number is configured in `src/siteConfig.js`. The current value is `+91 94915 54114`, as supplied for this build. The form creates a pre-filled WhatsApp message and opens WhatsApp in a new tab/window. It does not store, email or submit form data to a backend.

## Deployment

This is a standard Vite static site and can be deployed to Vercel, Netlify or any static hosting provider. No environment variables or backend service are required.

For Vercel, use:
- Build command: `npm run build`
- Output directory: `dist`

## Project structure

```text
vmr-boys-hostel/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── siteConfig.js
    └── styles.css
```

## Brand credit

The footer includes a small website credit to Majin Studios. Remove or change it in `src/App.jsx` if needed.
