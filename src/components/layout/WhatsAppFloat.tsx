"use client";

import { MessageCircle } from "lucide-react";
import { profile } from "@/content/profile";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFloat() {
  const href = whatsappUrl(profile.phoneE164, profile.whatsappPrefill);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex h-12 items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500 px-4 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-emerald-400 focus-ring sm:bottom-6 sm:right-6"
      aria-label="Contact Hamza on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
