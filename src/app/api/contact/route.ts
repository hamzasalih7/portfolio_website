import { NextResponse } from "next/server";
import { z } from "zod";
import { profileContact } from "@/content/profile";

const schema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().max(200).optional(),
  service: z.string().trim().min(1).max(200),
  budget: z.string().trim().max(100).optional(),
  description: z.string().trim().min(20).max(5000),
  contactMethod: z.enum(["Email", "WhatsApp", "LinkedIn", "Any"]),
  website: z.string().optional(),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Validation failed. Please check the form fields." },
      { status: 400 },
    );
  }

  // Honeypot: bots that fill hidden fields are silently accepted
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({
      ok: true,
      message: "Thank you — your inquiry was sent.",
    });
  }

  const payload = parsed.data;
  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL ?? profileContact.email;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  const text = [
    `New project inquiry from ${payload.name}`,
    `Email: ${payload.email}`,
    `Company: ${payload.company || "—"}`,
    `Service: ${payload.service}`,
    `Budget: ${payload.budget || "—"}`,
    `Preferred contact: ${payload.contactMethod}`,
    "",
    "Description:",
    payload.description,
  ].join("\n");

  if (!resendKey) {
    // Form is intentional about not pretending to deliver email without config
    console.info("[contact] Inquiry received (email provider not configured):\n", text);
    return NextResponse.json(
      {
        message:
            `The contact form is installed, but email delivery is not configured yet. Please email ${profileContact.email} or message on WhatsApp. (Developer: set RESEND_API_KEY in .env.local — see README.)`,
      },
      { status: 503 },
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject: `Project inquiry: ${payload.service} — ${payload.name}`,
        text,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[contact] Resend error:", err);
      return NextResponse.json(
        {
          message:
            "Could not send email right now. Please use WhatsApp or email me directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message:
        "Thank you — your inquiry was sent. I will get back to you shortly.",
    });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      {
        message:
          "Unexpected server error. Please contact me via WhatsApp or email.",
      },
      { status: 500 },
    );
  }
}
