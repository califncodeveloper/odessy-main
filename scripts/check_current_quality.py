from PIL import Image
import os

images = [
    'zephyr_sheesham_hydraulic_bed_3x4.jpg',
    'zephyr_sheesham_hydraulic_bed_env.jpg',
    'verta_modern_4_door_wardrobe_3x4.jpg',
    'verta_modern_4_door_wardrobe_env.jpg',
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

print("Current public/products status:")
for img in images:
    p = os.path.join('public/products', img)
    if os.path.exists(p):
        im = Image.open(p)
        print(f"{img}: {im.size}, {im.format}, {os.path.getsize(p)} bytes")
    else:
        print(f"{img}: MISSING")

