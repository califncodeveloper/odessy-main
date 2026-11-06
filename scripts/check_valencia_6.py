import os
from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_tables/table3_valencia_more_studio_6.jpg').convert('RGB')
print("Image size:", im.size)
arr = np.array(im)
print("Top 10 rows mean:", np.mean(arr[:10, :, :], axis=(0,1)).astype(int))
print("Bottom 10 rows mean:", np.mean(arr[-10:, :, :], axis=(0,1)).astype(int))
print("Left 10 cols mean:", np.mean(arr[:, :10, :], axis=(0,1)).astype(int))
print("Right 10 cols mean:", np.mean(arr[:, -10:, :], axis=(0,1)).astype(int))

# Find table bounds if on plain or contrasting background
mask = np.any(np.abs(arr - arr[0,0]) > 30, axis=2)
coords = np.argwhere(mask)
if len(coords) > 0:
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0)
    print(f"Bbox from corner diff: x=[{x0}, {x1}], y=[{y0}, {y1}]")

