# Dag 12 · Buggjakt och kvalitet

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du lär dig **felsöka**: hitta, förstå och rätta buggar systematiskt. Du jagar buggar i en liten kafé-app, skriver ett test för varje bugg innan du rättar den, och går igenom en **kvalitetslista** (funktion, tillgänglighet, säkerhet, kodkvalitet, Lighthouse).

## Bakgrund

Att skriva kod är en mindre del av jobbet än att hitta varför den inte fungerar. Idag får du en app som *nästan* fungerar. Den har elva buggar: fyra syns som röda tester, resten kräver att du provar appen, läser koden och använder DevTools. Du kommer också märka vilka metoder som hittar flest: att prova appen, att läsa koden och att använda DevTools.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

Filer som använder `import` fungerar bara när sidan öppnas med *Live Server*. Dubbelklickar du på en HTML-fil hamnar du på `file://` och får ett CORS-fel i Console.

## Uppgiften steg för steg

### Steg 1. Klona, starta och prova appen

Forka repot, kör `git clone`, öppna i VS Code, starta Live Server på `index.html`. Lägg saker i korgen, ta bort, filtrera, skriv en kommentar, ladda om. Skriv i `docs/buggjakt.md` allt som verkar konstigt, innan du tittar i koden. Starta sedan `tests.html` och se vilka tester som är röda.

### Steg 2. Omgång 1: prova och felsök (20 minuter)

Sätt en timer på 20 minuter. Hitta så många buggar du kan. Använd Console, Elements, Network, Application (localStorage) och att läsa koden. Skriv en rad per bugg i tabellen: symptom, fil och rad, hur du hittade den. Rätta inget än. Räkna hur många du hittat.

### Steg 3. Omgång 2: läs koden (20 minuter)

Sätt en timer på 20 minuter till. Läs koden fil för fil och skriv vad varje funktion *faktiskt* gör. Jämför med vad den borde göra. Lägg till nya buggar i tabellen och notera hur du hittade dem (prova, DevTools eller läsa).

### Steg 4. Ett test per bugg (rött först)

För varje bugg: skriv ett test i `tests-egna.js` som är RÖTT med buggen kvar. Först när du sett testet misslyckas rättar du buggen och ser testet bli grönt. Rätta en bugg i taget och prova appen efter varje. Buggar skymmer varandra: bugg 5 gör att korgen ser trasig ut och döljer andra fel. Ändra aldrig `tests.js`.

### Steg 5. Rätta och commit en bugg i taget

En bugg, ett test, en commit. Skriv commit-meddelanden som beskriver felet, inte bara "fixade": till exempel `Rätta taBort: okänt id tog bort sista raden`. Kör `git log --oneline` när du är klar och se om historien berättar vad som hände.

### Steg 6. Kvalitetslistan

Öppna `docs/KVALITETSLISTA.md` och gå igenom den för appen. Kör Lighthouse (F12, Lighthouse, Mobile) före och efter dina rättningar och fyll i tabellen. Åtgärda det som är billigt att åtgärda, och skriv ner vad du lämnar och varför.

### Steg 7. Räkna och reflektera

Fyll i sammanställningen i `docs/buggjakt.md`: hur många hittade du i omgång 1 och hur många i omgång 2. Vilka buggar hade du aldrig hittat utan ett verktyg? Skriv reflektionen.

### Steg 8. Fördjupning (frivillig): axe

Installera tillägget *axe DevTools* i Chrome och kör det på appen. Hittar det något Lighthouse missade? Jämför.

## Kontrollista: så vet du att du är klar

- [ ] Du har hittat och loggat så många buggar du kan (och räknat dem).
- [ ] Du har gjort båda omgångarna (prova och läsa koden).
- [ ] Varje bugg du rättat har ett test i `tests-egna.js` som var rött före rättningen.
- [ ] Alla tester (`tests.js` och `tests-egna.js`) är gröna.
- [ ] `tests.js` är oförändrad (`git diff tests.js` är tom).
- [ ] Du har kört Lighthouse före och efter och fyllt i tabellen.
- [ ] Du har bockat av eller förklarat varje punkt i `KVALITETSLISTA.md` för appen.
- [ ] Du har minst en commit per rättad bugg.

## Tips om du fastnar

- Börja med de röda testerna: de pekar rakt på fyra av buggarna.
- Hitta fler buggar genom att prova det konstiga: tom korg, många av samma, ta bort mitt i listan, trasig localStorage (Application-fliken), Offline.
- Läs koden högt. Skriv vad varje rad *faktiskt* gör, inte vad du tror att den gör.
- `console.log` före och efter misstänkta rader, eller använd *Sources*-fliken och sätt en breakpoint.
- Hittar du en bugg du inte kan skriva ett automatiskt test för (till exempel `aria-live`)? Skriv ner det i loggen: det är vad kvalitetslistan är till för.
- Lita aldrig på en teori om en bugg förrän du sett den själv, med ett test eller i DevTools.
- Fastnar du: ta en paus, gå tillbaka till symptomet, minska problemet tills du kan peka på en enda rad.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Reflektion: Vilken bugg var svårast att hitta, och varför? Vilken metod (prova, DevTools, läsa koden, testerna) hittade flest buggar? Vad gör du annorlunda nästa gång?

## Vill du mer? (frivilligt)

- Skriv fem *nya* buggar i en kopia av appen och låt en kamrat jaga dem (utan att berätta vilka).
- Lägg till en `axe`-körning (tillägget) och jämför med Lighthouse.
- Skriv en `kontroll.mjs` (Node) som söker efter `innerHTML`, `var` och `==` i dina filer och rapporterar träffar.
