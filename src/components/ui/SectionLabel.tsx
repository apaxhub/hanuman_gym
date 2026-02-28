interface SectionLabelProps {
  children: React.ReactNode;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-brand-muted">
      <span className="w-4 h-px bg-brand-accent inline-block" />
      {children}
    </span>
  );
}
