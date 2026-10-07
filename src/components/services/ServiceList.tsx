"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/motion";

export type Service = {
  n: string;
  title: string;
  copy: string;
  points: string[];
  image?: string;
};

/**
 * Editorial service list — hovering a row floats its image alongside the
 * cursor. Falls back to a static image grid on touch / narrow screens.
 */
export function ServiceList({ services }: { services: Service[] }) {
  const [active, setActive] = useState<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 150, damping: 20, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 150, damping: 20, mass: 0.5 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - 170);
    y.set(e.clientY - rect.top - 120);
  };

  return (
    <div className="relative" onMouseMove={onMove}>
      {/* Images hidden for now — re-enable by restoring `lg:block` here and removing `hidden` on the mobile image below. */}
      <motion.div
        aria-hidden
        style={{ x: sx, y: sy }}
        animate={{ opacity: active !== null ? 1 : 0, scale: active !== null ? 1 : 0.9 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="pointer-events-none absolute left-0 top-0 z-20 hidden h-60 w-[21rem] overflow-hidden rounded-2xl"
      >
        {services.map((s, i) => s.image && (
          <motion.div
            key={s.title}
            animate={{ opacity: active === i ? 1 : 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <Image
              src={s.image}
              alt=""
              fill
              sizes="336px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-cream-50/25" />
          </motion.div>
        ))}
      </motion.div>

      <ul className="border-t border-navy-900/10">
        {services.map((s, i) => (
          <li
            key={s.title}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="group relative border-b border-navy-900/10"
          >
            {/* sweep background */}
            <span
              aria-hidden
              className="absolute inset-0 origin-left scale-x-0 bg-cream-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
            />

            <div className="relative grid gap-5 px-1 py-9 lg:grid-cols-12 lg:items-start lg:gap-8 lg:px-6">
              <div className="flex items-baseline gap-5 lg:col-span-5">
                <span className="font-sans text-[0.65rem] tracking-[0.2em] text-steel-600">
                  {s.n}
                </span>
                <h3 className="text-3xl leading-tight text-navy-900 transition-colors duration-500 group-hover:text-steel-700 sm:text-4xl">
                  {s.title}
                </h3>
              </div>

              <p className="text-[0.95rem] leading-relaxed text-navy-900/62 lg:col-span-4">
                {s.copy}
              </p>

              <div className="lg:col-span-3">
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-[0.82rem] text-navy-900/58"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-steel-600" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="absolute right-0 top-9 hidden size-10 place-items-center rounded-full border border-navy-900/18 text-navy-900 transition-colors duration-500 group-hover:border-steel-600 group-hover:bg-steel-600 group-hover:text-cream-50 lg:grid">
                <ArrowUpRight className="size-4" strokeWidth={1.75} />
              </span>
            </div>

                      </li>
        ))}
      </ul>
    </div>
  );
}
