import os
import shutil
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter, ImageDraw
import rembg

PRODUCT_CONFIGS = [
    {
        'id': 'butterfly-mesh-chair',
        'file': 'butterfly_mesh_3x4.jpg',
        'color': '#A65335', # Warm Spiced Cognac / Terracotta
        'name': 'The Butterfly Mesh'
    },
    {
        'id': 'sovereign-leather-chair',
        'file': 'sovereign_leather_3x4.jpg',
        'color': '#204052', # Deep Royal Prussian Slate / Ocean Petroleum
        'name': 'The Sovereign Recliner'
    },
    {
        'id': 'glass-spider-table',
        'file': 'glass_spider_table_3x4.jpg',
        'color': '#9E6038', # Rich Burnished Copper / Warm Ochre Gold
        'name': 'Cristallo Spider Table'
    },
    {
        'id': 'marvel-mesh-chair',
        'file': 'marvel_mesh_3x4.jpg',
        'color': '#2E4D3E', # Deep Forest Pine / Emerald Moss
        'name': 'The Marvel High-Back'
    },
    {
        'id': 'quilted-pedestal-bar-stool',
        'file': 'quilted_bar_stool_3x4.jpg',
        'color': '#5C3652', # Noble Velvet Plum / Royal Amethyst
        'name': 'Diamond-Quilted Bar Stool'
    },
    {
        'id': 'eiffel-accent-chair',
        'file': 'eiffel_chair_3x4.jpg',
        'color': '#466275', # Architectural Sky Slate / Nordic Powder Blue
        'name': 'Modern Eiffel Accent Chair'
    },
    {
        'id': 'wooden-recliner-chair',
        'file': 'wooden_recliner_3x4.jpg',
        'color': '#22324D', # Deep Midnight Sapphire / Indigo Dusk
        'name': 'Wooden Recliner Chair'
    },
    {
        'id': 'tulip-swivel-chair',
        'file': 'tulip_swivel_chair_3x4.jpg',
        'color': '#964B44', # Warm Terracotta Rose / Coral Clay
        'name': 'Tulip Chrome Swivel Shell Chair'
    },
    {
        'id': 'jazz-headrest-chair',
        'file': 'jazz_headrest_3x4.jpg',
        'color': '#555E38', # Earthy Olive Drab / Sage Khaki
        'name': 'Jazz Headrest Mesh Chair'
    },
    {
        'id': 'hydraulic-bar-stool',
        'file': 'hydraulic_bar_stool_3x4.jpg',
        'color': '#7C4524', # Rich Burnt Umber / Dark Caramel
        'name': 'Luxury Hydraulic Bar Stool'
    },
    {
        'id': 'cantilever-visitor-chair',
        'file': 'cantilever_visitor_3x4.jpg',
        'color': '#2D525A', # Muted Steel Teal / Deep Aquamarine
        'name': 'Cantilever Chrome Visitor Chair'
    },
    {
        'id': 'x-mesh-chair',
        'file': 'x_mesh_3x4.jpg',
        'color': '#986928', # Warm Autumn Ochre / Mustard Saffron
        'name': 'X-Mesh Ergonomic Chair'
    },
    {
        'id': 'retmax-mesh-chair',
        'file': 'retmax_mesh_3x4.jpg',
        'color': '#4C4362', # Architectural Slate Violet / Heather Dusk
        'name': 'Retmax Mesh Task Chair'
    },
    {
        'id': 'bistro-chrome-cafe-chair',
        'file': 'bistro_cafe_chair_3x4.jpg',
        'color': '#853835', # Vintage Tuscan Rosso / Terracotta Wine
        'name': 'Ladder-Back Chrome Cafe Chair'
    },
    {
        'id': 'box-mesh-chair',
        'file': 'box_mesh_3x4.jpg',
        'color': '#254E6B', # Deep Marine Cobalt / Aegean Slate
        'name': 'Box Mesh Computer Chair'
    },
    {
        'id': 'c-shape-laptop-table',
        'file': 'c_shape_table_3x4.jpg',
        'color': '#8C4730', # Subdued Cedar Rust / Warm Sienna
        'name': 'C-Shape Laptop Side Table'
    },
    {
        'id': 'magazine-literature-stand',
        'file': 'magazine_stand_3x4.jpg',
        'color': '#8C7862', # Warm Travertine Sand / Cream Greige
        'name': 'Brochure & Catalog Display Stand'
    },
    {
        'id': 'training-writing-pad-chair',
        'file': 'training_writing_pad_chair_3x4.jpg',
        'color': '#284B42', # Deep Spruce / Alpine Evergreen
        'name': 'Seminar Training Chair with Writing Tablet'
    },
    {
        'id': 'webbed-lattice-chair',
        'file': 'webbed_lattice_chair_3x4.jpg',
        'color': '#634252', # Dusk Mauve / Warm Fig
        'name': 'Lattice Webbed Accent Chair'
    },
    {
        'id': 'zero-gravity-cushion-recliner',
        'file': 'zero_gravity_recliner_3x4.jpg',
        'color': '#8E6C38', # Golden Sand Dune / Warm Desert Ochre
        'name': 'Zero-Gravity Cushion Recliner'
    },
    {
        'id': 'folding-cushion-conference-chair',
        'file': 'folding_cushion_chair_3x4.jpg',
        'color': '#26464E', # Deep Atlantic Teal / Storm Petrol
        'name': 'Padded Folding Conference Chair'
    },
    {
        'id': 'stacking-chrome-ring-stool',
        'file': 'stacking_ring_stool_3x4.jpg',
        'color': '#7B262A', # Rich Crimson Garnet / Imperial Red
        'name': 'Stackable Ring Frame Stool'
    },
]

