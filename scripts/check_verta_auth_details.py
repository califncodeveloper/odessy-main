from PIL import Image
import numpy as np

for name in ['verta_auth_0.jpg', 'verta_auth_1.jpg']:
    p = f'public/inspect_phase12/{name}'
    im = Image.open(p)
    w, h = im.size
    print(f"{name}: {w}x{h}")
    # Let's crop center mirror area and bottom drawer area
    arr = np.array(im)
    # Check top crown, middle doors, bottom drawers
    print(f"  Top area (y=250..350) mean RGB: {arr[250:350, :].mean(axis=(0,1)).astype(int)}")
    print(f"  Middle doors (y=600..700) mean RGB: {arr[600:700, :].mean(axis=(0,1)).astype(int)}")
    print(f"  Bottom drawers (y=1000..1100) mean RGB: {arr[1000:1100, :].mean(axis=(0,1)).astype(int)}")

