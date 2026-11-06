import os
import requests
import json
import re
import urllib.parse
from PIL import Image

os.makedirs('scratch/candidates_cots', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

products = [
    {
        'id': 'prod1_striker_single',
        'pepperfry_url': 'https://www.pepperfry.com/product/striker-metal-single-bed-in-black-finish-by-nilkamal-sleep-2035882.html',
        'query_studio': 'Nilkamal Sleep Striker Metal Single Bed in Black Finish white background studio',
        'query_env': 'Nilkamal Striker Metal Single Bed in Black Finish bedroom interior lifestyle'
    },
    {
        'id': 'prod2_akaba_double',
        'pepperfry_url': 'https://www.pepperfry.com/product/metallika-akaba-double-size-bed-in-grey-colour-by-furniturekraft-1779927.html',
        'query_studio': 'FurnitureKraft Metallika Akaba Double Size Bed in Grey Colour white background studio',
        'query_env': 'FurnitureKraft Akaba Double Size Bed in Grey bedroom interior lifestyle'
    },
    {
        'id': 'prod3_kabul_queen',
        'pepperfry_url': 'https://www.pepperfry.com/product/kabul-metal-queen-size-bed-in-white-colour-by-furniturekraft-542377.html',
        'query_studio': 'FurnitureKraft Kabul Metal Queen Size Bed in White Colour white background studio',
        'query_env': 'FurnitureKraft Kabul Metal Queen Size Bed in White bedroom interior lifestyle'
    },
    {
        'id': 'prod4_striker_king',
        'pepperfry_url': 'https://www.pepperfry.com/product/striker-metal-king-size-bed-in-black-finish-by-nilkamal-sleep-1959723.html',
        'query_studio': 'Nilkamal Sleep Striker Metal King Size Bed in Black Finish white background studio',
        'query_env': 'Nilkamal Striker Metal King Size Bed in Black bedroom interior lifestyle'
    },
    {
        'id': 'prod5_gemini_poster',
        'pepperfry_url': 'https://www.pepperfry.com/product/gemini-metal-poster-bed-in-black-colour-by-homdec-2184229.html',
        'query_studio': 'Homdec Gemini Metal Poster Bed in Black Colour canopy white background studio',
        'query_env': 'Homdec Gemini Metal Poster Bed in Black canopy bedroom interior lifestyle'
    }
]

def search_images(query, count=8):
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
        print(f"  Error searching {query}: {e}")
        return []

def download_image(url, out_path):
    try:
        r = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
        if r.status_code == 200 and len(r.content) > 10000:
            with open(out_path, 'wb') as f:
                f.write(r.content)
            im = Image.open(out_path)
            print(f"    OK: {out_path} ({im.size}, {im.format})")
            return True
        return False
    except Exception as e:
        print(f"    Download error {url[:50]}: {e}")
        return False

# 1. Fetch direct Pepperfry pages and images
print("=== FETCHING DIRECT PEPPERFRY PRODUCT IMAGES ===")
for p in products:
    p_id = p['id']
    url = p['pepperfry_url']
    print(f"\nFetching {p_id}: {url}")
    try:
        r = requests.get(url, headers=headers, timeout=15)
        if r.status_code == 200:
            cdn_matches = re.findall(r'(https?:)?//[^\s"\']*(?:pepperfry|ii1\.pepperfry\.com)[^\s"\']*\.(?:jpg|jpeg|png|webp)', r.text, re.IGNORECASE)
            print(f"  Found {len(cdn_matches)} CDN links")
            cand_idx = 1
            for src in cdn_matches:
                if src.startswith('//'):
                    src = 'https:' + src
                elif not src.startswith('http'):
                    src = 'https://' + src
                if ('item' in src or 'product' in src or 'catalog' in src or 'media' in src) and not any(k in src for k in ['banner', 'icon', 'logo', 'avatar', 'thumb']):
                    ext = os.path.splitext(src.split('?')[0])[1] or '.jpg'
                    out_path = f"scratch/candidates_cots/{p_id}_pf_{cand_idx}{ext}"
                    if download_image(src, out_path):
                        cand_idx += 1
                    if cand_idx > 6:
                        break
    except Exception as e:
        print(f"  Error: {e}")

# 2. Also search high-res candidates for studio & env
print("\n=== FETCHING WEB / STUDIO / ENV CANDIDATES ===")
for p in products:
    p_id = p['id']
    for q_type, q_key in [('studio', 'query_studio'), ('env', 'query_env')]:
        query = p[q_key]
        print(f"\nSearching {p_id} {q_type}: {query}")
        urls = search_images(query, count=5)
        idx = 1
        for u in urls:
            ext = os.path.splitext(u.split('?')[0])[1] or '.jpg'
            out_path = f"scratch/candidates_cots/{p_id}_{q_type}_{idx}{ext}"
            if download_image(u, out_path):
                idx += 1
            if idx > 3:
                break

print("\nDone fetching cot candidates!")

