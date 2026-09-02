import Link from "next/link";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Legal({ title, effective, children, draft = true }) {
  return (
    <>
      <Nav home={false} />
      <main className="wrap legal">
        <Link className="back" href="/">← Zpět na úvod</Link>
        <h1>{title}</h1>
        <p className="meta">{company_line(effective)}</p>
        {draft ? (
          <div className="draft">
            <p>
              PRACOVNÍ ZNĚNÍ — DEMO. Tento dokument je návrh připravený pro TerraCore s.r.o.
              Před spuštěním webu musí být zkontrolován a schválen provozovatelem, ideálně
              i advokátem. Nejedná se o právní poradenství.
            </p>
          </div>
        ) : null}
        {children}
      </main>
      <Footer />
    </>
  );
}

function company_line(effective) {
  return `TerraCore s.r.o. · IČO 24465950 · účinnost od ${effective}`;
}
