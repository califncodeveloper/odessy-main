import os
import requests
import re
import urllib.parse
from PIL import Image

CANDIDATES_DIR = 'scratch/candidates_bureau'
os.makedirs(CANDIDATES_DIR, exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

def search_images(query, count=6):
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
        print(f"Error searching {query}: {e}")
        return []

def download_image(url, out_path):
    try:
        r = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
        if r.status_code == 200 and len(r.content) > 10000:
            with open(out_path, 'wb') as f:
                f.write(r.content)
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
        'id': 'godrej_slimline_2_door_almirah',
        'query_studio': 'Godrej Interio Slimline 2 Door metal almirah Frost Grey white background',
        'query_env': 'Godrej Interio Slimline 2 Door metal almirah Frost Grey bedroom interior'
    },
    {
        'id': 'godrej_slimline_3_door_almirah',
        'query_studio': 'Godrej Interio Slimline 3 Door metal almirah Ultra Marine Blue white background',
        'query_env': 'Godrej Interio Slimline 3 Door metal almirah Blue bedroom interior'
    },
    {
        'id': 'godrej_storwel_m2_locker_almirah',
        'query_studio': 'Godrej Interio Storwel M2 Steel 2 Door Wardrobe Graphite Grey white background',
        'query_env': 'Godrej Interio Storwel Steel Wardrobe Graphite Grey bedroom'
    },
    {
        'id': 'godrej_slimline_mirror_wardrobe',
        'query_studio': 'Godrej Interio Slimline 2 Door Wardrobe Royal Ivory Mirror white background',
        'query_env': 'Godrej Interio Slimline Wardrobe Royal Ivory Mirror bedroom'
    },
    {
        'id': 'godrej_centurion_luxury_almirah',
        'query_studio': 'Godrej Interio Centurion Metal 2 Door Almirah Burgundy white background',
        'query_env': 'Godrej Interio Centurion Metal Almirah Burgundy bedroom interior'
    }
]

for p in products_to_search:
    print(f"\nSearching for {p['id']}...")
    urls_studio = search_images(p['query_studio'], count=5)
    urls_env = search_images(p['query_env'], count=5)
    
    idx = 1
    for u in urls_studio:
        out_f = os.path.join(CANDIDATES_DIR, f"{p['id']}_candidate_{idx}.jpg")
        if download_image(u, out_f):
            idx += 1
            if idx > 4:
                break
                
    for u in urls_env:
        out_f = os.path.join(CANDIDATES_DIR, f"{p['id']}_candidate_{idx}.jpg")
        if download_image(u, out_f):
            idx += 1
            if idx > 8:
                break

print("\nDone searching and downloading candidates!")

