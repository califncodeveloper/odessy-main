import os

html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Odessy Furniture — Phase 9 Steel Cot Integration Preview</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    background: #0f1115;
    color: #e2e8f0;
    padding: 40px 20px;
    line-height: 1.5;
  }
  .header {
    max-width: 1400px;
    margin: 0 auto 40px auto;
    border-bottom: 2px solid #eab308;
    padding-bottom: 20px;
  }
  .header h1 {
    font-size: 28px;
    font-weight: 700;
    color: #facc15;
    letter-spacing: 0.5px;
  }
  .header p {
    color: #94a3b8;
    margin-top: 6px;
    font-size: 15px;
  }
  .stats-bar {
    display: flex;
    gap: 20px;
    margin-top: 15px;
  }
  .stat-badge {
    background: #1e293b;
    border: 1px solid #334155;
    padding: 6px 14px;
    border-radius: 6px;
    font-size: 13px;
    color: #cbd5e1;
  }
  .stat-badge b { color: #38bdf8; }
  .container {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .product-card {
    background: #181d26;
    border: 1px solid #283344;
    border-radius: 12px;
    overflow: hidden;
    padding: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  @media(max-width: 900px) {
    .product-card { grid-template-columns: 1fr; }
  }
  .images-row {
    display: flex;
    gap: 16px;
  }
  .image-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .image-box img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #334155;
    box-shadow: 0 10px 25px rgba(0,0,0,0.4);
    background: #1e293b;
  }
  .image-tag {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #94a3b8;
    text-align: center;
  }
  .details-box {
    display: flex;
    flex-direction: column;
    justifyContent: center;
  }
  .badge {
    align-self: flex-start;
    background: #854d0e;
    color: #fef08a;
    font-size: 12px;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 4px;
    margin-bottom: 12px;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 6px;
  }
  .tagline {
    font-size: 14px;
    color: #38bdf8;
    margin-bottom: 14px;
  }
  .price-row {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 16px;
  }
  .price {
    font-size: 26px;
    font-weight: 800;
    color: #4ade80;
  }
  .original-price {
    font-size: 16px;
    color: #64748b;
    text-decoration: line-through;
  }
  .specs-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 12px;
    font-size: 13px;
  }
  .specs-table tr {
    border-bottom: 1px solid #222d3d;
  }
  .specs-table td {
    padding: 7px 0;
  }
  .specs-table td.label {
    color: #94a3b8;
    width: 35%;
  }
  .specs-table td.val {
    color: #e2e8f0;
    font-weight: 500;
  }
  .ref-link {
    display: inline-block;
    margin-top: 14px;
    font-size: 13px;
    color: #38bdf8;
    text-decoration: none;
  }
  .ref-link:hover { text-decoration: underline; }
</style>
</head>
<body>

<div class="header">
  <h1>Odessy Furniture — Phase 9: Steel Cot Integration</h1>
  <p>Five Authentic Pepperfry Steel Bed Models with Studio Showcase & Lifestyle Interior Assets (Exact 896 × 1200 px)</p>
  <div class="stats-bar">
    <div class="stat-badge">Total Products: <b>5</b></div>
    <div class="stat-badge">Subcategory: <b>Steel Cot</b></div>
    <div class="stat-badge">Total Images: <b>10 Assets</b></div>
    <div class="stat-badge">Resolution: <b>896 × 1200 px (3:4)</b></div>
    <div class="stat-badge">Broken Images: <b>0</b></div>
    <div class="stat-badge">Duplicate Images: <b>0</b></div>
  </div>
</div>

<div class="container">

  <!-- Product 1 -->
  <div class="product-card">
    <div class="images-row">
      <div class="image-box">
        <img src="/products/odessy_striker_single_cot_3x4.jpg" alt="Striker Single Studio">
        <div class="image-tag">Studio Showcase (896x1200)</div>
      </div>
      <div class="image-box">
        <img src="/products/odessy_striker_single_cot_env.jpg" alt="Striker Single Lifestyle">
        <div class="image-tag">Lifestyle Interior (896x1200)</div>
      </div>
    </div>
    <div class="details-box">
      <div class="badge">Bestseller Single</div>
      <div class="title">Odessy Striker Minimalist Steel Single Cot</div>
      <div class="tagline">Nilkamal Sleep Inspired High-Tensile Tubular Steel Single Bed with Squeak-Free Architecture</div>
      <div class="price-row">
        <span class="price">₹7,490</span>
        <span class="original-price">₹10,900</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Ref:</td><td class="val">Striker Metal Single Bed in Black Finish by Nilkamal Sleep</td></tr>
        <tr><td class="label">Product ID:</td><td class="val">2035882</td></tr>
        <tr><td class="label">Material:</td><td class="val">High-Tensile Cold-Rolled Carbon Tubular Steel (1.2 mm)</td></tr>
        <tr><td class="label">Bed Size:</td><td class="val">Single Bed (199.0 x 98.0 x 91.0 cm)</td></tr>
        <tr><td class="label">Weight Capacity:</td><td class="val">150 kg (330 lbs)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">12 Months (1 Year) Manufacturer Warranty</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/striker-metal-single-bed-in-black-finish-by-nilkamal-sleep-2035882.html" target="_blank">View Pepperfry Reference &rarr;</a>
    </div>
  </div>

  <!-- Product 2 -->
  <div class="product-card">
    <div class="images-row">
      <div class="image-box">
        <img src="/products/odessy_akaba_double_cot_3x4.jpg" alt="Akaba Double Studio">
        <div class="image-tag">Studio Showcase (896x1200)</div>
      </div>
      <div class="image-box">
        <img src="/products/odessy_akaba_double_cot_env.jpg" alt="Akaba Double Lifestyle">
        <div class="image-tag">Lifestyle Interior (896x1200)</div>
      </div>
    </div>
    <div class="details-box">
      <div class="badge">Compact Double</div>
      <div class="title">Odessy Akaba Curved Arch Metal Double Cot</div>
      <div class="tagline">FurnitureKraft Inspired Heavy-Gauge Double Steel Cot with Arch Spoke Grill</div>
      <div class="price-row">
        <span class="price">₹11,990</span>
        <span class="original-price">₹16,500</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Ref:</td><td class="val">Metallika Akaba Double Size Bed in Grey Colour by FurnitureKraft</td></tr>
        <tr><td class="label">Product ID:</td><td class="val">1779927</td></tr>
        <tr><td class="label">Material:</td><td class="val">Commercial Grade ERW Mild Steel Tubes (1.2 mm)</td></tr>
        <tr><td class="label">Bed Size:</td><td class="val">Double Bed (203.2 x 127.0 x 96.5 cm)</td></tr>
        <tr><td class="label">Weight Capacity:</td><td class="val">220 kg (485 lbs)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">36 Months (3 Years) Manufacturer Warranty</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/metallika-akaba-double-size-bed-in-grey-colour-by-furniturekraft-1779927.html" target="_blank">View Pepperfry Reference &rarr;</a>
    </div>
  </div>

  <!-- Product 3 -->
  <div class="product-card">
    <div class="images-row">
      <div class="image-box">
        <img src="/products/odessy_kabul_queen_bed_3x4.jpg" alt="Kabul Queen Studio">
        <div class="image-tag">Studio Showcase (896x1200)</div>
      </div>
      <div class="image-box">
        <img src="/products/odessy_kabul_queen_bed_env.jpg" alt="Kabul Queen Lifestyle">
        <div class="image-tag">Lifestyle Interior (896x1200)</div>
      </div>
    </div>
    <div class="details-box">
      <div class="badge">Queen Classic</div>
      <div class="title">Odessy Kabul Contemporary Metal Queen Bed</div>
      <div class="tagline">FurnitureKraft Inspired Architectural Geometric Queen Size Steel Bed in Pure White</div>
      <div class="price-row">
        <span class="price">₹14,490</span>
        <span class="original-price">₹21,000</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Ref:</td><td class="val">Kabul Metal Queen Size Bed in White Colour by FurnitureKraft</td></tr>
        <tr><td class="label">Product ID:</td><td class="val">542377</td></tr>
        <tr><td class="label">Material:</td><td class="val">Prime Heavy ERW Mild Steel Tubing (1.2 mm - 1.4 mm)</td></tr>
        <tr><td class="label">Bed Size:</td><td class="val">Queen Size (208.3 x 160.0 x 94.0 cm)</td></tr>
        <tr><td class="label">Weight Capacity:</td><td class="val">280 kg (617 lbs)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">24 Months (2 Years) Manufacturer Warranty</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/kabul-metal-queen-size-bed-in-white-colour-by-furniturekraft-542377.html" target="_blank">View Pepperfry Reference &rarr;</a>
    </div>
  </div>

  <!-- Product 4 -->
  <div class="product-card">
    <div class="images-row">
      <div class="image-box">
        <img src="/products/odessy_striker_king_bed_3x4.jpg" alt="Striker King Studio">
        <div class="image-tag">Studio Showcase (896x1200)</div>
      </div>
      <div class="image-box">
        <img src="/products/odessy_striker_king_bed_env.jpg" alt="Striker King Lifestyle">
        <div class="image-tag">Lifestyle Interior (896x1200)</div>
      </div>
    </div>
    <div class="details-box">
      <div class="badge">Master King Suite</div>
      <div class="title">Odessy Striker Grand Architectural Steel King Bed</div>
      <div class="tagline">Nilkamal Sleep Inspired High-Strength King Size Steel Cot with Twin Spine Matrix</div>
      <div class="price-row">
        <span class="price">₹16,990</span>
        <span class="original-price">₹24,500</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Ref:</td><td class="val">Striker Metal King Size Bed in Black Finish by Nilkamal Sleep</td></tr>
        <tr><td class="label">Product ID:</td><td class="val">1959723</td></tr>
        <tr><td class="label">Material:</td><td class="val">100% Anti-Rust Heavy Carbon Tubular Steel (1.4 mm)</td></tr>
        <tr><td class="label">Bed Size:</td><td class="val">King Size (206.0 x 189.5 x 91.0 cm)</td></tr>
        <tr><td class="label">Weight Capacity:</td><td class="val">350 kg (770 lbs)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">12 Months (1 Year) Manufacturer Warranty</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/striker-metal-king-size-bed-in-black-finish-by-nilkamal-sleep-1959723.html" target="_blank">View Pepperfry Reference &rarr;</a>
    </div>
  </div>

  <!-- Product 5 -->
  <div class="product-card">
    <div class="images-row">
      <div class="image-box">
        <img src="/products/odessy_gemini_poster_bed_3x4.jpg" alt="Gemini Poster Studio">
        <div class="image-tag">Studio Showcase (896x1200)</div>
      </div>
      <div class="image-box">
        <img src="/products/odessy_gemini_poster_bed_env.jpg" alt="Gemini Poster Lifestyle">
        <div class="image-tag">Lifestyle Interior (896x1200)</div>
      </div>
    </div>
    <div class="details-box">
      <div class="badge">Flagship Four-Poster</div>
      <div class="title">Odessy Gemini Luxury Four-Poster Metal Canopy Bed</div>
      <div class="tagline">Homdec Inspired Heavy Wrought Iron Queen Size Canopy Bed with Cross-Braced Architecture</div>
      <div class="price-row">
        <span class="price">₹23,990</span>
        <span class="original-price">₹34,000</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Ref:</td><td class="val">Gemini Metal Poster Bed in Black Colour by Homdec</td></tr>
        <tr><td class="label">Product ID:</td><td class="val">2184229</td></tr>
        <tr><td class="label">Material:</td><td class="val">Structural Wrought Iron & Cold-Rolled Carbon Tubular Steel (1.5 mm)</td></tr>
        <tr><td class="label">Bed Size:</td><td class="val">Queen Four-Poster Canopy (208.0 x 160.0 x 191.0 cm)</td></tr>
        <tr><td class="label">Weight Capacity:</td><td class="val">380 kg (838 lbs)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">24 Months (2 Years) Manufacturer Warranty</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/gemini-metal-poster-bed-in-black-colour-by-homdec-2184229.html" target="_blank">View Pepperfry Reference &rarr;</a>
    </div>
  </div>

</div>

</body>
</html>
"""

with open('public/preview_cots.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Created public/preview_cots.html successfully!")
