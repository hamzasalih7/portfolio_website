import { generalFaqs } from "@/content/faq";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-24">
      <Container className="max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Straight answers about working together."
            align="center"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-10 space-y-3">
          {generalFaqs.map((item, i) => (
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
