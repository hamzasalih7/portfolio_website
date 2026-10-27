"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Container } from "@/components/ui/Container";
import { getProfile } from "@/content/profile";
import { getEnabledServices } from "@/content/services";
import { getNav } from "@/content/site";
import { localePath } from "@/i18n/path";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  const { locale, ui } = useLocale();
  const profile = getProfile(locale);
  const year = 2026;
  const services = getEnabledServices(locale).slice(0, 5);
  const nav = getNav(locale);
  const wa = whatsappUrl(profile.phoneE164, profile.whatsappPrefill);

  return (
    <footer className="mt-auto border-t border-border bg-navy-950">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent-dim font-display text-sm font-bold text-accent">
              {profile.monogram}
            </span>
            <span className="font-display font-semibold text-white">{profile.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {locale === "ar"
              ? `السحابة وDevOps وتطوير الويب والخدمات التقنية العملية من ${profile.location}.`
              : `Cloud, DevOps, web development, and practical technology services based in ${profile.location}.`}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{ui.navigate}</h3>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(locale, "/blog")}
                className="text-sm text-muted hover:text-accent"
              >
                {ui.blog}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{ui.services}</h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={localePath(locale, `/services/${s.slug}`)}
                  className="text-sm text-muted hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={localePath(locale, "/services")}
                className="text-sm text-accent hover:underline"
              >
                {ui.viewAllServices}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">{ui.contact}</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {profile.email}
              </a>
            </li>
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                {profile.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent"
              >
                <LinkedInIcon className="h-4 w-4 shrink-0" />
                {ui.linkedin}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. {ui.rightsReserved}
          </p>
          <div className="flex gap-4">
            <Link href={localePath(locale, "/privacy")} className="hover:text-accent">
              {ui.privacyPolicy}
            </Link>
            <Link href={localePath(locale, "/terms")} className="hover:text-accent">
              {ui.termsOfService}
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
