import os
import shutil

os.makedirs('public/inspect_phase12', exist_ok=True)

# Copy candidates to public/inspect_phase12 for easy viewing
files_to_copy = [
    (r'C:\Users\shubh\.gemini\antigravity\brain\118958b8-5198-44b6-b857-1354990544ad\woodsworth_zephyr_hydraulic_bed_1793972720882.jpg', 'zephyr_generated_studio.jpg'),
    ('scratch/candidates/zephyr_candidate_1.jpg', 'zephyr_cand_1.jpg'),
    ('scratch/candidates/zephyr_candidate_2.jpg', 'zephyr_cand_2.jpg'),
    ('scratch/verta_authentic/verta_0.jpeg', 'verta_auth_0.jpg'),
    ('scratch/verta_authentic/verta_1.jpeg', 'verta_auth_1.jpg'),
    ('scratch/verta_authentic/verta_2.jpeg', 'verta_auth_2.jpg'),
    ('scratch/verta_authentic/verta_3.jpeg', 'verta_auth_3.jpg'),
    ('scratch/candidates/verta_candidate_1.jpg', 'verta_cand_1.jpg'),
    ('scratch/candidates/verta_candidate_2.jpg', 'verta_cand_2.jpg'),
    ('scratch/candidates/verta_candidate_3.jpg', 'verta_cand_3.jpg'),
    ('public/products/backup_raw_sofas/amanda_fabric_2_seater_3x4.jpg', 'raw_amanda_studio.jpg'),
    ('public/products/backup_raw_sofas/amanda_fabric_2_seater_env.jpg', 'raw_amanda_env.jpg'),
    ('public/products/backup_raw_sofas/cannes_fabric_3_seater_3x4.jpg', 'raw_cannes_studio.jpg'),
    ('public/products/backup_raw_sofas/cannes_fabric_3_seater_env.jpg', 'raw_cannes_env.jpg'),
    ('public/products/backup_raw_sofas/montez_velvet_sectional_3x4.jpg', 'raw_montez_studio.jpg'),
    ('public/products/backup_raw_sofas/montez_velvet_sectional_env.jpg', 'raw_montez_env.jpg'),
    ('public/products/backup_raw_sofas/pescara_velvet_3_seater_3x4.jpg', 'raw_pescara_studio.jpg'),
    ('public/products/backup_raw_sofas/pescara_velvet_3_seater_env.jpg', 'raw_pescara_env.jpg'),
    ('public/products/backup_raw_sofas/radom_sheesham_3_seater_3x4.jpg', 'raw_radom_studio.jpg'),
    ('public/products/backup_raw_sofas/radom_sheesham_3_seater_env.jpg', 'raw_radom_env.jpg'),
]

for src, dst in files_to_copy:
    if os.path.exists(src):
        shutil.copyfile(src, os.path.join('public/inspect_phase12', dst))
        print(f"Copied {src} -> {dst}")
    else:
        print(f"NOT FOUND: {src}")

