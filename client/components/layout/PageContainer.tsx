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
        "box-border mx-auto w-full max-w-[var(--stc-max)] px-[var(--stc-gutter)]",
        !flush && "py-[var(--stc-page-y)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
