import os
import requests
import re
import urllib.parse
from PIL import Image

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

def search_yandex(query, count=4):
    encoded = urllib.parse.quote(query)
    url = f'https://yandex.com/images/search?text={encoded}'
    try:
        r = requests.get(url, headers=headers, timeout=12)
        matches = re.findall(r'&quot;img_href&quot;:&quot;([^&]+)&quot;', r.text)
        if not matches:
            matches = re.findall(r'"img_href":"([^"]+)"', r.text)
        results = []
        for m in matches:
            m = urllib.parse.unquote(m)
            if m.startswith('http') and ('.jpg' in m or '.jpeg' in m or '.png' in m):
                if m not in results:
                    results.append(m)
            if len(results) >= count:
                break
        return results
    except:
        return []

def download(url, path):
    try:
        r = requests.get(url, headers=headers, timeout=12)
        if r.status_code == 200 and len(r.content) > 15000:
            with open(path, 'wb') as f:
                f.write(r.content)
            im = Image.open(path)
            print(f"Downloaded {path} ({im.size})")
            return True
    except:
        pass
    return False

queries = [
    ('ivory_mirror_1', 'Godrej Interio Slimline metal 2 door wardrobe royal ivory with mirror'),
    ('ivory_mirror_2', 'Godrej Slimline almirah ivory mirror bedroom'),
    ('nilkamal_mirror', 'Nilkamal Grace 2 Door Metal Wardrobe with Mirror Brown Ivory')
]

for tag, q in queries:
    print(f"Searching: {tag}")
    urls = search_yandex(q, count=4)
    for idx, u in enumerate(urls):
        p = f'scratch/candidates_bureau_hires/{tag}_{idx+1}.jpg'
        if download(u, p):
            break

