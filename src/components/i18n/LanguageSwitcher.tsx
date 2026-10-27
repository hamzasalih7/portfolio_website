"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { switchLocalePath } from "@/i18n/path";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const pathname = usePathname() || "/en";
  const { locale, ui } = useLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border border-border bg-white/[0.03] p-0.5",
        className,
      )}
      role="group"
      aria-label={ui.language}
    >
      {locales.map((code) => {
        const active = locale === code;
        const href = switchLocalePath(pathname, code);
        const label = code === "en" ? ui.switchToEnglish : ui.switchToArabic;
        return (
          <Link
            key={code}
            href={href}
            hrefLang={code}
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-xs font-semibold transition focus-ring",
              active
                ? "bg-accent-dim text-accent"
                : "text-muted hover:text-soft",
            )}
            aria-current={active ? "true" : undefined}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export function localeAlternate(pathname: string, locale: Locale) {
  return switchLocalePath(pathname, locale);
}
