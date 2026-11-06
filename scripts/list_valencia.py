import os
from PIL import Image

for f in sorted(os.listdir('scratch/candidates_tables')):
    if 'valencia' in f:
        im = Image.open(os.path.join('scratch/candidates_tables', f))
        print(f"{f:36s}: size={im.size}")

