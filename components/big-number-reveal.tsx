"use client";

import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

export type BigMetric = {
  value: string;
  label: string;
  context: string;
};

type BigNumberRevealProps = {
  eyebrow: string;
  heading: string;
  metrics: BigMetric[];
};

function MetricCard({
  metric,
  progress,
  index,
  reduceMotion
}: {
  metric: BigMetric;
  progress: MotionValue<number>;
  index: number;
  reduceMotion: boolean;
}) {
  const start = 0.05 + index * 0.1;
  const end = start + 0.28;
  const scale = useTransform(progress, [start, end], reduceMotion ? [1, 1] : [0.7, 1]);
  const opacity = useTransform(progress, [start, end], [0, 1]);
  const y = useTransform(progress, [start, end], reduceMotion ? [0, 0] : [80, 0]);

  return (
    <motion.article
      style={{ scale, opacity, y }}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900/40 to-slate-950/80 p-8 backdrop-blur-md md:p-10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{metric.label}</p>
        <p className="mt-5 bg-gradient-to-br from-white via-sky-100 to-cyan-200 bg-clip-text text-7xl font-semibold leading-none text-transparent md:text-8xl">
          {metric.value}
        </p>
        <p className="mt-6 max-w-xs text-sm leading-relaxed text-slate-300 md:text-base">
          {metric.context}
        </p>
      </div>
    </motion.article>
  );
}

export function BigNumberReveal({ eyebrow, heading, metrics }: BigNumberRevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 60, reduceMotion ? 0 : -60]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0.4, 1, 1, 0.6]);

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div style={{ y: headingY, opacity: headingOpacity }}>
          <p className="text-xs uppercase tracking-[0.32em] text-sky-200/80">{eyebrow}</p>
          <h2 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-tight md:text-6xl">
            {heading}
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              progress={scrollYProgress}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
