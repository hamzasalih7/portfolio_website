"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { getEnabledServices } from "@/content/services";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  company: z.string().trim().optional(),
  service: z.string().trim().min(1, "Please select a service."),
  budget: z.string().trim().optional(),
  description: z
    .string()
    .trim()
    .min(20, "Please describe your project in at least 20 characters."),
  contactMethod: z.enum(["Email", "WhatsApp", "LinkedIn", "Any"], {
    message: "Please choose a preferred contact method.",
  }),
  website: z.string().optional(), // honeypot
});

type FormState = z.infer<typeof schema>;
type FieldErrors = Partial<Record<keyof FormState, string>>;

const budgets = [
  "Not sure yet",
  "Under SAR 5,000",
  "SAR 5,000 – 15,000",
  "SAR 15,000 – 40,000",
  "SAR 40,000+",
];

const methods = ["Email", "WhatsApp", "LinkedIn", "Any"] as const;

export function ContactForm() {
  const searchParams = useSearchParams();
  const services = useMemo(() => getEnabledServices(), []);
  const presetService = searchParams.get("service") ?? "";

  const [values, setValues] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    service: presetService,
    budget: "",
    description: "",
    contactMethod: "Email",
    website: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setServerMessage("");

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = (await res.json()) as { message?: string; ok?: boolean };
      if (!res.ok) {
        setStatus("error");
        setServerMessage(
          data.message ??
            "Something went wrong. Please email or WhatsApp me directly.",
        );
        return;
      }
      setStatus("success");
      setServerMessage(data.message ?? "Thank you — your inquiry was sent.");
      setValues({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        description: "",
        contactMethod: "Email",
        website: "",
      });
    } catch {
      setStatus("error");
      setServerMessage(
        "Network error. Please try again or reach out via WhatsApp/email.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-start gap-3 p-6 sm:p-8">
        <CheckCircle2 className="h-8 w-8 text-success" />
        <h3 className="font-display text-xl font-semibold text-white">
          Inquiry received
        </h3>
        <p className="text-sm text-muted">{serverMessage}</p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setStatus("idle");
            setServerMessage("");
          }}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="card-surface space-y-5 p-6 sm:p-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          error={errors.name}
          htmlFor="name"
          required
        >
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(errors.name)}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email address" error={errors.email} htmlFor="email" required>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(errors.email)}
            placeholder="you@company.com"
          />
        </Field>
      </div>

      <Field
        label="Company or business name"
        error={errors.company}
        htmlFor="company"
      >
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass(errors.company)}
          placeholder="Optional"
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Service required" error={errors.service} htmlFor="service" required>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass(errors.service)}
          >
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other / Not sure">Other / Not sure</option>
          </select>
        </Field>
        <Field label="Estimated budget" error={errors.budget} htmlFor="budget">
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass(errors.budget)}
          >
            <option value="">Optional</option>
            {budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Project description"
        error={errors.description}
        htmlFor="description"
        required
      >
        <textarea
          id="description"
          name="description"
          rows={5}
          value={values.description}
          onChange={(e) => update("description", e.target.value)}
          className={cn(inputClass(errors.description), "resize-y")}
          placeholder="Goals, timeline, current setup, and anything else that helps me understand the project."
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-soft">
          Preferred contact method <span className="text-accent">*</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {methods.map((method) => (
            <label
              key={method}
              className={cn(
                "cursor-pointer rounded-lg border px-3 py-2 text-sm transition",
                values.contactMethod === method
                  ? "border-accent/40 bg-accent-dim text-accent"
                  : "border-border text-muted hover:text-soft",
              )}
            >
              <input
                type="radio"
                name="contactMethod"
                value={method}
                checked={values.contactMethod === method}
                onChange={() => update("contactMethod", method)}
                className="sr-only"
              />
              {method}
            </label>
          ))}
        </div>
        {errors.contactMethod ? (
          <p className="mt-1.5 text-xs text-danger">{errors.contactMethod}</p>
        ) : null}
      </fieldset>

      {/* Honeypot spam protection */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => update("website", e.target.value)}
        />
      </div>

      {serverMessage && status === "error" ? (
        <p className="rounded-lg border border-danger/30 bg-danger/10 px-3 py-2 text-sm text-danger">
          {serverMessage}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending…
          </>
        ) : (
          "Send project inquiry"
        )}
      </Button>
      <p className="text-xs text-muted">
        By submitting, you agree to be contacted about this inquiry. See the{" "}
        <a href="/privacy" className="text-accent hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-soft">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
      {error ? <p className="mt-1.5 text-xs text-danger">{error}</p> : null}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full rounded-xl border bg-navy-950/60 px-3.5 py-2.5 text-sm text-white placeholder:text-muted/70 focus-ring",
    error ? "border-danger/50" : "border-border hover:border-border-strong",
  );
}
