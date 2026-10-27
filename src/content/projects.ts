/**
 * Portfolio projects. Use personal / demonstrable work when client NDAs apply.
 * Never expose credentials, private repos, or confidential infrastructure details.
 *
 * To add a project: copy the template at the bottom, fill fields, add a thumbnail
 * under public/images/projects/, and reference related service IDs if useful.
 */

export type ProjectCategory =
  | "Cloud & DevOps"
  | "Web Development"
  | "E-commerce"
  | "IT Infrastructure"
  | "Automation & Integrations";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  technologies: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  /** Case study fields — keep honest; use placeholders only when needed */
  overview: string;
  context?: string;
  challenge: string;
  solution: string;
  architectureNotes?: string;
  results?: string[];
};

export const projectCategories: ProjectCategory[] = [
  "Cloud & DevOps",
  "Web Development",
  "E-commerce",
  "IT Infrastructure",
  "Automation & Integrations",
];

export const projects: Project[] = [
  {
    id: "project-portfolio-site",
    slug: "personal-portfolio-platform",
    title: "Personal Portfolio & Services Platform",
    summary:
      "A premium personal brand website combining portfolio, services, and lead generation for technology consulting.",
    category: "Web Development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    thumbnail: "/images/projects/portfolio-platform.svg",
    liveUrl: "/",
    featured: true,
    overview:
      "A multi-section marketing and portfolio site designed to present professional experience, technical capabilities, and freelance services in one coherent brand experience.",
    context:
      "Built as the public-facing presence for Hamza Salih — portfolio, consultant positioning, and inquiry capture.",
    challenge:
      "Present three identities (portfolio, consultant, freelance services) without looking like a generic CV template or marketplace profile.",
    solution:
      "Structured content-driven pages with a dark navy design system, clear CTAs, service detail pages, and editable content modules for experience, projects, and services.",
    architectureNotes:
      "Next.js App Router + TypeScript content modules. Static-friendly pages with a contact API route for inquiry handling.",
    results: [
      "Centralized professional brand and services offering",
      "Editable content structure for ongoing updates",
      "SEO metadata, sitemap, and contact pathways in place",
    ],
  },
  {
    id: "project-cicd-pipeline",
    slug: "cicd-deployment-pipeline",
    title: "CI/CD Deployment Pipeline",
    summary:
      "A practical continuous integration and deployment workflow for building, testing, and releasing applications more reliably.",
    category: "Cloud & DevOps",
    technologies: ["CI/CD", "Docker", "Git", "Linux"],
    thumbnail: "/images/projects/cicd-pipeline.svg",
    featured: true,
    overview:
      "Demonstrates an automated pipeline approach for application builds and deployments, reducing manual release steps.",
    challenge:
      "Manual deployments are slow, error-prone, and hard to repeat consistently across environments.",
    solution:
      "Containerized build steps, automated checks, and a defined promotion path from source control to a target environment.",
    architectureNotes:
      "[EDIT] Add a simple diagram or notes describing your actual pipeline stages when you publish this publicly.",
    results: [
      "[EDIT] Add verified outcomes only (e.g. reduced release time) once available.",
    ],
  },
  {
    id: "project-aws-infra",
    slug: "aws-infrastructure-foundation",
    title: "AWS Infrastructure Foundation",
    summary:
      "Foundational AWS environment setup covering networking basics, compute, storage, and access controls for application hosting.",
    category: "IT Infrastructure",
    technologies: ["AWS", "VPC", "EC2", "S3", "IAM", "Linux"],
    thumbnail: "/images/projects/aws-infra.svg",
    featured: true,
    overview:
      "A baseline cloud environment pattern for hosting workloads with clearer networking and identity boundaries.",
    challenge:
      "Teams often need a secure-enough starting point on AWS without over-engineering or leaving default gaps.",
    solution:
      "Structured account resources for networking, compute, object storage, and IAM roles aligned to least-privilege access where applicable.",
    architectureNotes:
      "[EDIT] Replace with a high-level architecture description you are comfortable sharing publicly. Do not include account IDs or secrets.",
    results: [
      "[EDIT] Document real improvements only after verification.",
    ],
  },
  {
    id: "project-business-landing",
    slug: "business-landing-page",
    title: "Business Landing Page Template",
    summary:
      "A conversion-focused landing page structure for service businesses — hero, offer clarity, process, and contact.",
    category: "Web Development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    thumbnail: "/images/projects/landing-page.svg",
    overview:
      "Reusable landing page composition for presenting an offer clearly and guiding visitors toward contact.",
    challenge:
      "Many small businesses need a focused single-page presence before investing in a full multi-page site.",
    solution:
      "Clear visual hierarchy, mobile-first layout, and inquiry-oriented CTAs with lightweight animations.",
    results: [
      "Reusable structure for future client landing pages",
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory | "All") {
  if (category === "All") return projects;
  return projects.filter((p) => p.category === category);
}

export function getProjectsByIds(ids: string[]) {
  return projects.filter((p) => ids.includes(p.id));
}

/*
 * === PROJECT TEMPLATE (copy into the projects array) ===
 * {
 *   id: "project-new",
 *   slug: "project-slug",
 *   title: "Project Title",
 *   summary: "One or two sentences.",
 *   category: "Web Development",
 *   technologies: ["Next.js", "AWS"],
 *   thumbnail: "/images/projects/your-image.jpg",
 *   liveUrl: "https://...",
 *   githubUrl: "https://github.com/...",
 *   featured: false,
 *   overview: "...",
 *   context: "...",
 *   challenge: "...",
 *   solution: "...",
 *   architectureNotes: "...",
 *   results: ["..."],
 * }
 */
