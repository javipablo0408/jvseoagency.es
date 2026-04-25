"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Servicios web", href: "/servicios/diseno-web" },
  { label: "Apps e IA", href: "/servicios/desarrollo-apps" },
  { label: "Casos", href: "/casos" },
  { label: "Blog", href: "/blog" },
  { label: "Proceso", href: "/#proceso" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/contacto" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-slate-950/60 px-5 py-3 backdrop-blur-xl md:px-8">
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="text-xs font-medium uppercase tracking-[0.28em] text-slate-200"
        >
          JVSEO AGENCY
        </a>

        <div className="hidden items-center gap-5 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="/contacto"
            className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-black md:inline-block"
          >
            Agendar
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          >
            <span className="sr-only">{open ? "Cerrar menu" : "Abrir menu"}</span>
            <span className="relative block h-3.5 w-5">
              <motion.span
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="absolute left-0 top-0 block h-[1.5px] w-5 origin-center bg-white"
              />
              <motion.span
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-[6px] block h-[1.5px] w-5 bg-white"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="absolute left-0 top-[12px] block h-[1.5px] w-5 origin-center bg-white"
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-[60px] z-40 flex flex-col bg-slate-950/92 px-6 pb-10 pt-8 backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(99,102,241,0.16),transparent_55%)]" />

            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.05 + index * 0.04,
                    ease: [0.23, 1, 0.32, 1]
                  }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold text-white transition hover:text-sky-200"
                  >
                    <span>{item.label}</span>
                    <span className="text-base text-slate-400">→</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.05 + navItems.length * 0.04,
                ease: [0.23, 1, 0.32, 1]
              }}
              className="mt-auto pt-10"
            >
              <a
                href="/contacto"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-white via-sky-100 to-cyan-100 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-[0_18px_60px_-18px_rgba(125,211,252,0.6)]"
              >
                Agendar llamada
              </a>
              <div className="mt-6 flex flex-col gap-1 text-center text-xs uppercase tracking-[0.18em] text-slate-400">
                <a href="mailto:info@jvseoagency.es" className="transition hover:text-white">
                  info@jvseoagency.es
                </a>
                <a href="tel:+34618967972" className="transition hover:text-white">
                  +34 618 967 972
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
