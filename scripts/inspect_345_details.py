import os
from PIL import Image, ImageDraw, ImageFilter
import numpy as np

TARGET_W = 896
TARGET_H = 1200

# Let's inspect Table 3 candidates
for f in ['table3_valencia_more_studio_4.jpg', 'table3_valencia_more_studio_5.jpg', 'table3_valencia_glass_env_3.jpg', 'table3_valencia_glass_env_2.jpg']:
    p = os.path.join('scratch/candidates_tables', f)
    im = Image.open(p)
    print(f"P3 Candidate {f}: {im.size}")

# Let's inspect Table 4 candidates
for f in ['table4_galliano_metal_studio_1.jpg', 'table4_galliano_metal_env_1.jpg', 'table4_galliano_metal_env_3.jpg']:
    p = os.path.join('scratch/candidates_tables', f)
    im = Image.open(p)
    print(f"P4 Candidate {f}: {im.size}")

# Let's inspect Table 5 candidates
for f in ['table5_elvas_more_1.jpg', 'table5_elvas_more_3.jpg', 'table5_elvas_more_5.jpg', 'table5_elvas_nesting_env_1.png']:
    p = os.path.join('scratch/candidates_tables', f)
    im = Image.open(p)
    print(f"P5 Candidate {f}: {im.size}")

