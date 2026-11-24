import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My out-of-office reply says 'per my last email', so now even my vacation is passive-aggressive.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
// Gate: /output/entry.txt must be UTF-8 text of 1 to 199 characters.
if (joke.length < 1 || joke.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${joke.length}`);
}
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(joke);