def render_colorful_product(session, input_path, output_path, bg_color_hex, light_intensity=1.38, shadow_opacity=0.48):
    src = Image.open(input_path)
    # Remove background using persistent session
    prod = rembg.remove(src, session=session)
    w, h = prod.size
    
    # Parse hex color
    hex_clean = bg_color_hex.lstrip('#')
    base_r, base_g, base_b = tuple(int(hex_clean[i:i+2], 16) for i in (0, 2, 4))
    
    # Create spotlight backdrop using radial gradient
    cx, cy = w * 0.5, h * 0.42
    max_radius = np.sqrt((w * 0.82)**2 + (h * 0.82)**2)
    
    y_coords, x_coords = np.ogrid[:h, :w]
    dist_from_center = np.sqrt((x_coords - cx)**2 + (y_coords - cy)**2)
    norm_dist = np.clip(dist_from_center / max_radius, 0, 1)
    
    # Dramatic spotlight curve (bright center, deep rich edges)
    falloff = np.cos(norm_dist * np.pi * 0.5) ** 1.8
    multiplier = 0.52 + (light_intensity - 0.52) * falloff
    
    # Subtle floor tone in lower 30%
    floor_factor = np.clip((y_coords - h * 0.70) / (h * 0.30), 0, 1) * 0.20
    multiplier = multiplier * (1.0 - floor_factor)
    
    r_channel = np.clip(base_r * multiplier, 0, 255).astype(np.uint8)
    g_channel = np.clip(base_g * multiplier, 0, 255).astype(np.uint8)
    b_channel = np.clip(base_b * multiplier, 0, 255).astype(np.uint8)
    
    bg_img = Image.fromarray(np.stack([r_channel, g_channel, b_channel], axis=-1)).convert('RGBA')
    
    # Realistic shadows
    shadow_mask = Image.new('L', (w, h), 0)
    draw = ImageDraw.Draw(shadow_mask)
    
    bbox = prod.getbbox()
    if bbox:
        bx0, by0, bx1, by1 = bbox
        chair_w = bx1 - bx0
        # 1. Broad soft ambient shadow
        draw.ellipse([bx0 + chair_w * 0.05, by1 - 45, bx1 - chair_w * 0.05, by1 + 55], fill=int(255 * shadow_opacity * 0.55))
        # 2. Tight deep contact shadow
        draw.ellipse([bx0 + chair_w * 0.15, by1 - 25, bx1 - chair_w * 0.15, by1 + 25], fill=int(255 * shadow_opacity))
    
    shadow_blur = shadow_mask.filter(ImageFilter.GaussianBlur(radius=26))
    
    shadow_r = int(base_r * 0.15)
    shadow_g = int(base_g * 0.15)
    shadow_b = int(base_b * 0.15)
    shadow_layer = Image.new('RGBA', (w, h), (shadow_r, shadow_g, shadow_b, 0))
    shadow_layer.putalpha(shadow_blur)
    
    composite = Image.alpha_composite(bg_img, shadow_layer)
    composite = Image.alpha_composite(composite, prod)
    composite.convert('RGB').save(output_path, 'JPEG', quality=95)

def main():
    products_dir = Path('public/products')
    backup_dir = products_dir / 'backup_black_bg'
    backup_dir.mkdir(exist_ok=True)
    
    print('Initializing rembg session...')
    session = rembg.new_session()
    
    total = len(PRODUCT_CONFIGS)
    print(f'Starting processing for {total} products with distinct single color backgrounds...')
    
    for idx, cfg in enumerate(PRODUCT_CONFIGS, 1):
        filename = cfg['file']
        src_path = products_dir / filename
        backup_path = backup_dir / filename
        
        if not src_path.exists():
            print(f'[{idx}/{total}] Skipping {filename} (not found)')
            continue
        
        # Backup original black background if not already backed up
        if not backup_path.exists():
            shutil.copy2(src_path, backup_path)
            
        # Use backup as source to ensure clean extraction without artifacts
        input_file = backup_path
        output_file = src_path
        
        # Skip if already processed today
        if output_file.exists() and output_file.stat().st_mtime > backup_path.stat().st_mtime:
            print(f'[{idx}/{total}] Skipping {filename} (already processed today)')
            continue
        
        print(f'[{idx}/{total}] Rendering {cfg["name"]} ({filename}) with color {cfg["color"]}...')
        try:
            render_colorful_product(session, input_file, output_file, cfg['color'])
            print(f'[{idx}/{total}] SUCCESS: {filename}')
        except Exception as e:
            print(f'[{idx}/{total}] ERROR processing {filename}: {e}')
            
    print('Finished rendering all product images with distinct single color backgrounds and dramatic lighting!')

if __name__ == '__main__':
    main()
