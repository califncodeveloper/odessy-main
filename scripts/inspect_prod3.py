from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau_hires/prod3_studio_2.jpg').convert('RGB')
arr = np.array(im)
print("Image size:", im.size)

# Find coordinates of the red wardrobe
for y in range(20, 80):
    if arr[y, 400, 0] > 180 and arr[y-5, 400, 0] < 150: # check wardrobe top
        print(f"Top near y={y}")

for y in range(700, 780):
    # check wardrobe bottom feet
    if arr[y, 400, 0] > 190 and arr[y+10, 400, 0] < 180:
        print(f"Bottom near y={y}")

for x in range(150, 240):
    if arr[300, x, 0] > 180 and arr[300, x-5, 0] < 150:
        print(f"Left edge near x={x}")

for x in range(500, 580):
    if arr[300, x, 0] > 180 and arr[300, x+5, 0] < 150:
        print(f"Right edge near x={x}")

