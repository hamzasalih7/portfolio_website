import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for engaging Hamza Salih for technology services.",
};

export default function TermsPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="font-display text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-6 text-soft leading-relaxed">
        <p>
          By using this website or requesting services from {profile.name}, you
          agree to these terms. Engagements are confirmed in writing (email or
          proposal) before paid work begins.
        </p>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Services</h2>
          <p className="mt-2">
            Descriptions on this site are informational. Scope, timeline, and fees
            for a specific project are defined in a proposal or agreement. Fixed
            prices and delivery dates are not guaranteed until requirements are
            agreed.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Amazon Seller Central
          </h2>
          <p className="mt-2">
            Assistance with Amazon Seller Central is guidance only. Amazon account
            approval, identity verification, eligibility, and marketplace
            authorization are controlled by Amazon and are never guaranteed.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            No warranty on third-party platforms
          </h2>
          <p className="mt-2">
            Cloud providers, payment gateways, domain registrars, and similar
            platforms have their own terms and availability. Outcomes dependent on
            those platforms cannot be guaranteed solely by this site&apos;s operator.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2">
            Questions:{" "}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              {profile.email}
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
