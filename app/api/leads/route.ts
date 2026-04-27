import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  company: z.string().max(120).optional(),
  interest: z.enum(["web", "app", "automation", "full"]),
  message: z.string().min(10).max(2000),
  website: z.string().max(0).optional()
});

const RATE_WINDOW_MS = 60_000;
const RATE_LIMIT = 5;
const requestLog = new Map<string, number[]>();
const webhookUrl = process.env.LEADS_WEBHOOK_URL;
const resendApiKey = process.env.RESEND_API_KEY;
const leadToEmail = process.env.LEADS_TO_EMAIL ?? "info@jvseoagency.com";
const leadFromEmail =
  process.env.LEADS_FROM_EMAIL ?? "JVSEO Leads <onboarding@resend.dev>";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function checkRateLimit(ip: string) {
  const now = Date.now();
  const previous = requestLog.get(ip) ?? [];
  const valid = previous.filter((time) => now - time <= RATE_WINDOW_MS);
  valid.push(now);
  requestLog.set(ip, valid);
  return valid.length <= RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = leadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Datos incompletos o inválidos en el formulario." },
        { status: 400 }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const forwarded = request.headers.get("x-forwarded-for") ?? "unknown";
    const ip = forwarded.split(",")[0]?.trim() || "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Demasiados intentos. Vuelve a intentarlo en un minuto." },
        { status: 429 }
      );
    }

    const leadPayload = {
      ...parsed.data,
      createdAt: new Date().toISOString(),
      source: "landing-apple-leads"
    };

    let delivered = false;

    if (resend) {
      try {
        await resend.emails.send({
          from: leadFromEmail,
          to: [leadToEmail],
          replyTo: parsed.data.email,
          subject: `Nuevo lead web: ${parsed.data.name} · ${parsed.data.interest}`,
          text: [
            `Nombre: ${parsed.data.name}`,
            `Email: ${parsed.data.email}`,
            `Empresa: ${parsed.data.company || "-"}`,
            `Interés: ${parsed.data.interest}`,
            "",
            "Mensaje:",
            parsed.data.message,
            "",
            `Fecha: ${leadPayload.createdAt}`,
            `Origen: ${leadPayload.source}`,
            `IP: ${ip}`
          ].join("\n")
        });
        delivered = true;
      } catch {
        console.log("No se pudo enviar email con Resend.");
      }
    }

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload)
        });
        delivered = true;
      } catch {
        console.log("Webhook no disponible para lead:", leadPayload);
      }
    }

    if (!delivered) {
      return NextResponse.json(
        {
          error:
            "No hay entrega de leads configurada. Define RESEND_API_KEY o LEADS_WEBHOOK_URL."
        },
        { status: 503 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error interno al procesar el lead." }, { status: 500 });
  }
}
