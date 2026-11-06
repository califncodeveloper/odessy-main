import os
import glob
from PIL import Image
import numpy as np

for f in sorted(glob.glob('scratch/candidates_bureau/*.jpg')):
    try:
        im = Image.open(f).convert('RGB')
        arr = np.array(im)
        # Check border pixels to see if background is white/light
        top_row = arr[0, :, :]
        mean_top = top_row.mean(axis=0)
        bot_row = arr[-1, :, :]
        mean_bot = bot_row.mean(axis=0)
        # center pixel
        center = arr[arr.shape[0]//2, arr.shape[1]//2, :]
        print(f"{os.path.basename(f)}: size={im.size}, top_color={mean_top.astype(int)}, bot_color={mean_bot.astype(int)}, center={center.astype(int)}")
    except Exception as e:
        print(f"Error {f}: {e}")

