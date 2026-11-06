import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Truck, ShieldCheck, RefreshCcw, HelpCircle, Phone } from 'lucide-react';
import { PageType } from '../types';

interface TermsPageProps {
  onNavigate: (page: PageType) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
  const termsSections = [
    {
      icon: Truck,
      title: '1. Chennai Doorstep Delivery & Assembly',
      content:
        'Odessy Furniture provides complimentary doorstep delivery for eligible orders across Chennai metropolitan regions (including OMR, ECR, Porur, Guindy, Anna Nagar, T-Nagar, and surrounding hubs). Products are dispatched fully assembled or with professional on-site white-glove setup by our trained technicians.',
    },
    {
      icon: ShieldCheck,
      title: '2. Comprehensive Warranty Coverage',
      content:
        'All Odessy ergonomic chairs carry an authentic 2 to 3-year warranty covering Class-4 hydraulic pneumatic gas lifts, backrest tilt-lock mechanisms, nylon/chrome star bases, and caster wheel bearings. Structural solid wood items carry a 5-year timber integrity guarantee against warping or splitting under normal indoor usage.',
    },
    {
      icon: RefreshCcw,
      title: '3. Inspection on Arrival & Replacements',
      content:
        'Clients are requested to inspect furniture upon delivery. In the rare event of transit blemishes, mesh tears, or component faults, Odessy offers a seamless 7-day doorstep replacement or component swap at zero surcharge across Chennai.',
    },
    {
      icon: FileCheck,
      title: '4. Commercial & Corporate Quotations',
      content:
        'Official estimates generated via the Bespoke Quotation Basket or WhatsApp Concierge are valid for 15 calendar days from issuance. Bulk discounts for corporate fit-outs (10+ units) and GST invoices with input tax credit are provided upon final confirmation.',
    },
    {
      icon: HelpCircle,
      title: '5. Governing Law & Jurisdiction',
      content:
        'These terms and conditions are governed by and construed in accordance with the laws of Tamil Nadu and the Republic of India. Any disputes arising in connection with orders shall be subject to the exclusive jurisdiction of the competent courts in Chennai.',
    },
  ];

  return (
    <div id="terms-of-service-page" className="w-full bg-[#161513] text-neutral-200 pt-28 pb-24">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-4">
            <FileCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Client Service Agreement</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            Odessy Furniture • Chennai, Tamil Nadu • Last Updated: September 2026
          </p>
        </motion.div>
      </section>

      {/* Main Content Sections */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        {termsSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#1E1C18] border border-white/10 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="font-serif font-semibold text-lg text-white">{sec.title}</h2>
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light pl-12">
                {sec.content}
              </p>
            </motion.div>
          );
        })}

        {/* Corporate Support Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#201E1A] to-[#181614] border border-[#D4AF37]/25 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-semibold text-base text-white mb-1">
              Need assistance with an existing warranty or delivery?
            </h3>
            <p className="text-xs text-neutral-400">
              Reach out directly to our Chennai dispatch & support desk.
            </p>
          </div>
          <a
            href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20I'd%20like%20to%20inquire%20about%20warranty%20and%20terms%20of%20service."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#E5C365] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-lg"
          >
            <Phone className="w-4 h-4 text-black" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
