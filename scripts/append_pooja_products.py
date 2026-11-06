with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = """    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
];"""

pooja_products = """,
  {
    id: 'dzyn-traditional-teak-mandir',
    name: 'Odessy Aadhyaatmik Solid Teak Wood Pooja Mandir with Dome',
    tagline: 'DZYN Inspired Handcrafted Solid Teak Mandir with Carved Shikhara & Double Door Storage',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 42990,
    originalPrice: 66500,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 58,
    badge: 'Master Teak Sanctum',
    isBestSeller: true,
    image: '/products/dzyn_traditional_teak_mandir_3x4.jpg',
    gallery: [
      '/products/dzyn_traditional_teak_mandir_3x4.jpg',
      '/products/dzyn_traditional_teak_mandir_env.jpg'
    ],
    description: 'Inspired by DZYN Furnitures’ flagship Aadhyaatmik sanctum: a grand floor-rested pooja temple handcrafted from 100% seasoned Burma Teak Wood in a deep warm brown lustrous finish. Crowned with an architectural tiered Shikhara dome and traditional brass kalash finial, it features two carved front lattice doors with brass mesh, heavy fluted temple pillars, a pull-out brass/teak diya tray, and a high-capacity double-door cabinet below to store all spiritual accessories, pooja books, and brassware.',
    features: [
      'Handcrafted from 100% premium seasoned Burma Teak Wood (Tectona grandis)',
      'Traditional multi-tiered Shikhara dome with solid brass kalash pinnacle',
      'Twin carved front doors with floral jali fretwork and antique brass handles',
      'Spacious sanctum sanctorum with multi-level steps for deity idols and frames',
      'Integrated pull-out brass/wood diya tray plus 2-door bottom storage cabinet',
      'Termite-resistant and humidity-sealed with multi-step polyurethane lacquer'
    ],
    specs: {
      'Pepperfry Reference': 'DZYN Furnitures Wood Teak Wood Floor Rested Mandir With Door',
      'Pepperfry Product ID': '1807837',
      'Reference URL': 'https://www.pepperfry.com/product/brown-teak-wood-mandir-with-dome-by-dzyn-furnitures-1807837.html',
      'Primary Material': '100% Solid Teak Wood & Teak Ply',
      'Finish': 'Warm Natural Teak Lustrous Polyurethane Finish',
      'Mount Type': 'Floor Rested',
      'Door Configuration': '2 Carved Lattice Jali Doors with Brass Latches',
      'Storage Configuration': 'Double-Door Base Storage Cabinet + Pull-Out Diya Tray',
      'Weight': '48 kg',
      'Assembly': 'Pre-assembled / Semi-installed with White-Glove Uncrating in Chennai',
      'Delivery': 'Free Insured Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '200.7 x 91.4 x 45.7 cm (74 x 35 x 18 in)' },
      { label: 'Sanctum Height', value: '88 cm (34.6 in)' },
      { label: 'Dome Height', value: '42 cm (16.5 in)' },
      { label: 'Bottom Cabinet Height', value: '55 cm (21.6 in)' },
      { label: 'Net Weight', value: '48 kg' }
    ],
    materials: ['100% Solid Burma Teak Wood', 'Solid Brass Kalash & Hardware', 'Polyurethane Protective Coat'],
    variants: [
      { name: 'Warm Teak Brown with Gold Accents', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Royal Walnut Finish', colorHex: '#451A03', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 3 - 5 Days with White Glove Uncrating in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'decorsmart-modern-pooja-cabinet',
    name: 'Odessy Modern Laser-Cut Pooja Unit with Storage Cabinet',
    tagline: 'Decor Smart Inspired Architectural Contemporary White Mandir with CNC Backlit Jali',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 6999,
    originalPrice: 19999,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 73,
    badge: 'Modern Backlit Sanctum',
    isBestSeller: true,
    image: '/products/decorsmart_modern_pooja_cabinet_3x4.jpg',
    gallery: [
      '/products/decorsmart_modern_pooja_cabinet_3x4.jpg',
      '/products/decorsmart_modern_pooja_cabinet_env.jpg'
    ],
    description: 'Inspired by Decor Smart’s acclaimed laser-cut temple design: a modern architectural pooja unit crafted from high-density engineered wood in a crisp matte white aesthetic. Features an illuminated rear backlit panel with intricate precision CNC laser-cut spiritual jali motifs and warm ambient LED lighting. Includes an elevated idol platform, pull-out brass diya shelf, and a large double-door bottom cabinet for holy books, oils, and pooja essentials.',
    features: [
      'Engineered high-density wood chassis with water-resistant matte white laminate',
      'Precision CNC laser-cut rear jali panel with sacred floral and Om mandala motif',
      'Built-in energy-efficient warm-white LED halo backlight with power adapter',
      'Spacious bottom storage cabinet with twin soft-close panel doors',
      'Retractable slide-out bhog/aarti tray with smooth roller runners',
      'Compact floor-standing footprint tailored for modern apartments and flats'
    ],
    specs: {
      'Pepperfry Reference': 'Decor Smart Elegant Wooden Floor Pooja Mandir With Laser-Cut Design With Storage Cabinet',
      'Pepperfry Product ID': '2288776',
      'Reference URL': 'https://www.pepperfry.com/product/elegant-wooden-floor-pooja-mandir-with-laser-cut-design-with-storage-cabinet-2288776.html',
      'Primary Material': 'High-Density Engineered Wood & Acrylic Laser Panels',
      'Finish': 'Matte Pristine White with Moisture-Resistant Melamine',
      'Lighting': 'Integrated Warm 3000K LED Focus / Backlight',
      'Mount Type': 'Floor Rested',
      'Storage Configuration': 'Double-Door Base Cabinet + Slide-Out Diya Shelf',
      'Weight': '25.5 kg',
      'Assembly': 'Professional Carpenter Assembly Included in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '96.5 x 57.2 x 45.7 cm (38 x 22.5 x 18 in)' },
      { label: 'Inner Sanctum (H x W)', value: '55 x 52 cm (21.6 x 20.5 in)' },
      { label: 'Base Cabinet Height', value: '38 cm (15 in)' },
      { label: 'Net Weight', value: '25.5 kg' }
    ],
    materials: ['High-Density Engineered Wood', 'Translucent Acrylic Jali Diffuser', 'LED Light Module', 'Powder-Coated Hinges'],
    variants: [
      { name: 'Pristine Matte White', colorHex: '#F8FAFC', finishType: 'matte' },
      { name: 'Walnut & White Dual-Tone', colorHex: '#78350F', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  },
  {
    id: 'alaya-wall-mount-mandir',
    name: 'Odessy Alaya Wall-Mounted Pooja Mandir with Dome',
    tagline: 'DZYN Inspired Solid Hardwood Space-Saving Wall Mandir with Kalash & Diya Drawer',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 3999,
    originalPrice: 7000,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 84,
    badge: 'Space Saver Wall Mount',
    isBestSeller: false,
    isNewArrival: true,
    image: '/products/alaya_wall_mount_mandir_3x4.jpg',
    gallery: [
      '/products/alaya_wall_mount_mandir_3x4.jpg',
      '/products/alaya_wall_mount_mandir_env.jpg'
    ],
    description: 'Inspired by DZYN Furnitures’ Alaya series: a compact, sacred wall-mounted mandir thoughtfully handcrafted for space-conscious apartments. Crafted from solid hardwood and teak composite in a lustrous brown finish with hand-painted gold relief detailing. Crowned with an auspicious shikhara dome and brass kalash, the unit features graceful side jali balustrades, an elevated deity riser, and a smooth bottom pull-out drawer with an antique brass knob for matches, incense, and wick organizers.',
    features: [
      'Handcrafted solid hardwood and seasoned teak composite structure',
      'Traditional architectural dome with authentic brass kalash finial',
      'Heavy-duty concealed rear keyhole mounting plates for sturdy wall hanging',
      'Artistic side jali railing providing an open, airy sanctum view',
      'Built-in storage drawer with antique brass knob for daily prayer supplies',
      'Compact depth allows easy mounting in foyers, dining areas, or living room walls'
    ],
    specs: {
      'Pepperfry Reference': 'DZYN Furnitures Alaya Wall Mount Pooja Mandir Without Door (Brown Gold)',
      'Pepperfry Product ID': '2223780',
      'Reference URL': 'https://www.pepperfry.com/product/alaya-wall-mount-pooja-mandir-without-door-brown-gold-2223780.html',
      'Primary Material': 'Solid Wood & High-Density Teak Composite',
      'Finish': 'Glossy Walnut Brown with Hand-Painted Antique Gold Highlights',
      'Mount Type': 'Wall Mounted (Heavy-Duty Wall Plugs Included)',
      'Door Configuration': 'Open Sanctum Design without Doors',
      'Storage Configuration': '1 Concealed Pull-Out Drawer with Brass Pull',
      'Weight': '4 kg',
      'Assembly': 'Wall-Mount Drilling & Installation Included in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '63.5 x 38.1 x 20.3 cm (25 x 15 x 8 in)' },
      { label: 'Platform Shelf (W x D)', value: '35 x 18 cm (13.8 x 7 in)' },
      { label: 'Drawer (W x H x D)', value: '32 x 8 x 16 cm (12.6 x 3.1 x 6.3 in)' },
      { label: 'Net Weight', value: '4 kg' }
    ],
    materials: ['Solid Hardwood', 'Teak Composite Board', 'Solid Brass Kalash', 'Polyurethane Lacquer'],
    variants: [
      { name: 'Walnut Brown & Antique Gold', colorHex: '#582F0E', finishType: 'wood' },
      { name: 'Teak Gold Luster', colorHex: '#A16207', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 24 - 48 Hours with Free Wall Mounting in Chennai',
    warranty: '12 Months (1 Year) Comprehensive Warranty'
  },
  {
    id: 'sacred-home-designer-mandir',
    name: 'Odessy Sacred Home Large Floor Rested Designer Pooja Mandir',
    tagline: 'DZYN Inspired Solid Teak Sanctum with Folding Jali Doors, Elephant Pillars & 2-Drawer Storage',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 21990,
    originalPrice: 42500,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 92,
    badge: 'Sacred Heritage Edition',
    isBestSeller: true,
    image: '/products/sacred_home_designer_mandir_3x4.jpg',
    gallery: [
      '/products/sacred_home_designer_mandir_3x4.jpg',
      '/products/sacred_home_designer_mandir_env.jpg'
    ],
    description: 'Inspired by DZYN Furnitures’ iconic Sacred Home collection: a masterwork of Indian temple craftsmanship in solid Teak wood. Features a magnificent ornamental archway flanked by sculpted temple pillars with carved elephant guardian pedestals. The sanctum features two folding latticed jali doors with brass hardware, an auspicious tiered shikhara with kalash pinnacle, two heavy-duty storage drawers, and a pull-out brass/teak prasad tray for peaceful daily worship.',
    features: [
      'Crafted from 100% seasoned, kiln-dried solid Teak wood with teak ply reinforcements',
      'Stepped architectural dome crown with sculpted ornamental kalash finial',
      'Dual folding doors with authentic brass mesh and hand-carved floral borders',
      'Intricate temple pillars supported on traditional elephant motif plinths',
      'Two smooth-glide utility drawers for incense, pooja thalis, and sacred scriptures',
      'Extendable pull-out tray designed for camphor, brass lamps, and prasad offerings'
    ],
    specs: {
      'Pepperfry Reference': 'DZYN Furnitures Sacred Home Large Floor Rested Pooja Mandir with Door (Brown Gold)',
      'Pepperfry Product ID': '1831387',
      'Reference URL': 'https://www.pepperfry.com/product/brown-teak-wood-pooja-mandir-with-door-by-dzyn-furnitures-1831387.html',
      'Primary Material': 'Solid Teak Wood & High-Density Teak Ply',
      'Finish': 'Royal Brown with Hand-Burnished Royal Gold Relief Accents',
      'Mount Type': 'Floor Rested',
      'Door Configuration': '2 Folding Lattice Jali Doors with Brass Latches',
      'Storage Configuration': '2 Sliding Drawers + 1 Pull-Out Prasad/Diya Tray',
      'Weight': '29 kg',
      'Assembly': 'Semi-Installed Unit; White-Glove Uncrating Provided Across Chennai',
      'Delivery': 'Free Insured Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '127 x 91.4 x 45.7 cm (56 x 36 x 18 in)' },
      { label: 'Inner Sanctum (H x W x D)', value: '62 x 82 x 40 cm (24.4 x 32.3 x 15.7 in)' },
      { label: 'Drawer Size (each)', value: '38 x 14 x 35 cm (15 x 5.5 x 13.8 in)' },
      { label: 'Net Weight', value: '29 kg' }
    ],
    materials: ['100% Solid Teak Wood', 'Teak Marine Ply', 'Solid Brass Bells & Fittings', 'Lacquer Sealant'],
    variants: [
      { name: 'Royal Brown Gold', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Antique Honey Teak', colorHex: '#A16207', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days with White Glove Uncrating in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'bluewud-shubh-pooja-stand',
    name: 'Odessy Shubh 5-Ft Compact Apartment Pooja Stand with Racks',
    tagline: 'Bluewud Inspired Slim Vertical Space-Saving Temple with Side Display Shelves & Cabinet',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 5099,
    originalPrice: 9499,
    currency: '₹',
    rating: 4.87,
    reviewsCount: 65,
    badge: 'Urban Apartment Favorite',
    isBestSeller: false,
    isNewArrival: true,
    image: '/products/bluewud_shubh_pooja_stand_3x4.jpg',
    gallery: [
      '/products/bluewud_shubh_pooja_stand_3x4.jpg',
      '/products/bluewud_shubh_pooja_stand_env.jpg'
    ],
    description: 'Inspired by Bluewud’s top-selling Shubh apartment series: a 5-foot tall vertical floor-standing mandir engineered specifically for urban homes and apartments where floor space is premium. Crafted from heavy-grade Action TESA engineered wood in a warm Wenge and European Oak dual-tone finish. Features a central sanctum with safety railing, multiple side display shelves for idols and brass bells, a pull-out diya tray, and a spacious bottom storage cabinet to keep pooja samagri organized.',
    features: [
      'Crafted from heavy-duty pre-laminated Action TESA engineered board (anti-warp, termite-resistant)',
      'Tall 5-foot vertical profile maximizes sacred storage within a compact 19.6-inch width',
      'Multi-tier open side shelves for framed deities, small brass idols, and prayer bells',
      'Spacious bottom storage cabinet with protective door for oils, cotton, and holy books',
      'Smooth sliding pull-out diya tray keeps burning lamps and agarbatti safely extended',
      'Dual-tone European Oak and Wenge melamine finish blends seamlessly into modern interiors'
    ],
    specs: {
      'Pepperfry Reference': 'Bluewud Shubh Pooja Unit Temple with Racks',
      'Pepperfry Product ID': '2280090',
      'Reference URL': 'https://www.pepperfry.com/product/shubh-pooja-unit-temple-2280090.html',
      'Primary Material': 'High-Density Engineered Wood (Action TESA Pre-Lam)',
      'Finish': 'European Oak & Natural Wenge Dual-Tone Melamine',
      'Mount Type': 'Floor Standing',
      'Door Configuration': '1 Bottom Storage Cabinet Door',
      'Storage Configuration': 'Bottom Cabinet + 2 Open Side Racks + Pull-Out Diya Tray',
      'Weight': '21 kg',
      'Assembly': 'Professional Carpenter Assembly Included in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '153 x 50 x 30 cm (60.2 x 19.6 x 11.8 in)' },
      { label: 'Sanctum Space (H x W)', value: '58 x 32 cm (22.8 x 12.6 in)' },
      { label: 'Bottom Cabinet Height', value: '45 cm (17.7 in)' },
      { label: 'Side Shelf Height (each)', value: '25 cm (9.8 in)' },
      { label: 'Net Weight', value: '21 kg' }
    ],
    materials: ['High-Grade Action TESA Engineered Wood', 'Moisture-Resistant Melamine Foil', 'Concealed Metal Hinges'],
    variants: [
      { name: 'European Oak & Wenge', colorHex: '#422006', finishType: 'wood' },
      { name: 'Country Teak & White', colorHex: '#854D0E', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  }
];"""

replacement = """    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  }""" + pooja_products

assert target in content, "Target not found in content!"
new_content = content.replace(target, replacement, 1)

with open('src/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully appended 5 Pooja Stand products!")

