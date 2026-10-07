import { AnimatedText } from "./AnimatedText";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow: string;
  /** Wrap words in *asterisks* to accent them. */
  title: string;
  copy?: string;
  align?: "left" | "center";
  /** Set on the image-backed bands that stay navy. */
  onDark?: boolean;
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col ${
        centered ? "items-center text-center" : "items-start"
      } ${className ?? ""}`}
    >
      <Reveal>
        <span
          className={`eyebrow flex items-center gap-3 ${
            onDark ? "text-steel-300" : "text-steel-600"
          }`}
        >
          <span
            className={`h-px w-8 ${onDark ? "bg-steel-300/50" : "bg-steel-600/45"}`}
          />
          {eyebrow}
        </span>
      </Reveal>

      <AnimatedText
        text={title}
        delay={0.1}
        accent={onDark ? "text-steel-300" : "text-steel-600"}
        className={`mt-5 max-w-3xl text-balance-tight text-4xl leading-[1.06] sm:text-5xl lg:text-6xl ${
          onDark ? "text-cream-100" : "text-navy-900"
        }`}
      />

      {copy && (
        <Reveal delay={0.25}>
          <p
            className={`mt-6 max-w-xl text-[0.975rem] leading-relaxed ${
              onDark ? "text-cream-100/62" : "text-navy-900/62"
            }`}
          >
            {copy}
          </p>
        </Reveal>
      )}
    </div>
  );
}
