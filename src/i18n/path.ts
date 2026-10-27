import { defaultLocale, isLocale, type Locale } from "./config";

/** Build a locale-prefixed path. Accepts "/", "/projects", "/#about", "projects/x". */
export function localePath(locale: Locale, href: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  ) {
    return href;
  }

  if (href.startsWith("#")) {
    return `/${locale}${href}`;
  }

  const [pathname, hash] = href.split("#");
  const clean = pathname === "/" || pathname === "" ? "" : pathname.replace(/^\//, "");
  const base = clean ? `/${locale}/${clean}` : `/${locale}`;
  return hash ? `${base}#${hash}` : base;
}

/** Strip locale prefix from pathname: /ar/services -> /services */
export function stripLocale(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "/";
  if (isLocale(parts[0])) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocaleFromPathname(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0] ?? "";
  return isLocale(first) ? first : defaultLocale;
}

/** Swap locale while keeping the same page path. */
export function switchLocalePath(pathname: string, nextLocale: Locale) {
  const bare = stripLocale(pathname);
  return localePath(nextLocale, bare);
}
