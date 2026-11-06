import os
import requests
import json
import re
import urllib.parse
from PIL import Image

os.makedirs('scratch/candidates_tables_yandex', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
}

products = [
    {
        'id': 'table1_abbey',
        'query_studio': 'Woodsworth Abbey solid wood coffee table rustic teak finish white background',
        'query_env': 'Abbey solid wood coffee table rustic teak Woodsworth living room'
    },
    {
        'id': 'table2_zyra',
        'query_studio': 'Royaloak Zyra marble top coffee table white background',
        'query_env': 'Royaloak Zyra marble top coffee table living room'
    },
    {
        'id': 'table3_valencia',
        'query_studio': 'Woodsworth Valencia sheesham wood coffee table glass top white background',
        'query_env': 'Woodsworth Valencia sheesham wood coffee table glass top living room'
    },
    {
        'id': 'table4_galliano',
        'query_studio': 'Casacraft Galliano metal coffee table matte gold white background',
        'query_env': 'Casacraft Galliano metal coffee table matte gold living room'
    },
    {
        'id': 'table5_elvas',
        'query_studio': 'Casacraft Elvas round nesting coffee table set white background',
        'query_env': 'Casacraft Elvas nesting coffee table set living room'
    }
]

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
            if m.startswith('http') and any(ext in m.lower() for ext in ['.jpg', '.jpeg', '.png', '.webp']):
                if m not in results:
                    results.append(m)
            if len(results) >= count:
                break
        return results
    except Exception as e:
        print(f"Error searching Yandex for {query}: {e}")
        return []

def download_image(url, out_path):
    try:
        r = requests.get(url, headers={'User-Agent': headers['User-Agent']}, timeout=15)
        if r.status_code == 200 and len(r.content) > 15000:
            with open(out_path, 'wb') as f:
                f.write(r.content)
            im = Image.open(out_path)
            print(f"    OK: {out_path} ({im.size}, {im.format})")
            return True
        return False
    except Exception as e:
        print(f"    Download error {url[:50]}: {e}")
        return False

for p in products:
    print(f"\nProcessing {p['id']}...")
    urls_studio = search_yandex(p['query_studio'], 5)
    urls_env = search_yandex(p['query_env'], 5)
    
    idx = 1
    for u in urls_studio:
        out_f = f"scratch/candidates_tables_yandex/{p['id']}_studio_{idx}.jpg"
        if download_image(u, out_f):
            idx += 1
            if idx > 3:
                break
                
    idx = 1
    for u in urls_env:
        out_f = f"scratch/candidates_tables_yandex/{p['id']}_env_{idx}.jpg"
        if download_image(u, out_f):
            idx += 1
            if idx > 3:
                break

print("\nDone searching Yandex candidates!")

