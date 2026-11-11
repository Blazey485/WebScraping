# WebScraping

- Language: JavaScript
- Tool : Cheerio

# What to scrape:

    Steam for game prices

Begrunnelse på hvorfor JS og Puppeteer.
`JS fordi jeg liker det mer enn Python
	`Valget er mellom Puppeteer og Cheerio.
Litt usikker på valget så for nå tror jeg skal se på tutorial på youtube litt crashcourse

Etter å ha sett På `CrashCourses`

Puppeteer fungerer bare på Chrome noe som jeg ikke bruker ofte, og den bruker 150mb til 350 mb memory mens Cheerio bruker under 50mb. Annen ting er at Cheerio er mye raskere, så jeg tenker å bruke cheerio for nå.

Info om cheerio :
Rask, opp til 100 nettsider i sekunder
Det eneste cons jeg ser et at den ikke klarer å se HTML som er injecta av JS, så alt av client side rendering nettsider vil ikke funke. Så jeg må finne SSR (server side redenring ) nettsider.

# to run Playwright>

    ```bash
     npx playwright codegen --browser firefox https://www.wikipedia.org
     ```
