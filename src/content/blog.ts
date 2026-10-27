/**
 * Blog / articles. Do not invent credentials or unverified technical claims.
 * Set published: false to keep a draft off the public listing.
 */

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  published: boolean;
  publishedAt: string;
  readTime: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    slug: "getting-started-with-aws-for-small-businesses",
    title: "Getting Started with AWS for Small Businesses",
    excerpt:
      "A practical overview of when cloud hosting makes sense and what to set up first — without unnecessary complexity.",
    category: "AWS",
    published: true,
    publishedAt: "2026-01-15",
    readTime: "6 min",
    content: [
      "Many small businesses consider AWS when they outgrow basic shared hosting or need more control over deployments.",
      "Start with clear goals: host a website, run an application, store files, or support a staging environment. You do not need every AWS service on day one.",
      "A sensible foundation usually includes an account with MFA, IAM users/roles instead of root usage for daily work, and a simple networking layout if you run compute.",
      "From there, choose the smallest hosting pattern that fits: static hosting for marketing sites, a single compute instance for traditional apps, or a managed platform when operational overhead matters more than fine-grained control.",
      "This article is introductory guidance, not a substitute for a full architecture review of your specific workloads.",
    ],
  },
  {
    id: "blog-2",
    slug: "why-ci-cd-matters-for-small-teams",
    title: "Why CI/CD Matters for Small Teams",
    excerpt:
      "How automated build and deploy pipelines reduce release risk even when your team is small.",
    category: "DevOps",
    published: true,
    publishedAt: "2026-02-02",
    readTime: "5 min",
    content: [
      "Continuous integration and deployment are not only for large engineering organizations.",
      "Small teams benefit because every manual release step is a place where configuration drift and forgotten checks can sneak in.",
      "A minimal pipeline that installs dependencies, runs tests or linting, builds artifacts, and deploys to a known environment already improves consistency.",
      "Grow the pipeline as your needs grow — start reliable, then add sophistication.",
    ],
  },
  {
    id: "blog-3",
    slug: "checklist-for-launching-a-business-website",
    title: "Checklist for Launching a Business Website",
    excerpt:
      "Domains, DNS, HTTPS, analytics readiness, contact paths, and content basics before you go live.",
    category: "Web Development",
    published: true,
    publishedAt: "2026-03-10",
    readTime: "4 min",
    content: [
      "Before launch, confirm the domain points to the correct host and HTTPS is active with no mixed-content warnings.",
      "Make sure contact methods work: forms, email, or WhatsApp — and that someone will respond.",
      "Check mobile layout, page titles, meta descriptions, favicon, and a simple privacy policy if you collect inquiries.",
      "Finally, take a backup and note how you will deploy future updates.",
    ],
  },
];

export function getPublishedPosts() {
  return blogPosts
    .filter((p) => p.published)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(slug: string) {
  return getPublishedPosts().find((p) => p.slug === slug);
}
