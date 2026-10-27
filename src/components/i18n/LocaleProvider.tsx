"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import { getUI, type UIDictionary } from "@/i18n/ui";

type LocaleContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  ui: UIDictionary;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dir,
  children,
}: {
  locale: Locale;
  dir: "ltr" | "rtl";
  children: ReactNode;
}) {
  const value: LocaleContextValue = {
    locale,
    dir,
    ui: getUI(locale),
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
