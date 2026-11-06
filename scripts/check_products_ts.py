import json

with open('scripts/products_dump.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

targets = [
    'zephyr-sheesham-hydraulic-bed',
    'verta-modern-4-door-wardrobe',
    'amanda-fabric-2-seater',
    'cannes-fabric-3-seater',
    'montez-velvet-lhs-sectional',
    'pescara-velvet-3-seater',
    'radom-sheesham-3-seater'
]

for p in products:
    if p['id'] in targets:
        print(f"{p['id']}:")
        print(f"  image: {p.get('image')}")
        print(f"  gallery: {p.get('gallery')}")

