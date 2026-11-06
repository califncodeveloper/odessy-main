import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowUpDown,
  ChevronDown,
  Check,
  ShieldCheck,
  Phone,
} from 'lucide-react';
import { Product, ProductVariant } from '../types';
import { PRODUCTS, FURNITURE_SUBCATEGORIES, FURNITURE_CATEGORIES_METADATA } from '../data/products';
import { ProductCard } from '../components/ProductCard';

type SortOption = 'featured' | 'price-low' | 'price-high' | 'rating';

const SORT_OPTIONS: { id: SortOption; label: string }[] = [
  { id: 'featured', label: 'Featured Collection' },
  { id: 'price-low', label: 'Price: Low to High (₹)' },
  { id: 'price-high', label: 'Price: High to Low (₹)' },
  { id: 'rating', label: 'Highest Customer Rating' },
];

interface FurniturePageProps {
  onSelectProduct: (product: Product) => void;
  onQuickQuote: (product: Product, variant: ProductVariant) => void;
  initialSubcategory?: string;
  onSubcategoryChange?: (subcategory: string) => void;
}

export const FurniturePage: React.FC<FurniturePageProps> = ({
  onSelectProduct,
  onQuickQuote,
  initialSubcategory,
  onSubcategoryChange,
}) => {
  const [selectedSubcat, setSelectedSubcat] = useState<string>(initialSubcategory || 'all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialSubcategory !== undefined && initialSubcategory !== selectedSubcat) {
      setSelectedSubcat(initialSubcategory);
    }
  }, [initialSubcategory]);

  const handleSelectSubcat = (subcat: string) => {
    setSelectedSubcat(subcat);
    if (onSubcategoryChange) {
      onSubcategoryChange(subcat);
    }
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(e.target as Node)) {
        setIsSortOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const subcategories: string[] = ['all', ...FURNITURE_SUBCATEGORIES];

  const furnitureProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.category === 'furniture');
  }, []);

  const filteredProducts = useMemo(() => {
    let list = furnitureProducts;

    if (selectedSubcat !== 'all') {
      list = list.filter((p) => p.subcategory === selectedSubcat);
    }

    if (sortBy === 'price-low') {
      list = [...list].sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list = [...list].sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list = [...list].sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [furnitureProducts, selectedSubcat, sortBy]);

  return (
    <div id="furniture-page" className="w-full bg-[#161513] text-neutral-200 pt-28 pb-20">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F3E9DA]">
            Official Chennai Catalog
          </span>
        </div>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Odessy Furniture Collection
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          Crafted for Comfort. Designed for Life. Explore our complete range of high-performance ergonomic mesh seating, executive leather recliners, lounge chairs, and utility workstations with free home delivery in Chennai.
        </p>
      </section>

      {/* Filter & Sort Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-[#1E1C18] border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Subcategory Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {subcategories.map((subcat) => (
              <button
                key={subcat}
                onClick={() => handleSelectSubcat(subcat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider whitespace-nowrap transition-all ${
                  selectedSubcat === subcat
                    ? 'bg-[#D4AF37] text-black shadow-md font-bold'
                    : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {subcat === 'all' ? 'All Furniture' : subcat}
              </button>
            ))}
          </div>

          {/* Custom Luxury Sort Dropdown */}
          <div ref={sortDropdownRef} className="relative flex items-center gap-2.5 w-full md:w-auto justify-end">
            <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5 hidden sm:inline-flex">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Sort:</span>
            </span>

            <button
              type="button"
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="relative inline-flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-[#22201C] hover:bg-[#2A2722] border border-white/15 hover:border-[#D4AF37]/50 text-xs text-white font-medium shadow-lg transition-all focus:outline-none w-full sm:w-auto min-w-0 sm:min-w-[210px]"
              aria-haspopup="listbox"
              aria-expanded={isSortOpen}
            >
              <span className="truncate">
                {SORT_OPTIONS.find((opt) => opt.id === sortBy)?.label || 'Featured Collection'}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-[#D4AF37] transition-transform duration-300 ${
                  isSortOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Framer Motion Glassmorphism Dropdown Menu */}
            <AnimatePresence>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.96 }}
                  transition={{ duration: 0.18, ease: 'easeOut' }}
                  className="absolute right-0 top-full mt-2 w-56 rounded-2xl bg-[#1E1C18]/95 backdrop-blur-2xl border border-white/15 p-1.5 shadow-[0_20px_45px_rgba(0,0,0,0.85)] z-50 overflow-hidden"
                  role="listbox"
                >
                  <div className="px-3 py-1.5 border-b border-white/10 mb-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70">
                      Sort Furniture By
                    </span>
                  </div>
                  {SORT_OPTIONS.map((option) => {
                    const isSelected = sortBy === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setSortBy(option.id);
                          setIsSortOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all text-left ${
                          isSelected
                            ? 'bg-[#D4AF37]/15 text-[#D4AF37] font-semibold border border-[#D4AF37]/30'
                            : 'text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent'
                        }`}
                        role="option"
                        aria-selected={isSelected}
                      >
                        <span>{option.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />}
                      </button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={onSelectProduct}
              onQuickQuote={onQuickQuote}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 sm:py-20 bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-10 max-w-2xl mx-auto">
            {selectedSubcat !== 'all' &&
            FURNITURE_CATEGORIES_METADATA[selectedSubcat as keyof typeof FURNITURE_CATEGORIES_METADATA]?.isNewCategory ? (
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#F3E9DA] text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Chennai Showroom Collection</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  {FURNITURE_CATEGORIES_METADATA[selectedSubcat as keyof typeof FURNITURE_CATEGORIES_METADATA]?.title || selectedSubcat}
                </h3>
                <p className="text-xs sm:text-sm text-[#D4AF37] font-medium tracking-wide">
                  {FURNITURE_CATEGORIES_METADATA[selectedSubcat as keyof typeof FURNITURE_CATEGORIES_METADATA]?.tagline}
                </p>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-lg mx-auto leading-relaxed">
                  {FURNITURE_CATEGORIES_METADATA[selectedSubcat as keyof typeof FURNITURE_CATEGORIES_METADATA]?.description}
                </p>
                <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/919919915358?text=${encodeURIComponent(
                      `Hello Odessy Furniture, I would like to inquire about your ${selectedSubcat} collection and available showroom models in Chennai.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </a>
                  <button
                    onClick={() => handleSelectSubcat('all')}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white text-xs font-semibold tracking-wider transition-all"
                  >
                    View All Furniture
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="font-serif text-lg text-white mb-2">No Furniture Match Found</h3>
                <p className="text-xs text-neutral-400 max-w-sm mx-auto mb-6">
                  Try selecting another category filter.
                </p>
                <button
                  onClick={() => handleSelectSubcat('all')}
                  className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Bottom Architectural Guarantee */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-[#201E1A] to-[#181614] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-white">
                Bulk Office & Corporate Orders in Chennai
              </h3>
              <p className="text-xs text-neutral-400">
                Outfitting an IT workspace, clinic, or private study in Chennai? Connect directly with our team for bulk pricing, same-day delivery, and warranty support.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20I'd%20like%20a%20bulk%20quote%20for%20our%20Chennai%20office."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs tracking-wider uppercase flex items-center gap-2 shadow-lg transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>WhatsApp Orders (+91 991 991 5358)</span>
          </a>
        </div>
      </section>
    </div>
  );
};
