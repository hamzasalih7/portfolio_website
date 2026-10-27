"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { Button } from "@/components/ui/Button";
import { getEnabledServices } from "@/content/services";
import { localePath } from "@/i18n/path";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  contactMethod: "Email" | "WhatsApp" | "LinkedIn" | "Any";
  website: string;
};

type FieldErrors = Partial<Record<keyof FormState, string>>;

export function ContactForm() {
  const { locale, ui } = useLocale();
  const searchParams = useSearchParams();
  const services = useMemo(() => getEnabledServices(locale), [locale]);
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

    const schema = z.object({
      name: z.string().trim().min(2, ui.formNameError),
      email: z.string().trim().email(ui.formEmailError),
      company: z.string().trim().optional(),
      service: z.string().trim().min(1, ui.formServiceError),
      budget: z.string().trim().optional(),
      description: z.string().trim().min(20, ui.formDescriptionError),
      contactMethod: z.enum(["Email", "WhatsApp", "LinkedIn", "Any"], {
        message: ui.formContactError,
      }),
      website: z.string().optional(),
    });

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
        body: JSON.stringify({ ...parsed.data, locale }),
      });
      const data = (await res.json()) as { message?: string; ok?: boolean };
      if (!res.ok) {
        setStatus("error");
        setServerMessage(
          data.message ??
            (locale === "ar"
              ? "حدث خطأ. يرجى التواصل عبر البريد أو واتساب مباشرة."
              : "Something went wrong. Please email or WhatsApp me directly."),
        );
        return;
      }
      setStatus("success");
      setServerMessage(
        data.message ??
          (locale === "ar"
            ? "شكراً — تم إرسال استفسارك."
            : "Thank you — your inquiry was sent."),
      );
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
        locale === "ar"
          ? "خطأ في الشبكة. حاول مرة أخرى أو تواصل عبر واتساب/البريد."
          : "Network error. Please try again or reach out via WhatsApp/email.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="card-surface flex flex-col items-start gap-3 p-6 sm:p-8">
        <CheckCircle2 className="h-8 w-8 text-success" />
        <h3 className="font-display text-xl font-semibold text-white">
          {ui.inquiryReceived}
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
          {ui.sendAnother}
        </Button>
      </div>
    );
  }

  const methods = ["Email", "WhatsApp", "LinkedIn", "Any"] as const;

  return (
    <form
      onSubmit={onSubmit}
      className="card-surface relative space-y-5 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={ui.fullName} error={errors.name} htmlFor="name" required>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(errors.name)}
            placeholder={ui.yourName}
          />
        </Field>
        <Field
          label={ui.emailAddress}
          error={errors.email}
          htmlFor="email"
          required
        >
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

      <Field label={ui.companyOptional} error={errors.company} htmlFor="company">
        <input
          id="company"
          name="company"
          autoComplete="organization"
          value={values.company}
          onChange={(e) => update("company", e.target.value)}
          className={inputClass(errors.company)}
          placeholder={ui.optional}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={ui.serviceRequired}
          error={errors.service}
          htmlFor="service"
          required
        >
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass(errors.service)}
          >
            <option value="">{ui.selectService}</option>
            {services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value={ui.otherNotSure}>{ui.otherNotSure}</option>
          </select>
        </Field>
        <Field label={ui.estimatedBudget} error={errors.budget} htmlFor="budget">
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(e) => update("budget", e.target.value)}
            className={inputClass(errors.budget)}
          >
            <option value="">{ui.optional}</option>
            {ui.budgets.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label={ui.projectDescription}
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
          placeholder={ui.projectDescPlaceholder}
        />
      </Field>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-soft">
          {ui.preferredContact} <span className="text-accent">*</span>
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
              {ui.contactMethods[method]}
            </label>
          ))}
        </div>
        {errors.contactMethod ? (
          <p className="mt-1.5 text-xs text-danger">{errors.contactMethod}</p>
        ) : null}
      </fieldset>

      <div className="absolute -start-[9999px] opacity-0" aria-hidden>
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

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="w-full sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {ui.sending}
          </>
        ) : (
          ui.sendInquiry
        )}
      </Button>
      <p className="text-xs text-muted">
        {ui.privacyAgree}{" "}
        <a
          href={localePath(locale, "/privacy")}
          className="text-accent hover:underline"
        >
          {ui.privacyPolicy}
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
