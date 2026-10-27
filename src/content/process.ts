import type { Locale } from "@/i18n/config";

const en = [
  {
    step: 1,
    title: "Discovery",
    description:
      "Understand the client's goals, requirements, and budget so the engagement starts with clear expectations.",
  },
  {
    step: 2,
    title: "Planning",
    description:
      "Define the scope, technology choices, deliverables, and timeline before implementation begins.",
  },
  {
    step: 3,
    title: "Implementation",
    description:
      "Build, configure, test, and review the solution with room for feedback and iteration.",
  },
  {
    step: 4,
    title: "Launch & Support",
    description:
      "Deploy the final solution and provide the agreed handover or maintenance support.",
  },
] as const;

const ar = [
  {
    step: 1,
    title: "الاكتشاف",
    description:
      "فهم أهداف العميل ومتطلباته وميزانيته حتى يبدأ التعاون بتوقعات واضحة.",
  },
  {
    step: 2,
    title: "التخطيط",
    description:
      "تحديد النطاق والتقنيات والمخرجات والجدول الزمني قبل بدء التنفيذ.",
  },
  {
    step: 3,
    title: "التنفيذ",
    description:
      "بناء الحل وتهيئته واختباره ومراجعته مع مساحة للملاحظات والتحسين.",
  },
  {
    step: 4,
    title: "الإطلاق والدعم",
    description:
      "نشر الحل النهائي وتقديم التسليم المتفق عليه أو دعم الصيانة.",
  },
] as const;

export function getWorkProcess(locale: Locale) {
  return locale === "ar" ? ar : en;
}
