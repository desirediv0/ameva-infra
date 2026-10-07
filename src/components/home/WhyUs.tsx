"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { EASE } from "@/lib/motion";
import { CalendarCheck, HardHat, Ruler, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const pillars = [
  {
    icon: Ruler,
    title: "Design That Ages Well",
    copy: "We plan for the twentieth year, not the launch weekend — deep balconies, cross-ventilation, and material choices that look better weathered.",
    image:
      "/projects/sector-46-gurgaon.jpeg",
  },
  {
    icon: HardHat,
    title: "In-House Construction",
    copy: "Our own site teams pour every slab. Nothing is handed to a labour contractor, which is why our finishes are consistent across seventeen projects.",
    image:
      "/projects/gk1-new-delhi.jpeg",
  },
  {
    icon: CalendarCheck,
    title: "Handover on the Date",
    copy: "Every booking form carries a delay penalty payable to you. Over ten years, we have disclosed every delay publicly.",
    image:
      "/projects/jindal-global-city-sonipat.jpeg",
  },
  {
    icon: ShieldCheck,
    title: "Titles You Can Verify",
    copy: "RERA registration, DTCP licence and encumbrance certificates are shared before booking — not after the cheque clears.",
    image:
      "/projects/dlf-gurgaon.jpeg",
  },
];

export function WhyUs() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Ameva"
          title="Four things we refuse to *compromise* on."
          copy="Real estate is sold on renders and judged on possession day. These are the commitments that survive the gap between the two."
        />

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <RevealItem key={p.title}>
              <div
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                className="group relative flex h-full min-h-[21rem] flex-col justify-between overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-lg hover:shadow-navy-900/8"
              >
                {/* hover image wash */}
                <motion.div
                  aria-hidden
                  className="absolute inset-0 -z-10"
                  animate={{ opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <Image
                    src={p.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="scale-105 object-cover"
                  />
                  <span className="absolute inset-0 bg-cream-50/78" />
                </motion.div>

                <div>
                  <span className="grid size-12 place-items-center rounded-xl bg-steel-600/10 text-steel-600 transition-colors duration-500 group-hover:bg-steel-600 group-hover:text-cream-50">
                    <p.icon className="size-5" strokeWidth={1.5} />
                  </span>

                  <h3 className="mt-6 text-2xl leading-tight text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-navy-900/62">
                    {p.copy}
                  </p>
                </div>

                <span className="mt-8 font-display text-5xl text-navy-900/10 transition-colors duration-500 group-hover:text-steel-600/25">
                  0{i + 1}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
