// Testerna som följer med appen. Ändra inte den här filen. Dina egna tester skriver du i tests-egna.js.
// Några av dem är röda. Det är första ledtråden. Men alla buggar har inte ett rött test.
import { test, testAsync, assertEqual, assertTrue, visaResultat } from "./testlib";
import { formateraPris } from "./pris";
import { laggTill, taBort, totalPris, antalSt } from "./korg";
import { arOppetNu } from "./tider";
import type { Ratt } from "./typer";
import { filtrera } from "./filter";

const meny: Ratt[] = [
  { id: 1, namn: "Bulle", pris: 35, kategori: "bakverk", vegetarisk: true, bild: "" },
  { id: 2, namn: "Kaffe", pris: 32.5, kategori: "dryck", vegetarisk: true, bild: "" },
  { id: 3, namn: "Macka", pris: 59, kategori: "lunch", vegetarisk: false, bild: "" },
];

// ---- pris ----
test("formateraPris: heltal visas utan decimaler", () => assertEqual(formateraPris(35), "35 kr"));
test("formateraPris: decimaler visas med komma", () => assertEqual(formateraPris(35.5), "35,50 kr"));
test("formateraPris: noll", () => assertEqual(formateraPris(0), "0 kr"));

// ---- korg ----
test("laggTill: ny rad får antal 1", () => assertEqual(laggTill([], 1), [{ id: 1, antal: 1 }]));
test("laggTill: samma id ökar antalet", () => assertEqual(laggTill([{ id: 1, antal: 1 }], 1), [{ id: 1, antal: 2 }]));
test("laggTill: ändrar inte originalet", () => {
  const korg = [{ id: 1, antal: 1 }];
  laggTill(korg, 1);
  assertEqual(korg, [{ id: 1, antal: 1 }]);
});
test("taBort: tar bort rätt rad", () => {
  assertEqual(taBort([{ id: 1, antal: 1 }, { id: 2, antal: 1 }], 1), [{ id: 2, antal: 1 }]);
});
test("taBort: okänt id ändrar ingenting", () => {
  assertEqual(taBort([{ id: 1, antal: 1 }, { id: 2, antal: 1 }], 99), [{ id: 1, antal: 1 }, { id: 2, antal: 1 }]);
});
test("taBort: ändrar inte originalet", () => {
  const korg = [{ id: 1, antal: 1 }, { id: 2, antal: 1 }];
  taBort(korg, 1);
  assertEqual(korg.length, 2);
});
test("totalPris: en rad", () => assertEqual(totalPris([{ id: 1, antal: 1 }], meny), 35));
test("totalPris: tar hänsyn till antal", () => assertEqual(totalPris([{ id: 1, antal: 3 }], meny), 105));
test("totalPris: flera rader", () => assertEqual(totalPris([{ id: 1, antal: 2 }, { id: 3, antal: 1 }], meny), 129));
test("totalPris: tom korg är 0", () => assertEqual(totalPris([], meny), 0));
test("antalSt: summerar antal", () => assertEqual(antalSt([{ id: 1, antal: 2 }, { id: 2, antal: 3 }]), 5));

// ---- tider ----
// 2026-10-20 är en tisdag, 2026-10-17 en lördag.
test("arOppetNu: tisdag 08:00 är öppet", () => assertTrue(arOppetNu(new Date(2026, 9, 20, 8, 0)), "förväntade öppet"));
test("arOppetNu: tisdag 18:00 är stängt", () => assertEqual(arOppetNu(new Date(2026, 9, 20, 18, 0)), false));
test("arOppetNu: lördag 08:00 är stängt", () => assertEqual(arOppetNu(new Date(2026, 9, 17, 8, 0)), false));
test("arOppetNu: lördag 10:00 är öppet", () => assertTrue(arOppetNu(new Date(2026, 9, 17, 10, 0)), "förväntade öppet"));

// ---- filter ----
test("filtrera: alla kategorier", () => assertEqual(filtrera(meny, "alla", false).length, 3));
test("filtrera: en kategori", () => assertEqual(filtrera(meny, "dryck", false).map((r) => r.id), [2]));

visaResultat();
