import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import ProgramsPreview from "@/components/sections/ProgramsPreview";
import TrainerGrid from "@/components/sections/TrainerGrid";
import Testimonials from "@/components/sections/Testimonials";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProgramsPreview />
      <TrainerGrid />
      <Testimonials />
      <CTABanner />
    </>
  );
}
