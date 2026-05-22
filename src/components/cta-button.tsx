import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Props = {
  to?: string;
  hash?: string;
  href?: string;
  children: ReactNode;
};

const className =
  "group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-background transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5";

export function CtaButton({ to, hash, href, children }: Props) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5 group-hover:rotate-45">
        <ArrowUpRight className="h-3.5 w-3.5" />
      </span>
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
