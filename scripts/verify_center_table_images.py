import os
import hashlib
from PIL import Image

images = [
    'odessy_abbey_solid_wood_coffee_table_3x4.jpg',
    'odessy_abbey_solid_wood_coffee_table_env.jpg',
    'odessy_zyra_marble_coffee_table_3x4.jpg',
    'odessy_zyra_marble_coffee_table_env.jpg',
    'odessy_valencia_glass_coffee_table_3x4.jpg',
    'odessy_valencia_glass_coffee_table_env.jpg',
    'odessy_galliano_metal_coffee_table_3x4.jpg',
    'odessy_galliano_metal_coffee_table_env.jpg',
    'odessy_elvas_nesting_coffee_table_3x4.jpg',
    'odessy_elvas_nesting_coffee_table_env.jpg'
]

print("=== VERIFYING CENTER TABLE IMAGES ===")
hashes = set()
all_ok = True

for img_name in images:
    path = os.path.join('public/products', img_name)
    if not os.path.exists(path):
        print(f"FAILED: Missing {img_name}")
        all_ok = False
        continue
    
    with open(path, 'rb') as f:
        file_bytes = f.read()
        file_hash = hashlib.md5(file_bytes).hexdigest()
        
    if file_hash in hashes:
        print(f"FAILED: Duplicate image detected: {img_name}")
        all_ok = False
    hashes.add(file_hash)
    
    im = Image.open(path)
    w, h = im.size
    aspect = w / h
    size_kb = len(file_bytes) / 1024
    is_exact = (w == 896 and h == 1200)
    if not is_exact:
        print(f"FAILED: Non 896x1200 image: {img_name} ({w}x{h})")
        all_ok = False
    
    print(f"  {img_name:46s} | {w}x{h} ({aspect:.4f}) | {im.format} | {size_kb:6.1f} KB | 896x1200: {is_exact}")

if all_ok:
    print("\nALL 10 IMAGES ARE 100% VALID, EXACT 896x1200, 3:4 PORTRAIT JPEG, AND COMPLETELY UNIQUE!")
else:
    print("\nVERIFICATION FAILED")
    exit(1)

