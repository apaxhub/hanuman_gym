import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-accent text-white hover:shadow-[0_4px_24px_rgba(225,6,0,0.40)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]",
  outline:
    "border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent",
  ghost:
    "text-brand-muted hover:text-brand-text",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-200 ease-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
    variants[variant],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} disabled={disabled}>
      {children}
    </button>
  );
}
