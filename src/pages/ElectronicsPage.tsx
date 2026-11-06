import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Cpu, Clock, Phone, ArrowLeft } from 'lucide-react';
import { SpotlightCard } from '../components/SpotlightCard';

interface ElectronicsPageProps {
  onSelectProduct?: any;
  onQuickQuote?: any;
  onNavigate?: (page: string) => void;
}

export const ElectronicsPage: React.FC<ElectronicsPageProps> = () => {
  return (
    <div id="electronics-page" className="w-full bg-[#161513] text-neutral-200 pt-32 pb-24 min-h-[85vh] flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <SpotlightCard className="p-8 sm:p-14 bg-[#1E1C18] border border-[#D4AF37]/30 text-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 backdrop-blur-md">
              <Clock className="w-4 h-4 text-[#D4AF37] animate-spin" style={{ animationDuration: '6s' }} />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#F3E9DA]">
                In Development
              </span>
            </div>

            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white">
              Precision Desk Electronics
            </h1>

            <div className="inline-block px-5 py-2 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#D4AF37]/10 to-[#D4AF37]/20 border border-[#D4AF37]/40">
              <span className="text-xl sm:text-2xl font-serif font-bold text-gold-gradient tracking-widest uppercase">
                Coming Soon
              </span>
            </div>

            <p className="max-w-xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
              We are finalizing our precision collection of heavy-duty dual gas-spring monitor arms, glare-free optical desk screenbars, and under-desk GaN power stations.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20please%20notify%20me%20when%20Desk%20Electronics%20launch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8221] hover:from-[#FFF0D0] hover:to-[#B89230] text-black font-bold text-xs tracking-wider uppercase shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Notify Me on WhatsApp</span>
              </a>

              <a
                href="/#furniture"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = 'furniture';
                }}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs tracking-wider uppercase transition-all"
              >
                Explore Furniture Catalog
              </a>
            </div>
          </motion.div>
        </SpotlightCard>
      </div>
    </div>
  );
};
