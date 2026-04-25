import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: "Términos de uso y condiciones de los servicios de JVSEO Agency."
};

export default function TerminosPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-slate-100">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Legal", href: "/terminos" },
          { label: "Términos" }
        ]}
      />
      <AppleReveal>
        <h1 className="text-4xl font-semibold md:text-6xl">Términos y condiciones</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Marco general de uso del sitio y de la prestación de servicios. Cualquier proyecto se
          formaliza con un acuerdo específico que prevalece sobre estas condiciones generales.
        </p>
      </AppleReveal>

      <div className="mt-10 space-y-6 text-slate-300">
        <AppleReveal delay={0.05}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Uso del sitio</h2>
            <p className="mt-2">
              El acceso y uso de jvseoagency.com implica la aceptación de estos términos y de la
              normativa española y europea vigente.
            </p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.1}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Servicios y contratación</h2>
            <p className="mt-2">
              Cada proyecto se formaliza mediante propuesta y acuerdo específico de alcance,
              plazos, pagos y entregables. Lo firmado en propuesta prevalece sobre lo descrito en
              esta web.
            </p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.15}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Limitación de responsabilidad</h2>
            <p className="mt-2">
              JVSEO Agency no se hace responsable de decisiones de terceros adoptadas sobre la base
              de la información publicada en esta web. La información tiene carácter orientativo y
              comercial.
            </p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.2}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Legislación aplicable</h2>
            <p className="mt-2">
              Estos términos se rigen por la legislación española. Cualquier controversia se
              someterá a los juzgados y tribunales de Madrid (España).
            </p>
          </section>
        </AppleReveal>
      </div>
    </main>
  );
}
