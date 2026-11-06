import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ShieldCheck,
  Award,
  ArrowUpRight,
  CheckCircle2,
  Heart,
} from 'lucide-react';
import { OdessyLogo } from './OdessyLogo';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType, subcategory?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setIsSubscribed(false), 5000);
    }
  };

  return (
    <footer id="main-footer" className="relative bg-[#11100E] border-t border-[#D4AF37]/20 text-[#A8A49C] overflow-hidden">
      {/* Decorative Gold Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-radial-luxury pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand & Manifesto (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <OdessyLogo size="lg" onClick={() => onNavigate('home')} />
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm">
              <strong className="text-white">Odessy Furniture</strong> — Crafted for Comfort. Designed for Life. Premium ergonomic seating, executive chairs, dining suites, sofas, beds, wardrobes, and handcrafted furniture with fast home delivery in Chennai, Tamil Nadu.
            </p>

            {/* Certifications Badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Chennai Home Delivery</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300">
                <Award className="w-4 h-4 text-[#C5A059]" />
                <span>BIFMA Standards</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-semibold text-sm text-[#F3E9DA] tracking-wider uppercase">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Ergonomic Chairs')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Ergonomic Mesh Chairs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Executive Chairs')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Executive Chairs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Dining Table and Chairs')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Dining Table & Chairs</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Sofa')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Sofas & Lounges</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Beds and Wardrobe')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Beds & Wardrobes</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Pooja Stand')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Pooja Mandapams</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Steel Bureau')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Steel Bureaus & Cots</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('furniture', 'Center Table')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Center Tables</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('electronics')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Desk Electronics (Soon)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mobiles')}
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1.5 text-left"
                >
                  <span>Mobile Stands (Soon)</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Support (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif font-semibold text-sm text-[#F3E9DA] tracking-wider uppercase">
              Odessy Chennai
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About Odessy Furniture
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Warranty & Guarantees
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/919919915358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors flex items-center gap-1"
                >
                  <span>WhatsApp Orders</span>
                  <ArrowUpRight className="w-3 h-3 text-[#25D366]" />
                </a>
              </li>
              <li>
                <a
                  href="tel:+919919915358"
                  className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                >
                  <span>+91 991 991 5358</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Verified Contact Details & Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif font-semibold text-sm text-[#F3E9DA] tracking-wider uppercase">
              Chennai Atelier & Support
            </h4>

            {/* Clickable Address Link */}
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#F3E9DA] block">
                  Odessy Furniture, Chennai
                </span>
                <span className="text-[11px] text-neutral-400">
                  Chennai, Tamil Nadu, India • Direct Doorstep Delivery Available
                </span>
              </div>
            </div>

            {/* Clickable Phone & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                id="footer-phone-link"
                href="tel:+919919915358"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-200 hover:text-[#D4AF37] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="font-mono font-medium">991 991 5358</span>
              </a>

              <a
                id="footer-email-link"
                href="mailto:info@odessy.in"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-neutral-200 hover:text-[#D4AF37] transition-all truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span className="truncate">info@odessy.in</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-facebook-link"
                href="https://www.facebook.com/profile.php?id=61592335061261"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#1877F2]/20 border border-white/5 hover:border-[#1877F2]/40 text-neutral-300 hover:text-white transition-all text-xs"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
                <span>Facebook</span>
              </a>

              <a
                id="footer-instagram-link"
                href="https://www.instagram.com/aalqua_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#E4405F]/20 border border-white/5 hover:border-[#E4405F]/40 text-neutral-300 hover:text-white transition-all text-xs"
              >
                <Instagram className="w-4 h-4 text-[#E4405F]" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Newsletter Subscription */}
            <form onSubmit={handleNewsletterSubmit} className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter email for offers..."
                  className="flex-1 bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 text-xs px-3.5 py-2.5 rounded-xl text-white placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E5C365] text-black font-semibold text-xs transition-all"
                >
                  Join
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[11px] text-emerald-400 mt-1.5 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Thank you for subscribing to Odessy Furniture.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright, Developer Mention & Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {new Date().getFullYear()} Odessy Furniture. All rights reserved. Chennai, Tamil Nadu.</p>
          
          {/* Developed by Califnco */}
          <div className="flex items-center gap-1.5 text-xs">
            <span>Developed by</span>
            <a
              href="https://www.califnco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:text-[#FFF0D0] hover:underline font-semibold transition-colors inline-flex items-center gap-1"
            >
              <span>Califnco</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <button
              onClick={() => onNavigate('bifma')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              BIFMA Compliance
            </button>
            <button
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
