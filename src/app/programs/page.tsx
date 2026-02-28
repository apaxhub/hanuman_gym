import { Metadata } from "next";
import { siteData } from "@/data/siteData";
import Reveal from "@/components/ui/ScrollRevealProvider";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = {
    title: "Programs & Memberships | " + siteData.global.gymName,
};

export default function ProgramsPage() {
    return (
        <>
            <div className="pt-32 pb-section bg-brand-bg relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                    {/* Page header */}
                    <div className="mb-20 pb-14 border-b border-brand-border">
                        <Reveal>
                            <h1 className="font-display font-black text-6xl md:text-8xl text-brand-text mt-5 uppercase tracking-tighter leading-none">
                                Programs & <br />
                                <span className="text-brand-accent">Memberships</span>
                            </h1>
                        </Reveal>
                    </div>

                    {/* Programs Details */}
                    <div className="space-y-32 mb-32">
                        {siteData.programs.map((program, i) => (
                            <Reveal key={program.id} delay={100}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                    <div className={i % 2 !== 0 ? "md:order-2" : ""}>
                                        <div className="aspect-square bg-brand-border relative overflow-hidden skeleton" />
                                    </div>
                                    <div className={i % 2 !== 0 ? "md:order-1" : ""}>
                                        <h2 className="font-display font-black text-4xl text-brand-text uppercase mb-6">{program.title}</h2>
                                        <p className="text-xl text-brand-muted font-body leading-relaxed">{program.description}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    {/* Memberships */}
                    <Reveal className="mb-24">
                        <h2 className="font-display font-black text-5xl md:text-6xl text-brand-text uppercase tracking-tighter text-center mb-16">
                            Membership Plans
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {siteData.memberships.map((plan, i) => (
                                <div key={plan.id} className={`p-10 border ${plan.id === 'pro' ? 'border-brand-accent bg-brand-surface shadow-lg' : 'border-brand-border bg-brand-bg'} flex flex-col h-full hover:-translate-y-2 transition-transform duration-300`}>
                                    <h3 className="font-display font-black text-3xl text-brand-text uppercase mb-2">{plan.name}</h3>
                                    <p className="font-mono text-2xl font-bold text-brand-accent mb-8">{plan.price}</p>
                                    <ul className="space-y-4 mb-10 flex-grow">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-brand-muted font-body hover:text-brand-text transition-colors">
                                                <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`w-full py-4 uppercase font-bold text-sm tracking-widest transition-colors ${plan.id === 'pro' ? 'bg-brand-accent text-white hover:bg-brand-text' : 'bg-brand-text text-white hover:bg-brand-accent'}`}>
                                        Select Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
            <CTABanner />
        </>
    );
}
