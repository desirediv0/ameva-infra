import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

/** Organization graph, rendered once in the root layout. */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${site.url}/#organization`,
    name: site.name,
    description: site.description,
    url: site.url,
    logo: `${site.url}/logo.png`,
    image: `${site.url}/logo.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: "2016",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Sonipat",
      addressRegion: "Haryana",
      postalCode: "131001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.994,
      longitude: 77.019,
    },
    openingHours: "Mo-Sa 10:00-19:00",
    areaServed: { "@type": "Place", name: "Delhi NCR" },
    sameAs: site.socials.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProjectJsonLd({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: p.name,
    description: p.tagline,
    url: `${site.url}/projects/${p.slug}`,
    image: [`${site.url}${p.cover}`],
    address: {
      "@type": "PostalAddress",
      streetAddress: p.location,
      addressLocality: p.city,
      addressRegion: "Haryana",
      addressCountry: "IN",
    },
    amenityFeature: p.amenities.map((a) => ({
      "@type": "LocationFeatureSpecification",
      name: a,
      value: true,
    })),
    provider: { "@id": `${site.url}/#organization` },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
