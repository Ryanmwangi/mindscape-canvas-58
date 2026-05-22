import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "ABOUT US", hash: "about" },
  { to: "/", label: "SERVICES", hash: "services" },
  { to: "/", label: "BLOGS", hash: "blogs" },
  { to: "/", label: "CONTACT US", hash: "contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/15 bg-background/85 px-4 py-3 backdrop-blur-md md:px-6">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
            HM
          </span>
          <span className="hidden sm:inline">HisMind</span>
          <span className="hidden text-primary sm:inline">·</span>
          <span className="hidden text-muted-foreground sm:inline">Creatives</span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-foreground/15 bg-card/70 p-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-foreground hover:text-background"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="contact"
          className="rounded-full bg-foreground px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-background transition-transform hover:-translate-y-0.5"
        >
          Let's Talk
        </Link>
      </div>
    </header>
  );
}
