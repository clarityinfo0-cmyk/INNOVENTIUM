import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Layers, Play } from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';

interface HeroProps {
  onExploreProjects: () => void;
  onLearnMore: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onLearnMore, onReplayIntro }) => (
  <section id="hero" className="relative flex min-h-[92svh] items-center overflow-hidden bg-[#0B1D36] pb-14 pt-28 text-white sm:min-h-screen sm:pb-16 sm:pt-32">
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(24,91,111,0.3),transparent_42%),linear-gradient(135deg,#07182d_0%,#0b1d36_58%,#102943_100%)]" />
    <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#0B1D36] to-transparent" />
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="mb-7 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] font-semibold tracking-[0.18em] text-slate-200 sm:text-xs">
          INVESTIGACIÓN · DESARROLLO · INNOVACIÓN APLICADA
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8 rounded-3xl border border-white/15 bg-[#081a30]/60 px-5 py-5 shadow-2xl backdrop-blur-sm sm:mb-10 sm:px-9 sm:py-7">
          <InnoventiumLogo height={104} variant="full" theme="dark" animated={false} className="max-w-[min(76vw,560px)]" />
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 }} className="mb-4 text-xs font-semibold tracking-[0.2em] text-[#D9BD7B] sm:text-sm">
          INNOVACIÓN CON PROPÓSITO
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="font-display max-w-4xl text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.1]">
          Transformamos conocimiento en soluciones que impulsan el futuro.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }} className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:mt-6 sm:text-lg">
          Unimos investigación científica, desarrollo tecnológico e innovación aplicada para crear proyectos con impacto real en la industria y la sociedad.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.7 }} className="mt-8 flex w-full flex-col justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row">
          <button onClick={onLearnMore} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Conocer Innoventium <ArrowDown className="h-4 w-4" />
          </button>
          <button onClick={onExploreProjects} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#C5A059] px-6 py-3 text-sm font-semibold text-[#081a30] transition hover:bg-[#dfc889]">
            <Layers className="h-4 w-4" /> Explorar proyectos <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
        {onReplayIntro && <button onClick={onReplayIntro} className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-slate-300 transition hover:text-white"><Play className="h-3.5 w-3.5" /> Ver presentación</button>}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.9 }} className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 border-t border-white/15 pt-6 text-xs font-medium text-slate-300 sm:mt-12 sm:grid-cols-3 sm:gap-4 sm:pt-8">
          <span>Maduración tecnológica TRL 1–9</span><span>Propiedad intelectual y patentes</span><span>Transferencia tecnológica</span>
        </motion.div>
      </div>
    </div>
  </section>
);
