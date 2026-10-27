import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/content/blog";
import { getAllProjectSlugs } from "@/content/projects";
import { getAllServiceSlugs } from "@/content/services";
import { siteConfig } from "@/content/site";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = "2026-10-27";

  const staticPaths = [
    "",
    "/services",
    "/projects",
    "/contact",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${base}/${locale}${path}`,
        lastModified,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }

    for (const slug of getAllServiceSlugs()) {
      entries.push({
        url: `${base}/${locale}/services/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }

    for (const slug of getAllProjectSlugs()) {
      entries.push({
        url: `${base}/${locale}/projects/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.75,
      });
    }

    for (const slug of getAllPostSlugs()) {
      entries.push({
        url: `${base}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
