from PIL import Image
import numpy as np

im = Image.open('scratch/verta_authentic/verta_0.jpeg')
w, h = im.size
print(f"verta_0 size: {w}x{h}")
arr = np.array(im)

# Middle vertical slice (through the doors)
mid_y = (232 + 1119) // 2
slice_y = arr[mid_y, 72:1007]
print(f"Middle slice shape: {slice_y.shape}")

# Bottom slice (where drawers would be, around y=1000..1100)
slice_bottom = arr[1050, 72:1007]
print(f"Bottom slice shape: {slice_bottom.shape}")

