import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';
import { PageType } from '../types';
import { OdessyLogo } from '../components/OdessyLogo';

interface NotFoundPageProps {
  onNavigate: (page: PageType) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div
      id="not-found-page"
      className="min-h-[85vh] flex items-center justify-center bg-[#161513] text-neutral-200 px-4 pt-28 pb-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-xl w-full text-center space-y-6 p-8 rounded-3xl bg-[#1E1C18] border border-[#D4AF37]/20 shadow-2xl"
      >
        <div className="flex justify-center">
          <OdessyLogo size="lg" monogramOnly />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase font-semibold text-[#C5A059] tracking-[0.3em] block">
            404 • Coordinate Not Found
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white">
            Lost in the Architecture
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
            The page or workspace blueprint you are seeking does not exist or has been relocated to our private archives.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => onNavigate('home')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C365] text-black font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </button>

          <button
            onClick={() => onNavigate('furniture')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wider uppercase transition-all"
          >
            Explore Furniture
          </button>
        </div>
      </motion.div>
    </div>
  );
};
