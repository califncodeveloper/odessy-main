import os

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Phase 12 Complete Asset Review</title>
<style>
  body { background: #0f0e0c; color: #f5f5f5; font-family: -apple-system, sans-serif; padding: 24px; }
  h1 { color: #f59e0b; }
  h2 { color: #38bdf8; border-bottom: 1px solid #333; padding-bottom: 8px; margin-top: 32px; }
  .grid { display: flex; flex-wrap: wrap; gap: 16px; }
  .card { background: #1c1a17; border: 1px solid #333; border-radius: 8px; padding: 12px; width: 340px; }
  .card h4 { margin: 0 0 6px 0; color: #fbbf24; font-size: 13px; }
  .card p { margin: 0 0 8px 0; font-size: 11px; color: #aaa; }
  .img-box { width: 100%; height: 300px; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; }
  img { max-width: 100%; max-height: 100%; object-fit: contain; }
</style>
</head>
<body>
<h1>Phase 12 Candidate Assets</h1>

<h2>1. Zephyr Bed</h2>
<div class="grid">
  <div class="card">
    <h4>zephyr_generated_studio.jpg</h4>
    <p>Generated Studio (Honey Oak Sheesham, Hydraulic Storage Lifted Open, Underbed Storage)</p>
    <div class="img-box"><img src="zephyr_generated_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>zephyr_cand_1.jpg</h4>
    <p>1600x1760 Authentic Master Bedroom Interior Lifestyle</p>
    <div class="img-box"><img src="zephyr_cand_1.jpg" /></div>
  </div>
</div>

<h2>2. Verta 4-Door Wardrobe</h2>
<div class="grid">
  <div class="card">
    <h4>verta_auth_0.jpg</h4>
    <p>1091x1200 Authentic Studio (4 Doors, 2 Center Mirrors, 2 External Drawers)</p>
    <div class="img-box"><img src="verta_auth_0.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_auth_1.jpg</h4>
    <p>1091x1200 Authentic Bedroom Interior Lifestyle</p>
    <div class="img-box"><img src="verta_auth_1.jpg" /></div>
  </div>
</div>

<h2>3. Sofas Candidates</h2>
<div class="grid">
  <div class="card">
    <h4>raw_amanda_studio.jpg</h4>
    <p>1600x800 Amanda 2-Seater Studio Charcoal Grey</p>
    <div class="img-box"><img src="raw_amanda_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>cand12_amanda_sofa_0.jpg</h4>
    <p>1024x1024 Amanda 2-Seater Lifestyle</p>
    <div class="img-box"><img src="cand12_amanda_sofa_0.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_cannes_studio.jpg</h4>
    <p>1600x800 Cannes 3-Seater Studio Midnight Blue</p>
    <div class="img-box"><img src="raw_cannes_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_cannes_env.jpg</h4>
    <p>1250x625 Cannes 3-Seater Interior Penthouse Lifestyle</p>
    <div class="img-box"><img src="raw_cannes_env.jpg" /></div>
  </div>
  <div class="card">
    <h4>cand12_montez_sofa_0.jpg</h4>
    <p>1250x625 Montez Velvet LHS Sectional Studio</p>
    <div class="img-box"><img src="cand12_montez_sofa_0.jpg" /></div>
  </div>
  <div class="card">
    <h4>cand12_montez_sofa_1.jpg</h4>
    <p>1024x826 Montez Velvet LHS Sectional Interior</p>
    <div class="img-box"><img src="cand12_montez_sofa_1.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_pescara_studio.jpg</h4>
    <p>1600x800 Pescara Luxury 3-Seater Velvet Studio</p>
    <div class="img-box"><img src="raw_pescara_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>cand12_pescara_sofa_1.jpg</h4>
    <p>2000x2000 Pescara Velvet Interior Salon</p>
    <div class="img-box"><img src="cand12_pescara_sofa_1.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_radom_studio.jpg</h4>
    <p>1600x800 Radom Sheesham 3-Seater Studio Provincial Teak</p>
    <div class="img-box"><img src="raw_radom_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_radom_env.jpg</h4>
    <p>1600x800 Radom Sheesham 3-Seater Interior Hardwood Floor</p>
    <div class="img-box"><img src="raw_radom_env.jpg" /></div>
  </div>
</div>
</body>
</html>
"""

with open('public/inspect_phase12/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated public/inspect_phase12/index.html")

