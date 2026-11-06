from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau_hires/prod1_studio_1.jpg').convert('RGB')
arr = np.array(im)
print("Image size:", im.size)

# wardrobe is red/wine in center
for y in range(50, 100):
    if arr[y, 250, 0] > 90 and arr[y, 250, 1] < 50:
        print(f"Top edge near y={y}")
        break

for y in range(400, 480):
    if arr[y, 250, 0] > 180 and arr[y+5, 250, 0] < 170:
        print(f"Base edge near y={y}")
        break

for x in range(120, 180):
    if arr[250, x, 0] > 90 and arr[250, x, 1] < 50 and arr[250, x-5, 0] > 180:
        print(f"Left edge near x={x}")
        break

for x in range(320, 380):
    if arr[250, x, 0] > 90 and arr[250, x, 1] < 50 and arr[250, x+5, 0] > 180:
        print(f"Right edge near x={x}")
        break

