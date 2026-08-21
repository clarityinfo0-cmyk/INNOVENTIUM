import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  Wrench, 
  Layers, 
  CheckCircle2, 
  ShieldCheck, 
  Factory, 
  TrendingUp,
  Play,
  RotateCcw,
  Clock,
  FileCheck,
  Activity
} from 'lucide-react';
import { TIMELINE_STEPS } from '../data/innoventiumData';

export const TimelineSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'Search': return Search;
      case 'Wrench': return Wrench;
      case 'Layers': return Layers;
      case 'CheckCircle2': return CheckCircle2;
      case 'ShieldCheck': return ShieldCheck;
      case 'Factory': return Factory;
      case 'TrendingUp': return TrendingUp;
      default: return Sparkles;
    }
  };

  // Autoplay progression simulation
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (autoPlay) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev >= TIMELINE_STEPS.length ? 1 : prev + 1));
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  return (
    <section 
      id="timeline"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Background illumination beams */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00B4D8]/10 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#7B6CF6]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-dark-grid opacity-25 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-mono mb-4 shadow-[0_0_20px_rgba(0,180,216,0.2)]"
          >
            <Activity className="w-3.5 h-3.5 text-[#00B4D8] animate-pulse" />
            <span>CICLO DE MADURACIÓN TECNOLÓGICA TRL 1-9</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Ciclo de Innovación Perpetua
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            Desde el primer destello de una idea hasta el escalamiento global continuo. Una ruta sistemática, rigurosa y blindada legalmente.
          </motion.p>

          {/* Interactive Simulation Controls */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <button
              id="btn-timeline-autoplay"
              onClick={() => setAutoPlay(!autoPlay)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                autoPlay 
                  ? 'bg-[#00B4D8] text-[#0B1D36] border-[#00B4D8] shadow-[0_0_20px_rgba(0,180,216,0.6)] font-bold' 
                  : 'bg-[#0B1D36] text-slate-200 border-white/10 hover:border-[#00B4D8]/50 hover:bg-white/5'
              }`}
            >
              <Play className={`w-3.5 h-3.5 ${autoPlay ? 'fill-[#0B1D36]' : ''}`} />
              <span>{autoPlay ? 'Pausar Simulación' : 'Simular Flujo I+D'}</span>
            </button>

            <button
              id="btn-timeline-reset"
              onClick={() => { setAutoPlay(false); setActiveStep(1); }}
              className="px-3.5 py-2 rounded-xl text-xs font-mono text-slate-300 bg-[#0B1D36] border border-white/10 hover:text-white hover:border-[#00B4D8]/40 flex items-center gap-1.5 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar a Fase 01</span>
            </button>

            <div className="px-3.5 py-2 rounded-xl bg-[#0B1D36] border border-white/10 text-xs font-mono text-[#00B4D8]">
              Fase Activa: <strong className="text-white font-bold">{TIMELINE_STEPS[activeStep - 1].title}</strong> ({activeStep}/8)
            </div>
          </motion.div>
        </div>

        {/* Huge Illuminated Timeline Container */}
        <div className="relative">
          
          {/* Glowing Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 bg-white/10">
            {/* Animated Laser Progress Line */}
            <div 
              className="w-full bg-gradient-to-b from-[#00B4D8] via-[#7B6CF6] to-[#E8C547] shadow-[0_0_25px_#00B4D8] transition-all duration-700 ease-out rounded-full"
              style={{ height: `${(activeStep / TIMELINE_STEPS.length) * 100}%` }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16 relative z-10">
            {TIMELINE_STEPS.map((step, index) => {
              const Icon = getStepIcon(step.icon);
              const isPassed = index + 1 <= activeStep;
              const isCurrent = index + 1 === activeStep;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  id={`timeline-node-${step.id}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  onClick={() => setActiveStep(step.id)}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 cursor-pointer group ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Left / Right Content Card */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0">
                    <div 
                      className={`p-6 sm:p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 relative overflow-hidden ${
                        isCurrent
                          ? 'bg-[#0B1D36] border-[#00B4D8] shadow-[0_0_40px_-10px_rgba(0,180,216,0.4)] scale-[1.02]'
                          : isPassed
                          ? 'bg-[#0B1D36]/80 border-white/15 hover:border-[#00B4D8]/50'
                          : 'bg-[#0B1D36]/50 border-white/5 opacity-60 hover:opacity-90'
                      }`}
                    >
                      {/* Top Header Tag */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <span className="font-mono text-xs font-bold text-[#00B4D8] uppercase tracking-widest flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#00B4D8] animate-ping' : 'bg-slate-500'}`} />
                          {step.phase}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-[#00B4D8]/10 border border-[#00B4D8]/30 text-[#00B4D8]">
                            {step.trl}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {step.duration}
                          </span>
                        </div>
                      </div>

                      {/* Main Title */}
                      <h3 className={`font-display text-2xl sm:text-3xl font-bold mb-2 transition-colors ${
                        isCurrent ? 'text-[#00B4D8]' : 'text-white group-hover:text-[#00B4D8]'
                      }`}>
                        {step.title}
                      </h3>

                      {/* Short & Full Description */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                        {step.fullDesc}
                      </p>

                      {/* Deliverables checklist */}
                      <div className="pt-4 border-t border-white/10">
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <FileCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
                          <span>Entregables Clave:</span>
                        </p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {step.deliverables.map((item, idx) => (
                            <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] shrink-0" />
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Active Indicator Banner */}
                      {isCurrent && (
                        <div className="mt-4 pt-3 border-t border-[#00B4D8]/30 flex items-center justify-between text-xs font-mono text-[#00B4D8]">
                          <span>Estado: En ejecución de fase</span>
                          <span className="animate-pulse">● ACTIVO</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Central Timeline Glowing Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div 
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-500 z-20 ${
                        isCurrent
                          ? 'bg-[#00B4D8] border-white text-[#0B1D36] shadow-[0_0_30px_#00B4D8] scale-125 rotate-6'
                          : isPassed
                          ? 'bg-[#0B1D36] border-[#00B4D8] text-[#00B4D8] shadow-[0_0_15px_rgba(0,180,216,0.3)]'
                          : 'bg-[#0B1D36] border-white/10 text-slate-500'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Empty Spacer on desktop for alternating grid */}
                  <div className="hidden md:block md:w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Final Continuous Evolution Loop Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-[#0B1D36] border border-[#00B4D8]/40 text-center max-w-4xl mx-auto backdrop-blur-xl shadow-[0_0_50px_-10px_rgba(0,180,216,0.2)]"
        >
          <div className="inline-flex p-3 rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            El Ciclo No Termina: Retroalimentación Perpetua
          </h3>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Cada proyecto escalado genera nuevos datos de campo, descubrimientos no previstos y patentes derivadas que alimentan inmediatamente la <strong>Fase 01: Idea</strong> de la siguiente generación tecnológica.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
