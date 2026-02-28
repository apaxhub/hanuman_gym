import { testimonials } from "@/data/siteData";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/ScrollRevealProvider";

export default function Testimonials() {
  return (
    <section className="py-section border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal className="mb-14 text-center">
          <SectionLabel>What clients say</SectionLabel>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={((i * 100) as 0 | 100 | 200)}>
              <blockquote className="h-full border border-brand-border rounded-2xl p-8 flex flex-col justify-between bg-brand-surface hover:border-brand-accent/40 transition-colors duration-300">
                <p className="text-brand-text leading-relaxed text-base font-display italic before:content-[open-quote] after:content-[close-quote]">
                  {t.quote}
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-bg text-xs font-black font-mono">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-highlight">{t.author}</p>
                    <p className="text-xs text-brand-muted">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
