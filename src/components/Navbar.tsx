import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Search, ShoppingBag, Phone, Menu, X, ArrowRight, MapPin, QrCode } from 'lucide-react';
import { OdessyLogo } from './OdessyLogo';
import { PageType } from '../types';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType, subcategory?: string) => void;
  quoteItemsCount: number;
  onOpenQuoteDrawer: () => void;
  onOpenSearch: () => void;
  onOpenPayment?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  quoteItemsCount,
  onOpenQuoteDrawer,
  onOpenSearch,
  onOpenPayment,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 30 && !isScrolled) {
      setIsScrolled(true);
    } else if (latest <= 30 && isScrolled) {
      setIsScrolled(false);
    }
  });

  const navLinks: { label: string; page: PageType }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Furniture', page: 'furniture' },
    { label: 'Electronics', page: 'electronics' },
    { label: 'Mobiles', page: 'mobiles' },
    { label: 'About', page: 'about' },
  ];

  const handleLinkClick = (page: PageType, subcategory?: string) => {
    onNavigate(page, subcategory);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        id="main-navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[0.16,1,0.3,1] ${
          isScrolled
            ? 'py-2 bg-[#161513]/92 backdrop-blur-2xl border-b border-[#D4AF37]/25 shadow-[0_15px_40px_rgba(0,0,0,0.85)]'
            : 'py-5 sm:py-6 bg-gradient-to-b from-[#12110F]/90 via-[#161513]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          {/* Brand Logo with Smooth Scale Animation */}
          <motion.div
            className="shrink-0"
            animate={{ scale: isScrolled ? 0.96 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <OdessyLogo
              size={isScrolled ? 'sm' : 'md'}
              onClick={() => handleLinkClick('home')}
            />
          </motion.div>

          {/* Desktop Nav Links */}
          <motion.nav
            animate={{
              paddingTop: isScrolled ? '4px' : '6px',
              paddingBottom: isScrolled ? '4px' : '6px',
            }}
            className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 bg-[#1F1D19]/80 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-[#D4AF37]/15 shadow-inner shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  id={`nav-link-${link.page}`}
                  onClick={() => handleLinkClick(link.page)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-colors duration-200 ${
                    isActive
                      ? 'text-[#161513] font-bold'
                      : 'text-[#D5D0C6] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F9E7B9] via-[#D4AF37] to-[#AA8221] shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                      transition={{ type: 'spring', damping: 26, stiffness: 320 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </motion.nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Search Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="navbar-search-btn"
              onClick={onOpenSearch}
              className="p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-neutral-300 hover:text-[#F3E9DA] transition-all shadow-sm"
              title="Search Catalog"
            >
              <Search className="w-4 h-4" />
            </motion.button>

            {/* Direct Phone Dial Button */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              id="navbar-phone-btn"
              href="tel:+919919915358"
              className="hidden lg:flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 text-xs font-medium text-neutral-200 hover:text-[#F3E9DA] transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono">991 991 5358</span>
            </motion.a>

            {/* Quote Basket Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              id="navbar-quote-basket-btn"
              onClick={onOpenQuoteDrawer}
              className="relative p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-[#D4AF37]/20 border border-white/10 hover:border-[#D4AF37]/40 text-neutral-300 hover:text-[#F3E9DA] transition-all shadow-sm"
              title="View Bespoke Quote Basket"
            >
              <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
              {quoteItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold flex items-center justify-center shadow-md"
                >
                  {quoteItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Direct Instant UPI Pay Online Button */}
            {onOpenPayment && (
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id="navbar-pay-online-btn"
                onClick={onOpenPayment}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/45 text-xs font-semibold text-[#F3E9DA] hover:text-white transition-all shadow-sm"
                title="Scan & Pay via UPI"
              >
                <QrCode className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="hidden lg:inline">Pay Online</span>
              </motion.button>
            )}

            {/* Showroom Appointment CTA */}
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://maps.app.goo.gl/bes8YX6UgE5Fdzuk9"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#AA8221] hover:from-[#E5C365] hover:to-[#B89230] text-black text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <MapPin className="w-3.5 h-3.5 text-black" />
              <span>Showroom</span>
            </motion.a>

            {/* Mobile Hamburger Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white shrink-0"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#161513]/98 backdrop-blur-2xl border-b border-[#D4AF37]/30 p-6 shadow-2xl lg:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, idx) => {
                const isActive = currentPage === link.page;
                return (
                  <motion.button
                    key={link.page}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => handleLinkClick(link.page)}
                    className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold tracking-wider transition-all ${
                      isActive
                        ? 'bg-[#D4AF37] text-black shadow-md'
                        : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                );
              })}

              {/* Quick Categories Bar in Mobile Drawer */}
              <div className="pt-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/80 block mb-2 px-1">
                  Furniture Collections
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'Dining Table and Chairs',
                    'Sofa',
                    'Beds and Wardrobe',
                    'Pooja Stand',
                    'Steel Bureau',
                    'Steel Cot',
                    'Center Table',
                  ].map((subcat) => (
                    <button
                      key={subcat}
                      onClick={() => handleLinkClick('furniture', subcat)}
                      className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#D4AF37]/15 text-neutral-300 hover:text-[#F3E9DA] border border-white/5 text-[11px] font-medium transition-all"
                    >
                      {subcat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5 text-xs">
                {onOpenPayment && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenPayment();
                    }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37]/25 via-[#D4AF37]/15 to-transparent border border-[#D4AF37]/50 text-xs font-bold text-[#F3E9DA] shadow-md"
                  >
                    <div className="flex items-center gap-2.5">
                      <QrCode className="w-4 h-4 text-[#D4AF37]" />
                      <span>Instant UPI Payment (Scan & Pay)</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                  </button>
                )}

                <a
                  href="tel:+919919915358"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 text-neutral-200"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span className="font-mono">+91 991 991 5358</span>
                </a>
                <a
                  href="https://maps.app.goo.gl/bes8YX6UgE5Fdzuk9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 text-neutral-200"
                >
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span>Chennai Showroom & Home Delivery</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
