import os
from PIL import Image
import numpy as np

for f in ['table2_zyra_marble_studio_1.jpg', 'table2_zyra_marble_studio_5.jpg', 'table2_zyra_marble_env_1.jpg', 'table2_zyra_marble_env_5.jpg']:
    p = os.path.join('scratch/candidates_tables', f)
    im = Image.open(p)
    arr = np.array(im)
    print(f"{f}: size={im.size}, mean_rgb={np.mean(arr, axis=(0,1)).astype(int)}")

