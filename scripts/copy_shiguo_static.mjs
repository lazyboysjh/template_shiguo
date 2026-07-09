import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const src = path.join(root, 'src/shiguo/ui');
const dist = path.join(root, 'dist/shiguo/ui');

for (const sub of ['cover', 'status', 'preview']) {
  const from = path.join(src, sub, 'index.html');
  const toDir = path.join(dist, sub);
  fs.mkdirSync(toDir, { recursive: true });
  if (fs.existsSync(from)) {
    fs.copyFileSync(from, path.join(toDir, 'index.html'));
    console.log(`copied ${sub}/index.html`);
  }
}
