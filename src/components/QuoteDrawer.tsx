import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ArrowRight, Phone, Send, ShoppingBag, ShieldCheck, QrCode } from 'lucide-react';
import confetti from 'canvas-confetti';
import { QuoteItem, PaymentDetails } from '../types';

interface QuoteDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: QuoteItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearAll: () => void;
  onOpenPayment?: (details: PaymentDetails) => void;
}

export const QuoteDrawer: React.FC<QuoteDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll,
  onOpenPayment,
}) => {
  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleSendQuoteWhatsApp = () => {
    if (items.length === 0) return;

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#25D366', '#FFFFFF'],
    });

    const itemListText = items
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.product.name} (Finish: ${it.selectedVariant.name}) x ${it.quantity} = ${it.product.currency}${(it.product.price * it.quantity).toLocaleString()}`
      )
      .join('\n');

    const message = `*ODESSY FURNITURE - BESPOKE QUOTATION REQUEST*
----------------------------------------
${itemListText}
----------------------------------------
*Estimated Subtotal: ₹${totalPrice.toLocaleString('en-IN')}*

Please share official corporate/residential quote, commercial discounts, and delivery lead time to my location.`;

    window.open(`https://wa.me/919919915358?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="quote-drawer-backdrop"
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end"
        >
          <motion.div
            id="quote-drawer-panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-full max-w-md bg-[#161513] border-l border-[#D4AF37]/30 h-full flex flex-col justify-between shadow-2xl text-neutral-200 overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-[#1F1D19] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <h3 className="font-serif font-bold text-base text-[#F3E9DA]">
                    Bespoke Quotation Basket
                  </h3>
                  <span className="text-[11px] text-neutral-400">
                    {items.length} {items.length === 1 ? 'item' : 'items'} selected
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && (
                  <button
                    onClick={onClearAll}
                    className="text-xs text-neutral-400 hover:text-red-400 transition-colors p-1"
                    title="Clear Basket"
                  >
                    Clear
                  </button>
                )}
                <button
                  id="close-quote-drawer-btn"
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 text-neutral-400">
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-[#D4AF37]/60">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-lg text-neutral-200 mb-1">Your Basket is Empty</h4>
                  <p className="text-xs text-neutral-400 max-w-xs mb-6">
                    Explore our luxury ergonomic chairs, motorized desks, and acoustic pods to build your bespoke workspace.
                  </p>
                  <button
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-black text-xs font-semibold tracking-wide hover:bg-[#E5C365] transition-all"
                  >
                    Browse Collections
                  </button>
                </div>
              ) : (
                items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedVariant.name}-${index}`}
                    className="p-3.5 rounded-2xl bg-[#201E1A] border border-[#D4AF37]/15 flex gap-3.5 items-center relative group"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#161513] shrink-0 border border-white/10">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif font-bold text-sm text-[#F3E9DA] truncate">
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-neutral-400 mt-0.5 flex items-center gap-1.5">
                        <span
                          className="w-2 h-2 rounded-full border border-white/30 shrink-0"
                          style={{ backgroundColor: item.selectedVariant.colorHex }}
                        />
                        <span className="truncate">{item.selectedVariant.name}</span>
                      </p>

                      <div className="flex items-center justify-between mt-2.5">
                        {/* Quantity Selector */}
                        <div className="flex items-center gap-2 bg-[#161513] border border-white/15 px-2 py-0.5 rounded-lg text-xs">
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="px-1.5 text-neutral-400 hover:text-white"
                          >
                            -
                          </button>
                          <span className="font-mono w-4 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="px-1.5 text-neutral-400 hover:text-white"
                          >
                            +
                          </button>
                        </div>

                        {/* Price */}
                        <span className="font-serif font-bold text-sm text-gold-gradient">
                          {item.product.currency}
                          {(item.product.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => onRemoveItem(index)}
                      className="text-neutral-400 hover:text-red-400 transition-colors p-1.5 self-start"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary & WhatsApp Submission */}
            {items.length > 0 && (
              <div className="p-5 bg-[#1B1916] border-t border-white/10 space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span>Estimated Total (Excl. Tax)</span>
                  <span className="font-serif font-bold text-xl text-gold-gradient">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Includes 10-Year BIFMA Replacement Warranty & Setup</span>
                </div>

                {/* Pay via UPI QR Button */}
                {onOpenPayment && (
                  <button
                    id="checkout-upi-pay-btn"
                    onClick={() => {
                      onOpenPayment({
                        amount: totalPrice,
                        items: items.map((it) => ({
                          name: it.product.name,
                          quantity: it.quantity,
                          variantName: it.selectedVariant.name,
                          price: it.product.price,
                        })),
                        orderNote: 'Bespoke Basket Checkout',
                      });
                      onClose();
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#F9E7B9] via-[#D4AF37] to-[#AA8221] hover:from-[#FFF0CC] hover:to-[#B89230] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(212,175,55,0.4)] transition-all active:scale-98"
                  >
                    <QrCode className="w-4 h-4 text-black" />
                    <span>Pay via UPI QR (₹{totalPrice.toLocaleString('en-IN')})</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </button>
                )}

                {/* WhatsApp Action Button */}
                <button
                  id="submit-whatsapp-quote-btn"
                  onClick={handleSendQuoteWhatsApp}
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-neutral-300 hover:text-white font-medium text-xs tracking-wide flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Or Request Bespoke WhatsApp Quote</span>
                </button>

                <p className="text-center text-[10px] text-neutral-400">
                  Direct Line: <a href="tel:+919919915358" className="hover:text-white underline">+91 991 991 5358</a> • Chennai, Tamil Nadu
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
