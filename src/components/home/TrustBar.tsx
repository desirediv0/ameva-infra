import { Marquee } from "@/components/ui/Marquee";

const items = [
  "RERA Registered",
  "17 Projects Delivered",
  "On-Time Handover Guarantee",
  "ISO 9001:2015",
  "119 Families Housed",
  "In-House Construction Arm",
  "Zero Litigation Record",
];

export function TrustBar() {
  return (
    <section className="relative border-y border-navy-900/10 bg-cream-100 py-5">
      <Marquee>
        {items.map((t) => (
          <span key={t} className="flex items-center">
            <span className="px-8 text-[0.7rem] font-medium tracking-[0.22em] text-navy-900/58 uppercase whitespace-nowrap">
              {t}
            </span>
            <span className="size-1 rotate-45 bg-steel-600/60" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
