"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";

export function CinematicBackground() {
  const reduceMotion = useReducedMotion() ?? false;
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();

  const hueShift = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, -20]);
  const filter = useTransform(hueShift, (h) => `hue-rotate(${h}deg)`);

  const orbAY = useTransform(scrollYProgress, [0, 1], [0, -480]);
  const orbAX = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const orbBY = useTransform(scrollYProgress, [0, 1], [0, 380]);
  const orbBX = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const orbCY = useTransform(scrollYProgress, [0, 1], [0, -260]);
  const orbCOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0.55, 0.85, 0.6, 0.4]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.2, 0.85, 1], [0.18, 0.4, 0.32, 0.16]);

  // Móvil: completamente estático, sin scroll tracking, sin filtros CSS pesados
  if (isMobile || reduceMotion) {
    return (
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,33,66,0.95)_0%,_rgba(8,14,26,1)_50%,_rgba(4,8,16,1)_100%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(173,206,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(173,206,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute -left-20 top-[8%] h-[260px] w-[260px] rounded-full bg-cyan-400/20 blur-[70px]" />
        <div className="absolute -right-20 top-[45%] h-[300px] w-[300px] rounded-full bg-indigo-400/20 blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.6)_0%,transparent_55%)]" />
      </div>
    );
  }

  return (
    <motion.div
      aria-hidden
      style={{ filter }}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(13,33,66,0.95)_0%,_rgba(8,14,26,1)_50%,_rgba(4,8,16,1)_100%)]" />

      <motion.div
        style={{ opacity: gridOpacity }}
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(173,206,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(173,206,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      <motion.div
        style={{ y: orbAY, x: orbAX }}
        className="absolute -left-32 top-[10%] h-[520px] w-[520px] rounded-full bg-cyan-400/25 blur-[140px]"
      />
      <motion.div
        style={{ y: orbBY, x: orbBX }}
        className="absolute -right-32 top-[40%] h-[620px] w-[620px] rounded-full bg-indigo-400/25 blur-[160px]"
      />
      <motion.div
        style={{ y: orbCY, opacity: orbCOpacity }}
        className="absolute left-[20%] top-[75%] h-[460px] w-[460px] rounded-full bg-fuchsia-400/15 blur-[160px]"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.65)_0%,transparent_55%)]" />
    </motion.div>
  );
}
