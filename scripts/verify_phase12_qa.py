import os
import hashlib
from PIL import Image

products = [
    {
        'id': 'zephyr-sheesham-hydraulic-bed',
        'name': 'Odessy Zephyr Solid Sheesham Hydraulic Storage Bed',
        'studio': 'zephyr_sheesham_hydraulic_bed_3x4.jpg',
        'env': 'zephyr_sheesham_hydraulic_bed_env.jpg'
    },
    {
        'id': 'verta-modern-4-door-wardrobe',
        'name': 'Odessy Verta 4-Door Wardrobe with Dual Mirrors & Drawers',
        'studio': 'verta_modern_4_door_wardrobe_3x4.jpg',
        'env': 'verta_modern_4_door_wardrobe_env.jpg'
    },
    {
        'id': 'amanda-fabric-2-seater',
        'name': 'Odessy Amanda Modern 2-Seater Fabric Sofa',
        'studio': 'amanda_fabric_2_seater_3x4.jpg',
        'env': 'amanda_fabric_2_seater_env.jpg'
    },
    {
        'id': 'cannes-fabric-3-seater',
        'name': 'Odessy Cannes Contemporary 3-Seater Fabric Sofa',
        'studio': 'cannes_fabric_3_seater_3x4.jpg',
        'env': 'cannes_fabric_3_seater_env.jpg'
    },
    {
        'id': 'montez-velvet-lhs-sectional',
        'name': 'Odessy Montez Velvet LHS Sectional Sofa (3 + Lounger)',
        'studio': 'montez_velvet_sectional_3x4.jpg',
        'env': 'montez_velvet_sectional_env.jpg'
    },
    {
        'id': 'pescara-velvet-3-seater',
        'name': 'Odessy Pescara Luxury 3-Seater Velvet Sofa',
        'studio': 'pescara_velvet_3_seater_3x4.jpg',
        'env': 'pescara_velvet_3_seater_env.jpg'
    },
    {
        'id': 'radom-sheesham-3-seater',
        'name': 'Odessy Radom Solid Sheesham 3-Seater Sofa',
        'studio': 'radom_sheesham_3_seater_3x4.jpg',
        'env': 'radom_sheesham_3_seater_env.jpg'
    }
]

print("="*80)
print("PHASE 12 COMPREHENSIVE QA VERIFICATION AUDIT")
print("="*80)

all_hashes = {}
all_passed = True
checked_count = 0

for p in products:
    print(f"\nProduct: {p['name']} ({p['id']})")
    for img_type, fname in [('Studio', p['studio']), ('Lifestyle', p['env'])]:
        fpath = os.path.join('public/products', fname)
        if not os.path.exists(fpath):
            print(f"  ❌ [{img_type}] FILE MISSING: {fpath}")
            all_passed = False
            continue
        
        im = Image.open(fpath)
        w, h = im.size
        fmt = im.format
        ratio = round(w / h, 4)
        size_bytes = os.path.getsize(fpath)
        
        # Hash for uniqueness
        with open(fpath, 'rb') as f:
            file_hash = hashlib.sha256(f.read()).hexdigest()
            
        dim_ok = (w == 896 and h == 1200)
        fmt_ok = (fmt == 'JPEG')
        uniq_ok = (file_hash not in all_hashes)
        
        status = "✓ PASS" if (dim_ok and fmt_ok and uniq_ok) else "❌ FAIL"
        if not (dim_ok and fmt_ok and uniq_ok):
            all_passed = False
            
        print(f"  {status} [{img_type}]: {fname} | Dimensions: {w}x{h} | Ratio: {ratio} | Format: {fmt} | Size: {size_bytes}B")
        
        if file_hash in all_hashes:
            print(f"     DUPLICATE DETECTED: Matches {all_hashes[file_hash]}")
        all_hashes[file_hash] = fname
        checked_count += 1

print("\n" + "="*80)
print(f"Total Images Checked: {checked_count} / 14")
print(f"Unique Hashes Count: {len(all_hashes)} / 14")
print(f"Overall Validation Result: {'ALL CHECKS PASSED PERFECTLY (14/14)' if all_passed else 'FAILURES DETECTED'}")
print("="*80)

