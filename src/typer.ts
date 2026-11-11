// Typerna för kafé-appen. Ändra INTE den här filen.

// En rätt i menyn (så som den ser ut i data/meny.json).
export interface Ratt {
  id: number;
  namn: string;
  pris: number;
  kategori: string;
  vegetarisk: boolean;
  bild: string;
  beskrivning?: string;
}

// En rad i korgen: vilken rätt (id) och hur många.
export interface KorgRad {
  id: number;
  antal: number;
}
