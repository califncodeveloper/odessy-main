from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau_hires/prod1_studio_3.jpg').convert('RGB')
arr = np.array(im)

for x in range(250, 320):
    if arr[480, x, 0] > 180 and arr[480, x-5, 0] < 165:
        print(f"Wardrobe left edge near x={x}")
        break

for x in range(650, 720):
    if arr[480, x, 0] < 185 and arr[480, x-5, 0] > 185:
        print(f"Wardrobe right edge near x={x}")
        break

for y in range(70, 110):
    if arr[y, 480, 0] < 175 and arr[y-5, 480, 0] > 200:
        print(f"Wardrobe top edge near y={y}")
        break

for y in range(880, 920):
    if arr[y, 480, 0] > 195 and arr[y+5, 480, 0] < 180:
        print(f"Wardrobe bottom edge near y={y}")
        break

