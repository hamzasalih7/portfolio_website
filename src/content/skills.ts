import type { Locale } from "@/i18n/config";

export const skillsStrip = [
  "AWS",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Jenkins",
  "GitLab CI/CD",
  "Linux",
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
      "GCP (Cloud Functions, Cloud Run, Load Balancer)",
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
      "Kubernetes, Docker, Helm, Kubernetes networking",
      "Terraform & AWS CloudFormation",
      "Jenkins, GitLab CI/CD, GitHub Actions",
      "AWS CodePipeline, CodeBuild, CodeDeploy",
      "ArgoCD & Ansible",
      "Python & Bash automation",
    ],
  },
  {
    id: "systems",
    title: "Systems & Networking",
    description:
      "Linux and Windows administration, web servers, networking, and security controls.",
    skills: [
      "Ubuntu, Amazon Linux, CentOS, Windows",
      "Nginx & Apache (reverse proxy, SSL/TLS, performance tuning)",
      "TCP/IP, DNS, DHCP, LAN, Wi-Fi, VPC, VPN, load balancers",
      "Security groups, network ACLs, subnets, routing & switching",
    ],
  },
  {
    id: "observability",
    title: "Monitoring, Security & Reliability",
    description:
      "Production support, observability, access control, and cloud security practices.",
    skills: [
      "CloudWatch, CloudTrail, AWS X-Ray, log monitoring",
      "IAM, Secrets Manager, KMS, SSL/TLS, access control",
      "SRE, incident response, and root cause analysis (RCA)",
      "Production troubleshooting for deployments and containers",
    ],
  },
  {
    id: "web",
    title: "Scripting & Version Control",
    description: "Automation scripting and source control workflows.",
    skills: [
      "Python & Bash",
      "Git, GitHub, GitLab",
      "Serverless microservices (Lambda, API Gateway)",
      "Containerized application workloads",
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
      "GCP (Cloud Functions, Cloud Run, Load Balancer)",
      "AWS Organizations متعددة الحسابات وIAM Identity Center (SSO)",
      "أنماط التوفر العالي والتعافي من الكوارث عبر مناطق متعددة",
    ],
  },
  {
    id: "devops",
    title: "DevOps والأتمتة",
    description: "خطوط CI/CD والحاويات وGitOps والبنية كرمز.",
    skills: [
      "Kubernetes وDocker وHelm وشبكات Kubernetes",
      "Terraform وAWS CloudFormation",
      "Jenkins وGitLab CI/CD وGitHub Actions",
      "AWS CodePipeline وCodeBuild وCodeDeploy",
      "ArgoCD وAnsible",
      "أتمتة Python وBash",
    ],
  },
  {
    id: "systems",
    title: "الأنظمة والشبكات",
    description: "إدارة Linux وWindows وخوادم الويب والشبكات وضوابط الأمان.",
    skills: [
      "Ubuntu وAmazon Linux وCentOS وWindows",
      "Nginx وApache (وكيل عكسي وSSL/TLS وتحسين الأداء)",
      "TCP/IP وDNS وDHCP وLAN وWi-Fi وVPC وVPN وموازنات التحميل",
      "مجموعات الأمان وNetwork ACLs والشبكات الفرعية والتوجيه والتبديل",
    ],
  },
  {
    id: "observability",
    title: "المراقبة والأمان والموثوقية",
    description: "دعم الإنتاج والملاحظة والتحكم في الوصول وممارسات أمان السحابة.",
    skills: [
      "CloudWatch وCloudTrail وAWS X-Ray ومراقبة السجلات",
      "IAM وSecrets Manager وKMS وSSL/TLS والتحكم في الوصول",
      "SRE والاستجابة للحوادث وتحليل السبب الجذري (RCA)",
      "استكشاف أعطال الإنتاج للنشرات والحاويات",
    ],
  },
  {
    id: "web",
    title: "البرمجة النصية والتحكم بالإصدارات",
    description: "سكربتات الأتمتة وسير عمل التحكم بالمصدر.",
    skills: [
      "Python وBash",
      "Git وGitHub وGitLab",
      "خدمات مصغّرة بدون خادم (Lambda وAPI Gateway)",
      "أحمال تطبيقات مع حاويات",
    ],
  },
] as const;

export function getSkillCategories(locale: Locale) {
  return locale === "ar" ? ar : en;
}
