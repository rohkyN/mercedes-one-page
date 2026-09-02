"use client";
import { useState } from "react";
import { pricing } from "../content/site";

export default function BookingForm() {
  const [state, setState] = useState("idle");
  const [msg, setMsg] = useState("Nezávazně. Neúčtujeme nic předem.");

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setState("err");
      setMsg("Vyplňte prosím povinná pole.");
      return;
    }
    setState("busy");
    setMsg("Odesílám…");
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/poptavka", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Odeslání se nezdařilo.");
      setState("ok");
      setMsg("Odesláno. Ozveme se do dvou hodin.");
      form.reset();
    } catch (err) {
      setState("err");
      setMsg(err.message + " Zavolejte nám prosím.");
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label className="f-full">
        <span className="lbl">Jméno a příjmení</span>
        <input name="name" required autoComplete="name" placeholder="Jan Novák" />
      </label>
      <label>
        <span className="lbl">E-mail</span>
        <input type="email" name="email" required autoComplete="email" placeholder="jan@email.cz" />
      </label>
      <label>
        <span className="lbl">Telefon</span>
        <input type="tel" name="phone" required autoComplete="tel" placeholder="+420 777 123 456" />
      </label>
      <label>
        <span className="lbl">Termín od</span>
        <input type="date" name="from" required />
      </label>
      <label>
        <span className="lbl">Termín do</span>
        <input type="date" name="to" required />
      </label>
      <label>
        <span className="lbl">Balíček</span>
        <select name="pkg" defaultValue="Víkend">
          {pricing.slice(0, 5).map((r) => (
            <option key={r.t}>{r.t}</option>
          ))}
        </select>
      </label>
      <label>
        <span className="lbl">Věk řidiče</span>
        <input type="number" name="age" min="25" max="99" placeholder="32" />
      </label>
      <label className="f-full">
        <span className="lbl">Poznámka</span>
        <textarea name="note" placeholder="Přistavení, delší trasa, focení…" />
      </label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true"
             style={{ position: "absolute", left: "-9999px", width: 1, height: 1 }} />
      <label className="consent f-full">
        <input type="checkbox" name="gdpr" required />
        <span>
          Souhlasím se <a href="/vseobecne-obchodni-podminky">všeobecnými obchodními podmínkami</a> a
          se <a href="/ochrana-osobnich-udaju">zpracováním osobních údajů</a> za účelem vyřízení
          poptávky.
        </span>
      </label>
      <div className="f-full" style={{ display: "flex", flexWrap: "wrap", gap: 18, alignItems: "center" }}>
        <button type="submit" disabled={state === "busy"}>
          Odeslat poptávku
        </button>
        <span className={"formnote formmsg " + (state === "err" ? "err" : state === "ok" ? "ok" : "")}>
          {msg}
        </span>
      </div>
    </form>
  );
}
