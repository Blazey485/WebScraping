import * as cheerio from "cheerio";
const response = await fetch(
	"https://store.steampowered.com/search/?hwtype=0&supportedlang=english&ndl=1"
);

const html = await response.text();

const scrape = cheerio.load(html);

//- forklaring på koden for loggen; så a.search_.... betyr finn en anchor tag (<a>) i siden som inneholder classe navnet search_result...
scrape("a.search_result_row").each((i, row) => {
	const gameTitle = scrape(".title", row).text().trim();
	//! .text og trim gir alt texten fra html og uten whitespaes

	const discountBlock = scrape(".discount_block", row);
	const discountPct = scrape(".discount_pct", discountBlock)
		.text()
		.trim();
	const originalPrice = scrape(
		".discount_original_price",
		discountBlock
	)
		.text()
		.trim();
	const finalPrice = scrape(
		".discount_final_price",
		discountBlock
	)
		.text()
		.trim();

	//* skriv ut på terminalen:
	if (gameTitle) {
		console.log(`Game: ${gameTitle}`);
		if (finalPrice) {
			console.log(`  Discount: ${discountPct}`);
			console.log(`  Original: ${originalPrice}`);
			console.log(`  Final: ${finalPrice}`);
		}
		console.log("                 ");
	}
});
