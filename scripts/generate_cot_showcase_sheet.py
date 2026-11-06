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
title = "ODESSY FURNITURE — STEEL COT INTEGRATION SHOWCASE"
subtitle = "Phase 9 Integration: 5 Pepperfry Verified Products | 10 Assets @ 896x1200 (3:4 Portrait)"
draw.text((padding, 45), title, fill=(212, 175, 55))
draw.text((padding, 95), subtitle, fill=(168, 162, 158))

products = [
    {
        'title': '1. Odessy Striker Minimalist Steel Single Cot',
        'sub': 'Nilkamal Sleep Inspired High-Tensile Tubular Steel Bed | ₹7,490 (MRP ₹10,900) | ID: 2035882',
        'studio': 'public/products/odessy_striker_single_cot_3x4.jpg',
        'env': 'public/products/odessy_striker_single_cot_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/striker-metal-single-bed...-2035882.html',
            '• Bed Size & Dim: Single Bed | 199.0 x 98.0 x 91.0 cm (78.3 x 38.6 x 35.8 in)',
            '• Material & Gauge: High-Tensile Cold-Rolled Carbon Tubular Steel (1.2 mm)',
            '• Headboard / Foot: Vertical Slat Grill with Crown | Integrated Low-Profile Rail',
            '• Support & Capacity: Multi-Ribbed Interlocking Metal Cross Slats | 150 kg (330 lbs)',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 12 Months Warranty'
        ]
    },
    {
        'title': '2. Odessy Akaba Curved Arch Metal Double Cot',
        'sub': 'FurnitureKraft Inspired Heavy-Gauge Double Steel Cot | ₹11,990 (MRP ₹16,500) | ID: 1779927',
        'studio': 'public/products/odessy_akaba_double_cot_3x4.jpg',
        'env': 'public/products/odessy_akaba_double_cot_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/metallika-akaba-double-size-bed...-1779927.html',
            '• Bed Size & Dim: Double Bed | 203.2 x 127.0 x 96.5 cm (80.0 x 50.0 x 38.0 in)',
            '• Material & Gauge: Commercial Grade ERW Mild Steel Tubes (1.2 mm Pipe Gauge)',
            '• Headboard / Foot: Curved Arch Crown with Vertical Spoke Grill | Filleted Corners',
            '• Support & Capacity: Welded Steel Cross-Members + Dual Center Legs | 220 kg (485 lbs)',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 36 Months Warranty'
        ]
    },
    {
        'title': '3. Odessy Kabul Contemporary Metal Queen Bed',
        'sub': 'FurnitureKraft Inspired Geometric Ladder-Grid Steel Bed | ₹14,490 (MRP ₹21,000) | ID: 542377',
        'studio': 'public/products/odessy_kabul_queen_bed_3x4.jpg',
        'env': 'public/products/odessy_kabul_queen_bed_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/kabul-metal-queen-size-bed...-542377.html',
            '• Bed Size & Dim: Queen Size | 208.3 x 160.0 x 94.0 cm (82.0 x 63.0 x 37.0 in)',
            '• Material & Gauge: Prime Phosphatized ERW Steel Tubing (1.2 - 1.4 mm)',
            '• Headboard / Foot: Contemporary Ladder-Grid Architectural Lattice with Filleted Crown',
            '• Support & Capacity: Dense Grid Platform + 4 Center Support Posts | 280 kg (617 lbs)',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 24 Months Warranty'
        ]
    },
    {
        'title': '4. Odessy Striker Grand Architectural Steel King Bed',
        'sub': 'Nilkamal Sleep Inspired High-Strength King Steel Bed | ₹16,990 (MRP ₹24,500) | ID: 1959723',
        'studio': 'public/products/odessy_striker_king_bed_3x4.jpg',
        'env': 'public/products/odessy_striker_king_bed_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/striker-metal-king-size-bed...-1959723.html',
            '• Bed Size & Dim: King Size | 206.0 x 189.5 x 91.0 cm (81.1 x 74.6 x 35.8 in)',
            '• Material & Gauge: 100% Anti-Rust Heavy Carbon Tubular Steel (1.4 mm Gauge)',
            '• Headboard / Foot: Expansive Horizontal Architectural Slat Headboard | Clean Joints',
            '• Support & Capacity: Dual Longitudinal Spines + 6 Heavy Ground Struts | 350 kg (770 lbs)',
            '• Delivery & Warranty: Free Insured Express Delivery in Chennai | 12 Months Warranty'
        ]
    },
    {
        'title': '5. Odessy Gemini Luxury Four-Poster Metal Canopy Bed',
        'sub': 'Homdec Inspired Heavy Wrought Iron 6.25 ft Canopy Bed | ₹23,990 (MRP ₹34,000) | ID: 2184229',
        'studio': 'public/products/odessy_gemini_poster_bed_3x4.jpg',
        'env': 'public/products/odessy_gemini_poster_bed_env.jpg',
        'specs': [
            '• Pepperfry URL: https://www.pepperfry.com/product/gemini-metal-poster-bed...-2184229.html',
            '• Bed Size & Dim: Queen Canopy | 208.0 x 160.0 x 191.0 cm (81.9 x 63.0 x 75.2 in)',
            '• Material & Gauge: Structural Wrought Iron & Cold-Rolled Carbon Steel (1.5 mm)',
            '• Headboard / Foot: Industrial Geometric Cross-Brace Lattice with Dual Upper Tie-Bars',
            '• Support & Capacity: Heavy Cross-Slat Platform + 5 Center Load Stems | 380 kg (838 lbs)',
            '• Delivery & Warranty: Free Insured White-Glove Setup in Chennai | 24 Months Warranty'
        ]
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
    draw.text((x_meta, y_img + 10), "VERIFIED PEPPERFRY SPECIFICATIONS & ASSET METRICS:", fill=(212, 175, 55))
    
    for d_idx, d in enumerate(p['specs']):
        draw.text((x_meta, y_img + 50 + d_idx * 34), d, fill=(214, 211, 209))
        
    y_curr += row_h

out_path = 'public/preview_cot_showcase.jpg'
canvas.save(out_path, 'JPEG', quality=92)
print(f"Showcase sheet saved: {out_path} ({canvas.size})")

