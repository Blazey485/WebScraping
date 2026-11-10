import * as cheerio from "cheerio";

const response = await fetch(
	"https://store.steampowered.com/search/?term=mortal+shell"
);

// https://store.epicgames.com/browse?sortBy=releaseDate&sortDir=DESC&category=Game&count=40

const html = await response.text();

const scrape = cheerio.load(html);

scrape(".search_result_row").each((i, row) => {
	const gameTitle = scrape(".title", row).text().trim();
	console.log(gameTitle);
});
