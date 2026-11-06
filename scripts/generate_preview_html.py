import os
import glob

html = """<!DOCTYPE html>
<html>
<head>
<title>Pooja Candidates Preview</title>
<style>
body { font-family: sans-serif; background: #121212; color: #fff; padding: 20px; }
h2 { color: #f59e0b; margin-top: 30px; border-bottom: 1px solid #333; padding-bottom: 8px; }
.grid { display: flex; flex-wrap: wrap; gap: 20px; }
.card { background: #1e1e1e; padding: 12px; border-radius: 8px; border: 1px solid #333; width: 300px; }
img { width: 100%; height: 350px; object-fit: contain; background: #2a2a2a; border-radius: 4px; }
.caption { margin-top: 8px; font-size: 13px; color: #aaa; word-break: break-all; }
</style>
</head>
<body>
<h1>Pooja Stand Candidate Images Preview</h1>
"""

prefixes = [
    ('dzyn_traditional', '1. Traditional Solid Wood Pooja Mandir (DZYN Teak Wood Mandir with Dome)'),
    ('decorsmart_modern', '2. Modern Wooden Pooja Unit with Storage (Decor Smart Laser Cut Pooja Unit)'),
    ('alaya_wall_mount', '3. Wall-Mounted Pooja Mandir (DZYN Alaya Wall Mount Mandir)'),
    ('sacred_home_designer', '4. Premium Designer Pooja Mandir (DZYN Sacred Home Large Mandir)'),
    ('bluewud_shubh', '5. Compact Apartment Pooja Stand (Bluewud Shubh Pooja Unit)')
]

for p, label in prefixes:
    html += f"<h2>{label}</h2><div class='grid'>"
    files = sorted(glob.glob(f'scratch/candidates/{p}_candidate_*.jpg'))
    for f in files:
        fname = os.path.basename(f)
        rel_path = f"../scratch/candidates/{fname}"
        html += f"""
        <div class='card'>
            <img src='{rel_path}' alt='{fname}' />
            <div class='caption'><b>{fname}</b></div>
        </div>
        """
    html += "</div>"

html += "</body></html>"

with open('public/preview_pooja.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Saved public/preview_pooja.html")

