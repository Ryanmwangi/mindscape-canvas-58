import { Instagram, Facebook, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} HisMind Creatives
        </p>
        <div className="flex items-center gap-4 text-foreground/80">
          <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
          <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
          <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
        </div>
      </div>
    </footer>
  );
}
