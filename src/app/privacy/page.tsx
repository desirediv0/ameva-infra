import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/legal/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ameva Infrastructure collects, uses and protects the personal information you share through this website.",
};

const sections: LegalSection[] = [
  {
    heading: "What we collect",
    body: [
      "When you submit an enquiry we collect your name, phone number, email address, the project you are interested in and any message you write. That is the whole list — we do not ask for identity documents, income proof or PAN details through this website.",
      "We also collect standard technical information that your browser sends to any website: IP address, browser type, referring page and the pages you viewed. This is used in aggregate to understand which projects attract interest.",
    ],
  },
  {
    heading: "Why we collect it",
    body: [
      "Enquiry details are used for one purpose: so a member of our sales team can call or write back about the property you asked about. We do not build behavioural profiles and we do not enrich your record with data bought from third parties.",
      "If you subsequently book a unit, the same details form the basis of your allotment paperwork, which is governed by the booking agreement rather than this policy.",
    ],
  },
  {
    heading: "Who we share it with",
    body: [
      "We do not sell, rent or trade your personal information. Ever. Real estate is an industry with a poor reputation on this point and we have chosen not to participate in it.",
      "Your details are visible to our in-house sales and CRM staff. Where a channel partner introduced you to us, that partner will see your name and the project of interest as part of standard commission reconciliation.",
      "We disclose information to authorities only where legally compelled — for example under a court order, a RERA proceeding or a lawful investigative request.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "Enquiries that do not convert are retained for twenty-four months and then deleted, on the reasoning that a buyer who was not ready in 2026 may be ready in 2027. Booking records are retained for the statutory period required under Indian tax and RERA rules.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "This website uses only functional cookies required to make pages load and remember your preferences within a session. We do not run advertising pixels or cross-site retargeting tags on this domain.",
      "You can block cookies through your browser settings; the site will continue to work, though some preferences will not persist between visits.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You may ask us for a copy of the information we hold about you, ask us to correct anything inaccurate, or ask us to delete it entirely. Write to us and we will act on the request within thirty days.",
      `Requests should be sent to ${site.email}, or by post to ${site.address.line1}, ${site.address.line2}, ${site.address.city}.`,
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "If we change how we handle personal information we will update this page and revise the date shown alongside. Material changes affecting existing enquiries will additionally be communicated by email.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy *Policy*"
      crumb="Privacy Policy"
      updated="18 August 2026"
      intro="A short, readable account of what we do with the information you share through this website — and, more usefully, what we do not do with it."
      image="/projects/bptp-gurgaon.jpeg"
      sections={sections}
    />
  );
}
