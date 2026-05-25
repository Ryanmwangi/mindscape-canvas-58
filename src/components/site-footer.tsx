import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="mx-auto max-w-[1500px] px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">— HisMind Creatives</p>
            <p className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl">
              Brands that get<br />
              <span className="italic gold-text">found, remembered</span><br />
              &amp; chosen.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/50">Reach</p>
            <a href="mailto:creativeshismind@gmail.com" className="mt-5 block break-all font-display text-xl text-foreground hover:text-primary">
              creativeshismind@gmail.com
            </a>
            <p className="mt-3 font-display text-lg text-foreground/80">(+254) 140-276-578</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-foreground/40">Nairobi · Worldwide</p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/50">Follow</p>
            <div className="mt-5 flex items-center gap-3">
              {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground transition-colors hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a href="#contact" className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-primary">
              Start a project
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
        <div className="mt-20 h-px rule-gold" />
        <div className="mt-8 flex flex-col items-start justify-between gap-2 text-[10px] uppercase tracking-[0.32em] text-foreground/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HisMind Creatives — All rights reserved</p>
          <p className="italic">Crafted with intention</p>
        </div>
      </div>
    </footer>
  );
}
