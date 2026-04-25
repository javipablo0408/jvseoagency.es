"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/lib/use-is-mobile";

export type ShowcaseCard = {
  eyebrow: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  bullets: string[];
  accent: string;
};

type HorizontalShowcaseProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: ShowcaseCard[];
};

function ShowcaseCardArt({ card, index }: { card: ShowcaseCard; index: number }) {
  return (
    <article
      className="relative flex h-full w-full flex-col overflow-hidden rounded-[28px] border border-white/10 p-6 md:rounded-[32px] md:p-10"
      style={{ background: card.accent }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.18),transparent_40%),radial-gradient(circle_at_82%_82%,rgba(0,0,0,0.35),transparent_55%)]" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-xs font-semibold text-white md:h-9 md:w-9 md:text-sm">
            0{index + 1}
          </span>
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/85 md:text-xs">
            {card.eyebrow}
          </p>
        </div>
        <h3 className="mt-5 max-w-md text-2xl font-semibold leading-tight text-white md:mt-6 md:text-4xl">
          {card.title}
        </h3>
        <p className="mt-3 max-w-lg text-sm text-white/85 md:mt-4 md:text-base">
          {card.description}
        </p>
      </div>

      <div className="relative mt-auto grid gap-4 pt-6 md:grid-cols-[1.2fr_1fr] md:items-end md:gap-6">
        <ul className="grid gap-1.5 text-xs text-white/90 md:gap-2 md:text-sm">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm md:rounded-3xl md:p-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/85 md:text-xs">
            {card.metricLabel}
          </p>
          <p className="mt-1 text-3xl font-semibold text-white md:mt-2 md:text-5xl">{card.metric}</p>
        </div>
      </div>
    </article>
  );
}

export function HorizontalShowcase({ eyebrow, heading, intro, cards }: HorizontalShowcaseProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const totalShift = (cards.length - 1) * (100 / cards.length);
  const x = useTransform(
    scrollYProgress,
    [0.05, 0.92],
    reduceMotion || isMobile ? ["0%", "0%"] : ["0%", `-${totalShift}%`]
  );

  // Mobile: stack vertical con reveals individuales (fluido y sin cortes)
  if (isMobile) {
    return (
      <section className="relative px-6 py-16">
        <div className="mx-auto w-full max-w-xl">
          <p className="text-[10px] uppercase tracking-[0.32em] text-sky-200/80">{eyebrow}</p>
          <h2 className="mt-2 bg-gradient-to-r from-white via-sky-100 to-slate-300 bg-clip-text text-2xl font-semibold leading-tight text-transparent">
            {heading}
          </h2>
          <p className="mt-3 text-sm text-slate-300">{intro}</p>

          <div className="mt-10 space-y-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                className="min-h-[420px]"
              >
                <ShowcaseCardArt card={card} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${cards.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-10">
        <div className="mx-auto mb-5 w-full max-w-6xl px-6 md:mb-8 md:px-10">
          <p className="text-[10px] uppercase tracking-[0.32em] text-sky-200/80 md:text-xs">{eyebrow}</p>
          <h2 className="mt-2 max-w-3xl bg-gradient-to-r from-white via-sky-100 to-slate-300 bg-clip-text text-2xl font-semibold leading-tight text-transparent md:mt-3 md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-300 md:mt-3 md:text-base">{intro}</p>
        </div>

        <motion.div
          style={{ x, width: `${cards.length * 100}%` }}
          className="flex min-h-0 flex-1 gap-5 px-6 pb-2 md:gap-8 md:px-10"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0.85, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="h-full w-full"
            >
              <ShowcaseCardArt card={card} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mx-auto mt-6 flex w-full max-w-6xl items-center gap-2 px-6 md:px-10">
          {cards.map((_, index) => (
            <span key={index} className="h-[3px] flex-1 rounded-full bg-white/15" />
          ))}
        </div>
      </div>
    </section>
  );
}
