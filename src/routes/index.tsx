import { createFileRoute } from "@tanstack/react-router";
import { Plus, Instagram, Facebook, Linkedin } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaButton } from "@/components/cta-button";
import hero3d from "@/assets/hero-3d.jpg";
import aboutDoodle from "@/assets/about-doodle.jpg";
import blogMarketing from "@/assets/blog-marketing.jpg";
import blogDiscovery from "@/assets/blog-discovery.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const services = [
  { title: "Brand strategy", tag: "01" },
  { title: "Digital marketing", tag: "02" },
  { title: "Content development / Copywriting", tag: "03" },
  { title: "Intergrated Campaigns", tag: "04" },
  { title: "Web design", tag: "05" },
];

function Index() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-bg)" }}>
      <SiteNav />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center md:px-12">
        <img
          src={hero3d}
          alt="Abstract 3D floating shapes"
          width={640}
          height={640}
          className="pointer-events-none mx-auto h-[300px] w-[300px] object-contain drop-shadow-[0_30px_60px_oklch(0.7_0.2_250/0.4)] md:h-[420px] md:w-[420px]"
        />
        <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-7xl lg:text-8xl">
          <span className="text-foreground">HisMind</span>
          <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">Creatives</span>
        </h1>
        <p className="mt-4 text-sm font-light uppercase tracking-[0.32em] text-muted-foreground md:text-base">
          Digital Presence &amp; Strategy
        </p>
        <div className="mt-10">
          <CtaButton hash="about">Read More</CtaButton>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 md:gap-20">
          <div className="overflow-hidden rounded-3xl border border-border/40 bg-card/40 p-2">
            <img src={aboutDoodle} alt="Innovation doodles" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-2xl object-cover" />
          </div>
          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              <span className="text-foreground">About </span>
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">us</span>
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Since its founding, His Mind Creatives has been the go-to company for structured digital presence and content strategy needs.
              </p>
              <p>
                We help growing brands transform ideas, products and initiatives into clear and engaging digital communication. Through strategy, design, content and storytelling, we help drive business growth and revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="text-5xl font-semibold tracking-tight md:text-6xl">
              <span className="text-foreground">Our </span>
              <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">services</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Our offerings range from digital marketing, brand strategy to copywriting, website development, video production and more.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article
                key={s.title}
                className="group relative flex h-64 flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-card/60 p-7 backdrop-blur transition-all hover:border-primary/60 hover:shadow-[var(--shadow-glow)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.tag}</span>
                  <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 text-foreground transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground" aria-label="More">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <div className="mb-4 h-12 w-12 rounded-2xl bg-[image:var(--gradient-brand)] opacity-90" />
                  <h3 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                    {s.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl space-y-20">
          {/* Blog 1 */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="overflow-hidden rounded-3xl border border-border/40">
              <img src={blogMarketing} alt="Marketing letter blocks and 3D shopping cart" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.22em] text-primary">Journal — 01</span>
              <h3 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                <span className="text-foreground">Marketing vs </span>
                <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">Advertising</span>
              </h3>
              <p className="mt-5 text-muted-foreground">
                One of the biggest reasons brands stay stuck is they confuse visibility with strategy. Running ads is not marketing.
              </p>
              <div className="mt-8">
                <CtaButton to="/blog/marketing-vs-advertising">Read More</CtaButton>
              </div>
            </div>
          </div>

          {/* Blog 2 */}
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div className="order-2 md:order-1">
              <span className="text-xs uppercase tracking-[0.22em] text-primary">Journal — 02</span>
              <h3 className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                <span className="text-foreground">Is social media taking over SEO </span>
                <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">discovery?</span>
              </h3>
              <p className="mt-5 text-muted-foreground">
                Discovery doesn't begin with Google anymore. Search behaviour has changed — and your brand needs to change with it.
              </p>
              <div className="mt-8">
                <CtaButton to="/blog/social-vs-seo-discovery">Read More</CtaButton>
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-3xl border border-border/40 md:order-2">
              <img src={blogDiscovery} alt="Close-up eye with colorful reflection" loading="lazy" width={1280} height={896} className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border/50 bg-card/50 p-10 text-center backdrop-blur md:p-20">
          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            <span className="text-foreground">Contact </span>
            <span className="bg-[image:var(--gradient-brand)] bg-clip-text text-transparent">us</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Let us make your socials stand out!</p>

          <div className="mt-12 grid gap-8 text-left md:grid-cols-2">
            <div className="rounded-2xl border border-border/40 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Phone</p>
              <p className="mt-3 text-xl font-medium text-foreground">(+254) 140-276-578</p>
            </div>
            <div className="rounded-2xl border border-border/40 p-6">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</p>
              <a href="mailto:creativeshismind@gmail.com" className="mt-3 block break-all text-xl font-medium text-foreground hover:text-primary">
                CREATIVESHISMIND@GMAIL.COM
              </a>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-center gap-5">
            <a href="#" aria-label="LinkedIn" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"><Linkedin className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

