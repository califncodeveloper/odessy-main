import os
import json
import hashlib
from PIL import Image

with open('scripts/products_dump.json', 'r', encoding='utf-8') as f:
    products = json.load(f)

print("=" * 65)
print("            ODESSY COMPREHENSIVE IMAGE AUDIT             ")
print("=" * 65)

new_categories = [
    'Dining Table and Chairs',
    'Sofa',
    'Beds and Wardrobe',
    'Pooja Stand',
    'Steel Bureau',
    'Steel Cot',
    'Center Table'
]

new_products = [p for p in products if p.get('subcategory') in new_categories]
original_products = [p for p in products if p.get('subcategory') not in new_categories]

print(f"Total Products: {len(products)}")
print(f"Original Products: {len(original_products)}")
print(f"Newly Integrated Products: {len(new_products)} (across {len(new_categories)} categories)")

# 1. Audit newly integrated products images
print("\n" + "=" * 50)
print("  PART 1: NEWLY INTEGRATED PRODUCTS IMAGE AUDIT")
print("=" * 50)

all_new_images = []
hash_to_image = {}
new_image_errors = []

for idx, p in enumerate(new_products, 1):
    main_img = p.get('image', '')
    gallery = p.get('gallery', [])
    
    # Check studio & lifestyle presence
    has_studio = bool(main_img)
    has_lifestyle = len(gallery) > 1 and gallery[1] != main_img
    
    imgs = [main_img]
    for g in gallery:
        if g not in imgs:
            imgs.append(g)
            
    print(f"\n[{idx:02d}/35] [{p['subcategory']}] {p['id']}: {p['name']}")
    print(f"  Studio: {main_img}")
    print(f"  Gallery ({len(gallery)}): {', '.join(gallery)}")
    
    if len(gallery) < 2:
        err = f"Product {p['id']} has less than 2 gallery images"
        print(f"  FAIL: {err}")
        new_image_errors.append(err)
        
    for img_path in imgs:
        # Normalize path
        clean_path = img_path.lstrip('/')
        pub_path = os.path.join('public', clean_path)
        
        if not os.path.exists(pub_path):
            err = f"Missing file: {pub_path} for product {p['id']}"
            print(f"  FAIL: {err}")
            new_image_errors.append(err)
            continue
            
        # Check image properties
        try:
            with open(pub_path, 'rb') as f:
                data = f.read()
                file_hash = hashlib.md5(data).hexdigest()
                
            if file_hash in hash_to_image:
                err = f"Duplicate asset detected! {pub_path} has identical content to {hash_to_image[file_hash]}"
                print(f"  FAIL: {err}")
                new_image_errors.append(err)
            else:
                hash_to_image[file_hash] = pub_path
                
            im = Image.open(pub_path)
            w, h = im.size
            fmt = im.format
            size_kb = len(data) / 1024
            aspect = w / h
            
            is_exact_896x1200 = (w == 896 and h == 1200)
            is_jpg = fmt in ('JPEG', 'JPG')
            
            status = "PASS" if (is_exact_896x1200 and is_jpg) else "FAIL"
            if status == "FAIL":
                err = f"{pub_path}: {w}x{h} ({fmt}) - Expected 896x1200 JPEG"
                new_image_errors.append(err)
                print(f"  [{status}] {clean_path}: {w}x{h} ({fmt}, {size_kb:.1f} KB)")
            else:
                print(f"  [{status}] {clean_path}: {w}x{h} ({fmt}, {size_kb:.1f} KB, ratio={aspect:.4f})")
                
            all_new_images.append({
                'product_id': p['id'],
                'category': p['subcategory'],
                'path': pub_path,
                'width': w,
                'height': h,
                'format': fmt,
                'size_kb': size_kb,
                'hash': file_hash
            })
        except Exception as e:
            err = f"Error reading {pub_path}: {e}"
            print(f"  FAIL: {err}")
            new_image_errors.append(err)

print("\n" + "=" * 50)
print(f"New Images Checked: {len(all_new_images)}")
print(f"Unique Hashes: {len(hash_to_image)}")
print(f"New Image Errors/Warnings: {len(new_image_errors)}")
if len(new_image_errors) == 0:
    print("ALL NEWLY INTEGRATED IMAGES PASS 896x1200 JPEG 3:4 VERIFICATION!")
else:
    for e in new_image_errors:
        print(f" - {e}")

# 2. Audit original products images
print("\n" + "=" * 50)
print("  PART 2: ORIGINAL PRODUCTS IMAGE AUDIT")
print("=" * 50)

orig_missing = []
for p in original_products:
    for img_path in [p.get('image', '')] + p.get('gallery', []):
        if not img_path:
            continue
        clean_path = img_path.lstrip('/')
        pub_path = os.path.join('public', clean_path)
        if not os.path.exists(pub_path):
            orig_missing.append((p['id'], pub_path))
            print(f"  FAIL: Missing original image {pub_path} for {p['id']}")

if len(orig_missing) == 0:
    print(f"PASS: All {len(original_products)} original products have valid, existing image assets.")
else:
    print(f"FAIL: {len(orig_missing)} missing original images.")

