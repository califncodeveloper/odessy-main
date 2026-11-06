from PIL import Image
import numpy as np

cands = [
    'cand12_amanda_sofa_0.jpg',
    'cand12_amanda_sofa_1.jpg',
    'cand12_cannes_sofa_0.jpg',
    'cand12_cannes_sofa_2.jpg',
    'cand12_montez_sofa_0.jpg',
    'cand12_montez_sofa_1.jpg',
    'cand12_pescara_sofa_1.jpg',
    'cand12_radom_sofa_2.jpg'
]

print("Inspecting downloaded candidate details:")
for c in cands:
    p = 'public/inspect_phase12/' + c
    im = Image.open(p)
    arr = np.array(im)
    print(f"{c}: {im.size}, mode={im.mode}, mean_rgb={arr.mean(axis=(0,1)).astype(int)}")

