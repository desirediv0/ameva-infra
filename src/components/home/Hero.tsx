"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { EASE } from "@/lib/motion";
import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/MagneticButton";

const SLIDE_MS = 5000;

const quickStats = [
  { k: "1.4M", v: "Sq. Ft. Delivered" },
  { k: "17", v: "Projects Delivered" },
  { k: "10+", v: "Years of Building" },
  { k: "52", v: "In-house Team" },
  { k: "119", v: "Happy Families" },
];

/** Headline lines rise out of their own mask, one after another. */
const line = {
  hidden: { y: "112%" },
  show: (i: number) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.28 + i * 0.1, ease: EASE },
  }),
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const project = featuredProjects[index];
  const count = featuredProjects.length;

  const go = useCallback(
    (n: number) => setIndex(((n % count) + count) % count),
    [count]
  );

  // Autoplay through the featured developments.
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setIndex((i) => (i + 1) % count), SLIDE_MS);
    return () => clearTimeout(t);
  }, [index, paused, count]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-10 sm:pt-30"
    >
      {/* ---------- Backdrop: blueprint grid, brand chevron, soft glow ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,21,38,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,21,38,0.055) 1px, transparent 1px)",
            backgroundSize: "88px 88px",
            maskImage:
              "radial-gradient(ellipse 78% 62% at 50% 42%, black, transparent)",
          }}
        />

        {/* An implied A-frame, echoing the logo mark. */}
        <svg
          className="absolute -right-[8%] top-0 h-full w-[62%] text-navy-900/[0.05]"
          viewBox="0 0 600 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path d="M300 40 L560 780" stroke="currentColor" strokeWidth="1.5" />
          <path d="M300 40 L40 780" stroke="currentColor" strokeWidth="1.5" />
          <path d="M170 410 L430 410" stroke="currentColor" strokeWidth="1.5" />
        </svg>

        <div className="absolute -top-40 right-[6%] size-[38rem] rounded-full bg-steel-400/12 blur-[150px]" />
        <div className="absolute bottom-[-14rem] left-[-8rem] size-[30rem] rounded-full bg-sand-400/10 blur-[150px]" />
      </div>

      <div className="container-x relative w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* ------------------------------ Copy ------------------------------ */}
          <motion.div
            style={reduce ? undefined : { y: copyY, opacity: fade }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: EASE }}
              className="inline-flex items-center gap-2.5 rounded-full border border-navy-900/12 bg-white/70 py-2 pl-3 pr-4 backdrop-blur"
            >
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-steel-500 opacity-70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-steel-600" />
              </span>
              <span className="eyebrow text-navy-900/62">
                Sonipat · Delhi NCR · Since 2016
              </span>
            </motion.div>

            <h1 className="mt-7 text-[clamp(2.2rem,min(5.9vw,8.6vh),4.8rem)] leading-[1.02] tracking-tight text-navy-900">
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  custom={0}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="flex items-center gap-[0.28em]"
                >
                  Landmarks
                  {/* The rotating project sits inside the headline itself. */}
                  <span className="relative inline-block h-[0.74em] w-[1.62em] shrink-0 overflow-hidden rounded-full ring-1 ring-navy-900/10">
                    <AnimatePresence mode="popLayout">
                      <motion.span
                        key={project.slug}
                        initial={{ opacity: 0, scale: 1.12 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.8, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.cover}
                          alt=""
                          fill
                          sizes="160px"
                          className="object-cover"
                          priority
                        />
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  custom={1}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  made to <span className="italic text-steel-600">outlive</span>
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  custom={2}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  className="block"
                >
                  the skyline.
                </motion.span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.8, ease: EASE }}
            >
              <p className="mt-7 max-w-lg text-[0.975rem] leading-relaxed text-navy-900/62">
                Residences, independent floors and commercial landmarks across
                Delhi NCR — engineered to a specification we publish before we
                sell, and handed over on the date we promised.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic strength={0.2}>
                  <Button href="/projects">Explore Projects</Button>
                </Magnetic>
                <Magnetic strength={0.2}>
                  <Button href="/contact" variant="outline">
                    Book a Site Visit
                  </Button>
                </Magnetic>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------------------------- Showcase ---------------------------- */}
          <motion.div
            style={reduce ? undefined : { y: cardY }}
            className="lg:col-span-5"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, clipPath: "inset(14% 0 0 0 round 1.5rem)" }}
                animate={{ opacity: 1, clipPath: "inset(0% 0 0 0 round 1.5rem)" }}
                transition={{ delay: 0.5, duration: 1, ease: EASE }}
              >
                <Link
                href={`/projects/${project.slug}`}
                className="group relative block aspect-3/2 overflow-hidden rounded-3xl shadow-2xl shadow-navy-900/20 sm:aspect-16/10 lg:aspect-auto lg:h-[clamp(20rem,54vh,31rem)]"
                aria-label={`${project.name} — ${project.location}`}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.9, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.cover}
                      alt={project.name}
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Scrims: the caption has to stay readable over any cover photo. */}
                <span className="absolute inset-0 bg-navy-950/15" />
                <span className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-950/60 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-navy-950 via-navy-950/75 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-navy-950/55 px-3.5 py-1.5 text-[0.65rem] tracking-wide text-cream-100/90 backdrop-blur">
                  {project.status}
                </span>
                <span className="absolute right-5 top-5 font-sans text-[0.68rem] tabular-nums tracking-[0.18em] text-cream-100/70">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(count).padStart(2, "0")}
                </span>

                <div className="absolute inset-x-5 bottom-5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.5, ease: EASE }}
                    >
                      <p className="flex items-center gap-1.5 text-[0.72rem] text-steel-300">
                        <MapPin className="size-3.5" strokeWidth={1.5} />
                        {project.location}
                      </p>
                      <h2 className="mt-1.5 text-2xl leading-tight text-cream-100 sm:text-[1.75rem]">
                        {project.name}
                      </h2>
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-4 flex items-end justify-between border-t border-cream-100/20 pt-4">
                    <div>
                      <p className="text-[0.58rem] tracking-[0.18em] text-cream-100/50 uppercase">
                        Status
                      </p>
                      <p className="mt-1 font-display text-xl text-cream-100">
                        {project.status}
                      </p>
                    </div>
                    <span className="grid size-10 place-items-center rounded-full border border-cream-100/30 text-cream-100 transition-colors duration-500 group-hover:border-steel-400 group-hover:bg-steel-400 group-hover:text-navy-950">
                      <ArrowUpRight className="size-4" strokeWidth={1.75} />
                    </span>
                  </div>

                  {/* Autoplay progress */}
                  <div className="mt-4 h-0.5 w-full overflow-hidden rounded-full bg-cream-100/20">
                    <motion.div
                      key={`${project.slug}-bar`}
                      className="h-full origin-left bg-steel-300"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: paused || reduce ? 0 : 1 }}
                      transition={{
                        duration: reduce ? 0 : SLIDE_MS / 1000,
                        ease: "linear",
                      }}
                    />
                  </div>
                </div>
                </Link>
              </motion.div>

              {/* Floating proof chip */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.05, duration: 0.7, ease: EASE }}
                className="absolute -left-4 top-[30%] z-10 hidden rounded-2xl border border-navy-900/10 bg-white/92 px-5 py-4 shadow-xl shadow-navy-900/10 backdrop-blur sm:block lg:-left-11"
              >
                <p className="font-display text-2xl leading-none text-navy-900">
                  100%
                </p>
                <p className="mt-1.5 text-[0.62rem] leading-tight tracking-wide text-navy-900/55">
                  On-time
                  <br />
                  handover
                </p>
              </motion.div>

              {/* Slide selectors */}
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                  {featuredProjects.map((p, i) => (
                    <button
                      key={p.slug}
                      onClick={() => go(i)}
                      aria-label={`Show ${p.name}`}
                      aria-current={i === index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === index
                          ? "w-8 bg-steel-600"
                          : "w-1.5 bg-navy-900/20 hover:bg-navy-900/45"
                      }`}
                    />
                  ))}
                </div>
                <Link
                  href="/projects"
                  className="group flex items-center gap-1.5 text-[0.72rem] tracking-wide text-navy-900/55 transition-colors hover:text-steel-600"
                >
                  All projects
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.75}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ----------------------------- Stat rail ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.8, ease: EASE }}
          className="mt-10 flex items-end justify-between gap-6 border-t border-navy-900/12 pt-6 lg:mt-12"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-10">
            {quickStats.map((s) => (
              <li key={s.v}>
                <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl">
                  {s.k}
                </p>
                <p className="mt-1 text-xs font-semibold tracking-wide text-navy-900/75">
                  {s.v}
                </p>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 items-center gap-3 text-navy-900/45 sm:flex">
            <span className="text-[0.62rem] tracking-[0.2em] uppercase">
              Scroll
            </span>
            <motion.span
              animate={reduce ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-9 place-items-center rounded-full border border-navy-900/18"
            >
              <ArrowDown className="size-3.5" strokeWidth={1.5} />
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
