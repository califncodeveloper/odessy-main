import os

html = ['<!DOCTYPE html><html><head><title>Candidate Viewer</title>',
'<style>body{background:#111;color:#eee;font-family:sans-serif;display:flex;flex-wrap:wrap;gap:20px;padding:20px;}',
'.card{background:#222;padding:10px;border-radius:8px;max-width:320px;text-align:center;}',
'img{max-width:100%;height:auto;border-radius:4px;background:#333;}',
'h4{margin:8px 0 4px;font-size:14px;word-break:break-all;}</style></head><body>']

for f in sorted(os.listdir('scratch/candidates')):
    if f.endswith('.jpg'):
        html.append(f'<div class="card"><h4>{f}</h4><img src="candidates/{f}"/></div>')

html.append('</body></html>')

with open('scratch/view_candidates.html', 'w', encoding='utf-8') as out:
    out.write('\n'.join(html))

print("Created scratch/view_candidates.html")

