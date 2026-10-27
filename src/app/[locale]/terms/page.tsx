import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { getProfile } from "@/content/profile";
import { isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  return {
    title: ui.termsOfService,
    description:
      locale === "ar"
        ? "شروط الخدمة للتعامل مع حمزة صالح للخدمات التقنية."
        : "Terms of service for engaging Hamza Salih for technology services.",
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw;
  const ui = getUI(locale);
  const profile = getProfile(locale);

  if (locale === "ar") {
    return (
      <Container className="max-w-3xl py-16 sm:py-20">
        <h1 className="font-display text-4xl font-bold text-white">
          {ui.termsOfService}
        </h1>
        <p className="mt-4 text-sm text-muted">آخر تحديث: أكتوبر 2026</p>
        <div className="mt-10 space-y-6 leading-relaxed text-soft">
          <p>
            باستخدام هذا الموقع أو طلب خدمات من {profile.name}، فإنك توافق على هذه
            الشروط. تُؤكَّد التعاقدات كتابةً (بريد أو مقترح) قبل بدء العمل المدفوع.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              الخدمات
            </h2>
            <p className="mt-2">
              الأوصاف على هذا الموقع معلوماتية. النطاق والجدول والرسوم لمشروع محدد
              تُعرَّف في مقترح أو اتفاق. لا تُضمن أسعار ثابتة أو مواعيد تسليم حتى
              الاتفاق على المتطلبات.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              Amazon Seller Central
            </h2>
            <p className="mt-2">
              المساعدة في Amazon Seller Central إرشادية فقط. الموافقة على الحساب
              والتحقق من الهوية والأهلية وتفويض السوق تخضع لأمازون ولا تُضمن أبداً.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              لا ضمان لمنصات الطرف الثالث
            </h2>
            <p className="mt-2">
              لمزوّدي السحابة وبوابات الدفع ومسجلي النطاقات شروطهم وتوافرهم الخاص.
              لا يمكن ضمان النتائج المعتمدة على تلك المنصات من مشغّل هذا الموقع وحده.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              التواصل
            </h2>
            <p className="mt-2">
              للاستفسارات:{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent hover:underline"
              >
                {profile.email}
              </a>
            </p>
          </section>
        </div>
      </Container>
    );
  }

  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="font-display text-4xl font-bold text-white">
        {ui.termsOfService}
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-6 leading-relaxed text-soft">
        <p>
          By using this website or requesting services from {profile.name}, you
          agree to these terms. Engagements are confirmed in writing (email or
          proposal) before paid work begins.
        </p>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Services</h2>
          <p className="mt-2">
            Descriptions on this site are informational. Scope, timeline, and fees
            for a specific project are defined in a proposal or agreement. Fixed
            prices and delivery dates are not guaranteed until requirements are
            agreed.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Amazon Seller Central
          </h2>
          <p className="mt-2">
            Assistance with Amazon Seller Central is guidance only. Amazon account
            approval, identity verification, eligibility, and marketplace
            authorization are controlled by Amazon and are never guaranteed.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            No warranty on third-party platforms
          </h2>
          <p className="mt-2">
            Cloud providers, payment gateways, domain registrars, and similar
            platforms have their own terms and availability. Outcomes dependent on
            those platforms cannot be guaranteed solely by this site&apos;s operator.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2">
            Questions:{" "}
            <a
              href={`mailto:${profile.email}`}
              className="text-accent hover:underline"
            >
              {profile.email}
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
