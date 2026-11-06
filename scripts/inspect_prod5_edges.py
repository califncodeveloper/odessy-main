from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau_hires/prod5_studio_1.jpg').convert('RGB')
arr = np.array(im)
print("Image size:", im.size)

# The almirah is chocolate brown: arr has low R, low G, low B (e.g. [50, 40, 40])
for y in range(70, 110):
    if arr[y, 480, 0] < 80 and arr[y-5, 480, 0] > 180:
        print(f"Top edge near y={y}")
        break

for y in range(880, 930):
    if arr[y, 480, 0] < 80 and arr[y+5, 480, 0] > 120:
        print(f"Bottom edge near y={y}")
        break

for x in range(250, 310):
    if arr[480, x, 0] < 80 and arr[480, x-5, 0] > 180:
        print(f"Left edge near x={x}")
        break

for x in range(650, 710):
    if arr[480, x, 0] < 80 and arr[480, x+5, 0] > 180:
        print(f"Right edge near x={x}")
        break

