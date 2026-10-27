import type { Locale } from "@/i18n/config";

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

type BlogBase = {
  id: string;
  slug: string;
  published: boolean;
  publishedAt: string;
  en: Omit<BlogPost, "id" | "slug" | "published" | "publishedAt">;
  ar: Omit<BlogPost, "id" | "slug" | "published" | "publishedAt">;
};

const posts: BlogBase[] = [
  {
    id: "blog-1",
    slug: "getting-started-with-aws-for-small-businesses",
    published: true,
    publishedAt: "2026-01-15",
    en: {
      title: "Getting Started with AWS for Small Businesses",
      excerpt:
        "A practical overview of when cloud hosting makes sense and what to set up first — without unnecessary complexity.",
      category: "AWS",
      readTime: "6 min",
      content: [
        "Many small businesses consider AWS when they outgrow basic shared hosting or need more control over deployments.",
        "Start with clear goals: host a website, run an application, store files, or support a staging environment. You do not need every AWS service on day one.",
        "A sensible foundation usually includes an account with MFA, IAM users/roles instead of root usage for daily work, and a simple networking layout if you run compute.",
        "From there, choose the smallest hosting pattern that fits: static hosting for marketing sites, a single compute instance for traditional apps, or a managed platform when operational overhead matters more than fine-grained control.",
        "This article is introductory guidance, not a substitute for a full architecture review of your specific workloads.",
      ],
    },
    ar: {
      title: "البدء مع AWS للشركات الصغيرة",
      excerpt:
        "نظرة عملية على متى تكون الاستضافة السحابية مناسبة وما الذي يُعد أولاً — دون تعقيد غير ضروري.",
      category: "AWS",
      readTime: "6 دقائق",
      content: [
        "تلجأ كثير من الشركات الصغيرة إلى AWS عندما تتجاوز الاستضافة المشتركة الأساسية أو تحتاج تحكماً أكبر في النشر.",
        "ابدأ بأهداف واضحة: استضافة موقع، تشغيل تطبيق، تخزين ملفات، أو بيئة تجريبية. لا تحتاج كل خدمات AWS من اليوم الأول.",
        "الأساس المعقول عادة يشمل حساباً مع MFA ومستخدمين/أدوار IAM بدل استخدام الجذر يومياً، وتخطيط شبكة بسيط إن كنت تشغّل حوسبة.",
        "بعدها اختر أصغر نمط استضافة يناسبك: استضافة ثابتة للمواقع التسويقية، أو خادم حوسبة واحد للتطبيقات التقليدية، أو منصة مُدارة عندما يهم تقليل العبء التشغيلي.",
        "هذا المقال إرشاد تمهيدي وليس بديلاً عن مراجعة معمارية كاملة لأحمالك الخاصة.",
      ],
    },
  },
  {
    id: "blog-2",
    slug: "why-ci-cd-matters-for-small-teams",
    published: true,
    publishedAt: "2026-02-02",
    en: {
      title: "Why CI/CD Matters for Small Teams",
      excerpt:
        "How automated build and deploy pipelines reduce release risk even when your team is small.",
      category: "DevOps",
      readTime: "5 min",
      content: [
        "Continuous integration and deployment are not only for large engineering organizations.",
        "Small teams benefit because every manual release step is a place where configuration drift and forgotten checks can sneak in.",
        "A minimal pipeline that installs dependencies, runs tests or linting, builds artifacts, and deploys to a known environment already improves consistency.",
        "Grow the pipeline as your needs grow — start reliable, then add sophistication.",
      ],
    },
    ar: {
      title: "لماذا يهم CI/CD للفرق الصغيرة",
      excerpt:
        "كيف تقلل خطوط البناء والنشر الآلي مخاطر الإصدار حتى لو كان فريقك صغيراً.",
      category: "DevOps",
      readTime: "5 دقائق",
      content: [
        "التكامل والنشر المستمر ليسا حكراً على المؤسسات الهندسية الكبيرة.",
        "تستفيد الفرق الصغيرة لأن كل خطوة إصدار يدوية مكان محتمل لانحراف الإعدادات أو نسيان الفحوصات.",
        "خط أدنى يثبّت الاعتماديات ويشغّل الاختبارات أو الفحص ويبني الحزم وينشر لبيئة معروفة يحسّن الاتساق فعلاً.",
        "طوّر الخط مع نمو احتياجك — ابدأ بموثوقية ثم أضف التعقيد.",
      ],
    },
  },
  {
    id: "blog-3",
    slug: "checklist-for-launching-a-business-website",
    published: true,
    publishedAt: "2026-03-10",
    en: {
      title: "Checklist for Launching a Business Website",
      excerpt:
        "Domains, DNS, HTTPS, analytics readiness, contact paths, and content basics before you go live.",
      category: "Web Development",
      readTime: "4 min",
      content: [
        "Before launch, confirm the domain points to the correct host and HTTPS is active with no mixed-content warnings.",
        "Make sure contact methods work: forms, email, or WhatsApp — and that someone will respond.",
        "Check mobile layout, page titles, meta descriptions, favicon, and a simple privacy policy if you collect inquiries.",
        "Finally, take a backup and note how you will deploy future updates.",
      ],
    },
    ar: {
      title: "قائمة تحقق لإطلاق موقع أعمال",
      excerpt:
        "النطاق وDNS وHTTPS وجاهزية التحليلات ومسارات التواصل وأساسيات المحتوى قبل الإطلاق.",
      category: "تطوير الويب",
      readTime: "4 دقائق",
      content: [
        "قبل الإطلاق تأكد أن النطاق يشير للمستضيف الصحيح وأن HTTPS مفعّل دون تحذيرات محتوى مختلط.",
        "تأكد من عمل وسائل التواصل: النماذج أو البريد أو واتساب — وأن هناك من سيرد.",
        "راجع تخطيط الجوال وعناوين الصفحات ووصف الميتا والأيقونة وسياسة خصوصية بسيطة إن كنت تجمع استفسارات.",
        "أخيراً خذ نسخة احتياطية وحدد كيف ستنشر التحديثات لاحقاً.",
      ],
    },
  },
];

function localize(base: BlogBase, locale: Locale): BlogPost {
  const copy = locale === "ar" ? base.ar : base.en;
  return {
    id: base.id,
    slug: base.slug,
    published: base.published,
    publishedAt: base.publishedAt,
    ...copy,
  };
}

export function getPublishedPosts(locale: Locale) {
  return posts
    .filter((p) => p.published)
    .map((p) => localize(p, locale))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPostBySlug(locale: Locale, slug: string) {
  return getPublishedPosts(locale).find((p) => p.slug === slug);
}

export function getAllPostSlugs() {
  return posts.filter((p) => p.published).map((p) => p.slug);
}
