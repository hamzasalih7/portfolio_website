import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // cacheComponents is off: with [locale] routes, await params in
  // generateMetadata triggers a "Blocking Route" overlay. Classic static
  // generation is the better fit for this bilingual portfolio.
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
