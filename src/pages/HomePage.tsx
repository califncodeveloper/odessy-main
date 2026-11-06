import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  Check,
  Phone,
  VolumeX,
  Volume2,
  Sliders,
  Play,
  Pause,
  Activity,
  CheckCircle2,
  ChevronDown,
  Star,
  Quote,
} from 'lucide-react';
import { PageType, Product, ProductVariant } from '../types';
import { PRODUCTS } from '../data/products';
import { TESTIMONIALS, TRUST_METRICS } from '../data/projects';
import { SpotlightCard } from '../components/SpotlightCard';
import { ParallaxProjectsSection } from '../components/ParallaxProjectsSection';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onSelectProduct: (product: Product) => void;
  onQuickQuote: (product: Product, variant: ProductVariant) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickQuote,
}) => {
  // Hero Parallax Scroll Hooks
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroVideoY = useTransform(heroScrollProgress, [0, 1], ['0%', '30%']);
  const heroVideoScale = useTransform(heroScrollProgress, [0, 1], [1.05, 1.25]);
  const heroContentY = useTransform(heroScrollProgress, [0, 1], ['0%', '38%']);
  const heroContentOpacity = useTransform(heroScrollProgress, [0, 0.75], [1, 0]);

  // Video Background Controls State
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  // Chair Customizer Finish Selection
  const [selectedChairFinish, setSelectedChairFinish] = useState('butterfly');

  // Interactive Anatomy Hotspot State
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  // Interactive Ergonomic Height Calculator State (in cm)
  const [userHeightCm, setUserHeightCm] = useState<number>(175);

  // Height Calculator Logic
  const calcDeskStandHeight = Math.round(userHeightCm * 0.62);
  const calcDeskSitHeight = Math.round(userHeightCm * 0.42);
  const calcChairSeatHeight = Math.round(userHeightCm * 0.26);

  // Animated Testimonial Carousel State
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialDirection, setTestimonialDirection] = useState(1);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  // Auto-cycle testimonials every 5.5 seconds (pause on hover)
  useEffect(() => {
    if (isTestimonialHovered) return;
    const interval = setInterval(() => {
      setTestimonialDirection(1);
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);

  const handleNextTestimonial = () => {
    setTestimonialDirection(1);
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialDirection(-1);
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Anatomy Hotspot Points on Chair Architecture (Odessy Butterfly Mesh)
  const anatomyHotspots = [
    {
      id: 0,
      shortLabel: 'Lumbar Support',
      title: 'Adaptive Lumbar Support Matrix',
      subtitle: 'Dynamic Posture & Spine Alignment',
      desc: 'Self-adjusting lumbar curve cradles the lower vertebrae, maintaining natural spinal alignment during 10+ hour focus sessions.',
      metric: '92% Lower Back Relief',
      badge: 'Part 01 • Lumbar Support',
      x: '47%',
      y: '42%',
    },
    {
      id: 1,
      shortLabel: 'Airflow Mesh',
      title: 'High-Tensile 3D Airflow Mesh',
      subtitle: 'Breathable Temperature Control',
      desc: 'Reinforced polymer micro-weave backrest promotes 360° airflow, resisting sag and heat build-up in Chennai climate.',
      metric: '+45% Cooler Airflow',
      badge: 'Part 02 • Airflow Mesh',
      x: '45%',
      y: '26%',
    },
    {
      id: 2,
      shortLabel: 'T-Armrests',
      title: 'Multi-Height Contoured Armrests',
      subtitle: 'Shoulder & Wrist Pressure Relief',
      desc: 'Quick-adjust contoured T-armrests relieve shoulder fatigue and forearm strain during intensive typing.',
      metric: 'Neutral Arm Angle',
      badge: 'Part 03 • Adjustable Armrests',
      x: '31%',
      y: '41%',
    },
    {
      id: 3,
      shortLabel: 'Gas Lift & Base',
      title: 'Class-4 Pneumatic Gas Lift & Base',
      subtitle: 'Heavy-Duty 360° Hydraulic Suspension',
      desc: 'BIFMA-certified explosion-proof hydraulic cylinder with seamless height control and silent 5-star castor wheels.',
      metric: '120kg Tested Capacity',
      badge: 'Part 04 • Pneumatic Base',
      x: '50%',
      y: '66%',
    },
  ];

  const chairFinishes = [
    {
      id: 'butterfly',
      name: 'Odessy Butterfly Mesh',
      hex: '#18181B',
      image: '/products/butterfly_mesh_3x4.jpg',
      description: 'Dual-Wing Adaptive Lumbar & Airflow Mesh',
      price: '₹7,150',
      originalPrice: '₹9,750',
    },
    {
      id: 'wooden-recliner',
      name: 'Odessy Wooden Recliner',
      hex: '#854D0E',
      image: '/products/wooden_recliner_3x4.jpg',
      description: 'Natural Seasoned Teak Hardwood Relaxation Recline',
      price: '₹6,240',
      originalPrice: '₹8,450',
    },
    {
      id: 'marvel',
      name: 'Odessy Marvel High-Back',
      hex: '#27272A',
      image: '/products/marvel_mesh_3x4.jpg',
      description: 'Orthopedic Spine Curve & Padded Arms',
      price: '₹6,500',
      originalPrice: '₹8,840',
    },
  ];

  const currentChair = chairFinishes.find((f) => f.id === selectedChairFinish) || chairFinishes[0];

  // Widened Landscape Showcase Flagship Models (Competitor Benchmark Style)
  const showcaseFlagships = [
    {
      product: PRODUCTS.find((p) => p.id === 'butterfly-mesh-chair') || PRODUCTS[0],
      displayName: 'The Butterfly Mesh',
      tagline: 'Adaptive biomechanical spine matrix. All-day breathable comfort.',
      gradient: 'from-[#171412] via-[#0E0C0A] to-[#060608]',
      border: 'border-[#D4AF37]/30',
      glow: 'bg-[#D4AF37]/15',
      accentColor: '#D4AF37',
      saleTag: 'Free Delivery in Chennai',
      reverse: false,
    },
    {
      product: PRODUCTS.find((p) => p.id === 'wooden-recliner-chair') || PRODUCTS[1],
      displayName: 'The Wooden Recliner',
      tagline: 'Artisanal seasoned solid hardwood. 4-stage natural relaxation recline.',
      gradient: 'from-[#1B1510] via-[#110D09] to-[#060504]',
      border: 'border-amber-500/25',
      glow: 'bg-amber-500/12',
      accentColor: '#FBBF24',
      saleTag: 'Seasoned Hardwood Classic',
      reverse: true,
    },
    {
      product: PRODUCTS.find((p) => p.id === 'marvel-mesh-chair') || PRODUCTS[2],
      displayName: 'The Marvel High-Back',
      tagline: 'S-curve thoracic architecture. Zero-fatigue focus for long workdays.',
      gradient: 'from-[#12161E] via-[#0C0F14] to-[#060709]',
      border: 'border-blue-500/25',
      glow: 'bg-blue-500/12',
      accentColor: '#60A5FA',
      saleTag: 'Chennai Bestseller',
      reverse: false,
    },
    {
      product: PRODUCTS.find((p) => p.id === 'sovereign-leather-chair') || PRODUCTS[3],
      displayName: 'The Sovereign Recliner',
      tagline: 'Executive authority. Plush multi-layer leather with 130° power recline.',
      gradient: 'from-[#16131C] via-[#0D0B12] to-[#060608]',
      border: 'border-purple-500/25',
      glow: 'bg-purple-500/12',
      accentColor: '#C084FC',
      saleTag: 'Executive Boss Edition',
      reverse: true,
    },
  ];

  // Chennai Tech Corridor Client Hubs Marquee
  const chennaiClientHubs = [
    'Zoho Campus, Guduvanchery',
    'Freshworks HQ, Global Infocity',
    'DLF Cybercity, Porur',
    'IIT Madras Research Park',
    'T-Nagar Creative Studios',
    'OMR IT Expressway',
    'Guindy Industrial Estate',
    'Tidel Park, Tharamani',
    'Ascendas OneHub, OMR',
    'Ramanujan IT City',
  ];

  return (
    <div id="home-page" className="w-full bg-[#161513] text-neutral-200 selection:bg-[#D4AF37] selection:text-black">
      {/* ================= HERO SECTION WITH PARALLAX VIDEO BACKGROUND ================= */}
      <section
        ref={heroRef}
        className="relative min-h-[96vh] flex items-center justify-center overflow-hidden bg-grid-framer"
      >
        {/* Parallax Ambient Video Background Layer */}
        <motion.div
          style={{ y: heroVideoY, scale: heroVideoScale }}
          className="absolute inset-0 z-0 origin-center"
        >
          <video
            id="hero-bg-video"
            autoPlay
            loop
            muted={isVideoMuted}
            playsInline
            className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08]"
            poster="/products/butterfly_mesh_3x4.jpg"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <source src="/flow-1080p-202607031442.mp4" type="video/mp4" />
            <source src="/office-chair-product-hero-shot-202607031701.mp4" type="video/mp4" />
          </video>

          {/* Minimal Clean Vignette & Light Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#161513] via-[#161513]/25 to-black/40" />
          <div className="absolute inset-0 bg-radial-luxury opacity-30 pointer-events-none" />
        </motion.div>

        {/* Floating Video Control Widget */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 right-6 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] text-neutral-300 font-mono shadow-lg"
        >
          <button
            onClick={() => {
              const video = document.getElementById('hero-bg-video') as HTMLVideoElement;
              if (video) {
                if (video.paused) {
                  video.play();
                  setIsVideoPlaying(true);
                } else {
                  video.pause();
                  setIsVideoPlaying(false);
                }
              }
            }}
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            title={isVideoPlaying ? 'Pause video' : 'Play video'}
          >
            {isVideoPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#D4AF37]" />}
            <span>{isVideoPlaying ? 'Pause' : 'Play'}</span>
          </button>

          <span className="w-[1px] h-3 bg-white/20" />

          <button
            onClick={() => {
              const video = document.getElementById('hero-bg-video') as HTMLVideoElement;
              if (video) {
                video.muted = !isVideoMuted;
                setIsVideoMuted(!isVideoMuted);
              }
            }}
            className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
            title={isVideoMuted ? 'Unmute video' : 'Mute video'}
          >
            {isVideoMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />}
          </button>
        </motion.div>

        {/* Hero Content with Parallax Fade-Out */}
        <motion.div
          style={{ y: heroContentY, opacity: heroContentOpacity }}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 pb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            {/* Minimal Eyebrow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-[#D4AF37]/30 backdrop-blur-md"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#F3E9DA] uppercase">
                Odessy Furniture • Chennai
              </span>
            </motion.div>

            {/* Clean Minimal Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-5xl sm:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
            >
              Crafted for Comfort.{' '}
              <span className="text-gold-gradient block mt-1">
                Designed for Life.
              </span>
            </motion.h1>

            {/* Ultra-Short 1-Line Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="max-w-md mx-auto text-xs sm:text-sm text-neutral-300 font-light tracking-wide"
            >
              Pain-free working. Max productivity. Healthier living.
            </motion.p>

            {/* Minimal Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(212,175,55,0.45)' }}
                whileTap={{ scale: 0.97 }}
                id="hero-explore-furniture-btn"
                onClick={() => onNavigate('furniture')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#F9E7B9] via-[#D4AF37] to-[#AA8221] hover:from-[#FFF0D0] hover:to-[#B89230] text-black font-bold text-xs tracking-widest uppercase shadow-[0_8px_30px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-showroom-btn"
                href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20I'd%20like%20to%20inquire%20about%20chairs%20and%20home%20delivery%20in%20Chennai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/15 hover:border-[#D4AF37]/50 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-xl transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp (+91 991 991 5358)</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Scroll Down Prompt */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70 pointer-events-none"
        >
          <span>Scroll to Explore</span>
          <ChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </section>

      {/* ================= TRUST METRICS STRIP ================= */}
      <section className="relative z-20 -mt-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {TRUST_METRICS.map((metric, idx) => (
            <SpotlightCard
              key={idx}
              className="p-3.5 text-center bg-[#1E1C18]/90 border border-white/10 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.7)]"
              enableTilt={true}
            >
              <span className="font-serif font-bold text-lg sm:text-xl text-gold-gradient block">
                {metric.value}
              </span>
              <span className="text-[10px] sm:text-[11px] text-neutral-400 font-medium">
                {metric.label}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </section>

      {/* ================= WIDENED LANDSCAPE FURNITURE SHOWCASE ================= */}
      {/* Competitor Benchmark: Full-width cards with giant chair images covering the widened space & minimal text */}
      <section className="py-12 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono mb-2">
              <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Signature Flagship Series</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight">
              Featured Ergonomic Seating
            </h2>
          </div>

          <button
            onClick={() => onNavigate('furniture')}
            className="mt-4 md:mt-0 text-xs font-semibold text-[#D4AF37] hover:text-[#F3E9DA] flex items-center gap-1 group/link transition-colors uppercase tracking-wider"
          >
            <span>View Complete Catalog</span>
            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stacked Widened Landscape Cards with Alternating Giant Chair Layouts */}
        <div className="space-y-8 lg:space-y-12">
          {showcaseFlagships.map((item) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`relative w-full rounded-3xl sm:rounded-[36px] overflow-hidden border ${item.border} bg-gradient-to-br ${item.gradient} p-6 sm:p-10 lg:p-14 shadow-[0_30px_70px_rgba(0,0,0,0.85)] group backdrop-blur-xl`}
            >
              {/* Subtle Top Glow Accent */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-70" />

              {/* Ambient Background Radial Glow behind Chair */}
              <div
                className={`absolute ${
                  item.reverse ? 'left-6 lg:left-16' : 'right-6 lg:right-16'
                } top-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full ${item.glow} blur-3xl pointer-events-none`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
                {/* Mobile Title (visible ONLY on mobile / smaller screens < lg) */}
                <div className="block lg:hidden">
                  <h3 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                    {item.displayName}
                  </h3>
                </div>

                {/* Giant Furniture Image Side - In between title and description on mobile */}
                <div
                  className={`flex items-center justify-center relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] lg:col-span-7 ${
                    item.reverse ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -6 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                    className="w-full h-full flex items-center justify-center cursor-pointer p-2 sm:p-4"
                    onClick={() => onSelectProduct(item.product)}
                  >
                    <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/20 hover:border-[#D4AF37]/60 shadow-[0_25px_50px_rgba(0,0,0,0.9)] bg-black/40 backdrop-blur-md transition-all duration-500 group/img">
                      <img
                        src={item.product.image}
                        alt={item.displayName}
                        className="max-h-[320px] sm:max-h-[420px] lg:max-h-[500px] w-auto object-contain rounded-2xl sm:rounded-3xl transition-transform duration-700 group-hover/img:scale-105"
                      />
                      {/* Subtle Glass Inner Shimmer Border */}
                      <div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10" />
                    </div>
                  </motion.div>
                </div>

                {/* Text Side - Title on desktop, followed by Description and Action Row */}
                <div
                  className={`space-y-4 sm:space-y-6 lg:col-span-5 ${
                    item.reverse ? 'lg:order-2 lg:pl-6' : 'lg:order-1 lg:pr-6'
                  }`}
                >
                  {/* Desktop Title (hidden on mobile, visible on lg+) */}
                  <div className="hidden lg:block">
                    <h3 className="font-serif font-bold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
                      {item.displayName}
                    </h3>
                  </div>

                  {/* Description / Tagline (appears after image on mobile) */}
                  <p className="text-neutral-300 font-light text-sm sm:text-base lg:text-lg leading-relaxed">
                    {item.tagline}
                  </p>

                  {/* Action Row */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => onSelectProduct(item.product)}
                      className="px-7 py-3 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-black border border-white/20 hover:border-[#D4AF37] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg flex items-center gap-2 group/btn"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>

                    <div className="flex items-baseline gap-2">
                      <span className="text-xs text-neutral-400 font-mono">From</span>
                      <span className="text-xl sm:text-2xl font-bold font-serif text-white">
                        ₹{item.product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      {item.saleTag}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal Bottom CTA Button */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onNavigate('furniture')}
            className="px-8 py-4 rounded-full bg-[#1E1C18] hover:bg-[#25221E] border border-[#D4AF37]/40 text-[#F3E9DA] text-xs font-mono uppercase tracking-widest transition-all duration-300 shadow-xl inline-flex items-center gap-3 group"
          >
            <span>Explore Full Chennai Furniture Collection</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1.5 transition-transform" />
          </motion.button>
        </div>
      </section>

      {/* ================= INTERACTIVE POSTURE ANATOMY EXPLORER ================= */}
      {/* Placed AFTER Featured Ergonomic Seating */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Mobile Title & Eyebrow (visible ONLY on mobile / smaller screens < lg) */}
          <div className="block lg:hidden space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono">
              <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Biomechanical Science</span>
            </div>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Anatomy of the{' '}
              <span className="text-gold-gradient">Butterfly Mesh</span>
            </h2>
          </div>

          {/* Interactive Chair Image Stage with Hotspot Pins */}
          {/* On mobile: Appears 2nd (in between title and description!) */}
          {/* On desktop: lg:col-span-7 lg:order-2 (on right) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 lg:order-2 relative bg-[#1A1815] rounded-3xl border border-white/10 overflow-hidden min-h-[420px] sm:min-h-[520px] flex items-center justify-center p-6 select-none"
          >
            {/* Ambient Background Radial Glow */}
            <div className="absolute inset-0 bg-radial-luxury opacity-80 pointer-events-none" />
            <div className="absolute w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

            {/* Locked Image Wrapper - pins are permanently bound to chair pixels regardless of screen size */}
            <div className="relative inline-block max-h-[380px] sm:max-h-[460px] w-auto">
              <img
                src="/products/butterfly_mesh_3x4.jpg"
                alt="Odessy Butterfly Mesh Chair Anatomy"
                className="max-h-[380px] sm:max-h-[460px] w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] block select-none pointer-events-none"
                draggable={false}
              />

              {/* Interactive Hotspot Buttons Positioned Over Image */}
              {anatomyHotspots.map((hs) => {
                const isActive = activeHotspot === hs.id;
                return (
                  <div
                    key={hs.id}
                    style={{ left: hs.x, top: hs.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <button
                      onClick={() => setActiveHotspot(hs.id)}
                      className={`relative p-2 rounded-full transition-all duration-300 group/btn flex items-center justify-center ${
                        isActive ? 'scale-110' : 'hover:scale-105'
                      }`}
                      aria-label={`Hotspot 0${hs.id + 1} ${hs.title}`}
                    >
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isActive ? 'bg-[#D4AF37]' : 'bg-white/30'
                        }`}
                      />
                      <span
                        className={`relative inline-flex items-center justify-center rounded-full h-7 w-7 text-xs font-bold transition-colors ${
                          isActive
                            ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.9)]'
                            : 'bg-black/90 text-white border border-white/30 group-hover/btn:border-[#D4AF37]'
                        }`}
                      >
                        0{hs.id + 1}
                      </span>
                    </button>

                    {/* Informative Label Pill showing what 1, 2, 3, 4 signifies */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, y: hs.id === 3 ? -6 : 6, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: hs.id === 3 ? -4 : 4, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none z-40 ${
                            hs.id === 3 ? 'bottom-full mb-1.5' : 'top-full mt-1.5'
                          }`}
                        >
                          <div className="bg-[#1E1C18]/95 border border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(0,0,0,0.85)] px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[11px] font-sans font-semibold text-[#F3E9DA] tracking-wide">
                              {hs.shortLabel}
                            </span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Description & Detail Card & Tabs Side */}
          {/* On mobile: Appears 3rd (after the chair image!) */}
          {/* On desktop: lg:col-span-5 lg:order-1 (on the left with desktop title!) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:order-1 space-y-6"
          >
            {/* Desktop Title & Eyebrow (hidden on mobile, visible lg+) */}
            <div className="hidden lg:block space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono">
                <Activity className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Biomechanical Science</span>
              </div>

              <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Anatomy of the{' '}
                <span className="text-gold-gradient">Butterfly Mesh</span>
              </h2>
            </div>

            {/* Description (appears after image on mobile) */}
            <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              Every curve, spring, and polymer matrix in the Odessy Butterfly Mesh Chair is engineered to actively support lumbar alignment, reduce cervical spine stress, and maintain cool airflow throughout long workdays.
            </p>

            {/* Dynamic Active Hotspot Detail Card */}
            <div className="p-5 rounded-2xl bg-[#1E1C18] border border-[#D4AF37]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] space-y-3">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-[#D4AF37]/15 text-[#F3E9DA] border border-[#D4AF37]/40">
                  {anatomyHotspots[activeHotspot].badge}
                </span>
                <span className="text-[11px] font-mono text-[#D4AF37] font-semibold">
                  {anatomyHotspots[activeHotspot].metric}
                </span>
              </div>

              <div>
                <h3 className="font-serif font-bold text-lg text-white">
                  {anatomyHotspots[activeHotspot].title}
                </h3>
                <span className="text-xs text-[#C5A059] block mb-1">
                  {anatomyHotspots[activeHotspot].subtitle}
                </span>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {anatomyHotspots[activeHotspot].desc}
                </p>
              </div>
            </div>

            {/* Hotspot Step Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {anatomyHotspots.map((hs) => (
                <button
                  key={hs.id}
                  onClick={() => setActiveHotspot(hs.id)}
                  className={`py-2 px-2.5 rounded-xl text-center text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                    activeHotspot === hs.id
                      ? 'bg-[#D4AF37] text-black font-bold shadow-md'
                      : 'bg-white/5 text-neutral-400 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span className="opacity-60 text-[10px]">0{hs.id + 1}</span>
                  <span className="truncate font-sans font-medium text-[11px]">{hs.shortLabel}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STACKED ARCHITECTURAL PARALLAX PROJECTS ================= */}
      <ParallaxProjectsSection onNavigateFurniture={() => onNavigate('furniture')} />

      {/* ================= INTERACTIVE 360 FINISH CUSTOMIZER ================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Chair Selector</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            Choose Your Signature Ergonomic Model
          </h2>
        </motion.div>

        <SpotlightCard className="bg-[#1C1A17]" contentClassName="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          {/* Mobile Title (visible ONLY on mobile < lg) */}
          <div className="block lg:hidden">
            <span className="text-xs uppercase font-mono tracking-wider text-neutral-400 block mb-1">
              Select Signature Finish:
            </span>
            <h3 className="font-serif font-bold text-2xl text-white">
              {currentChair.name}
            </h3>
          </div>

          {/* Interactive Preview Stage (7 cols) - In between title and options on mobile, on right on desktop */}
          <div className="w-full lg:col-span-7 lg:order-2 flex flex-col items-center justify-center bg-[#141311] rounded-2xl p-6 border border-white/10 relative overflow-hidden min-h-[340px] sm:min-h-[380px]">
            {/* Ambient Lighting */}
            <div className="absolute inset-0 bg-radial-luxury opacity-70 pointer-events-none" />
            <div className="absolute w-72 h-72 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.img
                key={currentChair.image}
                initial={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.94, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                src={currentChair.image}
                alt={currentChair.name}
                className="max-h-72 sm:max-h-80 w-auto object-contain rounded-xl drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] relative z-10"
              />
            </AnimatePresence>
            <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] text-neutral-400 flex items-center gap-1.5 z-20">
              <RotateCcw className="w-3 h-3 text-[#D4AF37]" /> Authentic Product Preview
            </div>
          </div>

          {/* Customizer Controls (5 cols) - On desktop on left, on mobile below image */}
          <div className="w-full lg:col-span-5 lg:order-1 space-y-5">
            <div>
              <span className="hidden lg:block text-xs uppercase font-mono tracking-wider text-neutral-400 mb-2.5">
                Select Model:
              </span>
              <div className="space-y-2">
                {chairFinishes.map((finish) => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedChairFinish(finish.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-xs transition-all ${
                      selectedChairFinish === finish.id
                        ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-white shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        : 'border-white/10 bg-white/5 text-neutral-400 hover:border-white/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className="w-4 h-4 rounded-full border border-white/30 shadow-inner"
                        style={{ backgroundColor: finish.hex }}
                      />
                      <div className="text-left">
                        <span className="font-semibold text-sm text-white block">{finish.name}</span>
                        <span className="text-[11px] text-neutral-400 font-light">{finish.description}</span>
                      </div>
                    </div>
                    {selectedChairFinish === finish.id && (
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 ml-2" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-white/10">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs text-neutral-400">Price (INR):</span>
                <span className="text-base font-bold text-gold-gradient font-serif">
                  {currentChair.name} ({currentChair.price})
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={() => onNavigate('furniture')}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold tracking-wide transition-all text-center"
                >
                  View Catalog
                </button>
                <a
                  href={`https://wa.me/919919915358?text=${encodeURIComponent(
                    `Hello Odessy Furniture, I would like to order the ${currentChair.name} for ${currentChair.price} with Chennai delivery.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold tracking-wide transition-all text-center flex items-center justify-center gap-1.5 shadow-md"
                >
                  <Phone className="w-3.5 h-3.5" /> Order via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ================= INTERACTIVE POSTURE & DESK HEIGHT CALCULATOR ================= */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <SpotlightCard
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="p-7 sm:p-10 bg-[#1C1A17] border border-[#D4AF37]/30"
        >
          <div className="max-w-3xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#F3E9DA] border border-[#D4AF37]/30 text-[11px] font-mono uppercase mb-2">
              <Sliders className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Personal Ergonomic Matrix</span>
            </div>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
              Calibrate Your Perfect Chair & Desk Elevation
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 font-light">
              Slide your stature to dynamically simulate ANSI/BIFMA certified standing desk and chair seat elevations.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {/* Height Slider */}
            <div className="bg-black/50 p-5 rounded-2xl border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-neutral-400 font-medium">Your Stature:</span>
                <span className="text-lg font-mono font-bold text-gold-gradient">
                  {userHeightCm} cm / {Math.floor(userHeightCm / 30.48)}&apos;{Math.round((userHeightCm % 30.48) / 2.54)}&quot;
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="205"
                value={userHeightCm}
                onChange={(e) => setUserHeightCm(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
              />
              <div className="flex justify-between text-[10px] text-neutral-500 font-mono mt-1.5">
                <span>150 cm (4&apos;11&quot;)</span>
                <span>175 cm (5&apos;9&quot;)</span>
                <span>205 cm (6&apos;9&quot;)</span>
              </div>
            </div>

            {/* Calculated Dimensions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              <motion.div
                layout
                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
              >
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  Standing Desk
                </span>
                <motion.span
                  key={calcDeskStandHeight}
                  initial={{ scale: 1.15, color: '#D4AF37' }}
                  animate={{ scale: 1, color: '#FFFFFF' }}
                  className="text-2xl font-serif font-bold block"
                >
                  {calcDeskStandHeight} cm
                </motion.span>
                <span className="text-[10px] text-[#C5A059] mt-0.5 block">90° Elbow Angle</span>
              </motion.div>

              <motion.div
                layout
                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
              >
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  Sitting Desk
                </span>
                <motion.span
                  key={calcDeskSitHeight}
                  initial={{ scale: 1.15, color: '#D4AF37' }}
                  animate={{ scale: 1, color: '#FFFFFF' }}
                  className="text-2xl font-serif font-bold block"
                >
                  {calcDeskSitHeight} cm
                </motion.span>
                <span className="text-[10px] text-[#C5A059] mt-0.5 block">Relaxed Shoulders</span>
              </motion.div>

              <motion.div
                layout
                className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center"
              >
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                  Chair Seat Height
                </span>
                <motion.span
                  key={calcChairSeatHeight}
                  initial={{ scale: 1.15, color: '#D4AF37' }}
                  animate={{ scale: 1, color: '#FFFFFF' }}
                  className="text-2xl font-serif font-bold block"
                >
                  {calcChairSeatHeight} cm
                </motion.span>
                <span className="text-[10px] text-[#C5A059] mt-0.5 block">Feet Flat on Floor</span>
              </motion.div>
            </div>

            {/* Recommendation Box */}
            <div className="p-3.5 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="text-xs font-semibold text-white">
                  Recommended: Odessy Butterfly Mesh Chair + C-Shape Ergonomic Table
                </span>
              </div>
              <button
                onClick={() => onNavigate('furniture')}
                className="shrink-0 px-4 py-1.5 rounded-xl bg-[#D4AF37] text-black text-xs font-bold tracking-wider uppercase shadow-md hover:bg-white transition-colors"
              >
                View Catalog →
              </button>
            </div>
          </div>
        </SpotlightCard>
      </section>

      {/* ================= ANIMATED TESTIMONIALS & CLIENT SHOWCASE ================= */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#C5A059] border border-[#D4AF37]/30 text-xs uppercase tracking-widest font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Chennai Client Stories</span>
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Trusted Across Chennai
          </h2>
        </motion.div>

        {/* Dynamic Animated Carousel with Framer Motion */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsTestimonialHovered(true)}
          onMouseLeave={() => setIsTestimonialHovered(false)}
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-radial-luxury opacity-60 pointer-events-none" />

          <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={testimonialDirection}>
              <motion.div
                key={activeTestimonial}
                custom={testimonialDirection}
                initial={{ opacity: 0, x: testimonialDirection > 0 ? 60 : -60, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: testimonialDirection > 0 ? -60 : 60, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-[#1E1C18]/95 border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-xl relative overflow-hidden"
              >
                {/* Decorative Quote Icon */}
                <Quote className="absolute -top-3 right-6 w-24 h-24 text-white/[0.04] pointer-events-none" />

                {/* Gold Star Ratings */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(TESTIMONIALS[activeTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                  <span className="text-xs font-mono text-[#D4AF37] font-semibold ml-1.5">5.0</span>
                </div>

                {/* Quote Body */}
                <p className="font-serif text-base sm:text-xl lg:text-2xl text-white font-normal leading-relaxed mb-6 italic">
                  &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
                </p>

                {/* Author Info */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3.5">
                    <img
                      src={TESTIMONIALS[activeTestimonial].avatar}
                      alt={TESTIMONIALS[activeTestimonial].name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#D4AF37]/50 shadow-md"
                    />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base text-white">
                        {TESTIMONIALS[activeTestimonial].name}
                      </h4>
                      <p className="text-xs text-[#C5A059]">
                        {TESTIMONIALS[activeTestimonial].role} • {TESTIMONIALS[activeTestimonial].company}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                    {TESTIMONIALS[activeTestimonial].productExperience}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setTestimonialDirection(idx > activeTestimonial ? 1 : -1);
                    setActiveTestimonial(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeTestimonial === idx
                      ? 'w-8 bg-[#D4AF37]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextTestimonial}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Infinite Client Hubs Marquee Across Chennai */}
        <div className="mt-16 overflow-hidden relative border-y border-white/10 py-5 select-none bg-black/40">
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-[#161513] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-[#161513] to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-10 whitespace-nowrap will-change-transform"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          >
            {[...chennaiClientHubs, ...chennaiClientHubs].map((hub, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-mono text-neutral-400">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="hover:text-[#F3E9DA] transition-colors">{hub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
