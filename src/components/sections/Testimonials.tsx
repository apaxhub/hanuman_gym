import { siteData } from "@/data/siteData";
import Reveal from "@/components/ui/ScrollRevealProvider";

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-brand-text relative overflow-hidden">
      {/* Decorative large quotes */}
      <div className="absolute top-10 left-10 text-[20rem] text-brand-surface/5 font-display font-black leading-none select-none pointer-events-none">
        &quot;
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <Reveal className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <p className="text-brand-accent font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-3 font-bold">
            <span className="w-8 h-[2px] bg-brand-accent"></span>
            Proving Ground
            <span className="w-8 h-[2px] bg-brand-accent"></span>
          </p>
          <h2 className="font-display font-black text-5xl md:text-6xl text-brand-surface uppercase tracking-tighter">
            Members Say
          </h2>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {siteData.testimonials.map((t, i) => (
            <Reveal key={t.id} delay={((i * 100) as 0 | 100 | 200)} className="h-full">
              <blockquote className="h-full p-10 flex flex-col justify-between border-l-4 border-brand-accent bg-brand-bg/5 hover:bg-brand-bg/10 transition-colors duration-300">
                <p className="text-brand-surface leading-loose text-lg font-body italic mb-8 relative">
                  <span className="text-brand-accent text-2xl mr-2">&quot;</span>
                  {t.quote}
                  <span className="text-brand-accent text-2xl ml-2">&quot;</span>
                </p>

                <footer className="mt-auto flex items-center gap-4 border-t border-brand-surface/10 pt-6">
                  <div className="w-12 h-12 rounded-none bg-brand-accent flex items-center justify-center text-brand-surface font-black font-display text-xl uppercase">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-brand-surface tracking-wide uppercase">{t.author}</p>
                    <p className="text-xs text-brand-muted uppercase tracking-widest mt-1">{t.role}</p>
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
