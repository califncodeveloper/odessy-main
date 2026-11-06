import os
from PIL import Image
import numpy as np

for f in sorted(os.listdir('scratch/verta_authentic')):
    p = os.path.join('scratch/verta_authentic', f)
    im = Image.open(p)
    arr = np.array(im)
    print(f"{f}: size={im.size}, mean_rgb={arr.mean(axis=(0,1)).astype(int)}")

