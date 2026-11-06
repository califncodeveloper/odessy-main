import requests
import json
import re
import os

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

targets = [
    {
        'id': 'zephyr-sheesham-hydraulic-bed',
        'name': 'Zephyr Solid Sheesham Hydraulic Storage Bed',
        'url': 'https://www.pepperfry.com/product/zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage-1959741.html'
    },
    {
        'id': 'verta-modern-4-door-wardrobe',
        'name': 'Verta 4-Door Wardrobe with Dual Mirrors & Drawers',
        'url': 'https://www.pepperfry.com/product/verta-4-door-wardrobe-with-mirror-in-santana-oak-finish-by-spacewood-1945398.html'
    },
    {
        'id': 'amanda-fabric-2-seater',
        'name': 'Amanda Modern 2-Seater Fabric Sofa',
        'url': 'https://www.pepperfry.com/product/amanda-fabric-2-seater-sofa-in-charcoal-grey-colour-1941914.html'
    },
    {
        'id': 'cannes-fabric-3-seater',
        'name': 'Cannes Contemporary 3-Seater Fabric Sofa',
        'url': 'https://www.pepperfry.com/product/cannes-fabric-3-seater-sofa-in-blue-colour-1976077.html'
    },
    {
        'id': 'montez-velvet-lhs-sectional',
        'name': 'Montez Velvet LHS Sectional Sofa (3 + Lounger)',
        'url': 'https://www.pepperfry.com/product/montez-velvet-lhs-sectional-sofa-in-grey-beige-colour-2244211.html'
    },
    {
        'id': 'pescara-velvet-3-seater',
        'name': 'Pescara Luxury 3-Seater Velvet Sofa',
        'url': 'https://www.pepperfry.com/product/pescara-velvet-3-seater-sofa-in-beige-colour-2244199.html'
    },
    {
        'id': 'radom-sheesham-3-seater',
        'name': 'Radom Solid Sheesham 3-Seater Sofa',
        'url': 'https://www.pepperfry.com/product/radom-sheesham-wood-3-seater-sofa-in-provincial-teak-finish-1940991.html'
    }
]

for t in targets:
    print('='*70)
    print(f"Target: {t['name']}")
    print(f"URL: {t['url']}")
    try:
        r = requests.get(t['url'], headers=headers, timeout=12)
        print(f"Status: {r.status_code}, Length: {len(r.text)}")
        if r.status_code == 200:
            # find images in LD+JSON or HTML
            img_set = set()
            for s in re.findall(r'<script[^>]*type=[\'"]application/ld\+json[\'"][^>]*>(.*?)</script>', r.text, re.DOTALL | re.IGNORECASE):
                try:
                    data = json.loads(s.strip())
                    if isinstance(data, dict):
                        imgs = data.get('image', [])
                        if isinstance(imgs, str):
                            img_set.add(imgs)
                        elif isinstance(imgs, list):
                            for i in imgs:
                                if isinstance(i, str):
                                    img_set.add(i)
                except:
                    pass
            cdn_matches = re.findall(r'https?://ii\d?\.pepperfry\.com/media/catalog/product/[^\s"\'<>]+', r.text)
            for m in cdn_matches:
                img_set.add(m)
            print(f"Found {len(img_set)} unique Pepperfry image URLs:")
            for img in sorted(list(img_set))[:8]:
                print(f"  {img}")
        else:
            print(f"Failed with status: {r.status_code}")
    except Exception as e:
        print(f"Error fetching: {e}")

