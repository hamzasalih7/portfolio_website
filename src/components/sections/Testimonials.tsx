import { getEnabledTestimonials } from "@/content/testimonials";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  const items = getEnabledTestimonials();
  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Client feedback"
            description="Real, permissioned testimonials only."
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
                  {t.category ? (
                    <p className="mt-1 text-xs text-accent">{t.category}</p>
                  ) : null}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
