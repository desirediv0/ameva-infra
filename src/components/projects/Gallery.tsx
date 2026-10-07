"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { EASE } from "@/lib/motion";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Gallery({ images, name }: { images: string[]; name: string }) {
  const [open, setOpen] = useState<number | null>(null);

  const step = useCallback(
    (d: number) =>
      setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, step]);

  return (
    <>
      <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 lg:h-[34rem] lg:grid-cols-4 lg:grid-rows-2">
        {images.map((src, i) => (
          <RevealItem
            key={src}
            className={`lg:h-full ${i === 0 ? "col-span-2 row-span-2" : ""}`}
          >
            <button
              onClick={() => setOpen(i)}
              className="group relative aspect-4/3 w-full overflow-hidden rounded-xl lg:aspect-auto lg:h-full"
              aria-label={`View image ${i + 1} of ${name}`}
            >
              <Image
                src={src}
                alt={`${name} — view ${i + 1}`}
                fill
                sizes={i === 0 ? "(min-width: 1024px) 50vw, 92vw" : "(min-width: 1024px) 25vw, 46vw"}
                className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy-950/0 transition-colors duration-500 group-hover:bg-navy-950/35" />
              <span className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="grid size-11 place-items-center rounded-full bg-cream-100/95 text-navy-900">
                  <Expand className="size-4" strokeWidth={1.75} />
                </span>
              </span>
            </button>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[95] flex items-center justify-center bg-navy-950/96 p-4 backdrop-blur-sm sm:p-8"
            onClick={() => setOpen(null)}
          >
            <button
              onClick={() => setOpen(null)}
              aria-label="Close gallery"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-cream-100/20 text-cream-100 transition-colors hover:border-steel-400 hover:text-steel-300 sm:right-8 sm:top-8"
            >
              <X className="size-5" strokeWidth={1.5} />
            </button>

            <motion.div
              key={open}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="relative aspect-4/3 w-full max-w-5xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[open]}
                alt={`${name} — view ${open + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>

            <div
              className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-5 sm:bottom-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => step(-1)}
                aria-label="Previous image"
                className="grid size-11 place-items-center rounded-full border border-cream-100/20 text-cream-100 transition-colors hover:border-steel-400 hover:bg-steel-400 hover:text-navy-950"
              >
                <ArrowLeft className="size-4" strokeWidth={1.75} />
              </button>
              <span className="text-sm tabular-nums text-cream-100/70">
                {String(open + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </span>
              <button
                onClick={() => step(1)}
                aria-label="Next image"
                className="grid size-11 place-items-center rounded-full border border-cream-100/20 text-cream-100 transition-colors hover:border-steel-400 hover:bg-steel-400 hover:text-navy-950"
              >
                <ArrowRight className="size-4" strokeWidth={1.75} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
