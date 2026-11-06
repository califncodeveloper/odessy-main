from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau/godrej_slimline_3_door_almirah_candidate_1.jpg').convert('RGB')
arr = np.array(im)
print("Image size:", im.size)

# Find coordinates of the blue 3-door wardrobe
# In this image, the doors are dark navy/ultra marine blue: arr has high B or very dark blue
for y in range(100, 200):
    # Check top edge
    if arr[y, 400, 2] > 60 and arr[y, 400, 0] < 40 and arr[y-5, 400, 0] > 180:
        print(f"Top edge near y={y}")
        break

for y in range(700, 800):
    # Check bottom plinth edge
    if arr[y, 400, 0] > 200 and arr[y+5, 400, 0] < 180:
        print(f"Bottom edge near y={y}")
        break

for x in range(120, 220):
    # Left edge of blue door
    if arr[300, x, 2] > 60 and arr[300, x, 0] < 40 and arr[300, x-5, 0] > 180:
        print(f"Left edge near x={x}")
        break

for x in range(500, 600):
    # Right edge of blue door
    if arr[300, x, 2] > 60 and arr[300, x, 0] < 40 and arr[300, x+5, 0] > 180:
        print(f"Right edge near x={x}")
        break

