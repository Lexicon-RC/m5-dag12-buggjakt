import { hamtaMeny } from "./api.js";
import { laggTill, taBort, antalSt } from "./korg.js";
import { laddaKorg, sparaKorg } from "./lagring.js";
import { filtrera } from "./filter.js";
import { arOppetNu } from "./tider.js";
import { visaMeny, visaKorg, visaStatus } from "./ui.js";

const menyEl = document.querySelector("#meny");
const korgEl = document.querySelector("#korg");
const statusEl = document.querySelector("#status");
const oppetEl = document.querySelector("#oppet");
const kategoriEl = document.querySelector("#kategori");
const vegEl = document.querySelector("#veg");
const kommentarEl = document.querySelector("#kommentar");
const antalEl = document.querySelector("#antal");

let meny = [];
let korg = laddaKorg();

function ritaMeny() {
  visaMeny(menyEl, filtrera(meny, kategoriEl.value, vegEl.checked));
}

function ritaKorg() {
  visaKorg(korgEl, korg, meny, kommentarEl.value);
  antalEl.textContent = String(antalSt(korg));
  sparaKorg(korg);
}

menyEl.addEventListener("click", (handelse) => {
  const knapp = handelse.target.closest(".lagg-till");
  if (!knapp) {
    return;
  }
  korg = laggTill(korg, knapp.dataset.id);
  ritaKorg();
  visaStatus(statusEl, "Lagt i korgen");
});

korgEl.addEventListener("click", (handelse) => {
  const knapp = handelse.target.closest(".ta-bort");
  if (!knapp) {
    return;
  }
  korg = taBort(korg, knapp.dataset.id);
  ritaKorg();
  visaStatus(statusEl, "Borttagen");
});

kategoriEl.addEventListener("change", ritaMeny);
vegEl.addEventListener("change", ritaMeny);
kommentarEl.addEventListener("input", ritaKorg);

oppetEl.textContent = arOppetNu(new Date()) ? "Öppet just nu" : "Stängt just nu";

async function start() {
  try {
    meny = await hamtaMeny();
    ritaMeny();
    ritaKorg();
  } catch (fel) {
    visaStatus(statusEl, "Kunde inte ladda menyn: " + fel.message);
  }
}
start();
