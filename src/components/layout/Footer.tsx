import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/content/profile";
import { siteConfig } from "@/content/site";
import { getEnabledServices } from "@/content/services";
import { Container } from "@/components/ui/Container";
import { whatsappUrl } from "@/lib/utils";

export function Footer() {
  const year = 2026;
  const services = getEnabledServices().slice(0, 5);
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
            Cloud, DevOps, web development, and practical technology services based in{" "}
            {profile.location}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigate</h3>
          <ul className="mt-4 space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/blog" className="text-sm text-muted hover:text-accent">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-sm text-muted hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm text-accent hover:underline">
                View all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
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
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col gap-3 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
