"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { localePath } from "@/i18n/path";

export function CtaBand() {
  const { locale, ui } = useLocale();

  return (
    <section className="py-10 sm:py-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-dim via-navy-800 to-navy-900 px-6 py-10 sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {ui.readyToDiscuss}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {ui.readyToDiscussBody}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={localePath(locale, "/contact")} size="lg">
                  {ui.letsWork}
                </Button>
                <Button
                  href={localePath(locale, "/services")}
                  variant="secondary"
                  size="lg"
                >
                  {ui.browseServices}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
