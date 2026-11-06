import os
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter, ImageDraw
import rembg

def create_studio_spotlight(w, h, hex_color):
    hex_color = hex_color.lstrip('#')
    base_r, base_g, base_b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    
    y_coords, x_coords = np.ogrid[:h, :w]
    spotlight_cx = w * 0.50
    spotlight_cy = h * 0.42
    
    nx = (x_coords - spotlight_cx) / (w * 0.58)
    ny = (y_coords - spotlight_cy) / (h * 0.52)
    dist = np.sqrt(nx**2 + ny**2)
    dist = np.clip(dist, 0.0, 1.0)
    
    spotlight_factor = np.cos(dist * (np.pi / 2)) ** 1.8
    vignette = 1.0 - (dist ** 2.2) * 0.58
    light_map = (0.35 + 0.95 * spotlight_factor) * vignette
    
    floor_start = int(h * 0.62)
    floor_gradient = np.ones((h, w), dtype=np.float32)
    floor_ys = np.arange(h)
    floor_mask = floor_ys >= floor_start
    floor_gradient[floor_mask, :] = 1.0 - 0.22 * ((floor_ys[floor_mask, None] - floor_start) / (h - floor_start)) ** 1.4
    
    final_light = np.clip(light_map * floor_gradient, 0.08, 1.35)
    
    r_channel = np.clip(base_r * final_light, 0, 255).astype(np.uint8)
    g_channel = np.clip(base_g * final_light, 0, 255).astype(np.uint8)
    b_channel = np.clip(base_b * final_light, 0, 255).astype(np.uint8)
    
    rgb = np.dstack((r_channel, g_channel, b_channel))
    return Image.fromarray(rgb).convert('RGBA')

def add_floor_shadows(bg_img, prod_alpha, base_hex):
    w, h = bg_img.size
    alpha_arr = np.array(prod_alpha)
    ys, xs = np.where(alpha_arr > 30)
    if len(ys) == 0:
        return bg_img
    
    bottom_y = ys.max()
    center_x = (xs.min() + xs.max()) // 2
    span_x = xs.max() - xs.min()
    
    shadow_mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(shadow_mask)
    
    draw.ellipse([
        center_x - int(span_x * 0.52),
        bottom_y - int(h * 0.035),
        center_x + int(span_x * 0.52),
        bottom_y + int(h * 0.065)
    ], fill=125)
    
    draw.ellipse([
        center_x - int(span_x * 0.38),
        bottom_y - int(h * 0.015),
        center_x + int(span_x * 0.38),
        bottom_y + int(h * 0.025)
    ], fill=190)
    
    shadow_blur = shadow_mask.filter(ImageFilter.GaussianBlur(radius=int(w * 0.045)))
    
    hex_color = base_hex.lstrip('#')
    base_r, base_g, base_b = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    shadow_r = int(base_r * 0.12)
    shadow_g = int(base_g * 0.12)
    shadow_b = int(base_b * 0.12)
    
    shadow_layer = Image.new('RGBA', (w, h), (shadow_r, shadow_g, shadow_b, 0))
    shadow_layer.putalpha(shadow_blur)
    
    return Image.alpha_composite(bg_img, shadow_layer)

