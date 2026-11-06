import os
import requests
import re
import urllib.parse
from PIL import Image

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

queries = {
    'table1_abbey_more_env': [
        'Abbey Sheesham Wood Large Coffee Table Pepperfry living room',
        'Woodsworth Abbey solid wood rectangular coffee table living room',
        'Abbey Sheesham Wood Coffee Table In Rustic Teak Finish interior'
    ],
    'table3_valencia_more_studio': [
        'Valencia Sheesham Wood Coffee Table With Glass Top Pepperfry',
        'Woodsworth Valencia coffee table glass top white background',
        'Valencia coffee table Provincial Teak finish glass top Pepperfry'
    ],
    'table5_elvas_more': [
        'Elvas Metal Round Nesting Coffee Table Set Casacraft Pepperfry',
        'Casacraft Elvas nesting coffee table living room'
    ]
}

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
        return False

for key, q_list in queries.items():
    print(f"Searching for {key}...")
    idx = 1
    for q in q_list:
        urls = search_bing(q, count=4)
        for u in urls:
            ext = os.path.splitext(u.split('?')[0])[1] or '.jpg'
            out_p = f"scratch/candidates_tables/{key}_{idx}{ext}"
            if download_image(u, out_p):
                idx += 1

print("Done fetching extra candidates!")

