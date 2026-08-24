import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, X } from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';

interface CinematicIntroProps {
  onComplete: () => void;
  isOpen: boolean;
}

const messages = [
  { eyebrow: 'INNOVENTIUM', title: 'Ideas que se convierten en impacto.', body: 'Conectamos investigación, tecnología y estrategia para resolver retos reales.' },
  { eyebrow: 'NUESTRO ENFOQUE', title: 'Rigor para avanzar con claridad.', body: 'Construimos soluciones con una visión responsable, medible y sostenible.' },
  { eyebrow: 'BIENVENIDOS', title: 'Innovación aplicada con propósito.', body: 'Conoce nuestro trabajo y las oportunidades de colaboración.' },
];

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete, isOpen }) => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    setStep(0);
    setProgress(0);
    const duration = 15000;
    const startedAt = Date.now();
    const progressTimer = window.setInterval(() => {
      const next = Math.min(100, ((Date.now() - startedAt) / duration) * 100);
      setProgress(next);
    }, 80);
    const timers = [
      window.setTimeout(() => setStep(1), 4800),
      window.setTimeout(() => setStep(2), 9800),
      window.setTimeout(onComplete, duration),
    ];
    return () => {
      window.clearInterval(progressTimer);
      timers.forEach(window.clearTimeout);
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;
  const message = messages[step];

  return (
    <AnimatePresence>
      <motion.section
        key="brand-introduction"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.55 } }}
        className="fixed inset-0 z-[9999] flex min-h-[100svh] flex-col overflow-hidden bg-[#081a30] text-white"
        aria-label="Presentación de Innoventium"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(26,100,122,0.3),transparent_38%),linear-gradient(135deg,#07182d,#0b1d36_55%,#102943)]" />
        <div className="absolute inset-x-0 top-[18%] h-px bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent" />

        <header className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-8 sm:py-7 lg:px-12">
          <span className="text-[10px] font-semibold tracking-[0.22em] text-[#D9BD7B] sm:text-xs">PRESENTACIÓN</span>
          <button onClick={onComplete} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-3 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10" aria-label="Omitir presentación">
            Omitir <X className="h-3.5 w-3.5" />
          </button>
        </header>

        <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 text-center sm:px-8">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8 border-b border-[#C5A059]/50 pb-5 sm:mb-10">
            <InnoventiumLogo height={82} variant="full" theme="dark" animated={false} className="max-w-[min(72vw,420px)]" />
          </motion.div>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.65 }} className="max-w-3xl">
              <p className="mb-4 text-[10px] font-semibold tracking-[0.24em] text-[#D9BD7B] sm:text-xs">{message.eyebrow}</p>
              <h1 className="font-display text-[clamp(2.1rem,7vw,4.75rem)] font-bold leading-[1.08] text-white">{message.title}</h1>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">{message.body}</p>
            </motion.div>
          </AnimatePresence>
          <button onClick={onComplete} className="mt-9 inline-flex items-center gap-2 rounded-lg bg-[#C5A059] px-5 py-3 text-sm font-semibold text-[#081a30] transition hover:bg-[#dfc889] sm:mt-11">
            Entrar al sitio <ArrowRight className="h-4 w-4" />
          </button>
        </main>

        <footer className="relative z-10 px-5 pb-6 sm:px-8 sm:pb-8 lg:px-12">
          <div className="mx-auto flex w-full max-w-5xl items-center gap-4 text-[10px] font-medium tracking-wide text-slate-400 sm:text-xs">
            <span className="shrink-0">{String(step + 1).padStart(2, '0')} / 03</span>
            <div className="h-px flex-1 overflow-hidden bg-white/15"><motion.div className="h-full bg-[#C5A059]" animate={{ width: `${progress}%` }} transition={{ ease: 'linear', duration: 0.1 }} /></div>
            <span className="hidden sm:inline">INNOVACIÓN APLICADA</span>
          </div>
        </footer>
      </motion.section>
    </AnimatePresence>
  );
};
