import Link from "next/link";
import { siteConfig } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display font-black text-2xl text-brand-highlight tracking-tighter">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm text-brand-muted leading-relaxed max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-1">Navigation</p>
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-brand-text hover:text-brand-accent transition-colors w-fit"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm text-brand-text hover:text-brand-accent transition-colors w-fit">
            Contact
          </Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-muted mb-1">Get in Touch</p>
          <a
            href={`mailto:${siteConfig.footer.email}`}
            className="text-sm text-brand-accent hover:underline underline-offset-4"
          >
            {siteConfig.footer.email}
          </a>
          <div className="flex gap-4 mt-2">
            {siteConfig.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="w-8 h-8 border border-brand-border rounded-full flex items-center justify-center text-xs text-brand-muted hover:border-brand-accent hover:text-brand-accent transition-all duration-200"
                aria-label={s.label}
              >
                {s.icon.toUpperCase()}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brand-muted">{siteConfig.footer.copy}</p>
          <p className="text-xs text-brand-muted">
            Crafted with{" "}
            <span className="text-brand-accent2">♥</span>{" "}
            in Brooklyn
          </p>
        </div>
      </div>
    </footer>
  );
}
