import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { Suspense } from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getProfile } from "@/content/profile";
import { getProjectsByIds } from "@/content/projects";
import { getAllServiceSlugs, getServiceBySlug } from "@/content/services";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { getUI } from "@/i18n/ui";
import { ServiceIcon } from "@/lib/icons";
import { whatsappUrl } from "@/lib/utils";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllServiceSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const service = getServiceBySlug(locale, slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const ui = getUI(locale);
  const profile = getProfile(locale);
  const service = getServiceBySlug(locale, slug);
  if (!service) notFound();

  const related = getProjectsByIds(locale, service.relatedProjectIds);
  const wa = whatsappUrl(
    profile.phoneE164,
    locale === "ar"
      ? `مرحباً حمزة، أنا مهتم بخدمة ${service.title} وأود مناقشة مشروع.`
      : `Hello Hamza, I’m interested in your ${service.title} service and would like to discuss a project.`,
  );

  return (
    <article>
      <section className="border-b border-border py-16 sm:py-20">
        <Container className="max-w-3xl">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/25 bg-accent-dim text-accent">
            <ServiceIcon name={service.icon} className="h-6 w-6" />
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {ui.serviceEyebrow}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {service.shortDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href={localePath(
                locale,
                `/contact?service=${encodeURIComponent(service.title)}`,
              )}
            >
              {ui.requestQuote}
            </Button>
            <Button href={wa} variant="outline" external>
              <MessageCircle className="h-4 w-4" />
              {ui.whatsapp}
            </Button>
          </div>
        </Container>
      </section>

      <Container className="grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-10">
          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              {ui.businessProblem}
            </h2>
            <p className="mt-3 leading-relaxed text-soft">{service.problem}</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              {ui.whatIncluded}
            </h2>
            <ul className="mt-4 space-y-2">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-2 text-soft">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-white">
              {ui.typicalWorkflow}
            </h2>
            <ol className="mt-4 space-y-3">
              {service.workflow.map((step, i) => (
                <li key={step} className="flex gap-3 text-soft">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-border text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </section>

          {service.faqs.length > 0 ? (
            <section>
              <h2 className="font-display text-2xl font-semibold text-white">
                {ui.frequentlyAsked}
              </h2>
              <div className="mt-4 space-y-3">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="card-surface p-4">
                    <summary className="cursor-pointer font-medium text-white">
                      {faq.question}
                    </summary>
                    <p className="mt-2 text-sm text-muted">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {related.length > 0 ? (
            <section>
              <h2 className="font-display text-2xl font-semibold text-white">
                {ui.relevantProjects}
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={localePath(locale, `/projects/${p.slug}`)}
                      className="card-surface block p-4 transition hover:border-accent/30"
                    >
                      <p className="font-medium text-white">{p.title}</p>
                      <p className="mt-1 text-sm text-muted">{p.summary}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <div className="card-surface p-5">
            <h2 className="font-display text-lg font-semibold text-white">
              {ui.requestQuote}
            </h2>
            <p className="mt-2 text-sm text-muted">{ui.quoteNote}</p>
          </div>
          <Suspense fallback={<div className="card-surface h-64 animate-pulse" />}>
            <ContactForm />
          </Suspense>
        </aside>
      </Container>
    </article>
  );
}
