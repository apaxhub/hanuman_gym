import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ─── BRAND COLORS ─── Change these to re-theme the entire site
      // Classic Modern Light Theme — 4 core colors:
      //   Warm White (#FAFAF8), Warm Gray (#8C8B7E), Ink (#1C1C18), Indigo (#2563EB)
      colors: {
        brand: {
          bg:        "#FAFAF8",   // warm white — main background
          surface:   "#F0EFE8",   // warm off-white — card/surface background
          border:    "#E2E0D6",   // warm light gray — dividers & borders
          muted:     "#8C8B7E",   // warm taupe gray — secondary text & labels
          text:      "#1C1C18",   // near-black ink — primary body text
          accent:    "#2563EB",   // classic indigo — CTAs, highlights, links
          accent2:   "#DC2626",   // warm red — heart icon & decorative accents
          highlight: "#0D0D0A",   // deep ink black — hero headlines
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "sans-serif"],
        mono:    ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem,8vw,8rem)",   { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(2.5rem,5vw,5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg":  ["clamp(1.75rem,3vw,3rem)",  { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
      },
      spacing: {
        "section":    "7rem",
        "section-sm": "4rem",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "scale-in": {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":  "fade-in 0.5s ease both",
        shimmer:    "shimmer 1.6s infinite linear",
        marquee:    "marquee 18s linear infinite",
        "scale-in": "scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16,1,0.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
