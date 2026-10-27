import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { isLocale, type Locale } from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);
  return {
    title: ui.services,
    description: ui.servicesPageBody,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : "en";
  const ui = getUI(locale);

  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={ui.services}
            title={ui.servicesPageTitle}
            description={ui.servicesPageBody}
          />
        </Container>
      </section>
      <Services showViewAll={false} />
      <CtaBand />
    </>
  );
}