def fix_bistro_chair(session=None):
    import cv2
    print("Fixing Bistro Cafe Chair...")
    src_path = Path('public/products/backup_black_bg/bistro_cafe_chair_authentic.jpg')
    out_path = Path('public/products/bistro_cafe_chair_3x4.jpg')
    color = '#853835' # Tuscan Rosso
    
    orig = Image.open(src_path).convert('RGB')
    w, h = orig.size
    arr = np.array(orig).astype(np.float32)
    img_bgr = cv2.cvtColor(np.array(orig), cv2.COLOR_RGB2BGR)

    # Upper backrest matting (preserves all 7 ladder rungs)
    top_bg = arr[:30, :].mean(axis=(0,1))
    left_bg = arr[:, :30].mean(axis=(0,1))
    bg = (top_bg + left_bg) / 2.0

    diff = np.maximum(0, bg - arr)
    max_diff = np.max(diff, axis=2)

    alpha_upper_raw = np.clip((max_diff - 4.5) / 14.0, 0.0, 1.0)
    core_mask = (max_diff > 12.0)
    kernel = cv2.getStructuringElement(cv2.MORPH_ELLIPSE, (5, 5))
    closed = cv2.morphologyEx((core_mask * 255).astype(np.uint8), cv2.MORPH_CLOSE, kernel)
    alpha_upper = np.maximum(alpha_upper_raw, (closed.astype(np.float32) / 255.0) * 0.95)

    alpha_upper[:, :260] = 0.0
    alpha_upper[:, 640:] = 0.0
    alpha_upper[:140, :] = 0.0

    # Lower seat and legs matting (GrabCut)
    mask = np.full((h, w), cv2.GC_PR_BGD, dtype=np.uint8)
    mask[:, :140] = cv2.GC_BGD
    mask[:, 640:] = cv2.GC_BGD
    mask[:140, :] = cv2.GC_BGD
    mask[945:, :] = cv2.GC_BGD
    mask[866:, :300] = cv2.GC_BGD
    mask[850:, 480:] = cv2.GC_BGD

    for y in range(700, 945):
        mask[y, 235:365] = cv2.GC_BGD
        mask[y, 415:535] = cv2.GC_BGD

    gray = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2GRAY)
    wood_hsv = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2HSV)
    wood_core = (wood_hsv[:,:,0] >= 10) & (wood_hsv[:,:,0] <= 38) & (wood_hsv[:,:,1] > 20)
    legs_core = (gray < 210) & (gray > 40)

    mask[wood_core] = cv2.GC_FGD
    mask[legs_core] = cv2.GC_FGD

    bgdModel = np.zeros((1, 65), np.float64)
    fgdModel = np.zeros((1, 65), np.float64)
    cv2.grabCut(img_bgr, mask, None, bgdModel, fgdModel, 5, cv2.GC_INIT_WITH_MASK)

    alpha_lower = np.where((mask == cv2.GC_FGD) | (mask == cv2.GC_PR_FGD), 1.0, 0.0).astype(np.float32)
    alpha_lower[wood_core] = 1.0

    # Crossfade blend at y = 445..455
    fade = np.clip((np.arange(h) - 445.0) / 10.0, 0.0, 1.0)[:, None]
    alpha_combined = (1.0 - fade) * alpha_upper + fade * alpha_lower
    alpha_smooth = cv2.GaussianBlur(alpha_combined, (3, 3), 0.5)

    # Edge defringing
    a_norm = alpha_smooth[:, :, None]
    defringe_mask = (alpha_smooth > 0.05) & (alpha_smooth < 0.98)
    recovered_rgb = np.zeros_like(arr)
    for c in range(3):
        recovered_rgb[:,:,c] = np.clip((arr[:,:,c] - (1.0 - a_norm[:,:,0]) * bg[c]) / np.maximum(a_norm[:,:,0], 0.06), 0, 255)

    clean_rgb = np.where(defringe_mask[:,:,None], recovered_rgb, arr).astype(np.uint8)
    clean_prod = Image.fromarray(clean_rgb).convert('RGBA')
    clean_prod.putalpha(Image.fromarray((np.clip(alpha_smooth, 0.0, 1.0) * 255).astype(np.uint8)))

    target_prod = clean_prod.resize((900, 1200), Image.Resampling.LANCZOS)
    tw, th = 900, 1200

    bg_img = create_studio_spotlight(tw, th, color)
    bg_with_shadow = add_floor_shadows(bg_img, target_prod.split()[-1], color)

    final_img = Image.alpha_composite(bg_with_shadow, target_prod)
    final_img.convert('RGB').save(out_path, 'JPEG', quality=95)
    print("SUCCESS: bistro_cafe_chair_3x4.jpg")

