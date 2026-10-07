import { NextResponse } from "next/server";

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  budget: string;
  message: string;
  /** Honeypot — must stay empty. */
  company?: string;
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[\d+\-()\s]{8,18}$/;

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Bot trap: silently accept so scrapers don't learn anything.
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!body.name?.trim() || body.name.trim().length < 2)
    errors.name = "Please enter your name.";
  if (!emailRe.test(body.email ?? "")) errors.email = "Enter a valid email address.";
  if (!phoneRe.test(body.phone ?? "")) errors.phone = "Enter a valid phone number.";
  if (!body.message?.trim() || body.message.trim().length < 10)
    errors.message = "Tell us a little more — at least 10 characters.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // TODO: forward to your CRM / transactional email provider.
  // e.g. await resend.emails.send({ to: site.salesEmail, ... })
  console.log("[ameva:enquiry]", {
    name: body.name,
    email: body.email,
    phone: body.phone,
    interest: body.interest,
    budget: body.budget,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
