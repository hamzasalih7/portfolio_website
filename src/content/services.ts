/**
 * Freelance services. Set `enabled: false` to hide a service from the site.
 * Only advertise capabilities that match your experience.
 */

export type Service = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  problem: string;
  deliverables: string[];
  workflow: string[];
  faqs: { question: string; answer: string }[];
  relatedProjectIds: string[];
  enabled: boolean;
  featured?: boolean;
  icon: "globe" | "palette" | "cart" | "server" | "amazon" | "cloud" | "wrench" | "plus";
};

export const services: Service[] = [
  {
    id: "website-development",
    slug: "website-development",
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
    relatedProjectIds: ["project-portfolio-site", "project-business-landing"],
    enabled: true,
    featured: true,
    icon: "globe",
  },
  {
    id: "web-design",
    slug: "web-design-ui-ux",
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
    relatedProjectIds: ["project-portfolio-site"],
    enabled: true,
    featured: true,
    icon: "palette",
  },
  {
    id: "ecommerce",
    slug: "ecommerce-website-development",
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
    relatedProjectIds: [],
    enabled: true,
    featured: true,
    icon: "cart",
  },
  {
    id: "hosting",
    slug: "website-hosting-deployment",
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
    relatedProjectIds: ["project-portfolio-site"],
    enabled: true,
    featured: true,
    icon: "server",
  },
  {
    id: "amazon-seller",
    slug: "amazon-seller-central-setup",
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
    relatedProjectIds: [],
    enabled: true,
    icon: "amazon",
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops-solutions",
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
    relatedProjectIds: ["project-cicd-pipeline", "project-aws-infra"],
    enabled: true,
    featured: true,
    icon: "cloud",
  },
  {
    id: "it-support",
    slug: "it-infrastructure-technical-support",
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
    relatedProjectIds: ["project-aws-infra"],
    enabled: true,
    icon: "wrench",
  },
  // Additional / optional offerings — enable when ready to advertise
  {
    id: "api-integrations",
    slug: "api-development-integrations",
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
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
  },
  {
    id: "maintenance",
    slug: "website-maintenance",
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
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
  },
  {
    id: "security-hardening",
    slug: "website-security-hardening",
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
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
  },
  {
    id: "consulting",
    slug: "technical-consulting",
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
    relatedProjectIds: [],
    enabled: false,
    icon: "plus",
  },
];

export function getEnabledServices() {
  return services.filter((s) => s.enabled);
}

export function getServiceBySlug(slug: string) {
  return getEnabledServices().find((s) => s.slug === slug);
}
