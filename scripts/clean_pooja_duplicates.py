with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Let's locate where PRODUCTS starts and where FURNITURE_SUBCATEGORIES starts
start_idx = 0
end_idx = 0
for idx, l in enumerate(lines):
    if 'export const PRODUCTS: Product[] = [' in l:
        start_idx = idx
    if 'export const FURNITURE_SUBCATEGORIES' in l:
        end_idx = idx
        break

print(f"PRODUCTS array is between lines {start_idx} and {end_idx}")

# Let's parse all product objects in the PRODUCTS array
# A product object starts with '  {\n' and ends with '  },\n' or '  }\n'
pooja_ids = [
    'dzyn-traditional-teak-mandir',
    'decorsmart_modern_pooja_cabinet',
    'decorsmart-modern-pooja-cabinet',
    'alaya-wall-mount-mandir',
    'sacred-home-designer-mandir',
    'bluewud-shubh-pooja-stand'
]

# We want to remove any product with subcategory: 'Pooja Stand' BEFORE 'verta-modular-wardrobe'
content = "".join(lines)

# Find verta-modular-wardrobe
verta_pos = content.find("id: 'verta-modular-wardrobe'")
print(f"Verta position: {verta_pos}")

# Any pooja products before verta_pos should be removed!
# Let's find every occurrence of pooja IDs before verta_pos:
# Let's search backwards before verta_pos:
before_verta = content[:verta_pos]
after_verta = content[verta_pos:]

# In before_verta, let's remove any pooja product object:
import re
# Regex matching an entire product object with subcategory: 'Pooja Stand'
# e.g.   {\n    id: ... subcategory: 'Pooja Stand' ...   },\n
cleaned_before = re.sub(r'\n  \{\n    id: \'(?:alaya|sacred|bluewud|dzyn|decorsmart)[^\']+\'[\s\S]*?subcategory: \'Pooja Stand\'[\s\S]*?\n  \},?', '', before_verta)

print(f"Length before: {len(before_verta)}, length cleaned: {len(cleaned_before)}")

new_content = cleaned_before + after_verta

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Saved cleaned products.ts")

