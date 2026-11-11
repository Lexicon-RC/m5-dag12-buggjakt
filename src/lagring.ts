import type { KorgRad } from "./typer";
// Sparar och läser korgen i webbläsarens localStorage, så att den finns kvar efter omladdning.
const NYCKEL = "kafe-korg";

export function sparaKorg(korg: KorgRad[]): void {
  localStorage.setItem(NYCKEL, JSON.stringify(korg));
}

export function laddaKorg(): KorgRad[] {
  const text = localStorage.getItem(NYCKEL);
  if (text === null) {
    return [];
  }
  return JSON.parse(text);
}
