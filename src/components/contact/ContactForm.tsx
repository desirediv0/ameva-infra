"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Loader2, Send } from "lucide-react";
import { EASE } from "@/lib/motion";
import { projects } from "@/lib/projects";

const budgets = [
  "Under ₹1.5 Cr",
  "₹1.5 – 3 Cr",
  "₹3 – 6 Cr",
  "₹6 Cr and above",
];

const fieldBase =
  "w-full rounded-xl border border-navy-900/14 bg-white px-4 py-3.5 text-sm text-navy-900 outline-none transition-colors duration-300 placeholder:text-navy-900/35 focus:border-steel-600 focus:bg-cream-100/80";

export function ContactForm() {
  const params = useSearchParams();
  const preselect = params.get("project") ?? "";

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrors({});

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.status === 422) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setStatus("idle");
        return;
      }

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setErrors({ form: "Something went wrong. Please call us instead." });
      setStatus("idle");
    }
  }

  return (
    <div className="relative rounded-2xl border border-navy-900/10 bg-white p-7 shadow-sm shadow-navy-900/5 lg:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex min-h-[28rem] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: EASE }}
              className="grid size-16 place-items-center rounded-full bg-steel-600 text-cream-50"
            >
              <Check className="size-7" strokeWidth={2} />
            </motion.span>

            <h3 className="mt-7 text-3xl text-navy-900">Enquiry received</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-navy-900/62">
              A member of our sales team will call you within one working day.
              If it is urgent, reach us directly on the number listed alongside.
            </p>

            <button
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm text-steel-600 underline underline-offset-4 transition-colors hover:text-navy-900"
            >
              Send another enquiry
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="space-y-5"
            noValidate
          >
            {/* honeypot */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="pointer-events-none absolute left-[-9999px] opacity-0"
            />

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" error={errors.name}>
                <input name="name" placeholder="Your name" className={fieldBase} />
              </Field>
              <Field label="Phone" error={errors.phone}>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  className={fieldBase}
                />
              </Field>
            </div>

            <Field label="Email" error={errors.email}>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className={fieldBase}
              />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Interested In">
                <select
                  name="interest"
                  defaultValue={preselect}
                  className={`${fieldBase} appearance-none`}
                >
                  <option value="">Select a project</option>
                  {projects.map((p) => (
                    <option key={p.slug} value={p.slug} className="bg-cream-100">
                      {p.name}
                    </option>
                  ))}
                  <option value="not-sure" className="bg-cream-100">
                    Not sure yet
                  </option>
                </select>
              </Field>

              <Field label="Budget">
                <select name="budget" defaultValue="" className={`${fieldBase} appearance-none`}>
                  <option value="">Select a range</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-cream-100">
                      {b}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="Message" error={errors.message}>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us what you're looking for — configuration, timeline, or anything specific."
                className={`${fieldBase} resize-none`}
              />
            </Field>

            {errors.form && <p className="text-sm text-red-300">{errors.form}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-steel-600 px-8 py-4 text-sm font-medium text-cream-50 transition-opacity disabled:opacity-70 sm:w-auto"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-cream-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
              />
              <span className="relative z-10">
                {status === "sending" ? "Sending…" : "Send Enquiry"}
              </span>
              {status === "sending" ? (
                <Loader2 className="relative z-10 size-4 animate-spin" strokeWidth={2} />
              ) : (
                <Send
                  className="relative z-10 size-4 transition-transform duration-500 group-hover:translate-x-0.5"
                  strokeWidth={1.75}
                />
              )}
            </button>

            <p className="text-xs leading-relaxed text-navy-900/45">
              By submitting, you agree to be contacted by Ameva Infrastructure
              about your enquiry. We never share your details with third parties.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] tracking-[0.16em] text-navy-900/52 uppercase">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-300">{error}</span>}
    </label>
  );
}
