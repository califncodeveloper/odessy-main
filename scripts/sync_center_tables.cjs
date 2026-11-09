const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const tables = [
  {
    id: 'odessy-abbey-solid-wood-coffee-table',
    opt1: 'center-table-odessy-abbey-solid-wood.webp',
    opt2: 'center-table-odessy-abbey-solid-wood2.webp',
    env: 'center-table-odessy-abbey-solid-wood-env.webp',
    legacy3x4: 'odessy_abbey_solid_wood_coffee_table_3x4.jpg',
    legacyEnv: 'odessy_abbey_solid_wood_coffee_table_env.jpg'
  },
  {
    id: 'odessy-zyra-marble-top-coffee-table',
    opt1: 'center-table-odessy-zyra-marble.webp',
    opt2: 'center-table-odessy-zyra-marble2.webp',
    env: 'center-table-odessy-zyra-marble-env.webp',
    legacy3x4: 'odessy_zyra_marble_coffee_table_3x4.jpg',
    legacyEnv: 'odessy_zyra_marble_coffee_table_env.jpg'
  },
  {
    id: 'odessy-valencia-glass-top-coffee-table',
    opt1: 'center-table-odessy-valencia-glass-sheesham.webp',
    opt2: 'center-table-odessy-valencia-glass-sheesham2.webp',
    env: 'center-table-odessy-valencia-glass-sheesham-env.webp',
    legacy3x4: 'odessy_valencia_glass_coffee_table_3x4.jpg',
    legacyEnv: 'odessy_valencia_glass_coffee_table_env.jpg'
  },
  {
    id: 'odessy-galliano-metal-frame-coffee-table',
    opt1: 'center-table-odessy-galliano-metal-gold.webp',
    opt2: 'center-table-odessy-galliano-metal-gold2.webp',
    env: 'center-table-odessy-galliano-metal-gold-env.webp',
    legacy3x4: 'odessy_galliano_metal_coffee_table_3x4.jpg',
    legacyEnv: 'odessy_galliano_metal_coffee_table_env.jpg'
  },
  {
    id: 'odessy-elvas-round-nesting-coffee-table',
    opt1: 'center-table-odessy-elvas-round-nesting.webp',
    opt2: 'center-table-odessy-elvas-round-nesting2.webp',
    env: 'center-table-odessy-elvas-round-nesting-env.webp',
    legacy3x4: 'odessy_elvas_nesting_coffee_table_3x4.jpg',
    legacyEnv: 'odessy_elvas_nesting_coffee_table_env.jpg'
  }
];

async function run() {
  const publicDir = path.resolve('public/products');
  const distDir = path.resolve('dist/products');

  for (const item of tables) {
    const opt1Public = path.join(publicDir, item.opt1);
    const opt2Public = path.join(publicDir, item.opt2);

    if (!fs.existsSync(opt1Public) || !fs.existsSync(opt2Public)) {
      console.error(`Missing files for ${item.id}`);
      continue;
    }

    const meta1 = await sharp(opt1Public).metadata();
    const meta2 = await sharp(opt2Public).metadata();
    console.log(`${item.id}:`);
    console.log(`  Opt 1 (${item.opt1}): ${meta1.width}x${meta1.height}, format: ${meta1.format}`);
    console.log(`  Opt 2 (${item.opt2}): ${meta2.width}x${meta2.height}, format: ${meta2.format}`);

    // Create -env.webp as copy of opt1 in public and dist
    const envPublic = path.join(publicDir, item.env);
    fs.copyFileSync(opt1Public, envPublic);
    if (fs.existsSync(distDir)) {
      fs.copyFileSync(opt1Public, path.join(distDir, item.env));
      fs.copyFileSync(opt1Public, path.join(distDir, item.opt1));
      fs.copyFileSync(opt2Public, path.join(distDir, item.opt2));
    }

    // Generate legacy JPGs (quality 92)
    // legacy3x4 from Opt 2 (Hero)
    await sharp(opt2Public).jpeg({ quality: 92 }).toFile(path.join(publicDir, item.legacy3x4));
    if (fs.existsSync(distDir)) {
      await sharp(opt2Public).jpeg({ quality: 92 }).toFile(path.join(distDir, item.legacy3x4));
    }

    // legacyEnv from Opt 1 (Gallery)
    await sharp(opt1Public).jpeg({ quality: 92 }).toFile(path.join(publicDir, item.legacyEnv));
    if (fs.existsSync(distDir)) {
      await sharp(opt1Public).jpeg({ quality: 92 }).toFile(path.join(distDir, item.legacyEnv));
    }

    console.log(`  Synced all artifacts for ${item.id}`);
  }
}

run().catch(console.error);

