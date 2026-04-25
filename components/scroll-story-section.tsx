"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef, useState } from "react";
import { ACTIVE_MOTION_PRESET, motionPresetConfig } from "@/lib/motion-presets";

type StoryScene = {
  label: string;
  title: string;
  text: string;
};

type ScrollStorySectionProps = {
  eyebrow: string;
  heading: string;
  intro: string;
  scenes: StoryScene[];
};

export function ScrollStorySection({
  eyebrow,
  heading,
  intro,
  scenes
}: ScrollStorySectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const reduceMotion = useReducedMotion();
  const preset = motionPresetConfig[ACTIVE_MOTION_PRESET];
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const baseY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 34, reduceMotion ? 0 : -34]);
  const sceneCount = scenes.length;
  const breakpoints = useMemo(
    () => Array.from({ length: sceneCount + 1 }, (_, i) => i / sceneCount),
    [sceneCount]
  );

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = Math.min(
      sceneCount - 1,
      breakpoints.findIndex((point) => value < point) - 1
    );
    setActiveIndex(next < 0 ? 0 : next);
  });

  return (
    <section ref={sectionRef} className="relative my-20 h-[170vh]">
      <div className="sticky top-20 grid h-[78vh] items-center gap-6 rounded-3xl border border-sky-100/15 bg-slate-900/45 p-8 md:grid-cols-[1fr_1.1fr] md:p-12">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{eyebrow}</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{heading}</h2>
          <p className="mt-4 max-w-xl text-slate-300">{intro}</p>
        </div>

        <motion.div style={{ y: baseY }} className="relative h-72 overflow-hidden rounded-2xl border border-sky-100/15 bg-slate-950/65 p-6 md:h-80">
          {scenes.map((scene, index) => (
            <motion.article
              key={scene.title}
              animate={{
                opacity: index === activeIndex ? 1 : 0,
                y: reduceMotion ? 0 : index === activeIndex ? 0 : 8
              }}
              transition={{ duration: reduceMotion ? 0 : preset.sceneFadeDuration, ease: [0.23, 1, 0.32, 1] }}
              className="absolute inset-0 p-6"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{scene.label}</p>
              <h3 className="mt-3 text-2xl font-semibold">{scene.title}</h3>
              <p className="mt-3 max-w-md text-slate-300">{scene.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
