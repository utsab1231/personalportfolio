// scripts/optimize-media.mjs
//
// Media pipeline for the tryouts gallery:
//   1. Downloads source images from their external host (catbox) once,
//      caching them in /.media-cache so repeat runs are offline-friendly.
//   2. Generates AVIF / WebP / JPEG fallbacks at multiple widths.
//   3. Writes the results to /public/tryouts so static export serves
//      same-origin, properly-sized, modern-format images.
//
// The image "base" names emitted here must match the `base` fields in
// content/site.ts → tryouts.images. Widths must match IMAGE_WIDTHS in
// components/media-image.tsx.
//
// Run manually with `npm run optimize:media` or automatically before
// `next build` via the `prebuild` script.

import { existsSync, mkdirSync, rmSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

/** Tryout gallery sources keyed by the id used everywhere else as "base". */
const SOURCES = [
  "qfneeb",
  "esfcru",
  "qd6vlr",
  "1eu443",
  "kopfq6",
  "dyn7r6",
  "ffs62n",
  "q3ecss",
  "y4lijv",
].map((id) => ({ id, url: `https://files.catbox.moe/${id}.jpg` }));

/** Widths generated for every format — keep in sync with media-image.tsx. */
const WIDTHS = [320, 480, 640, 960];

const FORMATS = [
  { ext: "avif", method: "avif", options: { quality: 60 } },
  { ext: "webp", method: "webp", options: { quality: 75 } },
  { ext: "jpg", method: "jpeg", options: { quality: 80, mozjpeg: true } },
];

const CACHE_DIR = path.resolve(".media-cache");
const OUT_DIR = path.resolve("public/tryouts");

async function ensureSourceImage({ id, url }) {
  const cached = path.join(CACHE_DIR, `${id}.jpg`);
  if (!existsSync(cached)) {
    process.stdout.write(`  downloading ${id} … `);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`failed to download ${url}: HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(cached, buffer);
    process.stdout.write("done\n");
  } else {
    process.stdout.write(`  cached ${id}\n`);
  }
  return cached;
}

async function generateVariants(id, sourcePath) {
  const original = sharp(sourcePath);
  const meta = await original.metadata();

  for (const width of WIDTHS) {
    if (meta.width && meta.width < width) {
      console.log(`  skip  ${id} @${width} (source is ${meta.width}px)`);
      continue;
    }
    for (const { ext, method, options } of FORMATS) {
      const outPath = path.join(OUT_DIR, `${id}-${width}.${ext}`);
      const pipeline = original.clone().resize({ width });
      await pipeline[method](options).toFile(outPath);
    }
  }
  console.log(`  wrote ${id} (${FORMATS.length} formats × available widths)`);
}

async function main() {
  console.log("--- optimize-media ---");

  mkdirSync(CACHE_DIR, { recursive: true });
  rmSync(OUT_DIR, { recursive: true, force: true });
  mkdirSync(OUT_DIR, { recursive: true });

  for (const source of SOURCES) {
    await ensureSourceImage(source);
    await generateVariants(source.id, path.join(CACHE_DIR, `${source.id}.jpg`));
  }

  console.log(`✔ wrote ${OUT_DIR}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});