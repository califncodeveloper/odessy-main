import React from 'react';

interface OdessyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  monogramOnly?: boolean;
  onClick?: () => void;
}

export const OdessyLogo: React.FC<OdessyLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  monogramOnly = false,
  onClick,
}) => {
  const iconHeights = {
    sm: 'h-9 w-9 sm:h-10 sm:w-10',
    md: 'h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14',
    lg: 'h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24',
    xl: 'h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32',
  };

  const titleSizes = {
    sm: 'text-sm sm:text-base tracking-[0.16em]',
    md: 'text-base sm:text-lg lg:text-xl tracking-[0.16em] sm:tracking-[0.18em]',
    lg: 'text-lg sm:text-xl lg:text-2xl tracking-[0.16em] sm:tracking-[0.20em]',
    xl: 'text-2xl sm:text-3xl lg:text-4xl tracking-[0.18em] sm:tracking-[0.22em]',
  };

  const subSizes = {
    sm: 'text-[7px] sm:text-[8px] tracking-[0.26em] sm:tracking-[0.34em]',
    md: 'text-[8px] sm:text-[9px] lg:text-[10px] tracking-[0.28em] sm:tracking-[0.38em]',
    lg: 'text-[9px] sm:text-[10px] lg:text-xs tracking-[0.30em] sm:tracking-[0.40em]',
    xl: 'text-[10px] sm:text-xs lg:text-sm tracking-[0.34em] sm:tracking-[0.46em]',
  };

  return (
    <div
      id="odessy-brand-logo"
      onClick={onClick}
      className={`inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 select-none group cursor-pointer shrink-0 ${className}`}
    >
      {/* 3D Gold Emblem Monogram */}
      <img
        src="/logo-without-bg.png"
        alt="Odessy"
        className={`${iconHeights[size]} object-contain shrink-0 drop-shadow-[0_4px_16px_rgba(212,175,55,0.45)] transition-transform duration-300 group-hover:scale-105`}
      />

      {/* Brand Typography to the Right */}
      {!monogramOnly && (
        <div className="flex flex-col justify-center text-left">
          {/* Main Brand Title: ODESSY with Upward Arrow inside the 'O' */}
          <span
            className={`font-serif font-bold text-gold-gradient leading-none transition-all duration-300 drop-shadow-[0_2px_12px_rgba(212,175,55,0.35)] flex items-center ${titleSizes[size]}`}
          >
            {/* Custom Stylized 'O' with Upper Arrow */}
            <svg
              viewBox="0 0 100 100"
              className="inline-block shrink-0 drop-shadow-[0_2px_8px_rgba(212,175,55,0.45)]"
              style={{
                height: '0.88em',
                width: '0.88em',
                marginRight: '0.12em',
                verticalAlign: '-0.04em',
              }}
              aria-label="O"
            >
              <defs>
                <linearGradient id="odessyGoldOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF5DC" />
                  <stop offset="25%" stopColor="#ECD075" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="80%" stopColor="#9C7418" />
                  <stop offset="100%" stopColor="#F7E28E" />
                </linearGradient>
                <linearGradient id="odessyArrowFacetLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFF9E6" />
                  <stop offset="100%" stopColor="#F0D47C" />
                </linearGradient>
                <linearGradient id="odessyArrowFacetRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C59B28" />
                  <stop offset="100%" stopColor="#845E0B" />
                </linearGradient>
              </defs>
              {/* Outer Serif O contour */}
              <path
                d="M 50 3
                   C 76.5 3 96 24 96 50
                   C 96 76 76.5 97 50 97
                   C 23.5 97 4 76 4 50
                   C 4 24 23.5 3 50 3 Z
                   M 50 11.5
                   C 32 11.5 19.5 28 19.5 50
                   C 19.5 72 32 88.5 50 88.5
                   C 68 88.5 80.5 72 80.5 50
                   C 80.5 28 68 11.5 50 11.5 Z"
                fill="url(#odessyGoldOuter)"
                fillRule="evenodd"
              />
              {/* Left facet of Arrow (highlighted) */}
              <path
                d="M 50 24
                   L 35 48
                   L 46 48
                   L 46 78
                   L 50 78 Z"
                fill="url(#odessyArrowFacetLeft)"
              />
              {/* Right facet of Arrow (shaded) */}
              <path
                d="M 50 24
                   L 65 48
                   L 54 48
                   L 54 78
                   L 50 78 Z"
                fill="url(#odessyArrowFacetRight)"
              />
            </svg>
            <span>DESSY</span>
          </span>

          {/* Subtitle: FURNITURE */}
          {showSubtitle && (
            <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
              <span
                className={`font-serif font-semibold text-[#D4AF37] uppercase leading-none drop-shadow-[0_1px_4px_rgba(212,175,55,0.3)] ${subSizes[size]}`}
              >
                FURNITURE
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37]/80 to-[#D4AF37]" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
