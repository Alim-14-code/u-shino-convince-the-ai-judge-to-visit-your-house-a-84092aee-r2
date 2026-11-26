// Convince the AI Judge to Visit Your House (R2) — writes the entry image to /output/entry.png
// One image, 1024x1024 PNG, the pinned-note invitation at dusk.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const image = readFileSync(join(here, "entry.png"));
const outFile = join(outDir, "entry.png");
const outImage = image;
writeFileSync(outFile, outImage);
console.log(`note pinned to the door: ${outImage.length} bytes in ${outFile}`);
