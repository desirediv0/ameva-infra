"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { stats } from "@/lib/site";
import { Counter } from "@/components/ui/Counter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-14%", "14%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-125">
        <Image
          src="/projects/bptp-gurgaon.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-navy-950/88" />

      <div className="container-x py-20 lg:py-24">
        <RevealGroup className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((s) => (
            <RevealItem key={s.label}>
              <div className="border-l-2 border-steel-400 pl-6">
                <p className="font-display text-5xl font-extrabold leading-none text-cream-100 lg:text-6xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-sm font-semibold tracking-wide text-cream-100/85">
                  {s.label}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
