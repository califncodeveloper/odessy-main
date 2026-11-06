import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

def process_pooja_3():
    print("=== Processing Product 3: DZYN Alaya Wall Mount Pooja Mandir ===")
    
    # 1. Studio Showcase
    # Source: scratch/candidates/alaya_wall_mount_candidate_2.jpg (1080x1080 RGBA alpha cutout)
    src_studio = Image.open('scratch/candidates/alaya_wall_mount_candidate_2.jpg')
    print(f"Loaded src_studio: {src_studio.size}, mode={src_studio.mode}")
    
    if src_studio.mode == 'RGBA':
        bbox = src_studio.split()[3].getbbox()
    else:
        bbox = src_studio.getbbox()
    print(f"Alpha bbox: {bbox}")
    
    crop_item = src_studio.crop(bbox)
    item_w, item_h = crop_item.size
    
    # For a wall-mounted mandir, target height ~76% of canvas
    target_item_h = int(TARGET_H * 0.76)
    scale = target_item_h / item_h
    new_w = int(item_w * scale)
    new_h = int(item_h * scale)
    
    if new_w > int(TARGET_W * 0.80):
        scale = (TARGET_W * 0.78) / item_w
        new_w = int(item_w * scale)
        new_h = int(item_h * scale)
        
    resized_item = crop_item.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Architectural studio background
    studio_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (247, 246, 244))
    
    # Soft wall drop-shadow for wall-mounted unit
    shadow_img = Image.new('RGBA', (new_w + 40, new_h + 40), (0, 0, 0, 0))
    # Paste blurred alpha as shadow
    alpha_shadow = resized_item.split()[3].point(lambda p: int(p * 0.25))
    shadow_img.paste((20, 15, 10, 255), (20, 20), alpha_shadow)
    shadow_blurred = shadow_img.filter(ImageFilter.GaussianBlur(16))
    
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 - 10
    
    studio_canvas.paste(shadow_blurred, (pos_x - 20, pos_y - 10), shadow_blurred)
    studio_canvas.paste(resized_item, (pos_x, pos_y), resized_item)
    
    out_studio = 'public/products/alaya_wall_mount_mandir_3x4.jpg'
    studio_canvas.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_canvas.size})")
    
    # 2. Lifestyle Interior
    # Source: scratch/candidates/alaya_wall_mount_candidate_6.jpg (736x920) or alaya_wall_mount_candidate_4.jpg
    src_env = Image.open('scratch/candidates/alaya_wall_mount_candidate_6.jpg').convert('RGB')
    print(f"Loaded src_env: {src_env.size}")
    
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
    out_env = 'public/products/alaya_wall_mount_mandir_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_pooja_3()

