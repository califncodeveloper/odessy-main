import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, EyeOff, FileText, CheckCircle2, Phone, Mail } from 'lucide-react';
import { PageType } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageType) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  const sections = [
    {
      icon: Lock,
      title: '1. Information We Collect',
      content:
        'We only collect information necessary to prepare quotation estimates, process orders, and facilitate doorstep furniture delivery in Chennai. This includes your name, delivery address, phone/WhatsApp number, and specific product finish configurations. We do not store financial credentials or credit card numbers on our servers.',
    },
    {
      icon: EyeOff,
      title: '2. Zero Third-Party Sharing',
      content:
        'Your contact details and order inquiries are strictly confidential. Odessy Furniture does not sell, rent, lease, or distribute customer information to marketing agencies, advertising networks, or third-party data brokers under any circumstances.',
    },
    {
      icon: Shield,
      title: '3. Direct WhatsApp & Communication Privacy',
      content:
        'When you initiate contact via WhatsApp (+91 991 991 5358) or our AI Concierge, messages are used solely by our internal sales and customer support specialists to fulfill your pricing inquiries, share fabric swatches, and coordinate Chennai logistics.',
    },
    {
      icon: FileText,
      title: '4. Cookies & Session Storage',
      content:
        'We use minimal, privacy-centric cookies to remember your selected chair finishes, quotation basket items, and UI theme preferences. We do not engage in cross-site tracking or invasive ad re-targeting.',
    },
    {
      icon: CheckCircle2,
      title: '5. Data Retention & Erasure',
      content:
        'You have the right at any time to request complete deletion of your customer inquiry profile, address data, or quotation history from our local records. Contact us at privacy@odessy.in or via WhatsApp for immediate assistance.',
    },
  ];

  return (
    <div id="privacy-policy-page" className="w-full bg-[#161513] text-neutral-200 pt-28 pb-24">
      {/* Header Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Customer Data Protection</span>
          </div>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400 font-mono">
            Effective Date: September 2026 • Odessy Furniture, Chennai
          </p>
        </motion.div>
      </section>

      {/* Main Content Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        {sections.map((sec, idx) => {
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

        {/* Contact Support Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#201E1A] to-[#181614] border border-[#D4AF37]/25 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-semibold text-base text-white mb-1">
              Have questions regarding your personal data?
            </h3>
            <p className="text-xs text-neutral-400">
              Our privacy desk in Chennai responds to all inquiries within 24 business hours.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="mailto:info@odessy.in"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>info@odessy.in</span>
            </a>
            <a
              href="https://wa.me/919919915358?text=Hello%20Odessy%20Furniture,%20I'd%20like%20to%20inquire%20about%20my%20data%20and%20privacy."
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
