import os
from PIL import Image

TARGET_W = 896
TARGET_H = 1200

def process_verta():
    print("Processing Product 5: Verta 4 Door Wardrobe...")
    
    # Studio Showcase: verta_candidate_1.jpg (1270x1500)
    # Ratio: 1270/1500 = 0.8467. Target: 896/1200 = 0.7467
    im_studio = Image.open('scratch/candidates/verta_candidate_1.jpg').convert('RGB')
    
    # We want full vertical height of wardrobe (top crown to bottom legs/drawers)
    # Target height 1500 -> target width = 1500 * (896 / 1200) = 1120 px
    crop_w = int(im_studio.height * (TARGET_W / TARGET_H))
    offset_x = (im_studio.width - crop_w) // 2
    studio_crop = im_studio.crop((offset_x, 0, offset_x + crop_w, im_studio.height))
    studio_final = studio_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    
    out_studio = 'public/products/verta_modern_4_door_wardrobe_3x4.jpg'
    studio_final.save(out_studio, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Studio: {out_studio} ({studio_final.size})")
    
    # Lifestyle Interior: verta_candidate_3.jpg (1500x1300)
    im_env = Image.open('scratch/candidates/verta_candidate_3.jpg').convert('RGB')
    # For env: 1500x1300 -> target aspect ratio is 896/1200 = 0.7467
    crop_w = int(im_env.height * (TARGET_W / TARGET_H)) # 1300 * 0.7467 = 970 px
    offset_x = (im_env.width - crop_w) // 2
    env_crop = im_env.crop((offset_x, 0, offset_x + crop_w, im_env.height))
    env_final = env_crop.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    
    out_env = 'public/products/verta_modern_4_door_wardrobe_env.jpg'
    env_final.save(out_env, 'JPEG', quality=95, dpi=(300, 300))
    print(f"Saved Env: {out_env} ({env_final.size})")

process_verta()

