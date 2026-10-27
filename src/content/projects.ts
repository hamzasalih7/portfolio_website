import type { Locale } from "@/i18n/config";

export type ProjectCategoryId =
  | "cloud-devops"
  | "web-development"
  | "ecommerce"
  | "it-infrastructure"
  | "automation";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  categoryId: ProjectCategoryId;
  category: string;
  technologies: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  overview: string;
  context?: string;
  challenge: string;
  solution: string;
  architectureNotes?: string;
  results?: string[];
};

const categoryLabels: Record<Locale, Record<ProjectCategoryId, string>> = {
  en: {
    "cloud-devops": "Cloud & DevOps",
    "web-development": "Web Development",
    ecommerce: "E-commerce",
    "it-infrastructure": "IT Infrastructure",
    automation: "Automation & Integrations",
  },
  ar: {
    "cloud-devops": "السحابة وDevOps",
    "web-development": "تطوير الويب",
    ecommerce: "التجارة الإلكترونية",
    "it-infrastructure": "البنية التقنية",
    automation: "الأتمتة والتكاملات",
  },
};

type ProjectBase = {
  id: string;
  slug: string;
  categoryId: ProjectCategoryId;
  technologies: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  en: {
    title: string;
    summary: string;
    overview: string;
    context?: string;
    challenge: string;
    solution: string;
    architectureNotes?: string;
    results?: string[];
  };
  ar: {
    title: string;
    summary: string;
    overview: string;
    context?: string;
    challenge: string;
    solution: string;
    architectureNotes?: string;
    results?: string[];
  };
};

