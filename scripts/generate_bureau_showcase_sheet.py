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
title = "ODESSY FURNITURE — STEEL BUREAU INTEGRATION SHOWCASE"
subtitle = "Phase 8 Integration: 5 Pepperfry Verified Products | 10 Assets @ 896x1200 (3:4 Portrait)"
draw.text((padding, 45), title, fill=(212, 175, 55))
draw.text((padding, 95), subtitle, fill=(168, 162, 158))

products = [
    {
        'title': '1. Odessy Slimline 2-Door Metal Almirah',
        'sub': 'Godrej Interio Inspired Heavy CRCA Steel 2-Door Bureau in Frost Grey | ₹29,990 (MRP ₹42,500)',
        'studio': 'public/products/godrej_slimline_2_door_almirah_3x4.jpg',
        'env': 'public/products/godrej_slimline_2_door_almirah_env.jpg'
    },
    {
        'title': '2. Odessy Slimline 3-Door High-Capacity Steel Wardrobe',
        'sub': 'Godrej Interio Inspired Spacious 3-Door Metal Bureau in Ultra Marine Blue | ₹48,490 (MRP ₹59,893)',
        'studio': 'public/products/godrej_slimline_3_door_almirah_3x4.jpg',
        'env': 'public/products/godrej_slimline_3_door_almirah_env.jpg'
    },
    {
        'title': '3. Odessy Slimline 2-Door Steel Almirah with Security Locker',
        'sub': 'Godrej Interio Inspired Vibrant Coral Red Almirah with Vault Locker | ₹28,990 (MRP ₹39,500)',
        'studio': 'public/products/godrej_slimline_internal_locker_wardrobe_3x4.jpg',
        'env': 'public/products/godrej_slimline_internal_locker_wardrobe_env.jpg'
    },
    {
        'title': '4. Odessy Slimline 2-Door Steel Wardrobe with Dressing Mirror',
        'sub': 'Godrej Interio Inspired Metal Almirah with Full Dressing Mirror & Locker | ₹27,490 (MRP ₹38,900)',
        'studio': 'public/products/godrej_slimline_mirror_wardrobe_3x4.jpg',
        'env': 'public/products/godrej_slimline_mirror_wardrobe_env.jpg'
    },
    {
        'title': '5. Odessy Centurion Premium Modern Metal Almirah',
        'sub': 'Godrej Interio Inspired Luxury 2-Door Steel Almirah in Royal Burgundy | ₹64,990 (MRP ₹84,500)',
        'studio': 'public/products/godrej_centurion_luxury_almirah_3x4.jpg',
        'env': 'public/products/godrej_centurion_luxury_almirah_env.jpg'
    }
]

y_curr = header_h + 30

for idx, p in enumerate(products):
    # Card banner background
    draw.rounded_rectangle([(padding, y_curr), (W - padding, y_curr + row_h - 20)], radius=12, fill=(28, 27, 24), outline=(45, 42, 38))
    
    # Title & Subtitle
    draw.text((padding + 30, y_curr + 25), p['title'], fill=(245, 245, 244))
    draw.text((padding + 30, y_curr + 55), p['sub'], fill=(168, 162, 158))
    
    # Images
    x_img1 = padding + 30
    x_img2 = padding + 30 + card_w + 40
    y_img = y_curr + 90
    
    # Load and resize Studio
    im_studio = Image.open(p['studio']).convert('RGB').resize((card_w, card_h), Image.Resampling.LANCZOS)
    canvas.paste(im_studio, (x_img1, y_img))
    draw.rectangle([(x_img1, y_img + card_h - 32), (x_img1 + card_w, y_img + card_h)], fill=(15, 15, 15))
    draw.text((x_img1 + 12, y_img + card_h - 24), "STUDIO SHOWCASE (896x1200)", fill=(212, 175, 55))
    
    # Load and resize Env
    im_env = Image.open(p['env']).convert('RGB').resize((card_w, card_h), Image.Resampling.LANCZOS)
    canvas.paste(im_env, (x_img2, y_img))
    draw.rectangle([(x_img2, y_img + card_h - 32), (x_img2 + card_w, y_img + card_h)], fill=(15, 15, 15))
    draw.text((x_img2 + 12, y_img + card_h - 24), "LIFESTYLE INTERIOR (896x1200)", fill=(56, 189, 248))
    
    # Text metadata column on the right
    x_meta = x_img2 + card_w + 40
    draw.text((x_meta, y_img + 10), "SPECIFICATIONS & DETAILS:", fill=(212, 175, 55))
    
    details = [
        f"• Dimensions: Exact 896 x 1200 px (3:4 Portrait Ratio)",
        f"• Steel Gauge: High-Tensile Cold Rolled Close Annealed (CRCA) Steel",
        f"• Finish: Multi-stage Anti-Rust Phosphate + Polyester Powder Coat",
        f"• Security: Unpickable Multi-Lever / Deadbolt Locking Mechanism",
        f"• Negative Space: Centered ~75-80% canvas occupancy, full view top-to-bottom",
        f"• Odessy Delivery: Free Doorstep Delivery & White Glove Setup in Chennai"
    ]
    
    for d_idx, d in enumerate(details):
        draw.text((x_meta, y_img + 50 + d_idx * 32), d, fill=(214, 211, 209))
        
    y_curr += row_h

out_path = 'public/preview_bureau_showcase.jpg'
canvas.save(out_path, 'JPEG', quality=90)
print(f"Showcase sheet saved: {out_path} ({canvas.size})")

