import os

html = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Phase 12 Product Inspection</title>
<style>
  body { background: #121212; color: #eee; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; margin: 0; }
  h1 { color: #f59e0b; margin-bottom: 8px; }
  h2 { color: #60a5fa; border-bottom: 1px solid #333; padding-bottom: 8px; margin-top: 32px; }
  .grid { display: flex; flex-wrap: wrap; gap: 20px; }
  .card { background: #1e1e1e; border: 1px solid #333; border-radius: 8px; padding: 12px; width: 320px; }
  .card h4 { margin: 0 0 8px 0; color: #fbbf24; font-size: 14px; word-break: break-all; }
  .card p { margin: 0 0 8px 0; font-size: 12px; color: #9ca3af; }
  .img-box { width: 100%; height: 320px; background: #000; display: flex; align-items: center; justify-content: center; overflow: hidden; border-radius: 4px; }
  img { max-width: 100%; max-height: 100%; object-fit: contain; }
</style>
</head>
<body>
<h1>Phase 12 Product Asset Inspection</h1>
<p>Visual verification of candidates for Zephyr Bed, Verta Wardrobe, and all 5 Sofas.</p>

<h2>1. Zephyr Solid Sheesham Hydraulic Bed Candidates</h2>
<div class="grid">
  <div class="card">
    <h4>zephyr_generated_studio.jpg</h4>
    <p>Generated Studio (Honey Oak Sheesham, Hydraulic Lift Open)</p>
    <div class="img-box"><img src="zephyr_generated_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>zephyr_cand_1.jpg</h4>
    <p>Scratch Candidate 1 (1600x1760)</p>
    <div class="img-box"><img src="zephyr_cand_1.jpg" /></div>
  </div>
  <div class="card">
    <h4>zephyr_cand_2.jpg</h4>
    <p>Scratch Candidate 2 (1100x1100)</p>
    <div class="img-box"><img src="zephyr_cand_2.jpg" /></div>
  </div>
</div>

<h2>2. Verta 4-Door Wardrobe Candidates</h2>
<div class="grid">
  <div class="card">
    <h4>verta_auth_0.jpg</h4>
    <p>Flipkart Verta Authentic 0 (Studio Front 4-Door Dual Mirror 2 Drawers)</p>
    <div class="img-box"><img src="verta_auth_0.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_auth_1.jpg</h4>
    <p>Flipkart Verta Authentic 1 (Lifestyle Bedroom Suite)</p>
    <div class="img-box"><img src="verta_auth_1.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_auth_2.jpg</h4>
    <p>Flipkart Verta Authentic 2 (Studio Angle)</p>
    <div class="img-box"><img src="verta_auth_2.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_auth_3.jpg</h4>
    <p>Flipkart Verta Authentic 3 (Side / Single Door)</p>
    <div class="img-box"><img src="verta_auth_3.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_cand_1.jpg</h4>
    <p>Old Candidate 1</p>
    <div class="img-box"><img src="verta_cand_1.jpg" /></div>
  </div>
  <div class="card">
    <h4>verta_cand_3.jpg</h4>
    <p>Old Candidate 3</p>
    <div class="img-box"><img src="verta_cand_3.jpg" /></div>
  </div>
</div>

<h2>3. Sofa Category Raw Backups</h2>
<div class="grid">
  <div class="card">
    <h4>raw_amanda_studio.jpg</h4>
    <p>Amanda 2-Seater Studio (1600x800)</p>
    <div class="img-box"><img src="raw_amanda_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_amanda_env.jpg</h4>
    <p>Amanda 2-Seater Env (494x544)</p>
    <div class="img-box"><img src="raw_amanda_env.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_cannes_studio.jpg</h4>
    <p>Cannes 3-Seater Studio (1600x800)</p>
    <div class="img-box"><img src="raw_cannes_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_cannes_env.jpg</h4>
    <p>Cannes 3-Seater Env (1250x625)</p>
    <div class="img-box"><img src="raw_cannes_env.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_montez_studio.jpg</h4>
    <p>Montez Sectional Studio (494x544)</p>
    <div class="img-box"><img src="raw_montez_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_montez_env.jpg</h4>
    <p>Montez Sectional Env (494x544)</p>
    <div class="img-box"><img src="raw_montez_env.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_pescara_studio.jpg</h4>
    <p>Pescara Velvet Studio (1600x800)</p>
    <div class="img-box"><img src="raw_pescara_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_pescara_env.jpg</h4>
    <p>Pescara Velvet Env (494x544)</p>
    <div class="img-box"><img src="raw_pescara_env.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_radom_studio.jpg</h4>
    <p>Radom Sheesham Studio (1600x800)</p>
    <div class="img-box"><img src="raw_radom_studio.jpg" /></div>
  </div>
  <div class="card">
    <h4>raw_radom_env.jpg</h4>
    <p>Radom Sheesham Env (1600x800)</p>
    <div class="img-box"><img src="raw_radom_env.jpg" /></div>
  </div>
</div>
</body>
</html>
"""

with open('public/inspect_phase12/index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Created public/inspect_phase12/index.html")

