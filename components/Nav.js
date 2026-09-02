import Link from "next/link";
import { brand, company } from "../content/site";

export default function Nav({ home = true }) {
  const p = (hash) => (home ? hash : "/" + hash);
  return (
    <nav>
      <div className="wrap nav-in">
        <Link className="mark" href="/">
          <b>{brand.wordmark}</b>
          <span>{brand.sub}</span>
        </Link>
        <div className="nav-links">
          <a href={p("#vuz")}>Vůz</a>
          <a href={p("#pribeh")}>Příběh</a>
          <a href={p("#cenik")}>Ceník</a>
          <a href={p("#podminky")}>Podmínky</a>
          <a href={p("#rezervace")}>Rezervace</a>
        </div>
        <a className="tel" href={`tel:${company.phoneHref}`}>{company.phone}</a>
      </div>
    </nav>
  );
}
