import { featuredProjects } from "@/lib/projects";
import { Button } from "@/components/ui/Button";
import { MoreProjectsCard, ProjectCard } from "@/components/ui/ProjectCard";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Compact grid of delivered projects, closed by an "& many more" tile. */
export function FeaturedProjects() {
  return (
    <section className="bg-cream-50 py-12 lg:py-14">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow flex items-center gap-3 text-steel-700">
              <span className="h-px w-8 bg-steel-600/45" />
              Our Projects
            </span>
            <h2 className="mt-3 text-3xl leading-tight text-navy-900 sm:text-4xl">
              17 projects delivered, <span className="text-steel-600">and counting.</span>
            </h2>
          </div>
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>

        <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {featuredProjects.map((p, i) => (
            <RevealItem key={p.slug}>
              <ProjectCard project={p} priority={i < 4} />
            </RevealItem>
          ))}
          <RevealItem>
            <MoreProjectsCard />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
