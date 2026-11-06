import os

candidates = [
    # Prod 1
    ('table1_abbey_wood_studio_2.jpg', 'P1 Studio: Abbey Solid Wood Rectangular Table (White BG)'),
    ('table1_abbey_more_env_3.jpg', 'P1 Env: Abbey Solid Wood Table Living Room (2560x2048)'),
    ('table1_abbey_more_env_6.jpg', 'P1 Env: Abbey Solid Wood Table Living Room (1603x1582)'),
    
    # Prod 2
    ('table2_zyra_marble_studio_1.jpg', 'P2 Studio: Zyra Marble Top Table Studio 1'),
    ('table2_zyra_marble_studio_5.jpg', 'P2 Studio: Zyra Marble Top Table Studio 5'),
    ('table2_zyra_marble_env_1.jpg', 'P2 Env: Zyra Marble Table Living Room 1'),
    ('table2_zyra_marble_env_5.jpg', 'P2 Env: Zyra Marble Table Living Room 5'),
    
    # Prod 3
    ('table3_valencia_more_studio_1.jpg', 'P3 Studio: Valencia Glass Top Table Studio 1'),
    ('table3_valencia_more_studio_6.jpg', 'P3 Studio: Valencia Glass Top Table Studio 6'),
    ('table3_valencia_glass_env_2.jpg', 'P3 Env: Valencia Glass Table Living Room 2'),
    ('table3_valencia_glass_env_3.jpg', 'P3 Env: Valencia Glass Table Living Room 3'),
    
    # Prod 4
    ('table4_galliano_metal_studio_1.jpg', 'P4 Studio: Galliano Metal Coffee Table Studio'),
    ('table4_galliano_metal_env_1.jpg', 'P4 Env: Galliano Metal Table Living Room 1'),
    ('table4_galliano_metal_env_3.jpg', 'P4 Env: Galliano Metal Table Living Room 3'),
    
    # Prod 5
    ('table5_elvas_more_1.jpg', 'P5 Studio: Elvas Nesting Set (1500x1500)'),
    ('table5_elvas_more_3.jpg', 'P5 Studio: Elvas Nesting Set (1600x1300)'),
    ('table5_elvas_nesting_env_1.png', 'P5 Env: Elvas Nesting Set Living Room 1'),
    ('table5_elvas_more_5.jpg', 'P5 Env: Elvas Nesting Set Living Room 5')
]

html = """<!DOCTYPE html>
<html>
<head>
<title>Selected Candidates Inspection</title>
<style>
body { background: #12110f; color: #f3e9da; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 24px; }
h1 { color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 8px; }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 24px; }
.card { background: #1c1a17; border: 1px solid rgba(212, 175, 55, 0.25); border-radius: 10px; padding: 16px; display: flex; flex-direction: column; }
.card img { width: 100%; height: 280px; object-fit: contain; background: #000; border-radius: 6px; }
.label { font-weight: 600; font-size: 14px; margin-top: 10px; color: #fff; }
.file { font-size: 12px; color: #a8a29e; word-break: break-all; margin-top: 4px; }
</style>
</head>
<body>
<h1>Pepperfry Center Table Integration — Visual Candidate Inspection</h1>
<div class="grid">
"""

for fname, desc in candidates:
    p = f"candidates_tables/{fname}"
    html += f"""<div class="card">
  <img src="{p}" alt="{desc}">
  <div class="label">{desc}</div>
  <div class="file">{fname}</div>
</div>
"""

html += """</div></body></html>"""

with open('scratch/detailed_candidates.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Created scratch/detailed_candidates.html")

