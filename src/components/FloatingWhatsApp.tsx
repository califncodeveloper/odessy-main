import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Phone, ArrowUpRight, X } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '919919915358',
  defaultMessage = 'Hello Odessy Furniture, I would like to inquire about your luxury ergonomic collection & custom workspace configurations.',
}) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div
      id="floating-whatsapp-container"
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 flex items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && !isDismissed && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 w-64 bg-[#1C1A17]/95 backdrop-blur-md border border-[#25D366]/30 p-3.5 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] text-left"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                <span className="text-xs font-semibold text-[#E2E2E8]">Odessy Concierge</span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDismissed(true);
                }}
                className="text-neutral-400 hover:text-white p-0.5"
                title="Dismiss"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed mb-2">
              Chat directly with our ergonomic architects for instant quotes & material swatches.
            </p>
            <div className="text-[11px] font-mono text-[#25D366] flex items-center gap-1 font-medium">
              <Phone className="w-3 h-3" /> +91 991 991 5358
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 min-w-[52px] min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] shrink-0 rounded-full bg-gradient-to-tr from-[#1EBE5D] via-[#25D366] to-[#4CE584] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] border border-white/25 transition-all duration-300"
        aria-label="Chat on WhatsApp +91 991 991 5358"
      >
        {/* Subtle pulsating outer ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* Red Notification Dot on Border */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 z-20 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600 border-2 border-[#161513] shadow-sm" />
        </span>

        {/* WhatsApp Official Clean Icon */}
        <svg
          viewBox="0 0 16 16"
          className="w-7 h-7 fill-white drop-shadow-sm relative z-10 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      </motion.a>
    </div>
  );
};
