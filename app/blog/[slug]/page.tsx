import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, BlogSection } from "@/lib/site-data";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/structured-data";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: post.title,
    description: `${post.excerpt} Guía práctica publicada por JVSEO Agency, agencia digital en Madrid especializada en web, apps y automatización IA.`,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      publishedTime: post.datePublished ?? "2025-11-13",
      authors: ["JVSEO Agency"]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug);

  return (
    <main className="relative">
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={post.datePublished ?? "2025-11-13"}
        authorName={siteConfig.authors[0]?.name ?? siteConfig.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title }
        ]}
      />
      <PageHero
        eyebrow={`${post.category} · ${post.readingMinutes} min de lectura`}
        title={post.title}
        subtitle={post.excerpt}
      />

      <article className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.category }
          ]}
        />

        <AppleReveal>
          <div className="my-12 space-y-6 text-lg leading-relaxed text-slate-200 md:my-16 md:text-xl">
            <p className="first-letter:text-7xl first-letter:font-semibold first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.9]">
              {post.content}
            </p>
          </div>
        </AppleReveal>

        {post.sections && post.sections.length > 0 && (
          <div className="space-y-14 pb-4">
            {post.sections.map((section: BlogSection, idx: number) => (
              <AppleReveal key={idx} delay={idx * 0.04}>
                <section>
                  <h2 className="text-2xl font-semibold leading-snug text-white md:text-3xl">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-300">
                    {section.body}
                  </p>
                </section>
              </AppleReveal>
            ))}
          </div>
        )}

        <AppleReveal>
          <aside className="my-12 grid gap-3 rounded-3xl border border-white/12 bg-slate-900/55 p-7 backdrop-blur-md md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Idea clave</p>
            <p className="text-balance text-2xl font-semibold leading-snug text-white md:text-3xl">
              {post.excerpt}
            </p>
          </aside>
        </AppleReveal>
      </article>

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Sigue leyendo</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Otros artículos para aplicar en tu negocio.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {related.map((item, index) => (
              <AppleReveal key={item.slug} delay={index * 0.08}>
                <a
                  href={`/blog/${item.slug}`}
                  className="interactive-lift group block h-full rounded-3xl border border-white/12 bg-slate-900/55 p-7 backdrop-blur-md md:p-9"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] text-sky-200/85 md:text-xs">
                    {item.category} · {item.readingMinutes} min
                  </p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300 md:text-lg">{item.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sky-100 transition-transform group-hover:translate-x-1">
                    Leer →
                  </span>
                </a>
              </AppleReveal>
            ))}
          </div>
        </section>

        <PageCTA
          eyebrow="Aplícalo en tu web"
          title="Te ayudamos a llevarlo"
          highlight="a la práctica."
          description="Si quieres pasar de leer a ejecutar, te enviamos auditoría gratuita y plan de acción personalizado."
          primaryLabel="Solicitar auditoría"
          primaryHref="/contacto"
          secondaryLabel="Volver al blog"
          secondaryHref="/blog"
        />
      </div>
    </main>
  );
}
