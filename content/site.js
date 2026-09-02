// ---------------------------------------------------------------------------
// Jediné místo, kde se mění obsah webu. Ceny, kontakty, parametry vozu.
// POZOR: hodnoty označené TODO je nutné potvrdit s klientem před spuštěním.
// ---------------------------------------------------------------------------

export const company = {
  name: "TerraCore s.r.o.",
  address: "č. ev. 18, 251 64 Klokočná",
  ico: "24465950",
  dic: "CZ24465950",              // TODO: ověřit, zda je firma plátcem DPH
  court: "Městský soud v Praze",  // TODO: doplnit spisovou značku (C xxxxx)
  fileNo: "C 000000",             // TODO
  phone: "+420 000 000 000",      // TODO
  phoneHref: "+420000000000",     // TODO
  email: "info@c63507.cz",   // TODO: potvrdit, že tato adresa existuje
  city: "Praha",
  hours: "denně 8:00–20:00",
  domain: "c63507.cz",
};

export const brand = {
  wordmark: "EDITION 507",
  sub: "PRAHA",
  title: "Mercedes-AMG C 63 Edition 507 Coupé — pronájem Praha",
  description:
    "Pronájem Mercedes-Benz C 63 AMG Edition 507 Coupé v Praze. Atmosférický osmiválec 6 208 cm³, 507 koní, výfuk Innotech. Víkend od 14 900 Kč.",
};

// TODO: všechny parametry potvrdit s klientem (rok výroby, stav km, výbava)
export const specs = [
  ["Motor", "M156 · V8 atmosférický"],
  ["Zdvihový objem", "6 208 cm³"],
  ["Výkon", "507 PS", "/ 373 kW"],
  ["Točivý moment", "610 Nm"],
  ["Převodovka", "AMG Speedshift MCT, 7 st."],
  ["Pohon", "zadní"],
  ["0–100 km/h", "4,2 s"],
];

export const specs2 = [
  ["Nejvyšší rychlost", "250 km/h", "omezeno"],
  ["Výfuk", "Innotech", "nesériový"],
  ["Karoserie", "kupé, 4 místa"],
  ["Palivo", "benzin 98"],
  ["Barva", "červená"],
  ["Převzetí", "Praha", "· po dohodě jinde"],
  ["Zavazadlový prostor", "2 kufry", "víkendové"],
];

export const gauges = [
  ["Objem", "6208", "cm³"],
  ["Výkon", "507", "PS"],
  ["Točivý moment", "610", "Nm"],
  ["0–100 km/h", "4,2", "s"],
];

export const pricing = [
  { t: "12 hodin", k: "100 km v ceně", p: "4 900 Kč" },
  { t: "1 den · 24 hodin", k: "150 km v ceně", p: "5 990 Kč" },
  { t: "Víkend", k: "Pátek 16:00 – neděle 18:00 · 400 km v ceně", p: "14 900 Kč", hot: true, tag: "NEJŽÁDANĚJŠÍ" },
  { t: "3–6 dní", k: "150 km / den v ceně", p: "5 490 Kč / den" },
  { t: "Týden", k: "1 200 km v ceně", p: "34 900 Kč" },
  { t: "Kilometry nad limit", k: "Účtováno při vrácení vozu", p: "25 Kč / km" },
];

export const money = [
  {
    lbl: "Vratná kauce",
    v: "25 000 Kč",
    p: "Převodem nebo blokací na kartě. Vracíme do 3 pracovních dnů po předání vozu bez závad.",
  },
  {
    lbl: "Spoluúčast",
    v: "10 %",
    vs: "min. 15 000 Kč",
    p: "Havarijní pojištění je v ceně nájmu. Balíček Comfort snižuje kauci na polovinu za 990 Kč / den.",
  },
  {
    lbl: "Přistavení",
    v: "990 Kč",
    p: "Kdekoli v Praze včetně letiště. Mimo Prahu 25 Kč / km. Vyzvednutí u nás je zdarma.",
  },
];

