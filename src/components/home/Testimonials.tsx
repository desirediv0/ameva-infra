"use client";

import { AnimatePresence, motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    quote:
      "We were shown a 3,240 sq. ft. floor and we measured 3,238 on possession day. After two previous builders in Gurugram, that two-foot difference is the most reassuring thing anyone has ever done for us.",
    name: "Rohit & Meera Anand",
    role: "Ameva Aurum · Sector 57",
    stars: 5,
  },
  {
    quote:
      "I bought at Quorum as an investor and expected the usual silence after booking. Instead I got a monthly construction photo set and a quarterly cost statement. It is a low bar and nobody else clears it.",
    name: "Vikram Sethi",
    role: "Ameva Quorum · Sector 66",
    stars: 5,
  },
  {
    quote:
      "The site engineer walked my father through the raft foundation reinforcement for forty minutes because he asked. That single afternoon is why our family has now bought two homes here.",
    name: "Ananya Raghavan",
    role: "Skyline Heights · Sector 106",
    stars: 5,
  },
  {
    quote:
      "Possession slipped by six weeks and the penalty cheque arrived before I had finished drafting the email. I did not know a developer could simply do the thing it wrote in the contract.",
    name: "Karan Malhotra",
    role: "Nova Residences · Sector 65",
    stars: 5,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = useCallback((next: number) => {
    setDir(next > 0 ? 1 : -1);
    setIndex((i) => (i + next + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const t = setInterval(() => go(1), 7000);
    return () => clearInterval(t);
  }, [go]);

  const t = testimonials[index];

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 size-[34rem] rounded-full bg-steel-600/8 blur-[140px]"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="Client Voices"
          title="Three hundred reviews. *One recurring* theme."
          align="center"
          className="mx-auto"
        />

        <div className="relative mx-auto mt-16 max-w-4xl">
          <Quote
            className="absolute -top-6 left-0 size-16 text-steel-600/15 lg:-left-8"
            strokeWidth={1}
          />

          <div className="relative min-h-[19rem] sm:min-h-[15rem]">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.blockquote
                key={index}
                custom={dir}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="text-center"
              >
                <div className="flex justify-center gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-sand-400 text-sand-400" />
                  ))}
                </div>

                <p className="mt-7 font-display text-2xl leading-[1.4] text-navy-900 sm:text-3xl lg:text-[2.1rem]">
                  “{t.quote}”
                </p>

                <footer className="mt-8">
                  <p className="text-sm font-medium text-navy-900">{t.name}</p>
                  <p className="mt-1 text-[0.78rem] text-steel-600">{t.role}</p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <Reveal>
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                onClick={() => go(-1)}
                aria-label="Previous testimonial"
                className="grid size-11 place-items-center rounded-full border border-navy-900/18 text-navy-900 transition-colors duration-300 hover:border-steel-600 hover:bg-steel-600 hover:text-cream-50"
              >
                <ArrowLeft className="size-4" strokeWidth={1.75} />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDir(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === index
                        ? "w-8 bg-steel-600"
                        : "w-1.5 bg-navy-900/20 hover:bg-navy-900/45"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                aria-label="Next testimonial"
                className="grid size-11 place-items-center rounded-full border border-navy-900/18 text-navy-900 transition-colors duration-300 hover:border-steel-600 hover:bg-steel-600 hover:text-cream-50"
              >
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
