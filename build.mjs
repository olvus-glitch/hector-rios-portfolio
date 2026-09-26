import { mkdir, copyFile, cp, readFile } from 'node:fs/promises';
const files = ['index.html', 'styles.css', 'app.js'];
await mkdir('dist', { recursive: true });
for (const file of files) await copyFile(file, `dist/${file}`);
for (const dir of ['assets', 'documents']) await cp(dir, `dist/${dir}`, { recursive: true });
const html = await readFile('index.html', 'utf8');
const localLinks = [...html.matchAll(/(?:href|src)="((?:documents|assets)\/[^"?#]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
for (const path of localLinks) {
  const bytes = await readFile(path);
  if (path.endsWith('.pdf')) {
    const tail = bytes.subarray(-1024).toString('latin1');
    if (!bytes.subarray(0, 5).equals(Buffer.from('%PDF-')) || !tail.includes('%%EOF')) {
      throw new Error(`Invalid or incomplete PDF: ${path}`);
    }
  }
}
console.log(`Built static portfolio. Verified ${new Set(localLinks).size} linked assets.`);
