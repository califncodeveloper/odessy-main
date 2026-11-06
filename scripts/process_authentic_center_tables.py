import os
from PIL import Image, ImageFilter, ImageDraw
import numpy as np

TARGET_W = 896
TARGET_H = 1200

os.makedirs('public/products', exist_ok=True)

def crop_to_3x4(img, align='center'):
    w, h = img.size
    target_ratio = TARGET_W / TARGET_H # 0.746666...
    current_ratio = w / h
    
    if current_ratio > target_ratio:
        # Image is wider than 3:4 -> crop width
        new_w = int(h * target_ratio)
        if align == 'center':
            x0 = (w - new_w) // 2
        elif align == 'left':
            x0 = 0
        else:
            x0 = w - new_w
        return img.crop((x0, 0, x0 + new_w, h))
    else:
        # Image is taller than 3:4 -> crop height
        new_h = int(w / target_ratio)
        if align == 'center':
            y0 = (h - new_h) // 2
        elif align == 'top':
            y0 = 0
        else:
            y0 = h - new_h
        return img.crop((0, y0, w, y0 + new_h))

def process_studio_on_canvas(src_img, bg_color=(247, 246, 244)):
    # Crop non-white/contrasting content
    arr = np.array(src_img)
    if src_img.mode == 'RGBA':
        bbox = src_img.split()[3].getbbox()
    else:
        # Find product bounds by difference from top corners
        corner = arr[:15, :15, :3].mean(axis=(0,1))
        diff = np.abs(arr[:, :, :3] - corner).max(axis=2)
        mask = diff > 20
        coords = np.argwhere(mask)
        if len(coords) > 0:
            y0, x0 = coords.min(axis=0)
            y1, x1 = coords.max(axis=0)
            bbox = (x0, y0, x1, y1)
        else:
            bbox = (0, 0, src_img.width, src_img.height)
            
    crop = src_img.crop(bbox)
    cw, ch = crop.size
    
    # Scale product to ~78% canvas width
    target_item_w = int(TARGET_W * 0.80)
    scale = target_item_w / cw
    new_w = target_item_w
    new_h = int(ch * scale)
    
    if new_h > int(TARGET_H * 0.75):
        scale = (TARGET_H * 0.70) / ch
        new_h = int(ch * scale)
        new_w = int(cw * scale)
        
    resized_prod = crop.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    canvas = Image.new('RGB', (TARGET_W, TARGET_H), bg_color)
    
    # Floor contact shadow
    sw = int(new_w * 0.94)
    sh = int(max(24, new_h * 0.08))
    shadow_img = Image.new('RGBA', (sw, sh), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow_img)
    s_draw.ellipse([0, 0, sw, sh], fill=(35, 30, 25, 75))
    shadow_blur = shadow_img.filter(ImageFilter.GaussianBlur(10))
    
    pos_x = (TARGET_W - new_w) // 2
    pos_y = (TARGET_H - new_h) // 2 + 30
    
    sh_x = (TARGET_W - sw) // 2
    sh_y = pos_y + new_h - int(sh * 0.45)
    
    canvas.paste(shadow_blur, (sh_x, sh_y), shadow_blur)
    
    if resized_prod.mode == 'RGBA':
        canvas.paste(resized_prod, (pos_x, pos_y), resized_prod)
    else:
        canvas.paste(resized_prod, (pos_x, pos_y))
        
    return canvas

tables_pipeline = [
    # 1. Abbey Solid Wood
    {
        'studio_src': 'scratch/candidates_tables_yandex/table1_abbey_studio_1.jpg',
        'env_src': 'scratch/candidates_tables_yandex/table1_abbey_env_1.jpg',
        'studio_out': 'public/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg',
        'env_out': 'public/products/odessy_abbey_solid_wood_coffee_table_env.jpg',
        'is_studio_canvas': True
    },
    # 2. Zyra Marble Top
    {
        'studio_src': 'scratch/candidates_tables_yandex/table2_zyra_studio_1.jpg',
        'env_src': 'scratch/candidates_tables_yandex/table2_zyra_env_2.jpg',
        'studio_out': 'public/products/odessy_zyra_marble_coffee_table_3x4.jpg',
        'env_out': 'public/products/odessy_zyra_marble_coffee_table_env.jpg',
        'is_studio_canvas': True
    },
    # 3. Valencia Glass Top
    {
        'studio_src': 'scratch/candidates_tables_yandex/table3_valencia_studio_2.jpg',
        'env_src': 'scratch/candidates_tables_yandex/table3_valencia_env_2.jpg',
        'studio_out': 'public/products/odessy_valencia_glass_coffee_table_3x4.jpg',
        'env_out': 'public/products/odessy_valencia_glass_coffee_table_env.jpg',
        'is_studio_canvas': False
    },
    # 4. Galliano Metal
    {
        'studio_src': 'scratch/candidates_tables_yandex/table4_galliano_studio_1.jpg',
        'env_src': 'scratch/candidates_tables_yandex/table4_galliano_studio_2.jpg',
        'studio_out': 'public/products/odessy_galliano_metal_coffee_table_3x4.jpg',
        'env_out': 'public/products/odessy_galliano_metal_coffee_table_env.jpg',
        'is_studio_canvas': True
    },
    # 5. Elvas Nesting Set
    {
        'studio_src': 'scratch/candidates_tables_yandex/table5_elvas_studio_1.jpg',
        'env_src': 'scratch/candidates_tables_yandex/table5_elvas_env_3.jpg',
        'studio_out': 'public/products/odessy_elvas_nesting_coffee_table_3x4.jpg',
        'env_out': 'public/products/odessy_elvas_nesting_coffee_table_env.jpg',
        'is_studio_canvas': True
    }
]

print("Processing authentic Center Table images...")

for idx, item in enumerate(tables_pipeline, 1):
    print(f"\n[Table {idx}] Studio: {item['studio_src']}")
    raw_studio = Image.open(item['studio_src']).convert('RGB')
    if item['is_studio_canvas']:
        final_studio = process_studio_on_canvas(raw_studio)
    else:
        cropped_studio = crop_to_3x4(raw_studio)
        final_studio = cropped_studio.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    final_studio.save(item['studio_out'], 'JPEG', quality=95, dpi=(300, 300))
    print(f"  Saved Studio: {item['studio_out']} ({final_studio.size})")
    
    print(f"[Table {idx}] Env: {item['env_src']}")
    raw_env = Image.open(item['env_src']).convert('RGB')
    cropped_env = crop_to_3x4(raw_env)
    final_env = cropped_env.resize((TARGET_W, TARGET_H), Image.Resampling.LANCZOS)
    final_env.save(item['env_out'], 'JPEG', quality=95, dpi=(300, 300))
    print(f"  Saved Env: {item['env_out']} ({final_env.size})")

print("\nAll 10 authentic center table images processed successfully!")

