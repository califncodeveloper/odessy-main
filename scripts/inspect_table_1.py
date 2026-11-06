import os
from PIL import Image, ImageOps, ImageFilter
import numpy as np

# Inspect table1_abbey_wood_studio_2
im_s = Image.open('scratch/candidates_tables/table1_abbey_wood_studio_2.jpg').convert('RGB')
print("table1_abbey_wood_studio_2 size:", im_s.size)

# Find bounding box on white background
arr = np.array(im_s)
mask = np.any(arr < 245, axis=2)
coords = np.argwhere(mask)
y0, x0 = coords.min(axis=0)
y1, x1 = coords.max(axis=0)
print(f"Product 1 Studio Crop bbox: x=[{x0}, {x1}], y=[{y0}, {y1}], w={x1-x0}, h={y1-y0}")

# Check lifestyle images for product 1
for fname in ['table1_abbey_more_env_1.jpg', 'table1_abbey_more_env_2.jpg', 'table1_abbey_more_env_3.jpg', 'table1_abbey_more_env_6.jpg']:
    p = os.path.join('scratch/candidates_tables', fname)
    im = Image.open(p)
    print(f"{fname}: {im.size}")

