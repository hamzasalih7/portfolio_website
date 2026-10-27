"use client";

import { MessageCircle } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { getProfile } from "@/content/profile";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFloat() {
  const { locale, ui } = useLocale();
  const profile = getProfile(locale);
  const href = whatsappUrl(profile.phoneE164, profile.whatsappPrefill);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500 px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 focus-ring end-5 sm:bottom-6 sm:end-6"
      aria-label={ui.whatsappAria}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{ui.whatsapp}</span>
    </a>
  );
}
