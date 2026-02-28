import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-6">404</p>
      <h1 className="font-display font-black text-display-2xl text-brand-highlight mb-4">
        Lost in<br />
        <span className="text-brand-accent">the void.</span>
      </h1>
      <p className="text-brand-muted mb-10 max-w-sm">This page does not exist — but our work does.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-brand-accent text-brand-bg rounded-full text-sm font-medium hover:shadow-[0_0_24px_rgba(200,240,96,0.4)] transition-all duration-200 hover:-translate-y-0.5"
      >
        Back to Home &rarr;
      </Link>
    </div>
  );
}
