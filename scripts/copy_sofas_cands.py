import os
import shutil

for f in os.listdir('scratch/candidates_phase12'):
    if f.endswith('.jpg') and not f.startswith('verta') and not f.startswith('zephyr'):
        src = os.path.join('scratch/candidates_phase12', f)
        dst = os.path.join('public/inspect_phase12', 'cand12_' + f)
        try:
            shutil.copyfile(src, dst)
            print(f"Copied {f} -> cand12_{f}")
        except Exception as e:
            pass

