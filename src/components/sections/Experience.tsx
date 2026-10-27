import { experience } from "@/content/experience";
import { skillCategories } from "@/content/skills";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional experience"
            description="Roles and responsibilities sourced from the professional CV."
          />
        </Reveal>

        <div className="relative mt-12 space-y-6 before:absolute before:left-[11px] before:top-3 before:hidden before:h-[calc(100%-24px)] before:w-px before:bg-border sm:before:block">
          {experience.map((role, index) => (
            <Reveal key={role.id} delay={index * 0.05}>
              <article className="relative grid gap-4 sm:grid-cols-[24px_1fr] sm:gap-6">
                <div className="relative z-10 mt-2 hidden h-6 w-6 items-center justify-center sm:flex">
                  <span className="h-3 w-3 rounded-full border-2 border-accent bg-navy-900" />
                </div>
                <div className="card-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm text-accent">{role.company}</p>
                    </div>
                    <div className="text-left text-sm text-muted sm:text-right">
                      <p>
                        {role.start} — {role.end}
                      </p>
                      <p>{role.location}</p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2">
                    {role.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {role.achievements && role.achievements.length > 0 ? (
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        Achievements
                      </p>
                      <ul className="mt-2 space-y-2">
                        {role.achievements.map((item) => (
                          <li key={item} className="text-sm text-soft">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border bg-white/[0.03] px-2.5 py-1 text-xs text-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div id="skills" className="mt-20 scroll-mt-24">
          <Reveal>
            <SectionHeading
              eyebrow="Skills"
              title="Technical skills"
              description="Grouped by capability. Proficiency percentages are intentionally omitted."
            />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat, i) => (
              <Reveal key={cat.id} delay={i * 0.04}>
                <div className="card-surface h-full p-6">
                  <h3 className="font-display text-base font-semibold text-white">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{cat.description}</p>
                  <ul className="mt-4 space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="text-sm text-soft">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
