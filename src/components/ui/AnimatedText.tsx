"use client";

import { motion, type Variants } from "motion/react";
import { Fragment } from "react";
import { EASE } from "@/lib/motion";

/**
 * Splits a headline into words and sweeps each one up from behind a mask.
 * Words wrapped in *asterisks* render in the steel accent, italicised.
 */
export function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.055,
  as: Tag = "h2",
  once = true,
  accent = "text-steel-600",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
  /** Colour for *asterisked* words — pass a light tone on dark backgrounds. */
  accent?: string;
}) {
  // Split into words, keeping *…* spans (which may cover several words) marked.
  const words = text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .flatMap((part) => {
      const isAccentSpan =
        part.startsWith("*") && part.endsWith("*") && part.length > 2;
      const clean = isAccentSpan ? part.slice(1, -1) : part;
      return clean
        .split(" ")
        .filter(Boolean)
        .map((word) => ({ word, accent: isAccentSpan }));
    });

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const word: Variants = {
    hidden: { y: "110%", opacity: 0 },
    show: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: EASE },
    },
  };

  const MotionTag = motion[Tag];

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
    >
      {words.map(({ word: w, accent: isAccent }, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] pr-[0.2em] -mr-[0.2em] pl-[0.05em] -ml-[0.05em]">
            <motion.span
              variants={word}
              className={isAccent ? `inline-block italic ${accent}` : "inline-block"}
            >
              {w}
            </motion.span>
          </span>
          {/* real whitespace, so the heading reads correctly to screen readers */}
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </MotionTag>
  );
}
