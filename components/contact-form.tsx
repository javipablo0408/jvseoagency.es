"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";

type LeadState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<LeadState>("idle");
  const [errorText, setErrorText] = useState("");
  const reduceMotion = useReducedMotion() ?? false;

  const trackEvent = (eventName: string, payload?: Record<string, string>) => {
    if (typeof window === "undefined") return;
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
    gtag?.("event", eventName, payload ?? {});
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      interest: String(formData.get("interest") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? "")
    };

    setState("sending");
    setErrorText("");
    trackEvent("submit_form", { location: "contact_page" });

    const response = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      setState("success");
      trackEvent("success", { location: "contact_page" });
      (event.currentTarget as HTMLFormElement).reset();
      return;
    }

    const data = (await response.json().catch(() => null)) as { error?: string } | null;
    setState("error");
    setErrorText(data?.error ?? "No se pudo enviar el formulario. Intenta de nuevo.");
  };

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-4 md:grid-cols-2">
        <input
          required
          name="name"
          placeholder="Nombre"
          className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 outline-none transition focus:border-sky-300"
        />
        <input
          required
          name="email"
          type="email"
          placeholder="Email profesional"
          className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 outline-none transition focus:border-sky-300"
        />
      </div>
      <input
        name="company"
        placeholder="Empresa o proyecto"
        className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 outline-none transition focus:border-sky-300"
      />
      <select
        required
        name="interest"
        defaultValue=""
        className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-slate-200 outline-none transition focus:border-sky-300"
      >
        <option value="" disabled>
          Servicio que te interesa
        </option>
        <option value="automation">Automatizaciones IA</option>
        <option value="web">Web corporativa / ecommerce / portfolio</option>
        <option value="app">Aplicacion a medida</option>
        <option value="full">Solucion completa (web + IA + app)</option>
      </select>
      <textarea
        required
        name="message"
        rows={5}
        placeholder="Cuentanos brevemente que quieres conseguir y donde estas hoy"
        className="rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 outline-none transition focus:border-sky-300"
      />
      <motion.button
        whileHover={{ scale: reduceMotion ? 1 : 1.02 }}
        whileTap={{ scale: 0.97 }}
        type="submit"
        disabled={state === "sending"}
        className="pressable mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-white via-sky-100 to-cyan-100 px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_60px_-18px_rgba(125,211,252,0.6)] disabled:opacity-60"
      >
        {state === "sending" ? "Enviando..." : "Solicitar propuesta gratis"}
      </motion.button>
      {state === "success" && (
        <div className="rounded-xl border border-emerald-300/40 bg-emerald-300/10 p-4">
          <p className="text-sm text-emerald-100">
            Gracias, hemos recibido tu solicitud. Te contactamos en breve.
          </p>
        </div>
      )}
      {state === "error" && (
        <p className="text-sm text-red-300">{errorText}</p>
      )}
    </form>
  );
}
