import type { Metadata } from "next";
import Image from "next/image";
import { Compass, Gem, Handshake, Leaf } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { StatsBand } from "@/components/home/StatsBand";
import { CtaBand } from "@/components/home/CtaBand";
import { Timeline } from "@/components/about/Timeline";
import { Team } from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Ameva Infrastructure has delivered 17 projects and 1.4 million sq. ft. since 2016 — with a 52-strong in-house team and 119 happy families.",
};

const values = [
  {
    icon: Gem,
    title: "Substance over spectacle",
    copy: "We would rather spend the budget on a better waterproofing membrane than on a taller entrance arch. Buyers notice the difference in year seven.",
  },
  {
    icon: Handshake,
    title: "The document is the promise",
    copy: "Whatever we say in a meeting goes into the agreement. If it cannot survive being written down, we do not say it.",
  },
  {
    icon: Compass,
    title: "Location before land price",
    copy: "We have walked away from cheap parcels for ten years. Every site we buy is within ten minutes of an arterial road and a working school.",
  },
  {
    icon: Leaf,
    title: "Build for the long climate",
    copy: "Deep shading, cross-ventilation, treated water reuse and solar-ready roofs are standard, not premium add-ons sold back to you.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ameva"
        title="Ten years of *steadily* building it right."
        copy="We are a Sonipat developer with an in-house construction arm, a published specification and a habit of handing over on the date we promised."
        image="/projects/ameva-head-office.jpeg"
        crumbs={[{ label: "About Us" }]}
      />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="container-x grid gap-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-steel-600">
                <span className="h-px w-8 bg-steel-600/45" />
                Our Story
              </span>
            </Reveal>
            <AnimatedText
              text="It began with a *walked-off* construction site."
              delay={0.1}
              className="mt-5 text-4xl leading-[1.06] text-navy-900 sm:text-5xl"
            />
          </div>

          <div className="space-y-6 text-[0.975rem] leading-relaxed text-navy-900/64 lg:col-span-7">
            <Reveal delay={0.15}>
              <p>
                In 2016, at the very start of the business, a labour contractor
                abandoned one of our sites midway through a slab pour. We spent
                eleven weeks and a great deal of money making it right, and then
                made a decision that has defined the company since: we would
                never again hand construction to somebody whose name was not on
                our payroll.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p>
                Today the in-house construction division runs to 52 people and is still expanding —
                engineers, supervisors, finishing crews and a quality cell that
                reports to the board rather than to the project manager. It is
                slower to scale than the alternative and it is the single reason
                a bathroom in a 2016 project looks the same as one poured this
                year.
              </p>
            </Reveal>
            <Reveal delay={0.29}>
              <p>
                The rest followed from that. If you control the build, you can
                publish the specification. If you can publish the specification,
                you can put a penalty on the delivery date. And if you can do
                both, you stop needing to oversell in the brochure.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {[
                  { k: "52", v: "In-house team — still expanding" },
                  { k: "17", v: "Projects delivered" },
                  { k: "119", v: "Happy families" },
                ].map((s) => (
                  <div key={s.v} className="rounded-xl border border-navy-900/10 bg-white p-5 shadow-sm shadow-navy-900/5">
                    <p className="font-display text-3xl text-navy-900">{s.k}</p>
                    <p className="mt-1.5 text-[0.72rem] tracking-wide text-navy-900/52">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="container-x">
        <Reveal>
          <div className="relative aspect-16/9 overflow-hidden rounded-3xl lg:aspect-21/9">
            <Image
              src="/projects/bptp-gurgaon.jpeg"
              alt="An Ameva Infrastructure development under construction"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/45 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-md font-display text-2xl leading-tight text-cream-100 sm:bottom-9 sm:left-9 sm:text-3xl">
              Every slab on every project, poured by people we employ.
            </p>
          </div>
        </Reveal>
      </section>

      <StatsBand />

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Believe"
            title="Four principles that survive *every* budget review."
            copy="These are not brand values written by an agency. Each one has cost us a deal at some point, which is roughly how we know they are real."
          />

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <RevealItem key={v.title}>
                <div className="group flex h-full gap-6 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-lg hover:shadow-navy-900/8 lg:p-9">
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-steel-600/10 text-steel-600 transition-colors duration-500 group-hover:bg-steel-600 group-hover:text-cream-50">
                    <v.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="font-sans text-[0.65rem] tracking-[0.2em] text-navy-900/35">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1.5 text-2xl leading-tight text-navy-900">
                      {v.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-navy-900/62">
                      {v.copy}
                    </p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-navy-900/10 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Company Journey"
            title="Our journey, *2016 to 2026*."
          />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-navy-900/10 py-24 lg:py-32">
        <div className="container-x">
          <SectionHeading
            eyebrow="Leadership"
            title="The person who *signs off* on everything."
            copy="A hands-on founder you can meet before you book."
          />
          <div className="mt-14">
            <Team />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
