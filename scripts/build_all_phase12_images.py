import os
from PIL import Image, ImageFilter, ImageDraw, ImageOps
import numpy as np

TARGET_W = 896
TARGET_H = 1200
OUT_DIR = 'public/products'
os.makedirs(OUT_DIR, exist_ok=True)

def create_studio_background(w=TARGET_W, h=TARGET_H, base_hex="#F6F5F2"):
    base_hex = base_hex.lstrip('#')
    br, bg, bb = tuple(int(base_hex[i:i+2], 16) for i in (0, 2, 4))
    
    y, x = np.ogrid[:h, :w]
    cx, cy = w * 0.50, h * 0.44
    nx = (x - cx) / (w * 0.58)
    ny = (y - cy) / (h * 0.52)
    dist = np.clip(np.sqrt(nx**2 + ny**2), 0.0, 1.0)
    
    spotlight = np.cos(dist * (np.pi / 2)) ** 1.6
    vignette = 1.0 - (dist ** 2.0) * 0.08
    light = np.clip((0.94 + 0.10 * spotlight) * vignette, 0.88, 1.06)
    
    # Floor soft gradient starting at 65% height
    floor_start = int(h * 0.65)
    floor_grad = np.ones((h, w), dtype=np.float32)
    ys = np.arange(h)
    f_mask = ys >= floor_start
    floor_grad[f_mask, :] = 1.0 - 0.04 * ((ys[f_mask, None] - floor_start) / (h - floor_start))
    
    final_light = light * floor_grad
    r_ch = np.clip(br * final_light, 0, 255).astype(np.uint8)
    g_ch = np.clip(bg * final_light, 0, 255).astype(np.uint8)
    b_ch = np.clip(bb * final_light, 0, 255).astype(np.uint8)
    
    return Image.fromarray(np.dstack((r_ch, g_ch, b_ch))).convert('RGB')

def crop_content_bbox(img, bg_threshold=235):
    arr = np.array(img.convert('RGB'))
    # Sample 4 corners for background reference
    corners = np.vstack([
        arr[:20, :20, :3].reshape(-1, 3),
        arr[:20, -20:, :3].reshape(-1, 3),
        arr[-20:, :20, :3].reshape(-1, 3),
        arr[-20:, -20:, :3].reshape(-1, 3)
    ])
    bg_ref = corners.mean(axis=0)
    diff = np.abs(arr[:, :, :3] - bg_ref).max(axis=2)
    mask = diff > 15
    coords = np.argwhere(mask)
    if len(coords) > 0:
        y0, x0 = coords.min(axis=0)
        y1, x1 = coords.max(axis=0)
        # Margin
        y0 = max(0, y0 - 10)
        x0 = max(0, x0 - 10)
        y1 = min(img.height, y1 + 10)
        x1 = min(img.width, x1 + 10)
        return (x0, y0, x1, y1)
    return (0, 0, img.width, img.height)

def add_contact_shadow(canvas, x, y, w, h, shadow_strength=80):
    # Elliptical contact shadow
    sw = int(w * 0.94)
    sh = int(max(26, h * 0.10))
    s_img = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(s_img)
    s_draw.ellipse([0, 0, sw, sh], fill=(30, 25, 20, shadow_strength))
    s_blur = s_img.filter(ImageFilter.GaussianBlur(int(sh * 0.35)))
    
    sh_x = x + (w - sw) // 2
    sh_y = y + h - int(sh * 0.50)
    canvas.paste(s_blur, (sh_x, sh_y), s_blur)

def crop_lifestyle_to_3x4(img, focus_x=0.5, focus_y=0.5):
    w, h = img.size
    target_ratio = TARGET_W / TARGET_H # 0.74666...
    cur_ratio = w / h
    
    if cur_ratio > target_ratio:
        # Image is wider: crop width
        new_w = int(h * target_ratio)
        max_x = w - new_w
        x0 = int(max_x * focus_x)
        crop_box = (x0, 0, x0 + new_w, h)
    else:
        # Image is taller: crop height
        new_h = int(w / target_ratio)
        max_y = h - new_h
        y0 = int(max_y * focus_y)
        crop_box = (0, y0, w, y0 + new_h)
        
    cropped = img.crop(crop_box)
    return cropped.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)

def save_image(img, out_path):
    img = img.convert('RGB')
    if img.size != (TARGET_W, TARGET_H):
        img = img.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    img.save(out_path, 'JPEG', quality=95, dpi=(300, 300))
    print(f"  [SAVED] {out_path} -> {img.size} ({os.path.getsize(out_path)} bytes)")

