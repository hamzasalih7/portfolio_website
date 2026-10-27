import type { Locale } from "@/i18n/config";

export const skillsStrip = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "CI/CD",
  "Linux",
  "ArgoCD",
  "Ansible",
  "Python",
  "Nginx",
] as const;

const en = [
  {
    id: "cloud",
    title: "Cloud & Infrastructure",
    description: "AWS and GCP services for secure, scalable infrastructure.",
    skills: [
      "AWS (EC2, VPC, IAM, S3, Lambda, RDS, CloudFront, EKS, CloudWatch, Route 53)",
      "GCP (Cloud Functions, Cloud Run, Load Balancer, VPC)",
      "Multi-account AWS Organizations & IAM Identity Center (SSO)",
      "High availability and multi-region disaster recovery patterns",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, containers, GitOps, and infrastructure as code.",
    skills: [
      "Kubernetes, Docker, Helm",
      "Terraform & AWS CloudFormation",
      "Jenkins, GitHub Actions, AWS CodePipeline / CodeBuild / CodeDeploy",
      "ArgoCD & Ansible",
      "GitOps and infrastructure automation",
    ],
  },
  {
    id: "systems",
    title: "Systems & Networking",
    description:
      "Linux administration, web servers, networking, and security controls.",
    skills: [
      "Ubuntu, Amazon Linux, CentOS",
      "Nginx & Apache (reverse proxy, SSL/TLS, performance tuning)",
      "TCP/IP, DNS, VPC, VPN, load balancers, security groups, NACLs",
      "Linux hardening, patch management, and troubleshooting",
    ],
  },
  {
    id: "observability",
    title: "Monitoring, Security & Reliability",
    description: "Observability, access control, and cloud security practices.",
    skills: [
      "CloudWatch, CloudTrail, AWS X-Ray",
      "IAM, Secrets Manager, KMS, SSL/TLS",
      "Site reliability and production issue detection",
      "Log monitoring and performance analysis",
    ],
  },
  {
    id: "web",
    title: "Web, Scripting & Platforms",
    description:
      "Scripting, version control, and application/platform migration work.",
    skills: [
      "Python & Bash",
      "Git & GitHub",
      "WordPress and cloud-native migrations",
      "Serverless microservices (Lambda, API Gateway)",
    ],
  },
] as const;

const ar = [
  {
    id: "cloud",
    title: "السحابة والبنية التحتية",
    description: "خدمات AWS وGCP لبنية آمنة وقابلة للتوسع.",
    skills: [
      "AWS (EC2, VPC, IAM, S3, Lambda, RDS, CloudFront, EKS, CloudWatch, Route 53)",
      "GCP (Cloud Functions, Cloud Run, Load Balancer, VPC)",
      "AWS Organizations متعددة الحسابات وIAM Identity Center (SSO)",
      "أنماط التوفر العالي والتعافي من الكوارث عبر مناطق متعددة",
    ],
  },
  {
    id: "devops",
    title: "DevOps والأتمتة",
    description: "خطوط CI/CD والحاويات وGitOps والبنية كرمز.",
    skills: [
      "Kubernetes وDocker وHelm",
      "Terraform وAWS CloudFormation",
      "Jenkins وGitHub Actions وAWS CodePipeline / CodeBuild / CodeDeploy",
      "ArgoCD وAnsible",
      "GitOps وأتمتة البنية التحتية",
    ],
  },
  {
    id: "systems",
    title: "الأنظمة والشبكات",
    description: "إدارة Linux وخوادم الويب والشبكات وضوابط الأمان.",
    skills: [
      "Ubuntu وAmazon Linux وCentOS",
      "Nginx وApache (وكيل عكسي وSSL/TLS وتحسين الأداء)",
      "TCP/IP وDNS وVPC وVPN وموازنات التحميل ومجموعات الأمان وNACLs",
      "تعزيز أمان Linux وإدارة التصحيحات واستكشاف الأعطال",
    ],
  },
  {
    id: "observability",
    title: "المراقبة والأمان والموثوقية",
    description: "الملاحظة والتحكم في الوصول وممارسات أمان السحابة.",
    skills: [
      "CloudWatch وCloudTrail وAWS X-Ray",
      "IAM وSecrets Manager وKMS وSSL/TLS",
      "موثوقية الأنظمة واكتشاف مشكلات الإنتاج",
      "مراقبة السجلات وتحليل الأداء",
    ],
  },
  {
    id: "web",
    title: "الويب والبرمجة والمنصات",
    description: "البرمجة النصية والتحكم بالإصدارات وترحيل التطبيقات والمنصات.",
    skills: [
      "Python وBash",
      "Git وGitHub",
      "ترحيل WordPress والبُنى السحابية الأصلية",
      "خدمات مصغّرة بدون خادم (Lambda وAPI Gateway)",
    ],
  },
] as const;

export function getSkillCategories(locale: Locale) {
  return locale === "ar" ? ar : en;
}
