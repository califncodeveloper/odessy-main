import { PRODUCTS } from '../src/data/products';
import fs from 'fs';

fs.writeFileSync('scripts/products_dump.json', JSON.stringify(PRODUCTS, null, 2), 'utf-8');
console.log('Exported products to scripts/products_dump.json');

