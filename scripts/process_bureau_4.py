import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

def process_product_4():
    print("=== Processing Product 4: Godrej Slimline 2-Door Steel Wardrobe with Mirror ===")
    
    src = Image.open('scratch/candidates_bureau/godrej_slimline_2_door_almirah_candidate_2.jpg').convert('RGB')
    
    # 1. Studio Showcase
    bureau_crop = src.crop((204, 49, 532, 750))
    bw, bh = bureau_crop.size
    print(f"Bureau crop size: {bw}x{bh}")
    
    target_h = int(TARGET_H * 0.78) # 936 px
    scale = target_h / bh
    new_w = int(bw * scale)
    new_h = target_h
    bureau_resized = bureau_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio = Image.new('RGB', (TARGET_W, TARGET_H), (247, 246, 248))
    
    # Floor shadow
    shadow_w = int(new_w * 1.1)
    shadow_h = 36
    shadow_img = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
    from PIL import ImageDraw
    s_draw = ImageDraw.Draw(shadow_img)
    s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(30, 25, 30, 65))
    shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(10))
    
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 10
    
    shadow_x = (TARGET_W - shadow_w) // 2
    shadow_y = pos_y + new_h - 16
    studio.paste(shadow_blurred, (shadow_x, shadow_y), shadow_blurred)
    studio.paste(bureau_resized, (pos_x, pos_y))
    
    out_studio = 'public/products/godrej_slimline_mirror_wardrobe_3x4.jpg'
    studio.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio.size})")
    
    # 2. Lifestyle Interior
    crop_w = int(src.height * (TARGET_W / TARGET_H))
    crop_h = src.height
    offset_x = (src.width - crop_w) // 2
    env_crop = src.crop((offset_x, 0, offset_x + crop_w, crop_h))
    env_final = env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    
    out_env = 'public/products/godrej_slimline_mirror_wardrobe_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_product_4()