const projectsData: ProjectBase[] = [
  {
    id: "project-portfolio-site",
    slug: "personal-portfolio-platform",
    categoryId: "web-development",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    thumbnail: "/images/projects/portfolio-platform.svg",
    liveUrl: "/",
    featured: true,
    en: {
      title: "Personal Portfolio & Services Platform",
      summary:
        "A premium personal brand website combining portfolio, services, and lead generation for technology consulting.",
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
    ar: {
      title: "منصة الملف الشخصي والخدمات",
      summary:
        "موقع علامة شخصية فاخر يجمع بين المعرض والخدمات وتوليد العملاء المحتملين للاستشارات التقنية.",
      overview:
        "موقع تسويقي ومتعدد الأقسام لعرض الخبرة المهنية والقدرات التقنية والخدمات المستقلة ضمن تجربة علامة متماسكة.",
      context:
        "بُني كواجهة عامة لحمزة صالح — ملف مهني وتموضع استشاري والتقاط الاستفسارات.",
      challenge:
        "تقديم ثلاث هويات (ملف، مستشار، خدمات مستقلة) دون أن يبدو كقالب سيرة أو ملف سوق عمل عام.",
      solution:
        "صفحات مبنية على محتوى منظم مع نظام تصميم كحلي داكن ودعوات واضحة وصفحات خدمات ووحدات محتوى قابلة للتعديل.",
      architectureNotes:
        "Next.js App Router ووحدات محتوى TypeScript. صفحات مناسبة للـ static مع مسار API للتواصل.",
      results: [
        "توحيد العلامة المهنية وعرض الخدمات",
        "هيكل محتوى قابل للتحديث المستمر",
        "بيانات SEO وخريطة موقع ومسارات تواصل جاهزة",
      ],
    },
  },
  {
    id: "project-cicd-pipeline",
    slug: "cicd-deployment-pipeline",
    categoryId: "cloud-devops",
    technologies: ["CI/CD", "Docker", "Git", "Linux"],
    thumbnail: "/images/projects/cicd-pipeline.svg",
    featured: true,
    en: {
      title: "CI/CD Deployment Pipeline",
      summary:
        "A practical continuous integration and deployment workflow for building, testing, and releasing applications more reliably.",
      overview:
        "Demonstrates an automated pipeline approach for application builds and deployments, reducing manual release steps.",
      challenge:
        "Manual deployments are slow, error-prone, and hard to repeat consistently across environments.",
      solution:
        "Containerized build steps, automated checks, and a defined promotion path from source control to a target environment.",
      architectureNotes:
        "Document pipeline stages publicly only when you are comfortable sharing them.",
      results: [
        "Repeatable build and release path",
        "Fewer manual deployment steps",
      ],
    },
    ar: {
      title: "خط نشر CI/CD",
      summary:
        "سير عمل عملي للتكامل والنشر المستمر لبناء التطبيقات واختبارها وإصدارها بموثوقية أعلى.",
      overview:
        "يوضح نهجاً آلياً لبناء التطبيقات ونشرها بما يقلل خطوات الإصدار اليدوية.",
      challenge:
        "النشر اليدوي بطيء وعرضة للأخطاء وصعب التكرار عبر البيئات.",
      solution:
        "خطوات بناء مع حاويات وفحوصات آلية ومسار ترقية محدد من التحكم بالمصدر إلى البيئة المستهدفة.",
      architectureNotes:
        "وثّق مراحل الخط علناً فقط عندما تكون مرتاحاً لمشاركتها.",
      results: [
        "مسار بناء وإصدار قابل للتكرار",
        "تقليل خطوات النشر اليدوية",
      ],
    },
  },
  {
    id: "project-aws-infra",
    slug: "aws-infrastructure-foundation",
    categoryId: "it-infrastructure",
    technologies: ["AWS", "VPC", "EC2", "S3", "IAM", "Linux"],
    thumbnail: "/images/projects/aws-infra.svg",
    featured: true,
    en: {
      title: "AWS Infrastructure Foundation",
      summary:
        "Foundational AWS environment setup covering networking basics, compute, storage, and access controls for application hosting.",
      overview:
        "A baseline cloud environment pattern for hosting workloads with clearer networking and identity boundaries.",
      challenge:
        "Teams often need a secure-enough starting point on AWS without over-engineering or leaving default gaps.",
      solution:
        "Structured account resources for networking, compute, object storage, and IAM roles aligned to least-privilege access where applicable.",
      architectureNotes:
        "Share only high-level architecture publicly. Do not include account IDs or secrets.",
      results: [
        "Clearer networking and identity baseline",
        "Practical starting point for hosted workloads",
      ],
    },
    ar: {
      title: "أساس بنية AWS",
      summary:
        "إعداد بيئة AWS أساسية تشمل الشبكات والحوسبة والتخزين وضوابط الوصول لاستضافة التطبيقات.",
      overview:
        "نمط بيئة سحابية أساسية لاستضافة الأحمال مع حدود أوضح للشبكات والهوية.",
      challenge:
        "تحتاج الفرق غالباً نقطة انطلاق آمنة بما يكفي على AWS دون تعقيد مفرط أو ترك فجوات افتراضية.",
      solution:
        "موارد حساب منظمة للشبكات والحوسبة وتخزين الكائنات وأدوار IAM وفق أقل صلاحية ممكنة عند التطبيق.",
      architectureNotes:
        "شارك البنية عالية المستوى فقط علناً. لا تُدرج معرفات الحساب أو الأسرار.",
      results: [
        "أساس أوضح للشبكات والهوية",
        "نقطة انطلاق عملية للأحمال المستضافة",
      ],
    },
  },
  {
    id: "project-business-landing",
    slug: "business-landing-page",
    categoryId: "web-development",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    thumbnail: "/images/projects/landing-page.svg",
    en: {
      title: "Business Landing Page Template",
      summary:
        "A conversion-focused landing page structure for service businesses — hero, offer clarity, process, and contact.",
      overview:
        "Reusable landing page composition for presenting an offer clearly and guiding visitors toward contact.",
      challenge:
        "Many small businesses need a focused single-page presence before investing in a full multi-page site.",
      solution:
        "Clear visual hierarchy, mobile-first layout, and inquiry-oriented CTAs with lightweight animations.",
      results: ["Reusable structure for future client landing pages"],
    },
    ar: {
      title: "قالب صفحة هبوط للأعمال",
      summary:
        "هيكل صفحة هبوط يركز على التحويل لخدمات الأعمال — بطل الصفحة ووضوح العرض والعملية والتواصل.",
      overview:
        "تركيبة صفحة هبوط قابلة لإعادة الاستخدام لعرض العرض بوضوح وتوجيه الزوار نحو التواصل.",
      challenge:
        "تحتاج كثير من الشركات الصغيرة حضوراً مركزاً بصفحة واحدة قبل الاستثمار في موقع متعدد الصفحات.",
      solution:
        "تسلسل بصري واضح وتصميم للجوال أولاً ودعوات للتواصل مع حركات خفيفة.",
      results: ["هيكل قابل لإعادة الاستخدام لصفحات هبوط العملاء"],
    },
  },
];

function localize(base: ProjectBase, locale: Locale): Project {
  const copy = locale === "ar" ? base.ar : base.en;
  return {
    id: base.id,
    slug: base.slug,
    categoryId: base.categoryId,
    category: categoryLabels[locale][base.categoryId],
    technologies: base.technologies,
    thumbnail: base.thumbnail,
    liveUrl: base.liveUrl,
    githubUrl: base.githubUrl,
    featured: base.featured,
    ...copy,
  };
}

export function getProjectCategories(locale: Locale) {
  return (Object.keys(categoryLabels.en) as ProjectCategoryId[]).map((id) => ({
    id,
    label: categoryLabels[locale][id],
  }));
}

export function getProjects(locale: Locale) {
  return projectsData.map((p) => localize(p, locale));
}

export function getProjectBySlug(locale: Locale, slug: string) {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getProjectsByIds(locale: Locale, ids: string[]) {
  return getProjects(locale).filter((p) => ids.includes(p.id));
}

export function getAllProjectSlugs() {
  return projectsData.map((p) => p.slug);
}

export function getProjectsByCategory(
  locale: Locale,
  categoryId: ProjectCategoryId | "all",
) {
  const list = getProjects(locale);
  if (categoryId === "all") return list;
  return list.filter((p) => p.categoryId === categoryId);
}
