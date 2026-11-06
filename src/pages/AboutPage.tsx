import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  TreePine,
  Layers,
  ArrowUpRight,
  Clock,
  Send,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const AboutPage: React.FC = () => {
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingInterest, setBookingInterest] = useState('Executive Ergonomic Seating');
  const [isBooked, setIsBooked] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#D4AF37', '#FFF0D0', '#25D366'],
    });
    setIsBooked(true);

    const message = `Hello Odessy Furniture! I would like to confirm my VIP Experience Center Visit:
- Name: ${bookingName}
- Phone: ${bookingPhone}
- Date/Time: ${bookingDate}
- Primary Interest: ${bookingInterest}

Please confirm showroom concierge availability.`;

    window.open(`https://wa.me/919919915358?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div id="about-page" className="w-full bg-[#161513] text-neutral-200 pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 mb-4 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#F3E9DA]">
            The Odessy Manifesto
          </span>
        </div>
        <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
          Architectural Ergonomics for Visionaries
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          Merging orthopedic spinal biomechanics with solid American hardwoods to create workspaces that eliminate fatigue and elevate focus.
        </p>
      </section>

      {/* Philosophy & Craft Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-[#1E1C18] border border-[#D4AF37]/20 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="md:col-span-6 flex flex-col justify-center space-y-5">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-1">
                  Biomechanical Genesis
                </span>
                <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white">
                  Medical Precision & Artisanal Joinery
                </h2>
              </div>

              {/* Mobile-only image placement */}
              <div className="block md:hidden rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="/images/grand_standing_desk.jpg"
                  alt="Artisanal Joinery Workshop"
                  className="w-full h-52 object-cover"
                />
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
                Every Odessy piece is engineered from MRI spinal biomechanics. Dynamic lumbar articulation flexes with your micro-movements, preserving disc health over 12+ hour focus sprints.
              </p>

              <div className="grid grid-cols-1 gap-2.5">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300">
                  <TreePine className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>100% FSC-Certified Hardwoods (Solid American Walnut & Smoked Oak)</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>BIFMA X5.1 Certified for 500,000 Cycle Commercial Longevity</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs text-neutral-300">
                  <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>German 3D Elastomer High-Tensile Mesh (Zero Sagging Guarantee)</span>
                </div>
              </div>
            </div>

            {/* Desktop image */}
            <div className="hidden md:block md:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/grand_standing_desk.jpg"
                  alt="Artisanal Joinery Workshop"
                  className="w-full h-88 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10-Year Ironclad Warranty Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold text-[#C5A059] uppercase tracking-widest block mb-1">
            Quality Guarantee
          </span>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-white">
            10-Year Comprehensive Warranty
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto mt-1">
            Every structural chassis, motor mechanism, and gas cylinder is fully covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-3xl bg-[#1E1C18] border border-white/10 space-y-2">
            <span className="font-serif font-bold text-2xl text-gold-gradient block">10 Years</span>
            <h3 className="font-serif font-bold text-base text-white">Chassis & Motors</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Full coverage on cast aluminum frames, tilt gears, cylinders, standing desk frames, and Bosch dual motorized lift units.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#1E1C18] border border-white/10 space-y-2">
            <span className="font-serif font-bold text-2xl text-gold-gradient block">5 Years</span>
            <h3 className="font-serif font-bold text-base text-white">Mesh & Upholstery</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Covers elasticity of German 3D mesh, cold-cure high-density memory foam cushioning, and Tuscan nappa leather seams.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#1E1C18] border border-white/10 space-y-2">
            <span className="font-serif font-bold text-2xl text-gold-gradient block">30 Days</span>
            <h3 className="font-serif font-bold text-base text-white">Ergonomic Trial</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              Test any chair or motorized desk in your workspace risk-free. If your posture is not transformed, we provide complimentary pickup.
            </p>
          </div>
        </div>
      </section>

      {/* Flagship Showroom & Experience Center Interactive Booking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E1C18] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Location & Direct Navigation */}
          <div className="lg:col-span-6 space-y-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C5A059] block mb-1">
                Flagship Atelier
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-2">
                Experience Odessy in Person
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                Test zero-gravity chair reclines, operate whisper-quiet standing desks, and select hand-finished wood swatches under calibrated architectural lighting.
              </p>
            </div>

            {/* Google Maps Clickable Card */}
            <a
              id="about-google-maps-btn"
              href="https://maps.app.goo.gl/bes8YX6UgE5Fdzuk9"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-white/5 hover:bg-[#D4AF37]/15 border border-white/10 hover:border-[#D4AF37]/40 transition-all flex items-start gap-4 group"
            >
              <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="flex-1">
                <h4 className="font-serif font-bold text-sm text-white group-hover:text-[#F3E9DA]">
                  Odessy Experience Center
                </h4>
                <p className="text-xs text-neutral-400 mt-0.5">
                  Open in Google Maps for Navigation
                </p>
                <span className="text-[11px] text-[#C5A059] font-medium mt-1 inline-flex items-center gap-1">
                  Chennai Atelier & Delivery Hub <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </a>

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <a
                href="tel:+919919915358"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-neutral-300 hover:text-[#D4AF37] flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span className="font-mono">+91 991 991 5358</span>
              </a>
              <a
                href="mailto:info@odessy.in"
                className="p-3 rounded-xl bg-white/5 border border-white/5 text-neutral-300 hover:text-[#D4AF37] flex items-center gap-2 truncate"
              >
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span className="truncate">info@odessy.in</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-400">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              <span>Mon – Sat: 10:00 AM – 8:00 PM | Sun: VIP Appointment</span>
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-6 bg-[#22201C] border border-white/10 rounded-2xl p-6 sm:p-7">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-white mb-1">
              Book a Private Consultation
            </h3>
            <p className="text-xs text-neutral-400 mb-5">
              Reserve an exclusive 1-on-1 session with senior ergonomic architects.
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  placeholder="e.g. Vikram Sharma"
                  className="w-full bg-[#161513] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-neutral-400 mb-1 font-medium">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={bookingPhone}
                  onChange={(e) => setBookingPhone(e.target.value)}
                  placeholder="e.g. +91 99199 15358"
                  className="w-full bg-[#161513] border border-white/10 rounded-xl px-3.5 py-2.5 text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-400 mb-1 font-medium">Preferred Date</label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-[#161513] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
                <div>
                  <label className="block text-neutral-400 mb-1 font-medium">Collection Interest</label>
                  <select
                    value={bookingInterest}
                    onChange={(e) => setBookingInterest(e.target.value)}
                    className="w-full bg-[#161513] border border-white/10 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    <option>Executive Ergonomic Seating</option>
                    <option>Motorized Standing Desks</option>
                    <option>Acoustic Meeting Pods</option>
                    <option>Complete Office Fitout</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8221] hover:from-[#E5C365] hover:to-[#B89230] text-black font-bold text-xs tracking-wider uppercase transition-all shadow-md mt-3 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Reserve VIP Appointment</span>
              </button>

              {isBooked && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Appointment submitted! Opening WhatsApp confirmation...</span>
                </div>
              )}
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};
