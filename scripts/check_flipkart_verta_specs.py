import requests
import re

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

url = "https://www.flipkart.com/spacewood-verta-engineered-wood-4-door-wardrobe/p/itm1b0407c1503c9?pid=WCLHFSHZYGZN8MYP"
r = requests.get(url, headers=headers, timeout=15)

title = re.search(r'<span class="B_NuCI"[^>]*>(.*?)</span>', r.text)
if not title:
    title = re.search(r'<h1[^>]*>(.*?)</h1>', r.text)
print("Title:", title.group(1) if title else "Not found")

# find highlights
highlights = re.findall(r'<li class="_21A_mI">(.*?)</li>', r.text)
print("Highlights:", highlights)

# find specs
specs = re.findall(r'<td class="_1hKmbr[^"]*">(.*?)</td>\s*<td class="URwL2w">(.*?)</td>', r.text)
for s in specs[:15]:
    print(f"  {s[0]}: {s[1]}")
