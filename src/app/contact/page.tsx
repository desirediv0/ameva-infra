import type { Metadata } from "next";
import { Suspense } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { site } from "@/lib/site";
import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Talk to Ameva Infrastructure about residences, independent floors, villas and commercial space in Sonipat, Delhi NCR. Call, WhatsApp, or book a site visit.",
};

const channels = [
  {
    icon: Phone,
    label: "Call the sales desk",
    value: site.phone,
    href: `tel:${site.phoneHref}`,
    note: "Fastest — answered in under three rings during working hours.",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Message us",
    href: `https://wa.me/${site.whatsapp}`,
    note: "Send a floor plan query and we will reply with the cost sheet.",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.salesEmail,
    href: `mailto:${site.salesEmail}`,
    note: "Best for detailed requirements and documentation requests.",
  },
];

const faqs = [
  {
    q: "Can I visit an under-construction site?",
    a: "Yes, and we encourage it. Site visits are scheduled with the project engineer rather than a sales manager, and you are welcome to bring your own architect or structural consultant.",
  },
  {
    q: "What documents do you share before booking?",
    a: "The RERA registration certificate, the DTCP licence, the title search report, the encumbrance certificate and the full cost sheet with every statutory charge itemised. All of it before any payment is taken.",
  },
  {
    q: "Do you assist with home loans?",
    a: "Our projects are approved with all major lenders including SBI, HDFC and ICICI. We introduce you to the relationship manager, but we take no commission and you are free to arrange financing independently.",
  },
  {
    q: "What happens if possession is delayed?",
    a: "Every booking form carries a delay penalty payable by us to you, calculated monthly on the amount you have paid. It is a contractual clause, not a goodwill gesture.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Start with a *twenty-minute* phone call."
        copy="Tell us the budget and the timeline. If nothing in our portfolio fits, we will say so on the first call rather than the fourth."
        image="/projects/ameva-head-office.jpeg"
        crumbs={[{ label: "Contact Us" }]}
      />

      {/* Channels */}
      <section className="border-b border-navy-900/10 py-16">
        <div className="container-x">
          <RevealGroup className="grid gap-4 lg:grid-cols-3">
            {channels.map((c) => (
              <RevealItem key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex h-full gap-5 rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/40 hover:shadow-lg hover:shadow-navy-900/8"
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-steel-600/10 text-steel-600 transition-colors duration-500 group-hover:bg-steel-600 group-hover:text-cream-50">
                    <c.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[0.65rem] tracking-[0.18em] text-navy-900/45 uppercase">
                      {c.label}
                    </p>
                    <p className="mt-2 text-lg text-navy-900 transition-colors group-hover:text-steel-700">
                      {c.value}
                    </p>
                    <p className="mt-2.5 text-[0.82rem] leading-relaxed text-navy-900/52">
                      {c.note}
                    </p>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Form + details */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-steel-600">
                <span className="h-px w-8 bg-steel-600/45" />
                Enquiry Form
              </span>
            </Reveal>

            <AnimatedText
              text="Send us the brief, we'll send the *cost sheet.*"
              delay={0.1}
              className="mt-5 text-4xl leading-[1.06] text-navy-900 sm:text-[2.6rem]"
            />

            <Reveal delay={0.25}>
              <p className="mt-6 text-[0.975rem] leading-relaxed text-navy-900/62">
                Every enquiry is read by a person, not a queue. Expect a call
                within one working day with three or four options that actually
                match what you asked for.
              </p>
            </Reveal>

            {/* Office details */}
            <Reveal delay={0.35}>
              <div className="mt-10 space-y-6 border-t border-navy-900/10 pt-8">
                <div className="flex gap-4">
                  <MapPin className="mt-0.5 size-4.5 shrink-0 text-steel-600" strokeWidth={1.5} />
                  <div>
                    <p className="text-[0.65rem] tracking-[0.18em] text-navy-900/45 uppercase">
                      Corporate Office
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-900/70">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.city}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="mt-0.5 size-4.5 shrink-0 text-steel-600" strokeWidth={1.5} />
                  <div>
                    <p className="text-[0.65rem] tracking-[0.18em] text-navy-900/45 uppercase">
                      Working Hours
                    </p>
                    <p className="mt-2 text-sm text-navy-900/70">{site.hours}</p>
                    <p className="mt-1 text-sm text-navy-900/48">
                      Sunday site visits by appointment
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="min-h-[36rem] animate-pulse rounded-2xl border border-navy-900/10 bg-white" />
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-navy-900/10 py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Find Us"
            title="Jindal Global City, *Sector 35.*"
            copy="B-205, Jindal Global City, Sector 35, Sonipat — visitor parking available."
          />

          <Reveal delay={0.2}>
            <div className="relative mt-12 aspect-16/10 overflow-hidden rounded-2xl border border-navy-900/10 bg-navy-900 sm:aspect-21/9">
              <iframe
                title="Ameva Infrastructure office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.9990,28.9740,77.0390,29.0140&layer=mapnik&marker=28.9940,77.0190"
                loading="lazy"
                className="size-full [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.55)_contrast(0.92)]"
              />

              {/* Address card — keeps the section readable regardless of tile load */}
              <div className="glass-dark pointer-events-none absolute bottom-4 left-4 max-w-xs rounded-xl border border-cream-100/15 p-5 sm:bottom-6 sm:left-6">
                <p className="text-[0.62rem] tracking-[0.18em] text-steel-300 uppercase">
                  Corporate Office
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream-100/85">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=B-205+Jindal+Global+City+Sector+35+Sonipat"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full bg-steel-400 px-4 py-2 text-xs font-medium text-navy-950 transition-colors hover:bg-cream-100"
                >
                  Get Directions
                  <ArrowUpRight className="size-3.5" strokeWidth={2} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-navy-900/10 py-24 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Questions"
              title="Asked *often* enough to answer here."
            />
          </div>

          <div className="lg:col-span-8">
            <RevealGroup className="divide-y divide-navy-900/10 border-y border-navy-900/10">
              {faqs.map((f) => (
                <RevealItem key={f.q}>
                  <details className="group py-6">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg text-navy-900 transition-colors hover:text-steel-700 sm:text-xl">
                      {f.q}
                      <span className="relative mt-2 grid size-5 shrink-0 place-items-center">
                        <span className="absolute h-px w-4 bg-steel-600" />
                        <span className="absolute h-4 w-px bg-steel-600 transition-transform duration-500 group-open:rotate-90 group-open:opacity-0" />
                      </span>
                    </summary>
                    <p className="mt-4 max-w-2xl pr-10 text-[0.95rem] leading-relaxed text-navy-900/62">
                      {f.a}
                    </p>
                  </details>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
    </>
  );
}
