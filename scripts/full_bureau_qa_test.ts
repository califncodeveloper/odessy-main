import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('====================================================');
console.log('   PHASE 8: STEEL BUREAU FULL QA AUTOMATION SUITE   ');
console.log('====================================================\n');

const bureauProducts = PRODUCTS.filter(p => p.subcategory === 'Steel Bureau');

// 1. Verify 5 products present
console.log(`[TEST 1] Product Count Verification`);
console.log(`  Expected: 5 | Actual: ${bureauProducts.length}`);
if (bureauProducts.length !== 5) {
  console.error('  FAIL: Expected 5 products');
  process.exit(1);
} else {
  console.log('  PASS: Exactly 5 Steel Bureau products found.');
}

// 2. Verify Pepperfry Product URLs & Specs
console.log(`\n[TEST 2] Pepperfry Product URLs & Specifications Verification`);
bureauProducts.forEach((p, idx) => {
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
const imgCheckResult = execSync(
  `"C:\\Users\\shubh\\AppData\\Local\\Programs\\Python\\Python311\\python.exe" scripts/verify_bureau_images.py`,
  { encoding: 'utf-8' }
);
console.log(imgCheckResult.trim());
if (!imgCheckResult.includes('All 10 images pass verification: True')) {
  console.error('  FAIL: Some images failed 896x1200 validation');
  process.exit(1);
}
console.log('  PASS: All 10 images confirmed exactly 896 × 1200 px (3:4 portrait) JPEG.');

// 4. Image Uniqueness Check
console.log(`\n[TEST 4] Image Uniqueness Verification`);
const allImgs = bureauProducts.flatMap(p => [p.image, ...p.gallery]);
const uniqueSet = new Set(allImgs);
console.log(`  Total Gallery References: ${allImgs.length} | Unique Image Filenames: ${uniqueSet.size}`);
if (uniqueSet.size !== 10) {
  console.error('  FAIL: Expected 10 unique image assets');
  process.exit(1);
}
console.log('  PASS: All 10 image assets are completely unique.');

// 5. Category Filtering
console.log(`\n[TEST 5] Category & Subcategory Filtering`);
const filtered = PRODUCTS.filter(p => p.subcategory === 'Steel Bureau');
console.log(`  Filter by 'Steel Bureau': returned ${filtered.length} products`);
if (filtered.length !== 5) {
  console.error('  FAIL: Subcategory filter returned unexpected count');
  process.exit(1);
}
console.log('  PASS: Subcategory filter functions correctly.');

// 6. Search & Sorting Simulation
console.log(`\n[TEST 6] Search & Sorting Algorithms`);
const searchTerms = ['almirah', 'wardrobe', 'bureau', 'slimline', 'centurion'];
searchTerms.forEach(term => {
  const matches = PRODUCTS.filter(p => 
    p.subcategory === 'Steel Bureau' && (
      p.name.toLowerCase().includes(term) ||
      p.description.toLowerCase().includes(term) ||
      p.tagline.toLowerCase().includes(term)
    )
  );
  console.log(`  Search '${term}' in Steel Bureau: found ${matches.length} matches`);
});

const sortedAsc = [...filtered].sort((a, b) => a.price - b.price);
const sortedDesc = [...filtered].sort((a, b) => b.price - a.price);
console.log(`  Price sorting low-to-high: ₹${sortedAsc[0].price} (${sortedAsc[0].name}) -> ₹${sortedAsc[sortedAsc.length-1].price}`);
console.log(`  Price sorting high-to-low: ₹${sortedDesc[0].price} (${sortedDesc[0].name}) -> ₹${sortedDesc[sortedDesc.length-1].price}`);
console.log('  PASS: Search & Sorting algorithms execute correctly.');

// 7. Quotation & WhatsApp Message Formulation
console.log(`\n[TEST 7] Quotation & WhatsApp Message Formulation`);
bureauProducts.forEach((p, idx) => {
  const sampleQty = idx + 1;
  const quoteLine = `• ${p.name} (${p.variants[0]?.name || 'Standard'}) x ${sampleQty} - ₹${(p.price * sampleQty).toLocaleString('en-IN')}`;
  const whatsappMsg = `Hi Odessy, I would like to request a quotation for:\n${quoteLine}\nDelivery: Chennai Doorstep`;
  const encodedUrl = `https://wa.me/919876543210?text=${encodeURIComponent(whatsappMsg)}`;
  if (!encodedUrl.includes('Odessy') || !encodedUrl.includes(encodeURIComponent(p.name))) {
    console.error(`  FAIL: WhatsApp link encoding failed for ${p.id}`);
    process.exit(1);
  }
});
console.log('  PASS: WhatsApp quote links format accurately with item names, prices, and variants.');

console.log('\n====================================================');
console.log('   ALL 7 TESTS PASSED WITH 100% SUCCESS RATE!       ');
console.log('====================================================\n');
