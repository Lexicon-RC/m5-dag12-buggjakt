import type { Ratt } from "./typer";
// Hämtar menyn från data/meny.json.
export async function hamtaMeny(fetchFn: typeof fetch = fetch): Promise<Ratt[]> {
  const svar = await fetchFn("data/meny.json");
  return (await svar.json()) as Ratt[];
}
