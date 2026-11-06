import requests
import json
import re
import urllib.parse
from PIL import Image
import os

os.makedirs('scratch/candidates_phase12', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def search_yandex(query, count=10):
    encoded = urllib.parse.quote(query)
    url = f'https://yandex.com/images/search?text={encoded}'
    try:
        r = requests.get(url, headers=headers, timeout=12)
        matches = re.findall(r'&quot;img_href&quot;:&quot;([^&]+)&quot;', r.text)
        if not matches:
            matches = re.findall(r'"img_href":"([^"]+)"', r.text)
        if not matches:
            matches = re.findall(r'href="(/images/search\?pos=[^"]+img_url=([^"&]+))', r.text)
            matches = [urllib.parse.unquote(m[1]) for m in matches if len(m) > 1]
            
        results = []
        for m in matches:
            m = urllib.parse.unquote(m)
            if m.startswith('http') and any(ext in m.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if m not in results:
                    results.append(m)
            if len(results) >= count:
                break
        return results
    except Exception as e:
        print(f"Error searching yandex: {e}")
        return []

queries = [
    ('zephyr_bed', 'Woodsworth Zephyr Sheesham Wood King Size Bed in Honey Oak Finish with Hydraulic Storage'),
    ('zephyr_bed_pf', 'site:pepperfry.com Zephyr Sheesham Wood King Size Bed 1959741'),
    ('verta_wardrobe', 'Spacewood Verta 4 Door Wardrobe With Mirror in Santana Oak Finish'),
    ('verta_wardrobe_pf', 'site:pepperfry.com Spacewood Verta 4 Door Wardrobe 1945398'),
    ('amanda_sofa', 'CasaCraft Amanda Fabric 2 Seater Sofa in Charcoal Grey'),
    ('cannes_sofa', 'CasaCraft Cannes Fabric 3 Seater Sofa in Blue Colour'),
    ('montez_sofa', 'CasaCraft Montez Velvet LHS Sectional Sofa'),
    ('pescara_sofa', 'CasaCraft Pescara Velvet 3 Seater Sofa in Beige Colour'),
    ('radom_sofa', 'Woodsworth Radom Sheesham Wood 3 Seater Sofa in Provincial Teak Finish')
]

for tag, q in queries:
    print('='*60)
    print(f"Tag: {tag} | Query: {q}")
    res = search_yandex(q, count=8)
    print(f"Found {len(res)} results:")
    for i, u in enumerate(res):
        print(f"  [{i}] {u}")
        # Try downloading the first 3
        if i < 3:
            fname = f"scratch/candidates_phase12/{tag}_{i}.jpg"
            try:
                img_r = requests.get(u, headers=headers, timeout=10)
                if img_r.status_code == 200 and len(img_r.content) > 5000:
                    with open(fname, 'wb') as f:
                        f.write(img_r.content)
                    im = Image.open(fname)
                    print(f"      Saved {fname} size={im.size} fmt={im.format}")
            except Exception as ex:
                print(f"      Download error: {ex}")

