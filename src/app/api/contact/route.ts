import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // spam bot hidden field puron korle chup kore success dekhai
  if (body.website) return NextResponse.json({ ok: true });

  const name = String(body.name ?? "").trim().slice(0, 100);
  const phone = String(body.phone ?? "").trim().slice(0, 30);
  const email = String(body.email ?? "").trim().slice(0, 120);
  const service = String(body.service ?? "").trim().slice(0, 80);
  const message = String(body.message ?? "").trim().slice(0, 3000);

  if (!name || !service || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please fill your name, a valid email and choose a service." }, { status: 400 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is missing in .env.local");
    return NextResponse.json({ message: "Email is not set up yet. Please call us instead." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({ service: "gmail", auth: { user, pass } });

    await transporter.sendMail({
      from: `"Serve Art Website" <${user}>`,
      to,
      replyTo: email,
      subject: `New enquiry: ${service} (${name})`,
      text: `Name: ${name}\nPhone: ${phone || "-"}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message || "-"}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:560px">
          <h2 style="margin:0 0 12px;color:#1B75BC">New project enquiry</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Name</td><td style="padding:8px;border-bottom:1px solid #eee"><b>${esc(name)}</b></td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Phone</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(phone) || "-"}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${esc(email)}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #eee;color:#666">Service</td><td style="padding:8px;border-bottom:1px solid #eee"><b style="color:#F58A2E">${esc(service)}</b></td></tr>
          </table>
          <p style="margin:16px 0 6px;color:#666">Message</p>
          <p style="margin:0;padding:12px;background:#f5f8fb;border-radius:8px;white-space:pre-wrap">${esc(message) || "-"}</p>
          <p style="margin-top:16px;font-size:12px;color:#999">Reply to this email to answer ${esc(name)} directly.</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ message: "We could not send your message. Please try again or call us." }, { status: 500 });
  }
}