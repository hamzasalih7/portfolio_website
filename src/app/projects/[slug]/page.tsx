import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getProjectBySlug, projects } from "@/content/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article>
      <section className="border-b border-border py-16 sm:py-20">
        <Container className="max-w-4xl">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {project.category}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-border px-2.5 py-1 text-xs text-soft"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <Button
                href={project.liveUrl}
                external={project.liveUrl.startsWith("http")}
              >
                <ExternalLink className="h-4 w-4" />
                Live demo
              </Button>
            ) : null}
            {project.githubUrl ? (
              <Button href={project.githubUrl} variant="secondary" external>
                <GitHubIcon className="h-4 w-4" />
                Source code
              </Button>
            ) : null}
            <Button href="/contact" variant="outline">
              Discuss a similar project
            </Button>
          </div>
        </Container>
      </section>

      <Container className="max-w-4xl py-14">
        <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-navy-800">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
        </div>

        <div className="space-y-10">
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">Overview</h2>
            <p className="mt-3 leading-relaxed text-soft">{project.overview}</p>
          </section>
          {project.context ? (
            <section>
              <h2 className="font-display text-2xl font-semibold text-white">
                Context
              </h2>
              <p className="mt-3 leading-relaxed text-soft">{project.context}</p>
            </section>
          ) : null}
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              Challenge
            </h2>
            <p className="mt-3 leading-relaxed text-soft">{project.challenge}</p>
          </section>
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              Solution & implementation
            </h2>
            <p className="mt-3 leading-relaxed text-soft">{project.solution}</p>
          </section>
          {project.architectureNotes ? (
            <section>
              <h2 className="font-display text-2xl font-semibold text-white">
                Architecture / workflow notes
              </h2>
              <p className="mt-3 leading-relaxed text-soft">
                {project.architectureNotes}
              </p>
            </section>
          ) : null}
          {project.results && project.results.length > 0 ? (
            <section>
              <h2 className="font-display text-2xl font-semibold text-white">
                Results
              </h2>
              <ul className="mt-3 space-y-2">
                {project.results.map((r) => (
                  <li key={r} className="flex gap-2 text-soft">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </Container>
    </article>
  );
}
