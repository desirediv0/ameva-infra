export const site = {
  name: "Ameva Infrastructure",
  shortName: "Ameva",
  tagline: "Building Landmarks, Not Just Addresses",
  description:
    "Ameva Infrastructure develops premium residences, independent floors and commercial landmarks across Delhi NCR — engineered with precision, delivered with integrity.",
  url: "https://amevainfrastructure.com",
  email: "connect@amevainfrastructure.com",
  salesEmail: "sales@amevainfrastructure.com",
  phone: "8906322222",
  phoneHref: "+918906322222",
  whatsapp: "918906322222",
  address: {
    line1: "B-205, Jindal Global City",
    line2: "Sector 35",
    city: "Sonipat, Haryana",
  },
  hours: "Mon – Sat · 10:00 AM to 7:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
] as const;

export const stats = [
  { value: 1.4, suffix: "M", label: "Sq. Ft. Delivered" },
  { value: 17, suffix: "", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Years of Building" },
  { value: 52, suffix: "", label: "In-house Team — still expanding" },
  { value: 119, suffix: "", label: "Happy Families" },
] as const;
