import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

const team = [
  {
    name: "Ajay Singh Dahiya",
    role: "Founder, Ameva Infrastructure",
    bio: "Leading Ameva since 2016 — from a single plot to 17 delivered projects, 1.4M sq. ft. and 119 happy families.",
    image: "/founder.png",
  },
];

export function Team() {
  return (
    <RevealGroup className="mx-auto grid max-w-sm gap-5">
      {team.map((m) => (
        <RevealItem key={m.name}>
          <article className="group relative h-full overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-sm shadow-navy-900/5 transition-all duration-500 hover:border-steel-600/35 hover:shadow-lg hover:shadow-navy-900/8">
            <div className="relative aspect-4/5 overflow-hidden">
              <Image
                src={m.image}
                alt={m.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 92vw"
                className="object-cover object-[50%_20%] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-transparent" />
            </div>

            <div className="p-6">
              <h3 className="text-xl leading-tight text-navy-900">{m.name}</h3>
              <p className="mt-1.5 text-[0.72rem] tracking-[0.14em] text-steel-600 uppercase">
                {m.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy-900/58">{m.bio}</p>
            </div>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
