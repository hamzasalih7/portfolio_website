import type { Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";
import { localePath } from "@/i18n/path";
import { profileContact } from "./profile";

export const siteConfig = {
  name: profileContact.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hamzasalih.com",
  ogImage: "/images/og-default.svg",
};

export function getSiteMeta(locale: Locale) {
  if (locale === "ar") {
    return {
      title: "حمزة صالح | مهندس DevOps والسحابة ومطور ويب",
      description:
        "استكشف الملف المهني لحمزة صالح — خبرة AWS وDevOps وCI/CD وKubernetes وتطوير المواقع وحلول الاستضافة والخدمات التقنية المستقلة في الرياض، السعودية.",
      keywords: [
        "مهندس سحابة في السعودية",
        "مهندس DevOps في الرياض",
        "تطوير المواقع",
        "تطوير متاجر إلكترونية",
        "حلول AWS السحابية",
        "استضافة ونشر المواقع",
        "مطور ويب مستقل في السعودية",
        "حمزة صالح",
      ],
    };
  }

  return {
    title: "Hamza Salih | DevOps & Cloud Engineer, Web Developer",
    description:
      "Explore Hamza Salih's professional portfolio — AWS cloud & DevOps engineering, CI/CD, Kubernetes, web development, hosting solutions, and freelance technology services in Riyadh, Saudi Arabia.",
    keywords: [
      "Cloud Engineer in Saudi Arabia",
      "DevOps Engineer in Riyadh",
      "Website Development",
      "E-commerce Website Development",
      "AWS Cloud Solutions",
      "Website Hosting and Deployment",
      "Freelance Web Developer in Saudi Arabia",
      "Hamza Salih",
    ],
  };
}

export function getNav(locale: Locale) {
  const ui = getUI(locale);
  return [
    { label: ui.home, href: localePath(locale, "/") },
    { label: ui.about, href: localePath(locale, "/#about") },
    { label: ui.experience, href: localePath(locale, "/#experience") },
    { label: ui.projects, href: localePath(locale, "/projects") },
    { label: ui.services, href: localePath(locale, "/services") },
    { label: ui.contact, href: localePath(locale, "/contact") },
  ];
}

export function getCta(locale: Locale) {
  const ui = getUI(locale);
  return {
    primary: { label: ui.letsWork, href: localePath(locale, "/contact") },
    hire: { label: ui.hireMe, href: localePath(locale, "/contact") },
  };
}
