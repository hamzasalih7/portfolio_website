import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPublishedPosts } from "@/content/blog";
import { isLocale, type Locale } from "@/i18n/config";
import { localePath } from "@/i18n/path";
import { getUI } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  return {
    title: ui.blog,
    description: ui.blogBody,
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw;
  const ui = getUI(locale);
  const posts = getPublishedPosts(locale);

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow={ui.blog}
          title={ui.blogTitle}
          description={ui.blogBody}
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={localePath(locale, `/blog/${post.slug}`)}
              className="card-surface flex flex-col p-6 transition hover:border-accent/30"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-accent">
                {post.category}
              </p>
              <h2 className="mt-3 font-display text-lg font-semibold text-white">
                {post.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-muted">{post.excerpt}</p>
              <p className="mt-4 text-xs text-muted">
                {post.publishedAt} · {post.readTime}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
