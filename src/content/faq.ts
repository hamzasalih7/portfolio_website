import type { Locale } from "@/i18n/config";

const en = [
  {
    question: "Who do you typically work with?",
    answer:
      "Individuals, startups, small businesses, and companies that need websites, e-commerce setups, cloud infrastructure help, or practical technical support.",
  },
  {
    question: "Where are you based?",
    answer:
      "I am based in Riyadh, Saudi Arabia, and can work with clients remotely or discuss local engagements as needed.",
  },
  {
    question: "How do projects usually start?",
    answer:
      "Most engagements begin with a short discovery conversation to clarify goals, scope, timeline, and budget. From there I share a clear proposal before work begins.",
  },
  {
    question: "Do you offer fixed prices or packages?",
    answer:
      "Pricing depends on scope and complexity. I avoid publishing guaranteed delivery dates or fixed prices until requirements are defined. Request a quote for your project.",
  },
  {
    question: "Can you help with Amazon Seller Central?",
    answer:
      "Yes — I provide setup assistance and guidance. Amazon account approval, identity verification, eligibility, and marketplace authorization remain controlled by Amazon and are never guaranteed.",
  },
] as const;

const ar = [
  {
    question: "مع من تعمل عادةً؟",
    answer:
      "مع الأفراد والشركات الناشئة والمشاريع الصغيرة والشركات التي تحتاج مواقع أو متاجر إلكترونية أو مساعدة في البنية السحابية أو دعماً تقنياً عملياً.",
  },
  {
    question: "أين تقيم؟",
    answer:
      "أقيم في الرياض، المملكة العربية السعودية، ويمكنني العمل عن بُعد أو مناقشة التعاون المحلي حسب الحاجة.",
  },
  {
    question: "كيف تبدأ المشاريع عادةً؟",
    answer:
      "تبدأ معظم المشاريع بمحادثة اكتشاف قصيرة لتوضيح الأهداف والنطاق والجدول الزمني والميزانية، ثم أقدّم مقترحاً واضحاً قبل بدء العمل.",
  },
  {
    question: "هل تقدم أسعاراً أو باقات ثابتة؟",
    answer:
      "التسعير يعتمد على النطاق والتعقيد. أتجنب نشر مواعيد تسليم مضمونة أو أسعار ثابتة قبل تحديد المتطلبات. اطلب عرض سعر لمشروعك.",
  },
  {
    question: "هل تساعد في Amazon Seller Central؟",
    answer:
      "نعم — أقدّم مساعدة وإرشاداً في الإعداد. أما الموافقة على الحساب والتحقق من الهوية والأهلية وتفويض السوق فتبقى تحت سيطرة أمازون ولا تُضمن أبداً.",
  },
] as const;

export function getGeneralFaqs(locale: Locale) {
  return locale === "ar" ? ar : en;
}