# ==========================================
# 1. ZEPHYR SOLID SHEESHAM HYDRAULIC BED
# ==========================================
def build_zephyr():
    print("\n--- 1. Zephyr Sheesham Hydraulic Storage Bed ---")
    # Studio: Generated Woodsworth Zephyr Hydraulic Bed with Lift Up
    gen_studio_p = r'C:\Users\shubh\.gemini\antigravity\brain\118958b8-5198-44b6-b857-1354990544ad\woodsworth_zephyr_hydraulic_bed_1793972720882.jpg'
    src_studio = Image.open(gen_studio_p).convert('RGB')
    
    # Bed bounds in 1200x896 image:
    bbox = crop_content_bbox(src_studio)
    crop_bed = src_studio.crop(bbox)
    
    # Target occupancy: ~715 px width on 896 width canvas (~80%)
    scale = 715 / crop_bed.width
    new_w = int(crop_bed.width * scale)
    new_h = int(crop_bed.height * scale)
    if new_h > 850:
        scale = 850 / crop_bed.height
        new_w = int(crop_bed.width * scale)
        new_h = int(crop_bed.height * scale)
    resized_bed = crop_bed.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F6F4F0")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 25
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=90)
    studio_bg.paste(resized_bed, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'zephyr_sheesham_hydraulic_bed_3x4.jpg'))
    
    # Lifestyle: scratch/candidates/zephyr_candidate_1.jpg (1600x1760)
    src_env = Image.open('scratch/candidates/zephyr_candidate_1.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.45)
    save_image(env_final, os.path.join(OUT_DIR, 'zephyr_sheesham_hydraulic_bed_env.jpg'))

# ==========================================
# 2. VERTA 4-DOOR WARDROBE
# ==========================================
def build_verta():
    print("\n--- 2. Verta 4-Door Wardrobe with Dual Mirrors & Drawers ---")
    # Studio: scratch/verta_authentic/verta_0.jpeg (1091x1200)
    src_studio = Image.open('scratch/verta_authentic/verta_0.jpeg').convert('RGB')
    # Wardrobe bbox: x=72..1007, y=232..1119
    wardrobe_crop = src_studio.crop((72, 232, 1007, 1119))
    # Height target: ~900 px (~75% canvas height), width will be ~900 * (935/887) = ~948 (too wide)
    # Target width: 710 px (~79% width), height = 710 * (887/935) = 673 px
    # Wait, wardrobe is tall! Let's check bbox height: 887.
    scale = 710 / wardrobe_crop.width
    new_w = int(wardrobe_crop.width * scale)
    new_h = int(wardrobe_crop.height * scale)
    resized_wardrobe = wardrobe_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F7F6F3")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 15
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=80)
    studio_bg.paste(resized_wardrobe, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'verta_modern_4_door_wardrobe_3x4.jpg'))
    
    # Lifestyle: scratch/verta_authentic/verta_1.jpeg (1091x1200)
    src_env = Image.open('scratch/verta_authentic/verta_1.jpeg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.48)
    save_image(env_final, os.path.join(OUT_DIR, 'verta_modern_4_door_wardrobe_env.jpg'))

# ==========================================
# 3. AMANDA MODERN 2-SEATER FABRIC SOFA
# ==========================================
def build_amanda():
    print("\n--- 3. Amanda Modern 2-Seater Fabric Sofa ---")
    # Studio: public/products/backup_raw_sofas/amanda_fabric_2_seater_3x4.jpg (1600x800)
    src_studio = Image.open('public/products/backup_raw_sofas/amanda_fabric_2_seater_3x4.jpg').convert('RGB')
    bbox = crop_content_bbox(src_studio)
    sofa_crop = src_studio.crop(bbox)
    
    scale = 715 / sofa_crop.width
    new_w = int(sofa_crop.width * scale)
    new_h = int(sofa_crop.height * scale)
    resized_sofa = sofa_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F5F4F0")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 35
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=85)
    studio_bg.paste(resized_sofa, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'amanda_fabric_2_seater_3x4.jpg'))
    
    # Lifestyle: scratch/candidates_phase12/amanda_sofa_0.jpg (1024x1024)
    src_env = Image.open('scratch/candidates_phase12/amanda_sofa_0.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.50)
    save_image(env_final, os.path.join(OUT_DIR, 'amanda_fabric_2_seater_env.jpg'))

# ==========================================
# 4. CANNES CONTEMPORARY 3-SEATER FABRIC SOFA
# ==========================================
def build_cannes():
    print("\n--- 4. Cannes Contemporary 3-Seater Fabric Sofa ---")
    # Studio: public/products/backup_raw_sofas/cannes_fabric_3_seater_3x4.jpg (1600x800)
    src_studio = Image.open('public/products/backup_raw_sofas/cannes_fabric_3_seater_3x4.jpg').convert('RGB')
    bbox = crop_content_bbox(src_studio)
    sofa_crop = src_studio.crop(bbox)
    
    scale = 720 / sofa_crop.width
    new_w = int(sofa_crop.width * scale)
    new_h = int(sofa_crop.height * scale)
    resized_sofa = sofa_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F6F5F2")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 35
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=90)
    studio_bg.paste(resized_sofa, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'cannes_fabric_3_seater_3x4.jpg'))
    
    # Lifestyle: public/products/backup_raw_sofas/cannes_fabric_3_seater_env.jpg (1250x625)
    src_env = Image.open('public/products/backup_raw_sofas/cannes_fabric_3_seater_env.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.50)
    save_image(env_final, os.path.join(OUT_DIR, 'cannes_fabric_3_seater_env.jpg'))

# ==========================================
# 5. MONTEZ VELVET LHS SECTIONAL SOFA
# ==========================================
def build_montez():
    print("\n--- 5. Montez Velvet LHS Sectional Sofa ---")
    # Studio: scratch/candidates_phase12/montez_sofa_0.jpg (1250x625)
    src_studio = Image.open('scratch/candidates_phase12/montez_sofa_0.jpg').convert('RGB')
    bbox = crop_content_bbox(src_studio)
    sofa_crop = src_studio.crop(bbox)
    
    scale = 725 / sofa_crop.width
    new_w = int(sofa_crop.width * scale)
    new_h = int(sofa_crop.height * scale)
    resized_sofa = sofa_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F7F6F3")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 35
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=85)
    studio_bg.paste(resized_sofa, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'montez_velvet_sectional_3x4.jpg'))
    
    # Lifestyle: scratch/candidates_phase12/montez_sofa_1.jpg (1024x826)
    src_env = Image.open('scratch/candidates_phase12/montez_sofa_1.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.50)
    save_image(env_final, os.path.join(OUT_DIR, 'montez_velvet_sectional_env.jpg'))

# ==========================================
# 6. PESCARA LUXURY 3-SEATER VELVET SOFA
# ==========================================
def build_pescara():
    print("\n--- 6. Pescara Luxury 3-Seater Velvet Sofa ---")
    # Studio: public/products/backup_raw_sofas/pescara_velvet_3_seater_3x4.jpg (1600x800)
    src_studio = Image.open('public/products/backup_raw_sofas/pescara_velvet_3_seater_3x4.jpg').convert('RGB')
    bbox = crop_content_bbox(src_studio)
    sofa_crop = src_studio.crop(bbox)
    
    scale = 715 / sofa_crop.width
    new_w = int(sofa_crop.width * scale)
    new_h = int(sofa_crop.height * scale)
    resized_sofa = sofa_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F8F6F2")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 35
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=90)
    studio_bg.paste(resized_sofa, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'pescara_velvet_3_seater_3x4.jpg'))
    
    # Lifestyle: scratch/candidates_phase12/pescara_sofa_1.jpg (2000x2000)
    src_env = Image.open('scratch/candidates_phase12/pescara_sofa_1.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.50)
    save_image(env_final, os.path.join(OUT_DIR, 'pescara_velvet_3_seater_env.jpg'))

# ==========================================
# 7. RADOM SOLID SHEESHAM 3-SEATER SOFA
# ==========================================
def build_radom():
    print("\n--- 7. Radom Solid Sheesham 3-Seater Sofa ---")
    # Studio: public/products/backup_raw_sofas/radom_sheesham_3_seater_3x4.jpg (1600x800)
    src_studio = Image.open('public/products/backup_raw_sofas/radom_sheesham_3_seater_3x4.jpg').convert('RGB')
    bbox = crop_content_bbox(src_studio)
    sofa_crop = src_studio.crop(bbox)
    
    scale = 720 / sofa_crop.width
    new_w = int(sofa_crop.width * scale)
    new_h = int(sofa_crop.height * scale)
    resized_sofa = sofa_crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    studio_bg = create_studio_background(base_hex="#F6F4F0")
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 35
    add_contact_shadow(studio_bg, pos_x, pos_y, new_w, new_h, shadow_strength=90)
    studio_bg.paste(resized_sofa, (pos_x, pos_y))
    save_image(studio_bg, os.path.join(OUT_DIR, 'radom_sheesham_3_seater_3x4.jpg'))
    
    # Lifestyle: public/products/backup_raw_sofas/radom_sheesham_3_seater_env.jpg (1600x800)
    src_env = Image.open('public/products/backup_raw_sofas/radom_sheesham_3_seater_env.jpg').convert('RGB')
    env_final = crop_lifestyle_to_3x4(src_env, focus_x=0.50, focus_y=0.50)
    save_image(env_final, os.path.join(OUT_DIR, 'radom_sheesham_3_seater_env.jpg'))

if __name__ == '__main__':
    build_zephyr()
    build_verta()
    build_amanda()
    build_cannes()
    build_montez()
    build_pescara()
    build_radom()
    print("\nAll 14 Phase 12 images built successfully!")

