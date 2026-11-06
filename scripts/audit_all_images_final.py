import json
import os

with open('scripts/products_dump.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products in catalog: {len(products)}")
missing = 0
for p in products:
    img = p.get('image', '').lstrip('/')
    if not os.path.exists(os.path.join('public', img)):
        print(f"MISSING: {p['id']} -> {img}")
        missing += 1
    for g in p.get('gallery', []):
        gpath = g.lstrip('/')
        if not os.path.exists(os.path.join('public', gpath)):
            print(f"MISSING GALLERY: {p['id']} -> {gpath}")
            missing += 1

print(f"Audit Complete. Missing image files: {missing}")

