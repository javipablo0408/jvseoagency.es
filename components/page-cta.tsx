"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/magnetic-button";

type PageCTAProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function PageCTA({
  eyebrow,
  title,
  highlight,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref
}: PageCTAProps) {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.section
      initial={{ opacity: 0, y: reduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      className="relative my-24 overflow-hidden rounded-[36px] border border-white/12 bg-gradient-to-br from-slate-900/85 via-slate-900/55 to-slate-950/85 p-10 text-center backdrop-blur-md md:p-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_80%,rgba(99,102,241,0.16),transparent_55%)]" />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center">
        <p className="text-xs uppercase tracking-[0.32em] text-sky-200/85">{eyebrow}</p>
        <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight md:text-5xl">
          <span className="text-white">{title} </span>
          {highlight && <span className="text-gradient-cool">{highlight}</span>}
        </h2>
        <p className="mt-5 max-w-xl text-balance text-slate-300 md:text-lg">{description}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={primaryHref}>{primaryLabel}</MagneticButton>
          {secondaryLabel && secondaryHref && (
            <MagneticButton href={secondaryHref} variant="ghost">
              {secondaryLabel}
            </MagneticButton>
          )}
        </div>
      </div>
    </motion.section>
  );
}
