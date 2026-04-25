import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Diseño web Barcelona · Agencia de desarrollo web profesional 2026",
  description:
    "Agencia de diseño web en Barcelona especializada en webs corporativas, ecommerce y apps a medida. Proyectos desde 1.500€, entrega en 4-6 semanas y SEO incluido. Presupuesto en 24h.",
  alternates: { canonical: "/servicios/diseno-web/barcelona" }
};

const faqs = [
  {
    question: "¿Trabajáis con empresas en Barcelona aunque seáis de Madrid?",
    answer:
      "Sí. Trabajamos con clientes en toda España de forma completamente remota. La comunicación es por videollamada, email y Notion. El 100% de los proyectos fuera de Madrid se gestionan así sin ningún problema. Si prefieres reunión presencial en Barcelona, coordinamos visita."
  },
  {
    question: "¿Cuánto cuesta una web corporativa en Barcelona?",
    answer:
      "Los precios son los mismos que en Madrid. Una web corporativa básica (5-8 páginas, SEO técnico, formulario) parte desde 800€. Una web completa con blog, casos y animaciones desde 2.000€. Consulta nuestra página de precios para el desglose completo."
  },
  {
    question: "¿Hacéis webs en catalán además de castellano?",
    answer:
      "Sí. Desarrollamos webs multiidioma con soporte completo para catalán, castellano e inglés. El contenido en catalán lo puedes proporcionar tú o te ayudamos con copywriting profesional en catalán."
  },
  {
    question: "¿Cuánto tarda un proyecto web para una empresa en Barcelona?",
    answer:
      "El plazo medio para una web corporativa es de 4 a 6 semanas desde la aprobación del diseño. Proyectos más complejos (ecommerce, multiidioma, integraciones) requieren entre 6 y 12 semanas."
  }
];

const services = [
  {
    title: "Web corporativa para empresas en Barcelona",
    description:
      "Diseñamos webs corporativas que convierten visitas en leads cualificados. Arquitectura de contenidos orientada a SEO local en Barcelona, diseño UI personalizado (sin plantillas) y rendimiento Core Web Vitals optimizado.",
    features: [
      "Diseño a medida, no plantillas",
      "SEO técnico para Barcelona y Cataluña",
      "Formularios con cualificación automática",
      "Velocidad de carga < 2s en móvil",
      "Schema markup para negocios locales"
    ],
    accent: "linear-gradient(140deg, #082345 0%, #1956b6 55%, #29c6ff 100%)"
  },
  {
    title: "eCommerce para tiendas en Barcelona",
    description:
      "Tiendas online con Next.js Commerce o WooCommerce optimizado para conversión. Integración con Stripe, Redsys (TPV virtual) y los principales operadores logísticos en España. Checkout en catalán y castellano.",
    features: [
      "Pasarela de pago Redsys / Stripe",
      "Checkout optimizado (< 2 pasos)",
      "Integración con agencias de transporte",
      "Gestión de stock y variantes",
      "Email de carrito abandonado"
    ],
    accent: "linear-gradient(140deg, #1a0a3d 0%, #4f23a8 55%, #c47bff 100%)"
  },
  {
    title: "Automatización IA para empresas en Barcelona",
    description:
      "Flujos automatizados con n8n y agentes IA para empresas en Barcelona. Cualificación de leads, respuesta automática en WhatsApp, reporting y sincronización de datos entre herramientas.",
    features: [
      "Cualificación automática de leads",
      "Chatbot WhatsApp Business",
      "Integración con CRM local",
      "Reporting automático",
      "ROI medio en 3-6 meses"
    ],
    accent: "linear-gradient(140deg, #0e1a12 0%, #0f5e3e 55%, #35d48e 100%)"
  }
];

export default function DisenoWebBarcelonaPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios/diseno-web" },
          { name: "Diseño web Barcelona" }
        ]}
      />
      <ServiceJsonLd
        name="Diseño web Barcelona · Agencia profesional"
        description="Agencia de diseño web en Barcelona especializada en webs corporativas, ecommerce y apps. Proyectos desde 1.500€, SEO incluido y presupuesto en 24h."
        url="/servicios/diseno-web/barcelona"
        serviceType="Web Design"
      />
      <FaqJsonLd items={faqs} />

      <PageHero
        eyebrow="Diseño Web · Barcelona"
        title="Webs que venden para"
        highlight="empresas en Barcelona."
        subtitle="Diseño y desarrollo web profesional para empresas en Barcelona. Webs corporativas, ecommerce y apps a medida con SEO, rendimiento y presupuesto cerrado."
        meta={["Barcelona", "Cataluña", "Presupuesto en 24h"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Diseño web", href: "/servicios/diseno-web" },
            { label: "Barcelona" }
          ]}
        />

        {/* GEO paragraph — local SEO */}
        <p className="sr-only">
          JVSEO Agency ofrece servicios de diseño web profesional en Barcelona y toda Cataluña. Somos una agencia de desarrollo web especializada en webs corporativas, tiendas online y apps a medida para empresas en Barcelona. Trabajamos en remoto con clientes en Barcelona desde Madrid, con proyectos desde 1.500€ y entrega en 4 a 6 semanas.
        </p>

        <section className="my-20 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <AppleReveal key={service.title} delay={i * 0.08}>
              <article
                className="interactive-lift relative h-full overflow-hidden rounded-3xl border border-white/10 p-8 md:p-10"
                style={{ background: service.accent }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.16),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.35),transparent_55%)]" />
                <div className="relative">
                  <h2 className="text-xl font-semibold leading-tight text-white md:text-2xl">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm text-white/80">{service.description}</p>
                  <ul className="mt-6 space-y-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/90">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/60" fill="none" viewBox="0 0 16 16">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </AppleReveal>
          ))}
        </section>

        {/* Why us in Barcelona */}
        <AppleReveal>
          <section className="my-20 grid gap-8 rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm md:grid-cols-2 md:items-center md:p-12">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Por qué elegirnos</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white md:text-4xl">
                Agencia de Madrid con clientes en Barcelona desde 2020.
              </h2>
              <p className="mt-4 text-slate-300">
                Trabajamos con empresas en Barcelona en remoto con el mismo proceso que usamos con clientes en Madrid: briefing por videollamada, diseño iterativo con feedback en cada fase, y entrega con documentación y soporte incluido.
              </p>
              <a
                href="/sobre-nosotros"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-sky-300 hover:text-white transition-colors"
              >
                Conocer el equipo →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["4-6 sem", "Tiempo medio de entrega"],
                ["24h", "Para enviarte presupuesto"],
                ["100%", "Proyectos en plazo acordado"],
                ["ES / CA / EN", "Webs multiidioma disponibles"]
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-2xl font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </section>
        </AppleReveal>

        {/* FAQ */}
        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
            Preguntas frecuentes sobre diseño web en Barcelona.
          </h2>
          <dl className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <AppleReveal key={faq.question} delay={i * 0.06}>
                <div className="glass-strong interactive-lift h-full rounded-3xl p-7 md:p-8">
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-sm text-slate-300">{faq.answer}</dd>
                </div>
              </AppleReveal>
            ))}
          </dl>
        </section>

        <PageCTA
          eyebrow="Barcelona · Presupuesto en 24h"
          title="¿Necesitas una web para"
          highlight="tu empresa en Barcelona?"
          description="Cuéntanos el proyecto. Te respondemos con propuesta detallada, desglose de fases y precio cerrado antes de 24 horas laborables."
          primaryLabel="Solicitar presupuesto"
          primaryHref="/contacto"
          secondaryLabel="Ver precios"
          secondaryHref="/precios"
        />
      </div>
    </main>
  );
}
