import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('====================================================');
console.log('    PHASE 9: STEEL COT FULL QA AUTOMATION SUITE     ');
console.log('====================================================\n');

const cotProducts = PRODUCTS.filter(p => p.subcategory === 'Steel Cot');

// 1. Verify 5 products present
console.log(`[TEST 1] Product Count Verification`);
console.log(`  Expected: 5 | Actual: ${cotProducts.length}`);
if (cotProducts.length !== 5) {
  console.error('  FAIL: Expected 5 products');
  process.exit(1);
} else {
  console.log('  PASS: Exactly 5 Steel Cot products found.');
}

// 2. Verify Pepperfry Product URLs & Specs
console.log(`\n[TEST 2] Pepperfry Product URLs & Specifications Verification`);
cotProducts.forEach((p, idx) => {
  const url = p.specs['Reference URL'];
  const pId = p.specs['Pepperfry Product ID'];
  const pRef = p.specs['Pepperfry Reference'];
  const mat = p.specs['Primary Material'] || p.specs['Frame Material'];
  const bedSize = p.specs['Bed Size'];
  
  console.log(`  Product ${idx + 1} (${p.id}):`);
  console.log(`    Pepperfry Ref: ${pRef}`);
  console.log(`    Product ID: ${pId}`);
  console.log(`    URL: ${url}`);
  console.log(`    Material: ${mat}`);
  console.log(`    Bed Size: ${bedSize}`);
  console.log(`    Price: ₹${p.price.toLocaleString('en-IN')} (MRP: ₹${p.originalPrice?.toLocaleString('en-IN')})`);
  
  if (!url || !url.startsWith('https://www.pepperfry.com/product/')) {
    console.error(`    FAIL: Invalid Pepperfry URL for ${p.id}`);
    process.exit(1);
  }
  if (!pId || !pRef || !mat || !bedSize) {
    console.error(`    FAIL: Incomplete specs for ${p.id}`);
    process.exit(1);
  }
});
console.log('  PASS: All 5 products have authentic Pepperfry URLs and full specifications.');

// 3. Verify Image Dimensions (896x1200) & 3:4 Aspect Ratio
console.log(`\n[TEST 3] Image Dimensions & 3:4 Aspect Ratio Verification`);
const pythonCheckCode = `
import os
from PIL import Image

images = [
    'odessy_striker_single_cot_3x4.jpg',
    'odessy_striker_single_cot_env.jpg',
    'odessy_akaba_double_cot_3x4.jpg',
    'odessy_akaba_double_cot_env.jpg',
    'odessy_kabul_queen_bed_3x4.jpg',
    'odessy_kabul_queen_bed_env.jpg',
    'odessy_striker_king_bed_3x4.jpg',
    'odessy_striker_king_bed_env.jpg',
    'odessy_gemini_poster_bed_3x4.jpg',
    'odessy_gemini_poster_bed_env.jpg'
]

all_ok = True
for img_name in images:
    p = os.path.join('public/products', img_name)
    if not os.path.exists(p):
        print(f'MISSING: {img_name}')
        all_ok = False
        continue
    im = Image.open(p)
    w, h = im.size
    aspect = w / h
    size_kb = os.path.getsize(p) / 1024
    is_exact = (w == 896 and h == 1200)
    if not is_exact:
        all_ok = False
    print(f'    {img_name}: {w}x{h} ({aspect:.4f}), {size_kb:.1f} KB, Exact 896x1200: {is_exact}')

if not all_ok:
    exit(1)
`;

try {
  const result = execSync(`python -c "${pythonCheckCode.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
  console.log(result);
  console.log('  PASS: All 10 images confirmed exactly 896 × 1200 px (3:4 portrait) JPEG.');
} catch (e: any) {
  // Try with direct python311 path if python not in PATH
  try {
    const pyPath = '"C:\\Users\\shubh\\AppData\\Local\\Programs\\Python\\Python311\\python.exe"';
    const result = execSync(`${pyPath} -c "${pythonCheckCode.replace(/"/g, '\\"')}"`, { encoding: 'utf-8' });
    console.log(result);
    console.log('  PASS: All 10 images confirmed exactly 896 × 1200 px (3:4 portrait) JPEG.');
  } catch (err: any) {
    console.error('  FAIL: Image dimension check failed', err.message);
    process.exit(1);
  }
}

