import Legal from "../../components/Legal";

export const metadata = { title: "Odstoupení od smlouvy — Edition 507", robots: { index: false } };

export default function Page() {
  return (
    <Legal title="Poučení o odstoupení od smlouvy" effective="1. 10. 2026">
      <div className="box">
        <p>
          <b>Důležité:</b> u nájmu dopravního prostředku na předem určený termín se{" "}
          <b>čtrnáctidenní lhůta pro odstoupení neuplatní.</b> Vyplývá to z § 1837 písm. j) zákona
          č. 89/2012 Sb., občanský zákoník. Pro zrušení rezervace proto platí storno podmínky
          uvedené ve <a href="/vseobecne-obchodni-podminky">Všeobecných obchodních podmínkách</a>.
        </p>
      </div>

      <h2>Storno podmínky</h2>
      <table>
        <thead><tr><th>Zrušení rezervace</th><th>Storno poplatek</th></tr></thead>
        <tbody>
          <tr><td>více než 14 dní před začátkem nájmu</td><td>0 %</td></tr>
          <tr><td>7–14 dní před začátkem nájmu</td><td>50 % zálohy</td></tr>
          <tr><td>méně než 7 dní před začátkem nájmu</td><td>100 % zálohy</td></tr>
        </tbody>
      </table>
      <p>
        Termín lze jednou bezplatně přesunout, požádáte-li o to nejpozději 7 dní před začátkem
        nájmu a je-li náhradní termín volný.
      </p>

      <h2>Kdy peníze vracíme v plné výši</h2>
      <ul>
        <li>zrušíme-li rezervaci my z důvodu na naší straně (porucha, škoda na vozidle, nezpůsobilost k provozu);</li>
        <li>nepodaří-li se nám nabídnout náhradní termín, který vám vyhovuje.</li>
      </ul>
      <p>Peníze vracíme stejným způsobem, jakým byly přijaty, nejpozději do 14 dnů.</p>

      <h2>Kontakt pro zrušení rezervace</h2>
      <p>
        E-mailem na info@c63507.cz nebo telefonicky. Zrušení potvrdíme písemně; rozhodující je
        okamžik doručení vašeho oznámení.
      </p>
    </Legal>
  );
}
