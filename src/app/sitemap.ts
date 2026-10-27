import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/content/blog";
import { projects } from "@/content/projects";
import { getEnabledServices } from "@/content/services";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = "2026-10-27";

  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const serviceRoutes = getEnabledServices().map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogRoutes = getPublishedPosts().map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...blogRoutes];
}