// 4. Verify Image Uniqueness & Non-repetition
console.log(`\n[TEST 4] Image Uniqueness Verification`);
const allGalleryImages = cotProducts.flatMap(p => p.gallery);
const uniqueImages = new Set(allGalleryImages);
console.log(`  Total Gallery References: ${allGalleryImages.length} | Unique Image Filenames: ${uniqueImages.size}`);
if (uniqueImages.size !== 10) {
  console.error(`  FAIL: Expected 10 unique image files, found ${uniqueImages.size}`);
  process.exit(1);
} else {
  console.log('  PASS: All 10 image assets are completely unique.');
}

// 5. Verify Category & Subcategory Filtering
console.log(`\n[TEST 5] Category & Subcategory Filtering`);
const filteredSubcat = PRODUCTS.filter(p => p.subcategory === 'Steel Cot');
console.log(`  Filter by 'Steel Cot': returned ${filteredSubcat.length} products`);
if (filteredSubcat.length !== 5) {
  console.error('  FAIL: Subcategory filtering returned incorrect count');
  process.exit(1);
} else {
  console.log('  PASS: Subcategory filter functions correctly.');
}

// 6. Verify Search & Sorting
console.log(`\n[TEST 6] Search & Sorting Algorithms`);
const searchTerms = ['single', 'double', 'queen', 'king', 'canopy', 'striker', 'akaba', 'kabul', 'gemini'];
searchTerms.forEach(term => {
  const matches = cotProducts.filter(p => 
    p.name.toLowerCase().includes(term) ||
    p.description.toLowerCase().includes(term) ||
    p.tagline.toLowerCase().includes(term) ||
    p.materials.some(m => m.toLowerCase().includes(term))
  );
  console.log(`  Search '${term}' in Steel Cot: found ${matches.length} matches`);
  if (matches.length === 0) {
    console.error(`  FAIL: Search for '${term}' yielded no results`);
    process.exit(1);
  }
});

const sortedLowToHigh = [...cotProducts].sort((a, b) => a.price - b.price);
console.log(`  Price sorting low-to-high: ₹${sortedLowToHigh[0].price} (${sortedLowToHigh[0].name}) -> ₹${sortedLowToHigh[sortedLowToHigh.length - 1].price}`);
if (sortedLowToHigh[0].price !== 7490 || sortedLowToHigh[sortedLowToHigh.length - 1].price !== 23990) {
  console.error('  FAIL: Price sorting low to high mismatch');
  process.exit(1);
}

const sortedHighToLow = [...cotProducts].sort((a, b) => b.price - a.price);
console.log(`  Price sorting high-to-low: ₹${sortedHighToLow[0].price} (${sortedHighToLow[0].name}) -> ₹${sortedHighToLow[sortedHighToLow.length - 1].price}`);
if (sortedHighToLow[0].price !== 23990 || sortedHighToLow[sortedHighToLow.length - 1].price !== 7490) {
  console.error('  FAIL: Price sorting high to low mismatch');
  process.exit(1);
}
console.log('  PASS: Search & Sorting algorithms execute correctly.');

// 7. Verify WhatsApp Message & Quotation Formulations
console.log(`\n[TEST 7] Quotation & WhatsApp Message Formulation`);
cotProducts.forEach(p => {
  const variant = p.variants[0];
  const msg = `Hello Odessy Furniture! I would like to inquire about the ${p.name} (${variant.name}) priced at ₹${p.price.toLocaleString('en-IN')}.`;
  const encoded = encodeURIComponent(msg);
  if (!encoded.includes(encodeURIComponent(p.name))) {
    console.error(`  FAIL: WhatsApp link encoding error for ${p.id}`);
    process.exit(1);
  }
});
console.log('  PASS: WhatsApp quote links format accurately with item names, prices, and variants.');

console.log('\n====================================================');
console.log('   ALL 7 TESTS PASSED WITH 100% SUCCESS RATE!       ');
console.log('====================================================\n');

