"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { EASE } from "@/lib/motion";
import { useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setShow(y > 700));

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {show && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ duration: 0.35, ease: EASE }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid size-11 place-items-center rounded-full border border-navy-900/15 bg-cream-50/85 text-navy-900 shadow-sm backdrop-blur transition-colors hover:border-steel-600 hover:text-steel-600"
          >
            <ArrowUp className="size-4" strokeWidth={1.75} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
          "Hi Ameva Infrastructure, I'd like to know more about your projects."
        )}`}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat on WhatsApp"
        className="group relative grid size-13 place-items-center rounded-full bg-steel-600 text-cream-50 shadow-lg shadow-navy-900/25 transition-transform duration-300 hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-steel-600/35 [animation-duration:2.6s]" />
        <MessageCircle className="relative size-5.5" strokeWidth={1.75} />
      </a>
    </div>
  );
}
