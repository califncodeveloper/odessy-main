import os
from PIL import Image

cand_dir = 'scratch/candidates_tables'
thumbs_dir = 'scratch/cand_table_thumbs'
os.makedirs(thumbs_dir, exist_ok=True)

files = [f for f in os.listdir(cand_dir) if f.endswith(('.jpg', '.png', '.webp', '.jpeg'))]

html = ['<!DOCTYPE html><html><head><title>Candidate Tables</title>',
'<style>body{background:#181818;color:#eee;font-family:sans-serif;display:flex;flex-wrap:wrap;gap:15px;padding:20px;}',
'.c{background:#2a2a2a;padding:8px;border-radius:6px;width:240px;text-align:center;}',
'img{width:100%;height:180px;object-fit:contain;background:#111;border-radius:4px;}',
'h4{font-size:11px;margin:6px 0;word-break:break-all;}</style></head><body>']

for f in sorted(files):
    p = os.path.join(cand_dir, f)
    try:
        im = Image.open(p)
        t_path = os.path.join(thumbs_dir, f + '.jpg')
        im.convert('RGB').save(t_path, 'JPEG', quality=80)
        html.append(f'<div class="c"><img src="cand_table_thumbs/{f}.jpg"/><h4>{f}</h4><p>{im.size[0]}x{im.size[1]}</p></div>')
    except Exception as e:
        print(f"Error {f}: {e}")

html.append('</body></html>')

with open('scratch/view_candidate_tables.html', 'w', encoding='utf-8') as out:
    out.write('\n'.join(html))

print(f"Saved scratch/view_candidate_tables.html with {len(files)} candidates.")

