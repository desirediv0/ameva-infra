import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of the Ameva Infrastructure website, including the status of prices, images and project information shown here.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance",
    body: [
      "By using this website you accept these terms. If you do not accept them, please do not use the site. These terms are governed by Indian law and any dispute falls to the courts at Gurugram, Haryana.",
    ],
  },
  {
    heading: "This website is not an offer",
    body: [
      "Nothing on this website constitutes an offer, an invitation to offer, or a contract. Prices, availability, configurations, possession dates and specifications are indicative and subject to change without notice.",
      "A binding relationship arises only on execution of a written booking application and allotment letter, and thereafter the registered agreement for sale. Where anything on this website conflicts with those documents, those documents prevail.",
    ],
  },
  {
    heading: "Images and renders",
    body: [
      "Photographs, walkthroughs and renders on this site are artistic impressions used for illustration. Furniture, landscaping, fittings and accessories shown are not part of any standard offering unless specifically itemised in your agreement.",
      "Elevation renders depict the intended architectural treatment and may vary from the constructed building within the limits permitted by the sanctioned plans.",
    ],
  },
  {
    heading: "RERA disclosure",
    body: [
      `All projects marketed by ${site.name} are registered with the Haryana Real Estate Regulatory Authority where registration is applicable.`,
      "Registration numbers, sanctioned plans, approvals and quarterly progress updates for each project are available on the HRERA portal and on request from our sales office. We encourage every buyer to verify them independently before making a payment.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The Ameva name, the triangular mark, project names, site copy, photography and design are the property of Ameva Infrastructure. You may not reproduce, adapt or republish them without written permission.",
      "You may link to this site and quote short extracts with attribution.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "This site links to external services such as WhatsApp, mapping providers and social platforms. We do not control those services and are not responsible for their content or their handling of your data.",
    ],
  },
  {
    heading: "Limitation of liability",
    body: [
      "We take reasonable care to keep this website accurate and available, but we do not warrant that it will be uninterrupted or error-free. To the extent permitted by law, we are not liable for indirect or consequential loss arising from use of this website.",
      "Nothing here limits any liability we owe you under the Real Estate (Regulation and Development) Act, 2016, or under a registered agreement for sale.",
    ],
  },
  {
    heading: "Contact",
    body: [
      `Questions about these terms can be sent to ${site.email} or raised at our corporate office at ${site.address.line1}, ${site.address.line2}, ${site.address.city}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of *Use*"
      crumb="Terms of Use"
      updated="18 August 2026"
      intro="The rules that govern this website, and — more importantly — the status of the prices, renders and project details you see on it."
      image="/projects/bptp-gurgaon.jpeg"
      sections={sections}
    />
  );
}
