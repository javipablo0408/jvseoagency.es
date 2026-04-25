"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { ACTIVE_MOTION_PRESET, motionPresetConfig } from "@/lib/motion-presets";

type AppleRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function AppleReveal({ children, className, delay = 0, amount = 0.25 }: AppleRevealProps) {
  const reduceMotion = useReducedMotion();
  const preset = motionPresetConfig[ACTIVE_MOTION_PRESET];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : preset.revealY, scale: reduceMotion ? 1 : 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduceMotion ? 0 : preset.revealDuration, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
