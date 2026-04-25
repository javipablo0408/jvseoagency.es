import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Precios de diseño web, apps y automatización IA en Madrid · 2026",
  description:
    "Rangos de precio reales para webs corporativas, ecommerce, apps a medida y automatizaciones IA en Madrid. Sin sorpresas: qué incluye cada presupuesto y cómo comparar opciones.",
  alternates: { canonical: "/precios" }
};

const plans = [
  {
    service: "Web Corporativa",
    eyebrow: "Diseño Web",
    accent: "linear-gradient(140deg, #082345 0%, #1956b6 55%, #29c6ff 100%)",
    tiers: [
      {
        name: "Básica",
        range: "1.500€ – 3.500€",
        time: "4 – 6 semanas",
        includes: [
          "5 a 8 páginas a medida",
          "Diseño UI personalizado",
          "SEO técnico completo",
          "Formulario de contacto con anti-spam",
          "Adaptación móvil y tablet",
          "Google Analytics integrado"
        ]
      },
      {
        name: "Completa",
        range: "3.500€ – 7.000€",
        time: "6 – 8 semanas",
        includes: [
          "Todo lo del plan Básica",
          "Blog con CMS editable",
          "Casos de éxito o portfolio",
          "Animaciones y microinteracciones",
          "Integración con CRM (HubSpot, Pipedrive)",
          "Schema markup avanzado"
        ]
      },
      {
        name: "Avanzada",
        range: "7.000€ – 15.000€",
        time: "8 – 12 semanas",
        includes: [
          "Todo lo del plan Completa",
          "Área privada para clientes o empleados",
          "Multiidioma (ES + EN + otros)",
          "Integración con ERP o sistemas internos",
          "Copywriting incluido",
          "Fotografía profesional"
        ]
      }
    ]
  },
  {
    service: "eCommerce",
    eyebrow: "Tienda Online",
    accent: "linear-gradient(140deg, #1a0a3d 0%, #4f23a8 55%, #c47bff 100%)",
    tiers: [
      {
        name: "Catálogo",
        range: "2.500€ – 5.000€",
        time: "5 – 7 semanas",
        includes: [
          "Hasta 200 productos",
          "Pasarela de pago (Stripe / Redsys)",
          "Gestión de stock básica",
          "SEO técnico para producto y categoría",
          "Adaptación móvil completa",
          "Panel de administración"
        ]
      },
      {
        name: "Tienda Completa",
        range: "5.000€ – 12.000€",
        time: "7 – 10 semanas",
        includes: [
          "Catálogo ilimitado",
          "Múltiples métodos de pago y envío",
          "Lógica de descuentos y cupones",
          "Email de carrito abandonado",
          "Integración con ERP o almacén",
          "Programa de fidelización"
        ]
      },
      {
        name: "Marketplace / Custom",
        range: "12.000€ – 30.000€+",
        time: "3 – 6 meses",
        includes: [
          "Múltiples vendedores o sedes",
          "Lógica de comisiones a medida",
          "App móvil complementaria",
          "Automatizaciones de operaciones",
          "Arquitectura escalable",
          "Soporte técnico prioritario"
        ]
      }
    ]
  },
  {
    service: "App a Medida",
    eyebrow: "Aplicaciones",
    accent: "linear-gradient(140deg, #08213a 0%, #074f6d 55%, #18b3a4 100%)",
    tiers: [
      {
        name: "Panel Interno",
        range: "5.000€ – 15.000€",
        time: "6 – 10 semanas",
        includes: [
          "Gestión de datos con roles y permisos",
          "Formularios, listados y dashboards",
          "Integraciones con APIs externas básicas",
          "Autenticación segura",
          "Diseño UX funcional",
          "Documentación técnica"
        ]
      },
      {
        name: "App de Negocio",
        range: "15.000€ – 40.000€",
        time: "3 – 6 meses",
        includes: [
          "Flujos de trabajo complejos",
          "Integraciones múltiples (ERP, CRM, APIs)",
          "Módulos de reporting avanzado",
          "Notificaciones push",
          "QA y pruebas exhaustivas",
          "App móvil (PWA o nativa)"
        ]
      },
      {
        name: "SaaS / Plataforma",
        range: "40.000€ – 100.000€+",
        time: "6 – 12 meses",
        includes: [
          "Multi-tenant con billing integrado",
          "Arquitectura escalable en cloud",
          "IA integrada en el producto",
          "Onboarding automatizado",
          "Analytics de producto",
          "Equipo dedicado"
        ]
      }
    ]
  },
  {
    service: "Automatización IA",
    eyebrow: "Automatización",
    accent: "linear-gradient(140deg, #0e1a12 0%, #0f5e3e 55%, #35d48e 100%)",
    tiers: [
      {
        name: "Flujo Básico",
        range: "800€ – 2.000€",
        time: "48h – 1 semana",
        includes: [
          "1 a 3 flujos automatizados",
          "Captura de leads y respuesta automática",
          "Integración con email o WhatsApp",
          "Registro en CRM o hoja de cálculo",
          "Documentación en español",
          "Soporte 30 días"
        ]
      },
      {
        name: "Sistema Completo",
        range: "2.000€ – 6.000€",
        time: "2 – 4 semanas",
        includes: [
          "3 a 8 flujos conectados",
          "Agente IA con base de conocimiento",
          "Integración WhatsApp Business API",
          "CRM, email y calendario",
          "Dashboard de métricas",
          "Soporte 60 días"
        ]
      },
      {
        name: "Agencia / Empresa",
        range: "6.000€ – 15.000€+",
        time: "4 – 8 semanas",
        includes: [
          "Múltiples agentes IA coordinados",
          "Integración con ERP y sistemas legacy",
          "Lógica de negocio compleja",
          "Hosting propio n8n self-hosted",
          "Formación al equipo incluida",
          "Soporte mensual continuo"
        ]
      }
    ]
  }
];

