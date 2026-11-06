import os
import requests
import json
import re
import urllib.parse
from PIL import Image

os.makedirs('scratch/candidates_tables', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

products = [
    {
        'id': 'table1_abbey_wood',
        'pepperfry_url': 'https://www.pepperfry.com/product/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836.html',
        'query_studio': 'Abbey solid wood coffee table rustic teak finish Woodsworth white background studio',
        'query_env': 'Abbey solid wood coffee table rustic teak living room interior'
    },
    {
        'id': 'table2_zyra_marble',
        'pepperfry_url': 'https://www.pepperfry.com/product/zyra-marble-top-coffee-table-in-cream-and-brown-finish-2159069.html',
        'query_studio': 'Royaloak Zyra marble top coffee table white background studio',
        'query_env': 'Royaloak Zyra marble coffee table living room interior'
    },
    {
        'id': 'table3_valencia_glass',
        'pepperfry_url': 'https://www.pepperfry.com/product/valencia-sheesham-wood-coffee-table-in-scratch-resistant-provincial-teak-finish-with-glass-top-by-woodsworth-1823210.html',
        'query_studio': 'Valencia sheesham wood coffee table with glass top Woodsworth white background',
        'query_env': 'Valencia sheesham wood coffee table glass top living room interior'
    },
    {
        'id': 'table4_galliano_metal',
        'pepperfry_url': 'https://www.pepperfry.com/product/galliano-metal-coffee-table-in-matte-gold-finish-by-casacraft-2186809.html',
        'query_studio': 'Galliano metal coffee table matte gold finish Casacraft white background studio',
        'query_env': 'Galliano metal coffee table matte gold living room interior'
    },
    {
        'id': 'table5_elvas_nesting',
        'pepperfry_url': 'https://www.pepperfry.com/product/elvas-metal-round-nesting-coffee-table-set-in-black-finish-with-white-porcelain-top-set-of-2-1959345.html',
        'query_studio': 'Elvas metal round nesting coffee table set of 2 Casacraft white background',
        'query_env': 'Elvas metal nesting coffee table set living room interior'
    }
]

def search_bing(query, count=6):
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

# 1. Fetch direct Pepperfry pages
results = {}
for p in products:
    p_id = p['id']
    url = p['pepperfry_url']
    print('='*60)
    print(f"Fetching {p_id}: {url}")
    try:
        r = requests.get(url, headers=headers, timeout=15)
        print(f"  Status: {r.status_code}, len: {len(r.text)}")
        images = []
        if r.status_code == 200:
            # Title
            title_m = re.search(r'<h1[^>]*>(.*?)</h1>', r.text, re.DOTALL | re.IGNORECASE)
            title = re.sub(r'<[^>]+>', '', title_m.group(1)).strip() if title_m else ''
            print(f"  Title: {title}")
            
            # CDN images
            cdn_matches = re.findall(r'(https?:)?//[^\s"\']*(?:pepperfry|ii1\.pepperfry\.com)[^\s"\']*\.(?:jpg|jpeg|png|webp)', r.text, re.IGNORECASE)
            for src in cdn_matches:
                if src.startswith('//'):
                    src = 'https:' + src
                elif not src.startswith('http'):
                    src = 'https://' + src
                if src not in images and ('item' in src or 'product' in src or 'catalog' in src or 'media' in src):
                    images.append(src)
            print(f"  Found {len(images)} CDN images on Pepperfry page")
            
            for idx, img_url in enumerate(images[:8]):
                ext = os.path.splitext(img_url.split('?')[0])[1] or '.jpg'
                out_path = f"scratch/candidates_tables/{p_id}_pf_{idx+1}{ext}"
                download_image(img_url, out_path)
                
        # Also search bing for studio and env
        print(f"  Searching Bing images for studio...")
        studio_cand = search_bing(p['query_studio'], count=5)
        for idx, u in enumerate(studio_cand):
            ext = os.path.splitext(u.split('?')[0])[1] or '.jpg'
            out_path = f"scratch/candidates_tables/{p_id}_studio_{idx+1}{ext}"
            download_image(u, out_path)
            
        print(f"  Searching Bing images for lifestyle interior...")
        env_cand = search_bing(p['query_env'], count=5)
        for idx, u in enumerate(env_cand):
            ext = os.path.splitext(u.split('?')[0])[1] or '.jpg'
            out_path = f"scratch/candidates_tables/{p_id}_env_{idx+1}{ext}"
            download_image(u, out_path)
            
    except Exception as e:
        print(f"  Error fetching {p_id}: {e}")

print("\nDone fetching candidate images!")

