/**
 * Skills — sourced from HamzaSalih_DevOps_CV.pdf
 * No proficiency percentages (not stated on CV).
 */

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

export const skillCategories = [
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
