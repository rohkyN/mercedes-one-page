# Co musí potvrdit klient, než web půjde naostro

## Vozidlo — všechny parametry na webu jsou zatím SÉRIOVÉ, ne z konkrétního vozu
- [ ] Rok výroby, VIN, stav tachometru
- [ ] Skutečně jde o Edition 507 Coupé (ne standardní C 63 s paketem)
- [ ] AMG Driver's Package ano/ne — mění max. rychlost 250 vs. 280 km/h
- [ ] Reálný výkon po výfukovém systému Innotech — uvádět 507 PS, nebo naměřenou hodnotu?
- [ ] Přesná barva a výbava
- [ ] Zda má vůz platnou STK a dálniční známku

## Firma
- [ ] Sídlo — z ARES vychází „č. ev. 18, 251 64 Klokočná“, potvrdit
- [ ] Spisová značka v obchodním rejstříku (oddíl C, vložka ...) — v patičce je placeholder
- [ ] Je firma plátcem DPH? Pokud ano, doplnit u cen „vč. DPH“ i ceny bez DPH
- [ ] Telefon, e-mail, případně WhatsApp
- [ ] Adresa předání vozu (na webu je jen „Praha“)
- [ ] Je vůz zapsaný na TerraCore s.r.o., nebo na klienta? Ovlivňuje smlouvu i pojištění

## Pojištění a peníze
- [ ] Má vůz sjednané havarijní pojištění a kryje krátkodobý pronájem?
- [ ] Skutečná výše spoluúčasti (na webu je 10 %, min. 15 000 Kč)
- [ ] Souhlas s ceníkem a výší kauce 25 000 Kč
- [ ] Chce klient rezervační zálohu přijímat online (Stripe / GoPay), nebo stačí převod?

## Právní texty
- [ ] VOP, GDPR, cookies, reklamační řád a poučení o odstoupení jsou PRACOVNÍ NÁVRH
- [ ] Nechat zkontrolovat advokátem nebo alespoň projít s klientem větu po větě
- [ ] Sazebník smluvních pokut ve VOP musí odpovídat tomu, co bude v papírové smlouvě
- [ ] Po schválení odstranit červený pruh „PRACOVNÍ ZNĚNÍ — DEMO“ (`components/Legal.js`, prop `draft`)

## Obsah
- [ ] Min. 8 fotek vozu (exteriér, interiér, kolo, štítek motoru, noční záběr)
- [ ] Krátké video se zvukem výfuku — nejsilnější prodejní prvek, na webu zatím chybí
- [ ] Reference / recenze prvních zákazníků
