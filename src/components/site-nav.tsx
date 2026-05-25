import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "About", hash: "about" },
  { to: "/", label: "Services", hash: "services" },
  { to: "/", label: "Journal", hash: "blogs" },
  { to: "/", label: "Contact", hash: "contact" },
] as const;

export function SiteNav() {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-6 py-5 md:px-10">
        <Link to="/" className="flex items-center gap-3 text-foreground">
          <span className="flex h-10 w-10 items-center justify-center border border-primary/60 font-display text-base italic text-primary">
            Hm
          </span>
          <span className="hidden font-display text-xl tracking-wide sm:inline">
            HisMind <span className="italic text-primary">Creatives</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="group relative text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-primary"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="contact"
          className="group inline-flex items-center gap-3 border border-primary/60 bg-primary/5 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.3em] text-primary transition-all hover:bg-primary hover:text-primary-foreground"
        >
          <span>Enquire</span>
          <span className="h-px w-5 bg-current transition-all group-hover:w-8" />
        </Link>
      </div>
    </header>
  );
}
