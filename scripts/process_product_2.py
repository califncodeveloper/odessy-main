import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

def process_tulsa():
    print("Processing Product 2: Tulsa Queen Size Bed with Storage...")
    
    # 1. Studio Showcase
    src_studio = Image.open('scratch/candidates/tulsa_candidate_3.jpg').convert('RGB')
    
    # In tulsa_candidate_3: The bed is between ys=130 to 1030, xs=35 to 1065.
    # We crop the content and scale so it occupies ~78% of 896 width (~700px)
    bed_crop = src_studio.crop((25, 120, 1075, 1040))
    scale_factor = 710 / bed_crop.width
    new_w = int(bed_crop.width * scale_factor)
    new_h = int(bed_crop.height * scale_factor)
    bed_resized = bed_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (254, 254, 254))
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 20
    studio_canvas.paste(bed_resized, (pos_x, pos_y))
    
    out_studio = 'public/products/tulsa_sheesham_queen_bed_3x4.jpg'
    studio_canvas.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_canvas.size})")
    
    # 2. Lifestyle Interior
    src_env = Image.open('scratch/candidates/tulsa_candidate_2.jpg').convert('RGB')
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
    out_env = 'public/products/tulsa_sheesham_queen_bed_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_tulsa()

