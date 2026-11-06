import React, { useState, useEffect, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  Phone,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Smartphone,
  CreditCard,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { PaymentDetails } from '../types';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  paymentDetails: PaymentDetails | null;
}

const UPI_ID = '8398357947@indianbk';
const PAYEE_NAME = 'Odessy Furniture';
const WHATSAPP_NUMBER = '919919915358';

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  paymentDetails,
}) => {
  const generatedOrderId = useId().replace(/[:]/g, '').slice(0, 6).toUpperCase();
  const orderId = paymentDetails?.orderId || `ODY-${generatedOrderId}`;

  const initialAmount = paymentDetails?.amount && paymentDetails.amount > 0 ? paymentDetails.amount : 7150;
  const [selectedAmount, setSelectedAmount] = useState<number>(initialAmount);
  const [customAmountStr, setCustomAmountStr] = useState<string>('');
  const [isCustomMode, setIsCustomMode] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [utrNumber, setUtrNumber] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [activeStep, setActiveStep] = useState<'scan' | 'verify'>('scan');

  // Reset or update state whenever modal opens or paymentDetails changes
  useEffect(() => {
    if (isOpen) {
      const amt = paymentDetails?.amount && paymentDetails.amount > 0 ? paymentDetails.amount : 7150;
      setSelectedAmount(amt);
      setCustomAmountStr('');
      setIsCustomMode(false);
      setCopied(false);
      setIsConfirmed(false);
      setActiveStep('scan');
      setUtrNumber('');
    }
  }, [isOpen, paymentDetails]);

  // Construct NPCI Standard UPI Link
  const effectiveAmount = isCustomMode && Number(customAmountStr) > 0 ? Number(customAmountStr) : selectedAmount;
  const paymentNote = `Odessy Order ${orderId}`;
  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${encodeURIComponent(PAYEE_NAME)}&am=${effectiveAmount.toFixed(2)}&cu=INR&tn=${encodeURIComponent(paymentNote)}`;

  const handleCopyUpi = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  const handleConfirmAndWhatsApp = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#25D366', '#FFFFFF', '#60A5FA'],
    });

    setIsConfirmed(true);

    const itemsSummary = paymentDetails?.items && paymentDetails.items.length > 0
      ? paymentDetails.items.map((it, idx) => `  ${idx + 1}. ${it.name} ${it.variantName ? `(${it.variantName})` : ''} x ${it.quantity} = ₹${(it.price * it.quantity).toLocaleString('en-IN')}`).join('\n')
      : 'Bespoke Furniture / Custom Order';

    const message = `*ODESSY FURNITURE - PAYMENT CONFIRMATION*
━━━━━━━━━━━━━━━━━━━━━━━━━━
*Order ID:* ${orderId}
*Amount Paid:* ₹${effectiveAmount.toLocaleString('en-IN')}
*UPI ID Paid To:* ${UPI_ID} (Indian Bank)
${utrNumber.trim() ? `*UPI Reference / UTR:* ${utrNumber.trim()}\n` : ''}${customerName.trim() ? `*Customer Name:* ${customerName.trim()}\n` : ''}${customerPhone.trim() ? `*Phone:* ${customerPhone.trim()}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━
*Order Items:*
${itemsSummary}
━━━━━━━━━━━━━━━━━━━━━━━━━━
I have completed the UPI payment via QR code. Attached is my payment screenshot for instant order verification & dispatch.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="payment-modal-backdrop"
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
        >
          <motion.div
            id="payment-modal-card"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-full max-w-xl bg-[#161513] border border-[#D4AF37]/35 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.85)] text-neutral-200 overflow-hidden relative my-auto max-h-[92vh] flex flex-col"
          >
            {/* Header Banner */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#201E1A] via-[#1B1916] to-[#201E1A] border-b border-white/10 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner">
                  <QrCode className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-[#F3E9DA]">
                      Scan & Pay via UPI
                    </h3>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <ShieldCheck className="w-3 h-3" />
                      Verified Merchant
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    Odessy Furniture • Indian Bank Official UPI Account
                  </p>
                </div>
              </div>

              <button
                id="close-payment-modal-btn"
                onClick={onClose}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              {/* Order Total Highlight */}
              <div className="p-4 rounded-2xl bg-[#201E1A] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-neutral-400 font-medium">
                    Order Ref: <span className="font-mono text-[#D4AF37]">{orderId}</span>
                  </span>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-xs text-neutral-400">Amount:</span>
                    <span className="font-serif font-bold text-2xl sm:text-3xl text-gold-gradient tracking-tight">
                      ₹{effectiveAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>

                {/* Amount Quick Presets / Custom Amount Switcher */}
                {initialAmount > 0 && (
                  <div className="flex items-center gap-1.5 bg-[#161513] p-1 rounded-xl border border-white/10 text-xs">
                    <button
                      type="button"
                      onClick={() => {
                        setIsCustomMode(false);
                        setSelectedAmount(initialAmount);
                      }}
                      className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                        !isCustomMode && selectedAmount === initialAmount
                          ? 'bg-[#D4AF37] text-black shadow-sm font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Full (100%)
                    </button>
                    {initialAmount >= 1000 && (
                      <button
                        type="button"
                        onClick={() => {
                          setIsCustomMode(false);
                          setSelectedAmount(Math.round(initialAmount * 0.5));
                        }}
                        className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                          !isCustomMode && selectedAmount === Math.round(initialAmount * 0.5)
                            ? 'bg-[#D4AF37] text-black shadow-sm font-semibold'
                            : 'text-neutral-400 hover:text-white'
                        }`}
                        title="Pay 50% booking advance"
                      >
                        Advance (50%)
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => setIsCustomMode(true)}
                      className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                        isCustomMode
                          ? 'bg-[#D4AF37] text-black shadow-sm font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                )}
              </div>

              {/* Custom Amount Input Field */}
              {isCustomMode && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-[#1C1A17] rounded-xl border border-[#D4AF37]/30"
                >
                  <span className="text-sm font-bold text-[#D4AF37] font-serif">₹</span>
                  <input
                    type="number"
                    min="1"
                    placeholder="Enter amount to pay"
                    value={customAmountStr}
                    onChange={(e) => setCustomAmountStr(e.target.value)}
                    className="w-full bg-transparent text-white text-sm outline-none font-mono"
                  />
                  <span className="text-[11px] text-neutral-400 shrink-0">INR</span>
                </motion.div>
              )}

              {/* Main QR Code & UPI Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* Left: Scannable QR Code Card */}
                <div className="sm:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative p-3.5 bg-white rounded-3xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] border-2 border-[#D4AF37]/40 group">
                    <QRCodeSVG
                      value={upiUrl}
                      size={185}
                      level="M"
                      includeMargin={true}
                      className="rounded-xl w-full h-auto max-w-[190px]"
                    />
                    {/* Center Bank Shield Pill */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-[#161513] border-2 border-[#D4AF37] shadow-xl flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                    </div>
                  </div>

                  <span className="mt-2.5 text-[11px] text-neutral-400 font-medium tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                    Point phone camera or UPI app
                  </span>
                </div>

                {/* Right: UPI Details, Copy, and App Badges */}
                <div className="sm:col-span-7 space-y-3.5">
                  {/* UPI ID Copy Field */}
                  <div className="p-3.5 rounded-2xl bg-[#1C1A17] border border-white/10 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400">
                      <span>Official UPI ID</span>
                      <span className="text-emerald-400 font-medium">Indian Bank</span>
                    </div>

                    <div className="flex items-center justify-between gap-2 bg-[#12110F] px-3 py-2 rounded-xl border border-white/10">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-[#F3E9DA] truncate select-all">
                        {UPI_ID}
                      </span>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="px-2.5 py-1 rounded-lg bg-[#D4AF37]/20 hover:bg-[#D4AF37]/35 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 active:scale-95"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[10px] text-neutral-400 flex items-center justify-between pt-1">
                      <span>Beneficiary: <strong className="text-white font-medium">{PAYEE_NAME}</strong></span>
                      <span>Verified Business</span>
                    </div>
                  </div>

                  {/* Mobile Deep Link: Tap to Pay with UPI App */}
                  <div className="block sm:hidden">
                    <a
                      href={upiUrl}
                      className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89628] text-black font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(212,175,55,0.35)]"
                    >
                      <Smartphone className="w-4 h-4" />
                      <span>Tap to Open UPI App</span>
                    </a>
                  </div>

                  {/* Supported UPI Apps Badges */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-mono block">
                      Works with all UPI Apps:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { name: 'Google Pay', color: 'border-blue-500/30 text-blue-300 bg-blue-500/10' },
                        { name: 'PhonePe', color: 'border-purple-500/30 text-purple-300 bg-purple-500/10' },
                        { name: 'Paytm', color: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10' },
                        { name: 'BHIM UPI', color: 'border-amber-500/30 text-amber-300 bg-amber-500/10' },
                        { name: 'Cred', color: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' },
                        { name: 'Indian Bank', color: 'border-[#D4AF37]/30 text-[#D4AF37] bg-[#D4AF37]/10' },
                      ].map((app) => (
                        <span
                          key={app.name}
                          className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${app.color}`}
                        >
                          {app.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Summary (if provided) */}
              {paymentDetails?.items && paymentDetails.items.length > 0 && (
                <div className="p-3.5 rounded-2xl bg-[#1A1815] border border-white/5 space-y-2">
                  <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider block">
                    Items Included in this Payment:
                  </span>
                  <div className="space-y-1 max-h-28 overflow-y-auto pr-1">
                    {paymentDetails.items.map((it, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs text-neutral-300 py-1 border-b border-white/5 last:border-0"
                      >
                        <span className="truncate pr-2">
                          {it.name} {it.variantName ? <span className="text-neutral-400">({it.variantName})</span> : ''} × {it.quantity}
                        </span>
                        <span className="font-mono text-[#F3E9DA] shrink-0 font-medium">
                          ₹{(it.price * it.quantity).toLocaleString('en-IN')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Payment Verification / WhatsApp Confirmation */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-[#1E1C18] to-[#151412] border border-[#D4AF37]/25 space-y-3.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#D4AF37] text-black text-[11px] font-bold flex items-center justify-center">
                      2
                    </span>
                    <h4 className="font-serif font-bold text-xs sm:text-sm text-[#F3E9DA]">
                      After Paying: Confirm Payment & Share UTR
                    </h4>
                  </div>
                  {isConfirmed && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Submitted
                    </span>
                  )}
                </div>

                <p className="text-[11px] text-neutral-400 leading-relaxed font-light">
                  Once your transaction succeeds in your UPI app, enter your 12-digit UTR/Reference number or share the screenshot on WhatsApp for instant confirmation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="text-[10px] text-neutral-400 block mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full bg-[#141311] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#D4AF37]/60"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-neutral-400 block mb-1">
                      WhatsApp Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 98765 43210"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full bg-[#141311] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#D4AF37]/60 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-neutral-400 block mb-1 flex items-center justify-between">
                    <span>12-Digit UPI Reference / UTR No. (Optional)</span>
                    <span className="text-[9px] text-[#D4AF37]">Found in your UPI receipt</span>
                  </label>
                  <input
                    type="text"
                    maxLength={16}
                    placeholder="e.g. 427189012345"
                    value={utrNumber}
                    onChange={(e) => setUtrNumber(e.target.value)}
                    className="w-full bg-[#141311] border border-white/10 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 outline-none focus:border-[#D4AF37]/60 font-mono tracking-wider"
                  />
                </div>

                {/* Confirm via WhatsApp Button */}
                <button
                  id="confirm-payment-whatsapp-btn"
                  onClick={handleConfirmAndWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#22C35E] to-[#1EBE5D] hover:opacity-95 text-white font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_6px_25px_rgba(37,211,102,0.3)] transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirm & Send Screenshot on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>10-Year BIFMA Replacement Warranty • Chennai Same-Day Dispatch</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
