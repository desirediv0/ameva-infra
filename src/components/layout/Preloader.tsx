"use client";

import { AnimatePresence, motion } from "motion/react";
import { EASE, EASE_IN_OUT } from "@/lib/motion";
import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduce ? 0 : 1500;
    const start = performance.now();

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = (now: number) => {
      const p = total === 0 ? 1 : Math.min((now - start) / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));

      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(() => setDone(true), reduce ? 0 : 260);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream-50"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_IN_OUT }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col items-center"
          >
            <span className="font-display text-4xl tracking-tight text-navy-900 sm:text-5xl">
              Ameva
            </span>
            <span className="eyebrow mt-3 text-steel-600/80">Infrastructure</span>
          </motion.div>

          {/* progress rail */}
          <div className="mt-10 h-px w-52 overflow-hidden bg-navy-900/12">
            <motion.div
              className="h-full bg-steel-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: count / 100 }}
              style={{ originX: 0 }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          <span className="mt-4 font-sans text-xs tabular-nums tracking-[0.2em] text-navy-900/45">
            {String(count).padStart(3, "0")}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
