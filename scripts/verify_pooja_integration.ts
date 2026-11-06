import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../src/data/products';
import fs from 'fs';
import path from 'path';

const poojaProducts = PRODUCTS.filter(p => p.subcategory === 'Pooja Stand');
console.log('=== Pooja Stand Products Integration Verification ===');
console.log('Total Pooja Stand Products in PRODUCTS:', poojaProducts.length);

let brokenImages = 0;
const uniqueImages = new Set<string>();

poojaProducts.forEach((p, idx) => {
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
    uniqueImages.add(g);
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

console.log('\n=== Image Statistics ===');
console.log('Total Gallery Images Checked:', poojaProducts.length * 2);
console.log('Unique Image Assets:', uniqueImages.size);
console.log('Total Broken Images:', brokenImages);

console.log('\n=== Subcategory Metadata Check ===');
console.log('FURNITURE_SUBCATEGORIES includes Pooja Stand:', FURNITURE_SUBCATEGORIES.includes('Pooja Stand'));
console.log('Metadata:', FURNITURE_CATEGORIES_METADATA['Pooja Stand']);

console.log('\n=== Search & Filter Simulation ===');
// Filter by subcategory
const filtered = PRODUCTS.filter(p => p.subcategory === 'Pooja Stand');
console.log('Subcategory filter test count:', filtered.length);

// Sort by price-low
const sortedLow = [...filtered].sort((a, b) => a.price - b.price);
console.log('Lowest price pooja stand:', sortedLow[0].name, '₹' + sortedLow[0].price);

// Sort by price-high
const sortedHigh = [...filtered].sort((a, b) => b.price - a.price);
console.log('Highest price pooja stand:', sortedHigh[0].name, '₹' + sortedHigh[0].price);

// Sort by rating
const sortedRating = [...filtered].sort((a, b) => b.rating - a.rating);
console.log('Highest rated pooja stand:', sortedRating[0].name, sortedRating[0].rating + '★');

// Search simulation
const searchQuery = 'mandir';
const searchResults = PRODUCTS.filter(p => 
  p.name.toLowerCase().includes(searchQuery) || 
  p.description.toLowerCase().includes(searchQuery) ||
  p.tagline.toLowerCase().includes(searchQuery)
);
console.log(`Search for "${searchQuery}": found ${searchResults.length} products total.`);

