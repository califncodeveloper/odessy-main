import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';

console.log('==============================================');
console.log('       ODESSY CATALOG FULL AUDIT SUITE        ');
console.log('==============================================\n');

console.log(`Total Products: ${PRODUCTS.length}`);
console.log(`FURNITURE_SUBCATEGORIES Count: ${FURNITURE_SUBCATEGORIES.length}`);
console.log(`FURNITURE_CATEGORIES_METADATA Count: ${Object.keys(FURNITURE_CATEGORIES_METADATA).length}`);

// 1. Check Subcategory Matching
console.log('\n--- Category Breakdown ---');
const categoryCounts: Record<string, number> = {};
const categoryProducts: Record<string, typeof PRODUCTS> = {};

PRODUCTS.forEach(p => {
  const cat = p.category === 'furniture' ? p.subcategory : p.category;
  categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
  if (!categoryProducts[cat]) categoryProducts[cat] = [];
  categoryProducts[cat].push(p);
});

console.log('Furniture Subcategories (14 expected):');
FURNITURE_SUBCATEGORIES.forEach(sub => {
  const count = categoryCounts[sub] || 0;
  const meta = FURNITURE_CATEGORIES_METADATA[sub];
  console.log(`  - [${count > 0 ? 'PASS' : 'FAIL'}] ${sub}: ${count} products (Metadata: ${meta ? 'Yes' : 'Missing'})`);
});

const otherCats = Object.keys(categoryCounts).filter(c => !FURNITURE_SUBCATEGORIES.includes(c as any));
console.log('\nOther Categories:');
otherCats.forEach(c => {
  console.log(`  - ${c}: ${categoryCounts[c]} products`);
});

// 2. Duplicate IDs and Names
console.log('\n--- Duplicate ID & Name Check ---');
const idMap = new Map<string, string>();
const dupIds: { id: string; original: string; duplicate: string }[] = [];
PRODUCTS.forEach(p => {
  if (idMap.has(p.id)) {
    dupIds.push({ id: p.id, original: idMap.get(p.id)!, duplicate: p.name });
  } else {
    idMap.set(p.id, p.name);
  }
});
if (dupIds.length === 0) {
  console.log('  PASS: 0 duplicate Product IDs found.');
} else {
  console.error(`  FAIL: ${dupIds.length} duplicate Product IDs found:`, dupIds);
}

const nameMap = new Map<string, string>();
const dupNames: { name: string; id1: string; id2: string }[] = [];
PRODUCTS.forEach(p => {
  if (nameMap.has(p.name.toLowerCase())) {
    dupNames.push({ name: p.name, id1: nameMap.get(p.name.toLowerCase())!, id2: p.id });
  } else {
    nameMap.set(p.name.toLowerCase(), p.id);
  }
});
if (dupNames.length === 0) {
  console.log('  PASS: 0 duplicate Product Names found.');
} else {
  console.warn(`  WARNING: ${dupNames.length} duplicate Product Names found:`, dupNames);
}

// 3. Newly Integrated (Pepperfry) vs Original Products
console.log('\n--- Original vs Newly Integrated Breakdown ---');
const pepperfryProducts: typeof PRODUCTS = [];
const originalProducts: typeof PRODUCTS = [];

PRODUCTS.forEach(p => {
  const hasPfSpec = p.specs && (p.specs['Reference URL'] || p.specs['Pepperfry Product ID'] || p.specs['Pepperfry Reference']);
  if (hasPfSpec) {
    pepperfryProducts.push(p);
  } else {
    originalProducts.push(p);
  }
});

console.log(`Original Products: ${originalProducts.length}`);
console.log(`Newly Integrated (Pepperfry) Products: ${pepperfryProducts.length}`);

const pfBySubcat: Record<string, number> = {};
pepperfryProducts.forEach(p => {
  pfBySubcat[p.subcategory] = (pfBySubcat[p.subcategory] || 0) + 1;
});
console.log('Pepperfry Products per subcategory:');
Object.entries(pfBySubcat).forEach(([cat, cnt]) => {
  console.log(`  - ${cat}: ${cnt}`);
});

// 4. Missing required fields check
console.log('\n--- Product Data Integrity Check ---');
let missingFieldsCount = 0;
PRODUCTS.forEach(p => {
  const missing: string[] = [];
  if (!p.id) missing.push('id');
  if (!p.name) missing.push('name');
  if (!p.category) missing.push('category');
  if (!p.price || p.price <= 0) missing.push('price');
  if (!p.image) missing.push('image');
  if (!p.gallery || p.gallery.length === 0) missing.push('gallery');
  if (!p.description) missing.push('description');
  if (!p.features || p.features.length === 0) missing.push('features');
  if (!p.specs || Object.keys(p.specs).length === 0) missing.push('specs');
  if (!p.dimensions || p.dimensions.length === 0) missing.push('dimensions');
  if (!p.materials || p.materials.length === 0) missing.push('materials');
  if (!p.variants || p.variants.length === 0) missing.push('variants');
  if (!p.warranty) missing.push('warranty');
  if (missing.length > 0) {
    console.error(`  FAIL [${p.id}]: Missing fields: ${missing.join(', ')}`);
    missingFieldsCount++;
  }
});
if (missingFieldsCount === 0) {
  console.log('  PASS: All products contain all required schema fields.');
} else {
  console.error(`  FAIL: ${missingFieldsCount} products have missing schema fields.`);
}

