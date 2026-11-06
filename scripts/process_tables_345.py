import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

# -------------------------------------------------------------
# PRODUCT 3: Valencia Sheesham Glass Top Center Table
# -------------------------------------------------------------
print("Processing Product 3: Valencia Sheesham Glass Top...")

# Studio Showcase: table3_valencia_more_studio_4.jpg (1024x1280)
src_p3_studio = Image.open('scratch/candidates_tables/table3_valencia_more_studio_4.jpg').convert('RGB')
# Crop to 3:4 portrait
sw, sh = src_p3_studio.size
crop_w = int(sh * (TARGET_W / TARGET_H))
if crop_w > sw:
    crop_w = sw
    crop_h = int(sw * (TARGET_H / TARGET_W))
    offset_y = (sh - crop_h) // 2
    p3_studio_crop = src_p3_studio.crop((0, offset_y, crop_w, offset_y + crop_h))
else:
    offset_x = (sw - crop_w) // 2
    p3_studio_crop = src_p3_studio.crop((offset_x, 0, offset_x + crop_w, sh))

p3_studio_final = p3_studio_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p3_studio = 'public/products/odessy_valencia_glass_coffee_table_3x4.jpg'
p3_studio_final.save(out_p3_studio, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p3_studio} ({p3_studio_final.size})")

# Lifestyle Env: table3_valencia_glass_env_3.jpg (2400x1350)
src_p3_env = Image.open('scratch/candidates_tables/table3_valencia_glass_env_3.jpg').convert('RGB')
ew, eh = src_p3_env.size
crop_w = int(eh * (TARGET_W / TARGET_H))
offset_x = (ew - crop_w) // 2
p3_env_crop = src_p3_env.crop((offset_x, 0, offset_x + crop_w, eh))
p3_env_final = p3_env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p3_env = 'public/products/odessy_valencia_glass_coffee_table_env.jpg'
p3_env_final.save(out_p3_env, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p3_env} ({p3_env_final.size})")

# -------------------------------------------------------------
# PRODUCT 4: Galliano Metal Coffee Table
# -------------------------------------------------------------
print("\nProcessing Product 4: Galliano Metal Frame...")

# Studio Showcase: table4_galliano_metal_studio_1.jpg (1200x800)
src_p4_studio = Image.open('scratch/candidates_tables/table4_galliano_metal_studio_1.jpg').convert('RGB')
sw, sh = src_p4_studio.size
crop_w = int(sh * (TARGET_W / TARGET_H))
offset_x = (sw - crop_w) // 2
p4_studio_crop = src_p4_studio.crop((offset_x, 0, offset_x + crop_w, sh))
p4_studio_final = p4_studio_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p4_studio = 'public/products/odessy_galliano_metal_coffee_table_3x4.jpg'
p4_studio_final.save(out_p4_studio, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p4_studio} ({p4_studio_final.size})")

# Lifestyle Env: table4_galliano_metal_env_1.jpg (3840x2160)
src_p4_env = Image.open('scratch/candidates_tables/table4_galliano_metal_env_1.jpg').convert('RGB')
ew, eh = src_p4_env.size
crop_w = int(eh * (TARGET_W / TARGET_H))
offset_x = (ew - crop_w) // 2
p4_env_crop = src_p4_env.crop((offset_x, 0, offset_x + crop_w, eh))
p4_env_final = p4_env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p4_env = 'public/products/odessy_galliano_metal_coffee_table_env.jpg'
p4_env_final.save(out_p4_env, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p4_env} ({p4_env_final.size})")

# -------------------------------------------------------------
# PRODUCT 5: Elvas Metal Round Nesting Coffee Table Set
# -------------------------------------------------------------
print("\nProcessing Product 5: Elvas Metal Nesting Set...")

# Studio Showcase: table5_elvas_more_1.jpg (1500x1500)
src_p5_studio = Image.open('scratch/candidates_tables/table5_elvas_more_1.jpg').convert('RGB')
sw, sh = src_p5_studio.size
crop_w = int(sh * (TARGET_W / TARGET_H))
offset_x = (sw - crop_w) // 2
p5_studio_crop = src_p5_studio.crop((offset_x, 0, offset_x + crop_w, sh))
p5_studio_final = p5_studio_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p5_studio = 'public/products/odessy_elvas_nesting_coffee_table_3x4.jpg'
p5_studio_final.save(out_p5_studio, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p5_studio} ({p5_studio_final.size})")

# Lifestyle Env: table5_elvas_more_5.jpg (3000x2000) or table5_elvas_nesting_env_1.png (1536x1536)
src_p5_env = Image.open('scratch/candidates_tables/table5_elvas_more_5.jpg').convert('RGB')
ew, eh = src_p5_env.size
crop_w = int(eh * (TARGET_W / TARGET_H))
offset_x = (ew - crop_w) // 2
p5_env_crop = src_p5_env.crop((offset_x, 0, offset_x + crop_w, eh))
p5_env_final = p5_env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_p5_env = 'public/products/odessy_elvas_nesting_coffee_table_env.jpg'
p5_env_final.save(out_p5_env, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_p5_env} ({p5_env_final.size})")

