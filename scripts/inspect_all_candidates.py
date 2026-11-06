import os
from PIL import Image
import numpy as np

cand_dir = 'scratch/candidates_tables'
print("=== CANDIDATE SUMMARY ===")
for f in sorted(os.listdir(cand_dir)):
    if not any(f.endswith(ext) for ext in ['.jpg', '.jpeg', '.png', '.webp']):
        continue
    p = os.path.join(cand_dir, f)
    im = Image.open(p)
    w, h = im.size
    print(f"{f:36s} | {w:4d}x{h:4d} | {im.format:4s} | {os.path.getsize(p)//1024:4d} KB")

