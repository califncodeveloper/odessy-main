from PIL import Image
import numpy as np

im = Image.open('scratch/candidates_bureau_hires/prod1_studio_3.jpg').convert('RGB')
arr = np.array(im)
print("Image size:", im.size)

# The wardrobe is in the center. Let's find horizontal boundaries of the wardrobe
# Inspect horizontal slice at y=480
row = arr[480, :, :]
# Find where the grey wardrobe starts and ends
# In prod1_studio_3.jpg, wall on left is light grey, wardrobe is light grey, floor is wood at bottom
# Let's inspect some sample pixels
print("Pixel at (200, 480) [left wall]:", arr[480, 200])
print("Pixel at (480, 480) [wardrobe center]:", arr[480, 480])
print("Pixel at (750, 480) [right wall/plant]:", arr[480, 750])
print("Pixel at (480, 50) [top wall]:", arr[50, 480])
print("Pixel at (480, 100) [wardrobe top]:", arr[100, 480])
print("Pixel at (480, 890) [wardrobe base]:", arr[890, 480])
print("Pixel at (480, 930) [wooden floor]:", arr[930, 480])

