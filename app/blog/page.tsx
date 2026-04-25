import type { Metadata } from "next";
import { blogPosts } from "@/lib/site-data";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Blog de automatización IA, diseño web y apps en Madrid",
  description:
    "Guías prácticas sobre automatización IA, diseño web en Madrid, ecommerce y apps a medida. Aprende cómo reducir costes operativos y aumentar conversión con tecnología real. Publicado por JVSEO Agency.",
  alternates: { canonical: "/blog" }
};

const categoryAccent: Record<string, string> = {
  Web: "from-sky-400/30 to-cyan-300/20",
  "Automatización": "from-fuchsia-400/30 to-indigo-400/20",
  Producto: "from-emerald-400/25 to-teal-300/15"
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", url: "/" }, { name: "Blog" }]}
      />
      <PageHero
        eyebrow="Blog · Madrid"
        title="Ideas para vender más"
        highlight="y operar mejor."
        subtitle="Guías y reflexiones sobre web, automatización IA y aplicaciones, escritas desde la ejecución real."
        meta={["Web", "Automatización", "Producto"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Blog" }]} />

        <AppleReveal>
          <a
            href={`/blog/${featured.slug}`}
            className="interactive-lift group relative my-16 block overflow-hidden rounded-[36px] border border-white/12 p-10 md:my-20 md:p-16"
          >
            <div
              className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryAccent[featured.category] ?? "from-sky-400/25 to-indigo-400/15"} opacity-90`}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.45),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/85">
                  <span className="rounded-full border border-white/30 px-3 py-1">Destacado</span>
                  <span className="rounded-full border border-white/30 px-3 py-1">{featured.category}</span>
                  <span>{featured.readingMinutes} min de lectura</span>
                </div>
                <h2 className="mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight text-white md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">{featured.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/95 transition-transform group-hover:translate-x-1">
                  Leer artículo →
                </span>
              </div>
              <div className="relative hidden md:block">
                <div className="rounded-3xl border border-white/30 bg-white/10 p-8 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/85">
                    {featured.readingMinutes} min de lectura
                  </p>
                  <p className="mt-3 text-2xl font-semibold leading-tight text-white">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </AppleReveal>

        <section className="my-16 grid gap-6 md:my-20 md:grid-cols-2">
          {rest.map((post, index) => (
            <AppleReveal key={post.slug} delay={index * 0.08}>
              <a
                href={`/blog/${post.slug}`}
                className="interactive-lift group relative block h-full overflow-hidden rounded-3xl border border-white/12 p-8 md:p-10"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryAccent[post.category] ?? "from-sky-400/25 to-indigo-400/15"} opacity-70`}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.4),transparent_60%)]" />
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-white/85">
                    <span className="rounded-full border border-white/25 px-3 py-1">{post.category}</span>
                    <span>{post.readingMinutes} min de lectura</span>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {post.title}
                  </h2>
                  <p className="mt-4 text-base text-white/85 md:text-lg">{post.excerpt}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/95 transition-transform group-hover:translate-x-1">
                    Leer artículo →
                  </span>
                </div>
              </a>
            </AppleReveal>
          ))}
        </section>

        <PageCTA
          eyebrow="Suscríbete"
          title="¿Quieres más ideas"
          highlight="aplicables a tu negocio?"
          description="Te enviamos un email mensual con casos, ideas y aprendizajes útiles. Sin spam y sin paja."
          primaryLabel="Solicitar contenido"
          primaryHref="/contacto"
          secondaryLabel="Ver casos reales"
          secondaryHref="/casos"
        />
      </div>
    </main>
  );
}
