"use client";

import { useRef } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import Reveal from "@/components/ui/ScrollRevealProvider";
import CTABanner from "@/components/sections/CTABanner";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Dumbbell, Activity, Users, Check } from "lucide-react";

const ICONS: Record<string, React.ReactNode> = {
    Dumbbell: <Dumbbell className="w-8 h-8 text-white relative z-10" />,
    Activity: <Activity className="w-8 h-8 text-white relative z-10" />,
    Users: <Users className="w-8 h-8 text-white relative z-10" />
};

const PROGRAM_IMAGES: Record<string, string> = {
    strength: "/assets/hero/hero-gym.png",
    functional: "/assets/trainers/trainer-2.png",
    coaching: "/assets/trainers/trainer-1.png"
};

const TiltCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

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
            className={`relative perspective-[1000px] group ${className}`}
        >
            <motion.div
                className="absolute inset-x-0 -top-full h-full bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30"
                style={{ transform: "translateZ(80px)", y: useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]) }}
            />
            {children}
        </motion.div>
    );
};

export default function ProgramsContent() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

    return (
        <main ref={containerRef} className="bg-brand-bg relative overflow-hidden">

            {/* 1. Parallax Hero Section */}
            <section className="relative h-[80svh] flex items-center justify-center -mt-20 overflow-hidden bg-brand-text">
                <motion.div
                    className="absolute inset-0 z-0 origin-bottom"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    <Image
                        src="/assets/hero/hero-gym.png"
                        alt="Programs Hero"
                        fill
                        className="object-cover object-center filter grayscale contrast-150"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/80 to-brand-text/50" />
                </motion.div>

                <motion.div
                    className="relative z-10 text-center px-6 mt-20"
                    style={{ y: textY }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <p className="text-brand-accent font-mono tracking-widest uppercase mb-4 flex items-center justify-center gap-3 font-bold">
                            <span className="w-12 h-[2px] bg-brand-accent shadow-[0_0_10px_rgba(225,6,0,0.8)]"></span>
                            Train Like A Machine
                            <span className="w-12 h-[2px] bg-brand-accent shadow-[0_0_10px_rgba(225,6,0,0.8)]"></span>
                        </p>
                        <h1 className="font-display font-black text-6xl md:text-[8rem] text-brand-text drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] uppercase tracking-tighter leading-[0.85] mb-6">
                            Elite <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/50">Performance</span>
                        </h1>
                    </motion.div>
                </motion.div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20 -mt-20">

                {/* 2. 3D Programs List */}
                <section className="mb-48 space-y-32">
                    {siteData.programs.map((program, i) => (
                        <Reveal key={program.id} className="relative">
                            <div className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}>

                                {/* 3D Asset Card */}
                                <div className="flex-1 w-full perspective-[1500px]">
                                    <TiltCard className="w-full aspect-[4/3] lg:aspect-square">
                                        <motion.div
                                            className="w-full h-full bg-brand-bg relative overflow-hidden group border border-brand-border/50 shadow-2xl"
                                            style={{ transformStyle: "preserve-3d" }}
                                            initial={{ rotateY: 15, y: 50, opacity: 0 }}
                                            whileInView={{ rotateY: 0, y: 0, opacity: 1 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                                        >
                                            {/* Mask Reveal Animation */}
                                            <motion.div
                                                className="absolute inset-0 bg-brand-bg z-20 pointer-events-none origin-bottom"
                                                initial={{ scaleY: 1 }}
                                                whileInView={{ scaleY: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1.2, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                                            />

                                            {/* Rich Image Background */}
                                            <motion.div
                                                className="w-full h-full"
                                                initial={{ scale: 1.2, filter: "blur(10px)" }}
                                                whileInView={{ scale: 1, filter: "blur(0px)" }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                            >
                                                <Image
                                                    src={PROGRAM_IMAGES[program.id] || "/assets/hero/hero-gym.png"}
                                                    alt={`${program.title} Visual`}
                                                    fill
                                                    className="object-cover transition-all duration-1000 group-hover:scale-110 filter saturate-0 group-hover:saturate-100 contrast-125"
                                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                                />
                                            </motion.div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-brand-text via-brand-text/60 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-700 z-10" />

                                            {/* Advanced Hover Glow */}
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(225,6,0,0.25)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-screen pointer-events-none z-10" />

                                            {/* Icon overlay */}
                                            <motion.div
                                                className="absolute bottom-8 right-8 bg-brand-accent w-16 h-16 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(225,6,0,0.5)] z-20"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, margin: "-100px" }}
                                                transition={{ duration: 0.5, delay: 1 }}
                                            >
                                                {ICONS[program.icon]}
                                            </motion.div>
                                        </motion.div>
                                    </TiltCard>
                                </div>

                                {/* Content */}
                                <motion.div
                                    className="flex-1 space-y-6"
                                    initial={{ opacity: 0, x: i % 2 !== 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                >
                                    <div className="flex items-center gap-4 mb-8">
                                        <motion.span
                                            className="text-brand-accent font-display font-black text-6xl opacity-30"
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 0.3, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.5 }}
                                        >
                                            0{i + 1}
                                        </motion.span>
                                        <motion.div
                                            className="h-px bg-brand-border origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileInView={{ scaleX: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.8 }}
                                            style={{ width: "96px" }}
                                        />
                                    </div>
                                    <h2 className="font-display font-black text-5xl md:text-6xl text-brand-text uppercase tracking-tighter leading-none">
                                        {program.title}
                                    </h2>
                                    <p className="text-xl md:text-2xl font-body text-brand-muted leading-relaxed font-medium">
                                        {program.description}
                                    </p>

                                    {/* Decorative element */}
                                    <div className="pt-8 flex items-center gap-2 group cursor-pointer w-max">
                                        <span className="text-brand-text font-bold uppercase tracking-widest text-sm group-hover:text-brand-accent transition-colors">Learn More</span>
                                        <div className="w-8 h-[2px] bg-brand-text group-hover:bg-brand-accent group-hover:w-12 transition-all duration-300" />
                                    </div>
                                </motion.div>

                            </div>
                        </Reveal>
                    ))}
                </section>

                {/* 3. Memberships */}
                <Reveal className="mb-48">
                    <div className="text-center mb-24">
                        <h2 className="font-display font-black text-5xl md:text-7xl text-brand-text uppercase tracking-tighter mb-6 relative inline-block">
                            Choose Your Weapon
                            <div className="absolute -inset-1 bg-brand-accent/10 blur-xl -z-10" />
                        </h2>
                        <p className="text-xl text-brand-muted font-body max-w-2xl mx-auto font-medium">
                            No hidden fees. No contracts. Just pure performance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end perspective-[1500px]">
                        {siteData.memberships.map((plan, i) => (
                            <TiltCard key={plan.id} className={plan.id === 'pro' ? "md:-mt-8 md:mb-8" : ""}>
                                <div className={`p-10 lg:p-12 relative overflow-hidden flex flex-col h-full bg-brand-surface transform-gpu border ${plan.id === 'pro' ? 'border-brand-accent shadow-[0_0_40px_rgba(225,6,0,0.15)]' : 'border-brand-border hover:border-brand-text/50'} transition-all duration-500`}>

                                    {/* Highlight bar */}
                                    <div className={`absolute top-0 left-0 w-full h-1.5 transition-transform duration-500 origin-left ${plan.id === 'pro' ? 'bg-brand-accent scale-x-100' : 'bg-brand-text scale-x-0 group-hover:scale-x-100'}`} />

                                    {plan.id === 'pro' && (
                                        <div className="absolute top-6 right-6 bg-brand-accent text-white text-xs font-bold uppercase tracking-widest py-1 px-3 shadow-[0_0_10px_rgba(225,6,0,0.4)]">
                                            Popular
                                        </div>
                                    )}

                                    <h3 className="font-display font-black text-4xl text-brand-text uppercase mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-2 mb-10">
                                        <p className="font-mono text-5xl font-black text-brand-text tracking-tighter">{plan.price}</p>
                                        <span className="text-brand-muted font-bold font-body uppercase text-sm tracking-widest">/mo</span>
                                    </div>

                                    <ul className="space-y-5 mb-12 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 font-body font-medium text-brand-muted hover:text-brand-text transition-colors">
                                                <Check className="w-5 h-5 text-brand-accent mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button className={`w-full py-5 px-6 uppercase font-bold text-sm tracking-widest transition-all duration-300 relative overflow-hidden group/btn ${plan.id === 'pro' ? 'bg-brand-accent text-white hover:bg-white hover:text-brand-text shadow-[0_10px_20px_rgba(225,6,0,0.3)] hover:shadow-none' : 'bg-brand-bg text-brand-text border border-brand-border hover:bg-brand-text hover:text-white hover:border-brand-text'}`}>
                                        <span className="relative z-10">Select Plan</span>
                                    </button>
                                </div>
                            </TiltCard>
                        ))}
                    </div>
                </Reveal>
            </div>

            {/* 4. CTA Banner */}
            <CTABanner />
        </main>
    );
}
