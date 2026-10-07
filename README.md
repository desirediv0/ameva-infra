# Ameva Infrastructure

Marketing website for Ameva Infrastructure — a real estate developer in Gurugram / Delhi NCR.
Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — hero, portfolio pan, credentials, process, testimonials |
| `/about` | Story, values, milestone timeline, leadership |
| `/projects` | Full portfolio with category filtering |
| `/projects/[slug]` | Project detail — specs, gallery lightbox, amenities |
| `/services` | Six development services + landowner joint-development pitch |
| `/contact` | Enquiry form, contact channels, map, FAQ |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt` | Generated from project data |

## Editing content

Almost all copy lives in two files — no component edits needed for routine updates.

- **`src/lib/site.ts`** — business name, phone, email, address, RERA number, social links, nav items, headline stats.
- **`src/lib/projects.ts`** — the project portfolio. Each entry drives the listing card, the detail page, the sitemap and the JSON-LD. Add an object to the `projects` array and the route, sitemap entry and nav references appear automatically.

Set `featured: true` on a project to include it in the home page horizontal showcase (designed for four).

## Design system

The site is **light-dominant**: a warm cream ground with navy type, punctuated by a
handful of deliberately dark, image-backed bands for rhythm.

Brand tokens live in `src/app/globals.css` under `@theme`, derived from the logo:

| Token | Role |
| --- | --- |
| `cream-50` | page background |
| `cream-100` / `cream-200` | alternating section bands |
| `white` | cards and form surfaces (with `shadow-sm shadow-navy-900/5`) |
| `navy-900` | primary text, solid buttons |
| `navy-950` | the dark bands |
| `steel-600` / `steel-700` | accent on light — links, eyebrows, italic heading words |
| `steel-300` / `steel-400` | accent on dark bands |
| `sand-400` | sparing highlight (star ratings) |

**Sections that stay dark:** `PageHero` on every inner page, the project detail
hero, the stats band, the CTA band, the footer, and the 404. The **home hero is
light** — an editorial split with the featured projects built into it.

> **Convention:** the navbar is transparent over the hero and inverts to a cream
> glass bar with navy text once scrolled. Because its ink has to match the band
> underneath, `src/lib/nav.ts` maps routes to hero tone — the home page is listed
> as light, everything else defaults to dark. **A new page that opens on cream must
> be added to `LIGHT_HERO_ROUTES`**, or its navbar links will be cream-on-cream.
> It resolves during render from the pathname, so there is no first-paint flash.

**Light vs. dark variants.** Shared components take an explicit flag rather than
guessing:

- `<Button variant="primary" | "outline">` on light sections;
  `variant="onDark" | "onDarkOutline"` on the dark bands.
- `<SectionHeading onDark />` and `<AnimatedText accent="text-steel-300" />` on dark bands.

Typography pairs **Instrument Serif** (display) with **Inter** (UI), both self-hosted via `next/font`.

## Motion

Reusable primitives in `src/components/ui/`:

- `Reveal` / `RevealGroup` / `RevealItem` — scroll-triggered fade-and-rise, with stagger
- `AnimatedText` — word-by-word masked heading reveal. Wrap words in `*asterisks*` to render them in the italic steel accent, e.g. `"A closer *look.*"`
- `Magnetic` — cursor-attracted wrapper for buttons
- `Counter` — count-up on scroll into view

Page-level effects: preloader, Lenis smooth scroll, scroll progress bar, film grain overlay, hero parallax, a scroll-driven horizontal project pan, and a cursor-following image preview on the services list.

All motion is gated behind `prefers-reduced-motion` — Lenis is skipped and CSS animations collapse when a visitor asks for reduced motion.

## Contact form

`src/app/api/contact/route.ts` validates submissions server-side (with a honeypot field) and currently logs them. **To receive enquiries, wire the marked `TODO` to your email provider or CRM** — for example:

```ts
await resend.emails.send({
  from: "site@amevainfrastructure.com",
  to: site.salesEmail,
  subject: `Enquiry — ${body.name}`,
  text: `${body.phone} · ${body.interest}\n\n${body.message}`,
});
```

## Placeholder content to replace before launch

- **Imagery** — all photography is Unsplash placeholder. Swap for real project shoots.
- **Leadership team** (`src/components/about/Team.tsx`) — names, bios and portraits are fictional stock stand-ins.
- **Projects, testimonials, milestones and statistics** are illustrative sample data.
- **RERA number, address, phone and email** in `src/lib/site.ts` are placeholders.
- **`site.url`** must be set to the real domain for correct canonical URLs, sitemap and Open Graph tags.

## SEO

Per-page metadata and Open Graph tags, a generated sitemap and robots file, and JSON-LD structured data (`RealEstateAgent` on every page, `Residence` on project pages) in `src/components/seo/JsonLd.tsx`.
