import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Zap,
  Activity,
  Layers,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { PageType } from '../types';

interface BifmaPageProps {
  onNavigate: (page: PageType) => void;
}

export const BifmaPage: React.FC<BifmaPageProps> = ({ onNavigate }) => {
  const complianceStandards = [
    {
      code: 'ANSI/BIFMA X5.1 - Section 5',
      title: 'Backrest Strength & Deflection Test',
      detail:
        'Functional load of 68 kg (150 lbs) applied 120,000 times, followed by a proof load of 136 kg (300 lbs) with zero structural degradation or weld failure.',
      badge: 'Spine Security',
    },
    {
      code: 'ANSI/BIFMA X5.1 - Section 8',
      title: 'Drop Impact Resistance',
      detail:
        'A 102 kg (225 lbs) deadweight dropped from 152 mm onto the seat pan center, followed by a 136 kg proof drop test ensuring reinforced base integrity.',
      badge: 'Impact Proof',
    },
    {
      code: 'ANSI/BIFMA X5.1 - Section 11',
      title: 'Class-4 Hydraulic Gas Lift Suspension',
      detail:
        'Heavy-duty nitrogen-charged seamless steel cylinder tested through 100,000 height adjustments with explosion-proof anti-drop safety valves.',
      badge: 'Suspension Grade 4',
    },
    {
      code: 'ANSI/BIFMA X5.1 - Section 17',
      title: 'Caster & Base Durability Test',
      detail:
        'Nylon twin-wheel castors subjected to 100,000 obstacle crossings under full 120 kg working load without loss of silent glide or base strain.',
      badge: 'Silent 360° Mobility',
    },
    {
      code: 'ANSI/BIFMA X5.1 - Section 13',
      title: 'Armrest Vertical & Horizontal Stress',
      detail:
        'Bi-directional cyclic force applied 60,000 times across armrests to guarantee stability when rising, leaning, or adjusting typing posture.',
      badge: 'Forearm Stability',
    },
    {
      code: 'TB117-2013 / BS 5852',
      title: 'Thermal & Fire Retardancy Compliance',
      detail:
        'High-tensile Korean airflow polymer mesh and cold-cure molded cushions treated to resist smolder and rapid flame propagation.',
      badge: 'Fire Safe Mesh',
    },
  ];

  return (
    <div id="bifma-compliance-page" className="w-full bg-[#161513] text-neutral-200 pt-28 pb-24">
      {/* Header Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#C5A059] text-xs font-mono uppercase tracking-widest mb-4">
            <Award className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Industrial Safety Standards</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight mb-5">
            BIFMA Compliance & Engineering Rigor
          </h1>
          <p className="max-w-3xl mx-auto text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Every Odessy ergonomic chair and executive workstation is engineered to meet or exceed the rigorous commercial durability protocols set by the Business and Institutional Furniture Manufacturers Association (BIFMA).
          </p>
        </motion.div>
      </section>

      {/* Main Certification Pillars */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceStandards.map((item, idx) => (
            <motion.div
              key={item.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#1E1C18]/90 border border-white/10 hover:border-[#D4AF37]/40 backdrop-blur-xl shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#D4AF37]">
                  {item.badge}
                </span>
                <ShieldCheck className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-mono text-neutral-400 block mb-1">{item.code}</span>
              <h3 className="font-serif font-semibold text-lg text-white mb-2 group-hover:text-[#F3E9DA] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Corporate Lab Testing Guarantee */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#24211C] via-[#1E1C18] to-[#141311] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-white mb-4">
              Verified for Chennai Tech Corridors
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-6">
              From OMR tech parks to Guindy corporate studios, Odessy seating is tested for real-world 12+ hour daily shift cycles, high humidity resistance, and frictionless long-term performance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('furniture')}
                className="px-6 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C365] text-black font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <span>Browse Certified Seating</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20I'd%20like%20to%20request%20BIFMA%20spec%20sheets%20for%20our%20office%20procurement."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#25D366]" />
                <span>Request Procurement Spec Sheet</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
