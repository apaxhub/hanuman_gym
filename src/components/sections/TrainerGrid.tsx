"use client";

import { useRef } from "react";
import { siteData } from "@/data/siteData";
import Reveal from "@/components/ui/ScrollRevealProvider";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";

const TiltCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full perspective-[1000px] group"
        >
            {/* Glare effect */}
            <motion.div
                className="absolute inset-x-0 -top-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
                style={{ transform: "translateZ(80px)", y: useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]) }}
            />
            {children}
        </motion.div>
    );
};

export default function TrainerGrid() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const sectionY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={containerRef} className="py-24 md:py-32 bg-brand-surface relative overflow-hidden">
            {/* Parallax Background Texture */}
            <motion.div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    y: sectionY,
                    backgroundImage: `radia-gradient(circle, #111111 2px, transparent 2px)`,
                    backgroundSize: "40px 40px"
                }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <Reveal className="mb-16 md:mb-24 text-center">
                    <p className="text-brand-accent font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-3 font-bold">
                        <span className="w-8 h-[2px] bg-brand-accent"></span>
                        The Experts
                        <span className="w-8 h-[2px] bg-brand-accent"></span>
                    </p>
                    <h2 className="font-display font-black text-5xl md:text-7xl text-brand-text uppercase tracking-tighter drop-shadow-sm">
                        Our Coaches
                    </h2>
                </Reveal>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 perspective-[1500px]">
                    {siteData.trainers.map((trainer, i) => (
                        <Reveal key={trainer.id} delay={((i * 100) as 0 | 100 | 200)}>
                            <TiltCard index={i}>
                                <motion.div
                                    className="flex flex-col bg-brand-bg relative h-[600px] overflow-hidden shadow-2xl"
                                    style={{ transformStyle: "preserve-3d" }}
                                >

                                    {/* Image Background */}
                                    <Image
                                        src={`/assets/trainers/trainer-${i + 1}.png`}
                                        alt={trainer.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 z-0 origin-center filter contrast-125 saturate-50 group-hover:saturate-100"
                                    />

                                    {/* Vignette Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

                                    {/* Content Floating in 3D */}
                                    <div
                                        className="p-8 mt-auto z-20"
                                        style={{ transform: "translateZ(80px)" }}
                                    >
                                        <div className="w-12 h-1 bg-brand-accent mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
                                        <h3 className="font-display font-black text-4xl text-white uppercase mb-2 drop-shadow-lg">
                                            {trainer.name}
                                        </h3>
                                        <p className="text-brand-accent font-mono uppercase tracking-widest text-sm font-bold mb-6 drop-shadow-md">
                                            {trainer.specialty}
                                        </p>
                                        <p className="text-white/80 leading-relaxed font-body max-w-sm drop-shadow-sm">
                                            {trainer.bio}
                                        </p>
                                    </div>

                                </motion.div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
