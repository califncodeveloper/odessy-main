import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = """    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  }
];"""

bureau_products = """,
  {
    id: 'godrej-slimline-2-door-almirah',
    name: 'Odessy Slimline 2-Door Metal Almirah',
    tagline: 'Godrej Interio Inspired Heavy CRCA Steel 2-Door Almirah in Frost Grey Finish',
    category: 'furniture',
    subcategory: 'Steel Bureau',
    price: 29990,
    originalPrice: 42500,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 64,
    badge: 'Best Value 2-Door',
    isBestSeller: true,
    image: '/products/godrej_slimline_2_door_almirah_3x4.jpg',
    gallery: [
      '/products/godrej_slimline_2_door_almirah_3x4.jpg',
      '/products/godrej_slimline_2_door_almirah_env.jpg'
    ],
    description: 'Inspired by Godrej Interio’s iconic Slimline series: an ultra-durable two-door metal almirah engineered from premium high-tensile CRCA steel sheets. Finished in a modern powder-coated Frost Grey anti-corrosive finish, it provides complete rust protection and longevity. The cabinet features dual full-length doors with an ergonomic recessed flush handle, unpickable multi-lever cylinder key lock, full-width chrome hanging rod, configurable internal shelves, and an elevated plinth base to safeguard against floor moisture.',
    features: [
      'Engineered from prime Cold Rolled Close Annealed (CRCA) steel for superior tensile rigidity',
      'Anti-rust multi-stage pre-treatment with scratch-resistant epoxy powder coating',
      'Ergonomic recessed flush vertical handle with integrated unpickable cylinder key lock',
      'Full-length heavy-duty chrome hanging rod for formal attire, blazers, and ethnic wear',
      'Three heavy-gauge steel shelves with high weight-bearing capacity per compartment',
      'Elevated reinforced plinth base shielding contents against floor dampness and dust'
    ],
    specs: {
      'Pepperfry Reference': 'Slimline Metal 2 Door Almirah In Frost Grey Colour by Godrej Interio',
      'Pepperfry Product ID': '1809109',
      'Reference URL': 'https://www.pepperfry.com/product/slimline-metal-2-door-almirah-in-frost-grey-colour-by-godrej-interio-1809109.html',
      'Primary Material': 'High-Tensile Prime CRCA Steel (0.8 mm - 1.0 mm sheet thickness)',
      'Finish': 'Anti-Corrosion Epoxy Polyester Powder Coating in Frost Grey',
      'Door Configuration': '2 Full-Height Hinged Metal Doors',
      'Internal Shelf Configuration': '3 Full-Width Heavy Steel Shelves + Full Hanging Compartment',
      'Locker Availability': 'Internal Private Utility Compartment',
      'Locking Mechanism': 'Flush Recessed Handle with Precision Multi-Lever Cylinder Cam Lock',
      'Weight': '70 kg',
      'Assembly': 'Pre-assembled / Free White-Glove Installation in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '195.0 x 90.0 x 50.8 cm (76.8 x 35.4 x 20.0 in)' },
      { label: 'Hanging Height', value: '105 cm (41.3 in)' },
      { label: 'Shelf Depth', value: '48 cm (18.9 in)' },
      { label: 'Net Weight', value: '70 kg' }
    ],
    materials: ['Prime CRCA Cold-Rolled Steel', 'Epoxy Polyester Powder Coating', 'Chrome Plated Hardware & Lock'],
    variants: [
      { name: 'Frost Grey Finish', colorHex: '#9CA3AF', finishType: 'metal' },
      { name: 'Pacific Blue & Ivory', colorHex: '#1E3A8A', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 3 Days with Free White-Glove Setup in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'godrej-slimline-3-door-almirah',
    name: 'Odessy Slimline 3-Door High-Capacity Steel Wardrobe',
    tagline: 'Godrej Interio Inspired Spacious 3-Door Metal Bureau in Textured Ultra Marine Blue',
    category: 'furniture',
    subcategory: 'Steel Bureau',
    price: 48490,
    originalPrice: 59893,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 82,
    badge: 'Grand 3-Door',
    isBestSeller: true,
    image: '/products/godrej_slimline_3_door_almirah_3x4.jpg',
    gallery: [
      '/products/godrej_slimline_3_door_almirah_3x4.jpg',
      '/products/godrej_slimline_3_door_almirah_env.jpg'
    ],
    description: 'Inspired by Godrej Interio’s premier 3-door Slimline wardrobe: an extra-capacity metal storage bureau crafted from heavy-duty CRCA steel in a deep Textured Ultra Marine Blue finish. Engineered for extensive family wardrobes, it incorporates a full-length dressing mirror on the left wing, dual recessed slam-shut locking handles, an overhead safety locker vault with independent key lock, 5 multi-tier folded apparel compartments, and a spacious hanging wardrobe section.',
    features: [
      'High-capacity 3-door architecture crafted from high-gauge CRCA cold-rolled steel',
      'Textured Ultra Marine Blue scratch-proof powder coat with contrast Ivory plinth',
      'Integrated full-length exterior dressing mirror with frosted accent filigree',
      'Dedicated internal steel locker vault with independent secondary key lock',
      'Five deep multi-tier shelves for folded clothes, linens, and accessories',
      'Full-length heavy apparel hanging rail supporting coats, suits, and ethnic wear'
    ],
    specs: {
      'Pepperfry Reference': 'Slimline Metal 3 Door Almirah In Textured Ultra Marine Blue Colour by Godrej Interio',
      'Pepperfry Product ID': '1809399',
      'Reference URL': 'https://www.pepperfry.com/product/slimline-metal-3-door-almirah-in-textured-ultra-marine-blue-colour-by-godrej-inte-1809399.html',
      'Primary Material': 'Cold Rolled Close Annealed (CRCA) Steel Sheets (0.8 - 1.2 mm gauge)',
      'Finish': 'Textured Ultra Marine Blue Dual-Coat Powder Finish',
      'Door Configuration': '3 Full-Height Metal Doors (Left Mirrored, Center & Right Hinged)',
      'Internal Shelf Configuration': '5 Multi-Level Storage Shelves + Full-Height Hanging Zone',
      'Locker Availability': 'Built-In Safety Locker with Independent Double-Bitted Key',
      'Locking Mechanism': 'Twin Ergonomic Recessed Handles with Dual Master Locking Cylinders',
      'Weight': '127 kg',
      'Assembly': 'Expert Factory-Assembled Semi-Modular Delivery in Chennai',
      'Delivery': 'Free Insured White-Glove Delivery Across Chennai (2-4 Days)'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '195.0 x 135.0 x 50.8 cm (76.8 x 53.1 x 20.0 in)' },
      { label: 'Locker Height', value: '30 cm (11.8 in)' },
      { label: 'Hanging Section Height', value: '103 cm (40.6 in)' },
      { label: 'Net Weight', value: '127 kg' }
    ],
    materials: ['CRCA Industrial Steel', 'Silvered Float Dressing Mirror', 'Epoxy Powder Coating'],
    variants: [
      { name: 'Textured Ultra Marine Blue', colorHex: '#1E1B4B', finishType: 'metal' },
      { name: 'Royal Ivory & Wine', colorHex: '#4C0519', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days with White-Glove Assembly in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'godrej-slimline-internal-locker-wardrobe',
    name: 'Odessy Slimline 2-Door Steel Almirah with Security Locker',
    tagline: 'Godrej Interio Inspired Vibrant Coral Red Almirah with Vault Locker & Suitcase Tier',
    category: 'furniture',
    subcategory: 'Steel Bureau',
    price: 28990,
    originalPrice: 39500,
    currency: '₹',
    rating: 4.90,
    reviewsCount: 71,
    badge: 'Locker Vault',
    isBestSeller: true,
    image: '/products/godrej_slimline_internal_locker_wardrobe_3x4.jpg',
    gallery: [
      '/products/godrej_slimline_internal_locker_wardrobe_3x4.jpg',
      '/products/godrej_slimline_internal_locker_wardrobe_env.jpg'
    ],
    description: 'Inspired by Godrej Interio’s top-selling Slimline Two Door Wardrobe with Locker and Drawer: an eye-catching metal wardrobe in an expressive Coral Red and warm ivory frame. Features an integrated private safe-vault locker compartment with independent locking mechanism, dedicated hanging bar for everyday clothes, folded garments shelf, base luggage/suitcase trunk compartment, and elevated moisture-resistant steel leg plinth.',
    features: [
      'Integrated heavy-gauge internal secret locker box with dedicated security key',
      'High-tensile CRCA steel chassis with multi-phase phosphate anti-rust treatment',
      'Vibrant Carmine / Coral Red electro-statically applied polyurethane powder finish',
      'Heavy chrome apparel bar supporting up to 35 kg of hanging weight',
      'Lower high-clearance base bay tailored for heavy suitcases and storage boxes',
      'Elevated reinforced steel tube legs protecting against water seepage and floor cleaning'
    ],
    specs: {
      'Pepperfry Reference': 'Slimline Two Door Wardrobe with Locker and Drawer in Red Color by Godrej Interio',
      'Pepperfry Product ID': '1571769',
      'Reference URL': 'https://www.pepperfry.com/product/slimline-two-door-wardrobe-with-locker-and-drawer-in-red-color-by-godrej-interio-1571769.html',
      'Primary Material': 'Cold Rolled Close Annealed (CRCA) Steel (0.9 mm)',
      'Finish': 'Polyester Powder Coated Coral Red with Warm Ivory Frame',
      'Door Configuration': '2 Hinged Steel Doors with Dual Snap-Action Latches',
      'Internal Shelf Configuration': 'Hanger Tier + Folded Clothes Shelf + Base Trunk Shelf',
      'Locker Availability': 'Yes, Heavy Internal Vault Box with Separate Key Lock',
      'Locking Mechanism': 'Three-Way Master Deadbolt Lock with Wave Key',
      'Weight': '68 kg',
      'Assembly': 'White-Glove Delivery and Installation in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '196.0 x 90.0 x 51.0 cm (77.2 x 35.4 x 20.1 in)' },
      { label: 'Locker Dimensions', value: '30.0 x 42.0 x 38.0 cm (11.8 x 16.5 x 15.0 in)' },
      { label: 'Trunk Shelf Height', value: '45.0 cm (17.7 in)' },
      { label: 'Net Weight', value: '68 kg' }
    ],
    materials: ['Prime CRCA Steel', 'Zinc-Plated Internal Locker Mechanism', 'Epoxy Powder Coating'],
    variants: [
      { name: 'Vibrant Coral Red & Ivory', colorHex: '#E11D48', finishType: 'metal' },
      { name: 'Textured Purple & Grey', colorHex: '#581C87', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 3 Days with Free In-Home Placement in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'godrej-slimline-mirror-wardrobe',
    name: 'Odessy Slimline 2-Door Steel Wardrobe with Dressing Mirror',
    tagline: 'Godrej Interio Inspired Metal Almirah with Curvy Full-Length Dressing Mirror & Locker',
    category: 'furniture',
    subcategory: 'Steel Bureau',
    price: 27490,
    originalPrice: 38900,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 95,
    badge: 'Full Mirror Dressing',
    isBestSeller: true,
    image: '/products/godrej_slimline_mirror_wardrobe_3x4.jpg',
    gallery: [
      '/products/godrej_slimline_mirror_wardrobe_3x4.jpg',
      '/products/godrej_slimline_mirror_wardrobe_env.jpg'
    ],
    description: 'Inspired by Godrej Interio’s acclaimed Slimline mirror wardrobe edition: an elegant 2-door steel bureau featuring an integrated distortion-free curvy full-length dressing mirror on the front door. Finished in a rich textured berry purple and clean silver accents, it includes a private internal safe locker, 4 multi-tier organized shelving sections, and a solid moisture-barrier plinth base, combining a daily dressing station with robust metal security.',
    features: [
      'Integrated distortion-free silvered float glass dressing mirror on front door panel',
      'High-density CRCA steel frame resistant to tropical humidity, pests, and corrosion',
      'Interior lockable safety locker box with proprietary key for valuables and documents',
      'Four deep organized shelving tiers accommodating up to 40 kg per tier',
      'Concealed precision hinges and quiet rubber door bumpers for slam-free operation',
      'Dual-tone powder coat in rich textured purple with contrasting base skirt'
    ],
    specs: {
      'Pepperfry Reference': 'Slimline Metal 2 Door Wardrobe in Royal Ivory Finish with Mirror by Godrej Interio',
      'Pepperfry Product ID': '1809154',
      'Reference URL': 'https://www.pepperfry.com/product/slimline-metal-2-door-wardrobe-in-royal-ivory-finish-with-mirror-1809154.html',
      'Primary Material': 'Cold Rolled Close Annealed (CRCA) Steel (0.8 - 1.0 mm)',
      'Finish': 'Textured Purple / Royal Ivory Multi-Stage Powder Coat',
      'Door Configuration': '2 Hinged Doors with Left Full-Length Dressing Mirror',
      'Internal Shelf Configuration': '4 Heavy-Duty Metal Shelves + Private Vault Box',
      'Locker Availability': 'Yes, Lockable Upper Internal Steel Vault with Key',
      'Locking Mechanism': 'Three-Point Deadbolt Master Lock with Reversible Brass Key',
      'Weight': '70 kg',
      'Assembly': 'Free Professional Assembly in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '196.0 x 90.0 x 51.0 cm (77.0 x 35.5 x 20.0 in)' },
      { label: 'Mirror Height', value: '135 cm (53.1 in)' },
      { label: 'Shelf Spacing', value: '38 cm (15.0 in)' },
      { label: 'Net Weight', value: '70 kg' }
    ],
    materials: ['Cold Rolled CRCA Steel', 'Distortion-Free Float Mirror Glass', 'Epoxy Powder Coating'],
    variants: [
      { name: 'Textured Purple & Grey', colorHex: '#701A75', finishType: 'metal' },
      { name: 'Royal Ivory Finish', colorHex: '#FEF3C7', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 3 Days with Uncrating & Assembly in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  },
  {
    id: 'godrej-centurion-luxury-almirah',
    name: 'Odessy Centurion Premium Modern Metal Almirah',
    tagline: 'Godrej Interio Inspired Luxury 2-Door Steel Almirah in Royal Burgundy with Smart Features',
    category: 'furniture',
    subcategory: 'Steel Bureau',
    price: 64990,
    originalPrice: 84500,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 49,
    badge: 'Flagship Luxury',
    isBestSeller: true,
    image: '/products/godrej_centurion_luxury_almirah_3x4.jpg',
    gallery: [
      '/products/godrej_centurion_luxury_almirah_3x4.jpg',
      '/products/godrej_centurion_luxury_almirah_env.jpg'
    ],
    description: 'Inspired by Godrej Interio’s luxury flagship Centurion series: an opulent 2-door modern metal almirah crafted from heavy-gauge prime CRCA steel in a striking Royal Burgundy / Chocolate finish. Boasts a sleek contemporary horizontal door handle, concealed smart motion-sensor LED internal illumination that automatically lights up when doors open, a private high-security jewelry locker, full hanging wardrobe wing, and high-capacity shelving.',
    features: [
      'Heavy-gauge prime CRCA steel construction weighing over 120 kg for unshakeable stability',
      'Automated internal motion-sensor LED lighting with battery pack (no wiring needed)',
      'Exclusive Royal Burgundy / Dark Chocolate finish with scratch-resistant luster coating',
      'High-security concealed jewelry vault locker with secondary brass locking mechanism',
      'Multi-tier modular shelving with reinforced under-ribs for heavy storage',
      'Precision 3-point unpickable Mazak bolt locking system with dimple keys'
    ],
    specs: {
      'Pepperfry Reference': 'Centurion Metal 2 Door Almirah In Burgundy Colour by Godrej Interio',
      'Pepperfry Product ID': '2396343',
      'Reference URL': 'https://www.pepperfry.com/product/centurion-metal-2-door-almirah-in-burgundy-colour-by-godrej-interio-2396343.html',
      'Primary Material': 'Extra-Heavy Gauge Prime CRCA Steel (1.2 mm - 1.5 mm)',
      'Finish': 'Royal Burgundy Polyurethane Powder Finish with Anti-Scratch Luster',
      'Door Configuration': '2 Modern Flush-Fitted Metal Doors with Concealed Pivots',
      'Internal Shelf Configuration': '4 Reinforced Shelves + Upper Hanging Zone + Concealed Jewelry Vault',
      'Locker Availability': 'High-Security Dual-Key Internal Steel Locker Vault',
      'Locking Mechanism': 'Precision 3-Point Unpickable Mazak Bolt System with Dimple Keys',
      'Weight': '121.4 kg',
      'Assembly': 'Free White-Glove Installation & Room Setup in Chennai',
      'Delivery': 'Free Heavy-Lift Delivery Across Chennai (2-4 Days)'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '198.1 x 101.9 x 54.4 cm (78.0 x 40.0 x 21.5 in)' },
      { label: 'Internal Shelf Depth', value: '51.0 cm (20.1 in)' },
      { label: 'Locker Volume', value: '45 Liters' },
      { label: 'Net Weight', value: '121.4 kg' }
    ],
    materials: ['Heavy-Gauge Cold Rolled CRCA Steel', 'Solid Brass Hardware & Trim', 'Smart LED Sensor Modules'],
    variants: [
      { name: 'Royal Burgundy / Wine', colorHex: '#450A0A', finishType: 'metal' },
      { name: 'Pantone Dark Chocolate Brown', colorHex: '#271711', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days with White-Glove Heavy Setup in Chennai',
    warranty: '12 Months (1 Year) Manufacturer Warranty'
  }
];"""

if target in content:
    replacement = target.replace('];', bureau_products)
    new_content = content.replace(target, replacement, 1)
    with open('src/data/products.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS: 5 Steel Bureau products appended to src/data/products.ts!")
else:
    print("ERROR: Target anchor not found in src/data/products.ts")

