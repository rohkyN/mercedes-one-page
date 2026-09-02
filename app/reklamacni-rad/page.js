import Legal from "../../components/Legal";

export const metadata = { title: "Reklamační řád — Edition 507", robots: { index: false } };

export default function Page() {
  return (
    <Legal title="Reklamační řád" effective="1. 10. 2026">
      <h2>1. Rozsah</h2>
      <p>
        Tento reklamační řád upravuje způsob uplatnění práv z vadného plnění u služby krátkodobého
        nájmu vozidla poskytované společností TerraCore s.r.o.
      </p>

      <h2>2. Kdy jde o vadu služby</h2>
      <ul>
        <li>vozidlo nebylo předáno ve sjednaném termínu nebo na sjednaném místě;</li>
        <li>vozidlo nebylo způsobilé k provozu nebo mělo vadu bránící obvyklému užití;</li>
        <li>vozidlo neodpovídalo popisu uvedenému v nájemní smlouvě;</li>
        <li>byla účtována jiná cena, než jaká byla sjednána.</li>
      </ul>
      <p>
        Vadou není běžné opotřebení vozidla, jeho spotřeba paliva ani vlastnosti vyplývající
        z povahy sportovního vozu (tvrdší podvozek, hlučnost výfuku, omezená světlá výška).
      </p>

      <h2>3. Jak reklamaci uplatnit</h2>
      <p>
        Reklamaci uplatněte bez zbytečného odkladu, nejlépe ihned při zjištění vady, telefonicky na
        čísle uvedeném na webu a následně písemně na info@c63507.cz nebo na adrese sídla.
        Uveďte číslo nájemní smlouvy, popis vady a jaký způsob vyřízení požadujete.
      </p>

      <h2>4. Lhůty a vyřízení</h2>
      <p>
        O přijetí reklamace vydáme písemné potvrzení. Reklamaci vyřídíme nejpozději do 30 dnů od
        jejího uplatnění, nedohodneme-li se na delší lhůtě. Je-li reklamace oprávněná, poskytneme
        přiměřenou slevu z ceny, náhradní termín nebo vrátíme uhrazenou částku.
      </p>

      <h2>5. Mimosoudní řešení sporů</h2>
      <p>
        Nesouhlasíte-li s vyřízením reklamace, máte jako spotřebitel právo obrátit se na{" "}
        <a href="https://adr.coi.cz" target="_blank" rel="noopener noreferrer">
          Českou obchodní inspekci
        </a>
        , Štěpánská 796/44, 110 00 Praha 1, adr.coi.cz.
      </p>
    </Legal>
  );
}
