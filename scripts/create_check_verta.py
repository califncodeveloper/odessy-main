import os

html = """<!DOCTYPE html>
<html>
<head>
<title>Verta Authentic Check</title>
<style>
body { background: #111; color: #fff; font-family: sans-serif; padding: 20px; }
.grid { display: flex; flex-wrap: wrap; gap: 20px; }
.card { background: #222; padding: 10px; border-radius: 8px; }
img { max-height: 400px; display: block; }
</style>
</head>
<body>
<h1>Verta Authentic Images</h1>
<div class="grid">
"""

for f in sorted(os.listdir('scratch/verta_authentic')):
    html += f"""
    <div class="card">
        <h3>{f}</h3>
        <img src="scratch/verta_authentic/{f}" />
    </div>
    """

html += """
</div>
</body>
</html>
"""

with open('public/check_verta.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Created public/check_verta.html")

