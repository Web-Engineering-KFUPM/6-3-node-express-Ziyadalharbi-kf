import { getRandomInt } from "./utils/random.js";

const quotes = ["A", "B", "C"];

export function getRandomQuote() {
  const index = getRandomInt(quotes.length);
  return quotes[index];
}