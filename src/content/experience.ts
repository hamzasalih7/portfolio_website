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
    "GitLab CI/CD",
    "AWS CodePipeline",
    "Terraform",
    "CloudFormation",
    "Ansible",
    "Docker",
    "Kubernetes",
    "CloudWatch",
    "CloudTrail",
    "X-Ray",
    "IAM Identity Center",
    "Linux",
    "Nginx",
    "Apache",
    "Python",
    "Bash",
  ],
  "evamp-saanga": [
    "Linux",
    "Windows",
    "Networking",
    "DNS",
    "DHCP",
    "VPN",
    "VPC",
    "Python",
    "Bash",
    "Virtualization",
    "Monitoring",
  ],
};

const en: ExperienceItem[] = [
  {
    id: "smsami",
    title: "DevOps Engineer",
    company: "SMSAMI Inc.",
    location: "Peshawar, Pakistan",
    start: "June 2022",
    end: "Feb 2026",
    responsibilities: [
      "Support enterprise DevOps, SRE, production support, and automation activities for mission-critical client platforms.",
      "Architected and deployed scalable serverless microservices leveraging AWS Lambda and API Gateway.",
      "Engineered and sustained secure AWS cloud infrastructure, incorporating EC2, VPC, S3, RDS, and CloudFront.",
      "Administered Linux servers (Ubuntu, Amazon Linux, CentOS), including configuration, patch management, and issue resolution.",
      "Configured Apache and Nginx web servers with reverse proxy, SSL/TLS, and performance optimization.",
      "Instituted CI/CD pipelines using Jenkins and AWS CodePipeline to automate application deployments.",
      "Build and maintain GitLab CI/CD pipelines for automated build, testing, deployment, and controlled releases.",
      "Improve CI/CD reliability and standardize release processes to reduce deployment failures.",
      "Managed AWS Organizations and IAM Identity Center (SSO) across multiple accounts for centralized access control.",
      "Designed highly available multi-region architectures to support disaster recovery.",
      "Established monitoring and tracing with CloudWatch, CloudTrail, and AWS X-Ray for production issue detection.",
      "Automated infrastructure with AWS CloudFormation and Terraform for consistent provisioning.",
      "Automate infrastructure, application deployment, and environment configuration using Ansible, Python, and Bash.",
      "Develop automation scripts using Python and Bash to reduce manual operational work.",
      "Containerized applications with Docker and managed workloads on Kubernetes (Pods, Deployments, Services, ConfigMaps).",
      "Implemented scaling, rolling updates, and self-healing to improve availability and reliability.",
      "Troubleshoot production issues involving deployments, containers, Linux systems, and application environments.",
      "Participate in production incident response and troubleshooting for critical workloads.",
      "Performed root cause analysis (RCA) on recurring issues and implemented preventive automation.",
      "Collaborate with development, QA, security, and infrastructure teams to resolve deployment and production issues.",
    ],
    technologies: technologiesByRole.smsami,
  },
  {
    id: "evamp-saanga",
    title: "DevOps/Network Engineer",
    company: "Evamp & Saanga",
    location: "Islamabad, Pakistan",
    start: "June 2021",
    end: "May 2022",
    responsibilities: [
      "Configure and maintain Windows operating systems, business applications, drivers, and system utilities.",
      "Troubleshoot network connectivity issues involving LAN, Wi-Fi, IP addressing, DNS, DHCP, and internet access.",
      "Perform routine backups, system updates, security checks, and preventive maintenance for reliable IT operations.",
      "Supported setup, configuration, and virtualization of Linux servers.",
      "Monitored server logs, system performance metrics, and network infrastructure health.",
      "Configured VLAN assignments and switch port access to segment office LAN traffic.",
      "Diagnosed routing and gateway issues using ping, traceroute, and interface status checks.",
      "Supported site-to-site and remote VPN connectivity troubleshooting for internal resource access.",
      "Documented IP addressing plans and network diagrams for handover and troubleshooting.",
      "Designed multi-subnet VPC layouts with public/private tiers, route tables, and NAT/internet gateway patterns.",
      "Validated security group and network ACL rules to control traffic between application tiers.",
      "Created Python/Bash utilities for host uptime, disk usage, open ports, and service availability checks with alerts.",
    ],
    technologies: technologiesByRole["evamp-saanga"],
  },
];

