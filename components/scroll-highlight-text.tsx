"use client";

import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";
import { useIsMobile } from "@/lib/use-is-mobile";

type ScrollHighlightTextProps = {
  text: string;
  eyebrow?: string;
  className?: string;
};

function HighlightWord({
  word,
  index,
  total,
  progress,
  reduceMotion,
  useBlur
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
  useBlur: boolean;
}) {
  const start = (index / total) * 0.9;
  const end = ((index + 1) / total) * 0.9 + 0.05;
  const opacity = useTransform(progress, [start, end], reduceMotion ? [1, 1] : [0.22, 1]);
  const blur = useTransform(progress, [start, end], reduceMotion || !useBlur ? ["0px", "0px"] : ["6px", "0px"]);
  const filter = useTransform(blur, (b) => (useBlur ? `blur(${b})` : "none"));

  return (
    <motion.span
      style={useBlur ? { opacity, filter } : { opacity }}
      className="mr-[0.18em] inline-block leading-[1.05]"
    >
      {word}
    </motion.span>
  );
}

export function ScrollHighlightText({ text, eyebrow, className }: ScrollHighlightTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const isMobile = useIsMobile();

  // Móvil: rango más amplio para que la animación se complete
  // aunque el usuario scroll rápido en pantallas cortas
  const offset: ["start 0.95" | "start 0.85", "end 0.15" | "end 0.4"] = isMobile
    ? ["start 0.95", "end 0.15"]
    : ["start 0.85", "end 0.4"];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset
  });

  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="mb-5 text-xs uppercase tracking-[0.32em] text-sky-200/80"
          >
            {eyebrow}
          </motion.p>
        )}
        <h2 className="text-balance text-2xl font-semibold leading-[1.12] text-white md:text-4xl lg:text-5xl">
          {words.map((word, index) => (
            <HighlightWord
              key={`${word}-${index}`}
              word={word}
              index={index}
              total={words.length}
              progress={scrollYProgress}
              reduceMotion={reduceMotion}
              useBlur={!isMobile}
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
