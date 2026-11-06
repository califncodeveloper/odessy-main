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

def search_duckduckgo(query, count=6):
    try:
        url = 'https://html.duckduckgo.com/html/?q=' + urllib.parse.quote(query)
        r = requests.get(url, headers=headers, timeout=15)
        links = re.findall(r'href="(https?://[^"]+\.(?:jpg|jpeg|png|webp))"', r.text, re.IGNORECASE)
        results = []
        for l in links:
            if l not in results:
                results.append(l)
        return results[:count]
    except Exception as e:
        print(f"Error DDG {query}: {e}")
        return []

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

targets = [
    ('prod4_striker_king_env', 'Nilkamal Striker Metal King Bed in Black bedroom lifestyle interior', 'Nilkamal Striker Metal Bed bedroom modern interior'),
    ('prod5_gemini_poster_studio', 'Homdec Gemini Metal Poster Bed in Black Colour canopy studio white background', 'metal poster canopy bed black studio white background'),
    ('prod5_gemini_poster_env', 'Homdec Gemini Metal Poster Bed in Black canopy bedroom lifestyle', 'black metal four poster bed bedroom interior')
]

for key, q1, q2 in targets:
    print(f"\nSearching for {key}...")
    urls = search_bing(q1, 8)
    if not urls:
        urls = search_bing(q2, 8)
    if not urls:
        urls = search_duckduckgo(q1, 6)
    print(f"Found {len(urls)} candidates")
    idx = 1
    for u in urls:
        ext = os.path.splitext(u.split('?')[0])[1] or '.jpg'
        out_path = f"scratch/candidates_cots/{key}_{idx}{ext}"
        if download_image(u, out_path):
            idx += 1
        if idx > 4:
            break

print("\nDone fetching prod4 & prod5 candidates!")

