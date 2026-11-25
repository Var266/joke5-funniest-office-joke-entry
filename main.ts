import { mkdirSync, writeFileSync } from "node:fs";

const joke =
  "I replied-all to the meeting invite: 'This could have been an email.' HR replied-all back: 'So could your resignation.'";

if (joke.length > 200 || joke.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${joke.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
