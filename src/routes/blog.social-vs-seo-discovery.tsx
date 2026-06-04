import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { CtaButton } from "@/components/cta-button";
import blogDiscovery from "@/assets/blog-discovery.jpg";
import { socialLinks } from "@/lib/social-links";

export const Route = createFileRoute("/blog/social-vs-seo-discovery")({
  head: () => ({
    meta: [
      { title: "Is social media taking over discovery? — HisMind Creatives" },
      { name: "description", content: "Discovery doesn't begin with Google anymore. How search behaviour has shifted to social, and what brands must do about it." },
      { property: "og:title", content: "Is social media taking over discovery? — HisMind Creatives" },
      { property: "og:description", content: "The rules of discoverability have changed. Build content for searches, not just feeds." },
      { property: "og:image", content: "/og-discovery.jpg" },
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
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-primary">Journal · No. 02</p>
          <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-8xl">
            Is social media taking over <span className="italic gold-text">discovery?</span>
          </h1>
        </header>

        <div className="mt-12 overflow-hidden border border-primary/15">
          <img src={blogDiscovery} alt="Close-up eye with colorful reflection" width={1280} height={896} className="aspect-[16/10] w-full object-cover" />
        </div>

        <div className="mt-14 space-y-6 text-lg leading-relaxed text-foreground/80">
          <p>It&rsquo;s already happening! Discovery doesn&rsquo;t begin with google anymore.</p>
          <p>Search behaviour has changed.</p>
          <p>According to recent social research, <span className="font-semibold text-primary">41% of users</span> now start product discovery on social platforms rather than traditional search engines. Even more telling, <span className="font-semibold text-primary">76% of consumers</span> say content they discovered on socials influenced a purchase decision within the last six months.</p>
          <p>This is the shift many businesses are missing.</p>
          <p>Your audience is no longer defaulting to Google when they need answers.</p>
          <p>They are opening social media to search for product reviews, discover where to eat and relying on short-form content to decide who feels credible enough to trust.</p>
          <p>Google itself has acknowledged this behavioural change, adapting search to surface more short-form video and user-generated content in response to evolving search habits (Search Engine Journal).</p>
          <p>That should tell brands everything they need to know.</p>

          <blockquote className="my-12 border-l-2 border-primary py-2 pl-8 font-display text-4xl italic leading-snug gold-text md:text-5xl">
            The rules of discoverability have changed.
          </blockquote>

          <p>Content is no longer just about reach, it&rsquo;s about searchability.</p>
          <p>If your content is not structured around how people actively search, ask questions and make decisions inside these platforms, your brand becomes invisible at the exact moment buying intent exists and invisibility is quite expensive.</p>
          <p>The smarter brands are creating content to answer searches.</p>
          <p>That difference is what determines who gets ignored and who gets chosen.</p>
          <p>This is why content strategy can no longer be driven by aesthetics alone, it must be built around discoverability, relevance and search intent.</p>
          <p>The brands winning today understand one thing: visibility is no longer about showing up in feeds, it&rsquo;s about showing up in searches.</p>
        </div>

        <div className="mt-20 border border-primary/30 p-10 text-center md:p-14">
          <p className="font-display text-2xl italic text-foreground md:text-3xl">
            We help brands build content around the way people actually discover, evaluate and choose today.
          </p>
          <p className="mt-4 text-base text-foreground/65">
            If your brand is still creating content for likes instead of discovery, let us help you out!
          </p>
          <div className="mt-10 flex justify-center">
            <CtaButton href="mailto:creativeshismind@gmail.com">Reach out</CtaButton>
          </div>
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
