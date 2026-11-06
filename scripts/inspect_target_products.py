import re
import json

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Let's inspect products
in_prod = False
cur_prod = []
all_prods = []

for line in lines:
    if line.strip().startswith('{') and ('id:' in line or 'name:' in line or any('id:' in l for l in cur_prod)):
        in_prod = True
    if in_prod:
        cur_prod.append(line)
        if line.strip().startswith('},') or line.strip() == '}':
            all_prods.append(''.join(cur_prod))
            cur_prod = []
            in_prod = False

print(f"Total product chunks found: {len(all_prods)}")

targets = []
for p in all_prods:
    if 'Zephyr' in p or 'Verta' in p or 'sofa' in p.lower():
        targets.append(p)

for t in targets:
    print("="*60)
    print(t.strip())

