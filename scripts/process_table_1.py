import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

# 1. Studio
src_studio = Image.open('scratch/candidates_tables/table1_abbey_wood_studio_2.jpg').convert('RGB')
arr = np.array(src_studio)
mask = np.any(arr < 240, axis=2)
coords = np.argwhere(mask)
y0, x0 = coords.min(axis=0)
y1, x1 = coords.max(axis=0)

crop = src_studio.crop((x0, y0, x1, y1))
cw, ch = crop.size
print(f"P1 Studio crop: {cw}x{ch}")

# Target table width = 720 px (80.3% of 896)
target_w = 720
scale = target_w / cw
new_w = target_w
new_h = int(ch * scale)
resized_crop = crop.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Create studio canvas
studio = Image.new('RGB', (TARGET_W, TARGET_H), (247, 246, 244))

# Contact shadow
shadow_w = int(new_w * 0.96)
shadow_h = 32
shadow_img = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
s_draw = ImageDraw.Draw(shadow_img)
s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(35, 30, 25, 65))
shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(10))

pos_x = (TARGET_W - new_w) // 2
pos_y = (TARGET_H - new_h) // 2 + 40

shadow_x = (TARGET_W - shadow_w) // 2
shadow_y = pos_y + new_h - 14
studio.paste(shadow_blurred, (shadow_x, shadow_y), shadow_blurred)
studio.paste(resized_crop, (pos_x, pos_y))

out_studio = 'public/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg'
studio.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_studio} ({studio.size})")

# 2. Lifestyle Environment
src_env = Image.open('scratch/candidates_tables/table1_abbey_more_env_3.jpg').convert('RGB')
sw, sh = src_env.size
print(f"P1 Env source size: {sw}x{sh}")

# Crop to 3:4 portrait
crop_w = int(sh * (TARGET_W / TARGET_H))
if crop_w > sw:
    crop_w = sw
    crop_h = int(sw * (TARGET_H / TARGET_W))
    offset_y = (sh - crop_h) // 2
    env_crop = src_env.crop((0, offset_y, crop_w, offset_y + crop_h))
else:
    offset_x = (sw - crop_w) // 2
    env_crop = src_env.crop((offset_x, 0, offset_x + crop_w, sh))

env_final = env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
out_env = 'public/products/odessy_abbey_solid_wood_coffee_table_env.jpg'
env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved: {out_env} ({env_final.size})")

