import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

/**
 * `primary` / `outline` are for the light sections.
 * `onDark` / `onDarkOutline` are for the image-backed bands that stay navy.
 */
type Variant = "primary" | "outline" | "onDark" | "onDarkOutline" | "ghost";

const base =
  "group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-500";

const variants: Record<Variant, string> = {
  primary: "bg-navy-900 text-cream-50",
  outline: "border border-navy-900/25 text-navy-900 hover:text-cream-50",
  onDark: "bg-steel-400 text-navy-950",
  onDarkOutline: "border border-cream-100/25 text-cream-100 hover:text-navy-950",
  ghost: "text-navy-900/75 hover:text-navy-900",
};

/** The fill that wipes up on hover. */
const fills: Record<Variant, string> = {
  primary: "bg-steel-600",
  outline: "bg-navy-900",
  onDark: "bg-cream-100",
  onDarkOutline: "bg-cream-100",
  ghost: "bg-transparent",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className,
  ...rest
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
} & Omit<React.ComponentProps<typeof Link>, "href" | "children" | "className">) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className ?? ""}`}
      {...rest}
    >
      <span
        aria-hidden
        className={`absolute inset-0 -z-0 origin-bottom scale-y-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 ${fills[variant]}`}
      />
      <span className="relative z-10">{children}</span>
      {arrow && (
        <ArrowUpRight
          className="relative z-10 size-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.75}
        />
      )}
    </Link>
  );
}
