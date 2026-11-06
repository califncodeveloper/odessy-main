import os
import requests
import re
import urllib.parse
from PIL import Image

CANDIDATES_DIR = 'scratch/candidates_bureau_hires'
os.makedirs(CANDIDATES_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

def search_yandex(query, count=6):
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
            if m.startswith('http') and ('.jpg' in m or '.jpeg' in m or '.png' in m or '.webp' in m):
                if m not in results:
                    results.append(m)
            if len(results) >= count:
                break
        return results
    except Exception as e:
        print(f"Error {query}: {e}")
        return []

def download(url, path):
    try:
        r = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
        if r.status_code == 200 and len(r.content) > 15000:
            with open(path, 'wb') as f:
                f.write(r.content)
            im = Image.open(path)
            print(f"  OK: {path} ({im.size})")
            return True
    except:
        pass
    return False

queries = [
    # 1. Two-Door Steel Bureau
    ('prod1_studio', 'Godrej Interio Slimline 2 door almirah plain white background'),
    ('prod1_env', 'Godrej Interio Slimline 2 door metal almirah grey bedroom'),
    ('prod1_alt', 'Godrej Interio Slimline Two Door Wardrobe Frost Grey'),

    # 2. Three-Door Steel Bureau
    ('prod2_studio', 'Godrej Interio Slimline 3 door metal almirah white background'),
    ('prod2_env', 'Godrej Interio Slimline 3 door almirah bedroom'),

    # 3. Steel Bureau with Internal Locker (Storwel)
    ('prod3_studio', 'Godrej Interio Storwel steel almirah white background'),
    ('prod3_env', 'Godrej Interio Storwel wardrobe bedroom interior'),
    ('prod3_locker', 'Godrej Interio Storwel internal locker shelf open'),

    # 4. Steel Wardrobe with Mirror
    ('prod4_studio', 'Godrej Interio Slimline 2 door wardrobe mirror ivory white background'),
    ('prod4_env', 'Godrej Interio Slimline wardrobe with mirror bedroom'),

    # 5. Premium Modern Metal Almirah (Centurion)
    ('prod5_studio', 'Godrej Interio Centurion almirah white background'),
    ('prod5_env', 'Godrej Interio Centurion metal almirah burgundy bedroom'),
    ('prod5_alt', 'Godrej Interio Centurion wardrobe purple burgundy')
]

for tag, q in queries:
    print(f"\nQuerying: {tag} -> {q}")
    urls = search_yandex(q, count=5)
    idx = 1
    for u in urls:
        out = os.path.join(CANDIDATES_DIR, f"{tag}_{idx}.jpg")
        if download(u, out):
            idx += 1
            if idx > 3:
                break

print("\nDone downloading hires candidates!")

