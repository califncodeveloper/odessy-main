import os
from PIL import Image
import numpy as np

cand_dir = 'scratch/candidates_tables'
for f in sorted(os.listdir(cand_dir)):
    p = os.path.join(cand_dir, f)
    im = Image.open(p).convert('RGB')
    arr = np.array(im)
    corners = [
        arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1],
        arr[10, 10], arr[10, -10], arr[-10, 10], arr[-10, -10]
    ]
    mean_corner = np.mean(corners, axis=0)
    # Check if corner is near white (>230)
    is_white_bg = np.all(mean_corner > 220)
    print(f"{f:36s}: size={im.size[0]}x{im.size[1]}, corner_mean={mean_corner.astype(int)}, is_white_bg={is_white_bg}")

