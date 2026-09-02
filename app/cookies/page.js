import Legal from "../../components/Legal";

export const metadata = { title: "Zásady používání cookies — Edition 507", robots: { index: false } };

export default function Page() {
  return (
    <Legal title="Zásady používání cookies" effective="1. 10. 2026">
      <h2>Co jsou cookies</h2>
      <p>
        Cookies jsou malé textové soubory, které web ukládá do vašeho prohlížeče. Slouží k tomu, aby
        stránka fungovala správně, případně aby provozovatel poznal, jak je web používán.
      </p>

      <h2>Jaké cookies používáme</h2>
      <table>
        <thead><tr><th>Kategorie</th><th>Stav</th></tr></thead>
        <tbody>
          <tr><td>Technické (nezbytné pro provoz a bezpečnost webu)</td><td>vždy aktivní</td></tr>
          <tr><td>Analytické (anonymní statistika návštěvnosti)</td><td>jen se souhlasem</td></tr>
          <tr><td>Marketingové a reklamní</td><td>nepoužíváme</td></tr>
        </tbody>
      </table>
      <p>
        Tento web nepoužívá reklamní ani sledovací cookies třetích stran. Analytické měření je
        nasazeno pouze v anonymizované podobě a bez souhlasu se nespouští.
      </p>

      <h2>Jak souhlas odvolat</h2>
      <p>
        Souhlas můžete kdykoli odvolat smazáním cookies v nastavení svého prohlížeče. Blokování
        technických cookies může způsobit, že některé části webu nebudou fungovat.
      </p>

      <h2>Kontakt</h2>
      <p>
        Dotazy k cookies směřujte na info@c63507.cz. Zpracování osobních údajů popisujeme
        v dokumentu <a href="/ochrana-osobnich-udaju">Ochrana osobních údajů</a>.
      </p>
    </Legal>
  );
}
