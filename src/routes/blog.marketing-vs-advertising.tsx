import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Instagram, Facebook, Linkedin } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import marketingCreative from "@/assets/marketing-creative.png";

export const Route = createFileRoute("/blog/marketing-vs-advertising")({
  head: () => ({
    meta: [
      { title: "Marketing vs Advertising — HisMind Creatives" },
      {
        name: "description",
        content:
          "What's the difference between marketing and advertising? A look at strategy, story and the work that happens under the surface.",
      },
      { property: "og:title", content: "Marketing vs Advertising — HisMind Creatives" },
      {
        property: "og:description",
        content: "Strategy builds the house. Advertising paints the walls.",
      },
      { property: "og:image", content: "/og-marketing.jpg" },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <div className="min-h-screen" style={{ background: "var(--gradient-bg)" }}>
      <SiteNav />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-16 md:px-6 md:pt-24">
        <Link
          to="/"
          hash="blogs"
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
        </Link>

        <header className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
            Journal · 01
          </p>
          <h1 className="mt-4 font-display text-6xl font-bold leading-[0.95] md:text-7xl">
            Marketing <span className="italic text-accent">vs</span> Advertising
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-6 text-xl font-light text-muted-foreground">
            What&rsquo;s The Difference?
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-foreground/15 bg-card">
          <img
            src={marketingCreative}
            alt="3D marketing strategy scene with a shopping cart and growth visuals"
            width={1498}
            height={1050}
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
          <p>
            One of the biggest reasons brands stay stuck is they confuse visibility with strategy.
          </p>
          <p>Running ads is not marketing.</p>
          <p>
            Boosting posts, paying for placements and putting your product in front of people might
            get attention for a moment, but attention without strategy is just a post dressed up as
            progress.
          </p>
          <p>
            Marketing starts in the questions most businesses skip: Who are we speaking to? What
            problem are we solving? Why should anyone care? What makes us impossible to ignore in a
            crowded market?
          </p>
          <p>
            It&rsquo;s in the research that reveals what your audience actually wants, the
            positioning that makes your brand memorable and the story your brand tells long before
            anyone sees an ad.
          </p>
          <p>Advertising is simply what gives your story a louder microphone.</p>

          <blockquote className="my-10 rounded-[2rem] bg-foreground p-8 font-display text-2xl font-semibold italic leading-snug text-background md:text-3xl">
            Think of it like this: if marketing is the strategy that builds the house, advertising
            is the paint on the walls.{" "}
            <span className="text-primary">
              No amount of fresh paint can fix a weak foundation.
            </span>
          </blockquote>

          <p>The brands winning today understand this.</p>
          <p>
            They are not obsessed with simply being seen, they are intentional about being
            understood, remembered and trusted.
          </p>
          <p>That is the difference.</p>
          <p>Great marketing creates meaning.</p>
          <p>Advertising only amplifies what is already there.</p>
          <p>
            So the next time you come across an ad, remember this: what you are seeing is only the
            surface.
          </p>
          <p>The real work is everything happening underneath it.</p>
          <p className="pt-6 text-muted-foreground">
            Want more insights on building brands that do more than just look visible?
          </p>
          <p className="text-muted-foreground">
            Check out our socials for practical branding tips.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-end gap-4">
          <a
            href="#"
            aria-label="Instagram"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"
          >
            <Facebook className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 text-foreground hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
