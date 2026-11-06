import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';

const bedsProducts = PRODUCTS.filter(p => p.subcategory === 'Beds and Wardrobe');
console.log('=== Beds & Wardrobe Products Integration Verification ===');
console.log('Total Beds & Wardrobe Products in PRODUCTS:', bedsProducts.length);

let brokenImages = 0;

bedsProducts.forEach((p, idx) => {
  console.log(`\nProduct [${idx + 1}]: ${p.name}`);
  console.log(`  ID: ${p.id}`);
  console.log(`  Category: ${p.category} | Subcategory: ${p.subcategory}`);
  console.log(`  Price: ₹${p.price.toLocaleString('en-IN')} (MRP: ₹${p.originalPrice?.toLocaleString('en-IN')})`);
  console.log(`  Rating: ${p.rating} (${p.reviewsCount} reviews) | Badge: ${p.badge || 'None'}`);
  console.log(`  Pepperfry Ref: ${p.specs['Pepperfry Reference']}`);
  console.log(`  Pepperfry ID: ${p.specs['Pepperfry Product ID']}`);
  console.log(`  Reference URL: ${p.specs['Reference URL']}`);
  console.log(`  Primary Image: ${p.image}`);
  
  const imgPublicPath = path.join(process.cwd(), 'public', p.image);
  const imgDistPath = path.join(process.cwd(), 'dist', p.image);
  const existsPublic = fs.existsSync(imgPublicPath);
  const existsDist = fs.existsSync(imgDistPath);
  
  if (!existsPublic) {
    console.error(`  ERROR: Public image missing: ${imgPublicPath}`);
    brokenImages++;
  }
  if (!existsDist) {
    console.error(`  ERROR: Dist image missing: ${imgDistPath}`);
    brokenImages++;
  }
  
  p.gallery.forEach((g, gIdx) => {
    const gPub = path.join(process.cwd(), 'public', g);
    const gDst = path.join(process.cwd(), 'dist', g);
    if (!fs.existsSync(gPub) || !fs.existsSync(gDst)) {
      console.error(`  ERROR: Gallery image missing: ${g}`);
      brokenImages++;
    } else {
      console.log(`  Gallery [${gIdx + 1}]: ${g} (Verified in public & dist)`);
    }
  });

  console.log(`  Variants (${p.variants.length}): ${p.variants.map(v => v.name).join(', ')}`);
  console.log(`  Dimensions (${p.dimensions.length}): ${p.dimensions.map(d => `${d.label}: ${d.value}`).join('; ')}`);
  console.log(`  Warranty: ${p.warranty}`);
  console.log(`  Lead Time: ${p.leadTime}`);
});

console.log('\n=== Broken Image Check ===');
console.log('Total Broken Images:', brokenImages);

console.log('\n=== Subcategory Metadata Check ===');
console.log('FURNITURE_SUBCATEGORIES includes Beds and Wardrobe:', FURNITURE_SUBCATEGORIES.includes('Beds and Wardrobe'));
console.log('Metadata:', FURNITURE_CATEGORIES_METADATA['Beds and Wardrobe']);

console.log('\n=== Search & Filter Simulation ===');
// Filter by subcategory
const filtered = PRODUCTS.filter(p => p.subcategory === 'Beds and Wardrobe');
console.log('Subcategory filter test count:', filtered.length);

// Sort by price-low
const sortedLow = [...filtered].sort((a, b) => a.price - b.price);
console.log('Lowest price bed/wardrobe:', sortedLow[0].name, '₹' + sortedLow[0].price);

// Sort by price-high
const sortedHigh = [...filtered].sort((a, b) => b.price - a.price);
console.log('Highest price bed/wardrobe:', sortedHigh[0].name, '₹' + sortedHigh[0].price);

// Sort by rating
const sortedRating = [...filtered].sort((a, b) => b.rating - a.rating);
console.log('Highest rated bed/wardrobe:', sortedRating[0].name, sortedRating[0].rating + '★');

