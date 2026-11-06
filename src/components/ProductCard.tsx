import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Eye, Plus, Check } from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { SpotlightCard } from './SpotlightCard';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  onQuickQuote?: (product: Product, variant: ProductVariant) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onQuickQuote,
}) => {
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { name: 'Standard', colorHex: '#D4AF37', finishType: 'metal' }
  );
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SpotlightCard
      id={`product-card-${product.id}`}
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col justify-between"
      enableTilt={false}
    >
      {/* Top Image Section */}
      <div className="relative">
        {/* Badge with Framer subtle glow */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-20">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#181614]/92 text-[#F3E9DA] border border-[#D4AF37]/40 shadow-xl backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              {product.badge}
            </span>
          </div>
        )}

        {/* Category Chip Top Right */}
        <div className="absolute top-3 right-3 z-20">
          <span className="px-2.5 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-mono text-neutral-400 bg-[#161513]/70 backdrop-blur-md border border-white/5">
            {product.subcategory}
          </span>
        </div>

        {/* Image Container with 3:4 Aspect Ratio */}
        <div
          onClick={() => onSelect(product)}
          className="relative aspect-[3/4] w-full overflow-hidden bg-[#141311] cursor-pointer"
        >
          <img
            src={product.image}
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
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-106 filter brightness-100 group-hover:brightness-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

          {/* Quick Specs Pill Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <motion.span
              initial={{ scale: 0.9, y: 8 }}
              whileHover={{ scale: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#22201C]/95 text-[#F3E9DA] text-xs font-semibold tracking-wider uppercase border border-[#D4AF37]/50 shadow-2xl backdrop-blur-xl"
            >
              <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
              Explore Specs
            </motion.span>
          </div>
        </div>
      </div>

      {/* Card Info Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Rating Row */}
          <div className="flex items-center justify-between text-xs text-neutral-400 mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="flex items-center text-[#D4AF37] text-xs">
                {'★'.repeat(Math.floor(product.rating))}
              </div>
              <span className="font-mono text-[11px] text-white font-medium">{product.rating}</span>
              <span className="text-neutral-500 text-[10px]">({product.reviewsCount})</span>
            </div>
            {product.subcategory !== 'Dining Table and Chairs' && !['Sofa', 'Pooja Stand', 'Beds and Wardrobe', 'Center Table', 'Steel Cot', 'Steel Bureau'].includes(product.subcategory as string) && (
              <span className="text-[10px] text-[#C5A059] font-mono tracking-wider">BIFMA X5.1</span>
            )}
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelect(product)}
            className="font-serif font-bold text-lg text-white group-hover:text-[#F3E9DA] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed font-light">
            {product.tagline}
          </p>

          {/* Finishes Swatches */}
          {product.variants && product.variants.length > 0 && (
            <div className="flex items-center gap-2 pt-3">
              <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-mono">
                Finish:
              </span>
              <div className="flex items-center gap-1.5">
                {product.variants.map((variant) => (
                  <button
                    key={variant.name}
                    title={variant.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVariant(variant);
                    }}
                    className={`w-4 h-4 rounded-full border transition-all ${
                      selectedVariant.name === variant.name
                        ? 'border-[#D4AF37] scale-125 ring-2 ring-[#D4AF37]/40 shadow-sm'
                        : 'border-white/20 hover:border-white/60 opacity-70 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: variant.colorHex }}
                  />
                ))}
              </div>
              <span className="text-[10px] text-neutral-400 truncate max-w-[130px] font-mono">
                {selectedVariant.name}
              </span>
            </div>
          )}
        </div>

        {/* Price & Action Row */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-serif font-bold text-lg text-gold-gradient tracking-tight">
                {product.currency}{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-neutral-500 line-through font-mono">
                  {product.currency}{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-mono block">
              10-Yr Guarantee
            </span>
          </div>

          <div className="flex items-center gap-2">
            {onQuickQuote && (
              <button
                id={`add-quote-btn-${product.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onQuickQuote(product, selectedVariant);
                }}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white transition-all active:scale-95"
                title="Add to Custom Quote"
              >
                <Plus className="w-4 h-4 text-[#D4AF37]" />
              </button>
            )}

            <button
              id={`view-detail-btn-${product.id}`}
              onClick={() => onSelect(product)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#F9E7B9] via-[#D4AF37] to-[#AA8221] hover:from-[#FFF0D0] hover:to-[#B89230] text-black text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-[0_4px_15px_rgba(212,175,55,0.25)] hover:shadow-[0_4px_25px_rgba(212,175,55,0.4)] transition-all active:scale-95"
            >
              <span>Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
