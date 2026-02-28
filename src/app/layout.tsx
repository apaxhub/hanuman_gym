import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: `%s — ${siteConfig.name} ${siteConfig.tagline}`,
    default: `${siteConfig.name} ${siteConfig.tagline} — ${siteConfig.description}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="grain">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
