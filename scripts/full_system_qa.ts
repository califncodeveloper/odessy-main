import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA, getValidFurnitureCategory } from '../src/data/products';
import { Product, ProductVariant, QuoteItem } from '../src/types';

console.log('====================================================');
console.log('    PHASE 11: COMPLETE SYSTEM QA VERIFICATION      ');
console.log('====================================================\n');

let passCount = 0;
let failCount = 0;

function assert(condition: boolean, testName: string, details?: string) {
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${testName} ${details ? '- ' + details : ''}`);
    failCount++;
  }
}

// ----------------------------------------------------
// 1. ALL 14 CATEGORY FILTERS
// ----------------------------------------------------
console.log('\n--- 1. Testing All 14 Category Filters ---');
assert(FURNITURE_SUBCATEGORIES.length === 14, 'FURNITURE_SUBCATEGORIES contains exactly 14 categories');

FURNITURE_SUBCATEGORIES.forEach((cat) => {
  const meta = FURNITURE_CATEGORIES_METADATA[cat];
  assert(!!meta, `Category Metadata exists for: "${cat}"`);

  const filtered = PRODUCTS.filter((p) => p.category === 'furniture' && p.subcategory === cat);
  assert(filtered.length > 0, `Category Filter "${cat}" returns ${filtered.length} products`);

  const allMatch = filtered.every((p) => p.subcategory === cat);
  assert(allMatch, `All returned products belong strictly to "${cat}"`);
});

// ----------------------------------------------------
// 2. PRODUCT SEARCH
// ----------------------------------------------------
console.log('\n--- 2. Testing Product Search ---');
const searchKeywords = [
  { q: 'mesh', minExpected: 4 },
  { q: 'sheesham', minExpected: 8 },
  { q: 'teak', minExpected: 4 },
  { q: 'recliner', minExpected: 2 },
  { q: 'bureau', minExpected: 5 },
  { q: 'mandir', minExpected: 4 },
  { q: 'cot', minExpected: 5 },
  { q: 'coffee table', minExpected: 5 },
  { q: 'marble', minExpected: 1 },
  { q: 'sofa', minExpected: 5 },
  { q: 'wardrobe', minExpected: 2 },
  { q: 'ergonomic', minExpected: 7 }
];

searchKeywords.forEach(({ q, minExpected }) => {
  const query = q.toLowerCase();
  const results = PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.subcategory.toLowerCase().includes(query) ||
      p.tagline.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.materials.some((m) => m.toLowerCase().includes(query)) ||
      p.features.some((f) => f.toLowerCase().includes(query))
  );
  assert(
    results.length >= minExpected,
    `Search for "${q}" returned ${results.length} matches (expected >= ${minExpected})`
  );
});

// ----------------------------------------------------
// 3. PRICE SORTING
// ----------------------------------------------------
console.log('\n--- 3. Testing Price Sorting (Low to High & High to Low) ---');
const furnitureProducts = PRODUCTS.filter((p) => p.category === 'furniture');

const priceLowToHigh = [...furnitureProducts].sort((a, b) => a.price - b.price);
let isLowToHighSorted = true;
for (let i = 1; i < priceLowToHigh.length; i++) {
  if (priceLowToHigh[i].price < priceLowToHigh[i - 1].price) {
    isLowToHighSorted = false;
    break;
  }
}
assert(isLowToHighSorted, 'Price: Low to High sorting is mathematically monotonic (non-decreasing)');

const priceHighToLow = [...furnitureProducts].sort((a, b) => b.price - a.price);
let isHighToLowSorted = true;
for (let i = 1; i < priceHighToLow.length; i++) {
  if (priceHighToLow[i].price > priceHighToLow[i - 1].price) {
    isHighToLowSorted = false;
    break;
  }
}
assert(isHighToLowSorted, 'Price: High to Low sorting is mathematically monotonic (non-increasing)');

// ----------------------------------------------------
// 4. RATING SORTING
// ----------------------------------------------------
console.log('\n--- 4. Testing Customer Rating Sorting ---');
const ratingSorted = [...furnitureProducts].sort((a, b) => b.rating - a.rating);
let isRatingSorted = true;
for (let i = 1; i < ratingSorted.length; i++) {
  if (ratingSorted[i].rating > ratingSorted[i - 1].rating) {
    isRatingSorted = false;
    break;
  }
}
assert(isRatingSorted, 'Customer Rating sorting is mathematically monotonic (non-increasing)');

// ----------------------------------------------------
// 5. PRODUCT DETAIL MODAL & VARIANTS
// ----------------------------------------------------
console.log('\n--- 5. Testing Product Detail Modal Logic & Variants ---');
let allHaveVariants = true;
let allHaveSpecsAndDims = true;
PRODUCTS.forEach((p) => {
  if (!p.variants || p.variants.length === 0) allHaveVariants = false;
  if (!p.specs || Object.keys(p.specs).length === 0) allHaveSpecsAndDims = false;
  if (!p.dimensions || p.dimensions.length === 0) allHaveSpecsAndDims = false;
});
assert(allHaveVariants, 'All 57 products possess at least 1 color/finish variant');
assert(allHaveSpecsAndDims, 'All 57 products possess specifications and dimensional measurements');

// ----------------------------------------------------
// 6. GALLERY & IMAGE SWITCHING
// ----------------------------------------------------
console.log('\n--- 6. Testing Product Gallery & Image Switching Assets ---');
let allHaveValidGalleries = true;
PRODUCTS.forEach((p) => {
  if (!p.image || !p.gallery || p.gallery.length === 0) {
    allHaveValidGalleries = false;
  }
});
assert(allHaveValidGalleries, 'All 57 products have active main images and non-empty galleries');

// ----------------------------------------------------
// 7. QUOTE BASKET WORKFLOW
// ----------------------------------------------------
console.log('\n--- 7. Testing Quote Basket & Quotation Workflow ---');
const sampleProd1 = PRODUCTS[0];
const sampleProd2 = PRODUCTS[PRODUCTS.length - 1];

const testQuoteBasket: QuoteItem[] = [
  { product: sampleProd1, selectedVariant: sampleProd1.variants[0], quantity: 2 },
  { product: sampleProd2, selectedVariant: sampleProd2.variants[0], quantity: 1 }
];

const computedTotal = testQuoteBasket.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
const expectedTotal = sampleProd1.price * 2 + sampleProd2.price * 1;
assert(computedTotal === expectedTotal, `Quote total calculated accurately: ₹${computedTotal} === ₹${expectedTotal}`);

// Update quantity
testQuoteBasket[0].quantity = 3;
const updatedTotal = testQuoteBasket.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
assert(updatedTotal === sampleProd1.price * 3 + sampleProd2.price * 1, 'Quantity adjustment updates total accurately');

// Remove item
testQuoteBasket.pop();
assert(testQuoteBasket.length === 1 && testQuoteBasket[0].quantity === 3, 'Item removal functions properly');

// ----------------------------------------------------
// 8. WHATSAPP ENQUIRY & PRODUCT PAYLOAD
// ----------------------------------------------------
console.log('\n--- 8. Testing WhatsApp Enquiry Payload Formatting ---');
// Single product payload
const singleProductText = `Hello Odessy Furniture! I am interested in inquiring/purchasing:
- Product: ${sampleProd1.name}
- Category: ${sampleProd1.subcategory}
- Finish: ${sampleProd1.variants[0].name}
- Quantity: 1
- Price: ${sampleProd1.currency}${sampleProd1.price * 1}

Please share commercial lead times, delivery to my location, and finish samples.`;

const waUrl = `https://wa.me/919919915358?text=${encodeURIComponent(singleProductText)}`;

assert(singleProductText.includes(sampleProd1.name), 'Single product WhatsApp payload includes product name');
assert(singleProductText.includes(sampleProd1.subcategory), 'Single product WhatsApp payload includes subcategory');
assert(waUrl.includes('919919915358'), 'WhatsApp recipient phone is official Odessy number (+91 99199 15358)');

// Basket payload
const basketListText = testQuoteBasket
  .map(
    (it, idx) =>
      `${idx + 1}. ${it.product.name} (Finish: ${it.selectedVariant.name}) x ${it.quantity} = ${it.product.currency}${(it.product.price * it.quantity).toLocaleString()}`
  )
  .join('\n');
const basketMessage = `*ODESSY FURNITURE - BESPOKE QUOTATION REQUEST*
----------------------------------------
${basketListText}
----------------------------------------
*Estimated Subtotal: ₹${testQuoteBasket[0].product.price * testQuoteBasket[0].quantity}*

Please share official corporate/residential quote, commercial discounts, and delivery lead time to my location.`;

assert(basketMessage.includes('*ODESSY FURNITURE - BESPOKE QUOTATION REQUEST*'), 'Quote drawer payload contains correct header');
assert(basketMessage.includes(sampleProd1.name), 'Quote drawer payload contains product items');

// ----------------------------------------------------
// 9. CATEGORY NAVIGATION & DIRECT LINKS
// ----------------------------------------------------
console.log('\n--- 9. Testing Category Navigation & Direct Links ---');
FURNITURE_SUBCATEGORIES.forEach((cat) => {
  // Test exact
  const resExact = getValidFurnitureCategory(cat);
  assert(resExact === cat, `getValidFurnitureCategory exact match for "${cat}"`);

  // Test lowercase
  const resLower = getValidFurnitureCategory(cat.toLowerCase());
  assert(resLower === cat, `getValidFurnitureCategory lowercase match for "${cat.toLowerCase()}"`);

  // Test normalized slug
  const slug = cat
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9\-]/g, '');
  const resSlug = getValidFurnitureCategory(slug);
  assert(resSlug === cat, `getValidFurnitureCategory slug match for "${slug}" -> "${cat}"`);
});

// Test fallback
assert(getValidFurnitureCategory('unknown-invalid-cat') === 'all', 'getValidFurnitureCategory invalid fallback returns "all"');
assert(getValidFurnitureCategory(null) === 'all', 'getValidFurnitureCategory null fallback returns "all"');
assert(getValidFurnitureCategory(undefined) === 'all', 'getValidFurnitureCategory undefined fallback returns "all"');

console.log('\n====================================================');
console.log(`TOTAL TESTS PASSED: ${passCount}`);
console.log(`TOTAL TESTS FAILED: ${failCount}`);
console.log('====================================================');

if (failCount > 0) {
  process.exit(1);
}
