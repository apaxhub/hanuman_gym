"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteData } from "@/data/siteData";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    // Check initial scroll on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const hasTransparentHero = pathname === "/" || pathname === "/programs";
  const isHeaderSolid = scrolled || !hasTransparentHero || menuOpen;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isHeaderSolid
          ? "bg-brand-bg/90 backdrop-blur-md border-b border-brand-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className={cn(
            "font-display font-black text-2xl tracking-tighter uppercase transition-colors duration-300",
            isHeaderSolid ? "text-brand-text" : "text-white drop-shadow-md"
          )}>
            {siteData.global.gymName}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-body font-medium tracking-wide transition-colors duration-200 uppercase",
                pathname === item.href
                  ? "text-brand-accent"
                  : isHeaderSolid
                    ? "text-brand-muted hover:text-brand-text"
                    : "text-white/90 hover:text-white drop-shadow-md"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact">
            {siteData.hero.cta}
          </Button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={cn("block w-6 h-0.5 transition-all duration-300", isHeaderSolid ? "bg-brand-text" : "bg-white", menuOpen && "rotate-45 translate-y-2")} />
          <span className={cn("block w-6 h-0.5 transition-all duration-300", isHeaderSolid ? "bg-brand-text" : "bg-white", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-0.5 transition-all duration-300", isHeaderSolid ? "bg-brand-text" : "bg-white", menuOpen && "-rotate-45 -translate-y-2")} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-500",
        menuOpen ? "max-h-96 border-t border-brand-border" : "max-h-0"
      )}>
        <nav className="px-6 py-6 flex flex-col gap-6 bg-brand-bg/95 backdrop-blur-md">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-display text-brand-text hover:text-brand-accent transition-colors font-bold uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Button href="/contact" onClick={() => setMenuOpen(false)} className="w-fit">
            {siteData.hero.cta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
