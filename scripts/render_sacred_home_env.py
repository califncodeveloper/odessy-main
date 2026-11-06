import os
from PIL import Image, ImageFilter, ImageDraw
import numpy as np

TARGET_W = 896
TARGET_H = 1200

# Source: scratch/candidates/sacred_home_designer_candidate_5.jpg (1080x1080 RGBA)
src = Image.open('scratch/candidates/sacred_home_designer_candidate_5.jpg')
bbox = src.split()[3].getbbox()
crop_item = src.crop(bbox)
iw, ih = crop_item.size

# Balanced framing: 76% of canvas height (912px)
target_h = int(TARGET_H * 0.76)
scale = target_h / ih
new_w = int(iw * scale)
new_h = int(ih * scale)

resized_item = crop_item.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Create a warm, ambient prayer room interior environment
# Cream plastered wall with warm diya golden light + polished teak/sandstone flooring
env_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (242, 236, 226))
draw = ImageDraw.Draw(env_canvas)

# Floor line is at y = 920
floor_y = 920

# 1. Warm Wall Background with ambient glow
y_coords, x_coords = np.ogrid[:floor_y, :TARGET_W]
cx = TARGET_W * 0.50
cy = floor_y * 0.45
nx = (x_coords - cx) / (TARGET_W * 0.65)
ny = (y_coords - cy) / (floor_y * 0.60)
dist = np.sqrt(nx**2 + ny**2)
dist = np.clip(dist, 0.0, 1.0)
glow = np.cos(dist * (np.pi / 2)) ** 1.5

wall_r = np.clip(235 + 18 * glow, 0, 255).astype(np.uint8)
wall_g = np.clip(225 + 15 * glow, 0, 255).astype(np.uint8)
wall_b = np.clip(210 + 10 * glow, 0, 255).astype(np.uint8)
wall_img = Image.fromarray(np.dstack((wall_r, wall_g, wall_b)))
env_canvas.paste(wall_img, (0, 0))

# 2. Polished Sandstone / Teak Floor with perspective gradient
floor_h = TARGET_H - floor_y
fy_coords, fx_coords = np.ogrid[:floor_h, :TARGET_W]
prog = fy_coords / float(floor_h)
floor_r = np.clip(205 - 35 * prog, 0, 255).astype(np.uint8)
floor_g = np.clip(185 - 35 * prog, 0, 255).astype(np.uint8)
floor_b = np.clip(165 - 30 * prog, 0, 255).astype(np.uint8)
floor_img = Image.fromarray(np.dstack((floor_r, floor_g, floor_b)))
env_canvas.paste(floor_img, (0, floor_y))

# Baseboard trim
draw.line([(0, floor_y - 3), (TARGET_W, floor_y - 3)], fill=(195, 180, 160), width=3)
draw.line([(0, floor_y), (TARGET_W, floor_y)], fill=(160, 145, 125), width=2)

# Position product so its feet rest naturally on the floor
pos_x = (TARGET_W - new_w) // 2
# In resized_item, the feet reach the bottom of the bbox.
# Let's place bottom at floor_y + 15 for grounded contact
pos_y = floor_y + 15 - new_h

# Realistic Multi-tiered Floor Shadows
# Base contact shadow
sw = int(new_w * 0.88)
sh = int(new_h * 0.08)
shadow = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
s_draw = ImageDraw.Draw(shadow)
s_draw.ellipse([0, 0, sw, sh], fill=(30, 20, 15, 150))
shadow_blur = shadow.filter(ImageFilter.GaussianBlur(10))

# Ambient diffuse floor shadow
amb_sw = int(new_w * 1.05)
amb_sh = int(new_h * 0.16)
amb_shadow = Image.new('RGBA', (amb_sw, amb_sh), (0, 0, 0, 0))
as_draw = ImageDraw.Draw(amb_shadow)
as_draw.ellipse([0, 0, amb_sw, amb_sh], fill=(45, 30, 20, 70))
amb_blur = amb_shadow.filter(ImageFilter.GaussianBlur(22))

# Paste shadows
env_canvas.paste(amb_blur, ((TARGET_W - amb_sw) // 2, pos_y + new_h - int(amb_sh * 0.55)), amb_blur)
env_canvas.paste(shadow_blur, ((TARGET_W - sw) // 2, pos_y + new_h - int(sh * 0.55)), shadow_blur)

# Paste product
env_canvas.paste(resized_item, (pos_x, pos_y), resized_item)

out_path = 'public/products/sacred_home_designer_mandir_env.jpg'
env_canvas.save(out_path, 'JPEG', quality=95, dpi=(300, 300))
print(f"Saved {out_path} ({env_canvas.size})")

