import json

with open('scripts/products_dump.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

targets = [
    'zephyr-sheesham-hydraulic-bed',
    'verta-modern-4-door-wardrobe'
]
sofas = [p for p in products if p.get('subcategory') == 'Sofa']
target_ids = targets + [s['id'] for s in sofas]

for p in products:
    if p['id'] in target_ids:
        print('='*70)
        print(f"ID: {p['id']}")
        print(f"Name: {p['name']}")
        print(f"Image: {p.get('image')}")
        print(f"Gallery: {p.get('gallery')}")
        print(f"Description: {p.get('description')}")
        print(f"Specs: {json.dumps(p.get('specs', {}), indent=2)}")

