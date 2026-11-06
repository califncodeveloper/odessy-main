import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return PRODUCTS.slice(0, 4);
    const query = searchTerm.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query) ||
        p.subcategory.toLowerCase().includes(query) ||
        p.tagline.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.materials.some((m) => m.toLowerCase().includes(query)) ||
        p.features.some((f) => f.toLowerCase().includes(query))
    );
  }, [searchTerm]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        id="search-modal-backdrop"
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4"
      >
        <motion.div
          id="search-modal-box"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, y: -20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.96 }}
          className="w-full max-w-2xl bg-[#181614] border border-[#D4AF37]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Search Input Bar */}
          <div className="p-4 bg-[#22201C] border-b border-white/10 flex items-center gap-3">
            <Search className="w-5 h-5 text-[#D4AF37] shrink-0" />
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search chairs, dining sets, sofas, beds, steel bureau, cots, tables..."
              className="flex-1 bg-transparent text-white text-base placeholder-neutral-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-neutral-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Category Chips */}
          <div className="px-4 py-2 bg-[#131210] border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs scrollbar-none">
            <span className="text-neutral-400 shrink-0">Popular:</span>
            {[
              'Ergonomic Chairs',
              'Dining Table and Chairs',
              'Sofa',
              'Beds and Wardrobe',
              'Pooja Stand',
              'Steel Bureau',
              'Steel Cot',
              'Center Table',
              'Executive Chairs',
              'Desks & Tables',
            ].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 text-neutral-300 hover:text-[#F3E9DA] border border-white/10 hover:border-[#D4AF37]/40 shrink-0 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2.5">
            {searchResults.length === 0 ? (
              <div className="text-center py-10 text-neutral-400 text-sm space-y-3">
                <p>No products found matching &quot;{searchTerm}&quot;.</p>
                <div className="flex items-center justify-center gap-2">
                  <a
                    href={`https://wa.me/919919915358?text=${encodeURIComponent(
                      `Hello Odessy Furniture, I am searching for "${searchTerm}" in Chennai.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#1EBE5D] transition-colors"
                  >
                    <span>Inquire via WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="p-3 rounded-xl bg-white/5 hover:bg-[#D4AF37]/10 border border-white/5 hover:border-[#D4AF37]/40 transition-all flex items-center gap-3.5 cursor-pointer group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-lg object-cover bg-black/40 shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-semibold text-[#C5A059] tracking-wider">
                        {product.subcategory}
                      </span>
                      {product.badge && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#F3E9DA]">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <h4 className="font-serif font-semibold text-sm text-white group-hover:text-[#F3E9DA] truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-neutral-400 truncate">{product.tagline}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-serif font-bold text-sm text-gold-gradient block">
                      {product.currency}{product.price.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-neutral-400">View Specs →</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
