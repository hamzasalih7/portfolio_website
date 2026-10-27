import { About } from "@/components/sections/About";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Experience } from "@/components/sections/Experience";
import { Faq } from "@/components/sections/Faq";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { Services } from "@/components/sections/Services";
import { SkillsStrip } from "@/components/sections/SkillsStrip";
import { Testimonials } from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <About />
      <Experience />
      <ProjectsPreview limit={6} />
      <Services featuredOnly showViewAll />
      <Process />
      <Testimonials />
      <Faq />
      <CtaBand />
      <ContactSection />
    </>
  );
}
