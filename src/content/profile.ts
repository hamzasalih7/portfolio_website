/**
 * Edit this file to update personal profile information site-wide.
 * Portrait: public/images/hamza-salih.jpg
 * CV: public/cv/Hamza-Salih-CV.pdf
 */

export const profile = {
  name: "Hamza Salih",
  monogram: "HS",
  title: "DevOps Engineer · Cloud Engineer · Technology Consultant",
  location: "Riyadh, Saudi Arabia",
  email: "hamzasalih7y@gmail.com",
  phoneDisplay: "+966 50 793 1628",
  phoneE164: "966507931628",
  linkedin: "https://www.linkedin.com/in/hamza-salih-42b608176/",
  github: "",
  availability: {
    enabled: true,
    label: "Available for Selected Projects",
  },
  roles: [
    "DevOps Engineer",
    "Cloud Engineer",
    "Technology Consultant",
  ],
  headline:
    "Building Reliable Cloud Infrastructure, Modern Websites & Digital Solutions.",
  supportingText:
    "I help businesses build professional websites, launch online stores, deploy reliable cloud infrastructure, and improve their digital operations through practical, scalable technology solutions.",
  about: {
    summary: `I am a resourceful DevOps Engineer and Cloud Architect with 4 years of experience designing, implementing, and managing secure AWS cloud infrastructure. I enjoy helping businesses improve reliability, streamline deployments, strengthen their infrastructure, and establish a professional online presence.

My approach combines practical engineering, continuous improvement, and an understanding of business requirements. I aim to deliver solutions that are reliable, maintainable, secure, and aligned with each client's goals — from CI/CD and infrastructure as code to websites, hosting, and day-to-day technical support.`,
    interests: [
      "AWS cloud architecture & platform engineering",
      "DevOps, CI/CD, and infrastructure automation",
      "Kubernetes, Docker, and GitOps workflows",
      "Site reliability, monitoring, and disaster recovery",
      "Helping businesses launch and operate modern digital platforms",
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        institution: "University of Peshawar, Peshawar, Pakistan",
        period: "Sep 2017 – Feb 2022",
        details: "",
      },
      {
        degree: "Higher Secondary School Certificate",
        institution: "Islamia College Peshawar, Peshawar, Pakistan",
        period: "Sep 2015 – June 2017",
        details: "",
      },
    ],
    certifications: [
      "AWS Solutions Architect Associate – Training (Udemy)",
      "Master Cloud-Native Infrastructure with Kubernetes – LinkedIn Learning",
      "Cloud Technical Support – Coursera",
      "Agile Scrum Fundamentals – Coursera",
      "The Bits and Bytes of Computer Networking – Coursera",
    ],
    languages: [
      { name: "English", level: "Professional Working Proficiency" },
      { name: "Pashto", level: "Native" },
      { name: "Urdu", level: "Native" },
    ],
  },
  portrait: {
    src: "/images/hamza-salih.jpg",
    alt: "Professional portrait of Hamza Salih",
  },
  cv: {
    src: "/cv/Hamza-Salih-CV.pdf",
    label: "Download CV",
  },
  whatsappPrefill:
    "Hello Hamza, I visited your portfolio website and would like to discuss a project. Could you please share more details about your services?",
} as const;

export type Profile = typeof profile;
