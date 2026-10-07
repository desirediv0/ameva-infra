"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const milestones = [
  {
    year: "2016",
    title: "Single Plot",
    copy: "Ameva begins with one plot in Sonipat — the first foundation of everything that followed.",
  },
  {
    year: "2017",
    title: "We Build",
    copy: "We start constructing in-house, taking full ownership of quality from foundation to finish.",
  },
  {
    year: "2019",
    title: "Expansion of team and area of construction",
    copy: "More of the team and more area of construction — we scale up to take on larger sites.",
  },
  {
    year: "2021",
    title: "More Expansion",
    copy: "The team keeps growing and so does the area under construction.",
  },
  {
    year: "2023",
    title: "Commercial projects",
    copy: "Construction of commercial projects begins, widening the portfolio beyond residences.",
  },
  {
    year: "2026",
    title: "1.4M sq. ft. · 17 projects",
    copy: "1.4M sq. ft. delivered across 17 projects, with 119 families.",
  },
];

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.9"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute left-[4.6rem] top-2 hidden h-[calc(100%-3rem)] w-px bg-navy-900/12 lg:block">
        <motion.div style={{ scaleY, originY: 0 }} className="h-full w-full bg-steel-600" />
      </div>

      <ol className="space-y-12">
        {milestones.map((m, i) => (
          <li key={m.year}>
            <Reveal delay={i * 0.04} amount={0.4}>
              <div className="group grid gap-4 lg:grid-cols-[9rem_1fr] lg:gap-10">
                <div className="flex items-start gap-5">
                  <span className="font-display text-3xl leading-none text-steel-600 lg:text-4xl">
                    {m.year}
                  </span>
                  <span className="mt-1.5 hidden size-2.5 shrink-0 rounded-full bg-cream-50 ring-2 ring-cream-100/25 transition-all duration-500 group-hover:bg-steel-600 group-hover:ring-steel-400/40 lg:block lg:translate-x-[0.15rem]" />
                </div>

                <div className="border-b border-navy-900/10 pb-8">
                  <h3 className="text-2xl leading-tight text-navy-900">{m.title}</h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-navy-900/62">
                    {m.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
