import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative block aspect-3/4 overflow-hidden rounded-xl bg-navy-900 shadow-sm shadow-navy-900/10"
    >
      <Image
        src={project.cover}
        alt={project.name}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/10 to-transparent" />
      <span className="absolute left-2 top-2 rounded-full bg-cream-50/90 px-2 py-0.5 text-[0.6rem] font-bold text-emerald-700">
        {project.status}
      </span>
      <div className="absolute inset-x-2.5 bottom-2.5">
        <h3 className="text-base font-bold leading-tight text-cream-50">{project.name}</h3>
        <p className="mt-0.5 flex items-center gap-1 text-[0.7rem] font-medium text-cream-100/85">
          <MapPin className="size-3 shrink-0" strokeWidth={2} />
          <span className="truncate">{project.city}</span>
        </p>
      </div>
    </Link>
  );
}

/** Closing tile for any capped project list. */
export function MoreProjectsCard() {
  return (
    <Link
      href="/contact"
      className="flex aspect-3/4 flex-col items-center justify-center rounded-xl border border-dashed border-steel-600/50 bg-white p-3 text-center transition-colors hover:bg-cream-100"
    >
      <span className="text-xl font-extrabold text-steel-700">& many more</span>
      <span className="mt-1.5 text-xs font-medium text-navy-900/70">
        Villas, plots, commercial &amp; more across Delhi NCR — call us
      </span>
    </Link>
  );
}
