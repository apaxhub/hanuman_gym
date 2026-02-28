/**
 * SINGLE SOURCE OF TRUTH
 * All site content lives here. Update this file to rebrand the entire site.
 */

export const siteConfig = {
  name: "FORMA",
  tagline: "Studio",
  description: "Creative direction & brand identity for those who refuse to blend in.",
  nav: [
    { label: "Work",    href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "#", icon: "ig" },
    { label: "Behance",   href: "#", icon: "be" },
    { label: "LinkedIn",  href: "#", icon: "li" },
  ],
  footer: {
    copy: "© 2025 FORMA Studio. All rights reserved.",
    email: "hello@forma.studio",
  },
};

export const heroContent = {
  eyebrow:  "Est. 2018 · Brooklyn, NY",
  headline: ["Craft that", "moves people."],
  subline:
    "We build brands, spaces, and campaigns for boutiques, studios, and creative founders who want to feel iconic.",
  cta:      { label: "See Our Work", href: "/portfolio" },
  ctaGhost: { label: "Get in Touch",  href: "/contact" },
  stats: [
    { value: "120+", label: "Projects delivered" },
    { value: "98%",  label: "Client satisfaction" },
    { value: "11",   label: "Years in industry" },
  ],
};

export const marqueeItems = [
  "Brand Identity", "Editorial Design", "Motion Graphics",
  "Web Experiences", "Space & Interior", "Photography",
  "Brand Identity", "Editorial Design", "Motion Graphics",
  "Web Experiences", "Space & Interior", "Photography",
];

export const features = [
  {
    id: "f1",
    icon: "✦",
    title: "Brand Identity",
    description:
      "Logo systems, typography, colour palettes and guidelines that make you unmistakable across every touchpoint.",
  },
  {
    id: "f2",
    icon: "◈",
    title: "Digital Experience",
    description:
      "Websites and apps that convert visitors into believers — built with obsessive attention to performance and feel.",
  },
  {
    id: "f3",
    icon: "◉",
    title: "Campaign Direction",
    description:
      "Art direction, copywriting and production for launches, drops, and seasonal pushes that break through the noise.",
  },
  {
    id: "f4",
    icon: "⬡",
    title: "Space & Interior",
    description:
      "Retail and studio environments where every material choice tells part of the brand story.",
  },
  {
    id: "f5",
    icon: "⟐",
    title: "Motion & Film",
    description:
      "Reels, brand films, and animated identities that live on screens, walls, and in memory.",
  },
  {
    id: "f6",
    icon: "◧",
    title: "Strategy & Positioning",
    description:
      "Research-backed brand strategy to find your differentiated position and own it completely.",
  },
];

export const portfolioItems = [
  {
    id: "p1",
    title: "KIRA Activewear",
    category: "Brand Identity · Web",
    year: "2024",
    description:
      "Complete rebrand for a premium women's activewear line — from name exploration to full visual system and e-commerce launch.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    accentColor: "#C8F060",
    featured: true,
    tags: ["Branding", "Web", "Photography"],
  },
  {
    id: "p2",
    title: "Vault Coffee Roasters",
    category: "Space Design · Identity",
    year: "2024",
    description:
      "Interior concept, signage system, and packaging for an specialty coffee destination in Williamsburg.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
    accentColor: "#F06040",
    featured: true,
    tags: ["Interior", "Packaging", "Identity"],
  },
  {
    id: "p3",
    title: "Studio Méridien",
    category: "Brand Identity",
    year: "2023",
    description:
      "Positioning and visual identity for a Parisian-inspired yoga and movement studio launching in Manhattan.",
    image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80",
    accentColor: "#C8F060",
    featured: false,
    tags: ["Branding", "Strategy"],
  },
  {
    id: "p4",
    title: "Onyx Architecture",
    category: "Digital Experience",
    year: "2023",
    description:
      "A portfolio website for a boutique architecture firm with bespoke animations and project showcases.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    accentColor: "#F06040",
    featured: false,
    tags: ["Web", "Motion"],
  },
  {
    id: "p5",
    title: "Plume Editorial",
    category: "Campaign Direction",
    year: "2023",
    description:
      "Six-season campaign direction for an independent fashion magazine — art direction, casting, and production.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    accentColor: "#C8F060",
    featured: false,
    tags: ["Campaign", "Photography"],
  },
  {
    id: "p6",
    title: "Ferrum Gym",
    category: "Brand Identity · Interior",
    year: "2022",
    description:
      "Raw industrial identity system and membership app for a private strength training facility in DUMBO.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    accentColor: "#F06040",
    featured: false,
    tags: ["Branding", "Interior", "Digital"],
  },
];

export const testimonials = [
  {
    id: "t1",
    quote:
      "FORMA didn't just design our brand — they uncovered who we actually are. Revenue doubled in the year after launch.",
    author: "Mia Chen",
    role: "Founder, KIRA Activewear",
    avatar: "MC",
  },
  {
    id: "t2",
    quote:
      "The most collaborative and rigorous creative team I've worked with. They push back when it matters, and it always makes the work better.",
    author: "Julien Moreau",
    role: "Owner, Vault Coffee",
    avatar: "JM",
  },
  {
    id: "t3",
    quote:
      "Our studio went from a local spot to a recognizable brand. The identity they built still turns heads two years later.",
    author: "Priya Nair",
    role: "Director, Studio Méridien",
    avatar: "PN",
  },
];

export const contactContent = {
  eyebrow:  "Let's collaborate",
  headline: "Start something great.",
  subline:
    "Tell us about your project and we'll get back within 24 hours. No forms that feel like tax returns.",
  info: [
    { label: "Email",   value: "hello@forma.studio",  href: "mailto:hello@forma.studio" },
    { label: "Phone",   value: "+1 (718) 555-0192",   href: "tel:+17185550192" },
    { label: "Studio",  value: "77 N 6th St, Brooklyn, NY 11249", href: "#" },
  ],
  services: [
    "Brand Identity",
    "Digital Experience",
    "Campaign Direction",
    "Space & Interior",
    "Motion & Film",
    "Strategy",
    "Other",
  ],
};
