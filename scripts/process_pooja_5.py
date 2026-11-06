import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

def process_pooja_5():
    print("=== Processing Product 5: Bluewud Shubh Compact Apartment Pooja Stand ===")
    
    # 1. Studio Showcase
    # Source: scratch/candidates/bluewud_shubh_candidate_1.jpg (720x922)
    src_studio = Image.open('scratch/candidates/bluewud_shubh_candidate_1.jpg').convert('RGB')
    print(f"Loaded src_studio: {src_studio.size}")
    
    arr = np.array(src_studio)
    non_white_y = np.where(arr.mean(axis=2).mean(axis=1) < 252)[0]
    non_white_x = np.where(arr.mean(axis=2).mean(axis=0) < 252)[0]
    
    if len(non_white_y) > 0 and len(non_white_x) > 0:
        ymin, ymax = non_white_y[0], non_white_y[-1]
        xmin, xmax = non_white_x[0], non_white_x[-1]
        print(f"Found content bbox: x=[{xmin}, {xmax}], y=[{ymin}, {ymax}]")
        pad = 15
        ymin = max(0, ymin - pad)
        ymax = min(src_studio.height, ymax + pad)
        xmin = max(0, xmin - pad)
        xmax = min(src_studio.width, xmax + pad)
        crop_item = src_studio.crop((xmin, ymin, xmax, ymax))
    else:
        crop_item = src_studio
        
    item_w, item_h = crop_item.size
    target_h = int(TARGET_H * 0.80)
    scale = target_h / item_h
    new_w = int(item_w * scale)
    new_h = int(item_h * scale)
    
    if new_w > int(TARGET_W * 0.80):
        scale = (TARGET_W * 0.78) / item_w
        new_w = int(item_w * scale)
        new_h = int(item_h * scale)
        
    resized_item = crop_item.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (252, 252, 252))
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 10
    
    studio_canvas.paste(resized_item, (pos_x, pos_y))
    
    out_studio = 'public/products/bluewud_shubh_pooja_stand_3x4.jpg'
    studio_canvas.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_canvas.size})")
    
    # 2. Lifestyle Interior
    # Source: scratch/candidates/bluewud_shubh_candidate_5.jpg (1200x1600)
    src_env = Image.open('scratch/candidates/bluewud_shubh_candidate_5.jpg').convert('RGB')
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
    out_env = 'public/products/bluewud_shubh_pooja_stand_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_pooja_5()

