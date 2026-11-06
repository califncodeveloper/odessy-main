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
        r = requests.get(url, headers=headers, timeout=15)
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

queries = [
    "DZYN Furnitures Sacred Home Large Pooja Mandir living room interior",
    "DZYN Sacred Home Floor Rested Pooja Mandir room",
    "DZYN Sacred Home teak wood temple home interior",
    "brown teak wood pooja mandir with door by dzyn furnitures 1831387"
]

all_urls = []
for q in queries:
    print(f"Searching: {q}")
    urls = search_bing(q, 6)
    for u in urls:
        if u not in all_urls:
            all_urls.append(u)

print(f"Found {len(all_urls)} unique URLs")

os.makedirs('scratch/candidates_sacred', exist_ok=True)
downloaded = []
for idx, u in enumerate(all_urls):
    try:
        r = requests.get(u, headers=headers, timeout=12)
        if r.status_code == 200 and len(r.content) > 15000:
            out_p = f"scratch/candidates_sacred/cand_{idx+1}.jpg"
            with open(out_p, 'wb') as f:
                f.write(r.content)
            im = Image.open(out_p)
            print(f"  [{idx+1}] Downloaded {out_p}: {im.size}, {im.format}")
            downloaded.append(out_p)
            if len(downloaded) >= 5:
                break
    except Exception as e:
        print(f"  [{idx+1}] Failed: {e}")

print(f"Total downloaded: {len(downloaded)}")

