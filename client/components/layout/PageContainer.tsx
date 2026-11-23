import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageContainer({
  className,
  children,
  flush = false,
}: {
  className?: string;
  children: ReactNode;
  flush?: boolean;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[var(--page-container-max-width,1400px)] px-[var(--page-container-gutter,1rem)] sm:px-[var(--page-container-gutter,1.5rem)] lg:px-[var(--page-container-gutter,2rem)]",
        !flush && "py-8 md:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
}
