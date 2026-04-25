import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, BlogSection } from "@/lib/site-data";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
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

const categoryColor: Record<string, string> = {
  Web: "bg-sky-500/15 text-sky-300 border-sky-400/30",
  Automatización: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-400/30",
  Producto: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30"
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" });
}

/** Detecta si un párrafo contiene un dato o porcentaje destacable */
function extractStat(body: string): string | null {
  const match = body.match(/(\d[\d.,]+\s*%|\d[\d.,]+\s*€|\d+\s*(?:horas?|semanas?|meses?|minutos?|días?))/i);
  return match ? match[0] : null;
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 4);
  const hasSections = post.sections && post.sections.length > 0;
  const publishedDate = post.datePublished ?? "2025-11-13";
  const catClass = categoryColor[post.category] ?? "bg-sky-500/15 text-sky-300 border-sky-400/30";

  return (
    <main className="relative">
      <ArticleJsonLd
        headline={post.title}
        description={post.excerpt}
        url={`/blog/${post.slug}`}
        datePublished={publishedDate}
        authorName={siteConfig.authors[0]?.name ?? siteConfig.name}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title }
        ]}
      />

      {/* ── HERO DEL ARTÍCULO ─────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent_70%)]" />
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <AppleReveal>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.18em] ${catClass}`}>
                {post.category}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                {post.readingMinutes} min de lectura
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-white/50">
                {formatDate(publishedDate)}
              </span>
            </div>
          </AppleReveal>

          <AppleReveal delay={0.06}>
            <h1 className="mt-8 text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
              {post.title}
            </h1>
          </AppleReveal>

          <AppleReveal delay={0.1}>
            <p className="mt-5 text-lg leading-relaxed text-slate-300 md:text-xl">
              {post.excerpt}
            </p>
          </AppleReveal>

          {/* Tabla de contenidos */}
          {hasSections && (
            <AppleReveal delay={0.14}>
              <nav className="mt-10 rounded-2xl border border-white/10 bg-white/4 p-6 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/50 mb-4">En este artículo</p>
                <ol className="space-y-2">
                  {post.sections!.map((s, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="shrink-0 text-[11px] font-mono text-white/30">{String(i + 1).padStart(2, "0")}</span>
                      <a
                        href={`#section-${i}`}
                        className="text-sm text-slate-300 hover:text-white transition-colors leading-snug"
                      >
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </AppleReveal>
          )}
        </div>
      </div>

      {/* ── CUERPO DEL ARTÍCULO ───────────────────────────────────── */}
      <article className="mx-auto w-full max-w-3xl px-6 pb-4 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.category }
          ]}
        />

        {/* Párrafo de apertura con drop-cap */}
        <AppleReveal>
          <p className="my-12 text-lg leading-relaxed text-slate-200 md:my-16 md:text-xl first-letter:text-7xl first-letter:font-semibold first-letter:text-white first-letter:mr-3 first-letter:float-left first-letter:leading-[0.9]">
            {post.content}
          </p>
        </AppleReveal>

        {/* Secciones */}
        {hasSections && (
          <div className="space-y-16 pb-4">
            {post.sections!.map((section: BlogSection, idx: number) => {
              const stat = extractStat(section.body);
              const isInlineCta = idx === 2; // CTA inline después de la 3ª sección

              return (
                <div key={idx}>
                  <AppleReveal delay={idx * 0.04}>
                    <section id={`section-${idx}`} className="scroll-mt-24">
                      {/* Número de sección */}
                      <div className="flex items-center gap-4 mb-5">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/6 text-[11px] font-mono text-white/40">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="h-px flex-1 bg-white/8" />
                      </div>

                      <h2 className="text-2xl font-semibold leading-snug text-white md:text-[1.75rem]">
                        {section.heading}
                      </h2>
                      <p className="mt-5 text-lg leading-relaxed text-slate-300">
                        {section.body}
                      </p>

                      {/* Caja de stat destacado */}
                      {stat && (
                        <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-5 py-3 backdrop-blur-sm">
                          <span className="text-2xl font-bold text-white">{stat}</span>
                          <span className="text-sm text-white/55">dato clave</span>
                        </div>
                      )}
                    </section>
                  </AppleReveal>

                  {/* CTA inline a mitad del artículo */}
                  {isInlineCta && (
                    <AppleReveal delay={0.06}>
                      <div className="my-12 rounded-3xl border border-indigo-400/25 bg-indigo-500/8 p-8 md:p-10">
                        <p className="text-[11px] uppercase tracking-[0.22em] text-indigo-300/80">JVSEO Agency · Madrid</p>
                        <p className="mt-3 text-xl font-semibold text-white leading-snug md:text-2xl">
                          ¿Quieres aplicar esto en tu negocio?
                        </p>
                        <p className="mt-2 text-slate-300">
                          Te enviamos auditoría gratuita y plan de acción personalizado en 24h.
                        </p>
                        <a
                          href="/contacto"
                          className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-105"
                        >
                          Solicitar auditoría gratuita →
                        </a>
                      </div>
                    </AppleReveal>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Caja de idea clave final */}
        <AppleReveal>
          <aside className="my-16 rounded-3xl border border-white/12 bg-slate-900/55 p-7 backdrop-blur-md md:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Idea clave</p>
            <p className="mt-4 text-balance text-xl font-semibold leading-snug text-white md:text-2xl">
              {post.excerpt}
            </p>
            <a
              href="/contacto"
              className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-sky-300 hover:text-white transition-colors"
            >
              Habla con nosotros →
            </a>
          </aside>
        </AppleReveal>

        {/* Autor */}
        <AppleReveal>
          <div className="mb-16 flex items-center gap-4 border-t border-white/8 pt-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 text-sm font-bold text-white">
              JV
            </div>
            <div>
              <p className="text-sm font-medium text-white">JVSEO Agency</p>
              <p className="text-xs text-white/45">Agencia digital · Madrid · Publicado el {formatDate(publishedDate)}</p>
            </div>
          </div>
        </AppleReveal>
      </article>

      {/* ── ARTÍCULOS RELACIONADOS + CTA ──────────────────────────── */}
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
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full border px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] ${categoryColor[item.category] ?? "bg-sky-500/15 text-sky-300 border-sky-400/30"}`}>
                      {item.category}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/40">
                      {item.readingMinutes} min
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-white md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300 md:text-base line-clamp-2">{item.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-sky-100 transition-transform group-hover:translate-x-1">
                    Leer →
                  </span>
                </a>
              </AppleReveal>
            ))}
          </div>
        </section>

        <PageCTA
          eyebrow="Aplícalo en tu negocio"
          title="Pasamos de la teoría"
          highlight="a resultados reales."
          description="Auditoría gratuita de tu web, proceso o idea de automatización. Te enviamos un plan de acción en 24h sin compromiso."
          primaryLabel="Solicitar auditoría gratuita"
          primaryHref="/contacto"
          secondaryLabel="Volver al blog"
          secondaryHref="/blog"
        />
      </div>
    </main>
  );
}
