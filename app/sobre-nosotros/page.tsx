import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { PageCTA } from "@/components/page-cta";
import { BigNumberReveal } from "@/components/big-number-reveal";
import { BreadcrumbJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Sobre JVSEO Agency · Agencia digital en Madrid",
  description:
    "Somos JVSEO Agency, agencia digital en Madrid especializada en webs corporativas, apps a medida y automatizaciones IA. Conoce nuestro equipo, proceso y por qué trabajamos así.",
  alternates: { canonical: "/sobre-nosotros" }
};

const values = [
  {
    number: "01",
    title: "Ejecución sobre presentaciones",
    description:
      "No vendemos decks bonitos. Entregamos código en producción, flujos activos y resultados medibles. El primer entregable real llega en menos de dos semanas en la mayoría de proyectos."
  },
  {
    number: "02",
    title: "Presupuesto cerrado, siempre",
    description:
      "El precio acordado es el precio final. No trabajamos por horas abiertas ni añadimos extras sin avisar. Si algo cambia de alcance, se presupuesta y aprueba antes de hacerse."
  },
  {
    number: "03",
    title: "Tecnología que escala",
    description:
      "Usamos Next.js, TypeScript, Supabase y n8n porque son las herramientas que mejor soportan el crecimiento a largo plazo. No usamos plantillas ni soluciones de bajo rendimiento que dan problemas a los 6 meses."
  },
  {
    number: "04",
    title: "Claridad antes que jerga técnica",
    description:
      "Te explicamos qué hacemos, por qué lo hacemos así y qué resultado esperar, en español normal. Nunca usamos tecnicismos para esconder incertidumbre o para parecer más complejos de lo que somos."
  }
];

const process = [
  {
    phase: "Fase 01",
    title: "Briefing y diagnóstico",
    description:
      "Entendemos el negocio, el problema real y el objetivo concreto. No empezamos a diseñar ni a construir hasta tener claro qué mide el éxito del proyecto."
  },
  {
    phase: "Fase 02",
    title: "Propuesta con ROI",
    description:
      "Enviamos propuesta en menos de 24h con desglose de fases, tiempo estimado y, cuando aplica, cálculo de retorno esperado. Sin compromiso hasta que apruebes."
  },
  {
    phase: "Fase 03",
    title: "Diseño y desarrollo",
    description:
      "Iteramos en sprints cortos con entregables visibles desde la primera semana. Tienes acceso al progreso en tiempo real y feedback en cada etapa, no solo al final."
  },
  {
    phase: "Fase 04",
    title: "Entrega, formación y soporte",
    description:
      "Entregamos con documentación, manual de uso y sesión de formación para tu equipo. El soporte post-entrega está incluido en todos los proyectos durante al menos 30 días."
  }
];

