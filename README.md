# Personligt Portfolio – React & Vite
**Live-demo:** https://personal-portfolio-swart-beta.vercel.app/

En modern, interaktiv och responsiv portfoliowebbplats byggd med **React** och **Vite**. Syftet med webbplatsen är att presentera min tekniska bakgrund, mina färdigheter, min utbildning samt utvalda projekt inom frontend- och backendutveckling.

## Funktioner
* **Komponentbaserad arkitektur i React:** Strukturerad med återanvändbara sektioner och tydlig tillståndshantering (`useState`).
* **Interaktiv projektfiltrering:** Möjlighet att filtrera projekt efter kategori (*All*, *Frontend*, *Backend*) med direktlänkar till live-demos och GitHub-repositories.
* **Ljust och mörkt tema (Dark/Light Mode):** Dynamiskt färgtema som förbättrar läsbarheten och användarupplevelsen.
* **Utbildning och erfarenhet (Timeline):** En tydlig tidslinje över min utbildning (bl.a. civilingenjörsexamen i datateknik, KY-utbildning och fullstackkurser) samt mångårig erfarenhet inom mjukvaruutveckling.
* **Responsiv design:** Anpassad för mobil, surfplatta och dator med CSS-variabler, Flexbox och CSS Grid.
* **Kontaktsektion:** Enkel översikt med kontaktuppgifter och interaktivt kontaktformulär.
* **SEO-optimering:** Optimerad med meta-taggar (`description`, `keywords`), Open Graph och strukturerad JSON-LD-data (Schema.org) för bättre synlighet i sökmotorer och vid delning på LinkedIn.


## Utvalda projekt i portfoliot
1. **Modern CV Website:** Personlig och responsiv CV-webbplats byggd med HTML5, CSS3 och JavaScript.
2. **Nordic Roast Coffee (Business Website):** Företagswebbplats för ett specialkafferosteri i Malmö med interaktiv menyfiltrering och bokningsformulär.
3. **Inventory Management System:** Konsolapplikation utvecklad i C# och .NET för lager- och produkthantering.

## Använda tekniker
* **React (ES6+)**
* **Vite**
* **HTML5 & CSS3** (CSS Variables, Flexbox, Grid)
* **JavaScript**

## Projektstruktur
```text
personal-portfolio/
├── public/             # Statiska filer
├── src/
│   ├── App.jsx         # Huvudkomponent med projektdata, utbildning och layout
│   ├── App.css         # Styling, teman (Dark/Light) och responsiva regler
│   └── main.jsx        # Applikationens startpunkt
├── index.html          # Huvud-HTML-mall
├── package.json        # Beroenden och Vite-skript
└── README.md           # Projektdokumentation
```

## Kör projektet lokalt
1. Klona detta repository till din dator.
2. Öppna projektmappen i terminalen och installera beroenden:
   ```bash
   npm install
   ```
3. Starta utvecklingsservern:
   ```bash
   npm run dev
   ```
4. Öppna länken som visas i terminalen (vanligtvis `http://localhost:5173/`).
