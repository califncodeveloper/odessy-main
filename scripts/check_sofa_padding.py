from PIL import Image
import numpy as np

sofas = [
    'amanda_fabric_2_seater_3x4.jpg',
    'amanda_fabric_2_seater_env.jpg',
    'cannes_fabric_3_seater_3x4.jpg',
    'cannes_fabric_3_seater_env.jpg',
    'montez_velvet_sectional_3x4.jpg',
    'montez_velvet_sectional_env.jpg',
    'pescara_velvet_3_seater_3x4.jpg',
    'pescara_velvet_3_seater_env.jpg',
    'radom_sheesham_3_seater_3x4.jpg',
    'radom_sheesham_3_seater_env.jpg'
]

for s in sofas:
    p = 'public/products/' + s
    im = Image.open(p)
    arr = np.array(im)
    top_color = arr[:20, :20].mean(axis=(0,1)).astype(int)
    bot_color = arr[-20:, -20:].mean(axis=(0,1)).astype(int)
    mid_color = arr[arr.shape[0]//2, arr.shape[1]//2]
    print(f"{s}: top={top_color}, bot={bot_color}, mid={mid_color}")

