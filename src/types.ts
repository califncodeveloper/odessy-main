export type PageType = 'home' | 'furniture' | 'electronics' | 'mobiles' | 'about' | 'bifma' | 'privacy' | 'terms' | 'not-found';

export type FurnitureSubcategory =
  | 'Ergonomic Chairs'
  | 'Executive Chairs'
  | 'Relaxation & Lounge'
  | 'Bar & Café Seating'
  | 'Conference & Visitor'
  | 'Café & Accent'
  | 'Desks & Tables'
  | 'Dining Table and Chairs'
  | 'Sofa'
  | 'Beds and Wardrobe'
  | 'Pooja Stand'
  | 'Steel Bureau'
  | 'Steel Cot'
  | 'Center Table';

export interface ProductVariant {
  name: string;
  colorHex: string;
  image?: string;
  finishType: 'wood' | 'metal' | 'mesh' | 'leather' | 'matte';
}

export interface ProductDimension {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'furniture' | 'electronics' | 'mobiles';
  subcategory: FurnitureSubcategory | string;
  price: number;
  originalPrice?: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  badge?: string;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  specs: Record<string, string>;
  dimensions: ProductDimension[];
  materials: string[];
  variants: ProductVariant[];
  inStock: boolean;
  leadTime: string;
  warranty: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface ParallaxProject {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  location: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  highlightMetric: string;
  productsUsed: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  productExperience: string;
  location: string;
}

export interface QuoteItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
  notes?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  suggestedPills?: string[];
  recommendedProductIds?: string[];
}

export interface PaymentDetails {
  amount: number;
  items?: {
    name: string;
    quantity: number;
    variantName?: string;
    price: number;
  }[];
  orderNote?: string;
  orderId?: string;
}

