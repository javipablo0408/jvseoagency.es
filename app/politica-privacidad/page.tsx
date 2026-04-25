import type { Metadata } from "next";
import { AppleReveal } from "@/components/apple-reveal";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Política de privacidad",
  description: "Información sobre el tratamiento de datos personales en JVSEO Agency."
};

export default function PrivacidadPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20 text-slate-100">
      <Breadcrumbs
        items={[
          { label: "Inicio", href: "/" },
          { label: "Legal", href: "/politica-privacidad" },
          { label: "Privacidad" }
        ]}
      />
      <AppleReveal>
        <h1 className="text-4xl font-semibold md:text-6xl">Política de privacidad</h1>
        <p className="mt-4 max-w-2xl text-slate-300">
          Cumplimos el RGPD y la LOPDGDD. Esta página explica qué datos tratamos, con qué
          finalidad y cómo puedes ejercer tus derechos.
        </p>
      </AppleReveal>

      <div className="mt-10 space-y-6 text-slate-300">
        <AppleReveal delay={0.05}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Responsable del tratamiento</h2>
            <p className="mt-2">JVSEO Agency · Contacto: info@jvseoagency.es</p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.1}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Finalidad</h2>
            <p className="mt-2">
              Tratamos los datos enviados en formularios para responder solicitudes comerciales,
              soporte y seguimiento de propuestas. La base legal es tu consentimiento expreso al
              enviar el formulario.
            </p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.15}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Conservación</h2>
            <p className="mt-2">
              Conservamos los datos durante el tiempo necesario para mantener la relación
              comercial y cumplir las obligaciones legales aplicables.
            </p>
          </section>
        </AppleReveal>
        <AppleReveal delay={0.2}>
          <section className="interactive-lift rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold text-white">Tus derechos</h2>
            <p className="mt-2">
              Puedes ejercer los derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad escribiendo a info@jvseoagency.es. También
              puedes presentar una reclamación ante la Agencia Española de Protección de Datos.
            </p>
          </section>
        </AppleReveal>
      </div>
    </main>
  );
}
