import nodemailer from "nodemailer";
import { company } from "../../../content/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function esc(s) {
  return String(s == null ? "" : s).replace(/[<>&]/g, function (c) {
    return c === "<" ? "&lt;" : c === ">" ? "&gt;" : "&amp;";
  });
}

export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch (e) {
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
  if (!body.gdpr) {
    return Response.json({ error: "Je nutné potvrdit souhlas s podmínkami." }, { status: 400 });
  }

  const rows = [
    ["Jméno", body.name],
    ["E-mail", body.email],
    ["Telefon", body.phone],
    ["Termín", String(body.from) + " až " + String(body.to)],
    ["Balíček", body.pkg],
    ["Věk řidiče", body.age],
    ["Poznámka", body.note],
  ];

  const html =
    "<h2>Nová poptávka — " + esc(company.domain) + "</h2><table>" +
    rows
      .map(function (r) {
        return "<tr><td><b>" + esc(r[0]) + "</b></td><td>" + esc(r[1] || "—") + "</td></tr>";
      })
      .join("") +
    "</table>";

  const text = rows
    .map(function (r) {
      return r[0] + ": " + (r[1] || "—");
    })
    .join("\n");

  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.BOOKING_TO_EMAIL || user;
  const port = Number(process.env.SMTP_PORT || 465);

  // Bez nastavených proměnných běží web v demo režimu — poptávka se jen zaloguje.
  if (!host || !user || !pass) {
    console.log("[poptavka:demo]", JSON.stringify(body));
    return Response.json({ ok: true, demo: true });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: port === 465,
      auth: { user: user, pass: pass },
    });

    await transporter.sendMail({
      from: '"Poptávka ' + company.domain + '" <' + user + '>',
      to: to,
      replyTo: body.email,
      subject: "Poptávka " + body.from + " — " + body.name,
      text: text,
      html: html,
    });
  } catch (err) {
    console.error("[poptavka:smtp]", err && err.message);
    return Response.json({ error: "Odeslání se nezdařilo." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