const faqs = [
  {
    question: "¿Los precios incluyen IVA?",
    answer:
      "No. Todos los precios mostrados son sin IVA. Se añade el 21% de IVA aplicable según la legislación española en la factura final."
  },
  {
    question: "¿Puedo contratar solo el diseño o solo el desarrollo?",
    answer:
      "Sí. Podemos encargarnos de solo el diseño (entregamos Figma), solo el desarrollo (trabajamos sobre tu diseño), o el proyecto completo. Indícalo al solicitar presupuesto."
  },
  {
    question: "¿Qué pasa si el proyecto crece más de lo previsto?",
    answer:
      "Trabajamos con presupuesto cerrado. Si surgen nuevas funcionalidades no contempladas inicialmente, se presupuestan aparte como extras. No hay sorpresas en la factura final."
  },
  {
    question: "¿Hay costes recurrentes después de la entrega?",
    answer:
      "El hosting, dominio y mantenimiento son opcionales. El coste medio de hosting para una web Next.js en Vercel está entre 0€ (plan gratuito) y 20€/mes. El mantenimiento técnico anual suele ser entre el 10% y el 15% del coste del proyecto."
  },
  {
    question: "¿Cuánto tarda en entregarse el presupuesto?",
    answer:
      "Enviamos propuesta detallada con desglose de fases, tiempo estimado y ROI proyectado en menos de 24 horas laborables tras la reunión de briefing."
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
        description="Rangos de precio reales para webs corporativas, ecommerce, apps a medida y automatizaciones IA. Sin sorpresas, presupuesto cerrado."
        url="/precios"
        serviceType="Digital Agency Services"
      />
      <FaqJsonLd items={faqs} />

      <PageHero
        eyebrow="Precios · Madrid"
        title="Sin letras pequeñas."
        highlight="Solo rangos reales."
        subtitle="Precios orientativos para cada tipo de proyecto. Presupuesto cerrado, sin sorpresas y sin horas extra no acordadas."
        meta={["Web", "eCommerce", "Apps", "Automatización IA"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Precios" }]}
        />

        {/* GEO paragraph */}
        <p className="sr-only">
          JVSEO Agency ofrece precios transparentes para diseño web, ecommerce, apps a medida y automatizaciones IA en Madrid. Los proyectos web parten desde 1.500€, las apps desde 5.000€ y las automatizaciones desde 800€. Todos los presupuestos son cerrados, en español y con soporte post-entrega incluido.
        </p>

        {plans.map((plan, pi) => (
          <section key={plan.service} className="my-20">
            <AppleReveal>
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">
                  {plan.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                  {plan.service}
                </h2>
              </div>
            </AppleReveal>

            <div className="grid gap-5 md:grid-cols-3">
              {plan.tiers.map((tier, ti) => (
                <AppleReveal key={tier.name} delay={ti * 0.07}>
                  <article
                    className="interactive-lift relative h-full overflow-hidden rounded-3xl border border-white/10 p-8"
                    style={{ background: pi % 2 === 0 ? plan.accent : undefined }}
                  >
                    {pi % 2 !== 0 && (
                      <div
                        className="pointer-events-none absolute inset-0 rounded-3xl opacity-90"
                        style={{ background: plan.accent }}
                      />
                    )}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.14),transparent_45%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.35),transparent_55%)]" />
                    <div className="relative">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
                        {tier.name}
                      </p>
                      <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                        {tier.range}
                      </p>
                      <p className="mt-1 text-sm text-white/60">{tier.time} de entrega</p>
                      <ul className="mt-6 space-y-2.5">
                        {tier.includes.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm text-white/85">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-white/60" fill="none" viewBox="0 0 16 16">
                              <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </AppleReveal>
              ))}
            </div>
          </section>
        ))}

        {/* What's always included */}
        <AppleReveal>
          <section className="my-20 rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-sm md:p-12">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Siempre incluido</p>
            <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
              En todo proyecto, sin importar el presupuesto.
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {[
                ["Presupuesto cerrado", "Sin horas extra ni sorpresas en la factura final."],
                ["Reunión de briefing", "Entendemos el negocio antes de diseñar o construir nada."],
                ["SEO técnico base", "Meta tags, sitemap, schema markup y Core Web Vitals."],
                ["Pruebas antes de entrega", "QA completo en móvil, tablet y desktop."],
                ["Documentación en español", "Manual de uso y guía de edición para tu equipo."],
                ["Soporte post-entrega", "Mínimo 30 días de soporte incluido en todos los proyectos."]
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-white/4 p-5">
                  <p className="font-medium text-white">{title}</p>
                  <p className="mt-1.5 text-sm text-slate-400">{desc}</p>
                </div>
              ))}
            </div>
          </section>
        </AppleReveal>

        {/* FAQ */}
        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">FAQ</p>
          <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
            Preguntas frecuentes sobre precios y presupuestos.
          </h2>
          <dl className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq, i) => (
              <AppleReveal key={faq.question} delay={i * 0.05}>
                <div className="glass-strong interactive-lift h-full rounded-3xl p-7 md:p-8">
                  <dt className="font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-sm text-slate-300">{faq.answer}</dd>
                </div>
              </AppleReveal>
            ))}
          </dl>
        </section>

        <PageCTA
          eyebrow="Presupuesto en 24h"
          title="Cuéntanos tu proyecto,"
          highlight="te respondemos hoy."
          description="Sin formularios de 10 campos. Solo dinos qué necesitas y te enviamos propuesta detallada con desglose y ROI estimado antes de 24 horas laborables."
          primaryLabel="Solicitar presupuesto"
          primaryHref="/contacto"
          secondaryLabel="Ver casos reales"
          secondaryHref="/casos"
        />
      </div>
    </main>
  );
}
