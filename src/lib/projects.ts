export type ProjectStatus =
  | "Ready to Move"
  | "Under Construction"
  | "New Launch"
  | "Sold Out"
  | "Delivered";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: "Residential" | "Commercial" | "Villas" | "Plotted";
  status: ProjectStatus;
  location: string;
  city: string;
  priceFrom: string;
  configuration: string;
  area: string;
  possession: string;
  featured: boolean;
  cover: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  amenities: string[];
  specs: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "bptp-gurgaon",
    name: "BPTP",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Gurugram, Haryana",
    city: "Gurugram",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/bptp-gurgaon.jpeg",
    gallery: ["/projects/bptp-gurgaon.jpeg"],
    overview: [
      "BPTP is one of the residential projects built by Ameva Infrastructure in Gurugram, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "dlf-gurgaon",
    name: "DLF",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Gurugram, Haryana",
    city: "Gurugram",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/dlf-gurgaon.jpeg",
    gallery: ["/projects/dlf-gurgaon.jpeg"],
    overview: [
      "DLF is one of the residential projects built by Ameva Infrastructure in Gurugram, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "sector-46-gurgaon",
    name: "Sector 46",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Sector 46, Gurugram",
    city: "Gurugram",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/sector-46-gurgaon.jpeg",
    gallery: ["/projects/sector-46-gurgaon.jpeg"],
    overview: [
      "Sector 46 is one of the residential projects built by Ameva Infrastructure in Gurugram, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "gk1-new-delhi",
    name: "GK-1",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Greater Kailash 1, New Delhi",
    city: "New Delhi",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/gk1-new-delhi.jpeg",
    gallery: ["/projects/gk1-new-delhi.jpeg"],
    overview: [
      "GK-1 is one of the residential projects built by Ameva Infrastructure in New Delhi, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "eldeco-sonipat",
    name: "Eldeco",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Eldeco, Sonipat",
    city: "Sonipat",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/eldeco-sonipat.jpeg",
    gallery: ["/projects/eldeco-sonipat.jpeg"],
    overview: [
      "Eldeco is one of the residential projects built by Ameva Infrastructure in Sonipat, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "rangoli-green-sonipat",
    name: "Rangoli Green",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Rangoli Green, Sonipat",
    city: "Sonipat",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/rangoli-green-sonipat.jpeg",
    gallery: ["/projects/rangoli-green-sonipat.jpeg"],
    overview: [
      "Rangoli Green is one of the residential projects built by Ameva Infrastructure in Sonipat, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
  {
    slug: "jindal-global-city-sonipat",
    name: "Jindal Global City",
    tagline: "Residential development by Ameva Infrastructure",
    category: "Residential",
    status: "Delivered",
    location: "Sector 35, Jindal Global City, Sonipat",
    city: "Sonipat",
    priceFrom: "On Request",
    configuration: "Residential Floors",
    area: "On Request",
    possession: "Delivered",
    featured: true,
    cover: "/projects/jindal-global-city-sonipat.jpeg",
    gallery: ["/projects/jindal-global-city-sonipat.jpeg"],
    overview: [
      "Jindal Global City is one of the residential projects built by Ameva Infrastructure in Sonipat, delivered by our in-house construction team.",
      "Call us for floor plans, availability and a site visit — and see our other projects across Delhi NCR.",
    ],
    highlights: [
      "Built by Ameva's in-house team",
      "Delivered project",
      "Site visits on request",
    ],
    amenities: [],
    specs: [],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Shown wherever the list is capped — the portfolio is bigger than what is listed. */
export const moreProjectsNote = "…and many more projects across Delhi NCR";

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Villas",
  "Plotted",
] as const;
