import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Cpu, 
  Lightbulb, 
  Target, 
  Sparkles, 
  ArrowUpRight
} from 'lucide-react';
import { PHILOSOPHY_PILLARS } from '../data/innoventiumData';

export const PhilosophySection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<string>('ciencia');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FlaskConical': return FlaskConical;
      case 'Cpu': return Cpu;
      case 'Lightbulb': return Lightbulb;
      case 'Target': return Target;
      default: return Sparkles;
    }
  };

  return (
    <section 
      id="filosofia"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#00B4D8]/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#7B6CF6]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

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
            <Sparkles className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>LOS CUATRO PILARES ESTRUCTURALES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nuestra filosofía
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            Principios fundamentales que guían cada línea de investigación y cada desarrollo tecnológico en Innoventium.
          </motion.p>
        </div>

        {/* 4 Pillars Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PHILOSOPHY_PILLARS.map((pillar, index) => {
            const Icon = getIcon(pillar.icon);
            const isHovered = selectedPillar === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                id={`card-philosophy-${pillar.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setSelectedPillar(pillar.id)}
                className={`relative rounded-2xl p-7 sm:p-8 bg-[#0B1D36]/80 backdrop-blur-md border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                  isHovered
                    ? 'border-[#00B4D8]/60 bg-[#0B1D36] shadow-[0_0_35px_-5px_rgba(0,180,216,0.3)] -translate-y-2'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Accent top gradient line */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full transition-all duration-500 ${
                  isHovered ? 'bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#E8C547]' : 'bg-transparent'
                }`} />

                <div>
                  {/* Top Icon and Index */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-xl border ${pillar.color} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-xs font-mono text-[#00B4D8] mb-4 tracking-wide uppercase font-semibold">
                    {pillar.subtitle}
                  </p>

                  {/* Core Description from user prompt */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom Keywords & Metric Tag */}
                <div className="pt-4 border-t border-white/10 mt-auto">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {pillar.keywords.map((kw) => (
                      <span 
                        key={kw} 
                        className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-white/5 text-slate-300 border border-white/10"
                      >
                        {kw}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
                    <span>{pillar.metrics}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#00B4D8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
