import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/products.ts', 'utf-8');

// Pattern to match products
const productRegex = /id:\s*'([^']+)'[\s\S]*?name:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'[\s\S]*?subcategory:\s*'([^']+)'[\s\S]*?image:\s*'([^']+)'[\s\S]*?gallery:\s*\[([\s\S]*?)\]/g;

const existingFiles = new Set(fs.readdirSync('public/products'));

const products = [];
let match;
while ((match = productRegex.exec(content)) !== null) {
  const [_, id, name, category, subcategory, image, galleryRaw] = match;
  const galleryMatches = galleryRaw.match(/'([^']+)'/g) || [];
  const gallery = galleryMatches.map(s => s.replace(/'/g, ''));
  products.push({ id, name, category, subcategory, image, gallery });
}

console.log(`Total products parsed: ${products.length}`);

const missing = [];
const present = [];

products.forEach(p => {
  const allImages = [p.image, ...p.gallery.filter(g => g !== p.image)];
  allImages.forEach(img => {
    const filename = path.basename(img);
    if (existingFiles.has(filename)) {
      present.push({ id: p.id, name: p.name, img, filename });
    } else {
      missing.push({ id: p.id, name: p.name, img, filename });
    }
  });
});

console.log(`Total images present: ${present.length}`);
console.log(`Total images MISSING: ${missing.length}`);

console.log('\n--- MISSING IMAGES BY PRODUCT ---');
const missingByProduct = {};
missing.forEach(m => {
  if (!missingByProduct[m.id]) missingByProduct[m.id] = { name: m.name, files: [] };
  missingByProduct[m.id].files.push(m.filename);
});

for (const [id, info] of Object.entries(missingByProduct)) {
  console.log(`${id} (${info.name}):\n  Missing: ${info.files.join(', ')}`);
}

console.log('\n--- ALL UNREFERENCED FILES IN public/products ---');
const referencedFiles = new Set();
const allMatchesInContent = content.match(/\/products\/[^'"]+/g) || [];
allMatchesInContent.forEach(m => referencedFiles.add(path.basename(m)));

const unreferenced = [];
existingFiles.forEach(f => {
  if (!fs.statSync(path.join('public/products', f)).isDirectory()) {
    if (!referencedFiles.has(f)) {
      unreferenced.push(f);
    }
  }
});

console.log(`Unreferenced files count: ${unreferenced.length}`);
unreferenced.sort().forEach(f => console.log('  ' + f));

