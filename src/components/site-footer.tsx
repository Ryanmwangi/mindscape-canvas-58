import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-foreground/15 bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-6">
        <div>
          <p className="font-display text-4xl font-bold leading-none md:text-5xl">
            HisMind<span className="text-primary">.</span>
          </p>
          <p className="mt-4 max-w-sm text-sm text-background/70">
            A digital strategy and creative communications studio. We build brands that get found, remembered and chosen.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-background/50">Reach</p>
          <a href="mailto:creativeshismind@gmail.com" className="mt-3 block break-all text-base text-background hover:text-primary">
            creativeshismind@gmail.com
          </a>
          <p className="mt-2 text-sm text-background/70">(+254) 140-276-578</p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-background/50">Follow</p>
          <div className="mt-3 flex items-center gap-2">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="social" className="group flex h-10 w-10 items-center justify-center rounded-full border border-background/30 hover:border-primary hover:bg-primary hover:text-primary-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-background hover:text-primary">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-background/15 px-4 py-5 md:px-6">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 text-[10px] uppercase tracking-[0.22em] text-background/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HisMind Creatives — All rights reserved</p>
          <p>Made with intent · Nairobi</p>
        </div>
      </div>
    </footer>
  );
}
