"use client";

import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { localePath } from "@/i18n/path";

export default function NotFound() {
  const { locale, ui } = useLocale();

  return (
    <Container className="flex flex-col items-start py-24 sm:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
        {ui.pageNotFound}
      </h1>
      <p className="mt-4 max-w-md text-muted">{ui.pageNotFoundBody}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href={localePath(locale, "/")}>{ui.backHome}</Button>
        <Button href={localePath(locale, "/contact")} variant="secondary">
          {ui.contact}
        </Button>
      </div>
    </Container>
  );
}
