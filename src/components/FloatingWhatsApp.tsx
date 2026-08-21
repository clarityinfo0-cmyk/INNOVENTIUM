import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '+5215500000000', // Configurable contact number
  defaultMessage = 'Hola equipo de INNOVENTIUM, me gustaría solicitar información sobre sus proyectos de I+D e innovación.',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(defaultMessage);

  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMsg}`;

  const handleSend = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick Chat Popup Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ duration: 0.25 }}
            className="mb-3 w-[320px] sm:w-[350px] bg-[#0B1D36] border border-[#25D366]/40 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 p-1.5 flex items-center justify-center relative">
                  <WhatsAppIcon size={22} className="text-white" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] border-2 border-[#075E54] absolute bottom-0 right-0" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display">INNOVENTIUM Directo</h4>
                  <p className="text-[11px] text-emerald-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse" />
                    En línea · Laboratorio I+D
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Cerrar chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[#0B1D36] space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 leading-relaxed">
                👋 <strong>¡Hola!</strong> ¿Tienes una iniciativa tecnológica o deseas una alianza científica con INNOVENTIUM? Escríbenos directamente por WhatsApp.
              </div>

              <div>
                <label className="block text-[11px] font-mono text-slate-400 mb-1">
                  Tu mensaje:
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white/5 border border-white/15 text-slate-200 text-xs focus:outline-none focus:border-[#25D366] transition-colors resize-none placeholder:text-slate-500"
                />
              </div>

              <button
                onClick={handleSend}
                className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Abrir Chat de WhatsApp</span>
              </button>
            </div>

            {/* Footer notice */}
            <div className="px-4 py-2 bg-white/5 border-t border-white/10 text-[10px] text-slate-400 text-center font-mono">
              Respuesta habitual: &lt; 15 minutos
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        id="btn-floating-whatsapp"
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-[#25D366] text-white shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] transition-all flex items-center justify-center cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <WhatsAppIcon size={28} className="text-white" />
        
        {/* Tooltip on desktop */}
        <span className="hidden sm:group-hover:inline-flex absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-[#0B1D36] border border-[#25D366]/50 text-[#25D366] text-xs font-mono font-bold whitespace-nowrap shadow-lg">
          Chatear por WhatsApp
        </span>

        {/* Pulsing indicator */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00B4D8] rounded-full border-2 border-[#0B1D36] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00B4D8] rounded-full border-2 border-[#0B1D36]" />
      </motion.button>
    </div>
  );
};
