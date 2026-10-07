import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div className={`mask-fade-x flex overflow-hidden ${className ?? ""}`}>
      <div
        className={`flex min-w-max shrink-0 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
