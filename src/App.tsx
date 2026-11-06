import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'motion/react';
import { PageType, Product, ProductVariant, QuoteItem, PaymentDetails } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { FloatingChatbot } from './components/FloatingChatbot';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteDrawer } from './components/QuoteDrawer';
import { SearchModal } from './components/SearchModal';
import { PaymentModal } from './components/PaymentModal';
import { HomePage } from './pages/HomePage';
import { FurniturePage } from './pages/FurniturePage';
import { ElectronicsPage } from './pages/ElectronicsPage';
import { MobilesPage } from './pages/MobilesPage';
import { AboutPage } from './pages/AboutPage';
import { BifmaPage } from './pages/BifmaPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { getValidFurnitureCategory } from './data/products';

const PAGE_ROUTES: Record<PageType, string> = {
  home: '/',
  furniture: '/furniture',
  electronics: '/electronics',
  mobiles: '/mobiles',
  about: '/about',
  bifma: '/bifma',
  privacy: '/privacy',
  terms: '/terms',
  'not-found': '/404',
};

const ROUTE_TO_PAGE: Record<string, PageType> = {
  '/': 'home',
  '/home': 'home',
  '/furniture': 'furniture',
  '/electronics': 'electronics',
  '/mobiles': 'mobiles',
  '/about': 'about',
  '/bifma': 'bifma',
  '/privacy': 'privacy',
  '/privacy-policy': 'privacy',
  '/terms': 'terms',
  '/terms-of-service': 'terms',
  '/404': 'not-found',
};

function getPageFromPathname(pathname: string): PageType {
  const cleanPath = pathname.split('?')[0].split('#')[0].replace(/\/+$/, '').toLowerCase() || '/';
  return ROUTE_TO_PAGE[cleanPath] || 'home';
}

