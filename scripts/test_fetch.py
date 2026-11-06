import requests
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
}

urls = [
    'https://www.pepperfry.com/product/shubh-pooja-unit-temple-2280090.html',
    'https://www.pepperfry.com/product/alaya-wall-mount-pooja-mandir-without-door-brown-gold-2223780.html',
    'https://www.pepperfry.com/product/brown-teak-wood-mandir-with-dome-by-dzyn-furnitures-1807837.html',
    'https://www.pepperfry.com/product/brown-teak-wood-pooja-mandir-with-door-by-dzyn-furnitures-1831387.html',
    'https://www.pepperfry.com/product/elegant-wooden-floor-pooja-mandir-with-laser-cut-design-with-storage-cabinet-2288776.html'
]

for url in urls:
    try:
        r = requests.get(url, headers=headers, timeout=10)
        print(f"URL: {url} -> Status: {r.status_code}")
        if r.status_code == 200:
            og_img = re.search(r'<meta property="og:image" content="([^"]+)"', r.text)
            title = re.search(r'<title>([^<]+)</title>', r.text)
            print(f"  Title: {title.group(1) if title else 'N/A'}")
            print(f"  OG Image: {og_img.group(1) if og_img else 'N/A'}")
    except Exception as e:
        print(f"Error {url}: {e}")

