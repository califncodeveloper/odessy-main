import re

with open('src/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

target = """    inStock: true,
    leadTime: 'Ships in 2 - 3 Days with White-Glove Heavy Setup in Chennai',
    warranty: '24 Months (2 Years) Manufacturer Warranty'
  }
];"""

table_products = """,
  {
    id: 'odessy-abbey-solid-wood-coffee-table',
    name: 'Odessy Abbey Solid Wood Rectangular Coffee Table',
    tagline: 'Woodsworth Inspired Solid Sheesham Wood Center Table with Slatted Lower Storage Shelf',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 16499,
    originalPrice: 33999,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 84,
    badge: 'Solid Timber Classic',
    isBestSeller: true,
    image: '/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg',
    gallery: [
      '/products/odessy_abbey_solid_wood_coffee_table_3x4.jpg',
      '/products/odessy_abbey_solid_wood_coffee_table_env.jpg'
    ],
    description: 'Inspired by Woodsworth’s iconic Abbey solid wood collection: a monumental rectangular center table handcrafted from 100% seasoned, kiln-dried Indian Sheesham wood (Dalbergia sissoo) in an exquisite Rustic Teak finish. Designed with clean architectural lines, heavy block corner legs, and a rich visible wood-grain plank tabletop. Features a generous full-length open slatted lower shelf for coffee table art books, magazines, and remotes, treated with climate-resilient multi-coat sealant engineered to withstand Chennai humidity without warping or surface rings.',
    features: [
      'Handcrafted from 100% kiln-dried solid Indian Sheesham hardwood with dense grain resilience',
      'Spacious 42-inch rectangular tabletop ideal for family living rooms and conversational seating suites',
      'Full-length lower slatted shelf providing expansive clutter-free storage for books and media devices',
      'Sturdy heavy-block corner leg architecture with internal wooden dowel and mortise joinery',
      'Multi-stage thermo-cured teak sealant resistant to water stains, daily heat, and coastal humidity',
      'Smoothly hand-sanded beveled perimeter edges ensuring child and family living room safety'
    ],
    specs: {
      'Pepperfry Reference': 'Abbey Large Solid Wood Coffee Table in Rustic Teak Finish by Woodsworth',
      'Pepperfry Product ID': '1744836',
      'Reference URL': 'https://www.pepperfry.com/product/abbey-large-solid-wood-coffee-table-in-rustic-teak-finish-by-woodsworth-1744836.html',
      'Tabletop Shape': 'Rectangular',
      'Primary Material': 'Solid Sheesham Wood (Indian Rosewood)',
      'Tabletop Material': 'Solid Sheesham Plank Top with Natural Teak Grain',
      'Frame & Leg Material': 'Kiln-Dried Solid Sheesham Heavy Block Legs',
      'Finish': 'Rustic Teak Multi-Layer Protective Lacquer',
      'Storage Configuration': 'Full-Length Open Slatted Magazine & Art Book Shelf',
      'Weight Capacity': '95 kg (210 lbs)',
      'Net Weight': '35.0 kg',
      'Assembly': 'Free Professional White-Glove Assembly & Leveling in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '106.68 x 55.88 x 45.72 cm (42.0 x 22.0 x 18.0 in)' },
      { label: 'Tabletop Thickness', value: '2.54 cm (1.0 in)' },
      { label: 'Lower Shelf Clearance', value: '22.0 cm (8.7 in)' },
      { label: 'Ground Clearance', value: '10.0 cm (3.9 in)' },
      { label: 'Net Weight', value: '35.0 kg' }
    ],
    materials: ['100% Solid Kiln-Dried Sheesham Wood', 'Moisture-Resistant Multi-Stage Teak Lacquer', 'Heavy Solid Wood Hardware'],
    variants: [
      { name: 'Rustic Teak Finish', colorHex: '#8B4513', finishType: 'wood' },
      { name: 'Warm Chestnut Finish', colorHex: '#5C2C16', finishType: 'wood' },
      { name: 'Honey Oak Finish', colorHex: '#D27D2D', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'odessy-zyra-marble-top-coffee-table',
    name: 'Odessy Zyra Italian Marble Top Coffee Table',
    tagline: 'Royaloak Inspired Luxury Composite Marble Center Table with Dual Drawers & Champagne Gold Trim',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 29000,
    originalPrice: 56000,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 62,
    badge: 'Luxury Marble',
    isBestSeller: true,
    image: '/products/odessy_zyra_marble_coffee_table_3x4.jpg',
    gallery: [
      '/products/odessy_zyra_marble_coffee_table_3x4.jpg',
      '/products/odessy_zyra_marble_coffee_table_env.jpg'
    ],
    description: 'Inspired by Royaloak’s flagship Zyra luxury collection: an opulent designer center table boasting an authentic polished Italian composite marble slab top paired with high-gloss warm walnut and cream lacquered base. Enhanced with inlaid champagne gold electroplated metal accents, this sculptural centerpiece features softly filleted rounded corners for family safety and two spacious seamlessly integrated concealed storage drawers on telescopic ball-bearing sliders for pristine, clutter-free living room entertaining.',
    features: [
      'High-gloss polished Italian artificial composite marble slab with subtle natural mineral veining',
      'Smoothly filleted rounded safety corners offering child-friendly luxury ergonomics',
      'Two concealed soft-closing storage drawers mounted on heavy-duty ball-bearing telescopic runners',
      'Warm high-gloss piano lacquered walnut wood veneer base with champagne gold inlay trim',
      'Impervious non-porous marble surface resistant to hot beverage spills, wine stains, and heat',
      'Robust pedestal plinth foundation with anti-scratch protective floor dampening pads'
    ],
    specs: {
      'Pepperfry Reference': 'Zyra Marble Top Coffee Table in Cream and Brown Finish by Royaloak',
      'Pepperfry Product ID': '2159069',
      'Reference URL': 'https://www.pepperfry.com/product/zyra-marble-top-coffee-table-in-cream-and-brown-finish-2159069.html',
      'Tabletop Shape': 'Rectangular with Filleted Rounded Safety Corners',
      'Primary Material': 'Composite Italian Artificial Marble & High-Gloss Lacquered Wood',
      'Tabletop Material': 'Chamfered Polished Composite Marble Slab (20 mm Thickness)',
      'Frame & Base Material': 'High-Gloss Piano Lacquered Walnut & Cream Wood Base with Gold Pedestal Trim',
      'Storage Configuration': '2 Concealed Full-Extension Slide-Out Storage Drawers',
      'Drawer Mechanism': 'Soft-Closing Telescopic Ball-Bearing Steel Runners',
      'Weight Capacity': '120 kg (265 lbs)',
      'Net Weight': '42.0 kg',
      'Assembly': 'Free Professional White-Glove Installation in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (2-4 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '119.0 x 58.0 x 48.0 cm (46.9 x 22.8 x 18.9 in)' },
      { label: 'Marble Slab Thickness', value: '2.0 cm (0.8 in)' },
      { label: 'Drawer Interior (L x W x H)', value: '45.0 x 36.0 x 14.0 cm (17.7 x 14.2 x 5.5 in)' },
      { label: 'Plinth Height', value: '8.0 cm (3.1 in)' },
      { label: 'Net Weight', value: '42.0 kg' }
    ],
    materials: ['Polished Italian Artificial Composite Marble', 'High-Gloss Walnut & Cream Wood Veneer', 'Champagne Gold Plated Stainless Steel Accent Trim'],
    variants: [
      { name: 'Cream Marble & Walnut Brown', colorHex: '#4A3728', finishType: 'matte' },
      { name: 'Calacatta White & Champagne Gold', colorHex: '#F5F5F0', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days with White-Glove Heavy Setup in Chennai',
    warranty: '12 Months (1 Year) Comprehensive Warranty'
  },
  {
    id: 'odessy-valencia-glass-top-coffee-table',
    name: 'Odessy Valencia Beveled Glass Sheesham Coffee Table',
    tagline: 'Woodsworth Inspired Inset Toughened Glass Top Center Table with 2 Drawers & Lower Slat Tier',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 22499,
    originalPrice: 30999,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 71,
    badge: 'Toughened Glass',
    isNewArrival: true,
    image: '/products/odessy_valencia_glass_coffee_table_3x4.jpg',
    gallery: [
      '/products/odessy_valencia_glass_coffee_table_3x4.jpg',
      '/products/odessy_valencia_glass_coffee_table_env.jpg'
    ],
    description: 'Inspired by Woodsworth’s renowned Valencia designer line: an architectural center table marrying the organic richness of kiln-dried Indian Sheesham hardwood with a flush-inset 8mm heavy-duty toughened beveled float glass top. The beveled glass reveals the handcrafted wood frame beneath while offering effortless cleaning and high scratch resistance. Equipped with two smooth sliding wooden drawers with integrated carved finger pulls and a lower open slatted shelf for magazines and art collections.',
    features: [
      '8mm shatter-resistant toughened float glass top with chamfered perimeter safety beveling',
      'Handcrafted framing forged from 100% seasoned solid Indian Sheesham wood in Provincial Teak',
      'Dual wooden utility drawers with concealed wooden slide tracks and carved finger pull grooves',
      'Full-width open slatted lower magazine and media accessory storage shelf',
      'Transparent glass center panel creates an airy, spacious visual weight in urban living spaces',
      'Reinforced solid hardwood corner stiles engineered for uncompromising load stability'
    ],
    specs: {
      'Pepperfry Reference': 'Valencia Sheesham Wood Coffee Table in Scratch-Resistant Provincial Teak Finish with Glass Top',
      'Pepperfry Product ID': '1823210',
      'Reference URL': 'https://www.pepperfry.com/product/valencia-sheesham-wood-coffee-table-in-scratch-resistant-provincial-teak-finish-with-glass-top-by-woodsworth-1823210.html',
      'Tabletop Shape': 'Rectangular with Inset Beveled Glass Panel',
      'Primary Material': 'Solid Sheesham Wood & 8mm Toughened Float Glass',
      'Tabletop Material': '8mm Scratch-Resistant Toughened Float Glass Inset Panel',
      'Frame & Leg Material': 'Kiln-Dried Solid Sheesham Wood Frame in Provincial Teak',
      'Storage Configuration': '2 Solid Wood Sliding Drawers + Full-Length Slatted Magazine Shelf',
      'Glass Edge Profile': 'Precision Diamond-Polished Beveled Edge',
      'Weight Capacity': '85 kg (187 lbs)',
      'Net Weight': '32.0 kg',
      'Assembly': 'Free Professional Knockdown Assembly & Leveling in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '107.0 x 56.0 x 41.0 cm (42.1 x 22.0 x 16.1 in)' },
      { label: 'Glass Top Thickness', value: '8.0 mm (0.31 in) Toughened Float Glass' },
      { label: 'Drawer Size (Each)', value: '42.0 x 24.0 x 10.0 cm (16.5 x 9.4 x 3.9 in)' },
      { label: 'Lower Shelf Clearance', value: '18.0 cm (7.1 in)' },
      { label: 'Net Weight', value: '32.0 kg' }
    ],
    materials: ['8mm Toughened Beveled Float Glass', 'Kiln-Dried Solid Sheesham Wood Frame', 'Anti-Scratch Polyurethane Sealant'],
    variants: [
      { name: 'Provincial Teak Glass Inset', colorHex: '#6E473B', finishType: 'wood' },
      { name: 'Honey Oak Glass Inset', colorHex: '#C68B59', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'odessy-galliano-metal-frame-coffee-table',
    name: 'Odessy Galliano Geometric Metal Coffee Table',
    tagline: 'CasaCraft Inspired Architectural Hollow Tube Metal Frame Center Table with Travertine Porcelain Top',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 18990,
    originalPrice: 24999,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 58,
    badge: 'Modern Geometric',
    isNewArrival: true,
    image: '/products/odessy_galliano_metal_coffee_table_3x4.jpg',
    gallery: [
      '/products/odessy_galliano_metal_coffee_table_3x4.jpg',
      '/products/odessy_galliano_metal_coffee_table_env.jpg'
    ],
    description: 'Inspired by CasaCraft’s striking Galliano contemporary series: an architectural statement center table constructed from heavy-gauge ERW mild steel square tubing electroplated in a refined Brushed Matte Gold finish. Crowned with a heat, stain, and scratch-proof glazed Travertine / sintered porcelain stone slab, its open cantilevered geometric silhouette creates an airy, floating aesthetic that effortlessly anchors modern Chennai apartments and contemporary formal drawing rooms.',
    features: [
      'Heavy-gauge commercial ERW mild steel hollow square tube structural frame',
      'Premium electroplated brushed matte gold finish with scratch-resistant clear nano-coating',
      'Ultra-dense sintered Travertine porcelain slab impervious to hot mugs, wine, and sharp objects',
      'Geometric open-frame architecture maximizing negative floor space for clean minimalist rooms',
      'Precision robotic mitered joint welds with completely smooth flush corners and zero exposed bolts',
      'Adjustable non-marking floor levelers preventing floor scratches on Italian marble and hardwood floors'
    ],
    specs: {
      'Pepperfry Reference': 'Galliano Metal Coffee Table in Matte Gold Finish with Travertine Top by CasaCraft',
      'Pepperfry Product ID': '2186809',
      'Reference URL': 'https://www.pepperfry.com/product/galliano-metal-coffee-table-in-matte-gold-finish-by-casacraft-2186809.html',
      'Tabletop Shape': 'Rectangular Architectural Silhouette',
      'Primary Material': 'High-Tensile Cold-Rolled Metal & Heat-Resistant Porcelain Stone',
      'Tabletop Material': 'Polished Glazed Travertine / Sintered Porcelain Ceramic Slab (12 mm)',
      'Frame & Base Material': 'Electroplated Heavy-Gauge ERW Mild Steel in Brushed Matte Gold',
      'Storage Configuration': 'Open Architectural Lower Floating Tier with Clean Negative Floor Clearance',
      'Steel Tube Profile': '25 x 25 mm Heavy Gauge Square Structural Tubing',
      'Weight Capacity': '110 kg (242 lbs)',
      'Net Weight': '24.5 kg',
      'Assembly': 'Free Professional Setup & Leveling in Chennai',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '100.0 x 60.0 x 43.0 cm (39.4 x 23.6 x 16.9 in)' },
      { label: 'Porcelain Slab Thickness', value: '1.2 cm (0.47 in)' },
      { label: 'Frame Tube Gauge', value: '25.0 x 25.0 mm (1.0 x 1.0 in)' },
      { label: 'Floor Clearance', value: '41.0 cm (16.1 in)' },
      { label: 'Net Weight', value: '24.5 kg' }
    ],
    materials: ['Sintered Glazed Travertine Porcelain', 'Heavy ERW Mild Steel Hollow Square Tubes', 'Brushed Electroplated Matte Gold Finish'],
    variants: [
      { name: 'Brushed Matte Gold & Ivory Travertine', colorHex: '#D4AF37', finishType: 'metal' },
      { name: 'Satin Obsidian Black & Slate Porcelain', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'odessy-elvas-round-nesting-coffee-table',
    name: 'Odessy Elvas Round Porcelain Nesting Table Set',
    tagline: 'CasaCraft Inspired 2-Piece Circular Retractable Nesting Center Tables with Calacatta Porcelain Top',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 14990,
    originalPrice: 22999,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 96,
    badge: '2-Piece Nesting Set',
    isBestSeller: true,
    image: '/products/odessy_elvas_nesting_coffee_table_3x4.jpg',
    gallery: [
      '/products/odessy_elvas_nesting_coffee_table_3x4.jpg',
      '/products/odessy_elvas_nesting_coffee_table_env.jpg'
    ],
    description: 'Inspired by CasaCraft’s iconic Elvas nesting collection: an ingenious 2-piece circular coffee table set engineered for flexible, multi-dimensional living room layouts. Crafted with curved high-tensile tubular carbon steel frames finished in weather-resilient matte black powder coating and topped with scratch-proof, stain-proof Calacatta White glazed porcelain slabs with delicate grey marble veining. The smaller table slides 100% underneath the larger table to conserve floor space or separates completely as an independent cocktail accent table when hosting guests.',
    features: [
      'Two-piece circular nesting configuration designed for expandable modular entertaining space',
      'Ultra-compact nested storage footprint: smaller table tucks smoothly under the larger table',
      'Polished Calacatta White glazed porcelain stone tops resistant to thermal shocks, acid spills, and cutlery scratches',
      'Cold-rolled carbon steel tubular frames with multi-stage thermoset matte black powder coating',
      'Semi-circular interlocking base geometry ensuring unshakeable stability without foot snagging',
      'Fitted with protective non-marking polymer floor glides to safeguard tile and hardwood flooring'
    ],
    specs: {
      'Pepperfry Reference': 'Elvas Metal Round Nesting Coffee Table Set in Black Finish with White Porcelain Top (Set of 2)',
      'Pepperfry Product ID': '1959345',
      'Reference URL': 'https://www.pepperfry.com/product/elvas-metal-round-nesting-coffee-table-set-in-black-finish-with-white-porcelain-top-set-of-2-1959345.html',
      'Tabletop Shape': 'Circular / Round Nesting (Set of 2 Stacking Tables)',
      'Primary Material': 'Cold-Rolled Carbon Tubular Steel & Calacatta Glazed Porcelain',
      'Tabletop Material': 'Calacatta White Glazed Sintered Porcelain Slab with Subtle Grey Veining (12 mm)',
      'Frame & Base Material': 'Curved Tubular High-Tensile Steel with Thermoset Matte Black Powder Coating',
      'Storage Configuration': 'Full 100% Retractable Nested Stowing (Small Table Stows Under Large Table)',
      'Nesting Mechanism': 'Slide-In Concentric Stacking Footprint',
      'Weight Capacity': 'Big: 80 kg (176 lbs) | Small: 60 kg (132 lbs)',
      'Net Weight': '19.8 kg (Set Combined)',
      'Assembly': 'Zero Assembly Required (Pre-Assembled Set of 2)',
      'Delivery': 'Free Insured Express Delivery Across Chennai (1-3 Days)'
    },
    dimensions: [
      { label: 'Big Table (Dia x H)', value: '71.0 x 71.0 x 46.0 cm (28.0 x 28.0 x 18.1 in)' },
      { label: 'Small Table (Dia x H)', value: '61.0 x 61.0 x 41.0 cm (24.0 x 24.0 x 16.1 in)' },
      { label: 'Combined Nested Diameter', value: '71.0 cm (28.0 in)' },
      { label: 'Porcelain Slab Thickness', value: '1.2 cm (0.47 in)' },
      { label: 'Set Net Weight', value: '19.8 kg' }
    ],
    materials: ['Cold-Rolled Carbon Tubular Steel', 'Calacatta White Glazed Sintered Porcelain', 'Non-Marking Polymer Floor Glides'],
    variants: [
      { name: 'Matte Obsidian Black Frame with White Porcelain', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Electroplated Satin Gold Frame with White Porcelain', colorHex: '#E5C158', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Same Day or Next Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  }
];"""

if target in content:
    new_content = content.replace(target, target.replace('];', table_products))
    with open('src/data/products.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("SUCCESS: 5 Center Table products appended to src/data/products.ts")
else:
    print("ERROR: Target not found in src/data/products.ts")

