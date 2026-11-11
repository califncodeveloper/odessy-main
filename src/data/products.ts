import { Product, FurnitureSubcategory } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'butterfly-mesh-chair',
    name: 'Odessy Butterfly Mesh Ergonomic Chair',
    tagline: 'Dual-Wing Adaptive Butterfly Lumbar & Multi-Angle Headrest',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 7150,
    originalPrice: 9750,
    currency: '₹',
    rating: 4.95,
    reviewsCount: 142,
    badge: 'Deal of the Day',
    isBestSeller: true,
    image: '/products/butterfly_mesh_3x4.jpg',
    gallery: [
      '/products/butterfly_mesh_3x4.jpg',
      '/products/butterfly_mesh_env.jpg'
    ],
    description: 'Flagship executive ergonomic chair engineered with adaptive dual-wing butterfly lumbar support, high-tensile breathable nylon mesh, and multi-angle adjustable headrest for all-day focus in Chennai heat.',
    features: [
      'Dual-wing butterfly dynamic lumbar support',
      'Multi-axis adjustable cushioned headrest',
      'Breathable tear-resistant nylon mesh back',
      'Synchronized tilt with multi-lock positions',
      'Heavy-duty nylon star base with silent castors'
    ],
    specs: {
      'Lumbar Mechanism': 'Adaptive Butterfly 2-Way Flex',
      'Mesh Type': 'High-Density Breathable Polymer',
      'Headrest': 'Height & Angle Adjustable',
      'Weight Capacity': '135 kg (300 lbs)',
      'Gas Lift': 'Class-4 Hydraulic Pneumatic',
      'Delivery': 'Free Home Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Total Height', value: '115 - 128 cm' },
      { label: 'Seat Width', value: '50 cm' },
      { label: 'Seat Depth', value: '48 cm' },
      { label: 'Base Diameter', value: '66 cm' }
    ],
    materials: ['Reinforced Nylon Chassis', 'Breathable Mesh', 'High-Density Moulded Foam'],
    variants: [
      { name: 'Midnight Black Mesh', colorHex: '#18181B', finishType: 'mesh' },
      { name: 'Glacier Grey & White Frame', colorHex: '#D4D4D8', finishType: 'mesh' }
    ],
    inStock: true,
    leadTime: 'Same Day Delivery in Chennai',
    warranty: '3-Year Comprehensive Warranty'
  },
  {
    id: 'sovereign-leather-chair',
    name: 'Odessy Sovereign Executive Leather Recliner',
    tagline: 'Plush Multi-Layer Leather Cushioning with Recline Lock',
    category: 'furniture',
    subcategory: 'Executive Chairs',
    price: 7540,
    originalPrice: 11050,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 88,
    badge: 'Boss Edition',
    image: '/products/sovereign_leather_3x4.jpg',
    gallery: [
      '/products/sovereign_leather_3x4.jpg',
      '/products/sovereign_leather_env.jpg'
    ],
    description: 'Executive boss chair with deep multi-layered padding, premium PU leather upholstery, padded waterfall armrests, and 130° reclining relaxation mechanism.',
    features: [
      'Multi-layered high-density plush leather cushioning',
      'Integrated headrest and side bolster pillows',
      'Padded executive armrests for forearm relaxation',
      '130° smooth recline with locking lever',
      'Heavy-duty chrome-coated base'
    ],
    specs: {
      'Upholstery': 'Premium Soft PU Leather',
      'Cushioning': 'Double-Layered Cold-Cure Foam',
      'Recline': '90° - 130° Multi-Lock',
      'Max Weight': '150 kg (330 lbs)'
    },
    dimensions: [
      { label: 'Height Range', value: '115 - 126 cm' },
      { label: 'Seat Width', value: '54 cm' },
      { label: 'Seat Depth', value: '52 cm' }
    ],
    materials: ['PU Leather', 'Chrome Alloy Base', 'High-Density Foam'],
    variants: [
      { name: 'Midnight Onyx Black Leather', colorHex: '#18181B', finishType: 'leather' },
      { name: 'Tan Amber Brown Leather', colorHex: '#9A3412', finishType: 'leather' }
    ],
    inStock: true,
    leadTime: 'Ships Same Day in Chennai',
    warranty: '3-Year Comprehensive Warranty'
  },
  {
    id: 'glass-spider-table',
    name: 'Odessy Cristallo Spider Meeting Table',
    tagline: 'Beveled Tempered Glass Top with Interlocking Chrome Spider Cross-Legs',
    category: 'furniture',
    subcategory: 'Desks & Tables',
    price: 6240,
    originalPrice: 8840,
    currency: '₹',
    rating: 4.95,
    reviewsCount: 32,
    badge: 'Executive Architectural',
    image: '/products/glass_spider_table_3x4.jpg',
    gallery: [
      '/products/glass_spider_table_3x4.jpg',
      '/products/glass_spider_table_env.jpg'
    ],
    description: 'Striking round collaboration and dining table featuring a 10mm thick beveled tempered glass top supported by an interlocking architectural spider leg base in polished chrome steel.',
    features: [
      '10mm heavy-duty safety tempered clear glass with polished beveled edge',
      'Geometric interlocking chrome steel spider base',
      'Heavy suction-cup stabilizing mounts preventing slip or vibration',
      'Seats 4 to 5 people comfortably for discussions or dining',
      'Adjustable leveling glides for perfect balance on any floor'
    ],
    specs: {
      'Glass': '10mm Heat-Treated Tempered Safety Glass',
      'Base': 'Heavy Chrome Plated Steel Cross-Braced',
      'Weight Capacity': '90 kg'
    },
    dimensions: [
      { label: 'Tabletop Diameter', value: '90 cm' },
      { label: 'Height', value: '75 cm standard' }
    ],
    materials: ['Tempered Glass', 'Chrome Plated Steel'],
    variants: [
      { name: 'Clear Tempered Glass & Chrome', colorHex: '#D4D4D8', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Careful White-Glove Delivery in Chennai',
    warranty: '3-Year Frame Warranty'
  },
  {
    id: 'marvel-mesh-chair',
    name: 'Odessy Marvel Mesh High-Back Chair',
    tagline: 'Ergonomic High-Back with Contoured Spine Curve & Padded Arms',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 6500,
    originalPrice: 8840,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 118,
    badge: 'Popular Choice',
    isBestSeller: true,
    image: '/products/marvel_mesh_3x4.jpg',
    gallery: [
      '/products/marvel_mesh_3x4.jpg',
      '/products/marvel_mesh_env.jpg'
    ],
    description: 'High-back ergonomic office chair featuring deep thoracic support, cushioned headrest, and heavy-duty gas cylinder. Designed for 10+ hour coding and executive workflows.',
    features: [
      'High-back spine curvature with integrated lumbar',
      'Adjustable headrest with neck cradle support',
      'Comfort-padded armrests with solid frame connection',
      'Heavy-duty pneumatic seat height adjustment',
      'Smooth 360-degree silent swivel wheels'
    ],
    specs: {
      'Frame': 'Virgin Engineered Polymer',
      'Upholstery': 'Thermal Dissipating 3D Mesh',
      'Seat Cushion': '55kg/m³ High Resilient Moulded Foam',
      'Weight Capacity': '130 kg',
      'Warranty': '3-Year Replacement Guarantee'
    },
    dimensions: [
      { label: 'Height Range', value: '112 - 124 cm' },
      { label: 'Seat Width', value: '49 cm' },
      { label: 'Back Height', value: '72 cm' }
    ],
    materials: ['Polymer Frame', 'Nylon 3D Mesh', 'Cold Foam'],
    variants: [
      { name: 'Obsidian Black Mesh', colorHex: '#121214', finishType: 'mesh' }
    ],
    inStock: true,
    leadTime: 'Ships in 24 Hours (Chennai)',
    warranty: '3-Year Comprehensive Warranty'
  },
  {
    id: 'quilted-pedestal-bar-stool',
    name: 'Odessy Diamond-Quilted Luxury Bar Stool',
    tagline: 'High-Back Diamond Stitched Leatherette with Chrome Swivel Disc Base',
    category: 'furniture',
    subcategory: 'Bar & Café Seating',
    price: 3835,
    originalPrice: 5460,
    currency: '₹',
    rating: 4.93,
    reviewsCount: 38,
    badge: 'Lounge Luxury',
    image: '/products/quilted_bar_stool_3x4.jpg',
    gallery: [
      '/products/quilted_bar_stool_3x4.jpg',
      '/products/quilted_bar_stool_env.jpg'
    ],
    description: 'Ultra-luxurious high-back bar stool featuring exquisite diamond-quilted leatherette upholstery, curved backrest support, and mirror-chrome gas lift swivel disc.',
    features: [
      'Deep diamond-quilted padding for superior lumbar comfort',
      'Full 360-degree silent swivel rotation',
      'Smooth pneumatic lever for height adjustability',
      'Chrome circular footrest ring',
      'Anti-slip weighted floor protector disc base'
    ],
    specs: {
      'Base Diameter': '42 cm weighted chrome disc',
      'Seat Height Range': '62 cm – 84 cm',
      'Weight Capacity': '130 kg'
    },
    dimensions: [
      { label: 'Total Height', value: '92 - 114 cm' },
      { label: 'Seat Depth', value: '44 cm' }
    ],
    materials: ['Chrome Steel', 'Quilted PU Leather', 'Cold Foam'],
    variants: [
      { name: 'Quilted Onyx Black', colorHex: '#18181B', finishType: 'leather' },
      { name: 'Quilted Vintage Brown', colorHex: '#78350F', finishType: 'leather' }
    ],
    inStock: true,
    leadTime: 'Ready in Chennai Warehouse',
    warranty: '2-Year Warranty'
  },
  {
    id: 'eiffel-accent-chair',
    name: 'Odessy Modern Eiffel Accent Chair',
    tagline: 'Ergonomic Molded Shell with Solid Beech Wood Eiffel Legs',
    category: 'furniture',
    subcategory: 'Café & Accent',
    price: 1885,
    originalPrice: 2600,
    currency: '₹',
    rating: 4.87,
    reviewsCount: 62,
    badge: 'Mid-Century Chic',
    image: '/products/eiffel_chair_3x4.jpg',
    gallery: [
      '/products/eiffel_chair_3x4.jpg',
      '/products/eiffel_chair_env.jpg'
    ],
    description: 'Mid-century modern accent dining chair featuring an ergonomic molded matte polypropylene shell seat supported by natural solid beech wood legs and black steel wire Eiffel cross-struts.',
    features: [
      'Ergonomically contoured matte polypropylene seat',
      'Solid natural beech wood legs with clear protective coat',
      'Black architectural steel wire Eiffel bracing',
      'Non-marring floor protector foot caps',
      'Easy wipe-clean stain resistant surface'
    ],
    specs: {
      'Legs': 'Solid Natural Beech Wood',
      'Bracing': 'Black Powder-Coated Steel Wire',
      'Seat': 'Virgin Molded Polypropylene',
      'Weight Limit': '115 kg'
    },
    dimensions: [
      { label: 'Seat Height', value: '45 cm' },
      { label: 'Overall W x D x H', value: '46 x 52 x 82 cm' }
    ],
    materials: ['Solid Beech Wood', 'Molded Polymer', 'Steel Wire'],
    variants: [
      { name: 'Matte Charcoal & Beech Wood', colorHex: '#27272A', finishType: 'matte' },
      { name: 'Pure White & Beech Wood', colorHex: '#F4F4F5', finishType: 'matte' },
      { name: 'Walnut Brown Leatherette', colorHex: '#5C4033', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Available in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'wooden-recliner-chair',
    name: 'Odessy Wooden Recliner Relaxation Chair',
    tagline: 'Natural Solid Hardwood Slats with Multi-Stage Recline',
    category: 'furniture',
    subcategory: 'Relaxation & Lounge',
    price: 5460,
    originalPrice: 7670,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 53,
    badge: 'Artisanal Wood',
    image: '/products/wooden_recliner_3x4.jpg',
    gallery: [
      '/products/wooden_recliner_3x4.jpg',
      '/products/wooden_recliner_env.jpg'
    ],
    description: 'Classic artisanal wooden lounge recliner crafted from seasoned solid hardwood with smoothly finished slats, wide armrests, and a 4-position adjustable back.',
    features: [
      '100% seasoned solid natural hardwood frame',
      '4-stage adjustable backrest recline notches',
      'Smooth contoured wooden slats for spinal comfort',
      'Collapsible flat fold for easy storage & transport',
      'Hand-applied protective teak oil finish'
    ],
    specs: {
      'Wood Type': 'Seasoned Teak / Hardwood',
      'Recline Positions': '4 Ergonomic Angles',
      'Weight Capacity': '140 kg',
      'Foldability': 'Fully Collapsible Flat'
    },
    dimensions: [
      { label: 'Open L x W x H', value: '105 x 62 x 85 cm' },
      { label: 'Folded Height', value: '15 cm flat' }
    ],
    materials: ['Solid Hardwood', 'Brass Hardware Accents'],
    variants: [
      { name: 'Natural Teak Hardwood Slat', colorHex: '#854D0E', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Home Delivery Within Chennai',
    warranty: '5-Year Wood Integrity Guarantee'
  },
  {
    id: 'tulip-swivel-chair',
    name: 'Odessy Tulip Chrome Swivel Shell Chair',
    tagline: 'Ergonomic Molded Shell with Padded Seat Cushion & 360° Chrome Base',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 3640,
    originalPrice: 5070,
    currency: '₹',
    rating: 4.90,
    reviewsCount: 54,
    badge: 'Studio Classic',
    image: '/products/tulip_swivel_chair_3x4.jpg',
    gallery: [
      '/products/tulip_swivel_chair_3x4.jpg',
      '/products/tulip_swivel_chair_env.jpg'
    ],
    description: 'Mid-century inspired minimalist desk chair featuring a curved ergonomic polypropylene shell, high-density padded faux-leather seat pad, and polished 5-star chrome caster base with gas lift.',
    features: [
      'Anatomically contoured curved backrest shell',
      'Cushioned easy-clean seat pad for prolonged sitting',
      'Pneumatic seat height lever with smooth hydraulic stroke',
      'Polished steel 5-star castor base',
      'Compact footprint perfect for study nooks & studios'
    ],
    specs: {
      'Base': 'Heavy Chrome Star Base with Castors',
      'Seat': 'Molded Polypropylene with PU Seat Cushion',
      'Weight Capacity': '120 kg'
    },
    dimensions: [
      { label: 'Height Range', value: '82 - 94 cm' },
      { label: 'Seat Width', value: '48 cm' }
    ],
    materials: ['Chrome Steel', 'Polypropylene', 'PU Cushion'],
    variants: [
      { name: 'Pure White & Chrome Base', colorHex: '#F4F4F5', finishType: 'metal' },
      { name: 'Matte Black & Chrome Base', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Saddle Brown & Chrome Base', colorHex: '#78350F', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Same Day Delivery in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'jazz-headrest-chair',
    name: 'Odessy Jazz Headrest Mesh Chair',
    tagline: 'Streamlined High-Back Mesh with Orthopedic Neck & Lumbar Alignment',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 5850,
    originalPrice: 7800,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 96,
    badge: 'Best Value',
    image: '/products/jazz_headrest_3x4.jpg',
    gallery: [
      '/products/jazz_headrest_3x4.jpg',
      '/products/jazz_headrest_env.jpg'
    ],
    description: 'The definitive executive value chair. Delivers contoured lumbar reinforcement, responsive synchro-recline, and durable nylon mesh built for daily productivity.',
    features: [
      'Contoured ergonomic headrest for cervical relief',
      'Integrated active lumbar spine support',
      'Water-fall seat front reducing hamstring pressure',
      'Pneumatic seat height lever with tension knob',
      'BIFMA-standard nylon star castor base'
    ],
    specs: {
      'Base': 'Heavy-Duty 5-Star Nylon Base',
      'Mechanism': 'Center-Tilt with Upright Lock',
      'Weight Capacity': '125 kg',
      'Certifications': 'BIFMA Level 1 Tested'
    },
    dimensions: [
      { label: 'Height', value: '110 - 122 cm' },
      { label: 'Seat Dimensions', value: '48 x 48 cm' }
    ],
    materials: ['Reinforced Polymer', 'Airflow Mesh', 'High-Density Foam'],
    variants: [
      { name: 'Jet Black Mesh', colorHex: '#18181B', finishType: 'mesh' }
    ],
    inStock: true,
    leadTime: 'Immediate Delivery in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'hydraulic-bar-stool',
    name: 'Odessy Luxury Hydraulic Bar Stool',
    tagline: 'Chrome Pedestal Base with 360° Swivel & Gas-Lift Height Adjust',
    category: 'furniture',
    subcategory: 'Bar & Café Seating',
    price: 3120,
    originalPrice: 4550,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 45,
    badge: 'Modern Café',
    image: '/products/hydraulic_bar_stool_3x4.jpg',
    gallery: [
      '/products/hydraulic_bar_stool_3x4.jpg',
      '/products/hydraulic_bar_stool_env.jpg'
    ],
    description: 'Contemporary bar and counter stool with high-shine chrome trumpet base, circular footrest ring, and smooth hydraulic gas-lift height adjustment with padded PU leather seat.',
    features: [
      'High-gloss chrome pedestal base with rubber floor protector ring',
      'Smooth 360° effortless swivel rotation',
      'Hydraulic gas-lift height adjustment lever',
      'Integrated chrome footrest ring',
      'Padded easy-wipe PU leather curved seat'
    ],
    specs: {
      'Base Diameter': '41 cm heavy chrome disc',
      'Height Range': '60 cm – 82 cm seat height',
      'Weight Capacity': '120 kg'
    },
    dimensions: [
      { label: 'Seat Height', value: '60 - 82 cm' },
      { label: 'Total Height', value: '84 - 106 cm' }
    ],
    materials: ['Chrome Plated Steel', 'PU Leatherette', 'High-Density Foam'],
    variants: [
      { name: 'Obsidian Black PU', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Vintage Saddle Brown PU', colorHex: '#5C3A21', finishType: 'metal' },
      { name: 'Pure White PU', colorHex: '#FAFAFA', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Immediate Delivery (Chennai)',
    warranty: '2-Year Hydraulic Warranty'
  },
  {
    id: 'cantilever-visitor-chair',
    name: 'Odessy Cantilever Chrome Visitor Chair',
    tagline: 'Tubular S-Frame Steel with Ribbed Leatherette Cushioning',
    category: 'furniture',
    subcategory: 'Conference & Visitor',
    price: 2015,
    originalPrice: 2860,
    currency: '₹',
    rating: 4.90,
    reviewsCount: 58,
    badge: 'Conference Classic',
    image: '/products/cantilever_visitor_3x4.jpg',
    gallery: [
      '/products/cantilever_visitor_3x4.jpg',
      '/products/cantilever_visitor_env.jpg'
    ],
    description: 'Modern cantilever boardroom visitor chair with continuous chrome tubular steel sled frame, horizontal ribbed black leatherette cushioning, and anti-scratch floor glides.',
    features: [
      'Continuous S-shaped chrome steel cantilever frame',
      'Horizontal heat-pressed ribbed leatherette',
      'Gentle natural bounce for visitor comfort',
      'Integrated armrests with padded leatherette sleeves',
      'Floor-protecting anti-skid nylon glides'
    ],
    specs: {
      'Frame': 'Tubular Chrome Steel (Heavy Gauge)',
      'Upholstery': 'Commercial Grade PU Leatherette',
      'Weight Capacity': '130 kg'
    },
    dimensions: [
      { label: 'Total Height', value: '92 cm' },
      { label: 'Seat Dimensions', value: '48 x 46 cm' }
    ],
    materials: ['Chrome Tubular Steel', 'Ribbed PU Leather'],
    variants: [
      { name: 'Ribbed Black Leatherette & Chrome', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Ventilated Black Mesh & Chrome', colorHex: '#27272A', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Bulk Stock Ready in Chennai',
    warranty: '2-Year Structural Warranty'
  },
  {
    id: 'x-mesh-chair',
    name: 'Odessy X-Mesh Ergonomic Chair',
    tagline: 'Brilliant Chrome Base & High-Flex X-Back Lumbar Matrix',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 4940,
    originalPrice: 6760,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 84,
    badge: 'Chrome Series',
    image: '/products/x_mesh_3x4.jpg',
    gallery: [
      '/products/x_mesh_3x4.jpg',
      '/products/x_mesh_env.jpg'
    ],
    description: 'Sleek modern office chair with polished chrome steel star base and an X-brace lumbar cradle that automatically mirrors postural shifts.',
    features: [
      'Polished heavy-duty chrome star base',
      'X-back structural spine support module',
      'Breathable anti-sweat nylon mesh',
      'Curved armrests with natural wrist resting angle',
      '360° smooth dual-wheel nylon castors'
    ],
    specs: {
      'Base Material': 'Polished Chrome Plated Steel',
      'Lumbar Support': 'Structural X-Brace Support',
      'Max Load': '120 kg',
      'Mechanism': 'Pneumatic Tilt Mechanism'
    },
    dimensions: [
      { label: 'Height', value: '98 - 108 cm' },
      { label: 'Seat Width', value: '48 cm' }
    ],
    materials: ['Chrome Steel', 'Nylon Mesh', 'PU Foam'],
    variants: [
      { name: 'Chrome Base & Black Mesh', colorHex: '#27272A', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Same Day Dispatch (Chennai)',
    warranty: '2-Year Warranty'
  },
  {
    id: 'retmax-mesh-chair',
    name: 'Odessy Retmax Mesh Task Chair',
    tagline: 'Dual-Tone Grey & Black Mid-Back Workstation Seating',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 4550,
    originalPrice: 6240,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 72,
    badge: 'Dual-Tone Accent',
    image: '/products/retmax_mesh_3x4.jpg',
    gallery: [
      '/products/retmax_mesh_3x4.jpg',
      '/products/retmax_mesh_env.jpg'
    ],
    description: 'Mid-back ergonomic task chair pairing black ventilated mesh back with a premium heather grey fabric seat cushion and T-armrests.',
    features: [
      'Distinctive dual-tone grey and black styling',
      'Mid-back lumbar curve for natural posture',
      'Moulded comfort seat cushion in breathable fabric',
      'Sturdy T-style armrests',
      'Smooth gas-lift elevation control'
    ],
    specs: {
      'Seat Fabric': 'Dual-Tone Breathable Woven Fabric',
      'Back Fabric': 'High-Tensile Black Mesh',
      'Base': 'Reinforced Black Nylon Star Base',
      'Weight Limit': '115 kg'
    },
    dimensions: [
      { label: 'Height Range', value: '94 - 104 cm' },
      { label: 'Seat Width', value: '47 cm' }
    ],
    materials: ['Woven Fabric', 'Nylon Mesh', 'Engineered Poly'],
    variants: [
      { name: 'Dual-Tone Heather Grey & Black', colorHex: '#4B5563', finishType: 'mesh' }
    ],
    inStock: true,
    leadTime: '24-Hour Delivery in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'bistro-chrome-cafe-chair',
    name: 'Odessy Ladder-Back Chrome Café Chair',
    tagline: 'Polished Chrome Tubular Frame with Natural Beech Contoured Wood Seat',
    category: 'furniture',
    subcategory: 'Café & Accent',
    price: 1625,
    originalPrice: 2340,
    currency: '₹',
    rating: 4.84,
    reviewsCount: 39,
    badge: 'Bistro Classic',
    image: '/products/bistro_cafe_chair_3x4.jpg',
    gallery: [
      '/products/bistro_cafe_chair_3x4.jpg',
      '/products/bistro_cafe_chair_env.jpg'
    ],
    description: 'Timeless commercial cafe chair featuring mirror-finish tubular steel legs, a contoured natural beech hardwood circular seat, and horizontal ladder back support.',
    features: [
      'Heavy-gauge polished chrome plated steel frame',
      'Curved circular solid beech hardwood seat disc',
      'Horizontal back slats supporting lower thoracic posture',
      'Welded cross-braces for commercial high-traffic stability',
      'Non-slip nylon floor protector feet'
    ],
    specs: {
      'Frame': 'Tubular Chrome Steel',
      'Seat': 'Multi-Layer Natural Beech Hardwood',
      'Weight Capacity': '120 kg'
    },
    dimensions: [
      { label: 'Total Height', value: '86 cm' },
      { label: 'Seat Diameter', value: '38 cm' }
    ],
    materials: ['Chrome Steel', 'Natural Beech Wood'],
    variants: [
      { name: 'Polished Chrome & Natural Beech', colorHex: '#D4D4D8', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Immediate Delivery (Chennai)',
    warranty: '2-Year Warranty'
  },
  {
    id: 'box-mesh-chair',
    name: 'Odessy Box Mesh Computer Chair',
    tagline: 'Compact Mid-Back Mesh Chair with Polished Chrome Swivel Base',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 4160,
    originalPrice: 5850,
    currency: '₹',
    rating: 4.85,
    reviewsCount: 65,
    badge: 'Compact Ergonomics',
    image: '/products/box_mesh_3x4.jpg',
    gallery: [
      '/products/box_mesh_3x4.jpg',
      '/products/box_mesh_env.jpg'
    ],
    description: 'Compact mid-back office chair with polished chrome steel base, box-style lumbar brace, and loop armrests. Ideal for home office study spaces and workstation clusters.',
    features: [
      'Square box lumbar reinforcement design',
      'Solid chrome metal 5-star swivel base',
      'Ergonomic loop armrests for desk clearance',
      'Class-3 pneumatic height adjustment',
      'High-resilience foam seat'
    ],
    specs: {
      'Base': 'Mirror-Polished Chrome Steel',
      'Back Design': 'Box Lumbar Geometry',
      'Load Rating': '110 kg'
    },
    dimensions: [
      { label: 'Total Height', value: '92 - 102 cm' },
      { label: 'Seat Size', value: '46 x 46 cm' }
    ],
    materials: ['Chrome Steel', 'Polymer Mesh', 'Foam Seat'],
    variants: [
      { name: 'Black Mesh & Polished Chrome', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Immediate Delivery (Chennai)',
    warranty: '2-Year Warranty'
  },
  {
    id: 'c-shape-laptop-table',
    name: 'Odessy C-Shape Ergonomic Laptop Side Table',
    tagline: 'Under-Sofa Slide-In Workstation with Solid Steel Frame',
    category: 'furniture',
    subcategory: 'Desks & Tables',
    price: 1138,
    originalPrice: 1690,
    currency: '₹',
    rating: 4.86,
    reviewsCount: 110,
    badge: 'Compact Utility',
    image: '/products/c_shape_table_3x4.jpg',
    gallery: [
      '/products/c_shape_table_3x4.jpg',
      '/products/c_shape_table_env.jpg'
    ],
    description: 'Compact space-saving C-frame laptop and side table designed to glide smoothly under sofas, armchairs, and beds for ergonomic laptop typing or coffee resting.',
    features: [
      'Low-profile C-frame slips seamlessly under furniture bases',
      'Engineered wood top with scratch-resistant smooth finish',
      'Sturdy powder-coated square carbon steel frame',
      'Adjustable leveling feet preventing floor scratches',
      'Holds laptops, tablets, books, and coffee mugs with ease'
    ],
    specs: {
      'Frame': 'Powder-Coated Square Steel Tube',
      'Top Surface': 'Water-Resistant Melamine Wood Board',
      'Weight Capacity': '25 kg'
    },
    dimensions: [
      { label: 'Surface Size', value: '45 x 30 cm' },
      { label: 'Height', value: '62 cm (fits standard sofas)' }
    ],
    materials: ['Engineered Wood', 'Carbon Steel Frame'],
    variants: [
      { name: 'Rustic Walnut & Black Metal', colorHex: '#422006', finishType: 'wood' },
      { name: 'Classic Royal Blue & Steel', colorHex: '#1D4ED8', finishType: 'metal' },
      { name: 'Vibrant Flamingo Pink & Steel', colorHex: '#DB2777', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Fast Dispatch in Chennai',
    warranty: '1-Year Warranty'
  },
  {
    id: 'magazine-literature-stand',
    name: 'Odessy Multi-Tier Brochure & Catalog Display Stand',
    tagline: 'Zig-Zag Perforated Steel Literature Tower with Collapsible Base',
    category: 'furniture',
    subcategory: 'Desks & Tables',
    price: 3380,
    originalPrice: 4940,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 27,
    badge: 'Showroom Utility',
    image: '/products/magazine_stand_3x4.jpg',
    gallery: [
      '/products/magazine_stand_3x4.jpg',
      '/products/magazine_stand_env.jpg'
    ],
    description: 'Floor-standing architectural catalog, magazine, and corporate literature display rack with tiered perforated steel shelves, heavy weighted base, and collapsible structure.',
    features: [
      'Multi-tier double-sided zig-zag brochure holding racks',
      'Precision laser-cut perforated ventilation hole pattern',
      'Heavy weighted anti-topple steel floor plate',
      'Scratch-resistant matte black powder coat',
      'Ideal for corporate reception lobbies, clinics, and studios'
    ],
    specs: {
      'Material': 'Commercial Heavy-Gauge Carbon Steel',
      'Tiers': '6 Document Trays (A4 Size Compatible)',
      'Total Height': '145 cm'
    },
    dimensions: [
      { label: 'Height', value: '145 cm' },
      { label: 'Base Dimensions', value: '35 x 30 cm' }
    ],
    materials: ['Perforated Carbon Steel'],
    variants: [
      { name: 'Matte Architectural Black', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Immediate Dispatch in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'training-writing-pad-chair',
    name: 'Odessy Seminar Training Chair with Writing Tablet',
    tagline: 'Foldable Steel Frame with Heavy-Duty Swivel Writing Tablet Desk',
    category: 'furniture',
    subcategory: 'Conference & Visitor',
    price: 2730,
    originalPrice: 3900,
    currency: '₹',
    rating: 4.87,
    reviewsCount: 44,
    badge: 'Lecture Ready',
    image: '/products/training_writing_pad_chair_3x4.jpg',
    gallery: [
      '/products/training_writing_pad_chair_3x4.jpg',
      '/products/training_writing_pad_chair_env.jpg'
    ],
    description: 'Specialized training, seminar, and lecture hall chair featuring an integrated heavy-duty fold-away writing tablet arm, ventilated polypropylene slatted back, and collapsible steel frame.',
    features: [
      'Fold-away writing tablet with cup/pen indentation',
      'Reinforced tubular carbon steel powder-coated frame',
      'Slatted backrest ensuring air circulation in Chennai rooms',
      'Fold-flat design for compact nested storage',
      'Non-scratch nylon foot caps'
    ],
    specs: {
      'Frame': 'Tubular Powder-Coated Steel',
      'Tablet Desk': 'Reinforced Polymer Tablet Arm',
      'Weight Capacity': '120 kg'
    },
    dimensions: [
      { label: 'Seat Height', value: '45 cm' },
      { label: 'Tablet Size', value: '38 x 28 cm' }
    ],
    materials: ['Carbon Steel', 'Molded Polymer'],
    variants: [
      { name: 'Black Steel & Writing Tablet', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Bulk Institutional Stock in Chennai',
    warranty: '2-Year Warranty'
  },
  {
    id: 'webbed-lattice-chair',
    name: 'Odessy Lattice Webbed Accent Chair',
    tagline: 'Geometric Breathable Polymer Mold with Ergonomic Lumbar Cradle',
    category: 'furniture',
    subcategory: 'Café & Accent',
    price: 2145,
    originalPrice: 3120,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 51,
    badge: 'Designer Silhouette',
    image: '/products/webbed_lattice_chair_3x4.jpg',
    gallery: [
      '/products/webbed_lattice_chair_3x4.jpg',
      '/products/webbed_lattice_chair_env.jpg'
    ],
    description: 'Contemporary sculptural dining and cafe chair featuring a botanical webbed geometric cutout pattern, ergonomic seat basin, and weatherproof high-density polymer construction.',
    features: [
      'Unique breathable webbed lattice pattern backrest',
      'Monobloc reinforced polymer for indoor/outdoor resilience',
      'Stackable for streamlined floor management',
      'UV-stabilized weather-resistant finish',
      'Ergonomic gentle recline angle'
    ],
    specs: {
      'Material': 'Virgin Reinforced Polypropylene',
      'Stackability': 'Up to 6 chairs high',
      'Weight Capacity': '120 kg'
    },
    dimensions: [
      { label: 'Seat Height', value: '46 cm' },
      { label: 'Overall Height', value: '84 cm' }
    ],
    materials: ['Reinforced Polymer'],
    variants: [
      { name: 'Matte Black Polymer', colorHex: '#18181B', finishType: 'matte' },
      { name: 'Espresso Brown Polymer', colorHex: '#422006', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Ready in Chennai Stock',
    warranty: '2-Year Structural Warranty'
  },
  {
    id: 'zero-gravity-cushion-recliner',
    name: 'Odessy Zero-Gravity Cushion Recliner',
    tagline: 'Padded Comfort Cushion with Extendable Leg Rest & Zero-Gravity Lock',
    category: 'furniture',
    subcategory: 'Relaxation & Lounge',
    price: 3770,
    originalPrice: 5460,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 67,
    badge: 'Relax Sanctuary',
    image: '/products/zero_gravity_recliner_3x4.jpg',
    gallery: [
      '/products/zero_gravity_recliner_3x4.jpg',
      '/products/zero_gravity_env.jpg'
    ],
    description: 'Heavy-duty outdoor and indoor zero-gravity relaxation chair with thick padded fabric cushion, integrated neck pillow, and step-less recline locking mechanism.',
    features: [
      'Zero-gravity weightless recline posture support',
      'Removable thick padded cushion with headrest pillow',
      'Heavy tubular powder-coated steel frame',
      'Finger-touch dual lock mechanism under armrests',
      'Folds flat in 5 seconds for easy portability'
    ],
    specs: {
      'Frame': 'High-Strength Tubular Carbon Steel',
      'Cushion Fabric': 'Heavy-Duty Oxford Padded Fabric',
      'Weight Capacity': '130 kg',
      'Lock System': 'Alloy Ring Locking Levers'
    },
    dimensions: [
      { label: 'Open Length', value: '165 cm fully reclined' },
      { label: 'Seat Width', value: '52 cm' }
    ],
    materials: ['Carbon Steel Frame', 'Padded Oxford Fabric', 'Polymer Armrests'],
    variants: [
      { name: 'Royal Navy Blue Cushion', colorHex: '#1E3A8A', finishType: 'matte' },
      { name: 'Crimson Red Cushion', colorHex: '#B91C1C', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Same Day Delivery in Chennai',
    warranty: '2-Year Frame Warranty'
  },
  {
    id: 'folding-cushion-conference-chair',
    name: 'Odessy Padded Folding Conference Chair',
    tagline: 'Tubular Steel Folding Frame with Thick High-Density Vinyl Cushion',
    category: 'furniture',
    subcategory: 'Conference & Visitor',
    price: 1755,
    originalPrice: 2470,
    currency: '₹',
    rating: 4.85,
    reviewsCount: 76,
    badge: 'Event Essential',
    image: '/products/folding_cushion_chair_3x4.jpg',
    gallery: [
      '/products/folding_cushion_chair_3x4.jpg',
      '/products/folding_cushion_chair_env.jpg'
    ],
    description: 'Heavy-duty steel folding chair with generous high-resilience foam padding on both seat pan and curved backrest, wrapped in wipe-clean midnight black vinyl.',
    features: [
      'Double-braced tubular steel frame ensuring zero wobble',
      'Comfort-padded seat and backrest for long meeting sessions',
      'Folds flat effortlessly for transport and stacking',
      'Stain-resistant wipe-clean upholstery',
      'Protective floor glides'
    ],
    specs: {
      'Frame': 'High-Tensile Steel with Powder Coat',
      'Weight Capacity': '125 kg',
      'Fold Thickness': '8 cm flat'
    },
    dimensions: [
      { label: 'Total Height', value: '78 cm' },
      { label: 'Seat Size', value: '42 x 42 cm' }
    ],
    materials: ['Tubular Steel', 'Padded Vinyl', 'Foam'],
    variants: [
      { name: 'Midnight Black Padded Vinyl', colorHex: '#18181B', finishType: 'metal' }
    ],
    inStock: true,
    leadTime: 'Fast Dispatch in Chennai',
    warranty: '2-Year Frame Warranty'
  },
  {
    id: 'stacking-chrome-ring-stool',
    name: 'Odessy Stackable Ring Frame Lab & Bistro Stool',
    tagline: 'Heavy-Gauge Chrome Stacking Frame with High-Density Vinyl Seat',
    category: 'furniture',
    subcategory: 'Bar & Café Seating',
    price: 1235,
    originalPrice: 1820,
    currency: '₹',
    rating: 4.86,
    reviewsCount: 82,
    badge: 'Space Saver',
    image: '/products/stacking_ring_stool_3x4.jpg',
    gallery: [
      '/products/stacking_ring_stool_3x4.jpg',
      '/products/stacking_ring_stool_env.jpg'
    ],
    description: 'Commercial-grade stackable round stool with continuous tubular chrome circular base, protective floor glides, and wipe-clean cushioned top. Stacks up to 10 high.',
    features: [
      'High-strength chrome plated circular tubular frame',
      'Space-saving vertical stacking capability',
      'Padded easy-wipe vinyl round seat pad',
      'Non-marking floor glides preventing scratches',
      'Ideal for labs, cafes, study rooms, and clinics'
    ],
    specs: {
      'Frame': 'Tubular Chrome Steel',
      'Seat Diameter': '32 cm',
      'Height': '46 cm standard seating',
      'Weight Capacity': '125 kg'
    },
    dimensions: [
      { label: 'Diameter', value: '38 cm base' },
      { label: 'Height', value: '46 cm' }
    ],
    materials: ['Chrome Steel', 'High-Density Vinyl', 'Foam'],
    variants: [
      { name: 'Ruby Red Vinyl Cushion', colorHex: '#DC2626', finishType: 'metal' },
      { name: 'Midnight Black Vinyl Cushion', colorHex: '#18181B', finishType: 'metal' },
      { name: 'Natural Beech Wood Top', colorHex: '#854D0E', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Bulk Ready in Chennai',
    warranty: '2-Year Structural Warranty'
  },
  {
    id: 'siramika-sheesham-4-seater',
    name: 'Odessy Siramika Solid Sheesham 4-Seater Dining Set',
    tagline: 'Mudramark Inspired Handcrafted Solid Rosewood with Classic Slatted Chairs',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 47499,
    originalPrice: 71999,
    currency: '₹',
    rating: 4.88,
    reviewsCount: 52,
    badge: 'Handcrafted Sheesham',
    isBestSeller: true,
    image: '/products/dining-table-siramika-sheesham-4-seater.jpeg',
    gallery: [
      '/products/dining-table-siramika-sheesham-4-seater.jpeg',
      '/products/dining-table-siramika-sheesham-4-seater-env.jpeg'
    ],
    description: 'Inspired by Mudramark\'s Siramika collection: handcrafted solid Sheesham wood 4-seater dining set in a warm Provincial Teak finish. Built from 100% seasoned Indian rosewood with traditional mortise-and-tenon joints, featuring four ergonomically proportioned dining chairs for compact modern urban homes.',
    features: [
      'Crafted from 100% seasoned, kiln-dried solid Sheesham wood (Dalbergia sissoo)',
      'Traditional mortise and tenon joinery ensures lifelong structural stability',
      'Includes 4 solid wood dining chairs with classic slatted backrests',
      'Protective polyurethane coating repels heat spills and moisture stains',
      'Compact 4-seater footprint engineered for contemporary dining spaces'
    ],
    specs: {
      'Pepperfry Reference': 'Mudramark Siramika Solid Wood 4 Seater Dining Set',
      'Pepperfry Product ID': '1845892',
      'Reference URL': 'https://www.pepperfry.com/product/siramika-solid-wood-4-seater-dining-set-in-provincial-teak-finish-1845892.html',
      'Primary Material': '100% Solid Sheesham Wood (Dalbergia sissoo)',
      'Finish': 'Provincial Teak Polyurethane Lustre',
      'Seating Capacity': '4 Seater (1 Table + 4 Chairs)',
      'Weight': 'Approx. 68 kg',
      'Assembly': 'Carpenter Assembly Provided by Odessy in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '114.3 x 84 x 76.2 cm (45 x 33 x 30 in)' },
      { label: 'Chair (W x D x H)', value: '45 x 45 x 86 cm (18 x 17.5 x 34 in)' },
      { label: 'Chair Seating Height', value: '45.7 cm (18 in)' },
      { label: 'Tabletop Thickness', value: '25 mm Solid Wood' }
    ],
    materials: ['Solid Sheesham Wood (Indian Rosewood)', 'Polyurethane Protective Coat'],
    variants: [
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak', colorHex: '#A16207', finishType: 'wood' },
      { name: 'Rustic Teak', colorHex: '#451A03', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships within 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'kentan-sheesham-4-seater',
    name: 'Odessy Kentan Solid Sheesham 4-Seater Dining Set',
    tagline: 'Woodsworth Inspired Architectural High-Back Slatted Lumbar Dining Suite',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 40999,
    originalPrice: 64999,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 68,
    badge: 'High-Back Lumbar',
    isBestSeller: true,
    image: '/products/kentan_sheesham_4_seater_3x4.jpeg',
    gallery: [
      '/products/kentan_sheesham_4_seater_3x4.jpeg',
      '/products/kentan_sheesham_4_seater_env.jpeg'
    ],
    description: 'Inspired by Woodsworth\'s Kentan collection: a statement 4-seater dining set crafted from heavy-gauge solid Sheesham wood. Distinguishable by its architectural 102 cm tall slatted high backrests offering superior thoracic posture support, paired with a solid 114 cm timber dining table.',
    features: [
      'Generous 114 cm solid Sheesham wood tabletop accommodating 4 diners comfortably',
      'Kiln-dried and chemically treated against borer and termite infestation',
      'Includes 4 high-back dining chairs (102 cm height) designed for spinal comfort',
      'Multi-coat protective lacquer finish resistant to stains and humidity',
      'Robust heavy-timber leg posts (7.5 x 7.5 cm) with floor glides'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Kentan Sheesham Wood 4 Seater Dining Set',
      'Pepperfry Product ID': '1903678 (SKU: LP2243010-P-WH35490)',
      'Reference URL': 'https://www.pepperfry.com/product/kentan-sheesham-wood-4-seater-dining-set-in-provincial-teak-finish-1903678.html',
      'Primary Material': 'Solid Sheesham Hardwood',
      'Finish': 'Provincial Teak Scratch-Resistant Lacquer',
      'Seating Capacity': '4 Seater (1 Table + 4 High-Back Chairs)',
      'Chair Backrest Height': '102 cm (Full Spinal Support)',
      'Assembly': 'Free Professional In-Home Assembly in Chennai',
      'Delivery': 'Free Home Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '114 x 89 x 76 cm (45 x 35 x 30 in)' },
      { label: 'Chair (W x D x H)', value: '43 x 43 x 102 cm (17 x 17 x 40 in)' },
      { label: 'Chair Seating Height', value: '45.7 cm (18 in)' },
      { label: 'Table Leg Posts', value: '7.5 x 7.5 cm Solid Timber' }
    ],
    materials: ['Solid Sheesham Hardwood', 'High-Tensile Hardware'],
    variants: [
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak', colorHex: '#B45309', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships within 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'marin-sheesham-4-seater',
    name: 'Odessy Marin Solid Sheesham 4-Seater Dining Set',
    tagline: 'Woodsworth Inspired Modern Clean-Lined Sheesham with Geometric Chairs',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 36999,
    originalPrice: 56999,
    currency: '₹',
    rating: 4.87,
    reviewsCount: 43,
    badge: 'Best Value Hardwood',
    image: '/products/marin_sheesham_4_seater_3x4.jpeg',
    gallery: [
      '/products/marin_sheesham_4_seater_3x4.jpeg',
      '/products/marin_sheesham_4_seater_env.jpeg'
    ],
    description: 'Inspired by Woodsworth\'s Marin collection: clean-lined contemporary solid Sheesham wood 4-seater dining suite. Features a minimalist apron table profile and geometric grid-slatted dining chairs designed for space-conscious apartments and everyday dining.',
    features: [
      'Clean modern Scandinavian-inspired straight-line woodwork in solid Indian Sheesham',
      'Grid-slatted ergonomic backrests engineered for relaxed dining posture',
      'Scratch-resistant satin polyurethane protective coating',
      'Includes 1 rectangular dining table and 4 matching solid wood chairs',
      'Backed by an extensive 60-month (5-year) structural warranty'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Marin Sheesham Wood 4 Seater Dining Set',
      'Pepperfry Product ID': '2287841',
      'Reference URL': 'https://www.pepperfry.com/product/marin-sheesham-wood-4-seater-dining-set-in-scratch-resistant-provincial-teak-finish-2287841.html',
      'Primary Material': 'Seasoned Solid Sheesham Wood',
      'Finish': 'Provincial Teak Protective Coat',
      'Seating Capacity': '4 Seater (1 Table + 4 Chairs)',
      'Assembly': 'Carpenter Assembly Provided by Odessy in Chennai',
      'Delivery': 'Free Safe Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '114 x 89 x 76 cm (45 x 35 x 30 in)' },
      { label: 'Chair (W x D x H)', value: '43 x 43 x 86 cm (17 x 17 x 34 in)' },
      { label: 'Chair Seating Height', value: '45.7 cm (18 in)' },
      { label: 'Tabletop Thickness', value: '22 mm' }
    ],
    materials: ['Solid Sheesham Wood', 'Polyurethane Scratch-Resistant Sealer'],
    variants: [
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak', colorHex: '#A16207', finishType: 'wood' },
      { name: 'Rustic Teak', colorHex: '#3B1F0B', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships within 2 - 4 Days in Chennai',
    warranty: '60 Months (5 Years) Manufacturer Warranty'
  },
  {
    id: 'bardu-sheesham-4-seater',
    name: 'Odessy Bardu Solid Sheesham 4-Seater Dining Set',
    tagline: 'Woodsworth Inspired Heavy Timber Profile with Deep Cushioned Upholstery',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 62999,
    originalPrice: 89999,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 36,
    badge: 'Plush Cushion Seating',
    isNewArrival: true,
    image: '/products/bardu_sheesham_4_seater_3x4.png',
    gallery: [
      '/products/bardu_sheesham_4_seater_3x4.png',
      '/products/bardu_sheesham_4_seater_env.png'
    ],
    description: 'Inspired by Woodsworth\'s premium Bardu collection: a heavy timber 4-seater solid Sheesham wood suite paired with four deep-cushioned upholstered dining chairs. Combines substantial solid wood construction with high-resilience foam padding for luxurious extended dining comfort.',
    features: [
      'Substantial heavy-timber construction with premium chamfered edges',
      'Four dining chairs with 50 mm high-resilience cold-cure foam cushion seats',
      'Upholstered in stain-resistant textured woven fabric for easy cleaning',
      'Treated with anti-termite and moisture-resistant multi-layer sealant',
      'Timeless Indian rosewood grains with natural chatoyancy'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Bardu Sheesham Wood 4 Seater Dining Set',
      'Pepperfry Product ID': '2017366',
      'Reference URL': 'https://www.pepperfry.com/product/bardu-sheesham-wood-4-seater-dining-set-in-scratch-resistant-provincial-teak-finish-2017366.html',
      'Primary Material': 'Solid Sheesham Wood',
      'Chair Cushion': '50 mm High-Resilience Cold-Cure Foam',
      'Upholstery': 'Stain-Resistant Textured Linen Blend',
      'Finish': 'Provincial Teak Finish',
      'Seating Capacity': '4 Seater (1 Table + 4 Cushioned Chairs)',
      'Assembly': 'Carpenter Assembly Included',
      'Delivery': 'Free Home Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '114 x 89 x 76 cm (45 x 35 x 30 in)' },
      { label: 'Chair (W x D x H)', value: '44 x 44 x 89 cm (17.5 x 17.5 x 35 in)' },
      { label: 'Chair Seating Height', value: '48 cm (19 in)' },
      { label: 'Cushion Density', value: '32 kg/m³ High Resilience' }
    ],
    materials: ['Solid Sheesham Wood', 'High-Resilience Cold-Cure Foam', 'Textured Linen-Blend Upholstery'],
    variants: [
      { name: 'Provincial Teak with Oatmeal Fabric', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak with Charcoal Fabric', colorHex: '#A16207', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships within 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'amalfi-sheesham-6-seater',
    name: 'Odessy Amalfi Sheesham 6-Seater Dining Set with Porcelain Top',
    tagline: 'Woodsworth Inspired Luxury Porcelain Surface on Kiln-Dried Solid Hardwood',
    category: 'furniture',
    subcategory: 'Dining Table and Chairs',
    price: 67999,
    originalPrice: 96999,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 58,
    badge: 'Porcelain Top Luxury',
    isNewArrival: true,
    image: '/products/amalfi_sheesham_6_seater_3x4.jpeg',
    gallery: [
      '/products/amalfi_sheesham_6_seater_3x4.jpeg',
      '/products/amalfi_sheesham_6_seater_env.jpeg'
    ],
    description: 'Inspired by Woodsworth\'s flagship Amalfi collection: grand 6-seater dining set combining a solid Sheesham timber chassis with a heat-resistant, scratch-proof polished porcelain tabletop. Includes six matching solid Sheesham dining chairs with curved backrests and cushioned seating.',
    features: [
      'High-grade polished porcelain tabletop impervious to heat, oil, curries, and scratches',
      'Solid kiln-dried Sheesham hardwood timber base providing exceptional weight support',
      'Spacious 145 cm dining area accommodating 6 diners comfortably',
      'Includes 6 matching Sheesham dining chairs with curved ergonomic back support',
      'Seamless fusion of natural Indian hardwood warmth and modern porcelain elegance'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Amalfi Sheesham Wood 6 Seater Dining Set',
      'Pepperfry Product ID': '1961605',
      'Reference URL': 'https://www.pepperfry.com/product/amalfi-sheesham-wood-6-seater-dining-set-in-provincial-teak-finish-with-porcelain-top-1961605.html',
      'Tabletop Surface': 'Heat & Scratch Resistant Polished Porcelain',
      'Under-Structure': 'Solid Kiln-Dried Sheesham Wood (Dalbergia sissoo)',
      'Finish': 'Provincial Teak',
      'Total Set Weight': 'Approx. 110 kg',
      'Seating Capacity': '6 Seater (1 Table + 6 Chairs)',
      'Assembly': 'White-Glove Two-Person Assembly in Chennai',
      'Delivery': 'Free Scheduled Crate Delivery in Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '145 x 89 x 76 cm (57 x 35 x 30 in)' },
      { label: 'Chair (W x D x H)', value: '46 x 48 x 91 cm (18 x 19 x 36 in)' },
      { label: 'Chair Seating Height', value: '45.7 cm (18 in)' },
      { label: 'Table Weight Capacity', value: '160 kg' }
    ],
    materials: ['Porcelain Tabletop Overlay', 'Solid Sheesham Wood Frame', 'Moulded HR Foam', 'Upholstered Fabric'],
    variants: [
      { name: 'Provincial Teak with Ivory Porcelain', colorHex: '#F8FAFC', finishType: 'wood' },
      { name: 'Dark Walnut with Slate Porcelain', colorHex: '#334155', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 5 - 7 Days with White Glove Delivery',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'amanda-fabric-2-seater',
    name: 'Odessy Amanda Modern 2-Seater Fabric Sofa',
    tagline: 'CasaCraft Inspired Scandinavian Compact Loveseat with High-Resilience Foam',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 44999,
    originalPrice: 66999,
    currency: '₹',
    rating: 4.93,
    reviewsCount: 47,
    badge: 'Compact Apartment Favorite',
    isBestSeller: true,
    image: '/products/amanda_fabric_2_seater_3x4.jpeg',
    gallery: [
      '/products/amanda_fabric_2_seater_3x4.jpeg',
      '/products/amanda_fabric_2_seater_env.png'
    ],
    description: 'Inspired by CasaCraft’s iconic Amanda collection: a tailored 2-seater loveseat sofa engineered for space-efficient contemporary living. Features heavy 400 GSM woven fabric upholstery, pocket spring seat cushioning with 28D high-resilience cold-cure foam, and a reinforced kiln-dried Red Meranti solid hardwood frame with tapered wood legs.',
    features: [
      'Compact 2-seater profile designed for urban apartments, bedrooms, and executive cabins',
      'Heavy-duty 400 GSM tear-resistant textured fabric tested for 50,000+ Martindale rubs',
      'Pocket spring foundation paired with 28D High Resilience cold-cure polyurethane foam',
      'Kiln-dried Red Meranti solid hardwood frame with reinforced stress corner blocks',
      'Solid tapered hardwood stile legs providing 15 cm floor cleaning clearance'
    ],
    specs: {
      'Pepperfry Reference': 'CasaCraft Amanda Fabric 2 Seater Sofa in Charcoal Grey',
      'Pepperfry Product ID': '1941914',
      'Reference URL': 'https://www.pepperfry.com/product/amanda-fabric-2-seater-sofa-in-charcoal-grey-colour-1941914.html',
      'Frame Material': 'Solid Red Meranti Wood & Hardwood Corner Blocks',
      'Upholstery': 'Premium Textured Polyester Blend (400 GSM, 50,000+ Rubs)',
      'Seating Mechanism': 'Individual Pocket Springs with High-Tensile Webbing',
      'Foam Specification': '28D High-Resilience (HR) Cold-Cure Foam + Virgin Fiber Backfill',
      'Seating Capacity': '2 Seater (Weight capacity up to 220 kg)',
      'Leg Finish': 'Solid Hardwood Tapered Legs',
      'Assembly': 'Pre-assembled / White-Glove Installation Included',
      'Delivery': 'Free Scheduled Home Delivery in Chennai'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '142 x 79 x 86 cm (56 x 31 x 34 in)' },
      { label: 'Seating Height', value: '44 cm (17.5 in)' },
      { label: 'Seating Depth', value: '53 cm (21 in)' },
      { label: 'Ground Clearance', value: '15 cm (6 in)' }
    ],
    materials: ['Solid Red Meranti Wood', '400 GSM Woven Fabric', '28D High-Resilience Foam', 'Pocket Springs'],
    variants: [
      { name: 'Steel Charcoal Grey', colorHex: '#374151', finishType: 'matte' },
      { name: 'Sandy Brown Oatmeal', colorHex: '#D97706', finishType: 'matte' },
      { name: 'Beige Cream', colorHex: '#E5E7EB', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'cannes-fabric-3-seater',
    name: 'Odessy Cannes Contemporary 3-Seater Fabric Sofa',
    tagline: 'CasaCraft Inspired Deep-Lounge Sofa with S-Spring Suspension & Track Arms',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 82999,
    originalPrice: 120999,
    currency: '₹',
    rating: 4.97,
    reviewsCount: 64,
    badge: 'Luxury 3-Seater',
    isBestSeller: true,
    image: '/products/cannes_fabric_3_seater_3x4.jpeg',
    gallery: [
      '/products/cannes_fabric_3_seater_3x4.jpeg',
      '/products/cannes_fabric_3_seater_env.jpeg'
    ],
    description: 'Inspired by CasaCraft’s flagship Cannes 3-seater collection: an expansive, deep-lounge sofa wrapped in rich midnight blue 450 GSM woven polyester fabric. Features wide structured track armrests, multi-layer S-spring suspension with elastic webbing, and dual-density pure foam seat cushions (24D/28D/30D) with 120 mm thickness for plush, long-lasting support.',
    features: [
      'Grand 211 cm width providing spacious and relaxed 3-seater living room lounging',
      'High-GSM 450 g/m² tear-resistant polyester fabric with rich weave texture',
      'High-tensile S-spring and webbing belt suspension system preventing center sag',
      '120 mm thick pure foam seat slab (24D/28D/30D multi-density foam)',
      'Virgin conjugated polyester staple fiber backrest cushions for pillow-soft support'
    ],
    specs: {
      'Pepperfry Reference': 'CasaCraft Cannes Fabric 3 Seater Sofa in Blue Colour',
      'Pepperfry Product ID': '1976077',
      'Reference URL': 'https://www.pepperfry.com/product/cannes-fabric-3-seater-sofa-in-blue-colour-1976077.html',
      'Frame Material': 'Commercial Marine-Grade Plywood & Kiln-Dried Solid Wood',
      'Upholstery': 'Heavy-Duty 450 GSM Polyester Woven Fabric',
      'Suspension': 'Carbon Steel S-Spring System + High-Tensile Webbing Belt',
      'Cushion Core': '120 mm Pure Polyurethane Foam (24D/28D/30D Grade)',
      'Backrest Filling': 'Virgin Conjugated Polyester Staple Fiber',
      'Total Weight': '59 kg (Solid Structural Chassis)',
      'Seating Capacity': '3 Seater (Weight capacity up to 300 kg)',
      'Assembly': 'White-Glove 2-Person Assembly in Chennai',
      'Delivery': 'Free Protected Crate Delivery in Chennai'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '211 x 97 x 93 cm (83 x 38 x 36.5 in)' },
      { label: 'Seating Depth', value: '60 cm (23.5 in)' },
      { label: 'Seating Height', value: '46 cm (18 in)' },
      { label: 'Ground Clearance', value: '20 cm (8 in)' }
    ],
    materials: ['Commercial Plywood & Solid Wood Frame', '450 GSM Polyester Fabric', 'Multi-Density Pure Foam (24D/28D/30D)', 'Carbon Steel S-Springs'],
    variants: [
      { name: 'Midnight Royal Blue', colorHex: '#1E3A8A', finishType: 'matte' },
      { name: 'Dark Charcoal Slate', colorHex: '#334155', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Ships in 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'montez-velvet-lhs-sectional',
    name: 'Odessy Montez Velvet LHS Sectional Sofa (3 + Lounger)',
    tagline: 'CasaCraft Inspired L-Shaped Sectional with Dual-Tone Velvet & Deep Chaise',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 94999,
    originalPrice: 129999,
    currency: '₹',
    rating: 4.98,
    reviewsCount: 52,
    badge: 'L-Shaped Sectional Flagship',
    isNewArrival: true,
    image: '/products/montez_velvet_sectional_3x4.jpeg',
    gallery: [
      '/products/montez_velvet_sectional_3x4.jpeg',
      '/products/montez_velvet_sectional_env.jpeg'
    ],
    description: 'Inspired by CasaCraft’s flagship Montez L-shaped sectional collection: an expansive 3-seater plus left-hand chaise lounger sofa upholstered in opulent dual-tone velvet fabric. Built on a heavy Red Meranti solid hardwood frame with reinforced joints, 32D high-resilience foam, pocket coil core, and tailored lumbar cushions for grand living rooms.',
    features: [
      'Generous 264 cm width with dedicated left-hand side (LHS) chaise lounge',
      'Opulent 400 GSM micro-velvet upholstery with subtle two-tone sheen',
      'Pocket spring base paired with 32D high-resilience foam for zero-sink longevity',
      'Red Meranti seasoned solid wood chassis engineered for decades of structural stability',
      'Includes complementary designer bolster and accent scatter cushions'
    ],
    specs: {
      'Pepperfry Reference': 'CasaCraft Montez Velvet LHS Sectional Sofa (3 + Lounger) in Grey & Beige',
      'Pepperfry Product ID': '2244211',
      'Reference URL': 'https://www.pepperfry.com/product/montez-velvet-lhs-sectional-sofa-in-grey-beige-colour-2244211.html',
      'Frame Material': 'Seasoned Red Meranti Hardwood & BWP Structural Ply',
      'Upholstery': 'Premium Velvet Fabric (400 GSM, 50,000+ Martindale Rubs)',
      'Seating Core': 'Pocket Coils with 32D High-Resilience Moulded Foam',
      'Orientation': 'LHS (Left Hand Side Facing Lounger)',
      'Total Weight': '68 kg',
      'Seating Capacity': '4 - 5 Persons (Weight capacity up to 400 kg)',
      'Assembly': 'White-Glove Installation Included',
      'Delivery': 'Free Room-of-Choice Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '264 x 165 x 89 cm (104 x 65 x 35 in)' },
      { label: '3-Seater Section', value: '175 x 89 x 89 cm (69 x 35 x 35 in)' },
      { label: 'Chaise Lounger Section', value: '89 x 165 x 89 cm (35 x 65 x 35 in)' },
      { label: 'Seating Height', value: '46 cm (18 in)' }
    ],
    materials: ['Red Meranti Solid Hardwood', '400 GSM Premium Velvet', '32D High-Resilience Foam', 'Pocket Coils'],
    variants: [
      { name: 'Slate Grey & Warm Beige Velvet', colorHex: '#64748B', finishType: 'leather' },
      { name: 'Mocha Brown & Champagne Velvet', colorHex: '#78350F', finishType: 'leather' }
    ],
    inStock: true,
    leadTime: 'Ships in 4 - 7 Days with White Glove Delivery',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'pescara-velvet-3-seater',
    name: 'Odessy Pescara Luxury 3-Seater Velvet Sofa',
    tagline: 'CasaCraft Inspired Premium Velvet Sofa with Curved Bolsters & Deep Cushioning',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 61999,
    originalPrice: 73499,
    currency: '₹',
    rating: 4.95,
    reviewsCount: 39,
    badge: 'Premium Velvet Luxury',
    isNewArrival: true,
    image: '/products/pescara_velvet_3_seater_3x4.jpeg',
    gallery: [
      '/products/pescara_velvet_3_seater_3x4.jpeg',
      '/products/pescara_velvet_3_seater_env.jpeg'
    ],
    description: 'Inspired by CasaCraft’s bespoke Pescara collection: a sumptuous 3-seater sofa draped in shimmering anti-pilling velvet fabric. Features softly curved bolster armrests, continuous deep seat cushioning over pocket springs and 32D cold-cure foam, and a reinforced commercial-grade solid wood chassis with brushed champagne brass accent feet.',
    features: [
      'Silky smooth 420 GSM anti-pilling velvet upholstery with lustrous multi-angle sheen',
      'Continuous deep seat cushion with pocket springs and high-density 32D foam',
      'Sculpted organic bolster armrests offering comfortable head and arm relaxation',
      'Commercial moisture-resistant marine-grade plywood and solid wood internal frame',
      'Brushed metallic champagne accent feet providing 15 cm floor elevation'
    ],
    specs: {
      'Pepperfry Reference': 'CasaCraft Pescara Velvet 3 Seater Sofa in Beige Colour',
      'Pepperfry Product ID': '2244199',
      'Reference URL': 'https://www.pepperfry.com/product/pescara-velvet-3-seater-sofa-in-beige-colour-2244199.html',
      'Frame Material': 'Commercial Marine-Grade Plywood & Kiln-Dried Solid Wood',
      'Upholstery': 'Anti-Pilling Luxury Velvet (420 GSM, 45,000+ Rubs)',
      'Cushion Core': 'Pocket Springs with 32D Cold-Cure High-Resilience Foam',
      'Seating Firmness': 'Medium-Soft Plush Comfort',
      'Total Weight': '40 kg',
      'Seating Capacity': '3 Seater (Weight capacity up to 270 kg)',
      'Assembly': 'Carpenter Delivery & Placement Included',
      'Delivery': 'Free Safe Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '201 x 86 x 89 cm (79 x 34 x 35 in)' },
      { label: 'Seating Height', value: '53.3 cm (21 in)' },
      { label: 'Seating Depth', value: '56 cm (22 in)' },
      { label: 'Ground Clearance', value: '15 cm (6 in)' }
    ],
    materials: ['Commercial Plywood & Solid Wood Frame', '420 GSM Velvet Fabric', '32D Cold-Cure Foam', 'Pocket Springs'],
    variants: [
      { name: 'Champagne Warm Beige Velvet', colorHex: '#D4B996', finishType: 'leather' },
      { name: 'Pearl Ivory White Velvet', colorHex: '#FDFBF7', finishType: 'leather' },
      { name: 'Shadow Charcoal Grey Velvet', colorHex: '#4B5563', finishType: 'leather' }
    ],
    inStock: true,
    leadTime: 'Ships within 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'radom-sheesham-3-seater',
    name: 'Odessy Radom Solid Sheesham 3-Seater Sofa',
    tagline: 'Woodsworth Inspired 100% Solid Sheesham Hardwood with Removable Cushions',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 45999,
    originalPrice: 54999,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 51,
    badge: '100% Solid Timber',
    isBestSeller: true,
    image: '/products/radom_sheesham_3_seater_3x4.jpeg',
    gallery: [
      '/products/radom_sheesham_3_seater_3x4.jpeg',
      '/products/radom_sheesham_3_seater_env.jpeg'
    ],
    description: 'Inspired by Woodsworth’s timeless Radom collection: an authentic 100% solid Sheesham wood (Indian Rosewood) 3-seater sofa framed with traditional mortise-and-tenon craftsmanship in Provincial Teak finish. Paired with 100 mm thick 32 kg/m³ high-resilience cold-cure foam seat cushions and ergonomic fiber backrest pillows in removable, washable textured linen-cotton fabric.',
    features: [
      'Crafted from 100% solid kiln-dried Sheesham wood (Dalbergia sissoo) for heirloom durability',
      'Hand-finished in Provincial Teak with moisture-resistant and anti-termite sealant',
      'Thick 100 mm 32 kg/m³ high-resilience cold-cure foam seat slabs providing firm spinal support',
      'Zip-removable, washable linen-cotton blend cushion covers for easy household maintenance',
      'Open-slat side and back panel design allowing natural air circulation in Chennai climate'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Radom Sheesham Wood 3 Seater Sofa in Provincial Teak Finish',
      'Pepperfry Product ID': '1940991',
      'Reference URL': 'https://www.pepperfry.com/product/radom-sheesham-wood-3-seater-sofa-in-provincial-teak-finish-1940991.html',
      'Wood Material': '100% Solid Kiln-Dried Sheesham Wood (Dalbergia sissoo)',
      'Finish': 'Provincial Teak Hand-Rubbed Melamine Matte',
      'Cushion Slabs': '100 mm 32 kg/m³ High-Resilience (HR) Cold-Cure Foam',
      'Upholstery Fabric': 'Removable & Washable Linen-Cotton Blend (380 GSM)',
      'Backrest Pillows': 'High-Density Virgin Siliconized Fiber Fill',
      'Total Weight': '40 kg (Solid Timber Frame)',
      'Seating Capacity': '3 Seater (Weight capacity up to 320 kg)',
      'Assembly': 'Pre-assembled / Doorstep Setup by Odessy Carpenter',
      'Delivery': 'Free Safe Crate Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (L x W x H)', value: '183 x 69 x 72 cm (72 x 27 x 28.5 in)' },
      { label: 'Seating Height', value: '43 cm (17 in)' },
      { label: 'Seating Depth', value: '51 cm (20 in)' },
      { label: 'Cushion Thickness', value: '100 mm (4 in)' }
    ],
    materials: ['Solid Sheesham Wood Frame', '32 kg/m³ Cold-Cure Foam', 'Washable Linen-Cotton Fabric', 'Melamine Protective Sealant'],
    variants: [
      { name: 'Provincial Teak with Mocha Mousse Cushion', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak with Oatmeal Beige Cushion', colorHex: '#A16207', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '60 Months (5 Years) Manufacturer Warranty on Sheesham Frame'
  },
  {
    id: 'marlow-sheesham-king-bed',
    name: 'Odessy Marlow Solid Sheesham King Size Storage Bed',
    tagline: 'Amberville Inspired Handcrafted Solid Rosewood Bed with Box Storage',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 74999,
    originalPrice: 104999,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 64,
    badge: 'Master Suite King',
    isBestSeller: true,
    image: '/products/marlow_sheesham_king_bed_3x4.jpeg',
    gallery: [
      '/products/marlow_sheesham_king_bed_3x4.jpeg',
      '/products/marlow_sheesham_king_bed_env.jpeg',
      '/products/bed-marlow-sheesham-king-size.png'
    ],
    description: 'Inspired by Amberville’s classic Marlow collection: a grand king-size bedstead handcrafted from 100% seasoned solid Sheesham wood (Indian Rosewood). Features an architectural slatted timber headboard, heavy structural side rails, and high-capacity compartmentalized box storage underneath to organize quilts, pillows, and extra bedding effortlessly.',
    features: [
      'Crafted from 100% seasoned, kiln-dried solid Sheesham wood (Dalbergia sissoo)',
      'Concealed multi-compartment box storage with heavy-gauge MDF baseboard',
      'Classic architectural slatted headboard providing optimal back support for reading',
      'Reinforced internal hardwood support ribs engineered for high load bearing',
      'Multi-step polyurethane lacquer finish protecting against scratches, moisture, and pests'
    ],
    specs: {
      'Pepperfry Reference': 'Amberville Marlow Sheesham Wood King Size Bed in Honey Oak Finish with Box Storage',
      'Pepperfry Product ID': '1970223',
      'Reference URL': 'https://www.pepperfry.com/product/marlow-sheesham-wood-king-size-bed-in-honey-oak-finish-with-box-storage-1970223.html',
      'Primary Material': '100% Solid Sheesham Wood (Indian Rosewood)',
      'Finish': 'Warm Honey Oak Polyurethane Luster',
      'Storage Type': 'Manual Lift-On Box Storage (4 Internal Compartments)',
      'Recommended Mattress Size': '78 L x 72 W in (198 x 183 cm)',
      'Bed Size': 'King Size',
      'Assembly': 'White-Glove Carpenter Assembly Included Across Chennai',
      'Delivery': 'Free Scheduled Home Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '117 x 188 x 215 cm (46 x 74 x 84.6 in)' },
      { label: 'Recommended Mattress', value: '198 x 183 cm (78 x 72 in)' },
      { label: 'Seating / Platform Height', value: '46 cm (18 in)' },
      { label: 'Headboard Height', value: '117 cm (46 in)' }
    ],
    materials: ['Solid Sheesham Wood (Dalbergia sissoo)', 'Heavy MDF Storage Base', 'Polyurethane Protective Sealant'],
    variants: [
      { name: 'Warm Honey Oak', colorHex: '#A16207', finishType: 'wood' },
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 3 - 5 Days with White Glove Assembly in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'tulsa-sheesham-queen-bed',
    name: 'Odessy Tulsa Solid Sheesham Queen Size Storage Bed',
    tagline: 'Woodsworth Inspired Architectural Solid Timber Queen Bed with 4-Box Storage',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 45219,
    originalPrice: 59299,
    currency: '₹',
    rating: 4.89,
    reviewsCount: 58,
    badge: 'Apartment Favorite',
    isBestSeller: true,
    image: '/products/bed-tulsa-sheesham-queen-size.png',
    gallery: [
      '/products/bed-tulsa-sheesham-queen-size.png',
      '/products/bed-tulsa-sheesham-queen-size-env.png'
    ],
    description: 'Inspired by Woodsworth’s iconic Tulsa collection: an elegant queen-size storage bed sculpted from solid kiln-dried Sheesham hardwood in a lustrous Provincial Teak finish. Designed for modern urban apartments, featuring 4 generous box storage quadrants with high load capacity and a clean-lined wooden paneled headboard.',
    features: [
      '100% solid Sheesham hardwood construction with natural rich timber grain patterns',
      '4 partitioned storage compartments with heavy-duty lift-on panels for organized storage',
      'Ergonomically angled solid timber headboard with contemporary grooved paneling',
      'Heavy timber construction (124 kg) ensuring lifetime rigidity and zero creaking',
      'Pre-treated for termite resistance and sealed against Chennai humidity'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Tulsa Queen Size Bed with Storage in Provincial Teak Finish',
      'Pepperfry Product ID': '1956661 (SKU: FM1421438-P-WH19566)',
      'Reference URL': 'https://www.pepperfry.com/product/tulsa-queen-size-bed-with-storage-in-provincial-teak-finish-by-woodsworth-1956661.html',
      'Primary Material': 'Seasoned Solid Sheesham Hardwood',
      'Finish': 'Provincial Teak Hand-Rubbed Melamine Matte',
      'Storage Type': '4-Quadrant Box Storage (Drawers/Boxes: 9H x 60W x 36D & 9H x 60W x 42D in)',
      'Bed Weight': '124 kg',
      'Recommended Mattress Size': '78 L x 60 W in (198 x 152 cm)',
      'Assembly': 'Carpenter Assembly Provided by Odessy in Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '89 x 163 x 208 cm (35 x 64 x 82 in)' },
      { label: 'Recommended Mattress', value: '198 x 152 cm (78 x 60 in)' },
      { label: 'Platform / Seating Height', value: '38 cm (15 in)' },
      { label: 'Bed Weight', value: '124 kg' }
    ],
    materials: ['Solid Sheesham Wood (Indian Rosewood)', 'Engineered Wood Base Panels', 'Protective Melamine Sealant'],
    variants: [
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' },
      { name: 'Honey Oak', colorHex: '#A16207', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'zephyr-sheesham-hydraulic-bed',
    name: 'Odessy Zephyr Solid Sheesham Hydraulic Storage Bed',
    tagline: 'Woodsworth Inspired Gas-Lift Hydraulic Storage Bed in Solid Sheesham Wood',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 85499,
    originalPrice: 120749,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 71,
    badge: 'Effortless Gas-Lift',
    isBestSeller: true,
    image: '/products/bed-zephyr-sheesham-hydraulic.png',
    gallery: [
      '/products/bed-zephyr-sheesham-hydraulic.png',
      '/products/bed-zephyr-sheesham-hydraulic-env.png'
    ],
    description: 'Inspired by Woodsworth’s flagship Zephyr collection: a luxury king-size bed crafted from solid Sheesham wood fitted with premium German-engineered gas-lift hydraulic struts. Allows effortless single-handed lifting of the mattress base to access full-length uninterrupted underbed storage without moving the bedding.',
    features: [
      'Dual high-tensile German hydraulic gas-lift pistons for feather-light base lifting',
      'Unbroken full-length under-bed storage compartment maximizing storage volume',
      'Solid Sheesham hardwood bedstead with rich natural timber figuring and grain',
      'Heavy metal frame reinforcement with anti-slip mattress retention bracket',
      'Durable scratch-resistant polyurethane clear-coat finish on solid wood'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Zephyr Sheesham Wood King Size Bed in Honey Oak Finish with Hydraulic Storage',
      'Pepperfry Product ID': '1959741',
      'Reference URL': 'https://www.pepperfry.com/product/zephyr-sheesham-wood-king-size-bed-in-honey-oak-finish-with-hydraulic-storage-1959741.html',
      'Primary Material': '100% Solid Sheesham Wood (Dalbergia sissoo)',
      'Lifting Mechanism': 'Dual Gas-Pump Hydraulic Struts (Tested for 20,000+ Cycles)',
      'Finish': 'Honey Oak Polyurethane Luster',
      'Storage Type': 'Hydraulic Lift-Up Full Bed Base Storage',
      'Recommended Mattress Size': '78 L x 72 W in (198 x 183 cm)',
      'Assembly': 'White-Glove Hydraulic Specialist Installation Included',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '102 x 189 x 206 cm (40 x 74.5 x 81 in)' },
      { label: 'Recommended Mattress', value: '198 x 183 cm (78 x 72 in)' },
      { label: 'Seating / Platform Height', value: '41 cm (16 in)' },
      { label: 'Internal Storage Depth', value: '30 cm (12 in)' }
    ],
    materials: ['Solid Sheesham Wood', 'Powder-Coated Steel Hydraulic Frame', 'German Gas Struts'],
    variants: [
      { name: 'Warm Honey Oak', colorHex: '#A16207', finishType: 'wood' },
      { name: 'Provincial Teak', colorHex: '#78350F', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 3 - 5 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'eternia-modern-3-door-wardrobe',
    name: 'Odessy Kosmo Eternia 3-Door Wardrobe with Dressing Mirror',
    tagline: 'Spacewood Inspired Melamine & Membrane 3-Door Wardrobe with Internal Security Locker',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 56499,
    originalPrice: 76624,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 43,
    badge: 'Full-Length Mirror',
    image: '/products/eternia_modern_3_door_wardrobe_3x4.jpeg',
    gallery: [
      '/products/eternia_modern_3_door_wardrobe_3x4.jpeg',
      '/products/eternia_modern_3_door_wardrobe_env.jpeg'
    ],
    description: 'Inspired by Spacewood’s Kosmo Eternia collection: an architecturally proportioned 3-door wardrobe crafted from high-density engineered wood in a sophisticated Modern Ash finish. Incorporates a central full-length dressing mirror, internal security locker drawer with lock & key, full-drop hanging section, and multi-tier shelving.',
    features: [
      'Built with European standard high-density engineered wood with moisture-resistant melamine',
      'Central full-length silvered dressing mirror with beveled protective edge',
      'Internal private security locker drawer with brass key lock for jewelry & valuables',
      'Heavy-duty chrome hanging rod tested for 40+ garments with zero sagging',
      'Soft-close German hinges tested for 50,000+ open-and-close cycles'
    ],
    specs: {
      'Pepperfry Reference': 'Spacewood Kosmo Eternia 3 Door Wardrobe in Modern Ash Finish',
      'Pepperfry Product ID': '1941214',
      'Reference URL': 'https://www.pepperfry.com/product/kosmo-eternia-3-door-wardrobe-in-modern-ash-finish-by-spacewood-1941214.html',
      'Primary Material': 'High-Density Engineered Wood (Particle Board) with Melamine & Membrane Finish',
      'Finish': 'Modern Ash & Textured Wenge',
      'Door Type': '3 Hinged Doors (1 Mirrored Center Door + 2 Solid Panels)',
      'Security': 'Integrated Keyed Drawer Locker & Outer Door Locks',
      'Certification': 'ISO:9001, 14001, 18001 Certified Manufacturing',
      'Assembly': 'Professional In-Home Installation Included Across Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '210 x 135.4 x 53.5 cm (83 x 53 x 21 in)' },
      { label: 'Hanging Section Height', value: '110 cm (43.3 in)' },
      { label: 'Mirror Dimensions', value: '180 x 38 cm (71 x 15 in)' },
      { label: 'Internal Shelves', value: '5 Deep Storage Compartments' }
    ],
    materials: ['High-Density Engineered Wood', 'Melamine Protective Foil', 'Silvered Float Glass Mirror', 'Chrome Alloy Hardware'],
    variants: [
      { name: 'Modern Ash & Slate Grey', colorHex: '#4B5563', finishType: 'matte' },
      { name: 'Natural Wenge Teak', colorHex: '#261C14', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'verta-modern-4-door-wardrobe',
    name: 'Odessy Verta 4-Door Wardrobe with Dual Mirrors & Drawers',
    tagline: 'Spacewood Inspired Grand 4-Door Storage Suite with External Smooth-Glide Drawers',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 41999,
    originalPrice: 60999,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 62,
    badge: 'Spacious Family Storage',
    isBestSeller: true,
    image: '/products/verta_modern_4_door_wardrobe_3x4.jpeg',
    gallery: [
      '/products/verta_modern_4_door_wardrobe_3x4.jpeg',
      '/products/verta_modern_4_door_wardrobe_env.jpeg'
    ],
    description: 'Inspired by Spacewood’s Verta collection: an expansive 4-door wardrobe in a warm Santana Oak finish designed for comprehensive family bedroom organization. Features dual full-length center mirrors, two external smooth-glide pull-out drawers, twin heavy-duty garment hanging zones, and 8 deep partitioned shelves.',
    features: [
      'Expansive 4-door wardrobe footprint designed for complete master suite wardrobe organization',
      'Dual center dressing mirrors creating a luxurious vanity focal point in the bedroom',
      'Two external telescopic smooth-glide drawers for easy-access everyday apparel & accessories',
      'Twin full-drop garment hanging rails for formalwear, sarees, suits, and coats',
      'Termite, fungus, and water-resistant membrane surface engineered for Chennai climate'
    ],
    specs: {
      'Pepperfry Reference': 'Spacewood Verta 4 Door Wardrobe With Mirror in Santana Oak Finish',
      'Pepperfry Product ID': '1945398',
      'Reference URL': 'https://www.pepperfry.com/product/verta-4-door-wardrobe-with-mirror-in-santana-oak-finish-by-spacewood-1945398.html',
      'Primary Material': 'High-Density Engineered Particle Board with Melamine Finish',
      'Finish': 'Santana Oak & Bamboo Flute Textured Accent',
      'Door Configuration': '4 Hinged Doors (2 Center Mirrored + 2 Wood Panels)',
      'Drawers': '2 External Bottom Drawers with Telescopic Ball-Bearing Slides',
      'Item Weight': 'Approx. 175 kg',
      'Assembly': 'Carpenter Installation Included Across Chennai',
      'Delivery': 'Free Doorstep Delivery Across Chennai'
    },
    dimensions: [
      { label: 'Overall (H x W x D)', value: '203 x 160 x 53 cm (80 x 63 x 21 in)' },
      { label: 'Hanging Rod Drop', value: '105 cm (41.3 in)' },
      { label: 'External Drawer (W x H x D)', value: '75 x 18 x 45 cm (29.5 x 7 x 17.7 in)' },
      { label: 'Wardrobe Weight', value: '175 kg' }
    ],
    materials: ['Engineered Particle Board', 'Melamine & Bamboo Flute Foil', 'Float Glass Mirrors', 'Powder-Coated Steel Hardware'],
    variants: [
      { name: 'Santana Oak with Dual Mirrors', colorHex: '#A3774B', finishType: 'wood' },
      { name: 'Natural Teak with Dual Mirrors', colorHex: '#6B4423', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days in Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
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
    image: '/products/decorsmart_modern_pooja_cabinet_3x4.jpeg',
    gallery: [
      '/products/decorsmart_modern_pooja_cabinet_3x4.jpeg',
      '/products/decorsmart_modern_pooja_cabinet_env.jpeg'
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
    image: '/products/alaya_wall_mount_mandir_3x4.png',
    gallery: [
      '/products/alaya_wall_mount_mandir_3x4.png',
      '/products/alaya_wall_mount_mandir_env.jpeg'
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
    image: '/products/sacred_home_designer_mandir_3x4.jpeg',
    gallery: [
      '/products/sacred_home_designer_mandir_3x4.jpeg',
      '/products/sacred_home_designer_mandir_env.jpeg'
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
  ,
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
    image: '/products/godrej_slimline_2_door_almirah_3x4.jpeg',
    gallery: [
      '/products/godrej_slimline_2_door_almirah_3x4.jpeg',
      '/products/godrej_slimline_2_door_almirah_env.jpeg'
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
    image: '/products/godrej_slimline_3_door_almirah_3x4.jpeg',
    gallery: [
      '/products/godrej_slimline_3_door_almirah_3x4.jpeg',
      '/products/godrej_slimline_3_door_almirah_env.jpeg'
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
    image: '/products/godrej_slimline_internal_locker_wardrobe_3x4.jpeg',
    gallery: [
      '/products/godrej_slimline_internal_locker_wardrobe_3x4.jpeg',
      '/products/godrej_slimline_internal_locker_wardrobe_env.jpeg'
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
    image: '/products/godrej_slimline_mirror_wardrobe_3x4.jpeg',
    gallery: [
      '/products/godrej_slimline_mirror_wardrobe_3x4.jpeg',
      '/products/godrej_slimline_mirror_wardrobe_env.jpeg'
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
    image: '/products/godrej_centurion_luxury_almirah_3x4.jpeg',
    gallery: [
      '/products/godrej_centurion_luxury_almirah_3x4.jpeg',
      '/products/godrej_centurion_luxury_almirah_env.jpeg'
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
  ,
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
    image: '/products/odessy_striker_single_cot_3x4.jpeg',
    gallery: [
      '/products/odessy_striker_single_cot_3x4.jpeg',
      '/products/odessy_striker_single_cot_env.jpeg'
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
    image: '/products/odessy_akaba_double_cot_3x4.jpeg',
    gallery: [
      '/products/odessy_akaba_double_cot_3x4.jpeg',
      '/products/odessy_akaba_double_cot_env.jpeg'
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
    image: '/products/odessy_kabul_queen_bed_3x4.jpeg',
    gallery: [
      '/products/odessy_kabul_queen_bed_3x4.jpeg',
      '/products/odessy_kabul_queen_bed_env.jpeg'
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
    image: '/products/odessy_striker_king_bed_3x4.jpeg',
    gallery: [
      '/products/odessy_striker_king_bed_3x4.jpeg',
      '/products/odessy_striker_king_bed_env.jpeg'
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
    image: '/products/odessy_gemini_poster_bed_3x4.jpeg',
    gallery: [
      '/products/odessy_gemini_poster_bed_3x4.jpeg',
      '/products/odessy_gemini_poster_bed_env.jpeg'
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
  ,
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
    image: '/products/odessy_abbey_solid_wood_coffee_table_3x4.jpeg',
    gallery: [
      '/products/odessy_abbey_solid_wood_coffee_table_3x4.jpeg',
      '/products/odessy_abbey_solid_wood_coffee_table_env.jpeg'
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
    image: '/products/odessy_zyra_marble_coffee_table_3x4.jpeg',
    gallery: [
      '/products/odessy_zyra_marble_coffee_table_3x4.jpeg',
      '/products/odessy_zyra_marble_coffee_table_env.jpeg'
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
    image: '/products/odessy_valencia_glass_coffee_table_3x4.jpeg',
    gallery: [
      '/products/odessy_valencia_glass_coffee_table_3x4.jpeg',
      '/products/odessy_valencia_glass_coffee_table_env.jpeg'
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
    image: '/products/odessy_galliano_metal_coffee_table_3x4.jpeg',
    gallery: [
      '/products/odessy_galliano_metal_coffee_table_3x4.jpeg',
      '/products/odessy_galliano_metal_coffee_table_env.jpeg'
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
    name: 'Odessy Elvas Round Porcelain Nesting Coffee Table Set',
    tagline: 'CasaCraft Inspired 2-Piece Circular Retractable Nesting Coffee Tables with Calacatta Porcelain Top',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 14990,
    originalPrice: 22999,
    currency: '₹',
    rating: 4.91,
    reviewsCount: 96,
    badge: '2-Piece Nesting Set',
    isBestSeller: true,
    image: '/products/odessy_elvas_nesting_coffee_table_3x4.jpeg',
    gallery: [
      '/products/odessy_elvas_nesting_coffee_table_3x4.jpeg',
      '/products/odessy_elvas_nesting_coffee_table_env.jpeg'
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
  },
  {
    id: 'miranda-chenille-3-seater-sofa',
    name: 'Odessy Miranda 3-Seater Chenille Fabric Sofa',
    tagline: 'Pepperfry Woodsworth Inspired Deep-Seated Oatmeal Chenille Luxury Lounge Sofa',
    category: 'furniture',
    subcategory: 'Sofa',
    price: 29999,
    originalPrice: 45999,
    currency: '₹',
    rating: 4.92,
    reviewsCount: 68,
    badge: 'Trending Luxury',
    isBestSeller: true,
    image: '/products/sofa_miranda_chenille_3_seater_3x4.jpeg',
    gallery: [
      '/products/sofa_miranda_chenille_3_seater_3x4.jpeg',
      '/products/sofa_miranda_chenille_3_seater_env.jpeg'
    ],
    description: 'Inspired by Woodsworth by Pepperfry, the Miranda 3-seater sofa combines timeless mid-century elegance with contemporary comfort. Upholstered in high-density textured oatmeal chenille fabric, it features deep dual-layer pocket-spring seating, tailored track armrests, and kiln-dried solid wood tapered legs.',
    features: [
      'High-tensile wear-resistant oatmeal chenille upholstery with soft breathable texture',
      '32-density high-resilience foam core reinforced with pocket coil springs for sink-in comfort',
      'Kiln-dried solid Sal wood internal framework with anti-sag serpentine spring foundation',
      'Removable zipper cushion covers for easy dry-cleaning and maintenance',
      'Sturdy angled solid wood tapered legs with floor-protecting nylon glides'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth by Pepperfry Miranda 3-Seater Sofa',
      'Seating Capacity': '3 Seater',
      'Primary Material': 'Premium Textured Chenille Fabric',
      'Frame Material': 'Kiln-Dried Solid Sal Wood',
      'Foam Density': '32 kg/m³ High Resilience Polyurethane',
      'Leg Finish': 'Dark Walnut Solid Wood Tapered Legs',
      'Delivery': 'Free Doorstep Delivery in Chennai'
    },
    dimensions: [
      { label: 'Overall Dimensions (W x D x H)', value: '198.1 x 88.9 x 83.8 cm (78 x 35 x 33 in)' },
      { label: 'Seat Height', value: '45.7 cm (18 in)' },
      { label: 'Seat Depth', value: '58.4 cm (23 in)' }
    ],
    materials: ['High-Density Chenille Fabric', 'Solid Sal Wood Internal Frame', 'High-Resilience 32-D Foam', 'Walnut Wood Legs'],
    variants: [
      { name: 'Warm Oatmeal Cream', colorHex: '#E5DFD3', finishType: 'matte' },
      { name: 'Midnight Charcoal Grey', colorHex: '#374151', finishType: 'matte' }
    ],
    inStock: true,
    leadTime: 'Same Day or 2-Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Structural Warranty'
  },
  {
    id: 'gramado-sheesham-center-table-4-pouffes',
    name: 'Odessy Gramado Solid Sheesham Coffee Table with 4 Pouffes',
    tagline: 'Pepperfry Woodsworth Inspired Solid Timber Centerpiece with 4 Tucked Ottoman Stools',
    category: 'furniture',
    subcategory: 'Center Table',
    price: 18499,
    originalPrice: 29999,
    currency: '₹',
    rating: 4.94,
    reviewsCount: 92,
    badge: 'Space Saver Choice',
    isBestSeller: true,
    image: '/products/center_table_gramado_sheesham_4_pouffes_3x4.jpeg',
    gallery: [
      '/products/center_table_gramado_sheesham_4_pouffes_3x4.jpeg',
      '/products/center_table_gramado_sheesham_4_pouffes_env.jpeg'
    ],
    description: 'Inspired by Pepperfry’s bestselling Woodsworth Gramado series, this versatile square coffee table is handcrafted from 100% seasoned Indian Sheesham wood in Provincial Teak finish. Features an inset beveled tempered glass top and includes four cushioned square wooden pouffe stools that nest seamlessly under the table.',
    features: [
      '100% seasoned and kiln-dried Indian Sheesham wood with authentic grain character',
      'Includes 4 cushioned matching solid Sheesham pouffes that slide flush underneath',
      '8 mm toughened beveled safety glass tabletop resistant to thermal shock and spills',
      'Multi-coat protective polyurethane lacquer resistant to daily water rings and heat',
      'Space-saving multifunctional design ideal for entertaining guests in modern living rooms'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Gramado Solid Wood Coffee Table with 4 Stools',
      'Primary Material': '100% Solid Indian Sheesham Wood (Dalbergia sissoo)',
      'Tabletop': '8 mm Beveled Toughened Safety Glass',
      'Stool Count': '4 Upholstered Nested Pouffe Stools',
      'Finish': 'Provincial Teak Lacquer',
      'Delivery': 'Free Doorstep Delivery in Chennai'
    },
    dimensions: [
      { label: 'Table (L x W x H)', value: '88.9 x 88.9 x 45.7 cm (35 x 35 x 18 in)' },
      { label: 'Each Pouffe (L x W x H)', value: '38.1 x 38.1 x 35.5 cm (15 x 15 x 14 in)' },
      { label: 'Glass Thickness', value: '8 mm Toughened' }
    ],
    materials: ['Solid Sheesham Wood', 'Toughened Tempered Glass', 'Cushioned Fabric Upholstery'],
    variants: [
      { name: 'Provincial Teak with Cream Cushions', colorHex: '#6B3E26', finishType: 'wood' },
      { name: 'Honey Oak with Beige Cushions', colorHex: '#9A6324', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 3 Days across Chennai',
    warranty: '36 Months (3 Years) Manufacturer Warranty'
  },
  {
    id: 'denzel-sheesham-king-storage-bed',
    name: 'Odessy Denzel Solid Sheesham King Bed with Box Storage',
    tagline: 'Pepperfry Woodsworth Inspired Architectural Panelled Solid Hardwood Platform Bed',
    category: 'furniture',
    subcategory: 'Beds and Wardrobe',
    price: 44999,
    originalPrice: 69999,
    currency: '₹',
    rating: 4.9,
    reviewsCount: 57,
    badge: 'Solid Timber Flagship',
    isBestSeller: true,
    image: '/products/bed_denzel_sheesham_king_storage_3x4.jpeg',
    gallery: [
      '/products/bed_denzel_sheesham_king_storage_3x4.jpeg',
      '/products/bed_denzel_sheesham_king_storage_env.jpeg'
    ],
    description: 'Inspired by Woodsworth by Pepperfry, the Denzel King Bed is handcrafted from 100% kiln-dried solid Sheesham wood in a rich Rustic Teak finish. Features an imposing geometric grooved panel headboard, heavy timber frame, and 4-compartment box storage underneath.',
    features: [
      'Crafted from 100% seasoned, termite-resistant Indian Sheesham hardwood',
      'Tall architectural panelled headboard offering superior back support while sitting',
      'Generous 4-compartment internal box storage under top-lift engineered timber panels',
      'Rigid central steel spine with dual support legs ensuring lifetime squeak-free stability',
      'Treated with moisture-repellent polyurethane lacquer suited for coastal humidity'
    ],
    specs: {
      'Pepperfry Reference': 'Woodsworth Denzel Solid Wood King Bed with Storage',
      'Bed Size': 'King Size (Fits 78 x 72 inch Mattress)',
      'Primary Material': '100% Solid Indian Sheesham Wood (Dalbergia sissoo)',
      'Storage Type': '4-Box Modular Under-Bed Storage',
      'Finish': 'Rustic Teak Polyurethane Lustre',
      'Assembly': 'Free Carpenter Installation in Chennai'
    },
    dimensions: [
      { label: 'Overall Bed (L x W x H)', value: '208.3 x 193.0 x 106.7 cm (82 x 76 x 42 in)' },
      { label: 'Headboard Height', value: '106.7 cm (42 in)' },
      { label: 'Recommended Mattress Size', value: '198.1 x 182.9 cm (78 x 72 in)' }
    ],
    materials: ['100% Solid Sheesham Wood', 'Engineered Board Storage Decks', 'Heavy-Duty Hardware Joinery'],
    variants: [
      { name: 'Rustic Teak Finish', colorHex: '#4A2511', finishType: 'wood' },
      { name: 'Provincial Teak Finish', colorHex: '#78350F', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ready for Fast Delivery & Installation in Chennai',
    warranty: '36 Months (3 Years) Structural Warranty'
  },
  {
    id: 'ananta-teak-wood-pooja-mandir',
    name: 'Odessy Ananta Handcrafted Solid Teak Floor Pooja Mandir',
    tagline: 'Pepperfry Mudramark Inspired Traditional Carved Temple with Dome, Jali & Drawers',
    category: 'furniture',
    subcategory: 'Pooja Stand',
    price: 26999,
    originalPrice: 39999,
    currency: '₹',
    rating: 4.96,
    reviewsCount: 83,
    badge: 'Devotional Classic',
    isBestSeller: true,
    image: '/products/pooja_mandir_ananta_teak_wood_3x4.jpg',
    gallery: [
      '/products/pooja_mandir_ananta_teak_wood_3x4.jpg',
      '/products/pooja_mandir_ananta_teak_wood_env.jpeg'
    ],
    description: 'Inspired by Mudramark by Pepperfry, the Ananta floor-standing pooja mandir is carved from solid seasoned Teak wood with warm golden teak polish. Showcases a magnificent shikhar (dome) topped with a brass Kalash, geometric laser-cut jali side pillars, two spacious bottom drawers with antique brass pulls, and a pull-out diya and prasad tray.',
    features: [
      'Handcrafted from 100% seasoned, natural grain solid Teak wood',
      'Traditional temple dome (Gopuram/Shikhar) adorned with an authentic solid brass Kalash',
      'Laser-cut Jali side panels allowing serene ventilation of sacred incense and diya light',
      'Two deep bottom storage drawers for pooja samagri, bells, diyas, and prayer books',
      'Sturdy pull-out brass-knob slider tray for ghee lamps and holy offering prasad'
    ],
    specs: {
      'Pepperfry Reference': 'Mudramark Ananta Solid Wood Floor Rested Mandir',
      'Primary Material': '100% Solid Seasoned Teak Wood',
      'Finish': 'Natural Golden Teak Hand-Rubbed Lacquer',
      'Mounting': 'Floor Rested Sturdy Pedestal Base',
      'Hardware': 'Solid Antique Brass Pulls & Kalash',
      'Delivery': 'Free Insured Doorstep Delivery in Chennai'
    },
    dimensions: [
      { label: 'Overall Dimensions (W x D x H)', value: '76.2 x 45.7 x 121.9 cm (30 x 18 x 48 in)' },
      { label: 'Inner Sanctum Height', value: '61.0 cm (24 in)' },
      { label: 'Base Drawer Height', value: '25.4 cm (10 in)' }
    ],
    materials: ['100% Solid Teak Wood', 'Solid Brass Kalash and Hardware', 'Moisture-Cured Natural Lacquer'],
    variants: [
      { name: 'Golden Teak Finish', colorHex: '#B45309', finishType: 'wood' },
      { name: 'Rosewood Dark Walnut', colorHex: '#451A03', finishType: 'wood' }
    ],
    inStock: true,
    leadTime: 'Ships in 2 - 4 Days across Chennai',
    warranty: '36 Months (3 Years) Comprehensive Warranty'
  },
  {
    id: 'clara-high-back-mesh-chair',
    name: 'Odessy Clara Executive High-Back Mesh Ergonomic Chair',
    tagline: 'Pepperfry Inspired Multi-Lock Synchronous Tilt with 2D Headrest & Polished Chrome Base',
    category: 'furniture',
    subcategory: 'Ergonomic Chairs',
    price: 8499,
    originalPrice: 12999,
    currency: '₹',
    rating: 4.93,
    reviewsCount: 118,
    badge: 'Executive Top Rated',
    isBestSeller: true,
    image: '/products/chair_clara_high_back_mesh_3x4.jpeg',
    gallery: [
      '/products/chair_clara_high_back_mesh_3x4.jpeg',
      '/products/chair_clara_high_back_mesh_env.jpeg'
    ],
    description: 'Inspired by Pepperfry’s bestselling high-back executive chairs, the Clara combines breathable Korean nylon mesh with ergonomic adjustability. Features a dynamic spine-conforming lumbar cushion, 2D height and angle-adjustable headrest, 3D armrests, heavy-duty synchro-tilt mechanism, and a mirror-polished aluminum alloy star base.',
    features: [
      'Breathable tear-resistant Korean nylon mesh engineered for maximum airflow in tropical humidity',
      'Adjustable 2D curved headrest supporting cervical spine alignment during extended work',
      'Dynamic S-curve lumbar support conforming smoothly to natural lower back posture',
      'Multi-lock synchro-tilt mechanism with 90° - 135° recline lock and tension adjustment',
      'Class-4 heavy-duty hydraulic gas lift and mirror-polished cast aluminum alloy 5-star base'
    ],
    specs: {
      'Pepperfry Reference': 'Clara High Back Ergonomic Mesh Office Chair',
      'Primary Material': 'High-Tensile Korean Polymer Mesh',
      'Mechanism': 'Synchro-Tilt with Multi-Angle Position Lock',
      'Gas Lift': 'BIFMA Certified Class-4 Hydraulic Pneumatic',
      'Base': 'Mirror-Polished Heavy Cast Aluminum 5-Star Base',
      'Castors': '60 mm Twin Silent PU Castors (Floor-Safe)',
      'Weight Capacity': '145 kg (320 lbs)',
      'Delivery': 'Same Day Delivery & Assembly in Chennai'
    },
    dimensions: [
      { label: 'Total Height Range', value: '118 - 128 cm (46.5 - 50.4 in)' },
      { label: 'Seat Width x Depth', value: '52 x 50 cm (20.5 x 19.7 in)' },
      { label: 'Seat Height Range', value: '46 - 56 cm (18.1 - 22.0 in)' },
      { label: 'Star Base Diameter', value: '68 cm (26.8 in)' }
    ],
    materials: ['Reinforced Nylon Chassis', 'Breathable Polymer Mesh', 'Cast Aluminum Base', 'PU Soft Armrest Pads'],
    variants: [
      { name: 'Executive Obsidian Black', colorHex: '#18181B', finishType: 'mesh' },
      { name: 'Platinum Grey with White Frame', colorHex: '#9CA3AF', finishType: 'mesh' }
    ],
    inStock: true,
    leadTime: 'Same Day Delivery in Chennai',
    warranty: '36 Months (3 Years) Warranty'
  }
];

export const FURNITURE_SUBCATEGORIES: FurnitureSubcategory[] = [
  'Ergonomic Chairs',
  'Executive Chairs',
  'Relaxation & Lounge',
  'Bar & Café Seating',
  'Conference & Visitor',
  'Café & Accent',
  'Desks & Tables',
  'Dining Table and Chairs',
  'Sofa',
  'Beds and Wardrobe',
  'Pooja Stand',
  'Steel Bureau',
  'Steel Cot',
  'Center Table',
];

export interface CategoryMeta {
  id: FurnitureSubcategory;
  title: string;
  tagline: string;
  description: string;
  isNewCategory?: boolean;
}

export const FURNITURE_CATEGORIES_METADATA: Record<FurnitureSubcategory, CategoryMeta> = {
  'Ergonomic Chairs': {
    id: 'Ergonomic Chairs',
    title: 'Ergonomic Mesh Chairs',
    tagline: 'Dual-Wing Adaptive Lumbar & High-Tensile Airflow Mesh',
    description: 'Precision engineered ergonomic seating for long hours of comfortable, pain-free posture.',
  },
  'Executive Chairs': {
    id: 'Executive Chairs',
    title: 'Executive Leather Chairs',
    tagline: 'Plush Multi-Layer Leather Cushioning with Recline Lock',
    description: 'Bespoke executive seating with supple leather, chrome accents, and ergonomic relaxation.',
  },
  'Relaxation & Lounge': {
    id: 'Relaxation & Lounge',
    title: 'Relaxation & Lounge Chairs',
    tagline: 'Solid Hardwood & Zero-Gravity Recliners',
    description: 'Handcrafted luxury recliners and lounge accents designed for ultimate residential comfort.',
  },
  'Bar & Café Seating': {
    id: 'Bar & Café Seating',
    title: 'Bar & Café Seating',
    tagline: 'Hydraulic Pedestals & Stackable Bistro Stools',
    description: 'Commercial-grade kitchen counter, café, and bar seating with durable finishes.',
  },
  'Conference & Visitor': {
    id: 'Conference & Visitor',
    title: 'Conference & Visitor Chairs',
    tagline: 'Cantilever S-Frames & Integrated Tablet Training Chairs',
    description: 'Architectural visitor chairs and boardroom seating with resilient chrome and mesh.',
  },
  'Café & Accent': {
    id: 'Café & Accent',
    title: 'Café & Accent Seating',
    tagline: 'Molded Shells, Natural Beech Wood & Tulip Swivels',
    description: 'Contemporary accent chairs and designer dining silhouettes for inspired spaces.',
  },
  'Desks & Tables': {
    id: 'Desks & Tables',
    title: 'Desks & Workstations',
    tagline: 'Tempered Glass Spider Tables & Compact C-Shape Laptop Desks',
    description: 'Modern executive meeting tables and ergonomic space-saving surfaces.',
  },
  'Dining Table and Chairs': {
    id: 'Dining Table and Chairs',
    title: 'Dining Table and Chairs',
    tagline: 'Solid Timber Craftsmanship & Ergonomic Dining Suites',
    description: 'Bespoke 4-seater and 6-seater dining tables crafted with premium hardwoods and matching cushioned dining chairs for Chennai homes.',
    isNewCategory: true,
  },
  'Sofa': {
    id: 'Sofa',
    title: 'Luxury Sofas & Sectionals',
    tagline: 'Deep High-Resilience Foam & Bespoke Fabric/Leatherette',
    description: 'Ergonomically contoured 3-seater, 2-seater, and L-shaped luxury sectionals engineered for durability and plush comfort.',
    isNewCategory: true,
  },
  'Beds and Wardrobe': {
    id: 'Beds and Wardrobe',
    title: 'Beds & Wardrobes',
    tagline: 'Solid Wood Bedsteads & Engineered Storage Wardrobes',
    description: 'Queen and King size bed frames paired with modular multi-door wardrobe storage solutions tailored for modern living.',
    isNewCategory: true,
  },
  'Pooja Stand': {
    id: 'Pooja Stand',
    title: 'Pooja Mandapams & Stands',
    tagline: 'Sacred Sanctum Design with Traditional Brass Bells & Solid Wood',
    description: 'Architectural pooja stands and mandapams featuring dedicated drawers, diya trays, and sanctum bells.',
    isNewCategory: true,
  },
  'Steel Bureau': {
    id: 'Steel Bureau',
    title: 'Steel Bureaus & Wardrobes',
    tagline: 'Heavy-Gauge Cold-Rolled Steel with Multi-Lever Lock Security',
    description: 'Heavy-duty steel almirahs and bureaus with powder-coated anti-rust finish, locker vault, and mirror options.',
    isNewCategory: true,
  },
  'Steel Cot': {
    id: 'Steel Cot',
    title: 'Steel Cots & Bed Frames',
    tagline: 'Reinforced Tubular Steel Construction & Noise-Free Joints',
    description: 'High-strength steel cots with powder-coated aesthetic finishes, engineered for lifetime durability and Chennai climate resilience.',
    isNewCategory: true,
  },
  'Center Table': {
    id: 'Center Table',
    title: 'Center & Coffee Tables',
    tagline: 'Tempered Glass & Solid Hardwood Living Room Accents',
    description: 'Designer coffee tables and architectural centerpieces that elevate living rooms with style and functional shelf storage.',
    isNewCategory: true,
  },
};

export function getProductsByCategory(category: Product['category']): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  if (subcategory === 'all') return PRODUCTS.filter((p) => p.category === 'furniture');
  return PRODUCTS.filter((p) => p.category === 'furniture' && p.subcategory === subcategory);
}

function normalizeCategoryString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\band\b/g, '')
    .replace(/[^a-z0-9]/g, '');
}

export function getValidFurnitureCategory(categoryParam: string | null | undefined): string {
  if (!categoryParam) return 'all';
  const trimmed = categoryParam.trim();
  if (!trimmed || trimmed.toLowerCase() === 'all') return 'all';

  // 1. Exact match
  const exact = FURNITURE_SUBCATEGORIES.find((c) => c === trimmed);
  if (exact) return exact;

  // 2. Case-insensitive & normalized slug / accent-free match (e.g. 'sofa', 'dining-table-and-chairs', 'cafe & accent')
  const targetNorm = normalizeCategoryString(trimmed);
  const matched = FURNITURE_SUBCATEGORIES.find((c) => {
    const cNorm = normalizeCategoryString(c);
    return cNorm === targetNorm || (targetNorm.endsWith('s') && targetNorm.slice(0, -1) === cNorm);
  });
  if (matched) return matched;

  // 3. Fallback safely to 'all' for any invalid parameter
  return 'all';
}
