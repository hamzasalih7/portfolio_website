"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getGeneralFaqs } from "@/content/faq";

export function Faq() {
  const { locale, ui } = useLocale();
  const faqs = getGeneralFaqs(locale);

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow={ui.faq}
            title={ui.commonQuestions}
            description={
              locale === "ar"
                ? "إجابات مباشرة حول أسلوب التعاون."
                : "Straight answers about working together."
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.03}>
              <details className="card-surface group p-5 open:pb-5">
                <summary className="cursor-pointer list-none font-display text-base font-semibold text-white marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {item.question}
                    <span className="text-accent transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
