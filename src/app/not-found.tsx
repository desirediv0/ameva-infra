import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { projects } from "@/lib/projects";

/**
 * Every page opens on a dark band so the transparent navbar stays legible.
 * The 404 follows the same convention rather than starting on cream.
 */
export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 size-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel-400/12 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_120%,rgba(127,168,212,0.18),transparent_62%)]"
      />

      <div className="container-x relative text-center">
        <p className="font-display text-[clamp(6rem,22vw,16rem)] leading-none text-cream-100/10">
          404
        </p>

        <h1 className="-mt-6 text-4xl leading-tight text-cream-100 sm:-mt-10 sm:text-5xl">
          This address doesn&apos;t{" "}
          <span className="italic text-steel-300">exist</span> yet.
        </h1>

        <p className="mx-auto mt-5 max-w-md text-[0.975rem] leading-relaxed text-cream-100/62">
          The page you were looking for has moved or was never built. Our
          portfolio, however, is very much standing.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/" variant="onDark">
            Back to Home
          </Button>
          <Button href="/projects" variant="onDarkOutline">
            Browse Projects
          </Button>
        </div>

        <div className="mt-16 border-t border-cream-100/10 pt-8">
          <p className="text-[0.65rem] tracking-[0.2em] text-cream-100/45 uppercase">
            Popular developments
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {projects.slice(0, 5).map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="rounded-full border border-cream-100/15 px-4 py-2 text-sm text-cream-100/65 transition-colors duration-300 hover:border-steel-400 hover:text-steel-300"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
