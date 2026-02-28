"use client";

import { useRef } from "react";
import { siteData } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax properties
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.8], [0.4, 0]);

  const yDumbbell = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const rotateDumbbell = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scaleDumbbell = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[110svh] flex flex-col justify-center overflow-hidden bg-brand-text -mt-20"
    >
      {/* Background Image Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: yBg, opacity: opacityBg }}
      >
        <Image
          src="/assets/hero/hero-gym.png"
          alt="Gym Hero"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/80 to-transparent" />
      </motion.div>

      {/* 3D Floating Dumbbell Silhouette Overlay */}
      <div className="absolute inset-0 z-0 flex items-center justify-end md:justify-center pointer-events-none overflow-hidden">
        <motion.div
          className="relative w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] opacity-40 mix-blend-screen md:translate-x-1/4"
          style={{
            y: yDumbbell,
            rotate: rotateDumbbell,
            scale: scaleDumbbell
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <Image
            src="/assets/hero/floating_dumbbell.png"
            alt="Floating Dumbbell 3D"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-20"
        style={{ y: yText, opacity: opacityText }}
      >
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-brand-accent font-mono tracking-widest uppercase mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-[2px] bg-brand-accent shadow-[0_0_10px_rgba(225,6,0,0.8)]"></span>
            Welcome to {siteData.global.gymName}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-7xl md:text-[8rem] text-brand-surface tracking-tighter leading-[0.85] mb-8 uppercase drop-shadow-2xl"
          >
            {siteData.hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-brand-bg/90 font-body mb-10 max-w-2xl leading-relaxed drop-shadow-md font-medium"
          >
            {siteData.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="/contact" variant="primary" className="text-lg px-8 py-5 group relative overflow-hidden">
              <span className="relative z-10">{siteData.hero.cta}</span>
              <div className="absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out" />
            </Button>
            <Button href="/programs" variant="outline" className="text-lg px-8 py-5 !border-brand-bg/30 !text-brand-bg backdrop-blur-sm hover:!bg-brand-bg hover:!text-brand-text">
              Explore Programs
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-brand-surface/50 font-mono text-xs uppercase tracking-widest pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span>Scroll to explore</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-brand-accent to-transparent"
          animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
