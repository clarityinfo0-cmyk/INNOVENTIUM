import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Atom, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Zap
} from 'lucide-react';

export const AccidentSection: React.FC = () => {
  const [activeVector, setActiveVector] = useState<number>(0);

  const convergencePillars = [
    {
      title: 'Ciencia',
      icon: Atom,
      color: 'from-[#00B4D8] to-[#0B1D36]',
      textColor: 'text-[#00B4D8]',
      bgColor: 'bg-[#00B4D8]/10',
      borderColor: 'border-[#00B4D8]/40',
      desc: 'Rigor experimental, modelado empírico y formulación matemática profunda.',
      stat: 'Base Epistémica'
    },
    {
      title: 'Tecnología',
      icon: Cpu,
      color: 'from-[#7B6CF6] to-[#0B1D36]',
      textColor: 'text-[#7B6CF6]',
      bgColor: 'bg-[#7B6CF6]/10',
      borderColor: 'border-[#7B6CF6]/40',
      desc: 'Arquitecturas de ingeniería, prototipado avanzado y código de alto rendimiento.',
      stat: 'Capacidad Operativa'
    },
    {
      title: 'Creatividad',
      icon: Sparkles,
      color: 'from-[#E8C547] to-[#0B1D36]',
      textColor: 'text-[#E8C547]',
      bgColor: 'bg-[#E8C547]/10',
      borderColor: 'border-[#E8C547]/40',
      desc: 'Pensamiento lateral disruptivo para concebir soluciones fuera de lo convencional.',
      stat: 'Visión Sin Límites'
    }
  ];

  return (
    <section 
      id="proposito"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Ambient background glow with the palette */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00B4D8]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7B6CF6]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Main Statement */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1D36] border border-[#00B4D8]/30 text-[#00B4D8] text-xs font-mono mb-4 shadow-sm"
          >
            <Zap className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>NUESTRO MANIFIESTO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            La innovación no ocurre por accidente.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-200 leading-relaxed"
          >
            En <span className="text-[#00B4D8] font-bold">Innoventium</span> creemos que las grandes transformaciones nacen cuando la ciencia, la tecnología y la creatividad trabajan con un mismo propósito.
          </motion.p>
        </div>

        {/* Narrative & Interactive Convergence Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Cards */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-2xl bg-[#0B1D36]/80 border border-[#00B4D8]/20 backdrop-blur-md relative group hover:border-[#00B4D8]/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30 shrink-0">
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    Misión de Transformación
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Nuestra misión es convertir desafíos complejos en soluciones reales mediante investigación, desarrollo tecnológico e innovación aplicada.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-8 rounded-2xl bg-[#0B1D36]/80 border border-[#7B6CF6]/20 backdrop-blur-md relative group hover:border-[#7B6CF6]/50 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#7B6CF6]/10 text-[#7B6CF6] border border-[#7B6CF6]/30 shrink-0">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display mb-2">
                    Valor Sostenible & Propiedad Intelectual
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    Cada proyecto representa una oportunidad para generar conocimiento, proteger propiedad intelectual y construir tecnologías que aporten valor sostenible a la sociedad.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Convergence Synergy Architecture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-[#0B1D36]/90 border border-[#00B4D8]/30 backdrop-blur-xl relative shadow-[0_0_50px_-15px_rgba(0,180,216,0.2)]"
          >
            {/* Header of the diagram */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="text-xs font-mono text-[#00B4D8] uppercase tracking-wider flex items-center gap-2 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" />
                Sinergia de Innovación Perpetua
              </span>
              <span className="text-xs font-mono text-slate-400">TRIADA COGNITIVA</span>
            </div>

            {/* 3 Interactive Synergy Vector Buttons */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {convergencePillars.map((p, idx) => {
                const Icon = p.icon;
                const isSelected = activeVector === idx;
                return (
                  <button
                    key={p.title}
                    id={`btn-pillar-${p.title.toLowerCase()}`}
                    onClick={() => setActiveVector(idx)}
                    className={`p-4 rounded-xl text-center border transition-all duration-300 flex flex-col items-center gap-2 cursor-pointer ${
                      isSelected
                        ? `${p.bgColor} ${p.borderColor} shadow-[0_0_20px_rgba(0,180,216,0.25)] scale-102`
                        : 'bg-[#0B1D36] border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <Icon className={`w-6 h-6 ${isSelected ? p.textColor : 'text-slate-400'}`} />
                    <span className={`text-xs font-bold font-display ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                      {p.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {p.stat}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Convergence Detail Box */}
            <div className="p-6 rounded-2xl bg-[#0B1D36] border border-white/10 mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-sm font-bold font-display ${convergencePillars[activeVector].textColor}`}>
                  Vector Activo: {convergencePillars[activeVector].title}
                </span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                  {convergencePillars[activeVector].stat}
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed">
                {convergencePillars[activeVector].desc}
              </p>
            </div>

            {/* Convergence Equation Outcome Bar */}
            <div className="p-4 rounded-xl bg-[#0B1D36] border border-[#00B4D8]/40 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm font-mono text-white">
                <span className="text-[#00B4D8] font-bold">Ciencia</span>
                <span className="text-slate-400">+</span>
                <span className="text-[#7B6CF6] font-bold">Tecnología</span>
                <span className="text-slate-400">+</span>
                <span className="text-[#E8C547] font-bold">Creatividad</span>
                <span className="text-[#00B4D8] font-bold">=</span>
              </div>
              <span className="px-3 py-1 rounded-lg bg-[#2ECC71]/15 text-[#2ECC71] font-bold text-xs sm:text-sm border border-[#2ECC71]/40">
                Solución Real
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
