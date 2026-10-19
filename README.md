# Dag 12 · Buggjakt och kvalitet

*Modul 5, UI/UX & Frontendutveckling (JavaScript), Lexicon IT-Proffs*

## Vad du ska göra idag

Du lär dig **felsöka**: hitta, förstå och rätta buggar systematiskt. Du jagar buggar i en liten kafé-app, först utan AI och sedan med, skriver ett test för varje bugg innan du rättar den, och går igenom en **kvalitetslista** (funktion, tillgänglighet, säkerhet, kodkvalitet, Lighthouse).

## Bakgrund

Att skriva kod är en mindre del av jobbet än att hitta varför den inte fungerar. Idag får du en app som *nästan* fungerar. Den har elva buggar: fyra syns som röda tester, resten kräver att du provar appen, läser koden och använder DevTools. Du kommer också mäta något som är lätt att glömma: hur bra du är på att hitta buggar själv jämfört med AI, och hur ofta AI hittar på fel som inte finns.

## Så arbetar du (samma som alltid)

1. **Forka** dagens repo på GitHub (*Fork → Create fork*).
2. **Klona din fork:** *Code → HTTPS → kopiera adressen*. I terminalen (Ctrl+ö i VS Code): `git clone <adressen>`. Öppna den nya mappen i VS Code och starta *Live Server*.
3. **Gör uppgiften.** Spara och kontrollera i webbläsaren och Console (F12) efter varje steg. Gör en commit efter varje avslutat steg: `git add .` och `git commit -m "Beskriv vad du gjorde"`.
4. **Skicka upp** när du är klar: `git push`.
5. **Fortsätt i `mitt-projekt`** med dagens projektsteg (längre ned).
6. **Lämna in i Microsoft Forms.**

Fastnar du: skriv ner exakt var och vad du försökt (och vilket felmeddelande du fick), och ta det först i nästa handledda pass.

Filer som använder `import` fungerar bara när sidan öppnas med *Live Server*. Dubbelklickar du på en HTML-fil hamnar du på `file://` och får ett CORS-fel i Console.

## Uppgiften steg för steg

### Steg 1. Klona, starta och prova appen

Forka repot, kör `git clone`, öppna i VS Code, starta Live Server på `index.html`. Lägg saker i korgen, ta bort, filtrera, skriv en kommentar, ladda om. Skriv i `docs/buggjakt.md` allt som verkar konstigt, innan du tittar i koden. Starta sedan `tests.html` och se vilka tester som är röda.

### Steg 2. Omgång 1: jaga utan AI (20 minuter)

Sätt en timer på 20 minuter. Hitta så många buggar du kan utan AI. Använd Console, Elements, Network, Application (localStorage) och att läsa koden. Skriv en rad per bugg i tabellen: symptom, fil och rad, hur du hittade den. Rätta inget än. Räkna hur många du hittat.

### Steg 3. Omgång 2: med AI

Klistra in koden (en fil i taget eller ett urval) och symptomen i en AI-chatt. Be den lista de mest troliga orsakerna, mest trolig först, och förklara hur du kontrollerar varje. Kontrollera VARJE påstående själv med DevTools eller ett test. Skriv i loggen om det stämde, och räkna falsklarm.

### Steg 4. Ett test per bugg (rött först)

För varje bugg: skriv ett test i `tests-egna.js` som är RÖTT med buggen kvar. Först när du sett testet misslyckas rättar du buggen och ser testet bli grönt. Rätta en bugg i taget och prova appen efter varje. Buggar skymmer varandra: bugg 5 gör att korgen ser trasig ut och döljer andra fel. Ändra aldrig `tests.js`.

### Steg 5. Rätta och commit en bugg i taget

En bugg, ett test, en commit. Skriv commit-meddelanden som beskriver felet, inte bara "fixade": till exempel `Rätta taBort: okänt id tog bort sista raden`. Kör `git log --oneline` när du är klar och se om historien berättar vad som hände.

### Steg 6. Kvalitetslistan

Öppna `docs/KVALITETSLISTA.md` och gå igenom den för appen. Kör Lighthouse (F12, Lighthouse, Mobile) före och efter dina rättningar och fyll i tabellen. Åtgärda det som är billigt att åtgärda, och skriv ner vad du lämnar och varför.

### Steg 7. Räkna och reflektera

Fyll i sammanställningen i `docs/buggjakt.md`: hur många hittade du, hur många hittade AI, hur många var falsklarm. Vilka buggar hade du aldrig hittat utan ett verktyg? Skriv reflektionen.

### Steg 8. Samma kvalitetslista på ditt projekt

Kopiera `KVALITETSLISTA.md` till ditt eget projekts `docs/` och gå igenom den där (se projektsteget nedan). Det är det du kommer redovisa imorgon.

### Steg 9. Fördjupning (frivillig): axe

Installera tillägget *axe DevTools* i Chrome och kör det på appen. Hittar det något Lighthouse missade? Jämför.

## AI-spåret (nivå 3: Styr och ansvara)

**Felsök, med och utan AI** (cirka 25 minuter, efter att du gjort din egen lösning)

