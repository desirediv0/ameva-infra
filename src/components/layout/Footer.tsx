import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/site";
import { projects } from "@/lib/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-cream-100/10 bg-navy-950">
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-steel-400/10 blur-[130px]"
      />

      <div className="container-x relative py-20 lg:py-24">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Reveal>
              <Link href="/" className="flex items-center gap-3">
                <span className="relative size-20 overflow-hidden rounded-lg ">
                  <Image src="/logo.png" alt="" fill sizes="80px" className="object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-cream-100">
                    Ameva
                  </span>
                  <span className="mt-2 text-sm font-bold tracking-[0.24em] text-steel-300">
                    INFRASTRUCTURE
                  </span>
                </span>
              </Link>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream-100/55">
                Over ten years of building in Delhi NCR — 17 projects, 1.4M sq. ft.
                and 119 happy families.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {site.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group rounded-full border border-cream-100/15 px-4 py-2 text-xs text-cream-100/65 transition-colors duration-300 hover:border-steel-400 hover:text-steel-300"
                  >
                    {s.label}
                    <ArrowUpRight className="ml-1 inline size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-2">
            <Reveal delay={0.05}>
              <h4 className="eyebrow text-steel-400">Navigate</h4>
              <ul className="mt-6 space-y-3.5">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-cream-100/60 transition-colors duration-300 hover:text-cream-100"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Projects */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <h4 className="eyebrow text-steel-400">Developments</h4>
              <ul className="mt-6 space-y-3.5">
                {projects.slice(0, 5).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/projects/${p.slug}`}
                      className="text-sm text-cream-100/60 transition-colors duration-300 hover:text-cream-100"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <Reveal delay={0.15}>
              <h4 className="eyebrow text-steel-400">Get in Touch</h4>
              <ul className="mt-6 space-y-5 text-sm text-cream-100/60">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-steel-400" strokeWidth={1.5} />
                  <span className="leading-relaxed">
                    {site.address.line1}
                    <br />
                    {site.address.line2}
                    <br />
                    {site.address.city}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="size-4 shrink-0 text-steel-400" strokeWidth={1.5} />
                  <a href={`tel:${site.phoneHref}`} className="text-lg font-bold text-cream-100 hover:text-steel-300">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="size-4 shrink-0 text-steel-400" strokeWidth={1.5} />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-cream-100">
                    {site.email}
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Oversized drifting wordmark */}
        <div className="mt-20 select-none">
          <Marquee>
            <span className="whitespace-nowrap font-display text-[13vw] leading-[0.9] tracking-tight text-cream-100/[0.055]">
              AMEVA INFRASTRUCTURE&nbsp;·&nbsp;
            </span>
          </Marquee>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-cream-100/10 pt-8 text-xs text-cream-100/40 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-cream-100/70">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-cream-100/70">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
