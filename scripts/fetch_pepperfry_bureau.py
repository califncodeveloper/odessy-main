import requests
import json
import re
import os

os.makedirs('scratch/candidates_bureau', exist_ok=True)

urls = {
    '1_two_door': 'https://www.pepperfry.com/product/slimline-metal-2-door-almirah-in-frost-grey-colour-by-godrej-interio-1809109.html',
    '2_three_door': 'https://www.pepperfry.com/product/slimline-metal-3-door-almirah-in-textured-ultra-marine-blue-colour-by-godrej-inte-1809399.html',
    '3_internal_locker': 'https://www.pepperfry.com/product/storwel-model-2-steel-2-door-wardrobe-in-graphite-grey-colour-with-drawer-locker-by-godrej-interio-2426916.html',
    '4_with_mirror': 'https://www.pepperfry.com/product/slimline-metal-2-door-wardrobe-in-royal-ivory-finish-with-mirror-1809154.html',
    '5_premium_modern': 'https://www.pepperfry.com/product/centurion-metal-2-door-almirah-in-burgundy-colour-by-godrej-interio-2396343.html'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

results = {}

for key, url in urls.items():
    print('='*60)
    print(f'Fetching {key}: {url}')
    try:
        r = requests.get(url, headers=headers, timeout=15)
        print(f'Status: {r.status_code}, len: {len(r.text)}')
        if r.status_code != 200:
            continue
        
        # Product title
        title_m = re.search(r'<h1[^>]*>(.*?)</h1>', r.text, re.DOTALL | re.IGNORECASE)
        title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else ''
        print(f'Title: {title}')
        
        # Extract JSON-LD
        product_json = {}
        for s in re.findall(r'<script[^>]*type=[\'"]application/ld\+json[\'"][^>]*>(.*?)</script>', r.text, re.DOTALL | re.IGNORECASE):
            try:
                data = json.loads(s.strip())
                if isinstance(data, dict) and data.get('@type') in ['Product', 'IndividualProduct']:
                    product_json = data
                    break
            except:
                pass
                
        # Find images in HTML and JSON
        images = []
        if 'image' in product_json:
            imgs = product_json['image']
            if isinstance(imgs, list):
                images.extend(imgs)
            elif isinstance(imgs, str):
                images.append(imgs)
                
        cdn_matches = re.findall(r'(https?:)?//[^\s"\']*(?:pepperfry|ii1\.pepperfry\.com)[^\s"\']*\.(?:jpg|jpeg|png|webp)', r.text, re.IGNORECASE)
        for src in cdn_matches:
            if src.startswith('//'):
                src = 'https:' + src
            elif not src.startswith('http'):
                src = 'https://' + src
            if src not in images and ('item' in src or 'product' in src or 'catalog' in src or 'media' in src):
                images.append(src)
                
        results[key] = {
            'url': url,
            'title': title,
            'json_ld': product_json,
            'images': images[:10]
        }
        print(f'Found {len(images)} images')
        for idx, img_url in enumerate(images[:6]):
            print(f'  Img {idx+1}: {img_url}')
            try:
                img_r = requests.get(img_url, headers=headers, timeout=12)
                if img_r.status_code == 200 and len(img_r.content) > 5000:
                    ext = os.path.splitext(img_url.split('?')[0])[1] or '.jpg'
                    out_img = f'scratch/candidates_bureau/{key}_cand_{idx+1}{ext}'
                    with open(out_img, 'wb') as f:
                        f.write(img_r.content)
                    print(f'    Saved: {out_img} ({len(img_r.content)} bytes)')
            except Exception as e:
                print(f'    Download error: {e}')
    except Exception as e:
        print(f'Error fetching {url}: {e}')

with open('scratch/pepperfry_bureau_data.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2, ensure_ascii=False)

print('\nDone fetching metadata!')