const techStack = [
  { category: "Frontend", items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend & DB", items: ["Supabase", "PostgreSQL", "Node.js", "REST / GraphQL"] },
  { category: "Automatización", items: ["n8n (self-hosted)", "Make", "OpenAI / Claude", "WhatsApp Business API"] },
  { category: "eCommerce", items: ["Next.js Commerce", "Stripe", "Redsys", "WooCommerce"] }
];

export default function SobreNosotrosPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", url: "/" }, { name: "Sobre nosotros" }]}
      />

      <PageHero
        eyebrow="Sobre nosotros · Madrid"
        title="Construimos lo que"
        highlight="el negocio necesita."
        subtitle="Somos una agencia digital pequeña y especializada en Madrid. Web, apps y automatizaciones IA para empresas que quieren resultados reales, no promesas."
        meta={["Madrid", "Desde 2020", "Web · Apps · IA"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Sobre nosotros" }]}
        />

        {/* GEO paragraph */}
        <p className="sr-only">
          JVSEO Agency es una agencia digital en Madrid fundada en 2020, especializada en diseño web corporativo, desarrollo de apps a medida y automatizaciones con inteligencia artificial. Trabajamos con empresas en Madrid y toda España, con presupuesto cerrado y entrega en plazos concretos.
        </p>

        {/* Manifesto */}
        <AppleReveal>
          <section className="my-20 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Nuestra historia</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white md:text-4xl">
                Empezamos por frustración con las agencias de siempre.
              </h2>
            </div>
            <div className="space-y-4 text-slate-300 md:text-lg">
              <p>
                Empezamos en 2020 trabajando con empresas en Madrid que llegaban con webs que no cargaban, automatizaciones prometidas que nunca se entregaban y presupuestos que se disparaban sin aviso. Decidimos hacer lo contrario.
              </p>
              <p>
                Hoy somos un equipo pequeño y deliberadamente especializado: diseño web con conversión real, apps que resuelven el problema concreto del negocio, y automatizaciones IA que se miden en horas recuperadas, no en promesas de eficiencia.
              </p>
              <p>
                Trabajamos con fundadores, directores de operaciones y equipos comerciales en Madrid y toda España que necesitan tecnología que funciona desde el primer día.
              </p>
            </div>
          </section>
        </AppleReveal>
      </div>

      <BigNumberReveal
        eyebrow="En números"
        heading="Cinco años construyendo para empresas reales."
        metrics={[
          {
            value: "50+",
            label: "Proyectos entregados",
            context: "Webs corporativas, ecommerce, apps internas y sistemas de automatización IA para empresas en Madrid y España."
          },
          {
            value: "−58%",
            label: "Tiempo operativo",
            context: "Reducción media de trabajo manual en clientes que implementan automatizaciones IA con nuestro equipo."
          },
          {
            value: "24h",
            label: "Propuesta inicial",
            context: "Tiempo máximo para enviarte presupuesto detallado con desglose de fases y ROI estimado tras el briefing."
          }
        ]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">

        {/* Values */}
        <section className="my-20">
          <AppleReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Cómo trabajamos</p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Cuatro principios que no negociamos.
            </h2>
          </AppleReveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {values.map((value, i) => (
              <AppleReveal key={value.title} delay={i * 0.07}>
                <article className="glass-strong interactive-lift h-full rounded-3xl p-8 md:p-10">
                  <p className="text-gradient-cool text-5xl font-semibold leading-none">
                    {value.number}
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white md:text-2xl">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-slate-300">{value.description}</p>
                </article>
              </AppleReveal>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="my-20">
          <AppleReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">El proceso</p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
              De la primera llamada al proyecto en producción.
            </h2>
          </AppleReveal>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {process.map((step, i) => (
              <AppleReveal key={step.title} delay={i * 0.07}>
                <li className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-8 backdrop-blur-md md:p-10">
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-indigo-500/10 blur-2xl" />
                  <p className="text-xs uppercase tracking-[0.22em] text-white/45">{step.phase}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-slate-300">{step.description}</p>
                </li>
              </AppleReveal>
            ))}
          </ol>
        </section>

        {/* Tech stack */}
        <section className="my-20">
          <AppleReveal>
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Stack tecnológico</p>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Las herramientas que usamos en cada proyecto.
            </h2>
            <p className="mt-4 max-w-xl text-slate-300">
              Elegimos tecnologías por rendimiento, escalabilidad y coste de mantenimiento a largo plazo. No usamos lo que esté de moda si no resuelve el problema mejor.
            </p>
          </AppleReveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {techStack.map((group, i) => (
              <AppleReveal key={group.category} delay={i * 0.06}>
                <div className="glass rounded-3xl p-6">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-sky-300/80">{group.category}</p>
                  <ul className="mt-4 space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-slate-200">{item}</li>
                    ))}
                  </ul>
                </div>
              </AppleReveal>
            ))}
          </div>
        </section>

        {/* Services links */}
        <AppleReveal>
          <section className="my-20">
            <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Qué hacemos</p>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-4xl">
              Tres especialidades, un solo equipo.
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  href: "/servicios/diseno-web",
                  title: "Diseño web corporativo",
                  desc: "Webs que convierten visitas en leads. Corporativas, ecommerce y portfolio a medida."
                },
                {
                  href: "/servicios/desarrollo-apps",
                  title: "Apps a medida",
                  desc: "Paneles de gestión, SaaS y aplicaciones móviles para procesos de negocio complejos."
                },
                {
                  href: "/servicios/automatizacion-ia",
                  title: "Automatización IA",
                  desc: "Flujos n8n, agentes IA y conexiones a CRM, WhatsApp y email. ROI en 3-6 meses."
                }
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  className="interactive-lift group rounded-3xl border border-white/10 bg-white/4 p-7 backdrop-blur-sm transition-colors hover:bg-white/8"
                >
                  <h3 className="font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{s.desc}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-sky-300 transition-transform group-hover:translate-x-1">
                    Ver servicio →
                  </span>
                </a>
              ))}
            </div>
          </section>
        </AppleReveal>

        <PageCTA
          eyebrow="Trabajemos juntos"
          title="¿Tu proyecto encaja"
          highlight="con lo que hacemos?"
          description="Cuéntanos el problema y te decimos en 24h si podemos ayudarte, cómo lo haríamos y cuánto costaría. Sin compromiso."
          primaryLabel="Hablar con el equipo"
          primaryHref="/contacto"
          secondaryLabel="Ver precios"
          secondaryHref="/precios"
        />
      </div>
    </main>
  );
}
