import os
import json
from PIL import Image

os.makedirs('scratch/all_pf_thumbs', exist_ok=True)

with open('scripts/products_dump.json', 'r') as f:
    products = json.load(f)

new_categories = [
    'Dining Table and Chairs',
    'Sofa',
    'Beds and Wardrobe',
    'Pooja Stand',
    'Steel Bureau',
    'Steel Cot',
    'Center Table'
]

pf_products = [p for p in products if p.get('subcategory') in new_categories]

html = ['<!DOCTYPE html><html><head><title>All 35 Pepperfry Products Visual Audit</title>',
'<style>body{background:#141414;color:#eee;font-family:sans-serif;padding:20px;}',
'.grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(280px, 1fr));gap:20px;}',
'.card{background:#222;padding:12px;border-radius:10px;border:1px solid #444;}',
'img{width:100%;height:320px;object-fit:cover;border-radius:6px;background:#333;margin-bottom:8px;}',
'h3{font-size:14px;margin:4px 0;color:#D4AF37;}',
'p{font-size:12px;margin:2px 0;color:#aaa;}</style></head><body>',
'<h1>All 35 Pepperfry Integrated Products (Studio & Lifestyle)</h1>']

for idx, p in enumerate(pf_products, 1):
    html.append(f'<h2>{idx}. [{p["subcategory"]}] {p["name"]} ({p["id"]})</h2><div class="grid">')
    
    studio_img = p['image'].lstrip('/')
    env_img = p['gallery'][1].lstrip('/') if len(p['gallery']) > 1 else studio_img
    
    for label, img_p in [('Studio 3x4', studio_img), ('Lifestyle Env', env_img)]:
        full_p = os.path.join('public', img_p)
        thumb_name = f"{idx}_{os.path.basename(img_p)}"
        thumb_p = os.path.join('scratch/all_pf_thumbs', thumb_name)
        if os.path.exists(full_p):
            im = Image.open(full_p)
            im.thumbnail((300, 400))
            im.save(thumb_p)
            html.append(f'<div class="card"><h3>{label}</h3><img src="all_pf_thumbs/{thumb_name}"/><p>{img_p}</p><p>{im.size[0]}x{im.size[1]} px</p></div>')
        else:
            html.append(f'<div class="card"><h3>{label} - MISSING</h3><p>{img_p}</p></div>')
    html.append('</div>')

html.append('</body></html>')

with open('scratch/all_products_visual_audit.html', 'w', encoding='utf-8') as out:
    out.write('\n'.join(html))

print(f"Generated visual audit HTML with {len(pf_products)} products.")

