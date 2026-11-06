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
title = "ODESSY FURNITURE — CENTER TABLE INTEGRATION SHOWCASE"
subtitle = "Phase 10 Integration: 5 Pepperfry Verified Products | 10 Assets @ 896x1200 (3:4 Portrait)"
draw.text((padding, 45), title, fill=(212, 175, 55))
draw.text((padding, 95), subtitle, fill=(168, 162, 158))

products = [
    {
        'title': '1. Odessy Abbey Solid Wood Rectangular Coffee Table',
        'sub': 'Woodsworth Inspired Solid Sheesham Wood Center Table | ₹16,499 (MRP ₹33,999) | ID: 1744836',
        'studio': 'public/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg',
        'env': 'public/products/odessy_abbey_solid_wood_coffee_table_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/abbey-large-solid-wood...-1744836.html',
            '• Shape & Dimensions: Rectangular | 106.68 x 55.88 x 45.72 cm (42.0 x 22.0 x 18.0 in)',
            '• Material & Finish: 100% Solid Kiln-Dried Sheesham Wood | Rustic Teak Finish',
            '• Tabletop & Legs: Solid Sheesham Wood Plank Surface | Sturdy Block Support Legs',
            '• Storage: Full-Length Open Lower Slatted Storage Shelf for Books & Magazines',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 36 Months Warranty'
        ]
    },
    {
        'title': '2. Odessy Zyra Italian Marble Top Coffee Table',
        'sub': 'Royaloak Inspired Luxury Composite Marble Center Table | ₹29,000 (MRP ₹56,000) | ID: 2159069',
        'studio': 'public/products/odessy_zyra_marble_coffee_table_3x4.jpg',
        'env': 'public/products/odessy_zyra_marble_coffee_table_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/zyra-marble-top-coffee-table...-2159069.html',
            '• Shape & Dimensions: Rectangular with Rounded Safety Corners | 119.0 x 58.0 x 48.0 cm',
            '• Primary Material: Polished Italian Composite Marble & High-Gloss Lacquered Wood Base',
            '• Tabletop & Trim: Chamfered Polished Marble Slab | Inlaid Champagne Gold Trim Pedestal',
            '• Storage: 2 Integrated Telescopic Soft-Close Storage Drawers for Living Room Essentials',
            '• Delivery & Warranty: Free White-Glove Installation in Chennai | 12 Months Warranty'
        ]
    },
    {
        'title': '3. Odessy Valencia Beveled Glass Sheesham Coffee Table',
        'sub': 'Woodsworth Inspired Inset Toughened Glass Center Table | ₹22,499 (MRP ₹30,999) | ID: 1823210',
        'studio': 'public/products/odessy_valencia_glass_coffee_table_3x4.jpg',
        'env': 'public/products/odessy_valencia_glass_coffee_table_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/valencia-sheesham-wood-coffee-table...-1823210.html',
            '• Shape & Dimensions: Rectangular Inset Panel | 107.0 x 56.0 x 41.0 cm (42.1 x 22.0 x 16.1 in)',
            '• Primary Material: 8mm Toughened Beveled Float Glass & Solid Sheesham Wood',
            '• Tabletop & Frame: Scratch-Resistant Clear Glass Inset | Hand-Crafted Provincial Teak Frame',
            '• Storage: 2 Smooth Sliding Wooden Drawers + Full-Length Slatted Magazine Tier',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 36 Months Warranty'
        ]
    },
    {
        'title': '4. Odessy Galliano Geometric Metal Coffee Table',
        'sub': 'CasaCraft Inspired Architectural Hollow Tube Metal Frame | ₹18,990 (MRP ₹24,999) | ID: 2186809',
        'studio': 'public/products/odessy_galliano_metal_coffee_table_3x4.jpg',
        'env': 'public/products/odessy_galliano_metal_coffee_table_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/galliano-metal-coffee-table...-2186809.html',
            '• Shape & Dimensions: Rectangular Geometric Silhouette | 100.0 x 60.0 x 43.0 cm',
            '• Primary Material: Heavy-Gauge Electroplated Mild Steel & Sintered Glazed Porcelain',
            '• Tabletop & Frame: Heat & Stain Resistant Travertine Slab | Brushed Matte Gold Frame',
            '• Architecture: Open Floating Pedestal Base with Balanced Floor Ground Clearance',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 36 Months Warranty'
        ]
    },
    {
        'title': '5. Odessy Elvas Round Porcelain Nesting Table Set',
        'sub': 'CasaCraft Inspired 2-Piece Retractable Stacking Tables | ₹14,990 (MRP ₹22,999) | ID: 1959345',
        'studio': 'public/products/odessy_elvas_nesting_coffee_table_3x4.jpg',
        'env': 'public/products/odessy_elvas_nesting_coffee_table_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/elvas-metal-round-nesting...-1959345.html',
            '• Configuration: 2-Piece Circular Nesting Set (Big: 71x71x46 cm | Small: 61x61x41 cm)',
            '• Primary Material: Cold-Rolled Carbon Tubular Steel & Calacatta Glazed Porcelain',
            '• Tabletop & Finish: Polished White Calacatta Veined Stone | Weatherproof Matte Black Coating',
            '• Nesting Architecture: 100% Retractable Nested Stowing for Dynamic Living Room Configurations',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 36 Months Warranty'
        ]
    }
]

y_offset = header_h + 30
for idx, p in enumerate(products):
    # Product title & sub
    draw.text((padding, y_offset), p['title'], fill=(243, 233, 218))
    draw.text((padding, y_offset + 32), p['sub'], fill=(212, 175, 55))
    
    # Draw Studio Image
    studio_x = padding
    img_y = y_offset + 70
    if os.path.exists(p['studio']):
        s_img = Image.open(p['studio']).resize((card_w, card_h), Image.Resampling.LANCZOS)
        canvas.paste(s_img, (studio_x, img_y))
        draw.rectangle([(studio_x, img_y), (studio_x + card_w, img_y + card_h)], outline=(60, 55, 45), width=1)
        draw.text((studio_x + 10, img_y + card_h - 25), "STUDIO SHOWCASE (896x1200)", fill=(212, 175, 55))
        
    # Draw Lifestyle Image
    env_x = studio_x + card_w + 24
    if os.path.exists(p['env']):
        e_img = Image.open(p['env']).resize((card_w, card_h), Image.Resampling.LANCZOS)
        canvas.paste(e_img, (env_x, img_y))
        draw.rectangle([(env_x, img_y), (env_x + card_w, img_y + card_h)], outline=(60, 55, 45), width=1)
        draw.text((env_x + 10, img_y + card_h - 25), "LIFESTYLE INTERIOR (896x1200)", fill=(212, 175, 55))
        
    # Draw Specs Box
    spec_x = env_x + card_w + 30
    draw.rectangle([(spec_x, img_y), (W - padding, img_y + card_h)], fill=(24, 23, 20), outline=(50, 46, 38))
    
    draw.text((spec_x + 20, img_y + 20), "VERIFIED PEPPERFRY SPECIFICATIONS", fill=(212, 175, 55))
    
    spec_y = img_y + 60
    for s in p['specs']:
        draw.text((spec_x + 20, spec_y), s, fill=(200, 195, 185))
        spec_y += 32
        
    y_offset += row_h

os.makedirs('public/screenshots', exist_ok=True)
out_sheet = 'public/screenshots/center_table_showcase_sheet.jpg'
canvas.save(out_sheet, 'JPEG', quality=95)
print(f"Generated showcase sheet: {out_sheet} ({canvas.size})")

