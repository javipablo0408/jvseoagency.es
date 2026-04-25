"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const services = [
  { label: "Diseño web", href: "/servicios/diseno-web", desc: "Webs corporativas y ecommerce" },
  { label: "Apps a medida", href: "/servicios/desarrollo-apps", desc: "Paneles, SaaS y apps móviles" },
  { label: "Automatización IA", href: "/servicios/automatizacion-ia", desc: "Flujos n8n y agentes IA" }
];

const navLinks = [
  { label: "Precios", href: "/precios" },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Blog", href: "/blog" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="flex w-full items-center justify-between bg-slate-950/60 px-5 py-3 backdrop-blur-xl md:px-8">
        {/* Logo */}
        <a
          href="/"
          onClick={() => setOpen(false)}
          className="text-xs font-medium uppercase tracking-[0.28em] text-slate-200"
        >
          JVSEO AGENCY
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {/* Servicios dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-slate-300 transition hover:text-white"
            >
              Servicios
              <motion.svg
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                width="10" height="10" viewBox="0 0 10 10" fill="none"
                className="text-slate-400"
              >
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.97 }}
                  transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border border-white/12 bg-slate-900/90 p-2 shadow-2xl backdrop-blur-xl"
                >
                  {services.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-white/8"
                    >
                      <span className="text-xs font-medium text-white">{s.label}</span>
                      <span className="text-[11px] text-slate-400">{s.desc}</span>
                    </a>
                  ))}
                  <div className="mx-3 my-1.5 h-px bg-white/8" />
                  <a
                    href="/precios"
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-[11px] uppercase tracking-[0.14em] text-sky-300 transition-colors hover:bg-white/8"
                  >
                    Ver precios →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-[0.15em] text-slate-300 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-2 md:gap-3">
          <a
            href="/contacto"
            className="hidden rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-black transition hover:bg-slate-100 md:inline-block"
          >
            Contactar
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

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-[52px] z-40 flex flex-col bg-slate-950/95 px-6 pb-10 pt-6 backdrop-blur-2xl md:hidden"
          >
            <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.14),transparent_55%),radial-gradient(circle_at_85%_85%,rgba(99,102,241,0.12),transparent_55%)]" />

            <ul className="flex flex-col">
              {/* Services accordion */}
              <motion.li
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05, ease: [0.23, 1, 0.32, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold text-white"
                >
                  <span>Servicios</span>
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-base text-slate-400"
                  >
                    →
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      {services.map((s) => (
                        <li key={s.href}>
                          <a
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="flex items-center gap-3 border-b border-white/6 py-3 pl-4 text-base text-slate-300 transition hover:text-white"
                          >
                            <span className="h-1 w-1 rounded-full bg-sky-400" />
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              {/* Other nav links */}
              {navLinks.map((item, index) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.09 + index * 0.04, ease: [0.23, 1, 0.32, 1] }}
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
              transition={{ duration: 0.5, delay: 0.22, ease: [0.23, 1, 0.32, 1] }}
              className="mt-auto pt-8"
            >
              <a
                href="/contacto"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-white via-sky-100 to-cyan-100 px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-slate-950 shadow-[0_18px_60px_-18px_rgba(125,211,252,0.6)]"
              >
                Contactar
              </a>
              <div className="mt-5 flex flex-col gap-1 text-center text-xs uppercase tracking-[0.18em] text-slate-400">
                <a href="mailto:info@jvseoagency.com" className="transition hover:text-white">
                  info@jvseoagency.com
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
