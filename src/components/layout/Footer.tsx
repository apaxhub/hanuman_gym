import Link from "next/link";
import { siteData } from "@/data/siteData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-auto bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display font-black text-3xl uppercase text-brand-text tracking-tighter">
            {siteData.global.gymName}
          </p>
          <p className="mt-4 text-sm text-brand-muted leading-relaxed max-w-xs">
            {siteData.hero.subheadline}
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Navigation</p>
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase text-brand-text hover:text-brand-accent transition-colors w-fit"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-2">Connect</p>
          <a
            href={`mailto:${siteData.global.email}`}
            className="text-sm text-brand-text hover:text-brand-accent transition-colors"
          >
            {siteData.global.email}
          </a>
          <p className="text-sm text-brand-text break-words">
            {siteData.global.location}
          </p>
          <p className="text-sm text-brand-text">
            {siteData.global.hours}
          </p>
          <div className="flex gap-4 mt-4">
            {Object.entries(siteData.global.socials).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="text-sm font-bold uppercase text-brand-text hover:text-brand-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-brand-muted font-mono uppercase">© {new Date().getFullYear()} {siteData.global.gymName}. ALL RIGHTS RESERVED.</p>
          <p className="text-xs text-brand-muted font-mono uppercase">
            Designed for Performance
          </p>
        </div>
      </div>
    </footer>
  );
}
