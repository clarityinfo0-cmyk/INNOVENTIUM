import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight,
  Award
} from 'lucide-react';
import { WHY_INNOVENTIUM } from '../data/innoventiumData';

export const WhyInnoventiumSection: React.FC<{ onContactClick: () => void }> = ({ onContactClick }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section 
      id="por-que"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#00B4D8]/10 blur-[170px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#7B6CF6]/10 blur-[160px] rounded-full pointer-events-none -z-10" />

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
            <Award className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>DIFERENCIADORES ESTRATÉGICOS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            ¿Por qué Innoventium?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            Seis certezas que convierten a Innoventium en el socio científico y tecnológico preferido por organizaciones de vanguardia.
          </motion.p>
        </div>

        {/* 6 Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_INNOVENTIUM.map((diff, index) => {
            const isHovered = hoveredIdx === index;

            return (
              <motion.div
                key={diff.title}
                id={`why-card-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative rounded-3xl p-8 bg-[#0B1D36]/80 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isHovered
                    ? 'border-[#00B4D8]/70 bg-[#0B1D36] shadow-[0_0_35px_-5px_rgba(0,180,216,0.3)] -translate-y-1.5'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Top Checkmark Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/5 text-[#00B4D8] border border-[#00B4D8]/30">
                      {diff.badge}
                    </span>
                  </div>

                  {/* Title (Exact from user prompt with ✔) */}
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#00B4D8] transition-colors flex items-start gap-2">
                    <span>{diff.title}</span>
                  </h3>

                  {/* Detailed Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {diff.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#00B4D8] font-bold">
                      {diff.highlight}
                    </span>
                    <span className="text-[#2ECC71] font-mono text-xs font-semibold">✓ Garantizado</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Global Partnership CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#0B1D36] border border-[#00B4D8]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_50px_-10px_rgba(0,180,216,0.2)]"
        >
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              ¿Listo para iniciar una colaboración científica de alto impacto?
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Evaluamos sin costo la viabilidad preliminar y la ruta de propiedad intelectual de tu proyecto.
            </p>
          </div>

          <button
            id="btn-why-contact-cta"
            onClick={onContactClick}
            className="shrink-0 px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#00B4D8] to-[#7B6CF6] hover:from-[#00B4D8] hover:to-[#0B1D36] transition-all shadow-[0_0_25px_rgba(0,180,216,0.4)] flex items-center gap-2 cursor-pointer"
          >
            <span>Iniciar Consulta Estratégica</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
