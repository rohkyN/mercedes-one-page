import Link from "next/link";
import { company, legalLinks } from "../content/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <h4>Provozovatel</h4>
            <p className="co">{company.name}</p>
            <p>
              {company.address}
              <br />
              IČO: {company.ico} · DIČ: {company.dic}
            </p>
          </div>
          <div>
            <h4>Kontakt</h4>
            <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            <a href="/#rezervace">Rezervace termínu</a>
            <p>
              {company.city} · {company.hours}
            </p>
          </div>
          <div>
            <h4>Dokumenty</h4>
            {legalLinks.map(([href, label]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="legalbar">
          <span>
            © {new Date().getFullYear()} {company.name} — Mercedes-Benz a AMG jsou ochranné známky
            Mercedes-Benz Group AG. Nejsme autorizovaný prodejce ani servis.
          </span>
          <span>
            Mimosoudní řešení spotřebitelských sporů:{" "}
            <a href="https://adr.coi.cz" rel="noopener noreferrer" target="_blank">
              Česká obchodní inspekce, adr.coi.cz
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
