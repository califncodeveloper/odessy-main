import os
import glob
from PIL import Image

prefixes = [
    'godrej_slimline_2_door_almirah',
    'godrej_slimline_3_door_almirah',
    'godrej_storwel_m2_locker_almirah',
    'godrej_slimline_mirror_wardrobe',
    'godrej_centurion_luxury_almirah'
]

html = """<!DOCTYPE html>
<html>
<head>
<title>Bureau Candidate Images</title>
<style>
body { font-family: sans-serif; background: #1e293b; color: #f8fafc; padding: 20px; }
.prod-block { margin-bottom: 40px; background: #0f172a; padding: 20px; border-radius: 8px; }
h2 { color: #38bdf8; border-bottom: 1px solid #334155; padding-bottom: 10px; }
.grid { display: flex; flex-wrap: wrap; gap: 20px; }
.card { background: #1e293b; padding: 10px; border-radius: 6px; width: 280px; text-align: center; }
.card img { max-width: 100%; height: 260px; object-fit: contain; background: #fff; border-radius: 4px; }
.meta { font-size: 12px; margin-top: 8px; color: #94a3b8; word-break: break-all; }
</style>
</head>
<body>
<h1>Steel Bureau Candidates</h1>
"""

for p in prefixes:
    html += f'<div class="prod-block"><h2>{p}</h2><div class="grid">'
    files = sorted(glob.glob(f'scratch/candidates_bureau/{p}_candidate_*.jpg'))
    for f in files:
        try:
            im = Image.open(f)
            fname = os.path.basename(f)
            html += f'''
            <div class="card">
                <img src="/{f}" alt="{fname}" />
                <div class="meta"><b>{fname}</b><br>{im.size[0]}x{im.size[1]} | {im.mode}</div>
            </div>
            '''
        except Exception as e:
            pass
    html += '</div></div>'

html += '</body></html>'

with open('public/preview_bureau_candidates.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Generated public/preview_bureau_candidates.html")

