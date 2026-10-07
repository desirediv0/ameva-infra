import type { Metadata } from "next";

import { PageHero } from "@/components/layout/PageHero";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { CtaBand } from "@/components/home/CtaBand";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Ameva Infrastructure's portfolio across Gurugram and Delhi NCR — independent floors, high-rise residences, villas, plotted townships and Grade-A commercial developments.",
};

const verticals = [
  {
    title: "Residential",
    copy: "High-rise towers and boutique buildings with three homes per floor, planned for cross-ventilation and deep balconies.",
  },
  {
    title: "Independent Floors",
    copy: "One home per level, a private lift into your own foyer, and terrace rights with the top floor.",
  },
  {
    title: "Villas & Plots",
    copy: "Courtyard villas in the Aravalli foothills and licensed plotted colonies with infrastructure completed before handover.",
  },
  {
    title: "Commercial",
    copy: "Column-free Grade-A floor plates and open-air retail high streets built for occupiers rather than for resale brochures.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Forty-two delivered. *Eight* currently selling."
        copy="Filter by vertical to see live availability, starting prices and possession timelines across every Ameva development in Delhi NCR."
        image="/projects/bptp-gurgaon.jpeg"
        crumbs={[{ label: "Projects" }]}
      />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <ProjectsGrid />
        </div>
      </section>

      <section className="border-t border-navy-900/10 py-24 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="Four Verticals"
            title="Different formats, *identical* build standard."
            copy="Whichever vertical you buy into, the concrete mix, the waterproofing spec and the site team are the same."
          />

          <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v, i) => (
              <RevealItem key={v.title} className="bg-cream-50">
                <div className="group h-full p-7 transition-colors duration-500 hover:bg-cream-100 lg:p-8">
                  <span className="font-sans text-[0.65rem] tracking-[0.2em] text-steel-600">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 text-2xl leading-tight text-navy-900">
                    {v.title}
                  </h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-navy-900/60">
                    {v.copy}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
