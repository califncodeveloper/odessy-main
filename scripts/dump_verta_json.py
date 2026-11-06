import requests
import json
import re

url = "https://www.flipkart.com/spacewood-verta-engineered-wood-4-door-wardrobe/p/itm1b0407c1503c9?pid=WCLHFSHZYGZN8MYP"
r = requests.get(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

# Find initial data JSON script tag
scripts = re.findall(r'<script id="is_jsonp_data"[^>]*>(.*?)</script>', r.text, re.DOTALL)
if not scripts:
    scripts = re.findall(r'window\.__INITIAL_STATE__\s*=\s*(\{.*?\});', r.text, re.DOTALL)

for img in re.findall(r'"url":"(https://rukminim\d?\.flixcart\.com/image/[^"]+)"', r.text):
    print("Direct img in JSON:", img)

