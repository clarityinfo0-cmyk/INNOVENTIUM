import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Eye, 
  Target
} from 'lucide-react';

export const MissionVisionSection: React.FC = () => {
  return (
    <section 
      id="mision-vision"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Background illumination */}
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#00B4D8]/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#7B6CF6]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/30 text-[#00B4D8] text-xs font-mono mb-4"
          >
            <Compass className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>RUMBO ESTRATÉGICO & HORIZONTE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Misión & Visión
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            El compromiso que nos impulsa día a día y la meta hacia donde dirigimos todo nuestro esfuerzo científico.
          </motion.p>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: MISIÓN */}
          <motion.div
            id="card-mission"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl p-8 sm:p-12 bg-[#0B1D36] border border-[#00B4D8]/30 backdrop-blur-xl transition-all duration-500 hover:border-[#00B4D8] hover:shadow-[0_0_45px_-10px_rgba(0,180,216,0.35)] flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs font-bold text-[#00B4D8] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-[#00B4D8]/30">
                  SECCIÓN 08 · PROPÓSITO
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Misión
              </h3>

              {/* Exact user text */}
              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
                Transformar ideas en soluciones científicas y tecnológicas que generen valor sostenible, impulsen el desarrollo de nuevos proyectos y contribuyan positivamente al progreso de la sociedad.
              </p>
            </div>

            {/* Strategic Pillars Footer */}
            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#00B4D8] font-bold block">Ciencia Aplicada</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#7B6CF6] font-bold block">Valor Sostenible</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#2ECC71] font-bold block">Progreso Social</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: VISIÓN */}
          <motion.div
            id="card-vision"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-3xl p-8 sm:p-12 bg-[#0B1D36] border border-[#7B6CF6]/30 backdrop-blur-xl transition-all duration-500 hover:border-[#7B6CF6] hover:shadow-[0_0_45px_-10px_rgba(123,108,246,0.35)] flex flex-col justify-between"
          >
            {/* Top Badge */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 rounded-2xl bg-[#7B6CF6]/10 text-[#7B6CF6] border border-[#7B6CF6]/30 group-hover:scale-110 transition-transform">
                  <Eye className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs font-bold text-[#7B6CF6] uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-[#7B6CF6]/30">
                  SECCIÓN 09 · HORIZONTE
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Visión
              </h3>

              {/* Exact user text */}
              <p className="text-slate-200 text-lg sm:text-xl leading-relaxed font-normal">
                Ser un referente internacional en investigación, desarrollo tecnológico e innovación aplicada, creando proyectos que definan una nueva generación de soluciones para el futuro.
              </p>
            </div>

            {/* Strategic Pillars Footer */}
            <div className="pt-8 mt-8 border-t border-white/10 grid grid-cols-3 gap-3 text-center">
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#7B6CF6] font-bold block">Liderazgo Global</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#00B4D8] font-bold block">I+D Vanguardista</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[11px] font-mono text-[#E8C547] font-bold block">Nueva Generación</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
