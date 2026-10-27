import type { Locale } from "@/i18n/config";

export type ServiceIconName =
  | "globe"
  | "palette"
  | "cart"
  | "server"
  | "amazon"
  | "cloud"
  | "wrench"
  | "plus";

type ServiceCopy = {
  title: string;
  shortDescription: string;
  problem: string;
  deliverables: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
};

type ServiceBase = {
  id: string;
  slug: string;
  relatedProjectIds: string[];
  enabled: boolean;
  featured?: boolean;
  icon: ServiceIconName;
  en: ServiceCopy;
  ar: ServiceCopy;
};

export type Service = ServiceCopy & {
  id: string;
  slug: string;
  relatedProjectIds: string[];
  enabled: boolean;
  featured?: boolean;
  icon: ServiceIconName;
};

const servicesData: ServiceBase[] = [
  {
    id: "website-development",
    slug: "website-development",
    relatedProjectIds: ["project-portfolio-site", "project-business-landing"],
    enabled: true,
    featured: true,
    icon: "globe",
    en: {
      title: "Website Development",
      shortDescription:
        "Professional business websites, portfolios, landing pages, and corporate sites built to be fast, responsive, and easy to maintain.",
      problem:
        "Many businesses need a credible online presence but lack the time or technical capacity to build and maintain a modern website.",
      deliverables: [
        "Business and company websites",
        "Personal portfolios",
        "Landing pages",
        "Corporate websites",
        "Responsive, mobile-friendly interfaces",
        "Website maintenance and improvements",
      ],
      workflow: [
        "Clarify goals, audience, and content needs",
        "Propose structure, pages, and technical approach",
        "Design and build responsive pages",
        "Review, refine, and deploy",
      ],
      faqs: [
        {
          question: "Do you provide hosting as well?",
          answer:
            "Yes — hosting and deployment can be included as a separate or combined engagement. See Website Hosting & Deployment.",
        },
        {
          question: "Can you redesign an existing website?",
          answer:
            "Yes. Redesigns and iterative improvements are common requests and can be scoped after a short review of your current site.",
        },
      ],
    },
    ar: {
      title: "تطوير المواقع",
      shortDescription:
        "مواقع أعمال واحترافية، ومعارض أعمال، وصفحات هبوط، ومواقع شركات — سريعة ومتجاوبة وسهلة الصيانة.",
      problem:
        "تحتاج كثير من الشركات حضوراً رقمياً موثوقاً دون امتلاك الوقت أو القدرة التقنية لبناء موقع حديث وصيانته.",
      deliverables: [
        "مواقع الأعمال والشركات",
        "معارض أعمال شخصية",
        "صفحات هبوط",
        "مواقع مؤسسية",
        "واجهات متجاوبة ومناسبة للجوال",
        "صيانة وتحسين المواقع",
      ],
      workflow: [
        "توضيح الأهداف والجمهور واحتياجات المحتوى",
        "اقتراح الهيكل والصفحات والنهج التقني",
        "تصميم وبناء صفحات متجاوبة",
        "المراجعة والتحسين والنشر",
      ],
      faqs: [
        {
          question: "هل توفر الاستضافة أيضاً؟",
          answer:
            "نعم — يمكن تضمين الاستضافة والنشر كمشروع منفصل أو مشترك. راجع خدمة استضافة ونشر المواقع.",
        },
        {
          question: "هل يمكنك إعادة تصميم موقع قائم؟",
          answer:
            "نعم. إعادة التصميم والتحسينات التدريجية طلبات شائعة ويمكن تحديد نطاقها بعد مراجعة سريعة لموقعك الحالي.",
        },
      ],
    },
  },
  {
    id: "web-design",
    slug: "web-design-ui-ux",
    relatedProjectIds: ["project-portfolio-site"],
    enabled: true,
    featured: true,
    icon: "palette",
    en: {
      title: "Web Design & UI/UX",
      shortDescription:
        "Modern layouts and brand-consistent interfaces focused on clarity, usability, and conversion.",
      problem:
        "Outdated or unclear interfaces make it harder for visitors to trust your brand and take action.",
      deliverables: [
        "Modern website layouts",
        "User interface design",
        "Responsive page design",
        "Website redesigns",
        "User experience improvements",
        "Brand-consistent digital interfaces",
      ],
      workflow: [
        "Review brand, competitors, and user goals",
        "Define layout and visual direction",
        "Iterate on key screens",
        "Hand off or implement in code",
      ],
      faqs: [
        {
          question: "Do you design in Figma?",
          answer:
            "Design workflow can be adapted to your preferred tools. Implementation-ready layouts are the default deliverable when building the site as well.",
        },
      ],
    },
    ar: {
      title: "تصميم الويب وUI/UX",
      shortDescription:
        "تخطيطات حديثة وواجهات متسقة مع العلامة تركز على الوضوح وسهولة الاستخدام والتحويل.",
      problem:
        "الواجهات القديمة أو غير الواضحة تصعّب على الزوار الثقة بعلامتك واتخاذ إجراء.",
      deliverables: [
        "تخطيطات مواقع حديثة",
        "تصميم واجهة المستخدم",
        "تصميم صفحات متجاوبة",
        "إعادة تصميم المواقع",
        "تحسين تجربة المستخدم",
        "واجهات رقمية متسقة مع العلامة",
      ],
      workflow: [
        "مراجعة العلامة والمنافسين وأهداف المستخدم",
        "تحديد التخطيط والاتجاه البصري",
        "التكرار على الشاشات الرئيسية",
        "التسليم أو التنفيذ في الكود",
      ],
      faqs: [
        {
          question: "هل تصمم باستخدام Figma؟",
          answer:
            "يمكن تكييف سير عمل التصميم حسب أدواتك المفضلة. التخطيطات الجاهزة للتنفيذ هي المخرج الافتراضي عند بناء الموقع أيضاً.",
        },
      ],
    },
  },
  {
    id: "ecommerce",
    slug: "ecommerce-website-development",
    relatedProjectIds: [],
    enabled: true,
    featured: true,
    icon: "cart",
    en: {
      title: "E-commerce Website Development",
      shortDescription:
        "Online stores with product catalogs, cart/checkout flows, and launch support tailored to your business.",
      problem:
        "Selling online requires more than a brochure site — catalog, checkout, payments, and order workflows must work reliably together.",
      deliverables: [
        "Online store development",
        "Product catalog setup",
        "Shopping cart and checkout integration",
        "Payment gateway integration where supported",
        "Shipping and order workflow guidance",
        "Store configuration and launch support",
      ],
      workflow: [
        "Define products, payments, and fulfillment needs",
        "Select platform and integrations",
        "Build catalog, cart, and checkout",
        "Test payments/orders and launch",
      ],
      faqs: [
        {
          question: "Which platforms do you work with?",
          answer:
            "Platform choice depends on your catalog size, budget, and operations. Options are discussed during discovery so the stack fits your business.",
        },
      ],
    },
    ar: {
      title: "تطوير المتاجر الإلكترونية",
      shortDescription:
        "متاجر إلكترونية مع كتالوج منتجات وسلة شراء ودعم الإطلاق بما يناسب عملك.",
      problem:
        "البيع عبر الإنترنت يحتاج أكثر من موقع تعريفي — يجب أن يعمل الكتالوج والدفع وطلبات الشراء معاً بموثوقية.",
      deliverables: [
        "تطوير المتجر الإلكتروني",
        "إعداد كتالوج المنتجات",
        "تكامل سلة الشراء وإتمام الطلب",
        "تكامل بوابات الدفع عند الدعم",
        "إرشاد سير الشحن والطلبات",
        "تهيئة المتجر ودعم الإطلاق",
      ],
      workflow: [
        "تحديد المنتجات والمدفوعات واحتياجات التنفيذ",
        "اختيار المنصة والتكاملات",
        "بناء الكتالوج والسلة وإتمام الشراء",
        "اختبار المدفوعات/الطلبات ثم الإطلاق",
      ],
      faqs: [
        {
          question: "ما المنصات التي تعمل عليها؟",
          answer:
            "اختيار المنصة يعتمد على حجم الكتالوج والميزانية والعمليات. تُناقش الخيارات أثناء الاكتشاف لتناسب عملك.",
        },
      ],
    },
  },
  {
    id: "hosting",
    slug: "website-hosting-deployment",
    relatedProjectIds: ["project-portfolio-site"],
    enabled: true,
    featured: true,
    icon: "server",
    en: {
      title: "Website Hosting & Deployment",
      shortDescription:
        "Domain, DNS, SSL, cloud hosting, migrations, backups, and performance-minded deployments.",
      problem:
        "A finished website still needs secure hosting, correct DNS, HTTPS, backups, and a clear deployment path.",
      deliverables: [
        "Domain and DNS configuration",
        "Hosting setup",
        "SSL/HTTPS configuration",
        "Website migration",
        "Cloud hosting and deployment",
        "Performance optimization basics",
        "Backup configuration and basic monitoring",
      ],
      workflow: [
        "Audit current hosting and DNS",
        "Plan target environment",
        "Migrate or deploy with SSL",
        "Verify uptime, backups, and access handover",
      ],
      faqs: [
        {
          question: "Can you migrate my existing site without downtime?",
          answer:
            "Migrations are planned to minimize disruption. Exact approach depends on the current host, DNS provider, and site complexity.",
        },
      ],
    },
    ar: {
      title: "استضافة ونشر المواقع",
      shortDescription:
        "النطاق وDNS وSSL والاستضافة السحابية والترحيل والنسخ الاحتياطي ونشر يراعي الأداء.",
      problem:
        "الموقع الجاهز ما زال يحتاج استضافة آمنة وDNS صحيح وHTTPS ونسخاً احتياطياً ومسار نشر واضح.",
      deliverables: [
        "تهيئة النطاق وDNS",
        "إعداد الاستضافة",
        "تهيئة SSL/HTTPS",
        "ترحيل الموقع",
        "الاستضافة السحابية والنشر",
        "أساسيات تحسين الأداء",
        "إعداد النسخ الاحتياطي والمراقبة الأساسية",
      ],
      workflow: [
        "مراجعة الاستضافة وDNS الحالية",
        "تخطيط البيئة المستهدفة",
        "الترحيل أو النشر مع SSL",
        "التحقق من التوفر والنسخ الاحتياطي وتسليم الوصول",
      ],
      faqs: [
        {
          question: "هل يمكن ترحيل موقعي دون توقف؟",
          answer:
            "يُخطط للترحيل لتقليل الانقطاع. يعتمد الأسلوب على المستضيف الحالي ومزوّد DNS وتعقيد الموقع.",
        },
      ],
    },
  },
  {
    id: "amazon-seller",
    slug: "amazon-seller-central-setup",
    relatedProjectIds: [],
    enabled: true,
    icon: "amazon",
    en: {
      title: "Amazon Seller Central Setup Assistance",
      shortDescription:
        "Guided help with seller registration, account setup, listings preparation, and onboarding workflows.",
      problem:
        "Amazon Seller Central can be confusing for new sellers who need structured guidance through registration and basic store setup.",
      deliverables: [
        "Guidance through seller account registration",
        "Business information and account setup assistance",
        "Seller Central configuration support",
        "Product listing preparation guidance",
        "Basic store setup and workflow guidance",
        "Troubleshooting and onboarding support",
      ],
      workflow: [
        "Review your business readiness and documents",
        "Walk through registration and account setup",
        "Configure core Seller Central settings",
        "Prepare listings and clarify next operational steps",
      ],
      faqs: [
        {
          question: "Do you guarantee Amazon account approval?",
          answer:
            "No. Amazon account approval, identity verification, eligibility, and marketplace authorization are controlled solely by Amazon. This service provides guidance and setup assistance only.",
        },
      ],
    },
    ar: {
      title: "مساعدة إعداد Amazon Seller Central",
      shortDescription:
        "إرشاد منظم لتسجيل البائع وإعداد الحساب وتحضير القوائم وبدء التشغيل.",
      problem:
        "قد يكون Amazon Seller Central مربكاً للبائعين الجدد الذين يحتاجون توجيهاً واضحاً عبر التسجيل وإعداد المتجر الأساسي.",
      deliverables: [
        "إرشاد خلال تسجيل حساب البائع",
        "مساعدة إعداد معلومات العمل والحساب",
        "دعم تهيئة Seller Central",
        "إرشاد تحضير قوائم المنتجات",
        "إرشاد الإعداد الأساسي وسير العمل",
        "استكشاف الأعطال ودعم البدء",
      ],
      workflow: [
        "مراجعة جاهزية عملك والمستندات",
        "المرور بخطوات التسجيل وإعداد الحساب",
        "تهيئة إعدادات Seller Central الأساسية",
        "تحضير القوائم وتوضيح الخطوات التشغيلية التالية",
      ],
      faqs: [
        {
          question: "هل تضمن الموافقة على حساب أمازون؟",
          answer:
            "لا. الموافقة على الحساب والتحقق من الهوية والأهلية وتفويض السوق تخضع لأمازون فقط. هذه الخدمة تقدّم إرشاداً ومساعدة في الإعداد فقط.",
        },
      ],
    },
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops-solutions",
    relatedProjectIds: ["project-cicd-pipeline", "project-aws-infra"],
    enabled: true,
    featured: true,
    icon: "cloud",
    en: {
      title: "Cloud & DevOps Solutions",
      shortDescription:
        "AWS setup, application deployment, CI/CD, containers, monitoring, and deployment workflow improvements.",
      problem:
        "Teams need reliable cloud environments and repeatable deployments without fragile manual processes.",
      deliverables: [
        "AWS infrastructure setup and configuration",
        "Cloud application deployment",
        "CI/CD pipeline implementation",
        "Docker containerization",
        "Basic Kubernetes deployment support",
        "Cloud monitoring and alerting",
        "Infrastructure troubleshooting",
        "Deployment workflow improvements",
      ],
      workflow: [
        "Assess current infrastructure and pain points",
        "Design a practical target setup",
        "Implement infrastructure and pipelines",
        "Document handover and monitoring basics",
      ],
      faqs: [
        {
          question: "Do you work with existing AWS accounts?",
          answer:
            "Yes. Engagements often start by reviewing what you already have, then improving security, structure, and deployment reliability.",
        },
      ],
    },
    ar: {
      title: "حلول السحابة وDevOps",
      shortDescription:
        "إعداد AWS ونشر التطبيقات وCI/CD والحاويات والمراقبة وتحسين سير النشر.",
      problem:
        "تحتاج الفرق بيئات سحابية موثوقة ونشراً قابلاً للتكرار دون عمليات يدوية هشة.",
      deliverables: [
        "إعداد وتهيئة بنية AWS",
        "نشر التطبيقات على السحابة",
        "تنفيذ خطوط CI/CD",
        "تحزيم Docker",
        "دعم نشر Kubernetes الأساسي",
        "مراقبة السحابة والتنبيهات",
        "استكشاف أعطال البنية التحتية",
        "تحسين سير عمل النشر",
      ],
      workflow: [
        "تقييم البنية الحالية ونقاط الألم",
        "تصميم إعداد مستهدف عملي",
        "تنفيذ البنية وخطوط النشر",
        "توثيق التسليم وأساسيات المراقبة",
      ],
      faqs: [
        {
          question: "هل تعمل مع حسابات AWS القائمة؟",
          answer:
            "نعم. غالباً يبدأ التعاون بمراجعة ما لديك ثم تحسين الأمان والهيكل وموثوقية النشر.",
        },
      ],
    },
  },
  {
    id: "it-support",
    slug: "it-infrastructure-technical-support",
    relatedProjectIds: ["project-aws-infra"],
    enabled: true,
    icon: "wrench",
    en: {
      title: "IT Infrastructure & Technical Support",
      shortDescription:
        "Linux servers, web servers, DNS/networking troubleshooting, deployments, monitoring, and maintenance.",
      problem:
        "Infrastructure issues and unclear server setups slow teams down and create avoidable downtime risk.",
      deliverables: [
        "Linux server setup and administration",
        "Web server configuration",
        "DNS and networking troubleshooting",
        "Application deployment support",
        "Infrastructure monitoring basics",
        "Technical troubleshooting and maintenance",
      ],
      workflow: [
        "Identify the issue or infrastructure goal",
        "Diagnose and propose a fix plan",
        "Implement and verify",
        "Document what changed and how to operate it",
      ],
      faqs: [
        {
          question: "Is this available as ongoing support?",
          answer:
            "Yes — one-off troubleshooting and ongoing maintenance can both be scoped based on your needs.",
        },
      ],
    },
    ar: {
      title: "البنية التقنية والدعم الفني",
      shortDescription:
        "خوادم Linux وخوادم الويب واستكشاف DNS/الشبكات والنشر والمراقبة والصيانة.",
      problem:
        "مشكلات البنية وإعدادات الخوادم غير الواضحة تبطئ الفرق وتزيد خطر التوقف غير الضروري.",
      deliverables: [
        "إعداد وإدارة خوادم Linux",
        "تهيئة خوادم الويب",
        "استكشاف أعطال DNS والشبكات",
        "دعم نشر التطبيقات",
        "أساسيات مراقبة البنية",
        "استكشاف الأعطال التقنية والصيانة",
      ],
      workflow: [
        "تحديد المشكلة أو هدف البنية",
        "التشخيص واقتراح خطة الإصلاح",
        "التنفيذ والتحقق",
        "توثيق التغييرات وطريقة التشغيل",
      ],
      faqs: [
        {
          question: "هل يتوفر كدعم مستمر؟",
          answer:
            "نعم — يمكن تحديد نطاق استكشاف الأعطال لمرة واحدة أو الصيانة المستمرة حسب احتياجك.",
        },
      ],
    },
  },
  {
    id: "api-integrations",
    slug: "api-development-integrations",
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
    en: {
      title: "API Development & Integrations",
      shortDescription:
        "Connect your website or systems with third-party APIs and business tools.",
      problem:
        "Businesses often need systems to exchange data reliably without manual copy-paste workflows.",
      deliverables: [
        "API integration planning",
        "Third-party service connections",
        "Basic automation between tools",
      ],
      workflow: [
        "Map systems and data flow",
        "Implement and authenticate integrations",
        "Test edge cases and document usage",
      ],
      faqs: [],
    },
    ar: {
      title: "تطوير وربط واجهات API",
      shortDescription:
        "ربط موقعك أو أنظمتك بواجهات خارجية وأدوات الأعمال.",
      problem:
        "تحتاج الشركات غالباً إلى تبادل بيانات موثوق دون نسخ ولصق يدوي.",
      deliverables: [
        "تخطيط تكامل API",
        "ربط خدمات الطرف الثالث",
        "أتمتة أساسية بين الأدوات",
      ],
      workflow: [
        "رسم الأنظمة وتدفق البيانات",
        "تنفيذ التكاملات والمصادقة",
        "اختبار الحالات الحدية وتوثيق الاستخدام",
      ],
      faqs: [],
    },
  },
  {
    id: "maintenance",
    slug: "website-maintenance",
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
    en: {
      title: "Business Website Maintenance",
      shortDescription:
        "Ongoing updates, fixes, content changes, and light technical care for your live site.",
      problem:
        "Websites need regular attention to stay secure, accurate, and aligned with the business.",
      deliverables: [
        "Content and layout updates",
        "Dependency and security updates where applicable",
        "Bug fixes and small feature improvements",
      ],
      workflow: [
        "Agree on scope and response expectations",
        "Track requested changes",
        "Ship updates and confirm with you",
      ],
      faqs: [],
    },
    ar: {
      title: "صيانة مواقع الأعمال",
      shortDescription:
        "تحديثات مستمرة وإصلاحات وتغييرات محتوى ورعاية تقنية خفيفة لموقعك المباشر.",
      problem:
        "تحتاج المواقع اهتماماً منتظماً لتبقى آمنة ودقيقة ومتوافقة مع العمل.",
      deliverables: [
        "تحديثات المحتوى والتخطيط",
        "تحديثات الاعتماديات والأمان عند الحاجة",
        "إصلاح الأخطاء وتحسينات صغيرة",
      ],
      workflow: [
        "الاتفاق على النطاق وتوقعات الاستجابة",
        "تتبع التغييرات المطلوبة",
        "تنفيذ التحديثات والتأكيد معك",
      ],
      faqs: [],
    },
  },
  {
    id: "security-hardening",
    slug: "website-security-hardening",
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
    en: {
      title: "Website Security Hardening",
      shortDescription:
        "Practical hardening for websites and hosting environments — baselines, not buzzwords.",
      problem:
        "Default setups often leave avoidable gaps in HTTPS, access control, updates, and backups.",
      deliverables: [
        "Security baseline review",
        "HTTPS and access hardening guidance",
        "Backup and update recommendations",
      ],
      workflow: [
        "Review current setup",
        "Prioritize practical fixes",
        "Implement agreed hardening steps",
      ],
      faqs: [],
    },
    ar: {
      title: "تعزيز أمان المواقع",
      shortDescription:
        "تعزيز عملي لأمان المواقع وبيئات الاستضافة — أساسيات واضحة لا شعارات.",
      problem:
        "الإعدادات الافتراضية غالباً تترك فجوات يمكن تجنبها في HTTPS والوصول والتحديثات والنسخ الاحتياطي.",
      deliverables: [
        "مراجعة خط الأساس الأمني",
        "إرشاد تعزيز HTTPS والوصول",
        "توصيات النسخ الاحتياطي والتحديث",
      ],
      workflow: [
        "مراجعة الإعداد الحالي",
        "ترتيب الإصلاحات العملية حسب الأولوية",
        "تنفيذ خطوات التعزيز المتفق عليها",
      ],
      faqs: [],
    },
  },
  {
    id: "consulting",
    slug: "technical-consulting",
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
    en: {
      title: "Technical Consulting",
      shortDescription:
        "Advisory sessions on cloud, web architecture, deployments, and technology decisions.",
      problem:
        "Sometimes you need a clear technical opinion before investing in tools or rebuilds.",
      deliverables: [
        "Architecture and tooling advice",
        "Deployment and hosting recommendations",
        "Prioritized action plans",
      ],
      workflow: [
        "Share context and constraints",
        "Review options together",
        "Leave with a clear next-step plan",
      ],
      faqs: [],
    },
    ar: {
      title: "الاستشارات التقنية",
      shortDescription:
        "جلسات استشارية حول السحابة وهندسة الويب والنشر وقرارات التقنية.",
      problem:
        "أحياناً تحتاج رأياً تقنياً واضحاً قبل الاستثمار في أدوات أو إعادة بناء.",
      deliverables: [
        "نصائح حول البنية والأدوات",
        "توصيات النشر والاستضافة",
        "خطط عمل مرتبة حسب الأولوية",
      ],
      workflow: [
        "مشاركة السياق والقيود",
        "مراجعة الخيارات معاً",
        "الخروج بخطة خطوات تالية واضحة",
      ],
      faqs: [],
    },
  },
];

function localize(base: ServiceBase, locale: Locale): Service {
  const copy = locale === "ar" ? base.ar : base.en;
  return {
    id: base.id,
    slug: base.slug,
    relatedProjectIds: base.relatedProjectIds,
    enabled: base.enabled,
    featured: base.featured,
    icon: base.icon,
    ...copy,
  };
}

export function getEnabledServices(locale: Locale) {
  return servicesData.filter((s) => s.enabled).map((s) => localize(s, locale));
}

export function getServiceBySlug(locale: Locale, slug: string) {
  return getEnabledServices(locale).find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
  return servicesData.filter((s) => s.enabled).map((s) => s.slug);
}
