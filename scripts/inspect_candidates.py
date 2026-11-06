import os
import glob
from PIL import Image

def analyze_candidates():
    prefixes = ['dzyn_traditional', 'decorsmart_modern', 'alaya_wall_mount', 'sacred_home_designer', 'bluewud_shubh']
    for p in prefixes:
        print(f"\n=== Candidates for {p} ===")
        files = sorted(glob.glob(f'scratch/candidates/{p}_candidate_*.jpg'))
        for f in files:
            try:
                im = Image.open(f)
                # Check bounding box of non-white or non-transparent if alpha
                if im.mode == 'RGBA':
                    alpha = im.split()[3]
                    bbox = alpha.getbbox()
                    print(f"  {os.path.basename(f)}: size={im.size}, RGBA alpha bbox={bbox}")
                else:
                    # check if white background
                    print(f"  {os.path.basename(f)}: size={im.size}, mode={im.mode}")
            except Exception as e:
                print(f"  {f}: error {e}")

analyze_candidates()

