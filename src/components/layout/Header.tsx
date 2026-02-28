"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteData";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="font-display font-black text-xl tracking-tighter text-brand-highlight">
            {siteConfig.name}
          </span>
          <span className="font-mono text-xs text-brand-accent uppercase tracking-widest">
            {siteConfig.tagline}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-body font-medium tracking-wide transition-colors duration-200",
                pathname === item.href
                  ? "text-brand-accent"
                  : "text-brand-muted hover:text-brand-text"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
          >
            Start a Project
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-0.5 bg-brand-text transition-all duration-300", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 bg-brand-text transition-all duration-300", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 bg-brand-text transition-all duration-300", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500",
        menuOpen ? "max-h-64 border-t border-brand-border" : "max-h-0"
      )}>
        <nav className="px-6 py-6 flex flex-col gap-6 bg-brand-bg/95 backdrop-blur-md">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-display text-brand-text hover:text-brand-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-6 py-3 bg-brand-accent text-brand-bg font-medium text-sm rounded-full w-fit"
          >
            Start a Project
          </Link>
        </nav>
      </div>

      <style jsx>{`
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 1.25rem;
          background: #2563EB;
          color: #FFFFFF;
          font-size: 0.8125rem;
          font-weight: 600;
          border-radius: 9999px;
          transition: transform 0.2s, box-shadow 0.2s;
          letter-spacing: 0.01em;
        }
        .btn-primary:hover {
          transform: translateY(-1px) scale(1.02);
          box-shadow: 0 4px 20px rgba(37,99,235,0.35);
        }
        .btn-primary:active {
          transform: scale(0.98);
        }
      `}</style>
    </header>
  );
}
