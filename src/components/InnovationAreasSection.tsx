import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Brain, 
  Zap, 
  Sprout, 
  Factory, 
  Satellite, 
  Dna, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  ChevronRight,
  TrendingUp,
  X
} from 'lucide-react';
import { INNOVATION_AREAS } from '../data/innoventiumData';
import { InnovationArea } from '../types';

interface InnovationAreasSectionProps {
  onSelectCategory: (category: string) => void;
}

export const InnovationAreasSection: React.FC<InnovationAreasSectionProps> = ({ onSelectCategory }) => {
  const [selectedArea, setSelectedArea] = useState<InnovationArea | null>(null);

  const getAreaIcon = (id: string) => {
    switch (id) {
      case 'ia': return Brain;
      case 'energia': return Zap;
      case 'sustentabilidad': return Sprout;
      case 'industria': return Factory;
      case 'tecnologia-avanzada': return Satellite;
      case 'investigacion-cientifica': return Dna;
      default: return Sparkles;
    }
  };

  return (
    <section 
      id="areas"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#00B4D8]/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#2ECC71]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

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
            <Layers className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>ARQUITECTURA DE DOMINIOS CIENTÍFICO-TECNOLÓGICOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nuestras áreas de innovación
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            Líneas de investigación y desarrollo preparadas modularmente para escalar conforme evolucionan las fronteras del conocimiento.
          </motion.p>
        </div>

        {/* 6 Interactive Animated Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INNOVATION_AREAS.map((area, index) => {
            const Icon = getAreaIcon(area.id);

            return (
              <motion.div
                key={area.id}
                id={`card-area-${area.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative rounded-3xl p-8 bg-[#0B1D36]/80 backdrop-blur-xl border border-white/10 transition-all duration-500 flex flex-col justify-between hover:border-[#00B4D8]/60 hover:bg-[#0B1D36] hover:-translate-y-2 ${area.borderHover}`}
              >
                {/* Accent glow corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00B4D8]/10 to-transparent rounded-tr-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Top Badge & Emoji/Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl filter drop-shadow-md select-none">{area.emoji}</span>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#00B4D8] group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <span className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-full bg-white/5 text-[#00B4D8] border border-[#00B4D8]/30">
                      {area.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors flex items-center gap-2">
                    {area.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {area.shortDesc}
                  </p>

                  {/* Technology Pills preview */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Ejes Tecnológicos:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.technologies.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs font-mono px-2 py-0.5 rounded-lg bg-white/5 text-slate-200 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                      {area.technologies.length > 3 && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30">
                          +{area.technologies.length - 3} más
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Footer with Details Modal Trigger & Projects Link */}
                <div className="pt-6 border-t border-white/10 mt-auto flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedArea(area)}
                    className="text-xs font-mono font-semibold text-[#00B4D8] hover:text-white flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>Ver Ficha Técnica</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectCategory(area.title)}
                    className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>{area.activeProjects} Proyectos</span>
                    <ArrowRight className="w-3 h-3 text-[#00B4D8]" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Detailed Area Modal / Drawer */}
        <AnimatePresence>
          {selectedArea && (
            <div 
              id="area-details-modal"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in"
              onClick={() => setSelectedArea(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[#0B1D36] border border-[#00B4D8]/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_-10px_rgba(0,180,216,0.3)] relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{selectedArea.emoji}</span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                        {selectedArea.title}
                      </h3>
                      <p className="text-xs font-mono text-[#00B4D8] uppercase tracking-wider font-semibold">
                        {selectedArea.badge}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedArea(null)}
                    className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Detailed Description */}
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedArea.detailedDesc}
                </p>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  {selectedArea.stats.map((st, i) => (
                    <div key={i} className="text-center">
                      <p className="text-lg sm:text-xl font-bold text-[#00B4D8] font-display">{st.value}</p>
                      <p className="text-[11px] font-mono text-slate-400">{st.label}</p>
                    </div>
                  ))}
                </div>

                {/* Technology Stack Breakdown */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Líneas de Investigación y Tecnologías Clave:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedArea.technologies.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Callout */}
                <div className="p-4 rounded-2xl bg-[#0B1D36] border border-[#00B4D8]/30 mb-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#00B4D8] font-bold mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span>Iniciativa Insignia: {selectedArea.caseStudy.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-1">{selectedArea.caseStudy.summary}</p>
                  <p className="text-xs text-[#2ECC71] font-semibold font-mono">Impacto: {selectedArea.caseStudy.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      const title = selectedArea.title;
                      setSelectedArea(null);
                      onSelectCategory(title);
                    }}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#7B6CF6] hover:from-[#00B4D8] hover:to-[#0B1D36] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#00B4D8]/20 cursor-pointer"
                  >
                    <Layers className="w-4 h-4" />
                    <span>Ver Proyectos de {selectedArea.title}</span>
                  </button>
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
