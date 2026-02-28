"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { portfolioItems } from "@/data/siteData";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/ScrollRevealProvider";

function SkeletonCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="skeleton aspect-[4/3] w-full rounded-lg" style={{ minHeight: 220 }} />
      <div className="skeleton h-4 w-2/3 rounded" />
      <div className="skeleton h-3 w-1/3 rounded" />
    </div>
  );
}

interface Props {
  featured?: boolean;
  limit?: number;
  showHeader?: boolean;
}

export default function PortfolioItems({ featured = false, limit, showHeader = true }: Props) {
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const allTags = ["All", ...Array.from(new Set(portfolioItems.flatMap((p) => p.tags)))];
  let items = featured ? portfolioItems.filter((p) => p.featured) : portfolioItems;
  if (filter !== "All") items = items.filter((p) => p.tags.includes(filter));
  if (limit) items = items.slice(0, limit);

  return (
    <section className={showHeader ? "py-section max-w-7xl mx-auto px-6 lg:px-12" : ""}>
      {showHeader && (
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <Reveal>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="font-display font-black text-display-xl text-brand-highlight mt-4">
              Projects that
              <br />
              <em className="not-italic text-brand-accent">define us.</em>
            </h2>
          </Reveal>
          <Reveal delay={200} className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={
                  "px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 border " +
                  (filter === tag
                    ? "bg-brand-accent text-brand-bg border-brand-accent"
                    : "border-brand-border text-brand-muted hover:border-brand-text hover:text-brand-text")
                }
              >
                {tag}
              </button>
            ))}
          </Reveal>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array.from({ length: limit ?? 6 }).map((_, i) => <SkeletonCard key={i} />)
          : items.map((item, i) => {
              const delayVal = ((i % 3) * 100) as 0 | 100 | 200;
              return (
                <Reveal key={item.id} delay={delayVal} className="group relative flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-brand-surface">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-bg/0 group-hover:bg-brand-bg/40 transition-all duration-500 flex items-end p-6 opacity-0 group-hover:opacity-100">
                      <span
                        className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full"
                        style={{ background: item.accentColor, color: "#0A0A08" }}
                      >
                        View Project &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-highlight group-hover:text-brand-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-xs text-brand-muted mt-1 font-mono">{item.category}</p>
                    </div>
                    <span className="text-xs font-mono text-brand-border mt-1 shrink-0">{item.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-brand-border rounded-full text-brand-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
      </div>

      {showHeader && !loading && (
        <Reveal className="text-center mt-16">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-3 text-sm font-mono uppercase tracking-widest text-brand-muted hover:text-brand-accent transition-colors duration-200 border-b border-brand-border hover:border-brand-accent pb-1"
          >
            View all projects &rarr;
          </Link>
        </Reveal>
      )}
    </section>
  );
}
