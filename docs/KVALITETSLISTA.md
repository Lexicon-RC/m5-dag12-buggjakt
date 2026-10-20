# Kvalitetslista

Gå igenom listan för appen när buggarna är rättade, och igen före redovisningen. Bocka av `[x]` och skriv något kort när du kollat. Ett `[ ]` du inte kan bocka av är en brist att åtgärda eller förklara.

## 1. Funktion
- [ ] Alla tester är gröna (`tests.html`).
- [ ] Varje bugg du rättat har ett eget test som var rött före rättningen.
- [ ] Appen fungerar när localStorage är tom, och när den innehåller skräp.
- [ ] Appen fungerar med Network på *Offline* (felmeddelande, inte vit sida).
- [ ] Appen fungerar med *Slow 3G* (laddar-läge syns).
- [ ] Inget i Console: inga röda fel, inga gula varningar du inte kan förklara.

## 2. Tillgänglighet
- [ ] Hela appen går att använda med bara tangentbordet (Tab, Enter, Space). Fokus syns hela tiden.
- [ ] Alla bilder har `alt` (eller `alt=""` om de bara är dekoration).
- [ ] Alla formulärfält har en synlig `label` kopplad med `for` och `id`.
- [ ] Ändringar som användaren inte ser direkt (status, fel, laddar) ligger i en region med `aria-live` eller `role="status"` / `role="alert"`.
- [ ] Knappar har en begriplig text eller `aria-label`.
- [ ] Färgkontrasten är minst 4.5:1 för vanlig text (kontrollera i DevTools eller Lighthouse).
- [ ] Sidan fungerar vid 200 % zoom utan att innehåll försvinner eller kräver sidscroll.

## 3. Säkerhet
- [ ] Ingen `innerHTML` med data som kommer från användare eller nätet.
- [ ] Inga hemliga nycklar eller lösenord i koden eller historiken (`git log -p` sök på "key", "token").
- [ ] `.gitignore` finns och innehåller `.env`, `node_modules/` och `*.log`.
- [ ] Data från `localStorage` och `fetch` valideras innan den används.

## 4. Kodkvalitet
- [ ] Inga `var`, inga `==` (förutom medvetet `== null`).
- [ ] Inga magiska tal eller texter som upprepas på flera ställen.
- [ ] Ingen funktion är längre än omkring 25 rader eller gör mer än en sak.
- [ ] Inga bortkommenterade kodblock, inga `console.log` kvar för felsökning.
- [ ] Namnen säger vad sakerna är. Inga `x`, `tmp`, `data2`.
- [ ] Rena funktioner är skilda från DOM och nätkod.

## 5. Prestanda och mätning (Lighthouse)
Kör Lighthouse (F12, fliken Lighthouse, läge *Navigation*, *Mobile*) och fyll i:

| Kategori | Poäng före | Poäng efter | Mål |
|---|---|---|---|
| Performance | | | 90+ |
| Accessibility | | | 95+ |
| Best Practices | | | 95+ |
| SEO | | | 90+ |

Vad var det viktigaste Lighthouse hittade, och vad gjorde du åt det?

## 6. Dokumentation
- [ ] README förklarar vad appen gör och hur man startar den.
- [ ] Det står hur man kör testerna.
- [ ] Planerade val och avvägningar är nedskrivna (`docs/`).
