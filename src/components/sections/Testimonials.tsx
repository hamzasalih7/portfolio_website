"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getEnabledTestimonials } from "@/content/testimonials";

export function Testimonials() {
  const { locale } = useLocale();
  const items = getEnabledTestimonials(locale);
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={locale === "ar" ? "آراء العملاء" : "Testimonials"}
            title={locale === "ar" ? "ملاحظات العملاء" : "Client feedback"}
            description={
              locale === "ar"
                ? "شهادات حقيقية بإذن أصحابها فقط."
                : "Real, permissioned testimonials only."
            }
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <blockquote className="card-surface h-full p-6">
                <p className="text-sm leading-relaxed text-soft">&ldquo;{t.feedback}&rdquo;</p>
                <footer className="mt-5">
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-sm text-muted">
                    {t.role}
                    {t.company ? ` · ${t.company}` : ""}
                  </p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
