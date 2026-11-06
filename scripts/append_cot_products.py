import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = """    inStock: true,
    leadTime: 'Ships in 2 - 4 Days with White-Glove Heavy Setup in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  }
];"""

cot_products = """,
  {
    id: 'odessy-striker-metal-single-cot',
    name: 'Odessy Striker Minimalist Steel Single Cot',
    tagline: 'Nilkamal Sleep Inspired High-Tensile Tubular Steel Single Bed with Squeak-Free Architecture',
    category: 'furniture',
    subcategory: 'Steel Cot',
    price: 7490,
    originalPrice: 10900,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 78,
    badge: 'Bestseller Single',
    isBestSeller: true,
    image: '/products/odessy_striker_single_cot_3x4.jpg',
    gallery: [
      '/products/odessy_striker_single_cot_3x4.jpg',
      '/products/odessy_striker_single_cot_env.jpg'
    ],
    description: 'Inspired by Nilkamal Sleep’s iconic Striker metal series: an ultra-durable single steel cot engineered with high-tensile tubular carbon steel and an advanced weight-sharing frame. Finished in a weather-resilient matte black powder coating, it offers unshakeable stability, anti-corrosive rust protection, and squeak-free sleep performance. Features a clean geometric vertical slat headboard, integrated low-profile foot rail, reinforced cross slats, and generous 28 cm under-bed floor clearance for effortless bedroom cleaning and under-bed luggage storage in modern Chennai homes.',
    features: [
      'Engineered from high-tensile tubular carbon steel with 1.2 mm wall thickness',
      'Advanced weight-sharing geometry minimizing frame sway and eliminating nocturnal creaks',
      'Corrosion-resistant thermoset matte black powder coating suited for coastal Chennai humidity',
      'Minimalist geometric vertical slatted headboard with smoothly rounded safety corner crowns',
      'Reinforced multi-rib metal cross-slats with central load-bearing support leg',
      'Generous 28 cm under-bed clearance allowing easy robotic vacuuming and storage bin placement'
    ],
    specs: {
      'Pepperfry Reference': 'Striker Metal Single Bed in Black Finish by Nilkamal Sleep',
      'Pepperfry Product ID': '2035882',
      'Reference URL': 'https://www.pepperfry.com/product/striker-metal-single-bed-in-black-finish-by-nilkamal-sleep-2035882.html',
      'Primary Material': 'High-Tensile Cold-Rolled Carbon Tubular Steel',
      'Steel Grade & Thickness': '1.2 mm Wall Thickness Heavy Gauge ERW Steel',
      'Bed Size': 'Single Size (Fits 75 x 36 in / 78 x 36 in Standard Single Mattress)',
      'Headboard Design': 'Geometric Vertical Slat Grill with Rounded Safety Crown',
      'Footboard Design': 'Low-Profile Integrated End Guard with Protective Polymer Glides',
      'Slat / Support Structure': 'Interlocking Multi-Ribbed Metal Cross Slats with Center Reinforcement Leg',
      'Mattress Compatibility': 'Fits Standard 36-Inch Single Mattress (Coir, High-Resilience Foam, or Spring)',
      'Storage Availability': 'Open Elevated Under-Bed Clearance (28 cm / 11 in)',
      'Weight Capacity': '150 kg (330 lbs)',
      'Weight': '22.5 kg',
      'Assembly': 'Free Professional Knockdown Assembly & Leveling in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '199.0 x 98.0 x 91.0 cm (78.3 x 38.6 x 35.8 in)' },
      { label: 'Sleeping Surface (L x W)', value: '190.0 x 91.0 cm (75.0 x 36.0 in)' },
      { label: 'Under-Bed Ground Clearance', value: '28.0 cm (11.0 in)' },
      { label: 'Headboard Height', value: '91.0 cm (35.8 in)' },
      { label: 'Net Weight', value: '22.5 kg' }
    ],
    materials: ['Cold-Rolled Carbon Tubular Steel', 'Multi-Stage Epoxy Polyester Powder Coating', 'Heavy-Duty Polymer Floor Bushings'],
    variants: [
      { name: 'Matte Obsidian Black', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Pearl Glacier White', colorHex: '#F4F4F5', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'odessy-akaba-metal-double-cot',
    name: 'Odessy Akaba Curved Arch Metal Double Cot',
    tagline: 'FurnitureKraft Inspired Heavy-Gauge Double Steel Cot with Arch Spoke Grill',
    category: 'furniture',
    subcategory: 'Steel Cot',
    price: 11990,
    originalPrice: 16500,
    currency: '₹',
    rating: 4.87,
    reviewsCount: 52,
    badge: 'Compact Double',
    image: '/products/odessy_akaba_double_cot_3x4.jpg',
    gallery: [
      '/products/odessy_akaba_double_cot_3x4.jpg',
      '/products/odessy_akaba_double_cot_env.jpg'
    ],
    description: 'Inspired by FurnitureKraft’s acclaimed Metallika Akaba series: a heavy-gauge double metal cot forged from commercial-grade ERW mild steel tubing in an elegant Gunmetal Titanium Grey powder-coated finish. Features distinctive curved arch crown styling on both headboard and footboard with classic vertical spoke grills, dual longitudinal center support spines, and twin center floor struts. Perfectly dimensioned for compact urban bedrooms, guest suites, or studio apartments accommodating two adults comfortably with zero floor squeaks.',
    features: [
      'Commercial-grade Electric Resistance Welded (ERW) mild steel tubing construction',
      'Timeless curved arch headboard and matching footboard with vertical safety spoke grills',
      'Dual center support spine with twin heavy-duty ground-contact support legs',
      'Pre-treated anti-corrosive phosphate dipping with thermo-hardened epoxy finish',
      'Generous 30 cm ground clearance providing ample space for sliding storage baskets',
      'Precision welded knockdown joints with sound-absorbing polymer isolators'
    ],
    specs: {
      'Pepperfry Reference': 'Metallika Akaba Double Size Bed in Grey Colour by FurnitureKraft',
      'Pepperfry Product ID': '1779927',
      'Reference URL': 'https://www.pepperfry.com/product/metallika-akaba-double-size-bed-in-grey-colour-by-furniturekraft-1779927.html',
      'Primary Material': 'Commercial Grade Electric Resistance Welded (ERW) Mild Steel',
      'Steel Grade & Thickness': '1.2 mm Heavy Pipe Gauge with Anti-Corrosive Primer',
      'Bed Size': 'Double Bed (Fits 75 x 48 in / 78 x 48 in Double Mattress)',
      'Headboard Design': 'Curved Arch Headboard with Classic Vertical Spoke Grill',
      'Footboard Design': 'Matching Low Curved Footboard with Filleted Corners',
      'Slat / Support Structure': 'Welded Steel Cross-Members with Longitudinal Spine & Dual Center Support Legs',
      'Mattress Compatibility': 'Fits Standard 48-Inch Double Mattress (Coir, Foam, or Pocket Spring)',
      'Storage Availability': 'Open Under-Bed Storage Clearance (30 cm / 11.8 in)',
      'Weight Capacity': '220 kg (485 lbs)',
      'Weight': '31.0 kg',
      'Assembly': 'Free Professional Knockdown Assembly in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '203.2 x 127.0 x 96.5 cm (80.0 x 50.0 x 38.0 in)' },
      { label: 'Mattress Area (L x W)', value: '198.0 x 122.0 cm (78.0 x 48.0 in)' },
      { label: 'Under-Bed Ground Clearance', value: '30.0 cm (11.8 in)' },
      { label: 'Headboard Height', value: '96.5 cm (38.0 in)' },
      { label: 'Net Weight', value: '31.0 kg' }
    ],
    materials: ['Electric Resistance Welded (ERW) Mild Steel', 'Thermo-Hardened Epoxy Powder Coating', 'Noise-Dampening Metal Bushings'],
    variants: [
      { name: 'Gunmetal Titanium Grey', colorHex: '#4B5563', finishType: 'metal' },
      { name: 'Matte Onyx Black', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 1 - 2 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'odessy-kabul-metal-queen-bed',
    name: 'Odessy Kabul Contemporary Metal Queen Bed',
    tagline: 'FurnitureKraft Inspired Architectural Geometric Queen Size Steel Bed in Pure White',
    category: 'furniture',
    subcategory: 'Steel Cot',
    price: 14490,
    originalPrice: 21000,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 65,
    badge: 'Queen Classic',
    isBestSeller: true,
    image: '/products/odessy_kabul_queen_bed_3x4.jpg',
    gallery: [
      '/products/odessy_kabul_queen_bed_3x4.jpg',
      '/products/odessy_kabul_queen_bed_env.jpg'
    ],
    description: 'Inspired by FurnitureKraft’s top-rated Kabul collection: a stunning queen-size metal bed frame finished in high-luster Arctic White epoxy powder coating. Designed with a contemporary geometric ladder-grid headboard featuring smooth radius corners, matching low-profile footboard, and an extra-rigid platform foundation. Engineered with heavy-gauge phosphatized ERW steel tubes and reinforced with twin central structural spine beams and 4 central support posts, it comfortably accommodates queen mattresses directly without needing cumbersome plywood sheets.',
    features: [
      'Heavy-gauge phosphatized ERW steel construction engineered for high load distribution',
      'Contemporary geometric ladder-grid headboard with smooth filleted crown corners',
      'Matching low-profile foot rail preserving seamless sightlines across the bedroom',
      'Dual central spine rails with 4 heavy-duty load-bearing center support pillars',
      'Multi-stage electrostatic high-gloss white powder coating resisting chips and rust',
      'Engineered direct mattress platform foundation eliminating the need for plywood'
    ],
    specs: {
      'Pepperfry Reference': 'Kabul Metal Queen Size Bed in White Colour by FurnitureKraft',
      'Pepperfry Product ID': '542377',
      'Reference URL': 'https://www.pepperfry.com/product/kabul-metal-queen-size-bed-in-white-colour-by-furniturekraft-542377.html',
      'Primary Material': 'Prime Heavy ERW Mild Steel Tubing',
      'Steel Grade & Thickness': 'Phosphatized Heavy Gauge Steel (1.2 mm - 1.4 mm)',
      'Bed Size': 'Queen Size (Fits 78 x 60 in Standard Queen Mattress)',
      'Headboard Design': 'Contemporary Ladder-Grid Architectural Lattice with Rounded Crown',
      'Footboard Design': 'Streamlined Matching Low-Profile Geometric Footboard',
      'Slat / Support Structure': 'Dense Tubular Steel Grid Platform with Twin Longitudinal Center Spines & 4 Center Support Posts',
      'Mattress Compatibility': 'Standard Queen Size Mattress (78 x 60 in, Direct Foundation, No Plywood Required)',
      'Storage Availability': 'Under-Bed Clean Sweep Space (28 cm / 11 in)',
      'Weight Capacity': '280 kg (617 lbs)',
      'Weight': '38.5 kg',
      'Assembly': 'Free Professional Knockdown Assembly in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '208.3 x 160.0 x 94.0 cm (82.0 x 63.0 x 37.0 in)' },
      { label: 'Sleeping Surface (L x W)', value: '198.0 x 152.4 cm (78.0 x 60.0 in)' },
      { label: 'Under-Bed Ground Clearance', value: '28.0 cm (11.0 in)' },
      { label: 'Headboard Height', value: '94.0 cm (37.0 in)' },
      { label: 'Net Weight', value: '38.5 kg' }
    ],
    materials: ['Phosphatized ERW Cold-Rolled Mild Steel', 'Pure White High-Gloss Epoxy Finish', 'Reinforced Heavy Hardware'],
    variants: [
      { name: 'Pure Arctic White', colorHex: '#F8FAFC', finishType: 'metal' },
      { name: 'Midnight Black Semi-Gloss', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 1 - 2 Days in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  },
  {
    id: 'odessy-striker-metal-king-bed',
    name: 'Odessy Striker Grand Architectural Steel King Bed',
    tagline: 'Nilkamal Sleep Inspired High-Strength King Size Steel Cot with Twin Spine Matrix',
    category: 'furniture',
    subcategory: 'Steel Cot',
    price: 16990,
    originalPrice: 24500,
    currency: '₹',
    rating: 4.95,
    reviewsCount: 84,
    badge: 'Master King Suite',
    isBestSeller: true,
    image: '/products/odessy_striker_king_bed_3x4.jpg',
    gallery: [
      '/products/odessy_striker_king_bed_3x4.jpg',
      '/products/odessy_striker_king_bed_env.jpg'
    ],
    description: 'Inspired by Nilkamal Sleep’s flagship Striker King collection: a grand king-size metal bedstead engineered from premium cold-rolled tubular carbon steel. Built with an expansive full-width horizontal architectural slat headboard, integrated low-profile foot rail, and a structural slat matrix featuring twin central spine rails and six heavy load-bearing ground struts. Tested to support up to 350 kg with flawless weight dispersion, providing unyielding silent support for premium king-size mattresses without squeaking or frame distortion.',
    features: [
      'Heavy-gauge 1.4 mm carbon steel tubing engineered for massive 350 kg load capacity',
      'Expansive full-width horizontal architectural headboard with seamless welded joints',
      'Structural steel slat matrix with dual longitudinal spine rails and 6 ground support legs',
      'Zero-creak acoustic isolation joints with industrial polymer shock-absorber pads',
      'Anti-corrosion thermoset matte black powder coating safeguarding against humidity',
      'Substantial 30 cm floor clearance facilitating under-bed trolley storage'
    ],
    specs: {
      'Pepperfry Reference': 'Striker Metal King Size Bed in Black Finish by Nilkamal Sleep',
      'Pepperfry Product ID': '1959723',
      'Reference URL': 'https://www.pepperfry.com/product/striker-metal-king-size-bed-in-black-finish-by-nilkamal-sleep-1959723.html',
      'Primary Material': '100% Anti-Rust Heavy Carbon Tubular Steel Frame',
      'Steel Grade & Thickness': '1.4 mm Heavy Gauge Steel Tube with Multi-Stage Powder Coat',
      'Bed Size': 'King Size (Fits 78 x 72 in Standard King Mattress)',
      'Headboard Design': 'Full-Width Horizontal Architectural Slat Headboard with Welded Clean Joints',
      'Footboard Design': 'Integrated Low-Profile Foot Rail with Floor-Protecting Glides',
      'Slat / Support Structure': 'Heavy Structural Slat Matrix with Twin Central Spine Rails and 6 Heavy Load-Bearing Ground Struts (No Plywood Needed)',
      'Mattress Compatibility': 'Standard King Size Mattress (78 x 72 in, Memory Foam, Latex, Coir, or Pocket Spring)',
      'Storage Availability': 'Generous Open Floor Clearance (30 cm / 11.8 in) for Slide-Under Storage',
      'Weight Capacity': '350 kg (770 lbs)',
      'Weight': '43.5 kg',
      'Assembly': 'Free Professional Knockdown Assembly in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '206.0 x 189.5 x 91.0 cm (81.1 x 74.6 x 35.8 in)' },
      { label: 'Sleeping Surface (L x W)', value: '198.0 x 182.8 cm (78.0 x 72.0 in)' },
      { label: 'Under-Bed Ground Clearance', value: '30.0 cm (11.8 in)' },
      { label: 'Headboard Height', value: '91.0 cm (35.8 in)' },
      { label: 'Net Weight', value: '43.5 kg' }
    ],
    materials: ['High-Tensile Carbon Steel Tubing', 'Corrosion-Resistant Matte Powder Coating', 'Noise-Isolating Bushings'],
    variants: [
      { name: 'Matte Obsidian Black', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Architectural Pure White', colorHex: '#F4F4F5', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 1 - 2 Days with Express Setup in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'odessy-gemini-canopy-poster-bed',
    name: 'Odessy Gemini Luxury Four-Poster Metal Canopy Bed',
    tagline: 'Homdec Inspired Heavy Wrought Iron Queen Size Canopy Bed with Cross-Braced Architecture',
    category: 'furniture',
    subcategory: 'Steel Cot',
    price: 23990,
    originalPrice: 34000,
    currency: '₹',
    rating: 4.97,
    reviewsCount: 43,
    badge: 'Flagship Four-Poster',
    isBestSeller: true,
    image: '/products/odessy_gemini_poster_bed_3x4.jpg',
    gallery: [
      '/products/odessy_gemini_poster_bed_3x4.jpg',
      '/products/odessy_gemini_poster_bed_env.jpg'
    ],
    description: 'Inspired by Homdec’s luxury Gemini collection: a magnificent 6.25-foot high four-poster metal canopy bed forged from extra-heavy structural wrought iron and cold-rolled carbon steel tubing in an artisanal Matte Obsidian Black finish. Boasts striking architectural geometric cross-braced headboard and footboard lattice frameworks with dual upper tie-rails and reinforced corner uprights. Includes a heavy steel cross-slat foundation platform supported by five central load-bearing stems capable of supporting up to 380 kg.',
    features: [
      'Imposing 6.25-foot (191 cm) four-poster canopy framework in heavy wrought iron and steel',
      'Geometric industrial cross-bracing on headboard and footboard with double upper tie-bars',
      'Extra-heavy 1.5 mm structural steel walls providing rock-solid foundation without sway',
      'Five internal central load-bearing support stems delivering 380 kg weight capacity',
      'Multi-process anti-rust thermal epoxy powder coating with satin-smooth matte texture',
      'Canopy framework compatible with sheer drapery, fairy lights, or minimal architectural display'
    ],
    specs: {
      'Pepperfry Reference': 'Gemini Metal Poster Bed in Black Colour by Homdec',
      'Pepperfry Product ID': '2184229',
      'Reference URL': 'https://www.pepperfry.com/product/gemini-metal-poster-bed-in-black-colour-by-homdec-2184229.html',
      'Primary Material': 'Extra-Heavy Structural Wrought Iron & Cold-Rolled Carbon Tubular Steel (6.25 ft Canopy Framework)',
      'Steel Grade & Thickness': '1.5 mm Heavy Structural Steel with Thermal Anti-Rust Epoxy Coating',
      'Bed Size': 'Queen Size Four-Poster Canopy Bed (Fits 78 x 60 in Mattress)',
      'Headboard Design': 'Industrial Geometric Cross-Brace Headboard with Dual Upper Tie-Bars',
      'Footboard Design': 'Matching Architectural Cross-Brace End Rail',
      'Slat / Support Structure': 'High-Tensile Heavy Steel Cross-Slat Platform with 5 Reinforced Internal Center Support Stems (No Plywood Needed)',
      'Mattress Compatibility': 'Standard Queen Size Mattress (78 x 60 in)',
      'Storage Availability': 'Open Elevated Platform with 32 cm (12.6 in) Under-Frame Clearance',
      'Weight Capacity': '380 kg (838 lbs)',
      'Weight': '68.0 kg',
      'Assembly': 'Free White-Glove Installation & Room Setup in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '208.0 x 160.0 x 191.0 cm (81.9 x 63.0 x 75.2 in)' },
      { label: 'Sleeping Surface (L x W)', value: '198.0 x 152.4 cm (78.0 x 60.0 in)' },
      { label: 'Canopy Height', value: '191.0 cm (75.2 in / 6.25 ft)' },
      { label: 'Under-Bed Ground Clearance', value: '32.0 cm (12.6 in)' },
      { label: 'Net Weight', value: '68.0 kg' }
    ],
    materials: ['Heavy Wrought Iron & Carbon Steel Framework', 'Anti-Corrosion Matte Epoxy Coating', 'Heavy Steel Structural Hardware'],
    variants: [
      { name: 'Matte Obsidian Black', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Antique Burnished Bronze', colorHex: '#451A03', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 3 Days with White-Glove Heavy Setup in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  }
];"""

if target in content:
    replacement = target[:-2] + cot_products
    new_content = content.replace(target, replacement, 1)
    with open('src/data/products.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS: 5 Steel Cot products appended to src/data/products.ts!")
else:
    print("ERROR: Target anchor not found in src/data/products.ts")

