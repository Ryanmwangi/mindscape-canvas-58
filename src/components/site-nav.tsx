import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "ABOUT US", hash: "about" },
  { to: "/", label: "SERVICES", hash: "services" },
  { to: "/", label: "BLOGS", hash: "blogs" },
  { to: "/", label: "CONTACT US", hash: "contact" },
] as const;

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-6 py-6 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link to="/" className="flex h-11 w-11 items-center justify-center rounded-md border border-foreground/60 text-sm font-medium tracking-wider text-foreground transition-colors hover:border-primary hover:text-primary">
          HM
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="text-[11px] font-light uppercase tracking-[0.18em] text-foreground/90 underline-offset-4 hover:text-primary hover:underline"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
