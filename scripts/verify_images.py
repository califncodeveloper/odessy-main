import os
from PIL import Image

pooja_imgs = [
    'dzyn_traditional_teak_mandir_3x4.jpg', 'dzyn_traditional_teak_mandir_env.jpg',
    'decorsmart_modern_pooja_cabinet_3x4.jpg', 'decorsmart_modern_pooja_cabinet_env.jpg',
    'alaya_wall_mount_mandir_3x4.jpg', 'alaya_wall_mount_mandir_env.jpg',
    'sacred_home_designer_mandir_3x4.jpg', 'sacred_home_designer_mandir_env.jpg',
    'bluewud_shubh_pooja_stand_3x4.jpg', 'bluewud_shubh_pooja_stand_env.jpg'
]

errors = []
for f in pooja_imgs:
    for folder in ['public/products', 'dist/products']:
        p = os.path.join(folder, f)
        if not os.path.exists(p):
            errors.append(f"Missing {p}")
            continue
        im = Image.open(p)
        if im.size != (896, 1200):
            errors.append(f"{p} has invalid size {im.size}")
        if im.format != 'JPEG':
            errors.append(f"{p} has invalid format {im.format}")

if errors:
    print("ERRORS: " + "; ".join(errors))
else:
    print("ALL_IMAGES_VALID_896x1200_JPEG")

