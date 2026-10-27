"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWorkProcess } from "@/content/process";

export function Process() {
  const { locale, ui } = useLocale();
  const workProcess = getWorkProcess(locale);

  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={ui.howIWork}
            title={ui.processTitle}
            description={
              locale === "ar"
                ? "أربع خطوات من الاكتشاف إلى الإطلاق — للحفاظ على توافق النطاق والتواصل والتسليم."
                : "Four steps from discovery to launch — designed to keep scope, communication, and delivery aligned."
            }
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {workProcess.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.06}>
              <li className="card-surface relative h-full p-6">
                <span className="font-display text-3xl font-bold text-accent/30">
                  {String(step.step).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
