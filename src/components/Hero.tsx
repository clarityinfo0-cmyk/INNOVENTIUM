import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  Layers, 
  Play, 
  Zap,
  ShieldCheck
} from 'lucide-react';
import { CinematicCanvas } from './CinematicCanvas';
import { InnoventiumLogo } from './InnoventiumLogo';

interface HeroProps {
  onExploreProjects: () => void;
  onLearnMore: () => void;
  onReplayIntro?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onLearnMore, onReplayIntro }) => {
  const [typedSlogan, setTypedSlogan] = useState('');
  const fullSlogan = 'innovacion perpetua';
  const [sloganDone, setSloganDone] = useState(false);

  // Letter by letter animation for the slogan
  useEffect(() => {
    let index = 0;
    setTypedSlogan('');
    setSloganDone(false);

    const interval = setInterval(() => {
      if (index <= fullSlogan.length) {
        setTypedSlogan(fullSlogan.slice(0, index));
        index++;
      } else {
        setSloganDone(true);
        clearInterval(interval);
      }
    }, 85);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between items-center overflow-hidden pt-24 pb-12 sm:pt-32 sm:pb-16 bg-[#0B1D36] text-white"
    >
      {/* Background Layer: 4K Cinematic Canvas with official colors */}
      <CinematicCanvas opacity={0.92} interactive={true} theme="dark" />

      {/* Decorative Atmospheric Light Orbs using the palette */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] lg:w-[1000px] h-[300px] sm:h-[500px] bg-gradient-to-tr from-[#00B4D8]/20 via-[#7B6CF6]/15 to-[#0B1D36]/40 blur-[120px] sm:blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-[#2ECC71]/15 blur-[100px] sm:blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-28 sm:top-36 right-4 sm:right-10 w-48 sm:w-80 h-48 sm:h-80 bg-[#E8C547]/15 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none -z-10" />

      {/* Main Content Area */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center items-center text-center relative z-10 my-auto">
        
        {/* Top Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          
          {/* Badge 1: Innovation Hub */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0B1D36]/90 border border-[#00B4D8]/40 text-[#00B4D8] text-[11px] sm:text-xs font-mono tracking-wide shadow-[0_0_20px_rgba(0,180,216,0.25)] backdrop-blur-md"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B4D8] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B4D8]"></span>
            </span>
            <span className="font-semibold tracking-wider uppercase">
              I+D de Frontera · Ciencia Aplicada
            </span>
          </motion.div>

          {/* Badge 2: 4K Intro Replay Trigger */}
          {onReplayIntro && (
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
              onClick={onReplayIntro}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E8C547]/10 hover:bg-[#E8C547]/20 border border-[#E8C547]/40 text-[#E8C547] text-[11px] sm:text-xs font-mono font-bold tracking-wide transition-all shadow-[0_0_15px_rgba(232,197,71,0.2)] cursor-pointer backdrop-blur-md hover:scale-105"
            >
              <Play className="w-3 h-3 fill-[#E8C547]" />
              <span>Ver Intro 4K</span>
            </motion.button>
          )}

        </div>

        {/* Central Official Logo Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-6 sm:mb-8 flex flex-col items-center justify-center"
        >
          {/* Laser Guide Light */}
          <div className="w-24 sm:w-48 h-[2px] bg-gradient-to-r from-transparent via-[#00B4D8] to-transparent mb-4 sm:mb-6 animate-pulse shadow-[0_0_15px_#00B4D8]" />

          {/* Logo Container with glassmorphism glow */}
          <div className="p-4 sm:p-7 md:p-8 rounded-3xl bg-[#0B1D36]/85 border border-[#00B4D8]/30 shadow-[0_0_60px_rgba(0,180,216,0.25)] backdrop-blur-md transition-transform duration-500 hover:scale-[1.01]">
            <InnoventiumLogo 
              height={76} 
              variant="full" 
              theme="dark" 
              animated={true}
              className="sm:hidden" // mobile view
            />
            <InnoventiumLogo 
              height={108} 
              variant="full" 
              theme="dark" 
              animated={true}
              className="hidden sm:inline-flex md:hidden" // tablet view
            />
            <InnoventiumLogo 
              height={130} 
              variant="full" 
              theme="dark" 
              animated={true}
              className="hidden md:inline-flex" // desktop view
            />
          </div>
        </motion.div>

        {/* Sub-Slogan animated typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="h-9 sm:h-11 flex items-center justify-center mb-5 sm:mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-xl bg-[#0B1D36]/80 border border-[#00B4D8]/40 backdrop-blur-sm shadow-[0_0_20px_rgba(0,180,216,0.2)]">
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#E8C547] animate-spin" style={{ animationDuration: '8s' }} />
            <span className="font-sans text-sm sm:text-lg md:text-xl font-bold tracking-[0.18em] text-[#00B4D8] lowercase">
              {typedSlogan}
            </span>
            <span className={`inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-[#00B4D8] ml-0.5 ${sloganDone ? 'animate-pulse' : 'animate-bounce'}`} />
          </div>
        </motion.div>

        {/* Core Value Proposition Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight font-display tracking-normal mb-4 sm:mb-6 px-2"
        >
          Transformamos conocimiento en soluciones que impulsan el futuro.
        </motion.h2>

        {/* Comprehensive Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
          className="text-sm sm:text-base md:text-lg text-slate-200/90 max-w-3xl leading-relaxed mb-8 sm:mb-10 font-normal px-2"
        >
          Desde la investigación científica hasta el desarrollo tecnológico y la innovación aplicada, creamos proyectos con impacto real para la industria, la sociedad y las próximas generaciones.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
        >
          {/* Button 1: Conocer Innoventium */}
          <button
            id="btn-hero-learn-more"
            onClick={onLearnMore}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-[#0B1D36]/90 hover:bg-[#0B1D36] border border-[#00B4D8]/40 hover:border-[#00B4D8] transition-all duration-300 shadow-[0_4px_20px_rgba(11,29,54,0.6)] flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <span>Conocer Innoventium</span>
            <ArrowDown className="w-4 h-4 text-[#00B4D8] group-hover:translate-y-1 transition-transform duration-300" />
          </button>

          {/* Button 2: Explorar Proyectos */}
          <button
            id="btn-hero-explore-projects"
            onClick={onExploreProjects}
            className="w-full sm:w-auto relative group overflow-hidden px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#0B1D36] hover:from-[#00B4D8] hover:via-[#00B4D8] hover:to-[#7B6CF6] transition-all duration-300 shadow-[0_0_35px_rgba(0,180,216,0.4)] hover:shadow-[0_0_50px_rgba(0,180,216,0.7)] flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Layers className="w-4 h-4 text-white" />
            <span className="relative z-10">Explorar Proyectos</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </motion.div>

        {/* Verified R&D Credentials Pill Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 w-full max-w-3xl flex flex-wrap items-center justify-around gap-4 text-xs text-slate-300 font-mono"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]" />
            Maduración TRL 1-9
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />
            Blindaje PCT & Patentes
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C547]" />
            Transferencia Tecnológica
          </span>
        </motion.div>

      </div>
    </section>
  );
};
