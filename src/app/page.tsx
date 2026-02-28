import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import FeatureList from "@/components/sections/FeatureList";
import PortfolioItems from "@/components/sections/PortfolioItems";
import Testimonials from "@/components/sections/Testimonials";
import Reveal from "@/components/ui/ScrollRevealProvider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureList />
      <PortfolioItems featured={false} limit={3} showHeader={true} />
      <Testimonials />

      {/* CTA Band */}
      <section className="py-section border-t border-brand-border">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand-muted mb-5">Ready to start?</p>
            <h2 className="font-display font-black text-display-xl text-brand-highlight mb-8">
              Your brand&apos;s best<br />
              <span className="text-brand-accent">chapter starts here.</span>
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="/contact" variant="primary" className="px-10 py-4 text-base">
                Start a Project
              </Button>
              <Button href="/portfolio" variant="outline" className="px-10 py-4 text-base">
                See Our Work
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