Fri användning, full loggning. Du granskar varje rad AI föreslår och bär ansvaret för allt du lämnar in. När något går sönder är felsökning ofta mer värdefullt än att skriva ny kod. Du ska kunna det utan AI, och snabbare med AI.

Regler: egen lösning först, du ska kunna förklara varje rad, och du loggar i `docs/ai-logg.md` i `mitt-projekt` under rubriken *Modul 5*. Reglerna står i `AI-REGLER-MODUL5.md`.

1. Jaga buggar i övningen i 20 minuter utan AI. Logga hur många du hittar.
2. Be sedan AI hitta buggarna i resten av koden.
3. Verifiera varje fynd med DevTools eller ett test. AI kan hitta fel som inte finns.
4. Skriv ett test för varje bugg du rättar.
5. Räkna: hur många hittade du, hur många AI, hur många var falsklarm?

Prompt att utgå från:

```
Här är min kod och felsymptomen:
[symptom och kod]
Lista de mest troliga orsakerna, mest trolig först.
Förklara hur jag kontrollerar varje i DevTools
innan jag ändrar något.
```

**Kontrollera med:**

- Breakpoints i Sources-fliken.
- Console och Network.
- Ett test som först misslyckas och sedan går grönt.

**I ditt projekt:** Gå igenom kvalitetslistan på ditt projekt. Be AI granska säkerhet och tillgänglighet i dynamiskt innehåll, och verifiera.

## Kontrollista: så vet du att du är klar

- [ ] Du har hittat och loggat så många buggar du kan utan AI (och räknat dem).
- [ ] Du har kontrollerat varje AI-påstående själv och räknat falsklarm.
- [ ] Varje bugg du rättat har ett test i `tests-egna.js` som var rött före rättningen.
- [ ] Alla tester (`tests.js` och `tests-egna.js`) är gröna.
- [ ] `tests.js` är oförändrad (`git diff tests.js` är tom).
- [ ] Du har kört Lighthouse före och efter och fyllt i tabellen.
- [ ] Du har bockat av eller förklarat varje punkt i `KVALITETSLISTA.md` för appen.
- [ ] Du har minst en commit per rättad bugg.
- [ ] Du har gjort AI-uppgiften och skrivit en post i `docs/ai-logg.md` i `mitt-projekt`.

## Tips om du fastnar

- Börja med de röda testerna: de pekar rakt på fyra av buggarna.
- Hitta fler buggar genom att prova det konstiga: tom korg, många av samma, ta bort mitt i listan, trasig localStorage (Application-fliken), Offline.
- Läs koden högt. Skriv vad varje rad *faktiskt* gör, inte vad du tror att den gör.
- `console.log` före och efter misstänkta rader, eller använd *Sources*-fliken och sätt en breakpoint.
- Hittar du en bugg du inte kan skriva ett automatiskt test för (till exempel `aria-live`)? Skriv ner det i loggen: det är vad kvalitetslistan är till för.
- AI hittar ofta riktiga buggar men också fel som inte finns. Lita aldrig på ett fynd förrän du sett det själv.
- Fastnar du: ta en paus, gå tillbaka till symptomet, minska problemet tills du kan peka på en enda rad.

## Ditt projekt: Kvalitetssäkra ditt projekt

Efter övningen jobbar du vidare i `mitt-projekt`, samma repo som i modul 4. Övningen här är träningsbanan, projektet är det som växer. Dagens steg står också i `PROJEKTSTEG-MODUL5.md` (som du kopierar till ditt projekt dag 1), under **Dag 12**.

1. Kopiera `docs/KVALITETSLISTA.md` från övningen till ditt eget projekt och gå igenom varje punkt.
2. Kör Lighthouse (Mobile) på din sida. Notera poängen före, åtgärda det som är billigt och notera poängen efter.
3. Leta efter minst tre egna buggar eller brister (prova tom data, trasig data, Offline, tangentbord) och skriv ett test för varje du kan.
4. Rätta dem, en commit per rättning.
5. Se till att alla tester är gröna och att README förklarar hur man startar projektet och kör testerna.
6. Commit och push.

**Klart när:** Projektet har en ifylld kvalitetslista, Lighthouse-poäng före och efter, minst tre dokumenterade buggar eller brister med tester, och gröna tester.

## Inlämning

**Deadline: imorgon klockan 09.00.** Allt lämnas in i Microsoft Forms. Du behöver inte redovisa något muntligt.

I formuläret fyller du i:

1. Länk till din fork av det här repot.
2. Länk till ditt `mitt-projekt`.
3. Reflektion: Vilken bugg var svårast att hitta, och varför? Hur många hittade du själv jämfört med AI, och hur många falsklarm gav AI? Vad lär det dig om hur du bör använda AI vid felsökning?

## Vill du mer? (frivilligt)

- Skriv fem *nya* buggar i en kopia av appen och låt en kamrat jaga dem (utan att berätta vilka).
- Lägg till en `axe`-körning (tillägget) och jämför med Lighthouse.
- Skriv en `kontroll.mjs` (Node) som söker efter `innerHTML`, `var` och `==` i dina filer och rapporterar träffar.
