import { skillsStrip } from "@/content/skills";
import { Container } from "@/components/ui/Container";

export function SkillsStrip() {
  return (
    <section aria-label="Core technologies" className="border-y border-border bg-navy-950/60">
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5 sm:justify-between sm:gap-4 sm:py-6">
        <p className="w-full text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:w-auto sm:text-left">
          Technologies I use
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
          {skillsStrip.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-soft"
            >
              {skill}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
