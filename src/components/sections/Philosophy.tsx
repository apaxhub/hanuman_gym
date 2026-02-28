"use client";

import { useRef } from "react";
import { siteData } from "@/data/siteData";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Philosophy() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const headingY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0.5]);
    const skewX = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-brand-bg relative overflow-hidden flex items-center min-h-[70vh]">
            {/* Decorative vertical line */}
            <div className="absolute top-0 bottom-0 left-12 w-px bg-brand-border hidden lg:block" />

            {/* Decorative background text */}
            <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display font-black text-[12vw] text-brand-text/[0.03] whitespace-nowrap pointer-events-none uppercase tracking-tighter"
                style={{ x: useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]) }}
            >
                Push Limits
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left side: Heading */}
                    <div className="lg:col-span-6 relative">
                        <div className="absolute -left-6 top-0 w-3 h-full bg-brand-accent transform -skew-x-12 hidden md:block" />
                        <motion.h2
                            style={{ y: headingY, opacity, skewX }}
                            className="font-display font-black text-6xl lg:text-[clamp(4rem,6vw,7rem)] text-brand-text uppercase leading-[0.85] tracking-tighter break-words"
                        >
                            {siteData.philosophy.heading.split(" ").map((word, i) => (
                                <span key={i} className={`block ${i === 1 ? 'text-brand-accent' : ''}`}>
                                    {word}
                                </span>
                            ))}
                        </motion.h2>
                    </div>

                    {/* Right side: Content */}
                    <motion.div
                        style={{ y: textY, opacity }}
                        className="lg:col-span-6 lg:pl-16 lg:border-l-2 lg:border-brand-text/20"
                    >
                        <p className="text-2xl md:text-3xl text-brand-muted font-body leading-relaxed font-medium">
                            We <span className="text-brand-text font-bold">don&apos;t</span> do gimmicks.
                            We provide the atmosphere, equipment, and expertise required to
                            <span className="text-brand-accent italic font-black"> push your limits. </span>
                            Hanuman GYM is more than a fitness center; it&apos;s a proving ground.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
