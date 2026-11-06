import os
import glob
from PIL import Image
import numpy as np

for f in sorted(glob.glob('scratch/candidates/*candidate*.jpg')):
    im = Image.open(f)
    arr = np.array(im)
    # Check average corner color (to see if white/studio or dark/room interior)
    corners = []
    if len(arr.shape) >= 3:
        h, w, c = arr.shape
        c_tl = arr[:20, :20, :3].mean(axis=(0,1))
        c_tr = arr[:20, -20:, :3].mean(axis=(0,1))
        c_bl = arr[-20:, :20, :3].mean(axis=(0,1))
        c_br = arr[-20:, -20:, :3].mean(axis=(0,1))
        corner_mean = (c_tl + c_tr + c_bl + c_br) / 4
        is_light = corner_mean.mean() > 220
        bg_type = "Studio/Light" if is_light else "Lifestyle/Room"
        print(f"{os.path.basename(f):35s}: {im.size} | Mode: {im.mode:4s} | Corner RGB: {corner_mean.astype(int)} ({bg_type})")

