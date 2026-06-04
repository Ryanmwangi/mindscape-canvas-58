import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import blogMarketing from "@/assets/blog-marketing.jpg";
import { socialLinks } from "@/lib/social-links";

export const Route = createFileRoute("/blog/marketing-vs-advertising")({
  head: () => ({
    meta: [
      { title: "Marketing vs Advertising — HisMind Creatives" },
      { name: "description", content: "What's the difference between marketing and advertising? A look at strategy, story and the work that happens under the surface." },
      { property: "og:title", content: "Marketing vs Advertising — HisMind Creatives" },
      { property: "og:description", content: "Strategy builds the house. Advertising paints the walls." },
      { property: "og:image", content: "/og-marketing.jpg" },
    ],
  }),
  component: Article,
});

function Article() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />

      <article className="mx-auto max-w-3xl px-6 pb-32 pt-16 md:pt-24">
        <Link to="/" hash="blogs" className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.32em] text-foreground/60 hover:text-primary">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to blogs
        </Link>

        <header className="mt-8">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">Journal · No. 01</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
            Marketing <span className="italic gold-text">vs</span> Advertising<span className="text-primary">.</span>
          </h1>
          <p className="mt-8 font-display text-2xl italic text-foreground/70">What&rsquo;s The Difference?</p>
        </header>

        <div className="mt-12 overflow-hidden border border-primary/15">
          <img src={blogMarketing} alt="Marketing letter blocks and 3D shopping cart" width={1280} height={896} className="aspect-[16/10] w-full object-cover" />
        </div>

        <div className="mt-14 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>One of the biggest reasons brands stay stuck is they confuse visibility with strategy.</p>
          <p>Running ads is not marketing.</p>
          <p>Boosting posts, paying for placements and putting your product in front of people might get attention for a moment, but attention without strategy is just a post dressed up as progress.</p>
          <p>Marketing starts in the questions most businesses skip: Who are we speaking to? What problem are we solving? Why should anyone care? What makes us impossible to ignore in a crowded market?</p>
          <p>It&rsquo;s in the research that reveals what your audience actually wants, the positioning that makes your brand memorable and the story your brand tells long before anyone sees an ad.</p>
          <p>Advertising is simply what gives your story a louder microphone.</p>

          <blockquote className="my-12 border-l-2 border-primary py-2 pl-8 font-display text-3xl italic leading-snug text-foreground md:text-4xl">
            Think of it like this: if marketing is the strategy that builds the house, advertising is the paint on the walls. <span className="gold-text">No amount of fresh paint can fix a weak foundation.</span>
          </blockquote>

          <p>The brands winning today understand this.</p>
          <p>They are not obsessed with simply being seen, they are intentional about being understood, remembered and trusted.</p>
          <p>That is the difference.</p>
          <p>Great marketing creates meaning.</p>
          <p>Advertising only amplifies what is already there.</p>
          <p>So the next time you come across an ad, remember this: what you are seeing is only the surface.</p>
          <p>The real work is everything happening underneath it.</p>
          <p className="pt-6 text-foreground/60">Want more insights on building brands that do more than just look visible?</p>
          <p className="text-foreground/60">Check out our socials for practical branding tips.</p>
        </div>

        <div className="mt-16 flex items-center justify-end gap-3">
          {socialLinks.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center border border-foreground/20 text-foreground hover:border-primary hover:text-primary">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
