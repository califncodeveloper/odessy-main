import os
from PIL import Image
import numpy as np

for f in ['table3_valencia_more_studio_1.jpg', 'table3_valencia_more_studio_5.jpg', 'table3_valencia_more_studio_6.jpg', 'table3_valencia_glass_env_2.jpg', 'table3_valencia_glass_env_3.jpg']:
    p = os.path.join('scratch/candidates_tables', f)
    im = Image.open(p)
    arr = np.array(im)
    corners = [arr[0, 0], arr[0, -1], arr[-1, 0], arr[-1, -1]]
    print(f"{f}: size={im.size}, mean_corner={np.mean(corners, axis=0).astype(int)}")

