import { Download, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Professional summary"
            description="DevOps and cloud engineering background with hands-on AWS, CI/CD, and Linux operations experience."
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="card-surface p-6 sm:p-8">
              {profile.about.summary.split("\n\n").map((para) => (
                <p
                  key={para.slice(0, 32)}
                  className="mb-4 text-base leading-relaxed text-soft last:mb-0"
                >
                  {para}
                </p>
              ))}

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={profile.cv.src} variant="outline">
                  <Download className="h-4 w-4" />
                  {profile.cv.label}
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Location
                </h3>
                <p className="mt-3 flex items-center gap-2 text-sm text-soft">
                  <MapPin className="h-4 w-4 text-accent" />
                  {profile.location}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Core expertise
                </h3>
                <ul className="mt-3 space-y-2">
                  {profile.about.interests.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Education
                </h3>
                <ul className="mt-3 space-y-4">
                  {profile.about.education.map((edu) => (
                    <li key={`${edu.institution}-${edu.degree}`} className="text-sm">
                      <p className="font-medium text-soft">{edu.degree}</p>
                      <p className="text-muted">{edu.institution}</p>
                      <p className="text-xs text-muted">{edu.period}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Certifications & training
                </h3>
                <ul className="mt-3 space-y-2">
                  {profile.about.certifications.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-soft">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="card-surface p-6">
                <h3 className="font-display text-sm font-semibold text-white">
                  Languages
                </h3>
                <ul className="mt-3 space-y-2">
                  {profile.about.languages.map((lang) => (
                    <li
                      key={lang.name}
                      className="flex items-baseline justify-between gap-3 text-sm"
                    >
                      <span className="text-soft">{lang.name}</span>
                      <span className="text-xs text-muted">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
