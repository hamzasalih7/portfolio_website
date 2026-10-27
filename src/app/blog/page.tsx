import type { Metadata } from "next";
import Link from "next/link";
import { getPublishedPosts } from "@/content/blog";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical articles on AWS, DevOps, web development, cloud deployment, and technology tutorials by Hamza Salih.",
};

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Blog"
          title="Notes on cloud, DevOps & the web"
          description="Introductory, practical writing. Claims stay within verified general guidance — refine articles as you publish."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
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
