import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

def process_product_2():
    print("=== Processing Product 2: Godrej Slimline 3-Door Metal Almirah (Ultra Marine Blue) ===")
    
    src = Image.open('scratch/candidates_bureau/godrej_slimline_3_door_almirah_candidate_1.jpg').convert('RGB')
    
    # 1. Studio Showcase
    # Precise crop from x=161 to 555, y=166 to 745
    bureau_crop = src.crop((161, 166, 555, 745))
    bw, bh = bureau_crop.size
    print(f"Bureau crop size: {bw}x{bh}")
    
    target_h = int(TARGET_H * 0.77) # 924 px
    scale = target_h / bh
    new_w = int(bw * scale)
    new_h = target_h
    bureau_resized = bureau_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio = Image.new('RGB', (TARGET_W, TARGET_H), (247, 246, 248))
    
    # Floor shadow
    shadow_w = int(new_w * 1.08)
    shadow_h = 38
    shadow_img = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
    from PIL import ImageDraw
    s_draw = ImageDraw.Draw(shadow_img)
    s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(25, 25, 35, 65))
    shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(12))
    
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 15
    
    shadow_x = (TARGET_W - shadow_w) // 2
    shadow_y = pos_y + new_h - 18
    studio.paste(shadow_blurred, (shadow_x, shadow_y), shadow_blurred)
    studio.paste(bureau_resized, (pos_x, pos_y))
    
    out_studio = 'public/products/godrej_slimline_3_door_almirah_3x4.jpg'
    studio.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio.size})")
    
    # 2. Lifestyle Interior
    crop_w = int(src.height * (TARGET_W / TARGET_H))
    crop_h = src.height
    offset_x = (src.width - crop_w) // 2
    env_crop = src.crop((offset_x, 0, offset_x + crop_w, crop_h))
    env_final = env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    
    out_env = 'public/products/godrej_slimline_3_door_almirah_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_product_2()
