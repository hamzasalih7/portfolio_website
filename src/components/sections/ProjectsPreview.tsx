"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getProjectCategories,
  getProjects,
  type ProjectCategoryId,
} from "@/content/projects";
import { localePath } from "@/i18n/path";
import { cn } from "@/lib/utils";

export function ProjectsPreview({
  showAllLink = true,
  limit,
}: {
  showAllLink?: boolean;
  limit?: number;
}) {
  const { locale, ui } = useLocale();
  const projects = getProjects(locale);
  const categories = getProjectCategories(locale);
  const [filter, setFilter] = useState<ProjectCategoryId | "all">("all");

  const filtered = useMemo(() => {
    const list =
      filter === "all"
        ? projects
        : projects.filter((p) => p.categoryId === filter);
    return typeof limit === "number" ? list.slice(0, limit) : list;
  }, [filter, limit, projects]);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={ui.projects}
            title={ui.selectedWork}
            description={
              locale === "ar"
                ? "بطاقات مشاريع قابلة للتصفية. أضف مشروعاً جديداً من ملفات المحتوى دون إعادة تصميم الموقع."
                : "Filterable portfolio cards. Add new entries in content files without redesigning the site."
            }
          />
          {showAllLink ? (
            <Button
              href={localePath(locale, "/projects")}
              variant="secondary"
              className="shrink-0 self-start sm:self-auto"
            >
              {ui.viewAllProjects}
            </Button>
          ) : null}
        </div>

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={ui.projects}
        >
          <button
            type="button"
            role="tab"
            aria-selected={filter === "all"}
            onClick={() => setFilter("all")}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm transition focus-ring",
              filter === "all"
                ? "border-accent/40 bg-accent-dim text-accent"
                : "border-border text-muted hover:border-border-strong hover:text-soft",
            )}
          >
            {locale === "ar" ? "الكل" : "All"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={filter === cat.id}
              onClick={() => setFilter(cat.id)}
              className={cn(
                "rounded-lg border px-3 py-1.5 text-sm transition focus-ring",
                filter === cat.id
                  ? "border-accent/40 bg-accent-dim text-accent"
                  : "border-border text-muted hover:border-border-strong hover:text-soft",
              )}
            >
              {cat.label}
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
                      href={localePath(locale, `/projects/${project.slug}`)}
                      className="inline-flex items-center gap-1 rounded text-sm font-semibold text-accent hover:underline focus-ring"
                    >
                      {ui.viewCaseStudy}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    {project.liveUrl ? (
                      <a
                        href={
                          project.liveUrl === "/"
                            ? localePath(locale, "/")
                            : project.liveUrl
                        }
                        className="text-sm text-muted hover:text-soft"
                        {...(project.liveUrl.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {ui.live}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
