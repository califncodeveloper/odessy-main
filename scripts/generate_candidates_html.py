import os

cand_dir = 'scratch/candidates_tables'
files = sorted(os.listdir(cand_dir))

html = """<!DOCTYPE html>
<html>
<head>
<title>Center Table Candidates Preview</title>
<style>
body { background: #1a1a1a; color: #eee; font-family: sans-serif; padding: 20px; }
h1 { color: #d4af37; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.card { background: #252525; border: 1px solid #444; border-radius: 8px; overflow: hidden; padding: 10px; }
.card img { width: 100%; height: 240px; object-fit: contain; background: #333; }
.card .title { font-size: 13px; font-weight: bold; margin-top: 8px; word-break: break-all; }
</style>
</head>
<body>
<h1>Center Table Candidates Preview</h1>
<div class="grid">
"""

for f in files:
    html += f"""<div class="card">
  <img src="candidates_tables/{f}">
  <div class="title">{f}</div>
</div>
"""

html += """</div></body></html>"""

with open('scratch/preview_candidates.html', 'w', encoding='utf-8') as out:
    out.write(html)
print('Generated scratch/preview_candidates.html')

