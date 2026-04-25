"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  onClick?: () => void;
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  onClick
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || reduceMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.35);
    y.set(offsetY * 0.45);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseClass =
    "pressable relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-semibold transition";
  const variantClass =
    variant === "primary"
      ? "bg-white text-slate-950 shadow-[0_18px_60px_-18px_rgba(125,211,252,0.65)]"
      : "border border-white/30 text-white hover:border-white/60";

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={{ scale: 0.96 }}
      className={`${baseClass} ${variantClass}`}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-white via-sky-100 to-cyan-100 opacity-0 transition-opacity duration-300 hover:opacity-30" />
      )}
    </motion.a>
  );
}
