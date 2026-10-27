import { profile } from "./profile";

export const siteConfig = {
  name: profile.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hamzasalih.com",
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
  ogImage: "/images/og-default.svg",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
  cta: {
    primary: { label: "Let's Work Together", href: "/contact" },
    hire: { label: "Hire Me", href: "/contact" },
  },
} as const;
