import fs from 'fs';
import path from 'path';

const content = fs.readFileSync('src/data/products.ts', 'utf-8');

const updates = {
  'kentan-sheesham-4-seater': {
    image: '/products/kentan_sheesham_4_seater_3x4.jpeg',
    gallery: ['/products/kentan_sheesham_4_seater_3x4.jpeg', '/products/kentan_sheesham_4_seater_env.jpeg']
  },
  'marin-sheesham-4-seater': {
    image: '/products/marin_sheesham_4_seater_3x4.jpeg',
    gallery: ['/products/marin_sheesham_4_seater_3x4.jpeg', '/products/marin_sheesham_4_seater_env.jpeg']
  },
  'bardu-sheesham-4-seater': {
    image: '/products/bardu_sheesham_4_seater_3x4.png',
    gallery: ['/products/bardu_sheesham_4_seater_3x4.png', '/products/bardu_sheesham_4_seater_env.png']
  },
  'amalfi-sheesham-6-seater': {
    image: '/products/amalfi_sheesham_6_seater_3x4.jpeg',
    gallery: ['/products/amalfi_sheesham_6_seater_3x4.jpeg', '/products/amalfi_sheesham_6_seater_env.jpeg']
  },
  'amanda-fabric-2-seater': {
    image: '/products/amanda_fabric_2_seater_3x4.jpeg',
    gallery: ['/products/amanda_fabric_2_seater_3x4.jpeg', '/products/amanda_fabric_2_seater_env.png']
  },
  'cannes-fabric-3-seater': {
    image: '/products/cannes_fabric_3_seater_3x4.jpeg',
    gallery: ['/products/cannes_fabric_3_seater_3x4.jpeg', '/products/cannes_fabric_3_seater_env.jpeg']
  },
  'montez-velvet-lhs-sectional': {
    image: '/products/montez_velvet_sectional_3x4.jpeg',
    gallery: ['/products/montez_velvet_sectional_3x4.jpeg', '/products/montez_velvet_sectional_env.jpeg']
  },
  'pescara-velvet-3-seater': {
    image: '/products/pescara_velvet_3_seater_3x4.jpeg',
    gallery: ['/products/pescara_velvet_3_seater_3x4.jpeg', '/products/pescara_velvet_3_seater_env.jpeg']
  },
  'radom-sheesham-3-seater': {
    image: '/products/radom_sheesham_3_seater_3x4.jpeg',
    gallery: ['/products/radom_sheesham_3_seater_3x4.jpeg', '/products/radom_sheesham_3_seater_env.jpeg']
  },
  'marlow-sheesham-king-bed': {
    image: '/products/marlow_sheesham_king_bed_3x4.jpeg',
    gallery: [
      '/products/marlow_sheesham_king_bed_3x4.jpeg',
      '/products/marlow_sheesham_king_bed_env.jpeg',
      '/products/bed-marlow-sheesham-king-size.png'
    ]
  },
  'tulsa-sheesham-queen-bed': {
    image: '/products/bed-tulsa-sheesham-queen-size.png',
    gallery: ['/products/bed-tulsa-sheesham-queen-size.png', '/products/bed-tulsa-sheesham-queen-size-env.png']
  },
  'zephyr-sheesham-hydraulic-bed': {
    image: '/products/bed-zephyr-sheesham-hydraulic.png',
    gallery: ['/products/bed-zephyr-sheesham-hydraulic.png', '/products/bed-zephyr-sheesham-hydraulic-env.png']
  },
  'eternia-modern-3-door-wardrobe': {
    image: '/products/eternia_modern_3_door_wardrobe_3x4.jpeg',
    gallery: ['/products/eternia_modern_3_door_wardrobe_3x4.jpeg', '/products/eternia_modern_3_door_wardrobe_env.jpeg']
  },
  'verta-modern-4-door-wardrobe': {
    image: '/products/verta_modern_4_door_wardrobe_3x4.jpeg',
    gallery: ['/products/verta_modern_4_door_wardrobe_3x4.jpeg', '/products/verta_modern_4_door_wardrobe_env.jpeg']
  },
  'dzyn-traditional-teak-mandir': {
    image: '/products/dzyn_traditional_teak_mandir_3x4.jpg',
    gallery: ['/products/dzyn_traditional_teak_mandir_3x4.jpg', '/products/dzyn_traditional_teak_mandir_env.jpg']
  },
  'decorsmart-modern-pooja-cabinet': {
    image: '/products/decorsmart_modern_pooja_cabinet_3x4.jpeg',
    gallery: ['/products/decorsmart_modern_pooja_cabinet_3x4.jpeg', '/products/decorsmart_modern_pooja_cabinet_env.jpeg']
  },
  'alaya-wall-mount-mandir': {
    image: '/products/alaya_wall_mount_mandir_3x4.png',
    gallery: ['/products/alaya_wall_mount_mandir_3x4.png', '/products/alaya_wall_mount_mandir_env.jpeg']
  },
  'sacred-home-designer-mandir': {
    image: '/products/sacred_home_designer_mandir_3x4.jpg',
    gallery: ['/products/sacred_home_designer_mandir_3x4.jpg', '/products/sacred_home_designer_mandir_env.jpg']
  },
  'bluewud-shubh-pooja-stand': {
    image: '/products/bluewud_shubh_pooja_stand_3x4.jpg',
    gallery: ['/products/bluewud_shubh_pooja_stand_3x4.jpg', '/products/bluewud_shubh_pooja_stand_env.jpg']
  },
  'godrej-slimline-2-door-almirah': {
    image: '/products/godrej_slimline_2_door_almirah_3x4.jpeg',
    gallery: ['/products/godrej_slimline_2_door_almirah_3x4.jpeg', '/products/godrej_slimline_2_door_almirah_env.jpeg']
  },
  'godrej-slimline-3-door-almirah': {
    image: '/products/godrej_slimline_3_door_almirah_3x4.jpeg',
    gallery: ['/products/godrej_slimline_3_door_almirah_3x4.jpeg', '/products/godrej_slimline_3_door_almirah_env.jpeg']
  },
  'godrej-slimline-internal-locker-wardrobe': {
    image: '/products/godrej_slimline_internal_locker_wardrobe_3x4.jpeg',
    gallery: ['/products/godrej_slimline_internal_locker_wardrobe_3x4.jpeg', '/products/godrej_slimline_internal_locker_wardrobe_env.jpeg']
  },
  'godrej-slimline-mirror-wardrobe': {
    image: '/products/godrej_slimline_mirror_wardrobe_3x4.jpeg',
    gallery: ['/products/godrej_slimline_mirror_wardrobe_3x4.jpeg', '/products/godrej_slimline_mirror_wardrobe_env.jpeg']
  },
  'godrej-centurion-luxury-almirah': {
    image: '/products/godrej_centurion_luxury_almirah_3x4.jpeg',
    gallery: ['/products/godrej_centurion_luxury_almirah_3x4.jpeg', '/products/godrej_centurion_luxury_almirah_env.jpeg']
  },
  'odessy-striker-metal-single-cot': {
    image: '/products/odessy_striker_single_cot_3x4.jpeg',
    gallery: ['/products/odessy_striker_single_cot_3x4.jpeg', '/products/odessy_striker_single_cot_env.jpeg']
  },
  'odessy-akaba-metal-double-cot': {
    image: '/products/odessy_akaba_double_cot_3x4.jpeg',
    gallery: ['/products/odessy_akaba_double_cot_3x4.jpeg', '/products/odessy_akaba_double_cot_env.jpeg']
  },
  'odessy-kabul-metal-queen-bed': {
    image: '/products/odessy_kabul_queen_bed_3x4.jpeg',
    gallery: ['/products/odessy_kabul_queen_bed_3x4.jpeg', '/products/odessy_kabul_queen_bed_env.jpeg']
  },
  'odessy-striker-metal-king-bed': {
    image: '/products/odessy_striker_king_bed_3x4.jpeg',
    gallery: ['/products/odessy_striker_king_bed_3x4.jpeg', '/products/odessy_striker_king_bed_env.jpeg']
  },
  'odessy-gemini-canopy-poster-bed': {
    image: '/products/odessy_gemini_poster_bed_3x4.jpeg',
    gallery: ['/products/odessy_gemini_poster_bed_3x4.jpeg', '/products/odessy_gemini_poster_bed_env.jpeg']
  },
  'odessy-abbey-solid-wood-coffee-table': {
    image: '/products/odessy_abbey_solid_wood_coffee_table_3x4.jpeg',
    gallery: ['/products/odessy_abbey_solid_wood_coffee_table_3x4.jpeg', '/products/odessy_abbey_solid_wood_coffee_table_env.jpeg']
  },
  'odessy-zyra-marble-top-coffee-table': {
    image: '/products/odessy_zyra_marble_coffee_table_3x4.jpeg',
    gallery: ['/products/odessy_zyra_marble_coffee_table_3x4.jpeg', '/products/odessy_zyra_marble_coffee_table_env.jpeg']
  },
  'odessy-valencia-glass-top-coffee-table': {
    image: '/products/odessy_valencia_glass_coffee_table_3x4.jpeg',
    gallery: ['/products/odessy_valencia_glass_coffee_table_3x4.jpeg', '/products/odessy_valencia_glass_coffee_table_env.jpeg']
  },
  'odessy-galliano-metal-frame-coffee-table': {
    image: '/products/odessy_galliano_metal_coffee_table_3x4.jpeg',
    gallery: ['/products/odessy_galliano_metal_coffee_table_3x4.jpeg', '/products/odessy_galliano_metal_coffee_table_env.jpeg']
  },
  'odessy-elvas-round-nesting-coffee-table': {
    image: '/products/odessy_elvas_nesting_coffee_table_3x4.jpeg',
    gallery: ['/products/odessy_elvas_nesting_coffee_table_3x4.jpeg', '/products/odessy_elvas_nesting_coffee_table_env.jpeg']
  }
};

