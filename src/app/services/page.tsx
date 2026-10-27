import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Technology Services",
  description:
    "Website development, e-commerce, hosting, AWS & DevOps, IT support, and Amazon Seller Central setup assistance in Saudi Arabia.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Freelance technology solutions"
            description="Professional offerings for individuals, startups, and businesses — websites, cloud, hosting, and practical technical support."
          />
        </Container>
      </section>
      <Services showViewAll={false} />
      <CtaBand />
    </>
  );
}
