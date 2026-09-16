import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import {
  company, gauges, specs, specs2, pricing, money,
  included, excluded, whoCan, forbidden, faq,
} from "../content/site";

function SpecList({ items }) {
  return (
    <dl className="dl">
      {items.map(([k, v, small]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>
            {v} {small ? <small>{small}</small> : null}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <header className="hero" id="top">
        <img
          src="/img/hero.webp"
          width="1280"
          height="730"
          alt="Mercedes-Benz C 63 AMG Edition 507 Coupé v červené barvě"
          fetchPriority="high"
        />
        <div className="hero-copy">
          <div className="wrap">
            <span className="lbl">Mercedes-Benz C&nbsp;63 AMG · Edition 507 Coupé · motor M156</span>
            <h1>
              Poslední velké <em>atmosférické</em> V8.
            </h1>
            <p className="hero-sub">
              6 208 cm³, ručně stavěný osmiválec a kompletní výfuky Innotech. Pořádná atmosféra
              a brutální zvuk. Zažítek, který v nových autech už nezažijete.. 
            </p>
            <div className="cta-row">
              <a className="btn btn-red" href="#rezervace">Rezervovat termín</a>
              <a className="btn" href="#cenik">Ceník od 4&nbsp;900&nbsp;Kč</a>
            </div>
          </div>
        </div>
      </header>

      <section className="wrap">
        <div className="gauges">
          {gauges.map(([lbl, v, unit]) => (
            <div className="gauge" key={lbl}>
              <span className="lbl">{lbl}</span>
              <div className="v">
                {v}
                <i>{unit}</i>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sec" id="pribeh">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">01</span>
            <h2>Proč zrovna tohle auto</h2>
          </div>
          <div className="story">
            <div className="prose">
              <p>
                <strong>Tohle už se nevyrábí a vyrábět nebude.</strong> M156 byl první motor, který
                si AMG postavilo samo od nuly — šest a dva litry, osm válců, žádné turbo, žádný
                elektrický kompresor. Dnešní C&nbsp;63 má dvoulitrový čtyřválec s hybridem. AMG GT,
                BMW M, Porsche: všechno přeplňované, přefiltrované, s dozvučením ze zvukové
                aparatury.
              </p>
              <p>
                Edition 507 byla rozlučka. Nejostřejší verze C&nbsp;63 na platformě W204: kované
                ojnice a písty z SLS AMG, vodní chlazení z Black Series, snížený podvozek, 507 koní
                z čistě atmosférického osmiválce, který jde do otáček tak, jak dnes už žádný sériový
                motor nejde.
              </p>
              <p className="pull">Nové AMG je rychlejší. Tohle je zážitek.</p>
              <p>
                K tomu <strong>výfukový systém Innotech</strong> — jediný důvod, proč si spousta lidí
                tenhle vůz půjčí. Studený start v podzemní garáži. Prásknutí při podřazení v tunelu.
                Zvuk, který slyšíte o dvě ulice dál a který se z videa na telefonu prostě přenést
                nedá.
              </p>
              <p>
                Nepůjčujeme flotilu. Půjčujeme <strong>jedno konkrétní auto</strong>, o které se
                staráme a předáváme ho osobně. Na víkend, na svatbu, na focení, na splnění dávného
                snu, nebo prostě proto, že možná už za pár let budou tyhle auta zakázaný..
              </p>
            </div>
            <aside>
              <div className="plaque">
                <span className="lbl">One Man, One Engine</span>
                <p>
                  Každý motor AMG skládá v Affalterbachu jeden jediný technik, od prvního šroubu po
                  poslední. Na hliníkovém štítku na sacím traktu je jeho podpis. U tohohle vozu si ho
                  můžete přečíst — je to ta nejmenší a nejlepší část celého auta.
                </p>
                <div className="sig">M156 · V8 · Affalterbach · ručně stavěno</div>
              </div>
              <figure className="story-img" style={{ margin: "24px 0 0" }}>
                <img src="/img/side.webp" width="780" height="520" loading="lazy"
                     alt="Boční pohled na střešní linii kupé C 63 AMG Edition 507" />
              </figure>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec" id="vuz">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">02</span>
            <h2>Technický list</h2>
          </div>
          <div className="spec-grid">
            <SpecList items={specs} />
            <SpecList items={specs2} />
          </div>
          <div className="photo-pair" style={{ marginTop: "clamp(28px,3.5vw,44px)" }}>
            <img src="/img/front.webp" width="760" height="651" loading="lazy"
                 alt="Detail přední masky a světlometu vozu" />
            <img src="/img/wheel.webp" width="700" height="725" loading="lazy"
                 alt="Detail kola a červeného brzdového třmenu AMG" />
          </div>
          <p className="footnote">
            Údaje odpovídají specifikaci Edition 507.
          </p>
        </div>
      </section>

      <section className="sec" id="cenik">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">03</span>
            <h2>Ceník</h2>
          </div>
          <p className="lede" style={{ marginBottom: "clamp(28px,3.4vw,44px)" }}>
            Ceny jsou konečné, včetně povinného ručení, havarijního pojištění, dálniční známky
            a předání vozu v Praze a okolí. Bez skrytých položek.
          </p>

          <div className="price-table">
            {pricing.map((r) => (
              <div className={"prow" + (r.hot ? " hot" : "")} key={r.t}>
                <div className="t">
                  {r.t}
                  {r.tag ? <span className="tag">{r.tag}</span> : null}
                </div>
                <div className="k">{r.k}</div>
                <div className="p">{r.p}</div>
              </div>
            ))}
          </div>

          <div className="money">
            {money.map((m) => (
              <div key={m.lbl}>
                <span className="lbl">{m.lbl}</span>
                <div className="v">
                  {m.v}
                  {m.vs ? (
                    <span style={{ fontSize: ".55em", fontWeight: 600, color: "var(--muted)" }}>
                      {" "}{m.vs}
                    </span>
                  ) : null}
                </div>
                <p>{m.p}</p>
              </div>
            ))}
          </div>

          <div className="cols2">
            <div className="card">
              <h3>V ceně nájmu</h3>
              <ul className="ticks">{included.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
            <div className="card">
              <h3>Není v ceně</h3>
              <ul className="ticks no">{excluded.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="podminky">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">04</span>
            <h2>Podmínky</h2>
          </div>
          <div className="cond">
            <div>
              <h3>Kdo si vůz může půjčit</h3>
              <ul>
                {whoCan.map((t, i) => (
                  <li key={t}><b>{String(i + 1).padStart(2, "0")}</b><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Co s vozem nelze</h3>
              <ul>
                {forbidden.map((t, i) => (
                  <li key={t}><b>{String(i + 1).padStart(2, "0")}</b><span>{t}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="footnote">
            Úplné znění najdete ve Všeobecných obchodních podmínkách. Poplatky za pozdní vrácení,
            ztrátu klíče či dokladů a za natankování nesprávného paliva jsou uvedeny v sazebníku,
            který je přílohou nájemní smlouvy.
          </p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">05</span>
            <h2>Časté dotazy</h2>
          </div>
          <div>
            {faq.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="rezervace">
        <div className="wrap">
          <div className="sec-head">
            <span className="num">06</span>
            <h2>Rezervace termínu</h2>
          </div>
          <div className="book">
            <div className="contact-side">
              <p className="lede">
                Napište nám termín a ozveme se s potvrzením dostupnosti a shrnutím
                ceny. Rezervace je závazná až po zaplacení zálohy.
              </p>
              <div>
                <span className="lbl">Telefon</span>
                <a className="big" href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </div>
              <div>
                <span className="lbl">E-mail</span>
                <a className="big" href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div>
                <span className="lbl">Předání vozu</span>
                <p style={{ color: "#B3ABA3", fontSize: 14, lineHeight: 1.7 }}>
                  {company.city} · přesnou adresu pošleme s potvrzením rezervace.
                  <br />
                  {company.hours[0].toUpperCase() + company.hours.slice(1)}, po domluvě i mimo.
                </p>
              </div>
            </div>
            <BookingForm />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
