"use client";

import { useEffect, useState } from "react";

export function useIsMobile(breakpoint = 768) {
  // Inicialización SÍNCRONA en cliente para evitar que Framer Motion
  // configure el estado inicial incorrecto antes del primer useEffect
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
  });

  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(query.matches);
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, [breakpoint]);

  return isMobile;
}
