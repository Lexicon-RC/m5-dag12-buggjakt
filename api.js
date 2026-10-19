// Hämtar menyn från data/meny.json.
export async function hamtaMeny(fetchFn = fetch) {
  const svar = await fetchFn("data/meny.json");
  return await svar.json();
}
