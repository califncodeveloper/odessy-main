import os
from PIL import Image
import numpy as np

def check_image(name, path):
    if not os.path.exists(path):
        print(f"Missing: {path}")
        return
    im = Image.open(path).convert('RGB')
    arr = np.array(im)
    mask = np.any(arr < 240, axis=2)
    coords = np.argwhere(mask)
    if len(coords) > 0:
        y0, x0 = coords.min(axis=0)
        y1, x1 = coords.max(axis=0)
        print(f"[{name}] size={im.size}, bbox=x[{x0}:{x1}] y[{y0}:{y1}] (item {x1-x0}x{y1-y0})")
    else:
        print(f"[{name}] size={im.size}, all white")

print("--- Product 1: Solid Wood Rectangular Center Table ---")
check_image("P1 Studio 2", "scratch/candidates_tables/table1_abbey_wood_studio_2.jpg")
check_image("P1 Studio 4", "scratch/candidates_tables/table1_abbey_wood_studio_4.jpg")
check_image("P1 Studio 5", "scratch/candidates_tables/table1_abbey_wood_studio_5.jpg")
check_image("P1 Env 3", "scratch/candidates_tables/table1_abbey_more_env_3.jpg")
check_image("P1 Env 6", "scratch/candidates_tables/table1_abbey_more_env_6.jpg")

print("\n--- Product 2: Marble Top Center Table ---")
check_image("P2 Studio 1", "scratch/candidates_tables/table2_zyra_marble_studio_1.jpg")
check_image("P2 Studio 5", "scratch/candidates_tables/table2_zyra_marble_studio_5.jpg")
check_image("P2 Env 1", "scratch/candidates_tables/table2_zyra_marble_env_1.jpg")
check_image("P2 Env 5", "scratch/candidates_tables/table2_zyra_marble_env_5.jpg")

print("\n--- Product 3: Glass Top Center Table ---")
check_image("P3 Studio 1", "scratch/candidates_tables/table3_valencia_more_studio_1.jpg")
check_image("P3 Studio 4", "scratch/candidates_tables/table3_valencia_more_studio_4.jpg")
check_image("P3 Studio 5", "scratch/candidates_tables/table3_valencia_more_studio_5.jpg")
check_image("P3 Studio 6", "scratch/candidates_tables/table3_valencia_more_studio_6.jpg")
check_image("P3 Env 2", "scratch/candidates_tables/table3_valencia_glass_env_2.jpg")
check_image("P3 Env 3", "scratch/candidates_tables/table3_valencia_glass_env_3.jpg")

print("\n--- Product 4: Modern Metal Frame Center Table ---")
check_image("P4 Studio 1", "scratch/candidates_tables/table4_galliano_metal_studio_1.jpg")
check_image("P4 Env 1", "scratch/candidates_tables/table4_galliano_metal_env_1.jpg")
check_image("P4 Env 3", "scratch/candidates_tables/table4_galliano_metal_env_3.jpg")
check_image("P4 Env 4", "scratch/candidates_tables/table4_galliano_metal_env_4.jpeg")

print("\n--- Product 5: Nesting Center Table Set ---")
check_image("P5 Studio 1", "scratch/candidates_tables/table5_elvas_nesting_studio_1.jpg")
check_image("P5 Studio More 1", "scratch/candidates_tables/table5_elvas_more_1.jpg")
check_image("P5 Studio More 3", "scratch/candidates_tables/table5_elvas_more_3.jpg")
check_image("P5 Env 1", "scratch/candidates_tables/table5_elvas_nesting_env_1.png")
check_image("P5 Env More 5", "scratch/candidates_tables/table5_elvas_more_5.jpg")

