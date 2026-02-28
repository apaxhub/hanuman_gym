import { Metadata } from "next";
import { siteData } from "@/data/siteData";
import Reveal from "@/components/ui/ScrollRevealProvider";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact | " + siteData.global.gymName,
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-section bg-brand-surface relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Contact Info */}
          <div>
            <Reveal>
              <h1 className="font-display font-black text-6xl md:text-8xl text-brand-text mb-8 uppercase tracking-tighter leading-none">
                Get In <br />
                <span className="text-brand-accent">Touch</span>
              </h1>
              <p className="text-xl text-brand-muted font-body mb-16 max-w-lg leading-relaxed font-medium">
                Ready to transform? Drop by the studio or send us a message. We are here to help you push your limits.
              </p>
            </Reveal>

            <Reveal delay={100} className="space-y-10">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Location</p>
                <p className="text-lg text-brand-text font-bold uppercase">{siteData.global.location}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Hours</p>
                <p className="text-lg text-brand-text font-bold uppercase">{siteData.global.hours}</p>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Contact</p>
                <a href={`mailto:${siteData.global.email}`} className="block text-lg text-brand-text font-bold uppercase hover:text-brand-accent transition-colors">
                  {siteData.global.email}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <div>
            <Reveal delay={200}>
              <form className="bg-brand-bg p-8 md:p-12 border border-brand-border h-full">
                <div className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Name</label>
                    <input type="text" id="name" className="w-full bg-transparent border-b border-brand-border py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="YOUR NAME" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Email</label>
                    <input type="email" id="email" className="w-full bg-transparent border-b border-brand-border py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="YOUR EMAIL" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Message</label>
                    <textarea id="message" rows={4} className="w-full bg-transparent border-b border-brand-border py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="HOW CAN WE HELP YOU?"></textarea>
                  </div>
                  <Button type="submit" className="w-full !rounded-none py-4 text-base tracking-widest uppercase font-bold">
                    Send Message
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
