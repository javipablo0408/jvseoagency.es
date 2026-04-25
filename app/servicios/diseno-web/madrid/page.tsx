import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BreadcrumbJsonLd, ServiceJsonLd, FaqJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Diseño web Madrid · Agencia de desarrollo web profesional 2026",
  description:
    "Agencia de diseño web en Madrid especializada en webs corporativas, ecommerce y apps a medida. Proyectos desde 1.500€, SEO incluido y presupuesto en 24h. Equipo en Madrid.",
  alternates: { canonical: "/servicios/diseno-web/madrid" }
};

const faqs = [
  {
    question: "¿Cuánto cuesta una web corporativa en Madrid?",
    answer:
      "Una web corporativa básica en Madrid (5-8 páginas, diseño a medida, SEO técnico) parte de 1.500€. Una web completa con blog, animaciones y CRM oscila entre 3.500€ y 7.000€. Los proyectos avanzados con área privada o multiidioma van de 7.000€ a 15.000€. Consulta nuestra página de precios para el desglose completo."
  },
  {
    question: "¿Cuánto tarda una web en Madrid?",
    answer:
      "El plazo medio para una web corporativa en Madrid es de 4 a 6 semanas desde la aprobación del diseño. Proyectos más complejos (ecommerce, integraciones ERP) requieren entre 6 y 12 semanas. Trabajamos con fases y entregables visibles desde la primera semana."
  },
  {
    question: "¿Podemos reunirnos en persona en Madrid?",
    answer:
      "Sí. Nuestro equipo está en Madrid y podemos quedar en persona para el briefing inicial o para revisiones del proyecto. La mayoría de los proyectos se gestionan por videollamada y Notion, pero las reuniones presenciales siempre están disponibles."
  },
  {
    question: "¿El SEO está incluido en el diseño web?",
    answer:
      "Sí. El SEO técnico base está incluido en todos los proyectos: meta tags, Open Graph, sitemap XML, robots.txt, schema markup, velocidad Core Web Vitals y adaptación móvil. El posicionamiento orgánico continuo es un servicio separado."
  },
  {
    question: "¿Qué tecnología usáis para las webs en Madrid?",
    answer:
      "Usamos Next.js con TypeScript y Tailwind CSS para proyectos de alto rendimiento, y WordPress optimizado para clientes que necesitan editar contenido ellos mismos. Ambos incluyen hosting recomendado, panel de administración y documentación en español."
  }
];

const services = [
  {
    title: "Web corporativa en Madrid",
    description:
      "Diseño y desarrollo de webs corporativas en Madrid orientadas a conversión. Arquitectura de información, diseño UI a medida y SEO técnico incluido desde el primer día.",
    features: [
      "Diseño a medida, sin plantillas",
      "SEO técnico para Madrid y España",
      "Formularios con cualificación automática",
      "Velocidad < 2s en móvil",
      "Google Analytics + Search Console"
    ],
    accent: "linear-gradient(140deg, #082345 0%, #1956b6 55%, #29c6ff 100%)"
  },
  {
    title: "eCommerce para tiendas en Madrid",
    description:
      "Tiendas online profesionales para empresas en Madrid. Integración con Redsys (TPV virtual), Stripe y los principales operadores logísticos en España. Checkout optimizado para móvil.",
    features: [
      "Pasarela de pago Redsys / Stripe",
      "Checkout en menos de 2 pasos",
      "Integración con agencias de transporte",
      "Email de carrito abandonado",
      "SEO para producto y categoría"
    ],
    accent: "linear-gradient(140deg, #1a0a3d 0%, #4f23a8 55%, #c47bff 100%)"
  },
  {
    title: "Automatización IA para empresas madrileñas",
    description:
      "Flujos automáticos con n8n y agentes IA para empresas en Madrid. Cualificación de leads, chatbot en WhatsApp Business y reporting automático. ROI medio en 3-6 meses.",
    features: [
      "Cualificación automática de leads",
      "Chatbot WhatsApp Business",
      "Integración CRM (HubSpot, Pipedrive)",
      "Reporting automático semanal",
      "Diagnóstico gratuito incluido"
    ],
    accent: "linear-gradient(140deg, #0e1a12 0%, #0f5e3e 55%, #35d48e 100%)"
  }
];

const zones = [
  "Centro · Salamanca · Chamberí",
  "Retiro · Arganzuela · Usera",
  "Carabanchel · Latina · Moncloa",
  "Tetuán · Fuencarral · Hortaleza",
  "Vallecas · Moratalaz · Ciudad Lineal",
  "Toda la Comunidad de Madrid"
];

export default function DisenoWebMadridPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", url: "/" },
          { name: "Servicios", url: "/servicios/diseno-web" },
          { name: "Diseño web Madrid" }
        ]}
      />
      <ServiceJsonLd
        name="Diseño web Madrid · Agencia profesional"
        description="Agencia de diseño web en Madrid especializada en webs corporativas, ecommerce y apps a medida. SEO incluido, presupuesto cerrado y presupuesto en 24h."
        url="/servicios/diseno-web/madrid"
        serviceType="Web Design"
      />
      <FaqJsonLd items={faqs} />

      <PageHero
        eyebrow="Diseño Web · Madrid"
        title="Agencia de diseño web"
        highlight="en Madrid."
        subtitle="Webs corporativas, ecommerce y apps a medida para empresas en Madrid. Diseño personalizado, SEO incluido y presupuesto cerrado. Equipo local en Madrid."
        meta={["Madrid", "Desde 1.500€", "Presupuesto en 24h"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Diseño web", href: "/servicios/diseno-web" },
            { label: "Madrid" }
          ]}
        />

        {/* GEO + local SEO paragraph */}
        <p className="sr-only">
          JVSEO Agency es una agencia de diseño web en Madrid especializada en webs corporativas, tiendas online y apps a medida. Somos una empresa de diseño web con equipo en Madrid que trabaja con empresas de toda la Comunidad de Madrid. Ofrecemos diseño web profesional en Madrid desde 1.500€ con SEO técnico incluido, presupuesto cerrado y entrega en 4 a 6 semanas.
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

        {/* Local zones */}
        <AppleReveal>
          <section className="my-20 rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm md:p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Zonas de servicio</p>
            <h2 className="mt-4 text-balance text-2xl font-semibold text-white md:text-3xl">
              Diseño web en todos los distritos de Madrid.
            </h2>
            <p className="mt-3 text-slate-400">
              Nuestro equipo está en Madrid y atendemos proyectos en toda la Comunidad de Madrid, con disponibilidad para reuniones presenciales en cualquier zona.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {zones.map((zone) => (
                <li key={zone} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  {zone}
                </li>
              ))}
            </ul>
          </section>
        </AppleReveal>

        {/* Stats */}
        <AppleReveal>
          <section className="my-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["50+", "Proyectos en Madrid"],
              ["4-6 sem", "Entrega media"],
              ["24h", "Para el presupuesto"],
              ["1.500€", "Desde"]
            ].map(([value, label]) => (
              <div key={label} className="glass rounded-3xl p-6 text-center">
                <p className="text-3xl font-semibold text-white">{value}</p>
                <p className="mt-2 text-xs text-slate-400">{label}</p>
              </div>
            ))}
          </section>
        </AppleReveal>

        {/* FAQ */}
        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
            Preguntas frecuentes sobre diseño web en Madrid.
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
          eyebrow="Madrid · Presupuesto en 24h"
          title="¿Necesitas una web para"
          highlight="tu empresa en Madrid?"
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
