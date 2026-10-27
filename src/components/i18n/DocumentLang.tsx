"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

export function DocumentLang({
  locale,
  dir,
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
}) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.classList.toggle("font-arabic", locale === "ar");
  }, [locale, dir]);

  return null;
}
