# FORMA — Brand & Portfolio Template

A production-ready Next.js 14 brand/portfolio website template with bold editorial aesthetics, built for boutiques, gyms, studios, and creative founders.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (centralized theme in `tailwind.config.ts`)
- **ESLint**
- **Google Fonts** (Playfair Display + DM Sans + JetBrains Mono)

## Project Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx           # Root layout (Header + Footer)
│   ├── page.tsx             # Home page
│   ├── portfolio/page.tsx   # Work/Portfolio page
│   ├── contact/page.tsx     # Contact page
│   ├── not-found.tsx        # 404 page
│   └── globals.css          # Global styles + scroll-reveal utilities
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx       # Sticky nav with mobile hamburger
│   │   └── Footer.tsx       # Footer with links + social
│   │
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with marquee ticker + stats
│   │   ├── FeatureList.tsx  # 6-column services grid
│   │   ├── PortfolioItems.tsx  # Filterable grid + skeleton loading
│   │   ├── Testimonials.tsx    # 3-col testimonial cards
│   │   └── ContactForm.tsx     # Controlled form with loading state
│   │
│   └── ui/
│       ├── Button.tsx           # Polymorphic button (primary/outline/ghost)
│       ├── SectionLabel.tsx     # Eyebrow label with accent line
│       └── ScrollRevealProvider.tsx  # Scroll-reveal wrapper component
│
├── data/
│   └── siteData.ts          # ★ SINGLE SOURCE OF TRUTH — all content here
│
└── lib/
    ├── useScrollReveal.ts   # IntersectionObserver hook
    └── utils.ts             # cn() helper
```

## Re-theming

Open `tailwind.config.ts` and change the `brand` color palette:

```ts
colors: {
  brand: {
    bg:        "#0A0A08",   // page background
    surface:   "#141410",   // card background
    border:    "#2A2A24",   // border color
    muted:     "#6B6B58",   // secondary text
    text:      "#E8E8DC",   // primary text
    accent:    "#C8F060",   // hero/CTA accent ← change this first
    accent2:   "#F06040",   // secondary accent
    highlight: "#FFFFFF",   // max contrast text
  },
},
```

## Updating Content

All text, images, navigation links, and dummy data live in **one file**:

```
src/data/siteData.ts
```

Edit `siteConfig`, `heroContent`, `features`, `portfolioItems`, `testimonials`, and `contactContent` to rebrand entirely without touching any component.

## Features

- **Scroll-reveal animations** — CSS-powered with `IntersectionObserver`; staggered delays via utility classes
- **Skeleton loading** — Portfolio grid shows shimmer placeholders for 1.2s (simulates async data fetch)
- **Button micro-interactions** — `translateY + scale + glow-shadow` on hover
- **Marquee ticker** — CSS animation loop on hero
- **Filterable portfolio** — client-side tag filtering with no page reload
- **Grain overlay** — SVG noise texture for premium feel
- **Mobile navigation** — Animated hamburger with slide-down menu
- **Responsive throughout** — Mobile-first grid breakpoints

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
