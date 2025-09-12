/*
 Converts all .jpg/.jpeg/.png images under the public/ directory to .webp.
 - Skips files that already have a .webp version next to them
 - Preserves subfolder structure and filenames (just changes extension)
 - Uses quality=72 for a good balance of size and clarity
*/

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');

const SUPPORTED_EXT = new Set(['.jpg', '.jpeg', '.png']);

async function walk(dir, fileList = []) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath, fileList);
    } else {
      const ext = path.extname(entry.name).toLowerCase();
      if (SUPPORTED_EXT.has(ext)) {
        fileList.push(fullPath);
      }
    }
  }
  return fileList;
}

async function convertFile(inputPath) {
  const dir = path.dirname(inputPath);
  const base = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(dir, `${base}.webp`);

  // Skip if webp already exists
  try {
    await fs.promises.access(outputPath, fs.constants.F_OK);
    console.log('[skip] exists', path.relative(PUBLIC_DIR, outputPath));
    return;
  } catch (_) {}

  try {
    await sharp(inputPath)
      .webp({ quality: 60 })
      .toFile(outputPath);
    console.log('[ok]  ', path.relative(PUBLIC_DIR, outputPath));
  } catch (err) {
    console.error('[err]  failed for', inputPath, err.message);
  }
}

async function main() {
  const exists = fs.existsSync(PUBLIC_DIR);
  if (!exists) {
    console.error('public/ directory not found at', PUBLIC_DIR);
    process.exit(1);
  }

  const files = await walk(PUBLIC_DIR);
  console.log('Found', files.length, 'images to check');

  // Limit concurrency to avoid high memory usage
  const CONCURRENCY = 6;
  let index = 0;
  async function worker() {
    while (index < files.length) {
      const i = index++;
      await convertFile(files[i]);
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

  console.log('Conversion complete.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


