import { mkdir, copyFile, cp, readFile } from 'node:fs/promises';
const files = ['index.html', 'styles.css', 'app.js', 'documento.html', 'viewer.css', 'viewer.js'];
await mkdir('dist', { recursive: true });
for (const file of files) await copyFile(file, `dist/${file}`);
for (const dir of ['assets', 'documents']) await cp(dir, `dist/${dir}`, { recursive: true });
const html = await readFile('index.html', 'utf8');
const localLinks = [...html.matchAll(/(?:href|src)="((?:documents|assets)\/[^"?#]+)(?:\?[^\"]*)?"/g)].map(match => match[1]);
for (const path of localLinks) {
  await readFile(path);
}
const pdfs = ['cv-publico.pdf','arte-comunicacion.pdf','ciberseguridad.pdf','interpersonal.pdf','resolucion-problemas.pdf','ingles-b1.pdf'];
for (const pdf of pdfs) {
  const path = `documents/${pdf}`;
  const bytes = await readFile(path);
  const tail = bytes.subarray(-1024).toString('latin1');
  if (!bytes.subarray(0, 5).equals(Buffer.from('%PDF-')) || !tail.includes('%%EOF')) {
    throw new Error(`Invalid or incomplete PDF: ${path}`);
  }
}
const previews = ['cv-public.jpg','visual-communication-public.jpg','cybersecurity-public.jpg','interpersonal-skills-public.jpg','problem-solving-public.jpg','english-b1-public.jpg'];
for (const preview of previews) await readFile(`assets/previews/${preview}`);
console.log(`Built static portfolio. Verified ${new Set(localLinks).size} linked assets, ${pdfs.length} PDFs and ${previews.length} previews.`);
