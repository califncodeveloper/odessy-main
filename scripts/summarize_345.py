import os
from PIL import Image

def summarize(prefix):
    print(f"=== {prefix} ===")
    for f in sorted(os.listdir('scratch/candidates_tables')):
        if prefix in f:
            p = os.path.join('scratch/candidates_tables', f)
            im = Image.open(p)
            print(f"  {f:36s} | {im.size[0]:4d}x{im.size[1]:4d} | {im.format}")

summarize('table3_valencia')
summarize('table4_galliano')
summarize('table5_elvas')

