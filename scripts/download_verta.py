import requests
import os
from PIL import Image

os.makedirs('scratch/verta_authentic', exist_ok=True)

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
}

verta_urls = [
    'https://rukminim2.flixcart.com/image/1200/1200/xif0q/wardrobe-closet/a/u/9/no-53-2-160-4-particle-board-172-kosmo-verta-4-door-wardrobe-original-imahfxbpgnvwhndg.jpeg',
    'https://rukminim2.flixcart.com/image/1200/1200/xif0q/wardrobe-closet/7/0/t/no-53-2-160-4-particle-board-172-kosmo-verta-4-door-wardrobe-original-imahfshzf2z6qwxe.jpeg',
    'https://rukminim2.flixcart.com/image/1200/1200/xif0q/wardrobe-closet/u/g/i/no-53-2-160-4-particle-board-172-kosmo-verta-4-door-wardrobe-original-imahfshzgkedqfb7.jpeg',
    'https://rukminim2.flixcart.com/image/1200/1200/xif0q/wardrobe-closet/g/l/y/no-53-2-160-4-particle-board-172-kosmo-verta-4-door-wardrobe-original-imahfshzgggaagza.jpeg'
]

for i, u in enumerate(verta_urls):
    r = requests.get(u, headers=headers)
    fname = f"scratch/verta_authentic/verta_{i}.jpeg"
    with open(fname, 'wb') as f:
        f.write(r.content)
    im = Image.open(fname)
    print(f"Saved {fname}: {im.size}, {im.format}")

