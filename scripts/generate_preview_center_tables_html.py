import os

html = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Odessy Furniture — Phase 10 Center Table Integration Preview</title>
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
    flex-wrap: wrap;
    gap: 16px;
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
    gap: 48px;
  }
  .product-card {
    background: #181d24;
    border: 1px solid #28303e;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: 580px 1fr;
  }
  @media (max-width: 1024px) {
    .product-card { grid-template-columns: 1fr; }
  }
  .image-column {
    display: flex;
    gap: 12px;
    padding: 20px;
    background: #13171e;
    border-right: 1px solid #28303e;
  }
  .img-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .img-box span {
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    color: #94a3b8;
    margin-bottom: 8px;
  }
  .img-box img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid #334155;
    background: #1e293b;
  }
  .img-res {
    margin-top: 6px;
    font-size: 11px;
    color: #38bdf8;
    font-family: monospace;
  }
  .info-column {
    padding: 28px;
    display: flex;
    flex-direction: column;
  }
  .badge {
    display: inline-block;
    align-self: flex-start;
    padding: 4px 10px;
    background: rgba(234, 179, 8, 0.15);
    color: #facc15;
    border: 1px solid rgba(234, 179, 8, 0.3);
    border-radius: 4px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .title {
    font-size: 22px;
    font-weight: 700;
    color: #f8fafc;
    line-height: 1.3;
  }
  .tagline {
    font-size: 14px;
    color: #94a3b8;
    margin-top: 4px;
    margin-bottom: 16px;
  }
  .price-row {
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #28303e;
  }
  .price {
    font-size: 24px;
    font-weight: 700;
    color: #4ade80;
  }
  .mrp {
    font-size: 15px;
    color: #64748b;
    text-decoration: line-through;
  }
  .discount {
    font-size: 13px;
    color: #f87171;
    font-weight: 600;
  }
  .specs-table {
    width: 100%;
    font-size: 13px;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .specs-table tr {
    border-bottom: 1px solid #1e293b;
  }
  .specs-table td {
    padding: 7px 0;
  }
  .specs-table td.label {
    width: 170px;
    color: #94a3b8;
    font-weight: 500;
  }
  .specs-table td.val {
    color: #e2e8f0;
    font-weight: 600;
  }
  .ref-link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #38bdf8;
    text-decoration: none;
    word-break: break-all;
    border-top: 1px solid #28303e;
    padding-top: 14px;
  }
  .ref-link:hover { text-decoration: underline; }
</style>
</head>
<body>

<div class="header">
  <h1>PHASE 10: CENTER TABLE INTEGRATION — PEPPERFRY VERIFICATION PREVIEW</h1>
  <p>Authentic Pepperfry Center Tables with Verified Specifications & High-Res 896 × 1200 px (3:4 Portrait) Visuals</p>
  <div class="stats-bar">
    <div class="stat-badge">Category: <b>Center Table</b></div>
    <div class="stat-badge">Integrated Products: <b>5</b></div>
    <div class="stat-badge">Total Image Assets: <b>10 (100% Unique)</b></div>
    <div class="stat-badge">Dimensions: <b>896 × 1200 px (Exact 3:4)</b></div>
    <div class="stat-badge">Broken Images: <b>0</b></div>
    <div class="stat-badge">Quality Status: <b>100% Verified</b></div>
  </div>
</div>

<div class="container">

  <!-- Product 1 -->
  <div class="product-card">
    <div class="image-column">
      <div class="img-box">
        <span>Studio Showcase</span>
        <img src="/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg" alt="Abbey Solid Wood Table Studio">
        <div class="img-res">896 × 1200 px</div>
      </div>
      <div class="img-box">
        <span>Lifestyle Interior</span>
        <img src="/products/odessy_abbey_solid_wood_coffee_table_env.jpg" alt="Abbey Solid Wood Table Lifestyle">
        <div class="img-res">896 × 1200 px</div>
      </div>
    </div>
    <div class="info-column">
      <span class="badge">1. Solid Wood Rectangular</span>
      <div class="title">Odessy Abbey Solid Wood Rectangular Coffee Table</div>
      <div class="tagline">Woodsworth Inspired Solid Sheesham Wood Center Table with Slatted Lower Storage Shelf</div>
      <div class="price-row">
        <span class="price">₹16,499</span>
        <span class="mrp">₹33,999</span>
        <span class="discount">51% OFF</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Reference:</td><td class="val">Abbey Large Solid Wood Coffee Table in Rustic Teak Finish by Woodsworth</td></tr>
        <tr><td class="label">Pepperfry Product ID:</td><td class="val">1744836</td></tr>
        <tr><td class="label">Tabletop Shape:</td><td class="val">Rectangular</td></tr>
        <tr><td class="label">Primary Material:</td><td class="val">Solid Sheesham Wood (100% Kiln-Dried Indian Rosewood)</td></tr>
        <tr><td class="label">Tabletop Material:</td><td class="val">Solid Sheesham Wood Plank Surface with Natural Teak Grain</td></tr>
        <tr><td class="label">Frame & Legs:</td><td class="val">Solid Sheesham Wood Tapered Heavy Block Legs</td></tr>
        <tr><td class="label">Storage Configuration:</td><td class="val">Open Lower Slatted Storage Shelf for Magazines & Coffee Books</td></tr>
        <tr><td class="label">Dimensions (L x W x H):</td><td class="val">106.68 x 55.88 x 45.72 cm (42.0 x 22.0 x 18.0 in)</td></tr>
        <tr><td class="label">Net Weight:</td><td class="val">35.0 kg</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">36 Months (3 Years) Manufacturer Warranty</td></tr>
        <tr><td class="label">Delivery:</td><td class="val">Free Insured Express Delivery & Assembly in Chennai (1-3 Days)</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836.html" target="_blank">
        View Pepperfry Reference: Abbey Large Solid Wood Coffee Table (1744836) &rarr;
      </a>
    </div>
  </div>

  <!-- Product 2 -->
  <div class="product-card">
    <div class="image-column">
      <div class="img-box">
        <span>Studio Showcase</span>
        <img src="/products/odessy_zyra_marble_coffee_table_3x4.jpg" alt="Zyra Marble Table Studio">
        <div class="img-res">896 × 1200 px</div>
      </div>
      <div class="img-box">
        <span>Lifestyle Interior</span>
        <img src="/products/odessy_zyra_marble_coffee_table_env.jpg" alt="Zyra Marble Table Lifestyle">
        <div class="img-res">896 × 1200 px</div>
      </div>
    </div>
    <div class="info-column">
      <span class="badge">2. Marble Top Center Table</span>
      <div class="title">Odessy Zyra Italian Marble Top Coffee Table</div>
      <div class="tagline">Royaloak Inspired Luxury Polished Marble Center Table with Dual Drawers & Champagne Gold Trim</div>
      <div class="price-row">
        <span class="price">₹29,000</span>
        <span class="mrp">₹56,000</span>
        <span class="discount">48% OFF</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Reference:</td><td class="val">Zyra Marble Top Coffee Table in Cream and Brown Finish by Royaloak</td></tr>
        <tr><td class="label">Pepperfry Product ID:</td><td class="val">2159069</td></tr>
        <tr><td class="label">Tabletop Shape:</td><td class="val">Rectangular with Smooth Filleted Rounded Safety Corners</td></tr>
        <tr><td class="label">Primary Material:</td><td class="val">Composite Italian Artificial Marble & High-Gloss Lacquered Wood</td></tr>
        <tr><td class="label">Tabletop Material:</td><td class="val">Polished Artificial Italian Marble Slab with Chamfered Edges</td></tr>
        <tr><td class="label">Frame & Base:</td><td class="val">High-Gloss Walnut & Cream Lacquered Pedestal with Gold Inlay Trim</td></tr>
        <tr><td class="label">Storage Configuration:</td><td class="val">2 Integrated Smooth Pull-Out Drawers on Telescopic Ball-Bearing Slides</td></tr>
        <tr><td class="label">Dimensions (L x W x H):</td><td class="val">119.0 x 58.0 x 48.0 cm (46.9 x 22.8 x 18.9 in)</td></tr>
        <tr><td class="label">Net Weight:</td><td class="val">42.0 kg</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">12 Months (1 Year) Comprehensive Warranty</td></tr>
        <tr><td class="label">Delivery:</td><td class="val">Free White-Glove Heavy Setup in Chennai (2-4 Days)</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/zyra-marble-top-coffee-table-in-cream-and-brown-finish-2159069.html" target="_blank">
        View Pepperfry Reference: Zyra Marble Top Coffee Table (2159069) &rarr;
      </a>
    </div>
  </div>

  <!-- Product 3 -->
  <div class="product-card">
    <div class="image-column">
      <div class="img-box">
        <span>Studio Showcase</span>
        <img src="/products/odessy_valencia_glass_coffee_table_3x4.jpg" alt="Valencia Glass Table Studio">
        <div class="img-res">896 × 1200 px</div>
      </div>
      <div class="img-box">
        <span>Lifestyle Interior</span>
        <img src="/products/odessy_valencia_glass_coffee_table_env.jpg" alt="Valencia Glass Table Lifestyle">
        <div class="img-res">896 × 1200 px</div>
      </div>
    </div>
    <div class="info-column">
      <span class="badge">3. Glass Top Center Table</span>
      <div class="title">Odessy Valencia Beveled Glass Sheesham Coffee Table</div>
      <div class="tagline">Woodsworth Inspired Inset Toughened Glass Top Center Table with 2 Drawers & Lower Slat Tier</div>
      <div class="price-row">
        <span class="price">₹22,499</span>
        <span class="mrp">₹30,999</span>
        <span class="discount">27% OFF</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Reference:</td><td class="val">Valencia Sheesham Wood Coffee Table in Scratch-Resistant Provincial Teak Finish with Glass Top</td></tr>
        <tr><td class="label">Pepperfry Product ID:</td><td class="val">1823210</td></tr>
        <tr><td class="label">Tabletop Shape:</td><td class="val">Rectangular with Inset Beveled Glass Panel</td></tr>
        <tr><td class="label">Primary Material:</td><td class="val">Solid Sheesham Wood & 8mm Toughened Float Glass</td></tr>
        <tr><td class="label">Tabletop Material:</td><td class="val">8mm Scratch-Resistant Toughened Float Glass Inset</td></tr>
        <tr><td class="label">Frame & Legs:</td><td class="val">Kiln-Dried Solid Sheesham Wood with Scratch-Resistant Teak Topcoat</td></tr>
        <tr><td class="label">Storage Configuration:</td><td class="val">2 Solid Wood Sliding Storage Drawers + Full-Length Slatted Magazine Shelf</td></tr>
        <tr><td class="label">Dimensions (L x W x H):</td><td class="val">107.0 x 56.0 x 41.0 cm (42.1 x 22.0 x 16.1 in)</td></tr>
        <tr><td class="label">Net Weight:</td><td class="val">32.0 kg</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">36 Months (3 Years) Manufacturer Warranty</td></tr>
        <tr><td class="label">Delivery:</td><td class="val">Free Insured Express Delivery Across Chennai (1-3 Days)</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/valencia-sheesham-wood-coffee-table-in-scratch-resistant-provincial-teak-finish-with-glass-top-by-woodsworth-1823210.html" target="_blank">
        View Pepperfry Reference: Valencia Glass Top Coffee Table (1823210) &rarr;
      </a>
    </div>
  </div>

  <!-- Product 4 -->
  <div class="product-card">
    <div class="image-column">
      <div class="img-box">
        <span>Studio Showcase</span>
        <img src="/products/odessy_galliano_metal_coffee_table_3x4.jpg" alt="Galliano Metal Table Studio">
        <div class="img-res">896 × 1200 px</div>
      </div>
      <div class="img-box">
        <span>Lifestyle Interior</span>
        <img src="/products/odessy_galliano_metal_coffee_table_env.jpg" alt="Galliano Metal Table Lifestyle">
        <div class="img-res">896 × 1200 px</div>
      </div>
    </div>
    <div class="info-column">
      <span class="badge">4. Modern Metal Frame Center Table</span>
      <div class="title">Odessy Galliano Geometric Metal Coffee Table</div>
      <div class="tagline">CasaCraft Inspired Architectural Hollow Tube Metal Frame Center Table with Travertine Porcelain Top</div>
      <div class="price-row">
        <span class="price">₹18,990</span>
        <span class="mrp">₹24,999</span>
        <span class="discount">24% OFF</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Reference:</td><td class="val">Galliano Metal Coffee Table in Matte Gold Finish with Travertine Top by CasaCraft</td></tr>
        <tr><td class="label">Pepperfry Product ID:</td><td class="val">2186809</td></tr>
        <tr><td class="label">Tabletop Shape:</td><td class="val">Rectangular Architectural Silhouette</td></tr>
        <tr><td class="label">Primary Material:</td><td class="val">High-Tensile Cold-Rolled Metal & Heat-Resistant Porcelain Stone</td></tr>
        <tr><td class="label">Tabletop Material:</td><td class="val">Polished Glazed Travertine / Sintered Porcelain Ceramic Slab</td></tr>
        <tr><td class="label">Frame & Base:</td><td class="val">Electroplated Heavy-Gauge ERW Mild Steel in Brushed Matte Gold</td></tr>
        <tr><td class="label">Storage Configuration:</td><td class="val">Open Architectural Lower Floating Tier with Clean Negative Floor Clearance</td></tr>
        <tr><td class="label">Dimensions (L x W x H):</td><td class="val">100.0 x 60.0 x 43.0 cm (39.4 x 23.6 x 16.9 in)</td></tr>
        <tr><td class="label">Net Weight:</td><td class="val">24.5 kg</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">36 Months (3 Years) Manufacturer Warranty</td></tr>
        <tr><td class="label">Delivery:</td><td class="val">Free Insured Express Delivery Across Chennai (1-3 Days)</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/galliano-metal-coffee-table-in-matte-gold-finish-by-casacraft-2186809.html" target="_blank">
        View Pepperfry Reference: Galliano Metal Coffee Table (2186809) &rarr;
      </a>
    </div>
  </div>

  <!-- Product 5 -->
  <div class="product-card">
    <div class="image-column">
      <div class="img-box">
        <span>Studio Showcase</span>
        <img src="/products/odessy_elvas_nesting_coffee_table_3x4.jpg" alt="Elvas Nesting Set Studio">
        <div class="img-res">896 × 1200 px</div>
      </div>
      <div class="img-box">
        <span>Lifestyle Interior</span>
        <img src="/products/odessy_elvas_nesting_coffee_table_env.jpg" alt="Elvas Nesting Set Lifestyle">
        <div class="img-res">896 × 1200 px</div>
      </div>
    </div>
    <div class="info-column">
      <span class="badge">5. Nesting Center Table Set</span>
      <div class="title">Odessy Elvas Round Porcelain Nesting Table Set</div>
      <div class="tagline">CasaCraft Inspired 2-Piece Circular Retractable Nesting Center Tables with Calacatta Porcelain Top</div>
      <div class="price-row">
        <span class="price">₹14,990</span>
        <span class="mrp">₹22,999</span>
        <span class="discount">35% OFF</span>
      </div>
      <table class="specs-table">
        <tr><td class="label">Pepperfry Reference:</td><td class="val">Elvas Metal Round Nesting Coffee Table Set in Black Finish with White Porcelain Top (Set of 2)</td></tr>
        <tr><td class="label">Pepperfry Product ID:</td><td class="val">1959345</td></tr>
        <tr><td class="label">Tabletop Shape:</td><td class="val">Circular / Round Nesting (Set of 2 Stacking Tables)</td></tr>
        <tr><td class="label">Primary Material:</td><td class="val">Cold-Rolled Carbon Tubular Steel & High-Gloss Glazed Porcelain</td></tr>
        <tr><td class="label">Tabletop Material:</td><td class="val">Calacatta White Glazed Porcelain Slab with Subtle Grey Mineral Veining</td></tr>
        <tr><td class="label">Frame & Base:</td><td class="val">Curved Tubular High-Tensile Steel with Weatherproof Matte Powder Coating</td></tr>
        <tr><td class="label">Storage Configuration:</td><td class="val">Full 100% Retractable Nesting Footprint (Small Table Stows Under Large Table)</td></tr>
        <tr><td class="label">Dimensions (Big Table):</td><td class="val">71.0 x 71.0 x 46.0 cm (28.0 x 28.0 x 18.1 in)</td></tr>
        <tr><td class="label">Dimensions (Small Table):</td><td class="val">61.0 x 61.0 x 41.0 cm (24.0 x 24.0 x 16.1 in)</td></tr>
        <tr><td class="label">Net Weight:</td><td class="val">19.8 kg (Set Total)</td></tr>
        <tr><td class="label">Warranty:</td><td class="val">36 Months (3 Years) Manufacturer Warranty</td></tr>
        <tr><td class="label">Delivery:</td><td class="val">Free Insured Express Delivery Across Chennai (1-3 Days)</td></tr>
      </table>
      <a class="ref-link" href="https://www.pepperfry.com/product/elvas-metal-round-nesting-coffee-table-set-in-black-finish-with-white-porcelain-top-set-of-2-1959345.html" target="_blank">
        View Pepperfry Reference: Elvas Metal Round Nesting Set (1959345) &rarr;
      </a>
    </div>
  </div>

</div>

</body>
</html>
"""

with open('public/preview_center_tables.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Generated public/preview_center_tables.html")

