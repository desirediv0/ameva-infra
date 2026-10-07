import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export type LegalSection = { heading: string; body: string[] };

export function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  image,
  crumb,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  image: string;
  crumb: string;
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        copy={intro}
        image={image}
        crumbs={[{ label: crumb }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Contents */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <p className="text-[0.65rem] tracking-[0.2em] text-navy-900/45 uppercase">
                  Last updated
                </p>
                <p className="mt-2 text-sm text-navy-900/70">{updated}</p>

                <nav className="mt-8 border-t border-navy-900/10 pt-6">
                  <p className="text-[0.65rem] tracking-[0.2em] text-navy-900/45 uppercase">
                    Contents
                  </p>
                  <ol className="mt-4 space-y-2.5">
                    {sections.map((s, i) => (
                      <li key={s.heading}>
                        <a
                          href={`#s-${i + 1}`}
                          className="flex gap-3 text-sm text-navy-900/58 transition-colors duration-300 hover:text-steel-600"
                        >
                          <span className="text-navy-900/35">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          {s.heading}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Reveal>
            </div>
          </aside>

          {/* Body */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {sections.map((s, i) => (
                <Reveal key={s.heading} delay={0.04 * i} amount={0.15}>
                  <section id={`s-${i + 1}`} className="scroll-mt-32">
                    <h2 className="flex items-baseline gap-4 text-2xl leading-tight text-navy-900 sm:text-3xl">
                      <span className="font-sans text-[0.65rem] tracking-[0.2em] text-steel-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.heading}
                    </h2>
                    <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-navy-900/62">
                      {s.body.map((p, j) => (
                        <p key={j}>{p}</p>
                      ))}
                    </div>
                  </section>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
