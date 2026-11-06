import os
from PIL import Image, ImageDraw, ImageFont

W = 1800
card_w = 400
card_h = int(card_w * 4 / 3) # 533 px
padding = 40
header_h = 160
row_h = card_h + 120
total_h = header_h + 5 * row_h + 60

canvas = Image.new('RGB', (W, total_h), (18, 17, 15))
draw = ImageDraw.Draw(canvas)

# Header
draw.rectangle([(0, 0), (W, header_h)], fill=(24, 23, 20))
draw.line([(0, header_h), (W, header_h)], fill=(212, 175, 55), width=3)

# Header title
title = "ODESSY FURNITURE — POOJA STAND & HOME MANDIR INTEGRATION SHOWCASE"
subtitle = "Phase 7 Integration: 5 Pepperfry Verified Products | 10 Assets @ 896x1200 (3:4 Portrait)"
draw.text((padding, 45), title, fill=(212, 175, 55))
draw.text((padding, 95), subtitle, fill=(168, 162, 158))

products = [
    {
        'title': '1. Odessy Aadhyaatmik Solid Teak Wood Pooja Mandir with Dome',
        'sub': 'DZYN Inspired Traditional Solid Teak Temple with 2-Door Storage & Dome | ₹42,990 (MRP ₹66,500)',
        'studio': 'public/products/dzyn_traditional_teak_mandir_3x4.jpg',
        'env': 'public/products/dzyn_traditional_teak_mandir_env.jpg'
    },
    {
        'title': '2. Odessy Modern Laser-Cut Pooja Unit with Storage Cabinet',
        'sub': 'Decor Smart Inspired Pristine White Mandir with LED Backlight & Storage | ₹6,999 (MRP ₹19,999)',
        'studio': 'public/products/decorsmart_modern_pooja_cabinet_3x4.jpg',
        'env': 'public/products/decorsmart_modern_pooja_cabinet_env.jpg'
    },
    {
        'title': '3. Odessy Alaya Wall-Mounted Pooja Mandir with Dome',
        'sub': 'DZYN Inspired Handcrafted Solid Timber Wall Mandir with Diya Drawer | ₹3,999 (MRP ₹7,000)',
        'studio': 'public/products/alaya_wall_mount_mandir_3x4.jpg',
        'env': 'public/products/alaya_wall_mount_mandir_env.jpg'
    },
    {
        'title': '4. Odessy Sacred Home Large Floor Rested Designer Pooja Mandir',
        'sub': 'DZYN Inspired Teak Wood Double-Door Sanctum with Tiered Shikhara & Drawers | ₹21,990 (MRP ₹42,500)',
        'studio': 'public/products/sacred_home_designer_mandir_3x4.jpg',
        'env': 'public/products/sacred_home_designer_mandir_env.jpg'
    },
    {
        'title': '5. Odessy Shubh 5-Ft Compact Apartment Pooja Stand with Racks',
        'sub': 'Bluewud Inspired Slim Vertical Space-Saving Temple with Multi-Tier Storage | ₹5,099 (MRP ₹9,499)',
        'studio': 'public/products/bluewud_shubh_pooja_stand_3x4.jpg',
        'env': 'public/products/bluewud_shubh_pooja_stand_env.jpg'
    }
]

y_curr = header_h + 30

for p in products:
    # Product Header
    draw.text((padding, y_curr), p['title'], fill=(255, 255, 255))
    draw.text((padding, y_curr + 25), p['sub'], fill=(163, 163, 163))
    
    img_y = y_curr + 60
    
    # Studio Image
    if os.path.exists(p['studio']):
        im_s = Image.open(p['studio']).resize((card_w, card_h), Image.Resampling.LANCZOS)
        canvas.paste(im_s, (padding, img_y))
        draw.rectangle([(padding, img_y), (padding + card_w, img_y + card_h)], outline=(50, 50, 50), width=1)
        draw.text((padding, img_y + card_h + 8), "Studio Showcase (896x1200, 3:4)", fill=(212, 175, 55))
    
    # Env Image
    if os.path.exists(p['env']):
        im_e = Image.open(p['env']).resize((card_w, card_h), Image.Resampling.LANCZOS)
        canvas.paste(im_e, (padding + card_w + 30, img_y))
        draw.rectangle([(padding + card_w + 30, img_y), (padding + card_w + 30 + card_w, img_y + card_h)], outline=(50, 50, 50), width=1)
        draw.text((padding + card_w + 30, img_y + card_h + 8), "Lifestyle Interior (896x1200, 3:4)", fill=(74, 222, 128))
        
    y_curr += row_h

out_path = 'public/preview_pooja_showcase.jpg'
canvas.save(out_path, 'JPEG', quality=95)
print(f"Showcase sheet saved to {out_path} ({canvas.size})")

