"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  meta?: string[];
};

export function PageHero({ eyebrow, title, highlight, subtitle, meta }: PageHeroProps) {
  const ref = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -120]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 0.86]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.0]);
  const orbY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 200]);
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, reduceMotion ? 1 : 1.5]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[78vh] items-center justify-center overflow-hidden px-6 pt-20 md:px-10 md:pt-28"
    >
      <motion.div
        aria-hidden
        style={{ y: orbY, scale: orbScale }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(59,140,255,0.4)_0%,_rgba(124,212,255,0.16)_45%,_transparent_70%)] blur-2xl shimmer-glow"
      />

      <motion.div
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
        className="relative mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="mb-5 text-xs uppercase tracking-[0.42em] text-sky-200/85 md:mb-6"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
          className="text-balance text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl lg:text-[80px]"
        >
          <span className="block text-white">{title}</span>
          {highlight && <span className="text-gradient-cool block">{highlight}</span>}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
            className="mt-7 max-w-2xl text-balance text-base text-slate-300 md:text-xl"
          >
            {subtitle}
          </motion.p>
        )}

        {meta && meta.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3"
          >
            {meta.map((item) => (
              <span
                key={item}
                className="glass-strong rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-slate-200"
              >
                {item}
              </span>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
