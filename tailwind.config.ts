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
      // Hanuman GYM - Strict 3 colors: Black #111111, Red #E10600, Light #F5F5F5
      colors: {
        brand: {
          bg:        "#F5F5F5",   // light background — main background
          surface:   "#FFFFFF",   // white — card/surface background
          border:    "#E5E5E5",   // light gray — dividers & borders
          muted:     "#666666",   // gray — secondary text & labels
          text:      "#111111",   // black — primary body text
          accent:    "#E10600",   // red — CTAs, highlights, links
          accent2:   "#E10600",   // red
          highlight: "#000000",   // deep black — hero headlines
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
