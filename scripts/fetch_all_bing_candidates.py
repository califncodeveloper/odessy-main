import os
import requests
import json
import re
import urllib.parse
from PIL import Image

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

def search_bing(query, count=8):
    try:
        url = f'https://www.bing.com/images/search?q={urllib.parse.quote(query)}&FORM=HDRSC2'
        r = requests.get(url, headers=headers, timeout=12)
        m = re.findall(r'murl&quot;:&quot;(https?://[^&]+)&quot;', r.text)
        if not m:
            m = re.findall(r'murl":"(https?://[^"]+)"', r.text)
        results = []
        for u in m:
            u = urllib.parse.unquote(u)
            if any(ext in u.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']) and u not in results:
                results.append(u)
            if len(results) >= count:
                break
        return results
    except Exception as e:
        print(f"Error Bing {query}: {e}")
        return []

targets = [
    {
        'id': 'zephyr_bed',
        'queries': [
            'Woodsworth Zephyr Sheesham Wood King Size Bed Honey Oak hydraulic storage',
            'Zephyr Sheesham Wood King Size Bed in Honey Oak Finish with Hydraulic Storage',
            'Woodsworth Zephyr bed hydraulic storage bedroom'
        ]
    },
    {
        'id': 'verta_wardrobe',
        'queries': [
            'Spacewood Verta 4 Door Wardrobe With Mirror in Santana Oak Finish',
            'Spacewood Verta 4 Door Wardrobe Santana Oak dual mirror',
            'Spacewood Verta 4 Door Wardrobe Santana Oak bedroom'
        ]
    },
    {
        'id': 'amanda_sofa',
        'queries': [
            'CasaCraft Amanda Fabric 2 Seater Sofa in Charcoal Grey',
            'CasaCraft Amanda 2 Seater Sofa Charcoal Grey studio',
            'CasaCraft Amanda 2 Seater Sofa living room'
        ]
    },
    {
        'id': 'cannes_sofa',
        'queries': [
            'CasaCraft Cannes Fabric 3 Seater Sofa in Blue Colour',
            'CasaCraft Cannes 3 Seater Sofa Blue studio',
            'CasaCraft Cannes Fabric 3 Seater Sofa living room'
        ]
    },
    {
        'id': 'montez_sofa',
        'queries': [
            'CasaCraft Montez Velvet LHS Sectional Sofa in Grey & Beige',
            'CasaCraft Montez Velvet Sectional Sofa Grey Beige',
            'CasaCraft Montez Velvet Sectional living room'
        ]
    },
    {
        'id': 'pescara_sofa',
        'queries': [
            'CasaCraft Pescara Velvet 3 Seater Sofa in Beige Colour',
            'CasaCraft Pescara 3 Seater Sofa Beige studio',
            'CasaCraft Pescara Velvet 3 Seater Sofa living room'
        ]
    },
    {
        'id': 'radom_sofa',
        'queries': [
            'Woodsworth Radom Sheesham Wood 3 Seater Sofa in Provincial Teak Finish',
            'Woodsworth Radom 3 Seater Sofa Provincial Teak studio',
            'Woodsworth Radom Sheesham Wood 3 Seater Sofa living room'
        ]
    }
]

os.makedirs('scratch/candidates_bing', exist_ok=True)

for target in targets:
    tid = target['id']
    print('='*70)
    print(f"Processing target: {tid}")
    all_urls = []
    for q in target['queries']:
        urls = search_bing(q, 6)
        print(f"  Query: '{q}' -> found {len(urls)} URLs")
        for u in urls:
            if u not in all_urls:
                all_urls.append(u)
    
    print(f"  Total unique URLs for {tid}: {len(all_urls)}")
    count = 0
    for idx, u in enumerate(all_urls):
        try:
            r = requests.get(u, headers=headers, timeout=10)
            if r.status_code == 200 and len(r.content) > 10000:
                out_p = f"scratch/candidates_bing/{tid}_{count}.jpg"
                with open(out_p, 'wb') as f:
                    f.write(r.content)
                im = Image.open(out_p)
                print(f"    Saved [{count}] {out_p}: {im.size}, {im.format} from {u[:60]}...")
                count += 1
                if count >= 6:
                    break
        except Exception as e:
            pass

