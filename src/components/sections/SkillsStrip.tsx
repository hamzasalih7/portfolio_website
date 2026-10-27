"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { skillsStrip } from "@/content/skills";

export function SkillsStrip() {
  const { ui } = useLocale();

  return (
    <section aria-label={ui.technologiesIUse} className="border-y border-border bg-navy-950/60">
      <Container className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-5 sm:justify-between sm:gap-4 sm:py-6">
        <p className="w-full text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted sm:w-auto sm:text-start">
          {ui.technologiesIUse}
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
