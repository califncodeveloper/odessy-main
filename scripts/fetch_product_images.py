import os
import requests
import re
import urllib.parse
from PIL import Image

CANDIDATES_DIR = 'scratch/candidates'
os.makedirs(CANDIDATES_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def search_images(query, count=6):
    encoded = urllib.parse.quote(query)
    url = f'https://yandex.com/images/search?text={encoded}'
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
        if m.startswith('http') and ('.jpg' in m or '.jpeg' in m or '.png' in m or '.webp' in m):
            if m not in results:
                results.append(m)
        if len(results) >= count:
            break
    return results

def download_image(url, out_path):
    try:
        r = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
        if r.status_code == 200 and len(r.content) > 10000:
            with open(out_path, 'wb') as f:
                f.write(r.content)
            # Verify image can be opened by PIL
            im = Image.open(out_path)
            print(f"  Downloaded: {out_path} ({im.size}, {im.format}) from {url[:70]}...")
            return True
        else:
            print(f"  Failed ({r.status_code}, len={len(r.content)}): {url[:60]}")
            return False
    except Exception as e:
        print(f"  Error downloading {url[:60]}: {e}")
        return False

products_to_search = [
    {
        'id': 'dzyn_traditional',
        'query_studio': 'DZYN Furnitures Teak Wood Mandir with Dome white background',
        'query_env': 'DZYN Furnitures Teak Wood Mandir with Dome home interior prayer room'
    },
    {
        'id': 'decorsmart_modern',
        'query_studio': 'Decor Smart Elegant Wooden Floor Pooja Mandir With Laser-Cut Design white background',
        'query_env': 'Decor Smart Elegant Wooden Floor Pooja Mandir Laser Cut living room'
    },
    {
        'id': 'alaya_wall_mount',
        'query_studio': 'DZYN Furnitures Alaya Wall Mount Pooja Mandir Brown Gold',
        'query_env': 'DZYN Furnitures Alaya Wall Mount Pooja Mandir wall interior'
    },
    {
        'id': 'sacred_home_designer',
        'query_studio': 'DZYN Furnitures Sacred Home Large Floor Rested Pooja Mandir with Door white background',
        'query_env': 'DZYN Furnitures Sacred Home Large Floor Rested Pooja Mandir interior'
    },
    {
        'id': 'bluewud_shubh',
        'query_studio': 'Bluewud Shubh Pooja Unit Temple with Racks white background',
        'query_env': 'Bluewud Shubh Pooja Unit Temple with Racks living room apartment'
    }
]

for p in products_to_search:
    print(f"\nSearching for {p['id']}...")
    urls_studio = search_images(p['query_studio'], count=4)
    urls_env = search_images(p['query_env'], count=4)
    
    idx = 1
    for u in urls_studio:
        out_f = os.path.join(CANDIDATES_DIR, f"{p['id']}_candidate_{idx}.jpg")
        if download_image(u, out_f):
            idx += 1
            if idx > 3:
                break
                
    for u in urls_env:
        out_f = os.path.join(CANDIDATES_DIR, f"{p['id']}_candidate_{idx}.jpg")
        if download_image(u, out_f):
            idx += 1
            if idx > 6:
                break

