import { PRODUCTS } from '../src/data/products';
import fs from 'fs';
import path from 'path';

const pfProducts = PRODUCTS.filter(p => p.specs && (p.specs['Reference URL'] || p.specs['Pepperfry Product ID'] || p.specs['Pepperfry Reference']));

console.log(`Checking ${pfProducts.length} Pepperfry products...\n`);

let issueCount = 0;

pfProducts.forEach((p, idx) => {
  console.log(`[${idx + 1}/${pfProducts.length}] ${p.id} - ${p.name} (${p.subcategory})`);
  
  // 1. URL check
  const url = p.specs['Reference URL'];
  const pId = p.specs['Pepperfry Product ID'];
  const pRef = p.specs['Pepperfry Reference'];
  
  if (!url) {
    console.error(`  FAIL: Missing Reference URL`);
    issueCount++;
  } else if (!url.startsWith('https://www.pepperfry.com/product/')) {
    console.error(`  FAIL: Invalid URL format: ${url}`);
    issueCount++;
  } else {
    console.log(`  URL: ${url}`);
  }
  
  // 2. Pricing & Discount check
  if (!p.price || p.price <= 0) {
    console.error(`  FAIL: Invalid price: ${p.price}`);
    issueCount++;
  }
  if (!p.originalPrice || p.originalPrice < p.price) {
    console.warn(`  WARNING: originalPrice (${p.originalPrice}) is less than or equal to price (${p.price})`);
  } else {
    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    console.log(`  Price: ₹${p.price.toLocaleString('en-IN')} | MRP: ₹${p.originalPrice.toLocaleString('en-IN')} | Calculated Discount: ${discount}%`);
  }
  
  // 3. Materials
  if (!p.materials || p.materials.length === 0) {
    console.error(`  FAIL: Missing materials`);
    issueCount++;
  } else {
    console.log(`  Materials: ${p.materials.join(', ')}`);
  }
  
  // 4. Dimensions consistency
  console.log(`  Dimensions:`);
  p.dimensions.forEach(d => {
    console.log(`    - ${d.label}: ${d.value}`);
    // Check metric / imperial consistency if both exist in string e.g. "XX cm (YY in)" or similar
    const cmMatch = d.value.match(/([\d\.]+)\s*(?:cm|CM)/);
    const inMatch = d.value.match(/([\d\.]+)\s*(?:in|inches|inch|Inches|IN)/i);
    if (cmMatch && inMatch) {
      const cmVal = parseFloat(cmMatch[1]);
      const inVal = parseFloat(inMatch[1]);
      const expectedIn = cmVal / 2.54;
      const diff = Math.abs(expectedIn - inVal);
      if (diff > 0.8) { // allowing minor rounding
        console.warn(`    WARNING: Dimension mismatch for ${d.label}: ${cmVal} cm vs ${inVal} in (diff ${diff.toFixed(2)})`);
      }
    }
  });
  
  // 5. Warranty & Specs
  console.log(`  Warranty: ${p.warranty}`);
  console.log(`  Specs count: ${Object.keys(p.specs).length}`);
  
  // 6. Images
  console.log(`  Main Image: ${p.image}`);
  console.log(`  Gallery: ${p.gallery.join(', ')}`);
  
  console.log('');
});

console.log(`Audit complete. Issues found: ${issueCount}`);

