import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light,
  className,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-cyan-700" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-slate-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-slate-600" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
