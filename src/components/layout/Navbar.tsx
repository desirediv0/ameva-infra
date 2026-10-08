"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { EASE, EASE_IN_OUT } from "@/lib/motion";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { hasDarkHero } from "@/lib/nav";
import { featuredProjects } from "@/lib/projects";
import { Magnetic } from "@/components/ui/MagneticButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 40);
    setHidden(y > prev && y > 340 && !open);
  });

  // Close the overlay when navigation changes, without an effect round-trip.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  // The home hero is a light band; every other route opens on a dark one.
  // Once the bar condenses it always uses navy ink on cream glass.
  const overDark = !scrolled && hasDarkHero(pathname);
  const inverted = !overDark;

  const ink = inverted ? "text-navy-900" : "text-cream-100";
  const inkMuted = inverted ? "text-navy-900/70" : "text-cream-100/75";
  const rule = inverted ? "border-navy-900/20" : "border-cream-100/20";

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -110 : 0 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
          scrolled
            ? "glass border-b border-navy-900/10 py-3"
            : "border-b border-transparent py-5"
        }`}
      >
        <nav className="container-x flex items-center justify-between gap-6">
          <Link href="/" className="group flex items-center gap-3" aria-label={site.name}>
            <span className={`relative size-14 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-105 sm:size-16 ${inverted ? "" : ""}`}>
              <Image
                src="/logo.png"
                alt=""
                fill
                sizes="64px"
                className={`object-contain ${inverted ? "" : "drop-shadow-[0_0_6px_rgba(255,255,255,0.55)]"}`}
                priority
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className={`font-display text-2xl font-extrabold tracking-tight transition-colors duration-500 sm:text-[1.9rem] ${ink}`}>
                Ameva
              </span>
              <span className={`mt-1.5 text-[0.62rem] font-bold tracking-[0.26em] transition-colors duration-500 sm:text-[0.74rem] ${inverted ? "text-steel-700" : "text-steel-200"}`}>
                INFRASTRUCTURE
              </span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((l) => {
              const active =
                l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`group relative block px-4 py-2 text-sm transition-colors duration-300 ${inkMuted} ${inverted ? "hover:text-navy-900" : "hover:text-cream-100"}`}
                  >
                    {l.label}
                    <span
                      className={`absolute inset-x-4 bottom-1 h-px origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        inverted ? "bg-steel-600" : "bg-steel-300"
                      } ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phoneHref}`}
              className={`hidden items-center gap-2 text-base font-bold transition-colors lg:flex ${ink}`}
            >
              <Phone className="size-4" strokeWidth={2} />
              {site.phone}
            </a>

            <div className="hidden sm:block">
              <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className={`group relative inline-flex items-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-500 ${inverted ? "bg-navy-900 text-cream-50" : "bg-cream-100 text-navy-950"}`}
              >
                <span
                  aria-hidden
                  className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 ${inverted ? "bg-steel-600" : "bg-steel-400"}`}
                />
                <span className="relative z-10">Enquire Now</span>
              </Link>
              </Magnetic>
            </div>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`grid size-10 place-items-center rounded-full border transition-colors hover:border-steel-600 lg:hidden ${rule} ${ink}`}
            >
              <Menu className="size-4.5" strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile / tablet overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE_IN_OUT }}
            className="fixed inset-0 z-[90] flex flex-col bg-cream-50 lg:hidden"
          >
            <div className="container-x flex items-center justify-between py-5">
              <span className="font-display text-xl text-navy-900">Menu</span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-full border border-navy-900/18 text-navy-900"
              >
                <X className="size-4.5" strokeWidth={1.5} />
              </button>
            </div>

            <div className="container-x flex flex-1 flex-col justify-center">
              <ul className="flex flex-col">
                {navLinks.map((l, i) => (
                  <li key={l.href} className="overflow-hidden border-b border-navy-900/10">
                    <motion.div
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.25 + i * 0.07,
                        duration: 0.7,
                        ease: EASE,
                      }}
                    >
                      <Link
                        href={l.href}
                        className="flex items-baseline gap-4 py-5 font-display text-4xl text-navy-900 sm:text-5xl"
                      >
                        <span className="font-sans text-[0.6rem] tracking-[0.2em] text-steel-600">
                          0{i + 1}
                        </span>
                        {l.label}
                      </Link>
                    </motion.div>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="mt-10 grid grid-cols-3 gap-3"
              >
                {featuredProjects.slice(0, 3).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group relative aspect-4/5 overflow-hidden rounded-xl"
                  >
                    <Image
                      src={p.cover}
                      alt={p.name}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 to-transparent" />
                    <span className="absolute inset-x-2 bottom-2 text-[0.6rem] leading-tight text-cream-100">
                      {p.name}
                    </span>
                  </Link>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-navy-900/10 py-6 text-sm text-navy-900/62"
            >
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