const PAGE_TITLES: Record<PageType, string> = {
  home: 'ODESSY FURNITURE — Luxury Ergonomic & Executive Seating',
  furniture: 'Executive & Ergonomic Furniture Collection | Odessy',
  electronics: 'Luxury Workspace Electronics | Odessy',
  mobiles: 'Modern Mobile & Tech Accessories | Odessy',
  about: 'About Odessy Furniture — Crafted for Comfort, Designed for Life',
  bifma: 'BIFMA Quality & Safety Standards | Odessy Furniture',
  privacy: 'Privacy Policy | Odessy Furniture',
  terms: 'Terms of Service | Odessy Furniture',
  'not-found': 'Page Not Found | Odessy Furniture',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() => {
    if (typeof window !== 'undefined') {
      return getPageFromPathname(window.location.pathname);
    }
    return 'home';
  });
  const [selectedFurnitureSubcat, setSelectedFurnitureSubcat] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get('category') || params.get('subcat');
      return getValidFurnitureCategory(cat);
    }
    return 'all';
  });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);

  const lenisRef = useRef<Lenis | null>(null);

  // Sync document title with current page and category
  useEffect(() => {
    if (currentPage === 'furniture' && selectedFurnitureSubcat !== 'all') {
      document.title = `${selectedFurnitureSubcat} | Odessy Furniture Collection`;
    } else {
      document.title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    }
  }, [currentPage, selectedFurnitureSubcat]);

  // Clean up invalid or redundant query params on direct load (e.g. ?category=all or invalid category)
  useEffect(() => {
    if (typeof window !== 'undefined' && currentPage === 'furniture') {
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category') || params.get('subcat');
      if (catParam) {
        const validCat = getValidFurnitureCategory(catParam);
        if (validCat === 'all') {
          window.history.replaceState({ page: 'furniture', subcategory: 'all' }, '', '/furniture');
        }
      }
    }
  }, [currentPage]);

  // Support browser back/forward buttons (popstate)
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const pageFromUrl = getPageFromPathname(window.location.pathname);
      setCurrentPage(pageFromUrl);

      if (pageFromUrl === 'furniture') {
        const params = new URLSearchParams(window.location.search);
        const catParam = params.get('category') || params.get('subcat');
        const stateCat = (event.state as { subcategory?: string } | null)?.subcategory;
        setSelectedFurnitureSubcat(getValidFurnitureCategory(catParam || stateCat));
      }

      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle category pill changes directly on FurniturePage
  const handleFurnitureCategoryChange = (subcat: string) => {
    const validCat = getValidFurnitureCategory(subcat);
    setSelectedFurnitureSubcat(validCat);

    if (typeof window !== 'undefined') {
      const targetPath =
        validCat === 'all'
          ? '/furniture'
          : `/furniture?category=${encodeURIComponent(validCat)}`;
      const currentFullUrl = window.location.pathname + window.location.search;
      if (currentFullUrl !== targetPath) {
        window.history.pushState(
          { page: 'furniture', subcategory: validCat },
          '',
          targetPath
        );
      }
    }
  };

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Instant Reset to Top on Page Navigation & URL History Sync for direct links
  const handleNavigate = (
    page: PageType,
    subcatOrReplace?: string | boolean,
    replaceArg?: boolean
  ) => {
    setCurrentPage(page);

    let subcat: string | undefined;
    let replace = false;

    if (typeof subcatOrReplace === 'string') {
      subcat = subcatOrReplace;
      replace = !!replaceArg;
    } else if (typeof subcatOrReplace === 'boolean') {
      replace = subcatOrReplace;
    }

    let targetPath = PAGE_ROUTES[page] || '/';

    if (page === 'furniture') {
      const validCat = subcat ? getValidFurnitureCategory(subcat) : 'all';
      setSelectedFurnitureSubcat(validCat);
      targetPath =
        validCat === 'all'
          ? '/furniture'
          : `/furniture?category=${encodeURIComponent(validCat)}`;
    }

    const currentFullUrl = window.location.pathname + window.location.search;
    if (currentFullUrl !== targetPath) {
      if (replace) {
        window.history.replaceState({ page, subcategory: subcat }, '', targetPath);
      } else {
        window.history.pushState({ page, subcategory: subcat }, '', targetPath);
      }
    }

    // Immediate jump without animation
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  // Add Item to Quotation Basket
  const handleAddToQuote = (
    product: Product,
    variant: ProductVariant,
    quantity: number = 1
  ) => {
    setQuoteItems((prev) => {
      const existingIdx = prev.findIndex(
        (it) => it.product.id === product.id && it.selectedVariant.name === variant.name
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      }
      return [...prev, { product, selectedVariant: variant, quantity }];
    });
    setIsQuoteDrawerOpen(true);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    setQuoteItems((prev) => {
      const updated = [...prev];
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index);
      }
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveQuoteItem = (index: number) => {
    setQuoteItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearAllQuotes = () => {
    setQuoteItems([]);
  };

  const handleOpenPayment = (details?: PaymentDetails) => {
    if (details) {
      setPaymentDetails(details);
    } else {
      const basketTotal = quoteItems.reduce((acc, it) => acc + it.product.price * it.quantity, 0);
      setPaymentDetails({
        amount: basketTotal > 0 ? basketTotal : 7150,
        items:
          quoteItems.length > 0
            ? quoteItems.map((it) => ({
                name: it.product.name,
                quantity: it.quantity,
                variantName: it.selectedVariant.name,
                price: it.product.price,
              }))
            : undefined,
        orderNote: quoteItems.length > 0 ? 'Bespoke Basket Order' : 'Direct UPI Payment',
      });
    }
    setIsPaymentModalOpen(true);
  };

  return (
    <div id="odessy-app-root" className="min-h-screen w-full bg-[#161513] text-[#EAE6DF] flex flex-col selection:bg-[#D4AF37] selection:text-[#161513] relative">
      {/* Subtle Ambient Rich Charcoal Micro-Grain Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[0] opacity-35 bg-[url('/rich-grain.png')] bg-repeat" />

      {/* Top Edge Animated Gold Glow Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Global Luxury Floating Navbar with Scroll Shrink */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        quoteItemsCount={quoteItems.reduce((sum, it) => sum + it.quantity, 0)}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenPayment={() => handleOpenPayment()}
      />

      {/* Main Page View Routing with Animated Route Transitions */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="w-full"
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={handleNavigate}
                onSelectProduct={(p) => setSelectedProduct(p)}
                onQuickQuote={(p, v) => handleAddToQuote(p, v, 1)}
              />
            )}

            {currentPage === 'furniture' && (
              <FurniturePage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onQuickQuote={(p, v) => handleAddToQuote(p, v, 1)}
                initialSubcategory={selectedFurnitureSubcat}
                onSubcategoryChange={handleFurnitureCategoryChange}
              />
            )}

            {currentPage === 'electronics' && (
              <ElectronicsPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onQuickQuote={(p, v) => handleAddToQuote(p, v, 1)}
              />
            )}

            {currentPage === 'mobiles' && (
              <MobilesPage
                onSelectProduct={(p) => setSelectedProduct(p)}
                onQuickQuote={(p, v) => handleAddToQuote(p, v, 1)}
              />
            )}

            {currentPage === 'about' && <AboutPage />}

            {currentPage === 'bifma' && <BifmaPage onNavigate={handleNavigate} />}

            {currentPage === 'privacy' && <PrivacyPolicyPage onNavigate={handleNavigate} />}

            {currentPage === 'terms' && <TermsPage onNavigate={handleNavigate} />}

            {currentPage === 'not-found' && <NotFoundPage onNavigate={handleNavigate} />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Concierge (Positioned above the Chatbot) */}
      <FloatingWhatsApp phoneNumber="919919915358" />

      {/* Floating Groq AI Chatbot Concierge */}
      <FloatingChatbot />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={(product, variant, qty) => {
          handleAddToQuote(product, variant, qty);
          setSelectedProduct(null);
        }}
        onOpenPayment={handleOpenPayment}
      />

      {/* Bespoke Quote Drawer */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearAll={handleClearAllQuotes}
        onOpenPayment={handleOpenPayment}
      />

      {/* Instant Catalog Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
      />

      {/* Direct UPI QR Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        paymentDetails={paymentDetails}
      />
    </div>
  );
}
