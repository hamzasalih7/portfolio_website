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
    title: ui.privacyPolicy,
    description:
      locale === "ar"
        ? "سياسة الخصوصية لموقع حمزة صالح واستفسارات التواصل."
        : "Privacy policy for Hamza Salih portfolio and contact inquiries.",
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw;
  const ui = getUI(locale);
  const profile = getProfile(locale);

  if (locale === "ar") {
    return (
      <Container className="max-w-3xl py-16 sm:py-20">
        <h1 className="font-display text-4xl font-bold text-white">
          {ui.privacyPolicy}
        </h1>
        <p className="mt-4 text-sm text-muted">آخر تحديث: أكتوبر 2026</p>
        <div className="mt-10 space-y-6 leading-relaxed text-soft">
          <p>
            يُدار هذا الموقع بواسطة {profile.name} ({profile.location}). توضح هذه
            السياسة المعلومات التي قد تُجمع عند استخدام الموقع أو إرسال استفسار
            مشروع.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              المعلومات التي تقدمها
            </h2>
            <p className="mt-2">
              عند إرسال نموذج التواصل قد تقدم اسمك وبريدك واسم الشركة والخدمة
              والميزانية ووصف المشروع وطريقة التواصل المفضلة. تُستخدم هذه
              المعلومات فقط للرد على استفسارك ومناقشة العمل المحتمل.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              كيفية تسليم الرسائل
            </h2>
            <p className="mt-2">
              تُعالَج رسائل الاستفسار عبر مزوّد البريد المُعدّ (مثل Resend) عند
              ضبط متغيرات البيئة. لا ترسل كلمات مرور أو أرقام بطاقات أو بيانات
              حساسة عبر النموذج.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              التحليلات وملفات تعريف الارتباط
            </h2>
            <p className="mt-2">
              لا يضع هذا الموقع ملفات إعلانية عن قصد. إذا أُضيفت تحليلات لاحقاً
              فستُحدَّث هذه السياسة لوصفها.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-white">
              التواصل
            </h2>
            <p className="mt-2">
              أسئلة الخصوصية:{" "}
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
        {ui.privacyPolicy}
      </h1>
      <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-6 leading-relaxed text-soft">
        <p>
          This website is operated by {profile.name} ({profile.location}). This
          policy explains what information may be collected when you use the site
          or submit a project inquiry.
        </p>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Information you provide
          </h2>
          <p className="mt-2">
            When you submit the contact form, you may provide your name, email,
            company name, service interest, budget range, project description, and
            preferred contact method. This information is used only to respond to
            your inquiry and discuss potential work.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            How messages are delivered
          </h2>
          <p className="mt-2">
            Inquiry emails are processed through the configured email provider
            (for example Resend) when environment variables are set. Do not submit
            passwords, payment card numbers, or other sensitive credentials through
            the form.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Analytics & cookies
          </h2>
          <p className="mt-2">
            This site does not intentionally set advertising cookies. If analytics
            are added later, this policy should be updated to describe them.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2">
            Privacy questions:{" "}
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
