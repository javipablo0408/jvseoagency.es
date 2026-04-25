import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { ScrollHighlightText } from "@/components/scroll-highlight-text";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/structured-data";

export const metadata: Metadata = {
  title: "Contacto · Presupuesto web, apps e IA en Madrid",
  description:
    "Solicita presupuesto para diseño web, apps a medida o automatización IA en Madrid. Respondemos en menos de 24h con propuesta personalizada, plan de acción y retorno estimado. Sin compromiso.",
  alternates: { canonical: "/contacto" }
};

const contactFaqs = [
  {
    question: "¿En cuánto tiempo respondéis a los presupuestos?",
    answer:
      "Respondemos en menos de 24 horas laborables con una propuesta personalizada. Si el proyecto es urgente, puedes llamarnos directamente al +34 618 967 972."
  },
  {
    question: "¿Trabajáis solo en Madrid o también en el resto de España?",
    answer:
      "Trabajamos de forma 100% remota con empresas de toda España. Estamos basados en Madrid pero hemos ejecutado proyectos en Barcelona, Valencia, Sevilla, Bilbao y otras ciudades."
  },
  {
    question: "¿Cuál es el presupuesto mínimo para empezar un proyecto?",
    answer:
      "El presupuesto depende del tipo de proyecto. Para webs corporativas desde 1.500€, para automatizaciones IA básicas desde 800€ y para apps a medida desde 5.000€. Cuéntanos tu caso y buscamos la solución más eficiente."
  }
];

const contactDetails = [
  { label: "Email", value: "info@jvseoagency.com", href: "mailto:info@jvseoagency.com" },
  { label: "Teléfono", value: "+34 618 967 972", href: "tel:+34618967972" },
  { label: "Ubicación", value: "Madrid, España" },
  { label: "Horario", value: "Lun a Vie · 09:00 a 18:00 (GMT+1)" }
];

const nextSteps = [
  {
    title: "01 · Recibimos tu mensaje",
    text: "Lo revisamos en menos de 24h laborables y respondemos por email o teléfono."
  },
  {
    title: "02 · Sesión de descubrimiento",
    text: "30 minutos en vídeo para entender objetivo, contexto y prioridades sin compromiso."
  },
  {
    title: "03 · Propuesta personalizada",
    text: "Te enviamos alcance, fases, inversión y retorno estimado en 3 días laborables."
  },
  {
    title: "04 · Kickoff del proyecto",
    text: "Si encajamos, arrancamos con plan claro y entregables definidos por fase."
  }
];

export default function ContactoPage() {
  return (
    <main className="relative">
      <BreadcrumbJsonLd
        items={[{ name: "Inicio", url: "/" }, { name: "Contacto" }]}
      />
      <FaqJsonLd items={contactFaqs} />
      <PageHero
        eyebrow="Contacto · Madrid"
        title="Cuéntanos tu proyecto"
        highlight="y te respondemos en 24h."
        subtitle="Auditoría gratuita, propuesta clara y plan accionable. Sin formularios eternos ni promesas vacías."
        meta={["Respuesta < 24h", "Sin compromiso", "Madrid · Remoto"]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <Breadcrumbs items={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]} />

        <section className="my-16 grid gap-8 md:my-20 md:grid-cols-[1fr_1.15fr] md:items-start">
          <AppleReveal>
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Contacto directo</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  Si prefieres no rellenar el formulario.
                </h2>
              </div>
              <ul className="space-y-3">
                {contactDetails.map((item) => (
                  <li
                    key={item.label}
                    className="glass-strong interactive-lift flex items-center justify-between rounded-2xl px-5 py-4"
                  >
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-slate-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block text-base text-white">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base text-white">{item.value}</p>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">→</span>
                  </li>
                ))}
              </ul>
              <div className="glass rounded-2xl p-5 text-sm text-slate-300">
                <p className="text-[10px] uppercase tracking-[0.22em] text-sky-200/85">Tip</p>
                <p className="mt-2">
                  Cuanto más concreto seas (objetivo, contexto, plazos), más precisa será la
                  propuesta que recibas.
                </p>
              </div>
            </div>
          </AppleReveal>

          <AppleReveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-slate-900/80 via-slate-900/55 to-slate-950/85 p-8 backdrop-blur-md md:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_82%_82%,rgba(99,102,241,0.16),transparent_55%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Empieza ya</p>
                <h2 className="mt-3 text-balance text-3xl font-semibold leading-tight md:text-4xl">
                  <span className="text-gradient-cool">Pide propuesta</span> sin compromiso.
                </h2>
                <p className="mt-4 max-w-md text-slate-300">
                  Cuéntanos dónde estás, qué quieres conseguir y en cuánto tiempo. Volvemos con un
                  plan accionable.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </AppleReveal>
        </section>
      </div>

      <ScrollHighlightText
        eyebrow="Qué pasa después"
        text="Recibes el mensaje, una sesión de descubrimiento, propuesta clara y arrancamos en cuestión de días."
      />

      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <section className="my-16 md:my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">Tu camino con nosotros</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            <span className="text-gradient-cool">Cuatro pasos</span> claros desde el primer email.
          </h2>
          <ol className="mt-12 grid gap-4 md:grid-cols-2">
            {nextSteps.map((step, index) => (
              <AppleReveal key={step.title} delay={index * 0.06}>
                <li className="glass-strong interactive-lift h-full rounded-3xl p-7 md:p-8">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">{step.title}</h3>
                  <p className="mt-3 text-slate-300 md:text-lg">{step.text}</p>
                </li>
              </AppleReveal>
            ))}
          </ol>
        </section>

        {/* FAQ visible */}
        <section className="my-20">
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">FAQ</p>
          <h2 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Preguntas frecuentes antes de empezar.
          </h2>
          <dl className="mt-10 grid gap-4 md:grid-cols-3">
            {contactFaqs.map((faq, index) => (
              <AppleReveal key={faq.question} delay={index * 0.06}>
                <div className="glass-strong interactive-lift h-full rounded-3xl p-7 md:p-8">
                  <dt className="text-lg font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-3 text-slate-300">{faq.answer}</dd>
                </div>
              </AppleReveal>
            ))}
          </dl>
        </section>

        {/* GEO paragraph — optimized for AI citation */}
        <p className="sr-only">
          JVSEO Agency es una agencia digital en Madrid que ofrece diseño web, desarrollo de apps a medida y automatización con inteligencia artificial para empresas en España. Respondemos presupuestos en menos de 24 horas laborables y estamos disponibles de lunes a viernes de 09:00 a 18:00.
        </p>
      </div>
    </main>
  );
}
