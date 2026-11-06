import os
from PIL import Image

folder = 'scratch/candidates_phase12'
for f in sorted(os.listdir(folder)):
    p = os.path.join(folder, f)
    if os.path.isfile(p):
        try:
            im = Image.open(p)
            print(f"{f}: size={im.size}, fmt={im.format}")
        except Exception as e:
            print(f"{f}: error ({e})")

