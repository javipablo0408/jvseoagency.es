"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { ACTIVE_MOTION_PRESET, motionPresetConfig } from "@/lib/motion-presets";
import { useIsMobile } from "@/lib/use-is-mobile";

type AppleRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
};

export function AppleReveal({ children, className, delay = 0, amount }: AppleRevealProps) {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const preset = motionPresetConfig[ACTIVE_MOTION_PRESET];

  // En móvil: threshold más bajo para que los elementos se revelen antes
  // y desplazamiento menor para evitar saltos bruscos
  const threshold = amount ?? (isMobile ? 0.1 : 0.2);
  const revealY = isMobile ? Math.min(preset.revealY, 22) : preset.revealY;
  const duration = isMobile ? Math.min(preset.revealDuration, 0.55) : preset.revealDuration;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduceMotion ? 0 : revealY, scale: reduceMotion ? 1 : 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: threshold }}
      transition={{ duration: reduceMotion ? 0 : duration, delay, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </motion.div>
  );
}
