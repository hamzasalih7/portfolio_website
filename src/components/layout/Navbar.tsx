"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn, whatsappUrl } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const wa = whatsappUrl(profile.phoneE164, profile.whatsappPrefill);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-navy-950/85 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[4.25rem]">
        <Link
          href="/"
          className="group flex items-center gap-2.5 focus-ring rounded-lg"
          aria-label={`${profile.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent-dim font-display text-sm font-bold text-accent transition group-hover:border-accent/60">
            {profile.monogram}
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-white sm:text-base">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-soft transition hover:bg-white/5 hover:text-white focus-ring"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm text-soft transition hover:text-accent focus-ring"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
          <Button href={siteConfig.cta.hire.href} size="sm">
            {siteConfig.cta.hire.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border text-soft hover:bg-white/5 focus-ring lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <div
        id="mobile-nav"
        className={cn(
          "border-t border-border bg-navy-950/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-3 text-base text-soft hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
            <Button href={wa} variant="outline" external>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
            <Link
              href={siteConfig.cta.primary.href}
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-accent px-5 text-sm font-semibold text-navy-950"
            >
              {siteConfig.cta.primary.label}
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
