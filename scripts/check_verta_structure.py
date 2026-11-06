from PIL import Image
import numpy as np

im = Image.open('scratch/verta_authentic/verta_3.jpeg')
w, h = im.size
print(f"verta_3: {w}x{h}")

# Check mirrors: float glass mirrors usually have high reflection or specific color/brightness
# Let's check horizontal slices across the wardrobe
arr = np.array(im)
# Find the bounding box of non-white pixels
mask = np.any(arr < 240, axis=2)
ys, xs = np.where(mask)
print(f"Bounding box: x={xs.min()}..{xs.max()} (width {xs.max()-xs.min()}), y={ys.min()}..{ys.max()} (height {ys.max()-ys.min()})")

# Let's inspect verta_0, verta_1, verta_2
for i in range(4):
    p = f'scratch/verta_authentic/verta_{i}.jpeg'
    im_i = Image.open(p)
    arr_i = np.array(im_i)
    mask_i = np.any(arr_i < 240, axis=2)
    ys_i, xs_i = np.where(mask_i)
    print(f"verta_{i}: bbox x={xs_i.min()}..{xs_i.max()}, y={ys_i.min()}..{ys_i.max()}")

