import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaButton } from "@/components/cta-button";
import luxuryHero from "@/assets/luxury-hero.jpg";
import pillarEditorial from "@/assets/pillar-editorial.jpg";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogDiscovery from "@/assets/blog-discovery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { num: "I", title: "Brand strategy", note: "Positioning, voice, identity" },
  { num: "II", title: "Digital marketing", note: "Paid · organic · social-first" },
  { num: "III", title: "Content development / Copywriting", note: "Words that move people" },
  { num: "IV", title: "Intergrated Campaigns", note: "Story across every channel" },
  { num: "V", title: "Web design", note: "Sites built to convert" },
];

const marquee = ["Branding", "Discoverability", "Content strategy", "Social-first", "Web design", "Copywriting", "Campaigns", "Growth"];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* HERO — magazine cover */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10" style={{ background: "var(--gradient-bg)" }} />
        <div className="mx-auto max-w-[1500px] px-6 pb-24 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="grid grid-cols-12 items-end gap-8">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-primary" />
                <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                  Vol. 01 — Digital Presence &amp; Strategy
                </p>
              </div>
              <h1 className="mt-10 font-display text-[14vw] leading-[0.9] tracking-tight md:text-[10rem] lg:text-[12rem]">
                His<span className="italic gold-text">Mind</span>
                <br />
                <span className="text-foreground/90">Creatives</span><span className="text-primary">.</span>
              </h1>
              <div className="mt-12 grid max-w-2xl grid-cols-12 gap-6">
                <p className="col-span-12 text-sm uppercase tracking-[0.32em] text-foreground/50 md:col-span-3">
                  The studio
                </p>
                <p className="col-span-12 text-lg leading-relaxed text-foreground/80 md:col-span-9 md:text-xl">
                  We help growing brands transform ideas, products and initiatives into clear, engaging digital communication.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-6">
                <CtaButton hash="about">Read More</CtaButton>
                <CtaButton hash="services" variant="ghost">View Services</CtaButton>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5">
              <figure className="relative">
                <div className="absolute -left-6 -top-6 z-10 bg-background px-4 py-2 font-display text-sm italic text-primary">
                  ※ Edition · MMXXVI
                </div>
                <div className="overflow-hidden border border-primary/20">
                  <img
                    src={luxuryHero}
                    alt="Sculpted gold form against deep noir backdrop"
                    width={1080}
                    height={1600}
                    className="h-[560px] w-full object-cover md:h-[680px]"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  <span>Fig. 01 — A study in stillness</span>
                  <span className="italic">Photographed in studio</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="border-y border-foreground/10 bg-card/50 py-6 overflow-hidden">
          <div className="flex animate-[scroll_45s_linear_infinite] whitespace-nowrap">
            {[...marquee, ...marquee, ...marquee].map((w, i) => (
              <span key={i} className="mx-8 font-display text-3xl italic text-foreground/70 md:text-4xl">
                {w} <span className="not-italic text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-4">
              <div className="md:sticky md:top-32">
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-primary" />
                  <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                    Chapter I — About
                  </p>
                </div>
                <h2 className="mt-10 font-display text-6xl leading-[1] md:text-7xl">
                  The go-to <br />
                  for brands <br />
                  ready to <span className="italic gold-text">grow.</span>
                </h2>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:col-start-6">
              <p className="font-display text-3xl leading-[1.25] text-foreground md:text-4xl">
                Since its founding, <span className="italic gold-text">His Mind Creatives</span> has been the go-to company for structured digital presence and content strategy needs.
              </p>
              <div className="my-12 h-px rule-gold" />
              <p className="text-lg leading-relaxed text-foreground/75">
                We help growing brands transform ideas, products and initiatives into clear and engaging digital communication. Through strategy, design, content and storytelling, we help drive business growth and revenue.
              </p>
              <div className="mt-16 grid grid-cols-2 gap-10 border-t border-foreground/10 pt-10">
                <div>
                  <p className="font-display text-6xl gold-text">V</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-foreground/50">Core offerings</p>
                </div>
                <div>
                  <p className="font-display text-6xl italic">Bespoke.</p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.32em] text-foreground/50">Brand-first approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 border-t border-foreground/10 px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                  Chapter II — Services
                </p>
              </div>
              <h2 className="mt-10 font-display text-7xl leading-[1] md:text-8xl">
                What we <span className="italic gold-text">make.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-relaxed text-foreground/70 md:text-lg">
                Our offerings range from digital marketing, brand strategy to copywriting, website development, video production and more.
              </p>
              <div className="mt-8">
                <CtaButton hash="contact">Start a project</CtaButton>
              </div>
            </div>
          </div>

          <ol className="mt-20 divide-y divide-foreground/10 border-y border-foreground/10">
            {services.map((s) => (
              <li key={s.title} className="group relative grid grid-cols-12 items-center gap-6 py-10 transition-colors hover:bg-card/40">
                <span className="col-span-2 font-display text-2xl italic text-primary md:col-span-1 md:text-3xl">
                  {s.num}
                </span>
                <h3 className="col-span-10 font-display text-4xl leading-tight md:col-span-7 md:text-6xl">
                  {s.title}
                </h3>
                <p className="col-span-12 text-sm text-foreground/60 md:col-span-3 md:text-right">
                  {s.note}
                </p>
                <ArrowUpRight className="absolute right-2 top-10 h-5 w-5 text-primary opacity-0 transition-all duration-300 group-hover:right-0 group-hover:opacity-100 md:static md:col-span-1 md:opacity-30" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PILLARS — featured editorial spread */}
      <section className="relative overflow-hidden border-t border-foreground/10 px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-6">
            <figure className="overflow-hidden border border-primary/15">
              <img src={pillarEditorial} alt="Draped silk in indigo and cream under warm light" width={1280} height={1280} loading="lazy" className="h-[520px] w-full object-cover" />
            </figure>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:self-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">— Our craft</p>
            <h2 className="mt-8 font-display text-5xl leading-[1.05] md:text-6xl">
              Strategy. Story.<br />
              <span className="italic gold-text">Searchability.</span>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground/75">
              The studio brands trust for structured digital presence and content strategy. Considered. Quietly confident. Built to be chosen.
            </p>
          </div>
        </div>
      </section>

      {/* JOURNAL */}
      <section id="blogs" className="scroll-mt-24 border-t border-foreground/10 px-6 py-32 md:px-10 md:py-48">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid grid-cols-12 items-end gap-10">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-primary" />
                <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                  Chapter III — The Journal
                </p>
              </div>
              <h2 className="mt-10 font-display text-7xl leading-[1] md:text-8xl">
                Notes from <span className="italic gold-text">the studio.</span>
              </h2>
            </div>
            <p className="col-span-12 text-base text-foreground/65 md:col-span-4">
              Short reads on branding, discoverability and digital strategy for brands that want to be chosen — not just seen.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-12 gap-10">
            {/* Featured */}
            <Link
              to="/blog/marketing-vs-advertising"
              className="group col-span-12 grid grid-cols-12 gap-8 border-t border-foreground/10 pt-10 md:col-span-7"
            >
              <div className="col-span-12 overflow-hidden border border-foreground/10">
                <img src={blogMarketing} alt="Marketing letter blocks and 3D shopping cart" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="col-span-12">
                <p className="text-[10px] uppercase tracking-[0.32em] text-primary">Journal · No. 01</p>
                <h3 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
                  Marketing <span className="italic">vs</span> Advertising<span className="text-primary">.</span>
                </h3>
                <p className="mt-5 max-w-xl text-base text-foreground/65">
                  One of the biggest reasons brands stay stuck is they confuse visibility with strategy. Running ads is not marketing.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-primary">
                  Read essay
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>

            {/* Second */}
            <Link
              to="/blog/social-vs-seo-discovery"
              className="group col-span-12 flex flex-col border-t border-foreground/10 pt-10 md:col-span-5"
            >
              <div className="overflow-hidden border border-foreground/10">
                <img src={blogDiscovery} alt="Close-up eye" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.32em] text-primary">Journal · No. 02</p>
              <h3 className="mt-4 font-display text-3xl leading-tight md:text-4xl">
                Is social media taking over <span className="italic">SEO discovery?</span>
              </h3>
              <p className="mt-4 text-base text-foreground/65">
                Discovery doesn't begin with Google anymore. Search behaviour has changed — and your brand needs to change with it.
              </p>
              <span className="mt-5 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-primary">
                Read essay
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-foreground/10 px-6 py-32 md:px-10 md:py-48">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]">
          <img src={pillarEditorial} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-10">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-primary" />
              <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">
                Chapter IV — Contact
              </p>
            </div>
            <h2 className="mt-10 font-display text-7xl leading-[0.95] md:text-[8.5rem]">
              Let us make<br />
              your socials<br />
              <span className="italic gold-text">stand out.</span>
            </h2>
            <div className="mt-12">
              <CtaButton href="mailto:creativeshismind@gmail.com">Begin the conversation</CtaButton>
            </div>
          </div>

          <div className="col-span-12 space-y-10 border-l border-foreground/15 pl-10 md:col-span-5 md:col-start-8">
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Mail className="h-4 w-4" />
                <p className="text-[10px] uppercase tracking-[0.32em]">Correspondence</p>
              </div>
              <a href="mailto:creativeshismind@gmail.com" className="mt-4 block break-all font-display text-2xl text-foreground hover:text-primary md:text-3xl">
                creativeshismind@gmail.com
              </a>
            </div>
            <div className="h-px rule-gold" />
            <div>
              <div className="flex items-center gap-3 text-primary">
                <Phone className="h-4 w-4" />
                <p className="text-[10px] uppercase tracking-[0.32em]">Telephone</p>
              </div>
              <p className="mt-4 font-display text-2xl md:text-3xl">(+254) 140-276-578</p>
            </div>
            <div className="h-px rule-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-primary">Follow</p>
              <div className="mt-4 flex items-center gap-3">
                {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="flex h-12 w-12 items-center justify-center border border-foreground/20 text-foreground hover:border-primary hover:text-primary">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}