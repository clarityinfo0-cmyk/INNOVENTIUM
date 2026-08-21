import React from 'react';
import { motion } from 'motion/react';
import { 
  Infinity as InfinityIcon, 
  Orbit, 
  Compass
} from 'lucide-react';

export const FutureVisionSection: React.FC = () => {
  return (
    <section 
      id="futuro"
      className="relative py-28 sm:py-36 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Dynamic atmospheric halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-gradient-to-r from-[#00B4D8]/15 via-[#7B6CF6]/10 to-[#0B1D36]/30 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/40 text-[#00B4D8] text-xs font-mono mb-6 shadow-[0_0_20px_rgba(0,180,216,0.25)]"
          >
            <InfinityIcon className="w-4 h-4 text-[#00B4D8] animate-spin" style={{ animationDuration: '12s' }} />
            <span>EVOLUCIÓN CONSTANTE Y RESILIENCIA TECNOLÓGICA</span>
          </motion.div>

          {/* Main Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-8"
          >
            Innovación con visión de futuro
          </motion.h2>

          {/* Main Statement Boxes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 sm:p-12 rounded-3xl bg-[#0B1D36] border border-[#00B4D8]/30 backdrop-blur-xl shadow-[0_0_50px_-15px_rgba(0,180,216,0.25)] text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00B4D8]/5 rounded-bl-full pointer-events-none" />

            <div className="space-y-6 text-slate-200">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 shrink-0">
                  <Orbit className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    La innovación no termina cuando un proyecto concluye.
                  </h3>
                  <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                    Cada desarrollo representa el inicio de nuevas posibilidades.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[#7B6CF6]/10 text-[#7B6CF6] border border-[#7B6CF6]/30 shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-1">
                  Nuestro compromiso es mantener una evolución constante, generando tecnologías capaces de adaptarse a los desafíos del mañana.
                </p>
              </div>
            </div>

            {/* 3 Future Readiness Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-mono text-[#00B4D8] font-bold block mb-1">Arquitectura Modular</span>
                <span className="text-xs text-slate-300">Escalabilidad sin fricción</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-mono text-[#7B6CF6] font-bold block mb-1">Tecnología Adaptativa</span>
                <span className="text-xs text-slate-300">Resiliente ante cambios</span>
              </div>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-center">
                <span className="text-xs font-mono text-[#E8C547] font-bold block mb-1">Impacto Transgeneracional</span>
                <span className="text-xs text-slate-300">Sostenible para el futuro</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
