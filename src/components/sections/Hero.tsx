import Link from "next/link";
import { heroContent, marqueeItems } from "@/data/siteData";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1C1C18 1px, transparent 1px),
            linear-gradient(to bottom, #1C1C18 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradient blob */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, #2563EB 0%, transparent 70%)" }}
      />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #8C8B7E 0%, transparent 70%)" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 pt-32">
        {/* Eyebrow */}
        <p
          className="text-xs font-mono uppercase tracking-[0.25em] text-brand-muted mb-8 animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="inline-block w-4 h-px bg-brand-accent mr-3 align-middle" />
          {heroContent.eyebrow}
        </p>

        {/* Headline */}
        <h1 className="font-display font-black text-display-2xl text-brand-highlight leading-none mb-8">
          {heroContent.headline.map((line, i) => (
            <span
              key={i}
              className="block animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              {i === 1 ? (
                <>
                  {line.split("people")[0]}
                  <em className="not-italic text-brand-accent">people.</em>
                </>
              ) : (
                line
              )}
            </span>
          ))}
        </h1>

        {/* Subline + CTAs */}
        <div
          className="flex flex-col lg:flex-row lg:items-end gap-10 animate-fade-up"
          style={{ animationDelay: "0.48s" }}
        >
          <p className="text-brand-muted text-lg leading-relaxed max-w-md">
            {heroContent.subline}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href={heroContent.cta.href} variant="primary" className="text-base px-8 py-4">
              {heroContent.cta.label}
              <span className="ml-1">→</span>
            </Button>
            <Button href={heroContent.ctaGhost.href} variant="outline" className="text-base px-8 py-4">
              {heroContent.ctaGhost.label}
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="mt-16 pt-10 border-t border-brand-border grid grid-cols-3 gap-6 max-w-md animate-fade-up"
          style={{ animationDelay: "0.62s" }}
        >
          {heroContent.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display font-black text-3xl text-brand-highlight">{stat.value}</p>
              <p className="text-xs text-brand-muted mt-1 leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div className="relative z-10 border-y border-brand-border bg-brand-surface/50 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {marqueeItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-sm font-mono uppercase tracking-widest text-brand-muted">
              {item}
              <span className="text-brand-accent text-lg">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
