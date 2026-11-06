import os
import glob
from PIL import Image
import numpy as np

for f in sorted(glob.glob('scratch/candidates_bureau/*.jpg')):
    im = Image.open(f).convert('RGB')
    arr = np.array(im)
    # Check if border is plain
    corners = [arr[0,0], arr[0,-1], arr[-1,0], arr[-1,-1]]
    is_plain_bg = np.all(np.std(corners, axis=0) < 15)
    
    # Simple threshold against corner color
    bg_col = corners[0].astype(float)
    diff = np.sqrt(np.sum((arr.astype(float) - bg_col)**2, axis=2))
    mask = diff > 25
    ys, xs = np.where(mask)
    if len(ys) > 0 and len(xs) > 0:
        bbox = (xs.min(), ys.min(), xs.max(), ys.max())
        box_w = bbox[2] - bbox[0]
        box_h = bbox[3] - bbox[1]
        print(f"{os.path.basename(f)}: size={im.size}, bg_plain={is_plain_bg}, bbox={bbox}, bbox_size=({box_w}, {box_h}), aspect={box_w/box_h:.2f}")
    else:
        print(f"{os.path.basename(f)}: size={im.size}, no bbox found")

