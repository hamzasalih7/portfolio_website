import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent-dim px-3 py-1 text-xs font-medium text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
