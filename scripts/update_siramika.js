import fs from 'fs';

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const target = `id: 'siramika-sheesham-4-seater',
    name: 'Odessy Siramika Solid Sheesham 4-Seater Dining Set',
    tagline: 'Mudramark Inspired Handcrafted Solid Rosewood with Classic Slatted Chairs',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 47499,
    originalPrice: 71999,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 52,
    badge: 'Handcrafted Sheesham',
    isBestSeller: true,
    image: '/products/dining-table-siramika-sheesham-4-seater.webp',
    gallery: [
      '/products/dining-table-siramika-sheesham-4-seater.webp',
      '/products/dining-table-siramika-sheesham-4-seater-env.webp'
    ]`;

const replacement = `id: 'siramika-sheesham-4-seater',
    name: 'Odessy Siramika Solid Sheesham 4-Seater Dining Set',
    tagline: 'Mudramark Inspired Handcrafted Solid Rosewood with Classic Slatted Chairs',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 47499,
    originalPrice: 71999,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 52,
    badge: 'Handcrafted Sheesham',
    isBestSeller: true,
    image: '/products/dining-table-siramika-sheesham-4-seater.jpeg',
    gallery: [
      '/products/dining-table-siramika-sheesham-4-seater.jpeg',
      '/products/dining-table-siramika-sheesham-4-seater-env.jpeg'
    ]`;

const isCrlf = content.includes('\r\n');
const searchString = isCrlf ? target.replace(/\n/g, '\r\n') : target;
const replaceString = isCrlf ? replacement.replace(/\n/g, '\r\n') : replacement;

if (content.includes(searchString)) {
  content = content.replace(searchString, replaceString);
  fs.writeFileSync('src/data/products.ts', content, 'utf-8');
  console.log('Successfully updated Siramika in src/data/products.ts!');
} else {
  console.error('Target not found!');
  process.exit(1);
}

