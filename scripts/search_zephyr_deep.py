import requests
import json
import re
import urllib.parse
from PIL import Image
import os

os.makedirs('scratch/zephyr_search', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

queries = [
    'zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage',
    'Woodsworth Zephyr hydraulic bed honey oak',
    'Woodsworth Zephyr Sheesham Wood King Size Bed hydraulic',
    'Woodsworth Zephyr hydraulic storage bed headboard'
]

results = []
for q in queries:
    url = f"https://yandex.com/images/search?text={urllib.parse.quote(q)}"
    try:
        r = requests.get(url, headers=headers, timeout=12)
        matches = re.findall(r'&quot;img_href&quot;:&quot;([^&]+)&quot;', r.text)
        if not matches:
            matches = re.findall(r'"img_href":"([^"]+)"', r.text)
        for m in matches:
            m = urllib.parse.unquote(m)
            if m.startswith('http') and m not in results:
                results.append(m)
    except Exception as e:
        print(f"Error {q}: {e}")

print(f"Found {len(results)} images for Zephyr:")
saved_count = 0
for i, u in enumerate(results[:25]):
    print(f"[{i}] {u}")
    fname = f"scratch/zephyr_search/zephyr_{saved_count}.jpg"
    try:
        img_r = requests.get(u, headers=headers, timeout=10)
        if img_r.status_code == 200 and len(img_r.content) > 10000:
            with open(fname, 'wb') as f:
                f.write(img_r.content)
            im = Image.open(fname)
            print(f"    Saved {fname}: {im.size}, {im.format}")
            saved_count += 1
    except Exception as e:
        pass

