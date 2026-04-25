import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Precios · Diseño web, apps y automatización IA en Madrid",
  description:
    "Precios orientativos desde 500€ para webs, apps y automatizaciones IA en Madrid. Presupuesto cerrado y propuesta en 24h sin compromiso.",
  alternates: { canonical: "/precios" }
};

const services = [
  {
    name: "Web Corporativa",
    from: "Desde 800€",
    href: "/servicios/diseno-web",
    accent: "linear-gradient(140deg, #082345 0%, #1956b6 55%, #29c6ff 100%)"
  },
  {
    name: "eCommerce",
    from: "Desde 1.500€",
    href: "/servicios/diseno-web",
    accent: "linear-gradient(140deg, #1a0a3d 0%, #4f23a8 55%, #c47bff 100%)"
  },
  {
    name: "App a Medida",
    from: "Desde 3.000€",
    href: "/servicios/desarrollo-apps",
    accent: "linear-gradient(140deg, #08213a 0%, #074f6d 55%, #18b3a4 100%)"
  },
  {
    name: "Automatización IA",
    from: "Desde 500€",
    href: "/servicios/automatizacion-ia",
    accent: "linear-gradient(140deg, #0e1a12 0%, #0f5e3e 55%, #35d48e 100%)"
  }
];

export default function PreciosPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", url: "/" }, { name: "Precios" }]}
      />
      <ServiceJsonLd
        name="Precios de diseño web, apps y automatización IA en Madrid"
        description="Precios desde 500€ para webs, apps y automatizaciones IA en Madrid. Presupuesto cerrado y propuesta en 24h."
        url="/precios"
        serviceType="Digital Agency Services"
      />

      <PageHero
        eyebrow="Precios · Madrid"
        title="Presupuesto cerrado."
        highlight="Sin sorpresas."
        subtitle="Precios orientativos. Cuéntanos tu proyecto y te enviamos propuesta detallada en menos de 24h."
        meta={["Web", "eCommerce", "Apps", "Automatización IA"]}
      />

      <div className="mx-auto w-full max-w-4xl px-6 md:px-10">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Precios" }]}
        />

        <p className="sr-only">
          JVSEO Agency ofrece precios desde 500€ para automatizaciones IA, desde 800€ para webs corporativas, desde 1.500€ para ecommerce y desde 3.000€ para apps a medida en Madrid.
        </p>

        <div className="my-16 grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => (
            <AppleReveal key={s.name} delay={i * 0.07}>
              <div
                className="interactive-lift relative overflow-hidden rounded-3xl border border-white/10 p-10 md:p-12"
                style={{ background: s.accent }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.35),transparent_55%)]" />
                <div className="relative">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-white/60">{s.name}</p>
                  <p className="mt-3 text-4xl font-semibold text-white md:text-5xl">{s.from}</p>
                </div>
              </div>
            </AppleReveal>
          ))}
        </div>

        {/* Lead capture CTA */}
        <AppleReveal>
          <section className="my-16 overflow-hidden rounded-3xl border border-white/10 bg-white/4 p-10 text-center backdrop-blur-sm md:p-16">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/80">Presupuesto en 24h</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-4xl">
              ¿Cuánto cuesta tu proyecto?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-400">
              Cuéntanos qué necesitas y te enviamos propuesta con precio cerrado antes de 24 horas laborables. Sin compromiso.
            </p>
            <a
              href="/contacto"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-105"
            >
              Pedir presupuesto gratis →
            </a>
          </section>
        </AppleReveal>
      </div>
    </main>
  );
}
