import { features } from "@/data/siteData";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/ScrollRevealProvider";

export default function FeatureList() {
  return (
    <section className="py-section max-w-7xl mx-auto px-6 lg:px-12">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
        <Reveal>
          <SectionLabel>What we do</SectionLabel>
          <h2 className="font-display font-black text-display-xl text-brand-highlight mt-4 max-w-lg">
            Services built<br />
            <em className="not-italic text-brand-muted">around your ambition.</em>
          </h2>
        </Reveal>
        <Reveal delay={200} className="max-w-sm text-brand-muted text-base leading-relaxed">
          We&apos;re a small team that does one thing well: making your brand impossible to ignore.
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-brand-border">
        {features.map((feature, i) => (
          <Reveal
            key={feature.id}
            delay={((i % 3) * 100) as 0 | 100 | 200 | 300}
            className="group bg-brand-bg p-8 hover:bg-brand-surface transition-colors duration-300 cursor-default"
          >
            {/* Icon */}
            <span className="inline-block text-3xl text-brand-accent mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              {feature.icon}
            </span>
            <h3 className="font-display font-bold text-xl text-brand-highlight mb-3">
              {feature.title}
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed">
              {feature.description}
            </p>
            {/* Hover underline accent */}
            <div className="mt-6 h-px w-0 bg-brand-accent transition-all duration-500 group-hover:w-12" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
