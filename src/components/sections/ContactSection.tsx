"use client";

import { Suspense } from "react";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getProfile } from "@/content/profile";
import { whatsappUrl } from "@/lib/utils";

export function ContactSection() {
  const { locale, ui } = useLocale();
  const profile = getProfile(locale);
  const wa = whatsappUrl(profile.phoneE164, profile.whatsappPrefill);

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={ui.contact}
            title={ui.letsDiscuss}
            description={ui.preferWhatsApp}
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${profile.email}`}
                className="card-surface flex items-start gap-3 p-5 transition hover:border-accent/30"
              >
                <Mail className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">{ui.email}</p>
                  <p className="mt-1 text-sm text-muted">{profile.email}</p>
                </div>
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-start gap-3 p-5 transition hover:border-accent/30"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">{ui.whatsapp}</p>
                  <p className="mt-1 text-sm text-muted">{profile.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="card-surface flex items-start gap-3 p-5 transition hover:border-accent/30"
              >
                <LinkedInIcon className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">{ui.linkedin}</p>
                  <p className="mt-1 text-sm text-muted">{ui.professionalProfile}</p>
                </div>
              </a>
              <div className="card-surface flex items-start gap-3 p-5">
                <MapPin className="mt-0.5 h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold text-white">{ui.location}</p>
                  <p className="mt-1 text-sm text-muted">{profile.location}</p>
                </div>
              </div>
              <Button href={wa} variant="outline" className="w-full" external>
                <MessageCircle className="h-4 w-4" />
                {ui.messageWhatsApp}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Suspense
              fallback={
                <div className="card-surface h-96 animate-pulse p-8 text-sm text-muted">
                  {ui.loadingForm}
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
