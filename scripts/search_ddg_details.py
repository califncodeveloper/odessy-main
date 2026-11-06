import requests
import json
import re
import urllib.parse

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

queries = [
    'Spacewood Verta 4 Door Wardrobe with Mirror in Santana Oak Finish',
    'Spacewood Verta 4 Door Wardrobe flipkart',
    'Woodsworth Zephyr Sheesham Wood King Size Bed hydraulic storage',
    'CasaCraft Amanda Fabric 2 Seater Sofa in Charcoal Grey pepperfry',
    'CasaCraft Cannes Fabric 3 Seater Sofa in Blue Colour pepperfry',
    'CasaCraft Montez Velvet LHS Sectional Sofa in Grey & Beige pepperfry',
    'CasaCraft Pescara Velvet 3 Seater Sofa in Beige Colour pepperfry',
    'Woodsworth Radom Sheesham Wood 3 Seater Sofa in Provincial Teak Finish pepperfry'
]

for q in queries:
    print('='*70)
    print(f"QUERY: {q}")
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(q)}"
    try:
        r = requests.get(url, headers=headers, timeout=10)
        # find snippets and links
        links = re.findall(r'<a class="result__url" href="([^"]+)">\s*(.*?)\s*</a>', r.text)
        snippets = re.findall(r'<a class="result__snippet[^"]*"[^>]*>(.*?)</a>', r.text)
        for i in range(min(4, len(links))):
            link = links[i][0]
            # DDG redirects via /l/?kh=-1&uddg=
            if 'uddg=' in link:
                actual = urllib.parse.unquote(link.split('uddg=')[1].split('&')[0])
            else:
                actual = link
            snip = re.sub('<[^<]+?>', '', snippets[i]) if i < len(snippets) else ''
            print(f"  [{i}] {actual}")
            print(f"      {snip[:150]}")
    except Exception as e:
        print(f"Error: {e}")

