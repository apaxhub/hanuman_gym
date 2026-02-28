"use client";

import { useRef } from "react";
import Reveal from "@/components/ui/ScrollRevealProvider";
import Button from "@/components/ui/Button";
import { motion, useTransform, useScroll } from "framer-motion";

export default function CTABanner() {
    const containerRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-brand-text relative overflow-hidden flex items-center justify-center min-h-[80vh]">
            {/* Parallax Background Wrapper */}
            <motion.div
                className="absolute inset-4 md:inset-8 bg-brand-accent rounded-[2rem] md:rounded-[4rem] overflow-hidden flex items-center justify-center transform-gpu"
                style={{ scale, y, opacity }}
            >
                {/* Decorative large shapes */}
                <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-text opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10 w-full py-20">
                    <Reveal>
                        <h2 className="font-display font-black text-6xl md:text-[8rem] text-white uppercase tracking-tighter mb-10 leading-[0.8] drop-shadow-xl">
                            Stop Waiting.<br />
                            <span className="text-brand-text">Start Doing.</span>
                        </h2>
                        <p className="text-white/90 text-2xl md:text-3xl font-body mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-medium">
                            Join Palanpur&apos;s premier performance facility and unleash your true potential.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Button href="/contact" variant="primary" className="!bg-brand-text !text-white hover:!bg-white hover:!text-brand-text text-xl px-12 py-6 transition-colors duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)]">
                                Join Hanuman GYM Today
                            </Button>
                        </motion.div>
                    </Reveal>
                </div>
            </motion.div>
        </section>
    );
}
