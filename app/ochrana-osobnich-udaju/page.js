import Legal from "../../components/Legal";

export const metadata = { title: "Ochrana osobních údajů — Edition 507", robots: { index: false } };

export default function Page() {
  return (
    <Legal title="Zásady ochrany osobních údajů" effective="1. 10. 2026">
      <h2>1. Kdo je správcem</h2>
      <div className="box">
        <p>
          <b>TerraCore s.r.o.</b>, IČO 24465950, se sídlem č. ev. 18, 251 64 Klokočná,
          e-mail info@c63507.cz. Nemáme jmenovaného pověřence pro ochranu osobních údajů.
        </p>
      </div>

      <h2>2. Jaké údaje zpracováváme a proč</h2>
      <table>
        <thead><tr><th>Účel</th><th>Údaje / právní základ</th></tr></thead>
        <tbody>
          <tr><td>Vyřízení poptávky z webu</td><td style={{ textAlign: "left", whiteSpace: "normal", fontWeight: 400 }}>jméno, e-mail, telefon, termín, poznámka — jednání o smlouvě (čl. 6/1/b GDPR)</td></tr>
          <tr><td>Uzavření a plnění nájemní smlouvy</td><td style={{ textAlign: "left", whiteSpace: "normal", fontWeight: 400 }}>jméno, adresa, datum narození, číslo OP a řidičského průkazu, kontaktní údaje — plnění smlouvy (čl. 6/1/b)</td></tr>
          <tr><td>Účetnictví a daně</td><td style={{ textAlign: "left", whiteSpace: "normal", fontWeight: 400 }}>fakturační údaje — právní povinnost (čl. 6/1/c)</td></tr>
          <tr><td>Řešení škod, pokut a sporů</td><td style={{ textAlign: "left", whiteSpace: "normal", fontWeight: 400 }}>údaje ze smlouvy a předávacího protokolu — oprávněný zájem (čl. 6/1/f)</td></tr>
          <tr><td>Statistika návštěvnosti</td><td style={{ textAlign: "left", whiteSpace: "normal", fontWeight: 400 }}>anonymizované údaje o návštěvě — souhlas (čl. 6/1/a)</td></tr>
        </tbody>
      </table>

      <h2>3. Jak dlouho údaje uchováváme</h2>
      <ul>
        <li>Nerealizovaná poptávka: 6 měsíců od posledního kontaktu.</li>
        <li>Nájemní smlouva a předávací protokol: 4 roky od skončení nájmu (promlčecí lhůty).</li>
        <li>Účetní doklady: 10 let dle zákona o účetnictví a o DPH.</li>
        <li>Údaje zpracovávané na základě souhlasu: do odvolání souhlasu.</li>
      </ul>

      <h2>4. Komu údaje předáváme</h2>
      <p>
        Údaje nepředáváme nikomu, kdo je pro poskytnutí služby nepotřebuje. Příjemci mohou být:
        pojišťovna při řešení pojistné události, externí účetní, poskytovatel hostingu webu
        (Vercel Inc.), poskytovatel e-mailové služby, případně orgány veřejné moci, ukládá-li to
        zákon. Údaje nepředáváme do třetích zemí mimo rámec standardních smluvních doložek
        u uvedených poskytovatelů.
      </p>

      <h2>5. Vaše práva</h2>
      <p>Ve vztahu ke svým osobním údajům máte právo:</p>
      <ul>
        <li>na přístup k údajům a na kopii zpracovávaných údajů;</li>
        <li>na opravu nepřesných údajů a na jejich doplnění;</li>
        <li>na výmaz („právo být zapomenut“), nebrání-li tomu zákonná povinnost;</li>
        <li>na omezení zpracování;</li>
        <li>na přenositelnost údajů;</li>
        <li>vznést námitku proti zpracování na základě oprávněného zájmu;</li>
        <li>kdykoli odvolat udělený souhlas, bez vlivu na zákonnost předchozího zpracování.</li>
      </ul>
      <p>
        Práva uplatníte e-mailem na info@c63507.cz nebo písemně na adrese sídla. Odpovíme
        nejpozději do 30 dnů. Máte rovněž právo podat stížnost u{" "}
        <a href="https://uoou.gov.cz" target="_blank" rel="noopener noreferrer">
          Úřadu pro ochranu osobních údajů
        </a>{" "}
        (Pplk. Sochora 27, 170 00 Praha 7).
      </p>

      <h2>6. Zabezpečení</h2>
      <p>
        Přístup k osobním údajům má pouze omezený okruh osob. Web je provozován výhradně přes
        zabezpečené spojení HTTPS. Listinné smlouvy uchováváme v uzamčeném prostoru. Nedochází
        k automatizovanému rozhodování ani profilování.
      </p>
    </Legal>
  );
}
