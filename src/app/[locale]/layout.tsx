import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { DocumentLang } from "@/components/i18n/DocumentLang";
import { LocaleProvider } from "@/components/i18n/LocaleProvider";
import { siteConfig, getSiteMeta } from "@/content/site";
import {
  defaultLocale,
  isLocale,
  localeDirection,
  locales,
  type Locale,
} from "@/i18n/config";
import { getUI } from "@/i18n/ui";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
  width: "device-width",
  initialScale: 1,
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = isLocale(raw) ? raw : defaultLocale;
  const meta = getSiteMeta(locale);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: meta.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: meta.description,
    keywords: [...meta.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_SA" : "en_US",
      alternateLocale: locale === "ar" ? ["en_US"] : ["ar_SA"],
      url: `${siteConfig.url}/${locale}`,
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
      images: [
        { url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [siteConfig.ogImage],
    },
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: {
        en: `${siteConfig.url}/en`,
        ar: `${siteConfig.url}/ar`,
        "x-default": `${siteConfig.url}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const dir = localeDirection[locale];
  const ui = getUI(locale);

  return (
    <LocaleProvider locale={locale} dir={dir}>
      <DocumentLang locale={locale} dir={dir} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-navy-950"
      >
        {ui.skipToContent}
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </LocaleProvider>
  );
}
