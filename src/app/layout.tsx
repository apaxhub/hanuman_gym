import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/data/siteData";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteData.global.gymName}`,
    default: `${siteData.global.gymName} | ${siteData.hero.subheadline}`,
  },
  description: siteData.philosophy.content,
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