def fix_glass_table(session):
    print("Fixing Cristallo Glass Spider Table...")
    src_path = Path('public/products/backup_black_bg/glass_spider_table_3x4.jpg')
    out_path = Path('public/products/glass_spider_table_3x4.jpg')
    color = '#9E6038' # Burnished Copper / Ochre
    
    orig = Image.open(src_path).convert('RGB')
    w, h = orig.size
    
    # Extract authentic chrome spider legs
    prod_rgba = rembg.remove(orig, session=session)
    
    # Background & floor shadows
    bg = create_studio_spotlight(w, h, color)
    bg_with_shadow = add_floor_shadows(bg, prod_rgba.split()[-1], color)
    
    # Glass disk coordinates: perfectly matched to original perspective circle
    # Front rim apex: (450, 505)
    # Rear rim apex: (450, 387)
    # Left rim edge: (87, 448)
    # Right rim edge: (810, 431)
    # The rear leg at x=650 (top at y=391) sits seamlessly underneath the rear glass rim!
    cx, cy = 450, 446
    rx, ry = 364, 59
    
    # High-resolution supersampled rendering for crystal glass (2x supersampling)
    scale = 2
    sw, sh = w * scale, h * scale
    scx, scy = cx * scale, cy * scale
    srx, sry = rx * scale, ry * scale
    
    glass_s = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glass_s)
    
    # 1. Glass body tint (cyan tempered glass)
    g_draw.ellipse([scx - srx, scy - sry, scx + srx, scy + sry], fill=(235, 248, 255, 25))
    
    # 2. Studio softbox reflection sheen across glass
    sheen_s = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    sh_draw = ImageDraw.Draw(sheen_s)
    sh_draw.polygon([
        (scx - int(srx * 0.65), scy - sry + 4),
        (scx - int(srx * 0.15), scy - sry + 4),
        (scx + int(srx * 0.35), scy + sry - 4),
        (scx - int(srx * 0.15), scy + sry - 4)
    ], fill=(255, 255, 255, 45))
    sheen_s_blur = sheen_s.filter(ImageFilter.GaussianBlur(radius=16 * scale))
    
    mask_s = Image.new('L', (sw, sh), 0)
    ImageDraw.Draw(mask_s).ellipse([scx - srx + 2, scy - sry + 2, scx + srx - 2, scy + sry - 2], fill=255)
    glass_s.paste(sheen_s_blur, (0, 0), mask_s)
    
    # 3. Top rear rim arc (from 180 to 360 degrees) that completes the missing glass top seamlessly
    g_draw.arc([scx - srx, scy - sry, scx + srx, scy + sry], start=180, end=360, fill=(40, 50, 55, 180), width=int(2.5 * scale))
    g_draw.arc([scx - srx + 1, scy - sry + 1, scx + srx - 1, scy + sry - 1], start=185, end=355, fill=(230, 245, 255, 200), width=int(1.5 * scale))
    
    # Downsample glass layer with high-quality Lanczos anti-aliasing
    glass_layer = glass_s.resize((w, h), Image.Resampling.LANCZOS)
    
    # Composite:
    # 1. Background + floor shadows
    # 2. Chrome legs with authentic front rim
    # 3. Crystal glass surface + rear rim arc
    comp = Image.alpha_composite(bg_with_shadow, prod_rgba)
    comp = Image.alpha_composite(comp, glass_layer)
    comp.convert('RGB').save(out_path, 'JPEG', quality=95)
    print("SUCCESS: glass_spider_table_3x4.jpg")

def main():
    session = rembg.new_session()
    fix_bistro_chair(session)
    fix_glass_table(session)
    print("Finished updating bistro chair and glass table!")

if __name__ == '__main__':
    main()