export const included = [
  "Povinné ručení i havarijní pojištění",
  "Dálniční známka ČR a asistenční služba",
  "Osobní předání a zaškolení k vozu (cca 20 minut)",
  "Umytý a natankovaný vůz při převzetí",
  "Kilometrový limit dle zvoleného balíčku",
];

export const excluded = [
  "Palivo — vůz se vrací s plnou nádrží, benzin 98",
  "Kilometry nad limit (25 Kč / km)",
  "Druhý řidič zapsaný do smlouvy (500 Kč)",
  "Přistavení a vyzvednutí mimo naši adresu",
  "Pokuty a poplatky vzniklé během nájmu",
];

export const whoCan = [
  "Minimální věk řidiče 25 let.",
  "Řidičské oprávnění skupiny B platné nejméně 3 roky.",
  "Dva doklady totožnosti — občanský průkaz nebo pas a řidičský průkaz.",
  "Kauce složená před předáním vozu.",
  "Vůz řídí pouze osoba zapsaná v nájemní smlouvě.",
];

export const forbidden = [
  "Jízdy na okruhu, závody, drift a měřené akcelerace.",
  "Výjezd mimo Českou republiku bez našeho písemného souhlasu.",
  "Kouření ve voze a přeprava zvířat — poplatek 5 000 Kč.",
  "Další pronájem nebo předání vozu třetí osobě.",
  "Tažení přívěsu a jízda mimo zpevněné komunikace.",
];

export const faq = [
  ["Kdy dostanu zpět kauci?", "Do tří pracovních dnů od vrácení vozu, pokud je vůz bez nového poškození a bez nedoplatků za kilometry, palivo nebo pokuty. Kauci přijímáme převodem nebo jako blokaci na kreditní kartě."],
  ["Co když vůz poškodím?", "Vůz má sjednané havarijní pojištění se spoluúčastí 10 %, minimálně 15 000 Kč. Do této výše hradí škodu nájemce, zbytek řeší pojišťovna. U každé nehody je nutné volat Policii ČR a informovat nás."],
  ["Kolik kilometrů mám v ceně?", "150 km na den u denních nájmů, 400 km u víkendového balíčku a 1 200 km u týdenního nájmu. Kilometry nad limit stojí 25 Kč. Pokud dopředu víte, že pojedete dál, domluvíme individuální limit za lepší sazbu."],
  ["Můžu s vozem do zahraničí?", "Ano, po předchozí domluvě a s naším písemným souhlasem. Zpravidla požadujeme vyšší kauci a delší minimální dobu nájmu. Neohlášený výjezd je porušením smlouvy."],
  ["Potřebuji kreditní kartu?", "Ne nutně. Kauci lze složit i bankovním převodem, musí být ale připsaná na účtu nejpozději v den předání vozu."],
  ["Může řídit i někdo další?", "Ano, pokud splňuje stejné podmínky (25 let, 3 roky praxe) a je zapsán do nájemní smlouvy. Poplatek za druhého řidiče je 500 Kč za nájem."],
  ["Jak probíhá předání?", "Osobně, zhruba 20 minut. Sepíšeme předávací protokol s fotodokumentací a stavem tachometru, projdeme ovládání, jízdní režimy a čerpání paliva. Pak vám podáme klíč."],
  ["Co když termín zruším?", "Storno více než 14 dní před začátkem nájmu je bez poplatku, 7–14 dní 50 % z rezervační zálohy, méně než 7 dní propadá záloha celá. Termín lze jednou bezplatně přesunout."],
];

export const legalLinks = [
  ["/vseobecne-obchodni-podminky", "Všeobecné obchodní podmínky"],
  ["/ochrana-osobnich-udaju", "Ochrana osobních údajů"],
  ["/cookies", "Zásady používání cookies"],
  ["/reklamacni-rad", "Reklamační řád"],
  ["/odstoupeni-od-smlouvy", "Poučení o odstoupení od smlouvy"],
];
