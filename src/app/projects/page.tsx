import type { Metadata } from "next";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects & Portfolio",
  description:
    "Cloud, DevOps, web development, and infrastructure projects by Hamza Salih.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="border-b border-border py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects & case studies"
            description="Personal and demonstrable technical work. Commercial client details are omitted when confidentiality applies."
          />
        </Container>
      </section>
      <ProjectsPreview showAllLink={false} />
      <CtaBand />
    </>
  );
}
