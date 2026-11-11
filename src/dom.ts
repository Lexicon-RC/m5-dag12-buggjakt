// Hjälpfunktion: hämtar ett element eller kastar ett tydligt fel. Ändra INTE den här filen.
// querySelector kan ge null. Här kollar vi det på ett ställe, så att resten av koden slipper.
export function hamta<T extends HTMLElement = HTMLElement>(valjare: string): T {
  const element = document.querySelector<T>(valjare);
  if (!element) {
    throw new Error(`Hittar inget element som matchar ${valjare}`);
  }
  return element;
}
