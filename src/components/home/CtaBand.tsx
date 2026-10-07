"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Magnetic } from "@/components/ui/MagneticButton";

export function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-20 scale-125">
        <Image
          src="/projects/ameva-head-office.jpeg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/92 to-navy-950/70"
      />

      <div className="container-x py-24 lg:py-32">
        <div className="max-w-3xl">
          <Reveal>
            <span className="eyebrow flex items-center gap-3 text-steel-400">
              <span className="h-px w-8 bg-steel-400/50" />
              Let&apos;s Talk
            </span>
          </Reveal>

          <AnimatedText
            text="Book a private walkthrough this *weekend.*"
            delay={0.1}
            accent="text-steel-300"
            className="mt-5 text-4xl leading-[1.05] text-cream-100 sm:text-5xl lg:text-6xl"
          />

          <Reveal delay={0.25}>
            <p className="mt-6 max-w-lg text-[0.975rem] leading-relaxed text-cream-100/65">
              Tell us the budget and the timeline. If we have something that
              fits, you will see it on site with the engineer who built it — and
              if we do not, we will say so on the first call.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.2}>
                <Button href="/contact" variant="onDark">
                  Schedule a Visit
                </Button>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Button href="/projects" variant="onDarkOutline">
                  Browse Portfolio
                </Button>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-wrap gap-x-12 gap-y-5 border-t border-cream-100/15 pt-8">
              <a
                href={`tel:${site.phoneHref}`}
                className="group flex items-center gap-3 text-cream-100/70 transition-colors hover:text-cream-100"
              >
                <span className="grid size-10 place-items-center rounded-full border border-cream-100/20 transition-colors group-hover:border-steel-400 group-hover:text-steel-300">
                  <Phone className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[0.62rem] tracking-[0.18em] text-cream-100/40 uppercase">
                    Call
                  </span>
                  <span className="text-sm">{site.phone}</span>
                </span>
              </a>

              <a
                href={`mailto:${site.salesEmail}`}
                className="group flex items-center gap-3 text-cream-100/70 transition-colors hover:text-cream-100"
              >
                <span className="grid size-10 place-items-center rounded-full border border-cream-100/20 transition-colors group-hover:border-steel-400 group-hover:text-steel-300">
                  <Mail className="size-4" strokeWidth={1.5} />
                </span>
                <span>
                  <span className="block text-[0.62rem] tracking-[0.18em] text-cream-100/40 uppercase">
                    Email
                  </span>
                  <span className="text-sm">{site.salesEmail}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
