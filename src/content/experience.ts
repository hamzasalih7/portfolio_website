/**
 * Professional experience — sourced from HamzaSalih_DevOps_CV.pdf
 */

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

export const experience: ExperienceItem[] = [
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
    technologies: [
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
    technologies: [
      "Linux",
      "Networking",
      "Virtualization",
      "Monitoring",
      "Cloud Infrastructure",
    ],
  },
];
