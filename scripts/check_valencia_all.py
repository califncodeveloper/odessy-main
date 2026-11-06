import os
from PIL import Image
import numpy as np

for i in range(1, 9):
    f = f'table3_valencia_more_studio_{i}'
    for ext in ['.jpg', '.webp']:
        p = f'scratch/candidates_tables/{f}{ext}'
        if os.path.exists(p):
            im = Image.open(p)
            arr = np.array(im)
            corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
            mean_c = np.mean(corners, axis=0).astype(int)
            print(f"{f}{ext}: size={im.size}, mean_corner={mean_c}")

