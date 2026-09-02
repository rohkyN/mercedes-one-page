import { company } from "../../../content/site";

export const runtime = "nodejs";

function esc(s = "") {
  return String(s).replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]));
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Neplatný požadavek." }, { status: 400 });
  }

  // honeypot — boti vyplní skryté pole
  if (body.website) return Response.json({ ok: true });

  const required = ["name", "email", "phone", "from", "to"];
  for (const f of required) {
    if (!body[f] || String(body[f]).trim().length < 2) {
      return Response.json({ error: "Chybí povinné údaje." }, { status: 400 });
    }
  }
  if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(body.email)) {
    return Response.json({ error: "Neplatný e-mail." }, { status: 400 });
  }

  const rows = [
    ["Jméno", body.name],
    ["E-mail", body.email],
    ["Telefon", body.phone],
    ["Termín", `${body.from} → ${body.to}`],
    ["Balíček", body.pkg],
    ["Věk řidiče", body.age],
    ["Poznámka", body.note],
  ];
  const html =
    `<h2>Nová poptávka — ${esc(company.domain)}</h2><table>` +
    rows.map(([k, v]) => `<tr><td><b>${esc(k)}</b></td><td>${esc(v || "—")}</td></tr>`).join("") +
    `</table>`;

  const key = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;

  // Bez nastavených proměnných web běží jako demo — poptávka se jen zaloguje.
  if (!key || !to) {
    console.log("[poptavka:demo]", JSON.stringify(body));
    return Response.json({ ok: true, demo: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.BOOKING_FROM_EMAIL || `web@${company.domain}`,
      to: [to],
      reply_to: body.email,
      subject: `Poptávka ${body.from} — ${body.name}`,
      html,
    }),
  });

  if (!res.ok) {
    console.error("[poptavka:resend]", res.status, await res.text());
    return Response.json({ error: "Odeslání se nezdařilo." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
