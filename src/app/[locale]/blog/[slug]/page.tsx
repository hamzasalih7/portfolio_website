import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { getAllPostSlugs, getPostBySlug } from "@/content/blog";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { getUI } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of getAllPostSlugs()) {
      params.push({ locale, slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const post = getPostBySlug(locale, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const ui = getUI(locale);
  const post = getPostBySlug(locale, slug);
  if (!post) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href={localePath(locale, "/blog")}
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft
            className={`h-4 w-4 ${locale === "ar" ? "rotate-180" : ""}`}
          />
          {ui.allArticles}
        </Link>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {post.category}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-white">
          {post.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {post.publishedAt} · {post.readTime} · Hamza Salih
        </p>
        <div className="mt-10 space-y-5">
          {post.content.map((para) => (
            <p key={para.slice(0, 40)} className="leading-relaxed text-soft">
              {para}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
