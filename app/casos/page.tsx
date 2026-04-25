import type { Metadata } from "next";
import { caseStudies } from "@/lib/site-data";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BigNumberReveal } from "@/components/big-number-reveal";
import { ScrollHighlightText } from "@/components/scroll-highlight-text";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Casos de éxito en automatización IA, web y apps · Madrid",
  description:
    "Casos reales de automatización IA, diseño web y apps a medida para empresas en Madrid y España. Reducción media del 60% en tareas operativas y +34% de conversión web. Proyectos con métricas reales.",
  alternates: { canonical: "/casos" }
};

export default function CasosPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", url: "/" }, { name: "Casos de éxito" }]}
      />
      <PageHero
        eyebrow="Casos reales · Madrid"
        title="Resultados, no"
        highlight="solo promesas."
        subtitle="Proyectos donde implementamos automatización IA, web orientada a venta o aplicaciones a medida con métricas medibles."
        meta={["Automatización IA", "Web", "Aplicación"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Casos" }]} />

        <section className="my-16 space-y-6 md:my-20">
          {caseStudies.map((item, index) => (
            <AppleReveal key={item.slug} delay={index * 0.06}>
              <a
                href={`/casos/${item.slug}`}
                className="interactive-lift group relative block overflow-hidden rounded-[32px] border border-white/12 p-8 md:p-12"
                style={{ background: item.accent }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.4),transparent_60%)]" />
                <div className="relative grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-end">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 text-xs font-semibold text-white">
                        0{index + 1}
                      </span>
                      <span className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/85 md:text-xs">
                        {item.category}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em] text-white/70 md:text-xs">
                        {item.sector}
                      </span>
                    </div>
                    <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                      {item.title}
                    </h2>
                    <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">{item.result}</p>
                    <span className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/90 transition-transform group-hover:translate-x-1">
                      Ver caso completo →
                    </span>
                  </div>
                  <div className="rounded-3xl border border-white/30 bg-white/10 p-6 backdrop-blur-sm md:p-8">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-white/85">
                      {item.metricLabel}
                    </p>
                    <p className="mt-3 text-6xl font-semibold leading-none text-white md:text-7xl">
                      {item.metric}
                    </p>
                  </div>
                </div>
              </a>
            </AppleReveal>
          ))}
        </section>
      </div>

      <ScrollHighlightText
        eyebrow="Cómo medimos el éxito"
        text="No entregamos píxeles: entregamos conversión, ahorro operativo y velocidad de ejecución medibles desde el primer día."
      />

      <BigNumberReveal
        eyebrow="Números que vemos repetir"
        heading="Las métricas que más se mueven en nuestros proyectos."
        metrics={[
          {
            value: "−60 %",
            label: "Tareas manuales",
            context: "Reducción media tras automatizar procesos comerciales y operativos."
          },
          {
            value: "+34 %",
            label: "Conversión web",
            context: "Mejora media en webs comerciales rediseñadas con foco en oferta."
          },
          {
            value: "2,1×",
            label: "Velocidad operativa",
            context: "Aceleración media en ejecución tras implantar una app a medida."
          }
        ]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <PageCTA
          eyebrow="Tu caso"
          title="El próximo caso de éxito"
          highlight="podría ser el tuyo."
          description="Cuéntanos dónde estás hoy y te enviamos propuesta con alcance, fases y retorno estimado."
          primaryLabel="Solicitar propuesta"
          primaryHref="/contacto"
          secondaryLabel="Ver servicios"
          secondaryHref="/servicios/diseno-web"
        />
      </div>
    </main>
  );
}
