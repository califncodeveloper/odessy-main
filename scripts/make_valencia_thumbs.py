import os
from PIL import Image

im6 = Image.open('scratch/candidates_tables/table3_valencia_more_studio_6.jpg')
# Let's see thumbnail
im6.thumbnail((400, 400))
im6.save('scratch/thumb_valencia_6.jpg')

im2 = Image.open('scratch/candidates_tables/table3_valencia_glass_env_2.jpg')
im2.thumbnail((400, 400))
im2.save('scratch/thumb_valencia_2.jpg')

im3 = Image.open('scratch/candidates_tables/table3_valencia_glass_env_3.jpg')
im3.thumbnail((400, 400))
im3.save('scratch/thumb_valencia_3.jpg')

print("Thumbnails saved.")

