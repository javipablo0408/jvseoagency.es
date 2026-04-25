import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/site-data";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BreadcrumbJsonLd } from "@/components/structured-data";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const item = caseStudies.find((entry) => entry.slug === params.slug);
  if (!item) return { title: "Caso no encontrado" };
  return {
    title: `${item.title} | Caso de éxito · JVSEO Agency Madrid`,
    description: `${item.result} Caso real de ${item.category.toLowerCase()} ejecutado por JVSEO Agency, agencia digital en Madrid especializada en web, apps y automatización IA.`,
    alternates: { canonical: `/casos/${item.slug}` }
  };
}

const sections: Array<{ key: "challenge" | "solution" | "result"; label: string; eyebrow: string }> = [
  { key: "challenge", label: "El reto", eyebrow: "01" },
  { key: "solution", label: "La solución", eyebrow: "02" },
  { key: "result", label: "El resultado", eyebrow: "03" }
];

export default function CasoDetallePage({ params }: Props) {
  const item = caseStudies.find((entry) => entry.slug === params.slug);
  if (!item) notFound();

  const otherCases = caseStudies.filter((entry) => entry.slug !== item.slug);

  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Casos", url: "/casos" },
          { name: item.title }
        ]}
      />
      <PageHero
        eyebrow={`${item.category} · Madrid`}
        title={item.title.split(":")[0]}
        highlight={item.title.includes(":") ? item.title.split(":").slice(1).join(":").trim() : undefined}
        subtitle={item.result}
        meta={[item.sector, `${item.metric} ${item.metricLabel.toLowerCase()}`]}
      />

      <div className="mx-auto w-full max-w-5xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Casos", href: "/casos" },
            { label: item.sector }
          ]}
        />

        <section className="my-16 grid gap-6 md:my-20">
          {sections.map((section, index) => (
            <AppleReveal key={section.key} delay={index * 0.08}>
              <article className="glass-strong interactive-lift relative overflow-hidden rounded-3xl p-8 md:p-12">
                <div className="pointer-events-none absolute right-6 top-6 text-[120px] font-semibold leading-none text-white/5 md:text-[180px]">
                  {section.eyebrow}
                </div>
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">
                    {section.label}
                  </p>
                  <p className="mt-5 max-w-3xl text-balance text-xl font-semibold leading-snug text-white md:text-3xl">
                    {item[section.key]}
                  </p>
                </div>
              </article>
            </AppleReveal>
          ))}
        </section>

        <AppleReveal>
          <section className="relative my-20 overflow-hidden rounded-[36px] border border-white/12 p-10 md:p-14" style={{ background: item.accent }}>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.4),transparent_60%)]" />
            <div className="relative grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/85">{item.metricLabel}</p>
                <p className="mt-3 text-7xl font-semibold leading-none text-white md:text-9xl">
                  {item.metric}
                </p>
              </div>
              <p className="text-base text-white/90 md:text-xl">
                Este es el dato que más movió la aguja en el proyecto. Más allá de la métrica,
                cambió la forma de operar del equipo y cómo percibían sus clientes el servicio.
              </p>
            </div>
          </section>
        </AppleReveal>

        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Otros casos</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Cómo hemos resuelto retos parecidos en otros sectores.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {otherCases.map((other, index) => (
              <AppleReveal key={other.slug} delay={index * 0.08}>
                <a
                  href={`/casos/${other.slug}`}
                  className="interactive-lift group relative block overflow-hidden rounded-3xl border border-white/12 p-7 md:p-9"
                  style={{ background: other.accent }}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.35),transparent_55%)]" />
                  <div className="relative">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/85 md:text-xs">
                      {other.category} · {other.sector}
                    </p>
                    <h3 className="mt-4 text-xl font-semibold leading-tight text-white md:text-2xl">
                      {other.title}
                    </h3>
                    <p className="mt-4 text-3xl font-semibold text-white md:text-4xl">
                      {other.metric}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/85 transition-transform group-hover:translate-x-1">
                      Ver caso →
                    </span>
                  </div>
                </a>
              </AppleReveal>
            ))}
          </div>
        </section>

        <PageCTA
          eyebrow="Tu proyecto"
          title="¿Te interesa un proyecto"
          highlight="parecido?"
          description="Te enviamos propuesta con alcance, fases y retorno estimado en menos de 24 h laborables."
          primaryLabel="Solicitar propuesta"
          primaryHref="/contacto"
          secondaryLabel="Ver más casos"
          secondaryHref="/casos"
        />
      </div>
    </main>
  );
}
