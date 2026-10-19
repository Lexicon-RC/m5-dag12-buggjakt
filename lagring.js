// Sparar och läser korgen i webbläsarens localStorage, så att den finns kvar efter omladdning.
const NYCKEL = "kafe-korg";

export function sparaKorg(korg) {
  localStorage.setItem(NYCKEL, JSON.stringify(korg));
}

export function laddaKorg() {
  const text = localStorage.getItem(NYCKEL);
  if (text === null) {
    return [];
  }
  return JSON.parse(text);
}
