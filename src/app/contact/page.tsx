import { Metadata } from "next";
import { contactContent } from "@/data/siteData";
import ContactForm from "@/components/sections/ContactForm";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/ScrollRevealProvider";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left — info */}
          <div>
            <Reveal>
              <SectionLabel>{contactContent.eyebrow}</SectionLabel>
              <h1 className="font-display font-black text-display-xl text-brand-highlight mt-5 leading-none">
                {contactContent.headline}
              </h1>
            </Reveal>
            <Reveal delay={100} className="mt-6 text-brand-muted text-lg leading-relaxed max-w-md">
              {contactContent.subline}
            </Reveal>

            {/* Contact info */}
            <Reveal delay={200} className="mt-12 flex flex-col gap-6">
              {contactContent.info.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-muted">
                    {item.label}
                  </span>
                  <a
                    href={item.href}
                    className="text-brand-text hover:text-brand-accent transition-colors duration-200 text-base"
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </Reveal>

            {/* Decorative element */}
            <Reveal delay={300} className="mt-16 hidden lg:block">
              <div className="w-24 h-24 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center">
                <span className="text-brand-accent text-4xl">✦</span>
              </div>
            </Reveal>
          </div>

          {/* Right — form */}
          <div className="lg:pt-24">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
