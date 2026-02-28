import { Metadata } from "next";
import PortfolioItems from "@/components/sections/PortfolioItems";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "Work",
};

export default function PortfolioPage() {
  return (
    <div className="pt-32 pb-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page header */}
        <div className="mb-16 border-b border-brand-border pb-14">
          <Reveal>
            <SectionLabel>Our Work</SectionLabel>
            <h1 className="font-display font-black text-display-2xl text-brand-highlight mt-5 leading-none">
              Every project,<br />
              <span className="text-brand-muted">a story told.</span>
            </h1>
          </Reveal>
          <Reveal delay={200} className="mt-6 max-w-lg text-brand-muted text-lg leading-relaxed">
            Six years. Over 120 projects. Each one built from an honest conversation about who you are and where you want to go.
          </Reveal>
        </div>

        {/* Portfolio grid — skeleton loading built in */}
        <PortfolioItems showHeader={true} />
      </div>
    </div>
  );
}
