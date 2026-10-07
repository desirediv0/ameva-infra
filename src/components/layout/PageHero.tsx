import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  crumbs = [],
}: {
  eyebrow: string;
  /** Wrap words in *asterisks* to accent them. */
  title: string;
  copy?: string;
  image: string;
  crumbs?: { label: string; href?: string }[];
}) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden pt-32 pb-14 lg:min-h-[70svh] lg:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 scale-105 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/72 to-navy-950/80"
      />

      <div className="container-x relative">
        {/* Breadcrumb */}
        <Reveal duration={0.6}>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[0.72rem] text-cream-100/45">
            <Link href="/" className="transition-colors hover:text-cream-100">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-3" strokeWidth={1.5} />
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-cream-100">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-cream-100/75">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.08}>
          <span className="eyebrow mt-7 flex items-center gap-3 text-steel-400">
            <span className="h-px w-8 bg-steel-400/50" />
            {eyebrow}
          </span>
        </Reveal>

        <AnimatedText
          as="h1"
          text={title}
          delay={0.18}
          accent="text-steel-300"
          className="mt-5 max-w-4xl text-[clamp(2.4rem,6.4vw,4.75rem)] leading-[1.02] text-cream-100"
        />

        {copy && (
          <Reveal delay={0.35}>
            <p className="mt-6 max-w-xl text-[0.975rem] leading-relaxed text-cream-100/60">
              {copy}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
