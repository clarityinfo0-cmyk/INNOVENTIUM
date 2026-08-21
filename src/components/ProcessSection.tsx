import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Radar, 
  Microscope, 
  Compass, 
  Cpu, 
  CheckSquare, 
  Shield, 
  Rocket, 
  Sparkles,
  Workflow
} from 'lucide-react';
import { PROCESS_STAGES } from '../data/innoventiumData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Radar': return Radar;
      case 'Microscope': return Microscope;
      case 'Compass': return Compass;
      case 'Cpu': return Cpu;
      case 'CheckSquare': return CheckSquare;
      case 'Shield': return Shield;
      case 'Rocket': return Rocket;
      default: return Sparkles;
    }
  };

  return (
    <section 
      id="proceso"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#00B4D8]/10 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-[#7B6CF6]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-mono mb-4"
          >
            <Workflow className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>METODOLOGÍA END-TO-END</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nuestro proceso de innovación
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 space-y-1"
          >
            <p className="text-xl sm:text-2xl text-slate-300 font-display font-medium">
              No desarrollamos únicamente ideas.
            </p>
            <p className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#2ECC71]">
              Construimos soluciones completas.
            </p>
          </motion.div>
        </div>

        {/* 7-Step Process Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-4">
          {PROCESS_STAGES.map((stage, idx) => {
            const Icon = getProcessIcon(stage.icon);
            const isSelected = activeStep === stage.step;

            return (
              <motion.div
                key={stage.step}
                id={`process-stage-${stage.step}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onClick={() => setActiveStep(stage.step)}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isSelected
                    ? 'bg-[#0B1D36] border-[#00B4D8] shadow-[0_0_30px_-5px_rgba(0,180,216,0.4)] scale-102 lg:-translate-y-2'
                    : 'bg-[#0B1D36]/70 border-white/10 hover:border-[#00B4D8]/40 hover:bg-[#0B1D36]'
                }`}
              >
                {/* Stage index & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-bold px-2 py-1 rounded-md ${
                      isSelected ? 'bg-[#00B4D8] text-[#0B1D36]' : 'bg-white/5 text-slate-400 border border-white/10'
                    }`}>
                      0{stage.step}
                    </span>

                    <div className={`p-2 rounded-lg ${isSelected ? 'text-[#00B4D8] bg-[#00B4D8]/10' : 'text-slate-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`font-display text-lg font-bold mb-2 transition-colors ${
                    isSelected ? 'text-[#00B4D8]' : 'text-white'
                  }`}>
                    {stage.title}
                  </h3>

                  <p className="text-[11px] font-mono text-[#00B4D8] mb-3 tracking-wide font-semibold">
                    {stage.tagline}
                  </p>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[10px] font-mono text-slate-400 mt-auto">
                  <span className="text-slate-400 uppercase block mb-1">Acción clave:</span>
                  <span className="text-slate-200">{stage.keyAction}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Flow Connectors Indicator Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-[#0B1D36] border border-[#00B4D8]/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#2ECC71] animate-ping shrink-0" />
            <p className="text-xs sm:text-sm text-slate-300">
              Cada una de las 7 etapas cuenta con compuertas de calidad (Stage-Gate) y auditoría de riesgos antes del paso a la fase subsiguiente.
            </p>
          </div>

          <div className="text-xs font-mono text-[#00B4D8] font-bold whitespace-nowrap bg-[#00B4D8]/10 px-3 py-1.5 rounded-lg border border-[#00B4D8]/40">
            100% Trazabilidad R&D
          </div>
        </motion.div>

      </div>
    </section>
  );
};
