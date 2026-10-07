"use client";

import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import { EASE } from "@/lib/motion";
import { categories, projects } from "@/lib/projects";
import { MoreProjectsCard, ProjectCard } from "@/components/ui/ProjectCard";

export function ProjectsGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((p) => p.category === active),
    [active]
  );

  const countFor = (c: (typeof categories)[number]) =>
    c === "All" ? projects.length : projects.filter((p) => p.category === c).length;

  return (
    <div>
      {/* Filter rail */}
      <div className="flex flex-wrap items-center justify-between gap-6 border-b border-navy-900/10 pb-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-cream-50"
                    : "text-navy-900/62 hover:text-navy-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-steel-600"
                    transition={{ duration: 0.45, ease: EASE }}
                  />
                )}
                <span className="relative z-10">
                  {c}
                  <span
                    className={`ml-1.5 text-[0.68rem] ${
                      isActive ? "text-cream-50/60" : "text-navy-900/40"
                    }`}
                  >
                    {countFor(c)}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <p className="text-[0.72rem] tracking-[0.16em] text-navy-900/45 uppercase">
          Showing {filtered.length} of {projects.length}
        </p>
      </div>

      {/* Grid */}
      <motion.div layout className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
            >
              <ProjectCard project={p} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
        {(active === "All" || active === "Residential") && <MoreProjectsCard />}
      </motion.div>

      {filtered.length === 0 && (
        <p className="py-10 text-center text-navy-900/52">
          Nothing in this category just yet — check back shortly.
        </p>
      )}
    </div>
  );
}