const ar: ExperienceItem[] = [
  {
    id: "smsami",
    title: "مهندس DevOps",
    company: "SMSAMI Inc.",
    location: "بيشاور، باكستان",
    start: "يونيو 2022",
    end: "فبراير 2026",
    responsibilities: [
      "دعم أنشطة DevOps وSRE ودعم الإنتاج والأتمتة لمنصات عملاء حرجة.",
      "تصميم ونشر خدمات مصغّرة بدون خادم قابلة للتوسع باستخدام AWS Lambda وAPI Gateway.",
      "بناء وصيانة بنية AWS سحابية آمنة تشمل EC2 وVPC وS3 وRDS وCloudFront.",
      "إدارة خوادم Linux (Ubuntu وAmazon Linux وCentOS) بما في ذلك الإعداد والتصحيح وحل المشكلات.",
      "تهيئة خوادم Apache وNginx مع الوكيل العكسي وSSL/TLS وتحسين الأداء.",
      "إنشاء خطوط CI/CD باستخدام Jenkins وAWS CodePipeline لأتمتة نشر التطبيقات.",
      "بناء وصيانة خطوط GitLab CI/CD للبناء والاختبار والنشر والإصدارات المنضبطة.",
      "تحسين موثوقية CI/CD وتوحيد عمليات الإصدار لتقليل فشل النشر.",
      "إدارة AWS Organizations وIAM Identity Center (SSO) عبر حسابات متعددة للتحكم المركزي في الوصول.",
      "تصميم بنى عالية التوفر عبر مناطق متعددة لدعم التعافي من الكوارث.",
      "إنشاء المراقبة والتتبع باستخدام CloudWatch وCloudTrail وAWS X-Ray لاكتشاف مشكلات الإنتاج.",
      "أتمتة البنية التحتية باستخدام AWS CloudFormation وTerraform لتوفير متسق.",
      "أتمتة البنية ونشر التطبيقات وتهيئة البيئات باستخدام Ansible وPython وBash.",
      "تطوير سكربتات أتمتة بـ Python وBash لتقليل العمل التشغيلي اليدوي.",
      "تحزيم التطبيقات بـ Docker وإدارة الأحمال على Kubernetes (Pods وDeployments وServices وConfigMaps).",
      "تنفيذ التوسع والتحديثات المتدرجة والمعافاة الذاتية لتحسين التوفر والموثوقية.",
      "استكشاف أعطال الإنتاج المتعلقة بالنشر والحاويات وأنظمة Linux وبيئات التطبيقات.",
      "المشاركة في الاستجابة لحوادث الإنتاج واستكشاف أعطال الأحمال الحرجة.",
      "إجراء تحليل السبب الجذري (RCA) للمشكلات المتكررة وتطبيق أتمتة وقائية.",
      "التعاون مع فرق التطوير وضمان الجودة والأمان والبنية لحل مشكلات النشر والإنتاج.",
    ],
    technologies: technologiesByRole.smsami,
  },
  {
    id: "evamp-saanga",
    title: "مهندس DevOps / شبكات",
    company: "Evamp & Saanga",
    location: "إسلام آباد، باكستان",
    start: "يونيو 2021",
    end: "مايو 2022",
    responsibilities: [
      "تهيئة وصيانة أنظمة Windows وتطبيقات الأعمال والتعريفات وأدوات النظام.",
      "استكشاف أعطال الاتصال الشبكي المتعلقة بـ LAN وWi-Fi وعناوين IP وDNS وDHCP والإنترنت.",
      "تنفيذ النسخ الاحتياطي الروتيني وتحديثات النظام وفحوصات الأمان والصيانة الوقائية.",
      "دعم إعداد وتهيئة ومحاكاة خوادم Linux.",
      "مراقبة سجلات الخوادم ومؤشرات الأداء وصحة البنية الشبكية.",
      "تهيئة تعيينات VLAN ومنافذ المحولات لتقسيم حركة LAN المكتبية.",
      "تشخيص مشكلات التوجيه والبوابة باستخدام ping وtraceroute وفحص حالة الواجهات.",
      "دعم استكشاف أعطال اتصال VPN من موقع لموقع وعن بُعد للوصول للموارد الداخلية.",
      "توثيق خطط عنونة IP ومخططات الشبكة للتسليم واستكشاف الأعطال.",
      "تصميم تخطيطات VPC متعددة الشبكات الفرعية بطبقات عامة/خاصة وجداول توجيه وأنماط NAT/Internet Gateway.",
      "التحقق من قواعد مجموعات الأمان وNetwork ACL للتحكم في حركة المرور بين طبقات التطبيق.",
      "إنشاء أدوات Python/Bash لفحص توفر المضيف واستخدام القرص والمنافذ المفتوحة وتوفر الخدمات مع تنبيهات.",
    ],
    technologies: technologiesByRole["evamp-saanga"],
  },
];

export function getExperience(locale: Locale) {
  return locale === "ar" ? ar : en;
}
