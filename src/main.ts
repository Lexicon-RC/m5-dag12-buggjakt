import type { Ratt, KorgRad } from "./typer";
import { hamta } from "./dom";
import { hamtaMeny } from "./api";
import { laggTill, taBort, antalSt } from "./korg";
import { laddaKorg, sparaKorg } from "./lagring";
import { filtrera } from "./filter";
import { arOppetNu } from "./tider";
import { visaMeny, visaKorg, visaStatus } from "./ui";

const menyEl = hamta<HTMLElement>("#meny");
const korgEl = hamta<HTMLElement>("#korg");
const statusEl = hamta<HTMLElement>("#status");
const oppetEl = hamta<HTMLElement>("#oppet");
const kategoriEl = hamta<HTMLSelectElement>("#kategori");
const vegEl = hamta<HTMLInputElement>("#veg");
const kommentarEl = hamta<HTMLTextAreaElement>("#kommentar");
const antalEl = hamta<HTMLElement>("#antal");

let meny: Ratt[] = [];
let korg: KorgRad[] = laddaKorg();

function ritaMeny(): void {
  visaMeny(menyEl, filtrera(meny, kategoriEl.value, vegEl.checked));
}

function ritaKorg(): void {
  visaKorg(korgEl, korg, meny, kommentarEl.value);
  antalEl.textContent = String(antalSt(korg));
  sparaKorg(korg);
}

menyEl.addEventListener("click", (handelse) => {
  if (!(handelse.target instanceof Element)) {
    return;
  }
  const knapp = handelse.target.closest<HTMLElement>(".lagg-till");
  if (!knapp) {
    return;
  }
  korg = laggTill(korg, knapp.dataset.id ?? "");
  ritaKorg();
  visaStatus(statusEl, "Lagt i korgen");
});

korgEl.addEventListener("click", (handelse) => {
  if (!(handelse.target instanceof Element)) {
    return;
  }
  const knapp = handelse.target.closest<HTMLElement>(".ta-bort");
  if (!knapp) {
    return;
  }
  korg = taBort(korg, knapp.dataset.id ?? "");
  ritaKorg();
  visaStatus(statusEl, "Borttagen");
});

kategoriEl.addEventListener("change", ritaMeny);
vegEl.addEventListener("change", ritaMeny);
kommentarEl.addEventListener("input", ritaKorg);

oppetEl.textContent = arOppetNu(new Date()) ? "Öppet just nu" : "Stängt just nu";

async function start(): Promise<void> {
  try {
    meny = await hamtaMeny();
    ritaMeny();
    ritaKorg();
  } catch (fel) {
    const text = fel instanceof Error ? fel.message : String(fel);
    visaStatus(statusEl, "Kunde inte ladda menyn: " + text);
  }
}
start();
