"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { LinkedInIcon } from "@/components/icons/BrandIcons";
import { profile } from "@/content/profile";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  const reduce = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {profile.availability.enabled ? (
            <Badge className="mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability.label}
            </Badge>
          ) : null}

          <p className="mb-3 flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" />
            {profile.location}
          </p>

          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-xl font-display text-xl font-semibold leading-snug text-soft sm:text-2xl">
            <span className="gradient-text">{profile.headline}</span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.supportingText}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {profile.roles.map((role) => (
              <span
                key={role}
                className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-soft sm:text-sm"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/#projects" size="lg">
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Discuss Your Project
            </Button>
          </div>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent focus-ring rounded"
          >
            <LinkedInIcon className="h-4 w-4" />
            View LinkedIn profile
          </a>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-blue-500/10 blur-2xl" />
          <div className="card-surface relative overflow-hidden p-3 sm:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(var(--radius)-2px)] bg-navy-800">
              {!imgError ? (
                <Image
                  src={profile.portrait.src}
                  alt={profile.portrait.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-navy-700 to-navy-900 p-6 text-center">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border border-accent/30 bg-accent-dim font-display text-4xl font-bold text-accent">
                    {profile.monogram}
                  </div>
                  <p className="text-sm text-soft">{profile.name}</p>
                  <p className="max-w-[220px] text-xs text-muted">
                    Upload your portrait to{" "}
                    <code className="text-accent">public/images/hamza-salih.jpg</code>{" "}
                    and update <code className="text-accent">profile.ts</code>
                  </p>
                </div>
              )}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 px-1 pb-1">
              <div>
                <p className="font-display text-sm font-semibold text-white">
                  Technology Consultant
                </p>
                <p className="text-xs text-muted">{profile.location}</p>
              </div>
              <span className="rounded-lg border border-border px-2.5 py-1 text-[11px] text-soft">
                Riyadh · Remote
              </span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
