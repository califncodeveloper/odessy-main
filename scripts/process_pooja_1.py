import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

os.makedirs('public/products', exist_ok=True)

TARGET_W = 896
TARGET_H = 1200

def process_pooja_1():
    print("=== Processing Product 1: DZYN Traditional Solid Teak Wood Mandir ===")
    
    # 1. Studio Showcase
    # Source: scratch/candidates/dzyn_traditional_candidate_2.jpg (1080x1080 RGBA alpha cutout)
    src_studio = Image.open('scratch/candidates/dzyn_traditional_candidate_2.jpg')
    print(f"Loaded src_studio: {src_studio.size}, mode={src_studio.mode}")
    
    # Get alpha bounding box
    if src_studio.mode == 'RGBA':
        bbox = src_studio.split()[3].getbbox()
    else:
        bbox = src_studio.getbbox()
    print(f"Alpha bbox: {bbox}")
    
    crop_item = src_studio.crop(bbox)
    item_w, item_h = crop_item.size
    
    # Target height on 896x1200 canvas: ~78% of 1200 = ~936 px
    target_item_h = int(TARGET_H * 0.78)
    scale = target_item_h / item_h
    new_w = int(item_w * scale)
    new_h = int(item_h * scale)
    
    # Ensure width doesn't exceed 85% of TARGET_W
    if new_w > int(TARGET_W * 0.85):
        scale = (TARGET_W * 0.82) / item_w
        new_w = int(item_w * scale)
        new_h = int(item_h * scale)
        
    resized_item = crop_item.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create studio canvas with subtle warm luxury gradient
    studio_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (248, 247, 245))
    
    # Subtle floor shadow
    shadow_w = int(new_w * 0.95)
    shadow_h = int(new_h * 0.08)
    shadow_img = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
    from PIL import ImageDraw
    s_draw = ImageDraw.Draw(shadow_img)
    s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(40, 30, 20, 45))
    shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(14))
    
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 10
    
    # Paste shadow slightly below the base
    shadow_x = (TARGET_W - shadow_w) // 2
    shadow_y = pos_y + new_h - int(shadow_h * 0.5)
    studio_canvas.paste(Image.new('RGB', shadow_blurred.size, (248, 247, 245)), (shadow_x, shadow_y))
    # Alpha blend shadow
    studio_canvas.paste(shadow_blurred, (shadow_x, shadow_y), shadow_blurred)
    
    # Paste product
    if resized_item.mode == 'RGBA':
        studio_canvas.paste(resized_item, (pos_x, pos_y), resized_item)
    else:
        studio_canvas.paste(resized_item, (pos_x, pos_y))
        
    out_studio = 'public/products/dzyn_traditional_teak_mandir_3x4.jpg'
    studio_canvas.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_canvas.size})")
    
    # 2. Lifestyle Interior
    # Source: scratch/candidates/dzyn_traditional_candidate_5.jpg (2000x2000) or dzyn_traditional_candidate_4.jpg (736x1313)
    # Let's inspect dzyn_traditional_candidate_5.jpg
    src_env = Image.open('scratch/candidates/dzyn_traditional_candidate_5.jpg').convert('RGB')
    print(f"Loaded src_env: {src_env.size}")
    
    # Crop to 3:4 portrait (TARGET_W / TARGET_H = 896/1200 = 0.7467)
    crop_w = int(src_env.height * (TARGET_W / TARGET_H))
    if crop_w > src_env.width:
        crop_w = src_env.width
        crop_h = int(crop_w * (TARGET_H / TARGET_W))
        offset_y = (src_env.height - crop_h) // 2
        env_crop = src_env.crop((0, offset_y, crop_w, offset_y + crop_h))
    else:
        offset_x = (src_env.width - crop_w) // 2
        env_crop = src_env.crop((offset_x, 0, offset_x + crop_w, src_env.height))
        
    env_final = env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    out_env = 'public/products/dzyn_traditional_teak_mandir_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_pooja_1()

