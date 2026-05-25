import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Mail, Phone, Instagram, Facebook, Linkedin, MoveRight } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaButton } from "@/components/cta-button";
import aboutDoodle from "@/assets/about-doodle.jpg";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogDiscovery from "@/assets/blog-discovery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "Brand strategy", tag: "01", note: "Positioning, voice, identity" },
  { title: "Digital marketing", tag: "02", note: "Paid · organic · social-first" },
  { title: "Content development / Copywriting", tag: "03", note: "Words that move people" },
  { title: "Intergrated Campaigns", tag: "04", note: "Story across every channel" },
  { title: "Web design", tag: "05", note: "Sites built to convert" },
];

const marquee = ["Branding", "Discoverability", "Content strategy", "Social-first", "Web design", "Copywriting", "Campaigns", "Growth"];

function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-bg)" }}>
      <SiteNav />

      {/* HERO — Bento */}
      <section className="px-4 pt-6 md:px-6">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-3 md:gap-4">
          {/* Big headline tile */}
          <div className="relative col-span-12 overflow-hidden rounded-[2rem] border border-foreground/15 bg-card p-6 md:col-span-8 md:p-10 lg:p-14">
            <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-primary" /> Digital Presence &amp; Strategy
            </div>
            <h1 className="mt-6 font-display text-[12vw] font-bold leading-[0.88] tracking-tight md:text-[7.5rem] lg:text-[9.5rem]">
              His<span className="italic text-primary">Mind</span>
              <br />
              Creatives<span className="text-accent">.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              We help growing brands transform ideas, products and initiatives into clear, engaging digital communication.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaButton hash="about">Read More</CtaButton>
              <Link to="/" hash="services" className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
                See services <MoveRight className="h-4 w-4" />
              </Link>
            </div>
            {/* decorative blob */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[image:var(--gradient-brand)] opacity-30 blur-3xl" />
          </div>

          {/* Side stat tile */}
          <div className="relative col-span-6 overflow-hidden rounded-[2rem] bg-foreground p-6 text-background md:col-span-4 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background/60">Since day one</p>
            <p className="mt-6 font-display text-6xl font-bold leading-none md:text-7xl">Go<span className="text-primary">-to</span></p>
            <p className="mt-3 text-sm text-background/80">
              The studio brands trust for structured digital presence and content strategy.
            </p>
            <div className="absolute bottom-6 right-6 flex h-12 w-12 rotate-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>

          {/* Coral square */}
          <div className="col-span-6 flex flex-col justify-between rounded-[2rem] bg-primary p-6 text-primary-foreground md:col-span-3 md:p-8">
            <p className="font-display text-4xl font-bold leading-none">/01</p>
            <p className="text-sm font-medium">Brand strategy that earns attention — not just buys it.</p>
          </div>

          {/* Image tile */}
          <div className="col-span-6 overflow-hidden rounded-[2rem] border border-foreground/15 bg-card md:col-span-5">
            <img src={aboutDoodle} alt="Studio doodles" loading="lazy" width={1024} height={1024} className="h-full w-full object-cover" />
          </div>

          {/* Violet tile */}
          <div className="col-span-12 flex flex-col justify-between gap-4 rounded-[2rem] bg-secondary p-6 text-secondary-foreground md:col-span-4 md:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-secondary-foreground/70">What we do</p>
            <p className="font-display text-3xl font-semibold leading-tight md:text-4xl">
              Strategy. Story. <span className="italic">Searchability.</span>
            </p>
          </div>
        </div>

        {/* Marquee */}
        <div className="mx-auto mt-6 max-w-[1400px] overflow-hidden rounded-full border border-foreground/15 bg-card py-4">
          <div className="flex animate-[scroll_30s_linear_infinite] whitespace-nowrap">
            {[...marquee, ...marquee, ...marquee].map((w, i) => (
              <span key={i} className="mx-6 font-display text-xl font-semibold text-foreground/80">
                {w} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">— About us</p>
            <h2 className="mt-4 font-display text-6xl font-bold leading-[0.95] md:text-7xl">
              The go-to <br /> for brands <br /> ready to <span className="italic text-accent">grow.</span>
            </h2>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-7">
            <div className="col-span-2 rounded-[2rem] border border-foreground/15 bg-card p-8">
              <p className="text-lg leading-relaxed text-foreground">
                Since its founding, <span className="font-semibold">His Mind Creatives</span> has been the go-to company for structured digital presence and content strategy needs.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We help growing brands transform ideas, products and initiatives into clear and engaging digital communication. Through strategy, design, content and storytelling, we help drive business growth and revenue.
              </p>
            </div>
            <div className="rounded-[2rem] bg-foreground p-6 text-background">
              <p className="font-display text-5xl font-bold">+5</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-background/70">Core offerings</p>
            </div>
            <div className="rounded-[2rem] bg-primary p-6 text-primary-foreground">
              <p className="font-display text-5xl font-bold italic">Bold.</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-primary-foreground/80">Brand-first</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">— Our services</p>
              <h2 className="mt-4 font-display text-6xl font-bold leading-[0.95] md:text-7xl">
                What we <span className="italic text-accent">make.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Our offerings range from digital marketing, brand strategy to copywriting, website development, video production and more.
              </p>
            </div>
            <CtaButton hash="contact">Start a project</CtaButton>
          </div>

          <div className="mt-14 grid grid-cols-12 gap-4">
            {services.map((s, i) => {
              const layouts = [
                "col-span-12 md:col-span-7 bg-foreground text-background",
                "col-span-12 md:col-span-5 bg-primary text-primary-foreground",
                "col-span-12 md:col-span-4 bg-card border border-foreground/15",
                "col-span-12 md:col-span-4 bg-secondary text-secondary-foreground",
                "col-span-12 md:col-span-4 bg-accent text-accent-foreground",
              ];
              return (
                <article
                  key={s.title}
                  className={`group relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 transition-transform hover:-translate-y-1 ${layouts[i]}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-display text-2xl font-bold opacity-80">/{s.tag}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-current/30 transition-transform group-hover:rotate-45">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm opacity-75">{s.note}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">— The Journal</p>
              <h2 className="mt-4 font-display text-6xl font-bold leading-[0.95] md:text-7xl">
                Notes from <span className="italic text-accent">the studio.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              Short reads on branding, discoverability and digital strategy for brands that want to be chosen — not just seen.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-12 gap-4">
            {/* Blog 1 — featured */}
            <Link
              to="/blog/marketing-vs-advertising"
              className="group col-span-12 grid grid-cols-12 gap-0 overflow-hidden rounded-[2rem] border border-foreground/15 bg-card md:col-span-8"
            >
              <div className="col-span-12 overflow-hidden md:col-span-6">
                <img src={blogMarketing} alt="Marketing letter blocks and 3D shopping cart" loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="col-span-12 flex flex-col justify-between gap-6 p-8 md:col-span-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-primary">Journal · 01</span>
                <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                  Marketing <span className="italic">vs</span> <br /> Advertising<span className="text-primary">.</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  One of the biggest reasons brands stay stuck is they confuse visibility with strategy. Running ads is not marketing.
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-primary">
                  Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
              </div>
            </Link>

            {/* Blog 2 */}
            <Link
              to="/blog/social-vs-seo-discovery"
              className="group col-span-12 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-secondary p-8 text-secondary-foreground md:col-span-4"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary-foreground/70">Journal · 02</span>
                <h3 className="mt-6 font-display text-3xl font-bold leading-tight md:text-4xl">
                  Is social media taking over <span className="italic text-primary">SEO discovery?</span>
                </h3>
                <p className="mt-5 text-sm text-secondary-foreground/80">
                  Discovery doesn't begin with Google anymore. Search behaviour has changed — and your brand needs to change with it.
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:text-primary">
                  Read more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </span>
                <img src={blogDiscovery} alt="Close-up eye" loading="lazy" className="h-16 w-16 rounded-2xl object-cover" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4">
          <div className="col-span-12 overflow-hidden rounded-[2.5rem] bg-primary p-10 text-primary-foreground md:col-span-7 md:p-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">— Contact us</p>
            <h2 className="mt-6 font-display text-6xl font-bold leading-[0.92] md:text-8xl">
              Let us make <br /> your socials <br /><span className="italic">stand out!</span>
            </h2>
            <div className="mt-10">
              <a href="mailto:creativeshismind@gmail.com" className="inline-flex items-center gap-3 rounded-full bg-background px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground hover:bg-foreground hover:text-background">
                Start the conversation
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-4 md:col-span-5">
            <div className="col-span-2 rounded-[2.5rem] border border-foreground/15 bg-card p-8">
              <Mail className="h-5 w-5 text-primary" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Email</p>
              <a href="mailto:creativeshismind@gmail.com" className="mt-2 block break-all font-display text-xl font-semibold text-foreground hover:text-primary md:text-2xl">
                creativeshismind@gmail.com
              </a>
            </div>
            <div className="rounded-[2.5rem] border border-foreground/15 bg-card p-8">
              <Phone className="h-5 w-5 text-primary" />
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Phone</p>
              <p className="mt-2 font-display text-lg font-semibold text-foreground">(+254) 140-276-578</p>
            </div>
            <div className="flex flex-col justify-between rounded-[2.5rem] bg-foreground p-8 text-background">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background/60">Follow</p>
              <div className="mt-6 flex items-center gap-2">
                {[Linkedin, Facebook, Instagram].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-full border border-background/30 hover:border-primary hover:bg-primary hover:text-primary-foreground">
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

