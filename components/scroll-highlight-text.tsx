"use client";

import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";

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
  reduceMotion
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduceMotion: boolean;
}) {
  const start = (index / total) * 0.9;
  const end = ((index + 1) / total) * 0.9 + 0.05;
  const opacity = useTransform(progress, [start, end], reduceMotion ? [1, 1] : [0.18, 1]);
  const blur = useTransform(progress, [start, end], reduceMotion ? ["0px", "0px"] : ["6px", "0px"]);
  const filter = useTransform(blur, (b) => `blur(${b})`);

  return (
    <motion.span
      style={{ opacity, filter }}
      className="mr-[0.18em] inline-block leading-[1.05]"
    >
      {word}
    </motion.span>
  );
}

export function ScrollHighlightText({ text, eyebrow, className }: ScrollHighlightTextProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"]
  });

  const words = useMemo(() => text.split(/\s+/).filter(Boolean), [text]);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-5xl px-6">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
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
            />
          ))}
        </h2>
      </div>
    </section>
  );
}
