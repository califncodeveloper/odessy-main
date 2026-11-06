import requests
import re
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'
}

url = "https://www.flipkart.com/spacewood-verta-engineered-wood-4-door-wardrobe/p/itm1b0407c1503c9?pid=WCLHFSHZYGZN8MYP"
r = requests.get(url, headers=headers, timeout=15)
print("Status code:", r.status_code)

matches = re.findall(r'https://rukminim\d?\.flixcart\.com/image/[^/]+/[^/]+/([^\s"\'\?]+)', r.text)
unique_keys = list(set(matches))
print(f"Found {len(unique_keys)} product image keys:")
for k in unique_keys[:15]:
    # Construct high-res URL
    high_res = f"https://rukminim2.flixcart.com/image/1200/1200/{k}"
    print(" ", high_res)

