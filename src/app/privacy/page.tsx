import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Hamza Salih portfolio and contact inquiries.",
};

export default function PrivacyPage() {
  return (
    <Container className="max-w-3xl py-16 sm:py-20">
      <h1 className="font-display text-4xl font-bold text-white">Privacy Policy</h1>
      <p className="mt-4 text-sm text-muted">Last updated: October 2026</p>
      <div className="mt-10 space-y-6 text-soft leading-relaxed">
        <p>
          This website is operated by {profile.name} ({profile.location}). This
          policy explains what information may be collected when you use the site
          or submit a project inquiry.
        </p>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Information you provide
          </h2>
          <p className="mt-2">
            When you submit the contact form, you may provide your name, email,
            company name, service interest, budget range, project description, and
            preferred contact method. This information is used only to respond to
            your inquiry and discuss potential work.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            How messages are delivered
          </h2>
          <p className="mt-2">
            Inquiry emails are processed through the configured email provider
            (for example Resend) when environment variables are set. Do not submit
            passwords, payment card numbers, or other sensitive credentials through
            the form.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">
            Analytics & cookies
          </h2>
          <p className="mt-2">
            This site does not intentionally set advertising cookies. If analytics
            are added later, this policy should be updated to describe them.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-white">Contact</h2>
          <p className="mt-2">
            Privacy questions:{" "}
            <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
              {profile.email}
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
