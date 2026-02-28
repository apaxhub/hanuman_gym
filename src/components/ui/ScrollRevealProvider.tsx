"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 100 | 200 | 300 | 400 | 500 | 600;
  as?: keyof JSX.IntrinsicElements;
}

export default function Reveal({ children, className, delay = 0, as: Tag = "div" }: RevealProps) {
  const ref = useScrollReveal<HTMLElement>();
  const delayClass = delay ? `delay-${delay}` : "";

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn("reveal", delayClass, className)}>
      {children}
    </Tag>
  );
}
