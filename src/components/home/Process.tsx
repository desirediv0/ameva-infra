"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    n: "01",
    title: "Discovery Call",
    copy: "Twenty minutes on the phone to establish budget, possession timeline and whether you are buying to live or to hold. We will tell you if nothing we have fits.",
  },
  {
    n: "02",
    title: "Curated Shortlist",
    copy: "You receive three to four options with actual carpet areas, floor plates and the full cost sheet — stamp duty, GST and maintenance included, no asterisks.",
  },
  {
    n: "03",
    title: "Site Walkthrough",
    copy: "We visit at your convenience, including the under-construction floors. You meet the site engineer, not just a sales manager.",
  },
  {
    n: "04",
    title: "Legal & Paperwork",
    copy: "Title documents, RERA registration and the encumbrance certificate are shared for independent review before any payment is made.",
  },
  {
    n: "05",
    title: "Handover & After",
    copy: "Keys, a snag-list walkthrough, and a five-year structural warranty. Our facility team stays on the property long after the last unit sells.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.85"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-cream-200/70 py-24 text-navy-900 lg:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Sticky heading */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-steel-600">
                <span className="h-px w-8 bg-steel-600/45" />
                How We Work
              </span>
            </Reveal>

            <AnimatedText
              text="From first call to *fifth year.*"
              delay={0.1}
              className="mt-5 text-4xl leading-[1.06] text-navy-900 sm:text-5xl"
            />

            <Reveal delay={0.25}>
              <p className="mt-6 max-w-md text-[0.975rem] leading-relaxed text-navy-900/65">
                Buying property in NCR is usually an exercise in chasing people
                for information. We have inverted that — every stage below has a
                named owner at Ameva and a document you get to keep.
              </p>

              <div className="mt-9">
                <Button href="/contact" variant="primary">
                  Start the Conversation
                </Button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Steps */}
        <div ref={ref} className="relative lg:col-span-7">
          {/* rail */}
          <div className="absolute left-[1.35rem] top-2 hidden h-[calc(100%-2rem)] w-px bg-navy-900/12 sm:block">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="h-full w-full bg-steel-600"
            />
          </div>

          <ol className="space-y-10">
            {steps.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 0.05} amount={0.4}>
                  <div className="group flex gap-6">
                    <span className="relative z-10 hidden size-11 shrink-0 place-items-center rounded-full border border-navy-900/15 bg-cream-200 font-sans text-xs font-medium tracking-wider text-steel-600 transition-colors duration-500 group-hover:border-steel-600 group-hover:bg-navy-900 group-hover:text-cream-100 sm:grid">
                      {s.n}
                    </span>

                    <div className="flex-1 border-b border-navy-900/12 pb-8">
                      <span className="font-sans text-xs tracking-[0.2em] text-steel-600/75 sm:hidden">
                        {s.n}
                      </span>
                      <h3 className="mt-1 text-2xl leading-tight text-navy-900 sm:mt-0 sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-navy-900/60">
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
