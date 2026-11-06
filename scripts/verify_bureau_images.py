import os
from PIL import Image

image_files = [
    'public/products/godrej_slimline_2_door_almirah_3x4.jpg',
    'public/products/godrej_slimline_2_door_almirah_env.jpg',
    'public/products/godrej_slimline_3_door_almirah_3x4.jpg',
    'public/products/godrej_slimline_3_door_almirah_env.jpg',
    'public/products/godrej_slimline_internal_locker_wardrobe_3x4.jpg',
    'public/products/godrej_slimline_internal_locker_wardrobe_env.jpg',
    'public/products/godrej_slimline_mirror_wardrobe_3x4.jpg',
    'public/products/godrej_slimline_mirror_wardrobe_env.jpg',
    'public/products/godrej_centurion_luxury_almirah_3x4.jpg',
    'public/products/godrej_centurion_luxury_almirah_env.jpg'
]

print("=== VERIFYING STEEL BUREAU IMAGE ASSETS ===")
all_pass = True
for f in image_files:
    if not os.path.exists(f):
        print(f"FAIL: Missing {f}")
        all_pass = False
        continue
    im = Image.open(f)
    w, h = im.size
    ratio = w / h
    size_kb = os.path.getsize(f) / 1024
    is_exact = (w == 896 and h == 1200)
    print(f"{os.path.basename(f)}: {w}x{h} (Aspect: {ratio:.4f}), {size_kb:.1f} KB, Exact 896x1200: {is_exact}")
    if not is_exact:
        all_pass = False

print(f"\nAll 10 images pass verification: {all_pass}")

