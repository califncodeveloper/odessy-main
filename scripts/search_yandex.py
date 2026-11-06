import requests
import re
import json
import urllib.parse

def search_yandex(query, count=5):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5'
    }
    encoded = urllib.parse.quote(query)
    url = f'https://yandex.com/images/search?text={encoded}'
    r = requests.get(url, headers=headers, timeout=12)
    print(f"Query: {query} | Status: {r.status_code}")
    
    # Try finding image URLs
    # Pattern 1: data-bem with img_href
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
            
    print(f"Found {len(results)} images")
    for idx, u in enumerate(results):
        print(f"  [{idx+1}] {u}")
    return results

if __name__ == '__main__':
    search_yandex("DZYN Furnitures Teak Wood Mandir")

