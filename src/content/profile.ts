import type { Locale } from "@/i18n/config";

const shared = {
  name: "Hamza Salih",
  monogram: "HS",
  email: "hamzasalih7y@gmail.com",
  phoneDisplay: "+966 50 793 1628",
  phoneE164: "966507931628",
  linkedin: "https://www.linkedin.com/in/hamza-salih-42b608176/",
  github: "",
  portrait: {
    src: "/images/hamza-salih.jpg",
    alt: "Professional portrait of Hamza Salih",
  },
  cv: {
    src: "/cv/Hamza-Salih-CV.pdf",
  },
} as const;

const copy = {
  en: {
    title: "DevOps Engineer · Cloud Engineer · Technology Consultant",
    location: "Riyadh, Saudi Arabia",
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
        },
        {
          degree: "Higher Secondary School Certificate",
          institution: "Islamia College Peshawar, Peshawar, Pakistan",
          period: "Sep 2015 – June 2017",
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
    cvLabel: "Download CV",
    whatsappPrefill:
      "Hello Hamza, I visited your portfolio website and would like to discuss a project. Could you please share more details about your services?",
  },
  ar: {
    title: "مهندس DevOps · مهندس سحابة · مستشار تقني",
    location: "الرياض، المملكة العربية السعودية",
    availability: {
      enabled: true,
      label: "متاح لمشاريع مختارة",
    },
    roles: ["مهندس DevOps", "مهندس سحابة", "مستشار تقني"],
    headline:
      "بناء بنية سحابية موثوقة ومواقع حديثة وحلول رقمية عملية.",
    supportingText:
      "أساعد الشركات على بناء مواقع احترافية، وإطلاق متاجر إلكترونية، ونشر بنية سحابية موثوقة، وتحسين عملياتها الرقمية عبر حلول تقنية عملية وقابلة للتوسع.",
    about: {
      summary: `أنا مهندس DevOps ومهندس سحابة بخبرة 4 سنوات في تصميم وتنفيذ وإدارة بنية AWS السحابية الآمنة. أستمتع بمساعدة الشركات على تحسين الاعتمادية، وتبسيط عمليات النشر، وتقوية بنيتها التحتية، وبناء حضور رقمي احترافي.

منهجي يجمع بين الهندسة العملية والتحسين المستمر وفهم متطلبات العمل. أسعى لتقديم حلول موثوقة وقابلة للصيانة وآمنة ومتوافقة مع أهداف كل عميل — من خطوط CI/CD والبنية كرمز إلى المواقع والاستضافة والدعم التقني اليومي.`,
      interests: [
        "هندسة بنية AWS وهندسة المنصات",
        "DevOps وCI/CD وأتمتة البنية التحتية",
        "Kubernetes وDocker وسير عمل GitOps",
        "موثوقية الأنظمة والمراقبة والتعافي من الكوارث",
        "مساعدة الشركات على إطلاق وتشغيل منصات رقمية حديثة",
      ],
      education: [
        {
          degree: "بكالوريوس علوم الحاسب",
          institution: "جامعة بيشاور، بيشاور، باكستان",
          period: "سبتمبر 2017 – فبراير 2022",
        },
        {
          degree: "شهادة الثانوية العامة",
          institution: "كلية إسلامية بيشاور، بيشاور، باكستان",
          period: "سبتمبر 2015 – يونيو 2017",
        },
      ],
      certifications: [
        "AWS Solutions Architect Associate – تدريب (Udemy)",
        "Master Cloud-Native Infrastructure with Kubernetes – LinkedIn Learning",
        "Cloud Technical Support – Coursera",
        "Agile Scrum Fundamentals – Coursera",
        "The Bits and Bytes of Computer Networking – Coursera",
      ],
      languages: [
        { name: "الإنجليزية", level: "إتقان مهني للعمل" },
        { name: "البشتو", level: "لغة أم" },
        { name: "الأردية", level: "لغة أم" },
      ],
    },
    cvLabel: "تحميل السيرة الذاتية",
    whatsappPrefill:
      "مرحباً حمزة، زرت موقعك الشخصي وأود مناقشة مشروع. هل يمكنك مشاركة المزيد عن خدماتك؟",
  },
} as const;

export function getProfile(locale: Locale) {
  const t = copy[locale];
  return {
    ...shared,
    ...t,
    cv: { src: shared.cv.src, label: t.cvLabel },
    portrait: {
      ...shared.portrait,
      alt:
        locale === "ar"
          ? "صورة شخصية احترافية لحمزة صالح"
          : shared.portrait.alt,
    },
  };
}

/** Locale-agnostic contact fields for API / shared use */
export const profileContact = {
  name: shared.name,
  email: shared.email,
  phoneE164: shared.phoneE164,
  phoneDisplay: shared.phoneDisplay,
  linkedin: shared.linkedin,
};
