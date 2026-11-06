from PIL import Image
import numpy as np

im0 = Image.open('scratch/candidates_phase12/zephyr_bed_0.jpg')
im1 = Image.open('scratch/candidates_phase12/zephyr_bed_1.jpg')

print("zephyr_bed_0 size:", im0.size)
print("zephyr_bed_1 size:", im1.size)

