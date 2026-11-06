import json

with open('scripts/products_dump.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print(f"Total products: {len(products)}")

print("\n=== TARGET 1: ZEPHYR BED ===")
for p in products:
    if 'zephyr' in p.get('name', '').lower() or 'zephyr' in p.get('id', '').lower():
        print(json.dumps(p, indent=2))

print("\n=== TARGET 2: VERTA WARDROBE ===")
for p in products:
    if 'verta' in p.get('name', '').lower() or 'verta' in p.get('id', '').lower():
        print(json.dumps(p, indent=2))

print("\n=== TARGET 3: SOFAS ===")
sofas = [p for p in products if p.get('category', '').lower() in ['sofa', 'sofas'] or 'sofa' in p.get('category', '').lower()]
print(f"Found {len(sofas)} sofas:")
for p in sofas:
    print(f"ID: {p.get('id')} | Name: {p.get('name')} | Category: {p.get('category')}")
    print(f"  Images: {p.get('images')}")
    print(f"  Thumb: {p.get('thumbnail')}")

