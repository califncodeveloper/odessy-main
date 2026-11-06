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

# Simple text rendering
# Header title
title = "ODESSY FURNITURE — BEDS & WARDROBES INTEGRATION SHOWCASE"
subtitle = "Phase 6 Integration: 5 Pepperfry Verified Products | 10 Assets @ 896x1200 (3:4 Portrait)"
draw.text((padding, 45), title, fill=(212, 175, 55))
draw.text((padding, 95), subtitle, fill=(168, 162, 158))

products = [
    {
        'title': '1. Odessy Marlow Solid Sheesham King Size Bed',
        'sub': 'Amberville Inspired Handcrafted Solid Rosewood with Box Storage | ₹74,999 (MRP ₹1,04,999)',
        'studio': 'public/products/marlow_sheesham_king_bed_3x4.jpg',
        'env': 'public/products/marlow_sheesham_king_bed_env.jpg'
    },
    {
        'title': '2. Odessy Tulsa Solid Sheesham Queen Size Bed',
        'sub': 'Woodsworth Inspired Solid Timber Queen Bed with 4-Box Storage | ₹45,219 (MRP ₹59,299)',
        'studio': 'public/products/tulsa_sheesham_queen_bed_3x4.jpg',
        'env': 'public/products/tulsa_sheesham_queen_bed_env.jpg'
    },
    {
        'title': '3. Odessy Zephyr Solid Sheesham Hydraulic Bed',
        'sub': 'Woodsworth Inspired Gas-Lift Hydraulic Bed in Solid Sheesham Wood | ₹85,499 (MRP ₹1,20,749)',
        'studio': 'public/products/zephyr_sheesham_hydraulic_bed_3x4.jpg',
        'env': 'public/products/zephyr_sheesham_hydraulic_bed_env.jpg'
    },
    {
        'title': '4. Odessy Kosmo Eternia 3-Door Wardrobe',
        'sub': 'Spacewood Inspired Melamine 3-Door Wardrobe with Dressing Mirror & Locker | ₹56,499 (MRP ₹76,624)',
        'studio': 'public/products/eternia_modern_3_door_wardrobe_3x4.jpg',
        'env': 'public/products/eternia_modern_3_door_wardrobe_env.jpg'
    },
    {
        'title': '5. Odessy Verta 4-Door Wardrobe with Dual Mirrors',
        'sub': 'Spacewood Inspired Grand 4-Door Storage Suite with External Drawers | ₹41,999 (MRP ₹60,999)',
        'studio': 'public/products/verta_modern_4_door_wardrobe_3x4.jpg',
        'env': 'public/products/verta_modern_4_door_wardrobe_env.jpg'
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

out_path = 'public/preview_beds_showcase.jpg'
canvas.save(out_path, 'JPEG', quality=95)
print(f"Showcase sheet saved to {out_path} ({canvas.size})")

