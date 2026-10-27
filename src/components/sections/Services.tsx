import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getEnabledServices } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/lib/icons";

export function Services({
  featuredOnly = false,
  showViewAll = true,
}: {
  featuredOnly?: boolean;
  showViewAll?: boolean;
}) {
  const list = getEnabledServices().filter((s) =>
    featuredOnly ? s.featured : true,
  );

  return (
    <section id="services" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="Freelance technology solutions"
            description="Clear professional offerings for websites, e-commerce, cloud, hosting, and technical support — enable or disable each service in content."
          />
          {showViewAll ? (
            <Button href="/services" variant="secondary" className="shrink-0 self-start">
              All services
            </Button>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.04}>
              <article className="card-surface flex h-full flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent-dim text-accent">
                  <ServiceIcon name={service.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.shortDescription}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.deliverables.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-soft">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    size="sm"
                  >
                    Request a Quote
                  </Button>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1 self-center text-sm text-muted hover:text-accent"
                  >
                    Details
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
