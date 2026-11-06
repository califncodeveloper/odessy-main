import os
from PIL import Image, ImageFilter, ImageDraw, ImageEnhance
import numpy as np

TARGET_W = 896
TARGET_H = 1200

# Let's inspect candidate 5 (closed doors) or candidate 2 (open doors)
cand5 = Image.open('scratch/candidates/sacred_home_designer_candidate_5.jpg')
bbox = cand5.split()[3].getbbox()
print(f"Cand 5 bbox: {bbox}")

crop_item = cand5.crop(bbox)
iw, ih = crop_item.size

# Target height in 1200 canvas: ~75% = 900px
target_h = int(TARGET_H * 0.75)
scale = target_h / ih
new_w = int(iw * scale)
new_h = int(ih * scale)

resized_item = crop_item.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Create an elegant sanctuary lifestyle environment
# Let's create an atmospheric luxury prayer alcove room:
# Warm cream/limestone plaster wall, Italian beige marble floor with subtle sheen, warm recessed lighting
bg = Image.new('RGB', (TARGET_W, TARGET_H), (238, 232, 222))

# Top-to-bottom wall gradient
draw = ImageDraw.Draw(bg)
for y in range(TARGET_H):
    # Wall is top 70% (0 to 840), floor is bottom 30% (840 to 1200)
    if y < 840:
        # Subtle warm vignette
        factor = 1.0 - 0.15 * (abs(y - 300) / 600.0)
        r = int(244 * factor)
        g = int(238 * factor)
        b = int(228 * factor)
        draw.line([(0, y), (TARGET_W, y)], fill=(r, g, b))
    else:
        # Marble floor with perspective depth
        floor_prog = (y - 840) / 360.0
        r = int(218 - 25 * floor_prog)
        g = int(208 - 25 * floor_prog)
        b = int(195 - 25 * floor_prog)
        draw.line([(0, y), (TARGET_W, y)], fill=(r, g, b))

# Baseboard trim at floor line
draw.line([(0, 838), (TARGET_W, 838)], fill=(185, 175, 160), width=3)
draw.line([(0, 840), (TARGET_W, 840)], fill=(160, 150, 135), width=2)

# Position of product
pos_x = (TARGET_W - new_w) // 2
pos_y = 840 - int(new_h * 0.90)  # Mandir sits firmly on floor line

# Multi-layered realistic floor contact shadow
shadow_w = int(new_w * 0.92)
shadow_h = int(new_h * 0.12)
shadow_img = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
s_draw = ImageDraw.Draw(shadow_img)
s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(45, 35, 25, 120))
shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(16))

# Tighter dark contact shadow directly under feet
foot_shadow = Image.new('RGBA', (int(shadow_w * 0.8), int(shadow_h * 0.4)), (0, 0, 0, 0))
f_draw = ImageDraw.Draw(foot_shadow)
f_draw.ellipse([0, 0, int(shadow_w * 0.8), int(shadow_h * 0.4)], fill=(25, 20, 15, 180))
foot_blurred = foot_shadow.filter(ImageFilter.GaussianBlur(6))

# Paste shadows
sh_x = (TARGET_W - shadow_w) // 2
sh_y = pos_y + new_h - int(shadow_h * 0.45)
bg.paste(shadow_blurred, (sh_x, sh_y), shadow_blurred)

f_x = (TARGET_W - foot_shadow.width) // 2
f_y = pos_y + new_h - int(foot_shadow.height * 0.5)
bg.paste(foot_blurred, (f_x, f_y), foot_blurred)

# Paste product
bg.paste(resized_item, (pos_x, pos_y), resized_item)

# Save preview
bg.save('scratch/preview_sacred_env.jpg', 'JPEG', quality=95, dpi=(300, 300))
print("Saved scratch/preview_sacred_env.jpg")