// Check all target files exist
let missingFiles = 0;
for (const [id, data] of Object.entries(updates)) {
  const allImgs = [data.image, ...data.gallery];
  allImgs.forEach(img => {
    const fullPath = path.join('public', img.replace(/^\//, ''));
    if (!fs.existsSync(fullPath)) {
      console.error(`Missing file for ${id}: ${fullPath}`);
      missingFiles++;
    }
  });
}

if (missingFiles > 0) {
  console.error(`Found ${missingFiles} missing files! Aborting.`);
  process.exit(1);
}

console.log(`Verified all files exist on disk for all ${Object.keys(updates).length} products!`);

// Perform replacement
let updatedContent = content;
let replacedCount = 0;

for (const [id, data] of Object.entries(updates)) {
  // Regex to match the product block by id up to description or features
  // id: 'kentan-sheesham-4-seater', ... image: '...', ... gallery: [...]
  const prodRegex = new RegExp(
    `(id:\\s*['"]${id}['"][\\s\\S]*?image:\\s*)['"][^'"]+['"]([\\s\\S]*?gallery:\\s*\\[)[\\s\\S]*?(\\])`
  );

  const galleryFormatted = data.gallery.map(g => `\n      '${g}'`).join(',') + '\n    ';

  if (!prodRegex.test(updatedContent)) {
    console.warn(`Could not find product block for ${id}`);
  } else {
    updatedContent = updatedContent.replace(prodRegex, `$1'${data.image}'$2${galleryFormatted}$3`);
    replacedCount++;
  }
}

console.log(`Replaced image and gallery for ${replacedCount} / ${Object.keys(updates).length} products.`);

fs.writeFileSync('src/data/products.ts', updatedContent, 'utf-8');
console.log('Successfully wrote updated src/data/products.ts!');

