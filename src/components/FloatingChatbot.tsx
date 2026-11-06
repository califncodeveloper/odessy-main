import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ExternalLink,
  ChevronDown,
  Phone,
  MapPin,
  RefreshCw,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { ChatMessage } from '../types';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'intro',
    role: 'assistant',
    content: `Hello! Welcome to **Odessy Furniture** (Chennai). 

Looking for the best ergonomic chair for your workspace? Ask me for recommendations, prices, or fast home delivery.`,
    timestamp: 'Just now',
    suggestedPills: [
      'Top chair for back pain',
      'Chair price list (₹ INR)',
      'Home delivery in Chennai',
      'Order via WhatsApp',
    ],
  },
];

export const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcomeBubble, setShowWelcomeBubble] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeBubble(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputValue.trim();
    if (!query || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Chat service error');
      }

      const data = await response.json();
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || 'Our ergonomic team is available directly on WhatsApp at +91 991 991 5358.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedPills: [
          'Contact WhatsApp (+91 991 991 5358)',
          'View Chair Dimensions',
          'Explore Motorized Desks',
        ],
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `### Odessy Concierge Service

I can certainly assist you with that inquiry. For instant bespoke quotations and physical material swatch orders, please connect with our master consultants:

- **WhatsApp**: [+91 991 991 5358](https://wa.me/919919915358)
- **Flagship Showroom**: [Google Maps Location](https://maps.app.goo.gl/bes8YX6UgE5Fdzuk9)
- **Email**: [info@odessy.in](mailto:info@odessy.in)`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="floating-chatbot-container" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="chatbot-window"
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[calc(100vw-32px)] sm:w-[420px] max-w-[420px] h-[580px] max-h-[85vh] bg-[#181614]/98 backdrop-blur-2xl border border-[#D4AF37]/30 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.15)] flex flex-col overflow-hidden text-[#EAE6DF]"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-gradient-to-r from-[#201E1A] via-[#2A2620] to-[#201E1A] border-b border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#FFE39A] via-[#D4AF37] to-[#8C6719] p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-[#161513] rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-semibold text-sm text-[#F3E9DA] tracking-wider">
                      ODESSY AI CONCIERGE
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <span className="text-[10px] text-[#C5A059] uppercase tracking-widest block font-medium">
                    Powered by Groq High-Speed AI
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  id="reset-chat-btn"
                  onClick={() => setMessages(INITIAL_MESSAGES)}
                  title="Reset conversation"
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  id="close-chat-btn"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Direct Contact Bar */}
            <div className="px-3 py-1.5 bg-[#131210] border-b border-white/5 flex items-center justify-between text-[11px] text-neutral-400">
              <a
                href="https://wa.me/919919915358"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#25D366] transition-colors"
              >
                <Phone className="w-3 h-3 text-[#25D366]" /> +91 991 991 5358
              </a>
              <a
                href="https://maps.app.goo.gl/bes8YX6UgE5Fdzuk9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors"
              >
                <MapPin className="w-3 h-3 text-[#D4AF37]" /> Showroom Maps
              </a>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-[#D4AF37]" />
                    </div>
                  )}

                  <div className="max-w-[85%] flex flex-col">
                    <div
                      className={`p-3.5 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-gradient-to-r from-[#D4AF37] to-[#B38928] text-black font-medium rounded-tr-none shadow-md'
                          : 'bg-[#18181E] border border-white/10 text-neutral-200 rounded-tl-none leading-relaxed'
                      }`}
                    >
                      {msg.role === 'user' ? (
                        <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                      ) : (
                        <div className="prose prose-invert prose-sm max-w-none text-neutral-200 prose-headings:text-[#F3E9DA] prose-headings:font-serif prose-headings:my-1.5 prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-strong:text-[#D4AF37] prose-a:text-[#DFB956] prose-a:underline prose-table:text-xs">
                          <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </div>
                      )}
                    </div>

                    <span
                      className={`text-[10px] mt-1 text-neutral-400 ${
                        msg.role === 'user' ? 'text-right' : 'text-left ml-1'
                      }`}
                    >
                      {msg.timestamp}
                    </span>

                    {/* Suggested Pills */}
                    {msg.suggestedPills && msg.suggestedPills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {msg.suggestedPills.map((pill, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              if (pill.includes('WhatsApp')) {
                                window.open('https://wa.me/919919915358', '_blank');
                              } else {
                                handleSendMessage(pill);
                              }
                            }}
                            className="text-xs bg-[#22201C] hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/60 text-neutral-300 hover:text-[#F3E9DA] px-2.5 py-1 rounded-full border border-[#D4AF37]/20 transition-all text-left"
                          >
                            {pill}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-[#2A2620] border border-[#D4AF37]/30 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5 text-neutral-300" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5 items-center">
                  <div className="w-7 h-7 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div className="bg-[#201E1A] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#181614] border-t border-white/10">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  id="chat-input-field"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about chairs, desks, ergonomics..."
                  className="flex-1 bg-[#22201C] text-sm text-neutral-100 placeholder-neutral-400 px-3.5 py-2.5 rounded-xl border border-white/10 focus:outline-none focus:border-[#D4AF37]/60 focus:ring-1 focus:ring-[#D4AF37]/40"
                />
                <button
                  id="send-chat-message-btn"
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA8221] text-black font-semibold hover:opacity-95 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity shadow-md"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Welcome Message that fades after 3 seconds */}
      <AnimatePresence>
        {showWelcomeBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 15, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute right-15 sm:right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-[#1C1A17]/95 backdrop-blur-xl border border-[#D4AF37]/50 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.7),0_0_15px_rgba(212,175,55,0.25)] text-xs text-white font-medium flex items-center gap-1.5 pointer-events-none z-30"
          >
            <span>👋 Hi! How can we help you!</span>
            {/* Triangular pointer arrow towards the button */}
            <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[5px] border-y-transparent border-l-[6px] border-l-[#D4AF37]/60" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          id="open-chatbot-btn"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative group flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 min-w-[52px] min-h-[52px] sm:min-w-[56px] sm:min-h-[56px] rounded-full bg-gradient-to-tr from-[#201E1A] via-[#2E281C] to-[#201E1A] border border-[#D4AF37]/60 text-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.3)] transition-all duration-300"
          aria-label="Open Odessy AI Concierge"
        >
          {/* Subtle gold halo */}
          <span className="absolute inset-0 rounded-full border border-[#D4AF37]/40 animate-ping opacity-25 pointer-events-none" />

          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37] group-hover:rotate-12 transition-transform duration-300" />
        </motion.button>
      )}
    </div>
  );
};
