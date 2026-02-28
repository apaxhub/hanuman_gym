"use client";

import { useRef } from "react";
import { siteData } from "@/data/siteData";
import { Dumbbell, Activity, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const ICONS: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-16 h-16 text-brand-accent group-hover:scale-110 transition-transform duration-500 will-change-transform" />,
    Activity: <Activity className="w-16 h-16 text-brand-accent group-hover:scale-110 transition-transform duration-500 will-change-transform" />,
    Users: <Users className="w-16 h-16 text-brand-accent group-hover:scale-110 transition-transform duration-500 will-change-transform" />
};

export default function ProgramsPreview() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const sectionY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={containerRef} className="py-32 md:py-48 bg-brand-surface relative z-10">
            {/* Dynamic Background */}
            <motion.div
                className="absolute inset-0 bg-brand-bg/50 pointer-events-none"
                style={{ y: sectionY }}
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Header */}
                <motion.div
                    className="mb-20 md:mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div>
                        <p className="text-brand-accent font-mono tracking-widest uppercase mb-4 flex items-center gap-3 font-bold">
                            <span className="w-12 h-[3px] bg-brand-accent shadow-[0_0_8px_rgba(225,6,0,0.5)]"></span>
                            Our Expertise
                        </p>
                        <h2 className="font-display font-black text-6xl md:text-8xl text-brand-text uppercase tracking-tighter leading-[0.85]">
                            Programs
                        </h2>
                    </div>
                    <Button href="/programs" variant="outline" className="hidden md:inline-flex border-brand-text text-brand-text hover:bg-brand-text hover:text-brand-surface py-5 px-8 text-lg font-bold">
                        View All Programs
                    </Button>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {siteData.programs.map((program, i) => (
                        <motion.div
                            key={program.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: i * 0.15 + 0.2 }}
                            className="h-full"
                        >
                            <div className="group h-[450px] bg-brand-bg p-12 border border-brand-border/50 hover:border-brand-accent transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-black/10 relative overflow-hidden flex flex-col z-10">

                                {/* Background accent on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                                {/* Hover Accent Line */}
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                {/* Icon */}
                                <div className="mb-10 drop-shadow-sm">
                                    {ICONS[program.icon]}
                                </div>

                                {/* Content */}
                                <h3 className="font-display font-black text-3xl text-brand-text mb-6 uppercase tracking-tighter">
                                    {program.title}
                                </h3>
                                <p className="text-brand-muted text-lg leading-relaxed font-body flex-grow font-medium">
                                    {program.description}
                                </p>

                                {/* Arrow hint */}
                                <div className="mt-8 flex items-center text-brand-accent font-bold uppercase tracking-widest text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                                    <span>Explore</span>
                                    <span className="ml-2">→</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-16 md:hidden">
                    <Button href="/programs" variant="outline" className="w-full border-brand-text text-brand-text py-5 font-bold">
                        View All Programs
                    </Button>
                </div>

            </div>
        </section>
    );
}
