import { formateraPris } from "./pris.js";
import { totalPris } from "./korg.js";

export function visaMeny(container, meny) {
  container.replaceChildren();
  for (const ratt of meny) {
    const kort = document.createElement("article");
    const bild = document.createElement("img");
    bild.src = ratt.bild;
    const rubrik = document.createElement("h3");
    rubrik.textContent = ratt.namn;
    const pris = document.createElement("p");
    pris.textContent = formateraPris(ratt.pris);
    const knapp = document.createElement("button");
    knapp.type = "button";
    knapp.className = "lagg-till";
    knapp.dataset.id = ratt.id;
    knapp.textContent = "Lägg i korgen";
    kort.append(bild, rubrik, pris, knapp);
    container.append(kort);
  }
}

// Visar korgen som en lista, totalsumman och (om det finns) kundens kommentar till köket.
export function visaKorg(container, korg, meny, kommentar) {
  let html = "<ul>";
  for (const rad of korg) {
    const ratt = meny.find((r) => r.id === rad.id);
    if (ratt) {
      html += `<li>${rad.antal} × ${ratt.namn} <button type="button" class="ta-bort" data-id="${rad.id}" aria-label="Ta bort ${ratt.namn}">Ta bort</button></li>`;
    }
  }
  html += "</ul>";
  html += `<p class="summa">Summa: ${formateraPris(totalPris(korg, meny))}</p>`;
  if (kommentar) {
    html += `<p class="kommentar">Till köket: ${kommentar}</p>`;
  }
  container.innerHTML = html;
}

export function visaStatus(element, text) {
  element.textContent = text;
}
