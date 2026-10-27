import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Hamza Salih in Riyadh for website development, cloud & DevOps, hosting, and technology consulting inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Start a project conversation"
            description="Share a few details about what you need. You can also reach me directly by email, WhatsApp, or LinkedIn."
          />
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
