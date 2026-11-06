import os
from PIL import Image

sofa_images = [
    'amanda_fabric_2_seater_3x4.jpg',
    'amanda_fabric_2_seater_env.jpg',
    'cannes_fabric_3_seater_3x4.jpg',
    'cannes_fabric_3_seater_env.jpg',
    'montez_velvet_sectional_3x4.jpg',
    'montez_velvet_sectional_env.jpg',
    'pescara_velvet_3_seater_3x4.jpg',
    'pescara_velvet_3_seater_env.jpg',
    'radom_sheesham_3_seater_3x4.jpg',
    'radom_sheesham_3_seater_env.jpg'
]

print("Standardizing Sofa images to exact 896x1200 px...")

for img_name in sofa_images:
    p = os.path.join('public/products', img_name)
    if not os.path.exists(p):
        print(f"Missing: {p}")
        continue
    im = Image.open(p)
    w, h = im.size
    print(f"Original {img_name}: {w}x{h}")
    if w == 900 and h == 1200:
        # Center crop 2px left and 2px right to achieve exact 896x1200
        cropped = im.crop((2, 0, 898, 1200))
        cropped.save(p, 'JPEG', quality=95, dpi=(300, 300))
        print(f"  Cropped & Saved: {cropped.size}")
    elif w != 896 or h != 1200:
        resized = im.resize((896, 1200), Image.Resampling.LANCZOS)
        resized.save(p, 'JPEG', quality=95, dpi=(300, 300))
        print(f"  Resized & Saved: {resized.size}")
    else:
        print(f"  Already exact: {w}x{h}")

print("Done standardizing sofa images.")

