from PIL import Image
import numpy as np
import os

folder = 'public/inspect_phase12'
for f in sorted(os.listdir(folder)):
    if f.endswith('.jpg'):
        p = os.path.join(folder, f)
        im = Image.open(p)
        arr = np.array(im)
        print(f"{f}: size={im.size}, mode={im.mode}, mean_rgb={arr.mean(axis=(0,1)).astype(int)}")

