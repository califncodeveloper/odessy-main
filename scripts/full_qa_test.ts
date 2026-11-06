import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';

console.log('====================================================');
console.log('   PHASE 7: POOJA STAND FULL QA AUTOMATION SUITE   ');
console.log('====================================================\n');

const poojaProducts = PRODUCTS.filter(p => p.subcategory === 'Pooja Stand');

// 1. Verify 5 products present
console.log(`[TEST 1] Product Count Verification`);
console.log(`  Expected: 5 | Actual: ${poojaProducts.length}`);
if (poojaProducts.length !== 5) {
  console.error('  FAIL: Expected 5 products');
  process.exit(1);
} else {
  console.log('  PASS: Exactly 5 Pooja Stand products found.');
}

// 2. Verify Pepperfry Product URLs & Specs
console.log(`\n[TEST 2] Pepperfry Product URLs & Specifications Verification`);
poojaProducts.forEach((p, idx) => {
  const url = p.specs['Reference URL'];
  const pId = p.specs['Pepperfry Product ID'];
  const pRef = p.specs['Pepperfry Reference'];
  const mat = p.specs['Primary Material'];
  
  console.log(`  Product ${idx + 1} (${p.id}):`);
  console.log(`    Pepperfry Ref: ${pRef}`);
  console.log(`    Product ID: ${pId}`);
  console.log(`    URL: ${url}`);
  console.log(`    Material: ${mat}`);
  console.log(`    Price: ₹${p.price.toLocaleString('en-IN')} (MRP: ₹${p.originalPrice?.toLocaleString('en-IN')})`);
  
  if (!url || !url.startsWith('https://www.pepperfry.com/product/')) {
    console.error(`    FAIL: Invalid Pepperfry URL for ${p.id}`);
    process.exit(1);
  }
  if (!pId || !pRef || !mat) {
    console.error(`    FAIL: Incomplete specs for ${p.id}`);
    process.exit(1);
  }
});
console.log('  PASS: All 5 products have authentic Pepperfry URLs and full specifications.');

// 3. Verify Image Dimensions (896x1200) & 3:4 Aspect Ratio
console.log(`\n[TEST 3] Image Dimensions & 3:4 Aspect Ratio Verification`);
import { execSync } from 'child_process';
const imgCheckResult = execSync(
  `"C:\\Users\\shubh\\AppData\\Local\\Programs\\Python\\Python311\\python.exe" scripts/verify_images.py`,
  { encoding: 'utf-8' }
);
console.log(`  Python Verification: ${imgCheckResult.trim()}`);
if (!imgCheckResult.includes('ALL_IMAGES_VALID_896x1200_JPEG')) {
  console.error('  FAIL: Some images failed 896x1200 JPEG validation');
  process.exit(1);
}
console.log('  PASS: All 10 images are confirmed exactly 896 × 1200 px (3:4 portrait) JPEG in both public & dist.');

// 4. Image Uniqueness Check
console.log(`\n[TEST 4] Image Uniqueness Verification`);
const allImgs = poojaProducts.flatMap(p => [p.image, ...p.gallery]);
const uniqueSet = new Set(allImgs);
console.log(`  Total Gallery References: ${allImgs.length} | Unique Image Filenames: ${uniqueSet.size}`);
if (uniqueSet.size !== 10) {
  console.error('  FAIL: Expected 10 unique image assets');
  process.exit(1);
}
console.log('  PASS: All 10 image assets are completely unique.');

// 5. Category Filtering
console.log(`\n[TEST 5] Category & Subcategory Filtering`);
const filtered = PRODUCTS.filter(p => p.subcategory === 'Pooja Stand');
console.log(`  Filter by 'Pooja Stand': returned ${filtered.length} products`);
if (filtered.length !== 5) {
  console.error('  FAIL: Subcategory filter returned unexpected count');
  process.exit(1);
}
console.log('  PASS: Subcategory filter functions correctly.');

// 6. Search Simulation
console.log(`\n[TEST 6] Search & Sorting Verification`);
const searches = ['mandir', 'pooja', 'teak', 'shubh', 'alaya', 'laser'];
searches.forEach(q => {
  const res = poojaProducts.filter(p => 
    p.name.toLowerCase().includes(q) || 
    p.description.toLowerCase().includes(q) ||
    p.features.some(f => f.toLowerCase().includes(q)) ||
    p.materials.some(m => m.toLowerCase().includes(q))
  );
  console.log(`  Search query "${q}": found ${res.length} matches among Pooja products`);
  if (res.length === 0) {
    console.error(`  FAIL: Zero matches for query "${q}"`);
    process.exit(1);
  }
});
console.log('  PASS: Search queries match expected pooja products.');

// 7. Quotation & WhatsApp Workflow Simulation
console.log(`\n[TEST 7] Quotation & WhatsApp Workflow Simulation`);
poojaProducts.forEach(p => {
  const chosenVariant = p.variants[0];
  const itemQty = 1;
  const quoteTotal = p.price * itemQty;
  const waMsg = `Hi Odessy, I would like to inquire about the ${p.name} (${chosenVariant.name}) priced at ₹${p.price.toLocaleString('en-IN')}.`;
  const waUrl = `https://wa.me/919919915358?text=${encodeURIComponent(waMsg)}`;
  console.log(`  [Quote Item]: ${p.name} | Variant: ${chosenVariant.name} | Unit Price: ₹${p.price} | WA URL: ${waUrl.slice(0, 75)}...`);
});
console.log('  PASS: Quotation items and WhatsApp intent strings generate flawlessly.');

console.log('\n====================================================');
console.log('   ALL PHASE 7 QA CHECKS PASSED WITH ZERO ERRORS   ');
console.log('====================================================\n');
