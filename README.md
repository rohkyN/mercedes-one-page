# Edition 507 — web pro pronájem vozu

Next.js 15 (App Router), bez CMS a bez databáze. Nasazení: Vercel.

## Spuštění lokálně
```bash
npm install
npm run dev      # http://localhost:3000
```

## Kde se co mění
| Co | Soubor |
|---|---|
| Ceny, kauce, limity, kontakty, IČO, parametry vozu, FAQ | `content/site.js` |
| Texty landing page | `app/page.js` |
| Vzhled (jeden globální stylesheet) | `app/globals.css` |
| Právní stránky | `app/vseobecne-obchodni-podminky/`, `app/ochrana-osobnich-udaju/`, `app/cookies/`, `app/reklamacni-rad/`, `app/odstoupeni-od-smlouvy/` |
| Fotky | `public/img/` |

## Poptávkový formulář
`app/api/poptavka/route.js`. Bez nastavených proměnných běží web v demo režimu —
poptávka se pouze zaloguje a uživatel dostane potvrzení. Pro reálné odesílání nastavte
ve Vercelu (Settings → Environment Variables):

```
RESEND_API_KEY=re_...
BOOKING_TO_EMAIL=komu@posilat.cz
BOOKING_FROM_EMAIL=web@c63507.cz        # doména musí být ověřená v Resend
```

## Doména
Cílová doména je **c63507.cz** a je už nastavená v `content/site.js`.
Stačí ji přidat ve Vercel → Project → Settings → Domains a nasměrovat DNS.
