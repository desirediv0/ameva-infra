import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MapPin } from "lucide-react";

import { getProject, projects } from "@/lib/projects";
import { site } from "@/lib/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ProjectJsonLd } from "@/components/seo/JsonLd";
import { Magnetic } from "@/components/ui/MagneticButton";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: project.name,
    description: `${project.tagline} — ${project.configuration} at ${project.location}, ${project.city}. `,
    openGraph: {
      title: `${project.name} · ${site.name}`,
      description: project.tagline,
      images: [{ url: project.cover }],
    },
  };
}

export default async function ProjectDetailPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 4);

  const facts = [
    { label: "Status", value: project.status },
    { label: "Type", value: project.category },
    { label: "City", value: project.city },
    { label: "Built by", value: "Ameva In-house Team" },
  ];

  return (
    <>
      <ProjectJsonLd slug={project.slug} />

      {/* Hero */}
      <section className="relative flex min-h-[60svh] items-end overflow-hidden pt-28 pb-8 lg:pb-10">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="-z-20 scale-105 object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/75"
        />

        <div className="container-x relative">
          <Reveal duration={0.6}>
            <nav className="flex flex-wrap items-center gap-1.5 text-[0.72rem] text-cream-100/45">
              <Link href="/" className="hover:text-cream-100">
                Home
              </Link>
              <span>/</span>
              <Link href="/projects" className="hover:text-cream-100">
                Projects
              </Link>
              <span>/</span>
              <span className="text-cream-100/75">{project.name}</span>
            </nav>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-steel-400/20 px-3.5 py-1.5 text-[0.68rem] font-medium tracking-wide text-steel-200 ring-1 ring-inset ring-steel-300/30 backdrop-blur">
                {project.status}
              </span>
              <span className="rounded-full bg-navy-950/60 px-3.5 py-1.5 text-[0.68rem] tracking-wide text-cream-100/80 backdrop-blur">
                {project.category}
              </span>
            </div>
          </Reveal>

          <AnimatedText
            as="h1"
            text={project.name}
            delay={0.18}
            accent="text-steel-300"
            className="mt-5 text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] text-cream-100"
          />

          <Reveal delay={0.32}>
            <p className="mt-4 flex items-center gap-2 text-sm text-steel-300">
              <MapPin className="size-4" strokeWidth={1.5} />
              {project.location}, {project.city}
            </p>
            <p className="mt-4 max-w-xl text-[0.975rem] leading-relaxed text-cream-100/62">
              {project.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Fact bar */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="container-x grid divide-y divide-navy-900/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal key={f.label} delay={i * 0.06}>
              <div
                className={`py-7 lg:px-8 ${
                  i > 0 ? "lg:border-l lg:border-navy-900/10" : "lg:pl-0"
                }`}
              >
                <p className="text-[0.62rem] tracking-[0.18em] text-navy-900/45 uppercase">
                  {f.label}
                </p>
                <p className="mt-2 font-display text-2xl text-navy-900 lg:text-[1.65rem]">
                  {f.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Overview + highlights */}
      <section className="py-10 lg:py-12">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow flex items-center gap-3 text-steel-600">
                <span className="h-px w-8 bg-steel-600/45" />
                Overview
              </span>
            </Reveal>

            <AnimatedText
              text="About this *project.*"
              delay={0.1}
              className="mt-3 text-3xl leading-[1.06] text-navy-900 sm:text-4xl"
            />

            <div className="mt-4 space-y-3 text-[0.975rem] leading-relaxed text-navy-900/64">
              {project.overview.map((p, i) => (
                <Reveal key={i} delay={0.18 + i * 0.07}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>

          </div>

          {/* Highlights + enquiry */}
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-navy-900/10 bg-white p-5 shadow-sm shadow-navy-900/5 lg:p-6">
                <h3 className="text-2xl text-navy-900">Project Highlights</h3>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-navy-900/70">
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-steel-600/12 text-steel-600">
                        <Check className="size-3" strokeWidth={2.5} />
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border-t border-navy-900/10 pt-5">
                  <p className="text-sm leading-relaxed text-navy-900/62">
                    Want the full cost sheet and floor plates for {project.name}?
                    We will send them across the same day.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Magnetic strength={0.2}>
                      <Button href={`/contact?project=${project.slug}`}>
                        Request Details
                      </Button>
                    </Magnetic>
                    <a
                      href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                        `Hi Ameva, I'd like details on ${project.name}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full border border-navy-900/22 px-6 py-3.5 text-sm text-navy-900 transition-colors duration-300 hover:border-steel-600 hover:text-steel-600"
                    >
                      WhatsApp
                      <ArrowUpRight className="size-4" strokeWidth={1.75} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* Other projects */}
      <section className="border-t border-navy-900/10 py-10 lg:py-12">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <SectionHeading eyebrow="Keep Looking" title="Other Ameva *addresses.*" />
            <Reveal delay={0.2}>
              <Button href="/projects" variant="outline">
                All Projects
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {others.map((p) => (
              <RevealItem key={p.slug}>
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
