import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Sparkles,
  ShieldCheck,
  Check,
  Truck,
  Phone,
  Ruler,
  Layers,
  ArrowRight,
  Share2,
  Heart,
  QrCode,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Product, ProductVariant, PaymentDetails } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToQuote: (product: Product, variant: ProductVariant, quantity: number) => void;
  onOpenPayment?: (details: PaymentDetails) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToQuote,
  onOpenPayment,
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { name: 'Standard', colorHex: '#D4AF37', finishType: 'metal' }
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'features' | 'specs' | 'dimensions'>('features');
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImageIndex(0);
      setSelectedVariant(product.variants[0] || { name: 'Standard', colorHex: '#D4AF37', finishType: 'metal' });
      setQuantity(1);
    }
  }, [product]);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleWhatsAppInquire = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#D4AF37', '#FFF0D0', '#25D366'],
    });

    const text = `Hello Odessy Furniture! I am interested in inquiring/purchasing:
- Product: ${product.name}
- Category: ${product.subcategory}
- Finish: ${selectedVariant.name}
- Quantity: ${quantity}
- Price: ${product.currency}${product.price * quantity}

Please share commercial lead times, delivery to my location, and finish samples.`;

    window.open(`https://wa.me/919919915358?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleAddQuoteClick = () => {
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.85 },
      colors: ['#D4AF37', '#F3E9DA'],
    });
    onAddToQuote(product, selectedVariant, quantity);
  };

  return (
    <AnimatePresence>
      <div
        id="product-detail-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      >
        <motion.div
          id="product-detail-modal"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-5xl bg-[#181614] border border-[#D4AF37]/30 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(212,175,55,0.15)] overflow-hidden flex flex-col my-auto max-h-[92vh]"
        >
          {/* Close Button */}
          <button
            id="close-product-modal-btn"
            onClick={onClose}
            className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/60 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-neutral-300 hover:text-white transition-all shadow-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto">
            {/* Left: Gallery (5 cols) */}
            <div className="lg:col-span-6 bg-[#12110F] p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
              {/* Main Image in 3:4 Aspect Ratio */}
              <div className="relative aspect-[3/4] max-h-[520px] w-full rounded-2xl overflow-hidden bg-[#161513] border border-white/10 flex items-center justify-center group">
                <img
                  src={images[activeImageIndex] || product.image}
                  alt={product.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('1505797149') && !target.src.includes('1617806118233') && !target.src.includes('1555041469')) {
                      target.src = product.subcategory === 'Dining Table and Chairs'
                        ? 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80'
                        : product.subcategory === 'Sofa'
                        ? 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80'
                        : 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-[#22201C]/92 text-[#F3E9DA] border border-[#D4AF37]/50 backdrop-blur-md">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-3 mt-4 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-24 h-24 rounded-xl overflow-hidden shrink-0 border-2 transition-all group ${
                        activeImageIndex === idx
                          ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/40 scale-105 shadow-xl'
                          : 'border-white/15 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={idx === 0 ? 'Studio Showcase' : 'Environment Setup'}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.currentTarget;
                          if (!target.src.includes('1505797149') && !target.src.includes('1617806118233')) {
                            target.src = product.subcategory === 'Dining Table and Chairs'
                              ? 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80'
                              : 'https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80';
                          }
                        }}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-sm text-[9px] font-mono uppercase tracking-wider text-center py-1 text-[#F3E9DA] border-t border-white/10">
                        {idx === 0 ? 'Studio Shot' : 'In Environment'}
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Warranty & Lead Time Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>{product.warranty}</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/5">
                  <Truck className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <span>{product.leadTime}</span>
                </div>
              </div>
            </div>

            {/* Right: Details & Customizer (7 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                {/* Category & Rating */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <span className="uppercase tracking-widest text-[#C5A059] font-medium">
                    {product.subcategory}
                  </span>
                  <div className="flex items-center gap-1.5 text-[#F3E9DA]">
                    <span className="text-amber-400 text-sm">★</span>
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-neutral-400">({product.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
                  {product.name}
                </h2>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-serif font-bold text-3xl text-gold-gradient">
                    {product.currency}{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-neutral-400 line-through">
                      {product.currency}{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    Complimentary White-Glove Setup
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Finish / Variant Selection */}
                {product.variants && product.variants.length > 0 && (
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-neutral-300">
                        Architectural Finish:
                      </span>
                      <span className="text-xs font-medium text-[#F3E9DA]">
                        {selectedVariant.name}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {product.variants.map((variant) => (
                        <button
                          key={variant.name}
                          onClick={() => setSelectedVariant(variant)}
                          className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs border transition-all ${
                            selectedVariant.name === variant.name
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F3E9DA] shadow-md ring-1 ring-[#D4AF37]/50'
                              : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/30'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-white/30 shrink-0"
                            style={{ backgroundColor: variant.colorHex }}
                          />
                          <span>{variant.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tabs: Features, Specs, Dimensions */}
                <div>
                  <div className="flex items-center gap-2 border-b border-white/10 mb-4 text-xs font-medium">
                    <button
                      onClick={() => setActiveTab('features')}
                      className={`pb-2.5 px-1 border-b-2 transition-all ${
                        activeTab === 'features'
                          ? 'border-[#D4AF37] text-[#F3E9DA] font-semibold'
                          : 'border-transparent text-neutral-400 hover:text-white'
                      }`}
                    >
                      Key Features
                    </button>
                    <button
                      onClick={() => setActiveTab('specs')}
                      className={`pb-2.5 px-1 border-b-2 transition-all ${
                        activeTab === 'specs'
                          ? 'border-[#D4AF37] text-[#F3E9DA] font-semibold'
                          : 'border-transparent text-neutral-400 hover:text-white'
                      }`}
                    >
                      Specifications
                    </button>
                    <button
                      onClick={() => setActiveTab('dimensions')}
                      className={`pb-2.5 px-1 border-b-2 transition-all ${
                        activeTab === 'dimensions'
                          ? 'border-[#D4AF37] text-[#F3E9DA] font-semibold'
                          : 'border-transparent text-neutral-400 hover:text-white'
                      }`}
                    >
                      Dimensions
                    </button>
                  </div>

                  {activeTab === 'features' && (
                    <ul className="space-y-2 text-xs text-neutral-300">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'specs' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-neutral-400 block text-[11px] mb-0.5">{key}</span>
                          <span className="text-[#F3E9DA] font-medium">{val}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'dimensions' && (
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {product.dimensions.map((dim, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                          <span className="text-neutral-400 block text-[11px] mb-0.5">{dim.label}</span>
                          <span className="text-[#F3E9DA] font-medium">{dim.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                {/* Quantity */}
                <div className="flex items-center border border-white/15 rounded-xl bg-white/5 p-1 w-full sm:w-auto justify-between sm:justify-start">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 text-neutral-300 font-bold"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg hover:bg-white/10 text-neutral-300 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Pay via UPI QR Button */}
                {onOpenPayment && (
                  <button
                    id="modal-upi-pay-btn"
                    onClick={() => {
                      onOpenPayment({
                        amount: product.price * quantity,
                        items: [
                          {
                            name: product.name,
                            quantity,
                            variantName: selectedVariant.name,
                            price: product.price,
                          },
                        ],
                        orderNote: `Direct Order: ${product.name}`,
                      });
                      onClose();
                    }}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#F9E7B9] via-[#D4AF37] to-[#AA8221] hover:from-[#FFF0CC] hover:to-[#B89230] text-black text-xs font-bold tracking-wide transition-all shadow-[0_4px_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 active:scale-98"
                  >
                    <QrCode className="w-4 h-4 text-black" />
                    <span>Pay via UPI QR (₹{(product.price * quantity).toLocaleString('en-IN')})</span>
                  </button>
                )}

                {/* Add to Quote Drawer */}
                <button
                  id="modal-add-to-quote-btn"
                  onClick={handleAddQuoteClick}
                  className="w-full sm:w-auto py-3 px-3.5 rounded-xl bg-white/10 hover:bg-[#D4AF37]/20 border border-white/15 hover:border-[#D4AF37]/50 text-[#F3E9DA] text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5"
                  title="Add to Custom Quote Basket"
                >
                  <span>Add to Basket</span>
                </button>

                {/* Instant Order / WhatsApp Quote */}
                <button
                  id="modal-whatsapp-inquire-btn"
                  onClick={handleWhatsAppInquire}
                  className="w-full sm:w-auto py-3 px-3.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/15 hover:border-[#25D366]/50 text-neutral-300 hover:text-white text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-1.5"
                  title="Enquire on WhatsApp"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
