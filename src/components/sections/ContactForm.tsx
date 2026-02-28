"use client";
import { useState } from "react";
import { contactContent } from "@/data/siteData";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/ScrollRevealProvider";

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({
    name: "", email: "", service: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    await new Promise((r) => setTimeout(r, 1800));
    setState("success");
  };

  const inputClass = "w-full bg-brand-surface border border-brand-border rounded-xl px-5 py-4 text-brand-text placeholder:text-brand-muted text-sm focus:outline-none focus:border-brand-accent transition-colors duration-200";

  if (state === "success") {
    return (
      <div className="text-center py-20 animate-scale-in">
        <div className="text-5xl mb-6">✦</div>
        <h3 className="font-display font-black text-3xl text-brand-highlight mb-3">Got it — thank you!</h3>
        <p className="text-brand-muted">We will be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">Name *</label>
          <input
            name="name"
            required
            value={values.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">Email *</label>
          <input
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">Service</label>
        <select
          name="service"
          value={values.service}
          onChange={handleChange}
          className={inputClass + " cursor-pointer"}
        >
          <option value="">Select a service...</option>
          {contactContent.services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Reveal>

      <Reveal delay={200}>
        <label className="block text-xs font-mono uppercase tracking-wider text-brand-muted mb-2">Message *</label>
        <textarea
          name="message"
          required
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell us about your project, timeline, and budget..."
          className={inputClass + " resize-none"}
        />
      </Reveal>

      <Reveal delay={300}>
        <Button
          type="submit"
          variant="primary"
          disabled={state === "loading"}
          className="w-full sm:w-auto px-10 py-4 text-base"
        >
          {state === "loading" ? (
            <span className="flex items-center gap-3">
              <span className="w-4 h-4 border-2 border-brand-bg/30 border-t-brand-bg rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            "Send Message →"
          )}
        </Button>
      </Reveal>
    </form>
  );
}
