import os
from PIL import Image

products = [
    ('zephyr-sheesham-hydraulic-bed', 'zephyr_sheesham_hydraulic_bed_3x4.jpg', 'zephyr_sheesham_hydraulic_bed_env.jpg'),
    ('verta-modern-4-door-wardrobe', 'verta_modern_4_door_wardrobe_3x4.jpg', 'verta_modern_4_door_wardrobe_env.jpg'),
    ('amanda-fabric-2-seater', 'amanda_fabric_2_seater_3x4.jpg', 'amanda_fabric_2_seater_env.jpg'),
    ('cannes-fabric-3-seater', 'cannes_fabric_3_seater_3x4.jpg', 'cannes_fabric_3_seater_env.jpg'),
    ('montez-velvet-lhs-sectional', 'montez_velvet_sectional_3x4.jpg', 'montez_velvet_sectional_env.jpg'),
    ('pescara-velvet-3-seater', 'pescara_velvet_3_seater_3x4.jpg', 'pescara_velvet_3_seater_env.jpg'),
    ('radom-sheesham-3-seater', 'radom_sheesham_3_seater_3x4.jpg', 'radom_sheesham_3_seater_env.jpg')
]

for pid, studio, env in products:
    p_studio = os.path.join('public/products', studio)
    p_env = os.path.join('public/products', env)
    
    s_size = Image.open(p_studio).size if os.path.exists(p_studio) else 'MISSING'
    e_size = Image.open(p_env).size if os.path.exists(p_env) else 'MISSING'
    
    print(f"{pid}:")
    print(f"  Studio: {studio} -> {s_size}")
    print(f"  Env:    {env} -> {e_size}")

