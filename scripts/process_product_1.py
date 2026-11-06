import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

os.makedirs('public/products', exist_ok=True)

TARGET_W = 896
TARGET_H = 1200

def process_marlow():
    print("Processing Product 1: Marlow Sheesham Wood King Size Bed...")
    
    # 1. Studio Showcase
    # Source: scratch/candidates/marlow_candidate_4.jpg
    src_studio = Image.open('scratch/candidates/marlow_candidate_4.jpg').convert('RGB')
    
    # In marlow_candidate_4: The bed is between ys=350 to 700, xs=20 to 715.
    # The background is a clean studio white/light-grey #F2F2F2 (RGB: 242, 242, 242).
    # Let's crop the bed with some margin and place on 896x1200 studio canvas.
    bed_crop = src_studio.crop((10, 320, 725, 710))
    # Desired width on 896 canvas: 78% of 896 = ~700 px
    scale_factor = 710 / bed_crop.width
    new_w = int(bed_crop.width * scale_factor)
    new_h = int(bed_crop.height * scale_factor)
    bed_resized = bed_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Create 896x1200 canvas filled with studio background color #F4F4F4
    studio_canvas = Image.new('RGB', (TARGET_W, TARGET_H), (242, 242, 242))
    
    # Position bed vertically centered / slightly lower for balanced gravity
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 30
    
    # Blend or paste
    studio_canvas.paste(bed_resized, (pos_x, pos_y))
    
    # Save studio showcase
    out_studio = 'public/products/marlow_sheesham_king_bed_3x4.jpg'
    studio_canvas.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_canvas.size})")
    
    # 2. Lifestyle Interior
    # Source: scratch/candidates/marlow_candidate_2.jpg (1600x1760)
    src_env = Image.open('scratch/candidates/marlow_candidate_2.jpg').convert('RGB')
    
    # We need 3:4 portrait (896x1200).
    # In src_env (1600x1760), target aspect ratio is 896/1200 = 0.7467
    # For height 1760, target width would be 1760 * 0.7467 = 1314 px.
    # We crop symmetrically horizontally from 1600:
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
    out_env = 'public/products/marlow_sheesham_king_bed_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_marlow()

