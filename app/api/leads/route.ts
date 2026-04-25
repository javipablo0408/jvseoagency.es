import { NextResponse } from "next/server";
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

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadPayload)
        });
      } catch {
        console.log("Webhook no disponible, lead en fallback log:", leadPayload);
      }
    } else {
      console.log("Nuevo lead:", leadPayload);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error interno al procesar el lead." }, { status: 500 });
  }
}
