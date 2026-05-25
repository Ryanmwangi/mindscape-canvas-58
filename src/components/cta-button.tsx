import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  hash?: string;
  href?: string;
  children: ReactNode;
  variant?: "gold" | "ghost";
};

const base =
  "group inline-flex items-center gap-4 px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.32em] transition-all duration-300";
const variants = {
  gold:
    "border border-primary/60 bg-primary/5 text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)]",
  ghost:
    "border border-foreground/25 text-foreground hover:border-primary hover:text-primary",
};

export function CtaButton({ to, hash, href, children, variant = "gold" }: Props) {
  const className = `${base} ${variants[variant]}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="inline-flex h-px w-8 bg-current transition-all duration-300 group-hover:w-12" />
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </>
  );
  if (href) {
    return <a href={href} className={className}>{inner}</a>;
  }
  return (
    <Link to={to ?? "/"} hash={hash} className={className}>
      {inner}
    </Link>
  );
}
