import type { Metadata } from "next";
import { Building2, FileCheck2, Handshake, KeyRound } from "lucide-react";

import { PageHero } from "@/components/layout/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ServiceList, type Service } from "@/components/services/ServiceList";
import { CtaBand } from "@/components/home/CtaBand";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential and commercial development, plotted townships, turnkey interiors, facility management and joint development partnerships from Ameva Infrastructure.",
};

const services: Service[] = [
  {
    n: "01",
    title: "Residential Development",
    copy: "High-rise towers, boutique buildings and independent floors — planned around light, cross-ventilation and layouts that still work when the family grows.",
    points: ["Master planning", "Unit design", "IGBC-rated builds"],
    // image: "/projects/eldeco-sonipat.jpeg", // hidden for now
  },
  {
    n: "02",
    title: "Commercial Development",
    copy: "Grade-A offices and open-air retail high streets built to occupier specification, with column-free plates and services that can be split or merged.",
    points: ["Office towers", "Retail high streets", "Built-to-suit"],
    // image: "/projects/bptp-gurgaon.jpeg", // hidden for now
  },
  {
    n: "03",
    title: "Plotted Townships",
    copy: "Licensed colonies where roads, sewerage, power and the community centre are finished and handed to the RWA before the first plot changes hands.",
    points: ["DTCP licensing", "Full infrastructure", "Approved floor plans"],
    // image: "/projects/rangoli-green-sonipat.jpeg", // hidden for now
  },
  {
    n: "04",
    title: "Turnkey Interiors",
    copy: "A fixed-price interior package delivered by the same team that built the shell — so nobody drills into a beam that was not meant to be drilled.",
    points: ["Fixed-price scope", "90-day delivery", "5-year warranty"],
    // image: "/projects/dlf-gurgaon.jpeg", // hidden for now
  },
  {
    n: "05",
    title: "Facility Management",
    copy: "Our maintenance team stays on the property after the last unit sells, running the plant rooms, lifts and landscaping under an RWA-approved contract.",
    points: ["Plant operations", "Landscaping", "Security & access"],
    // image: "/projects/sector-46-gurgaon.jpeg", // hidden for now
  },
  {
    n: "06",
    title: "Joint Development",
    copy: "For landowners holding parcels in NCR — we take the approvals, construction and sales risk, and you take a share of the developed area or revenue.",
    points: ["Land aggregation", "Revenue or area share", "Full approvals"],
    // image: "/projects/gk1-new-delhi.jpeg", // hidden for now
  },
];

const landowner = [
  {
    icon: Handshake,
    title: "Transparent share",
    copy: "Area or revenue share agreed upfront and registered — no floating percentages tied to sales performance.",
  },
  {
    icon: FileCheck2,
    title: "We take approval risk",
    copy: "CLU, DTCP licence, RERA registration and environmental clearances are our cost and our timeline, not yours.",
  },
  {
    icon: Building2,
    title: "Built by our own team",
    copy: "The same in-house construction division that built our seventeen projects, not a rotating cast of contractors.",
  },
  {
    icon: KeyRound,
    title: "Handover you can audit",
    copy: "Quarterly statements of sales, collections and construction spend, shared whether or not you ask for them.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Six things, done *properly.*"
        copy="Ameva is a developer rather than a marketplace. Everything below is executed by people on our payroll, from land aggregation through to the fifth year of maintenance."
        image="/projects/ameva-head-office.jpeg"
        crumbs={[{ label: "Services" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <ServiceList services={services} />
        </div>
      </section>

      {/* Landowner partnership */}
      <section className="border-t border-navy-900/10 py-24 lg:py-28">
        <div className="container-x">
          <SectionHeading
            eyebrow="For Landowners"
            title="Sitting on land in NCR? *Partner* instead of selling."
            copy="We have completed eleven joint developments since 2013. Every one of them paid the landowner more than the prevailing outright sale price for that parcel."
          />

          <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {landowner.map((l) => (
              <RevealItem key={l.title}>
                <div className="group h-full rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-lg hover:shadow-navy-900/8">
                  <span className="grid size-12 place-items-center rounded-xl bg-steel-600/10 text-steel-600 transition-colors duration-500 group-hover:bg-steel-600 group-hover:text-cream-50">
                    <l.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-6 text-xl leading-tight text-navy-900">
                    {l.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-900/60">
                    {l.copy}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 lg:p-9">
              <p className="flex-1 text-[0.975rem] leading-relaxed text-navy-900/70">
                Send us the khasra number and the parcel size. We will come back
                within a week with an indicative area share and a development
                timeline — at no cost and with no obligation.
              </p>
              <Button href="/contact">Discuss a Parcel</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
