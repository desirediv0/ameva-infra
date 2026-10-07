"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Magnetic } from "@/components/ui/MagneticButton";

const points = [
  "One construction team from foundation to handover — never subcontracted",
  "Specifications published in the agreement, not just the brochure",
  "Penalty clause on delayed possession, written into every booking",
];

export function Intro() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBig = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const ySmall = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Image composition */}
        <div className="relative">
          <motion.div
            style={{ y: yBig }}
            className="relative aspect-4/5 overflow-hidden rounded-2xl sm:aspect-3/4"
          >
            <Image
              src="/projects/eldeco-sonipat.jpeg"
              alt="Interior of an Ameva residence"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: ySmall }}
            className="absolute -bottom-10 -right-2 w-2/5 overflow-hidden rounded-xl ring-1 ring-navy-900/12 sm:-right-8 sm:w-1/2"
          >
            <div className="relative aspect-square">
              <Image
                src="/projects/rangoli-green-sonipat.jpeg"
                alt="Ameva villa exterior"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating badge */}
          <Reveal delay={0.3} direction="left">
            <div className="glass absolute -left-2 top-8 rounded-xl border border-navy-900/14 px-5 py-4 sm:-left-8">
              <p className="font-display text-3xl text-navy-900">18</p>
              <p className="mt-0.5 text-[0.65rem] leading-tight tracking-wide text-navy-900/58">
                Years of
                <br />
                Building
              </p>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-steel-600">
              <span className="h-px w-8 bg-steel-600/45" />
              Who We Are
            </span>
          </Reveal>

          <AnimatedText
            text="A developer judged by what it *hands over.*"
            delay={0.1}
            className="mt-5 text-4xl leading-[1.06] text-navy-900 sm:text-5xl"
          />

          <Reveal delay={0.25}>
            <div className="mt-7 space-y-5 text-[0.975rem] leading-relaxed text-navy-900/62">
              <p>
                Ameva Infrastructure started in 2016 with a single plot
                in Sonipat and a fairly unglamorous conviction: that most
                disputes in Indian real estate come down to a gap between what
                was shown and what was built.
              </p>
              <p>
                So we closed the gap. Our construction arm is in-house, our
                material specifications are attached to the agreement, and every
                booking carries a delay penalty that costs us money if we slip.
                Ten years and seventeen projects later, we have never been
                to court with a buyer.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <ul className="mt-8 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-navy-900/70">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-steel-600/12 text-steel-600">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-10">
              <Magnetic strength={0.2}>
                <Button href="/about" variant="outline">
                  More About Ameva
                </Button>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
