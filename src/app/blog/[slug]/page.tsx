import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPostBySlug, getPublishedPosts } from "@/content/blog";
import { Container } from "@/components/ui/Container";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getPublishedPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          All articles
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
