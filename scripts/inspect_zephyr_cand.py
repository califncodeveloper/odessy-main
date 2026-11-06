from PIL import Image

for f in ['zephyr_candidate_1.jpg', 'zephyr_candidate_2.jpg']:
    p = f'scratch/candidates/{f}'
    im = Image.open(p)
    print(f"{f}: size={im.size}, mode={im.mode}")

