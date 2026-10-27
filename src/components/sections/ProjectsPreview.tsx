"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  projectCategories,
  projects,
  type ProjectCategory,
} from "@/content/projects";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function ProjectsPreview({
  showAllLink = true,
  limit,
}: {
  showAllLink?: boolean;
  limit?: number;
}) {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const filtered = useMemo(() => {
    const list =
      filter === "All" ? projects : projects.filter((p) => p.category === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit]);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Filterable portfolio cards. Add new entries in src/content/projects.ts without redesigning the site."
          />
          {showAllLink ? (
            <Button href="/projects" variant="secondary" className="shrink-0 self-start sm:self-auto">
              View all projects
            </Button>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project categories">
          {(["All", ...projectCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm transition focus-ring",
                filter === cat
                  ? "border-accent/40 bg-accent-dim text-accent"
                  : "border-border text-muted hover:border-border-strong hover:text-soft",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <article className="card-surface group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-navy-800">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-border px-2 py-0.5 text-[11px] text-soft"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline focus-ring rounded"
                    >
                      View Case Study
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        className="text-sm text-muted hover:text-soft"
                        {...(project.liveUrl.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        Live
                      </a>
                    ) : null}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-soft"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="mt-10 text-center text-sm text-muted">
            No projects in this category yet. Add one in{" "}
            <code className="text-accent">src/content/projects.ts</code>.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
