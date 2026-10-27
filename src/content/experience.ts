import type { Locale } from "@/i18n/config";

export type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  responsibilities: string[];
  technologies: string[];
  achievements?: string[];
};

const technologiesByRole: Record<string, string[]> = {
  smsami: [
    "AWS",
    "Lambda",
    "API Gateway",
    "EC2",
    "VPC",
    "S3",
    "RDS",
    "CloudFront",
    "Jenkins",
    "AWS CodePipeline",
    "Terraform",
    "CloudFormation",
    "CloudWatch",
    "CloudTrail",
    "X-Ray",
    "IAM Identity Center",
    "Linux",
    "Nginx",
    "Apache",
    "WordPress",
  ],
  "evamp-saanga": [
    "Linux",
    "Networking",
    "Virtualization",
    "Monitoring",
    "Cloud Infrastructure",
  ],
};

const en: ExperienceItem[] = [
  {
    id: "smsami",
    title: "DevOps Engineer / Cloud Engineer",
    company: "SMSAMI Inc.",
    location: "Peshawar, Pakistan",
    start: "June 2022",
    end: "Feb 2026",
    responsibilities: [
      "Architected and deployed scalable serverless microservices leveraging AWS Lambda and API Gateway.",
      "Engineered and sustained secure AWS cloud infrastructure, incorporating EC2, VPC, S3, RDS, and CloudFront.",
      "Administered Linux servers (Ubuntu, Amazon Linux, CentOS), encompassing system configuration, patch management, user administration, and issue resolution.",
      "Configured and fine-tuned Apache and Nginx web servers, including reverse proxy implementation, SSL/TLS setup, and performance optimization.",
      "Instituted CI/CD pipelines utilizing Jenkins and AWS CodePipeline to automate application deployments and streamline operational workflows.",
      "Managed AWS Organizations and implemented AWS IAM Identity Center (SSO) across multiple accounts for centralized access control.",
      "Designed highly available and fault-tolerant architectures across multiple AWS regions to ensure robust disaster recovery capabilities.",
      "Established comprehensive monitoring, logging, and tracing using CloudWatch, CloudTrail, and AWS X-Ray for proactive issue detection and resolution in production environments.",
      "Automated infrastructure provisioning and configuration using AWS CloudFormation and Terraform, reducing deployment effort and improving infrastructure consistency.",
      "Executed Linux server hardening, system performance monitoring, log analysis, and ongoing optimization initiatives.",
      "Facilitated the migration of legacy applications and websites to WordPress and cloud-native architectures.",
    ],
    technologies: technologiesByRole.smsami,
  },
  {
    id: "evamp-saanga",
    title: "Network Engineer Intern",
    company: "Evamp & Saanga",
    location: "Islamabad, Pakistan",
    start: "Feb 2022",
    end: "May 2022",
    responsibilities: [
      "Supported the setup, configuration, and virtualization of Linux servers.",
      "Monitored server logs, system performance metrics, and network infrastructure health.",
      "Contributed to the troubleshooting of networking and cloud infrastructure challenges.",
      "Acquired practical experience with networking protocols, infrastructure deployment methodologies, and microservices architecture patterns.",
    ],
    technologies: technologiesByRole["evamp-saanga"],
  },
];

const ar: ExperienceItem[] = [
  {
    id: "smsami",
    title: "مهندس DevOps / مهندس سحابة",
    company: "SMSAMI Inc.",
    location: "بيشاور، باكستان",
    start: "يونيو 2022",
    end: "فبراير 2026",
    responsibilities: [
      "تصميم ونشر خدمات مصغّرة بدون خادم قابلة للتوسع باستخدام AWS Lambda وAPI Gateway.",
      "بناء وصيانة بنية AWS سحابية آمنة تشمل EC2 وVPC وS3 وRDS وCloudFront.",
      "إدارة خوادم Linux (Ubuntu وAmazon Linux وCentOS) بما في ذلك الإعداد والتصحيح وإدارة المستخدمين وحل المشكلات.",
      "تهيئة وتحسين خوادم Apache وNginx بما في ذلك الوكيل العكسي وإعداد SSL/TLS وتحسين الأداء.",
      "إنشاء خطوط CI/CD باستخدام Jenkins وAWS CodePipeline لأتمتة نشر التطبيقات وتبسيط سير العمل.",
      "إدارة AWS Organizations وتطبيق AWS IAM Identity Center (SSO) عبر حسابات متعددة للتحكم المركزي في الوصول.",
      "تصميم بنى عالية التوفر ومتحملة للأعطال عبر مناطق AWS متعددة لدعم التعافي من الكوارث.",
      "إنشاء مراقبة وتسجيل وتتبع شامل باستخدام CloudWatch وCloudTrail وAWS X-Ray لاكتشاف المشكلات في بيئات الإنتاج.",
      "أتمتة توفير البنية التحتية وإعدادها باستخدام AWS CloudFormation وTerraform لتحسين الاتساق وتقليل الجهد.",
      "تنفيذ تعزيز أمان خوادم Linux ومراقبة الأداء وتحليل السجلات ومبادرات التحسين المستمر.",
      "المساهمة في ترحيل التطبيقات والمواقع القديمة إلى WordPress وبُنى سحابية أصلية.",
    ],
    technologies: technologiesByRole.smsami,
  },
  {
    id: "evamp-saanga",
    title: "متدرب مهندس شبكات",
    company: "Evamp & Saanga",
    location: "إسلام آباد، باكستان",
    start: "فبراير 2022",
    end: "مايو 2022",
    responsibilities: [
      "المساهمة في إعداد وتهيئة ومحاكاة خوادم Linux.",
      "مراقبة سجلات الخوادم ومؤشرات الأداء وصحة البنية الشبكية.",
      "المشاركة في استكشاف أعطال الشبكات والبنية السحابية وحلها.",
      "اكتساب خبرة عملية في بروتوكولات الشبكات ومنهجيات نشر البنية وأنماط الخدمات المصغّرة.",
    ],
    technologies: technologiesByRole["evamp-saanga"],
  },
];

export function getExperience(locale: Locale) {
  return locale === "ar" ? ar : en;
}
