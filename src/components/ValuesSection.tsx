import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  Infinity as InfinityIcon, 
  CheckCircle, 
  Users, 
  Leaf, 
  HeartHandshake, 
  Sparkles,
  Heart
} from 'lucide-react';
import { VALUES_LIST } from '../data/innoventiumData';

export const ValuesSection: React.FC = () => {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return ShieldCheck;
      case 'Award': return Award;
      case 'Infinity': return InfinityIcon;
      case 'CheckCircle': return CheckCircle;
      case 'Users': return Users;
      case 'Leaf': return Leaf;
      case 'HeartHandshake': return HeartHandshake;
      case 'Sparkles': return Sparkles;
      default: return Heart;
    }
  };

  return (
    <section 
      id="valores"
      className="relative py-24 sm:py-32 bg-[#0B1D36] text-white overflow-hidden border-t border-[#00B4D8]/20"
    >
      {/* Background decorations */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#2ECC71]/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00B4D8]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

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
            <Heart className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>CÓDIGO DEONTOLÓGICO Y CIENTÍFICO</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight"
          >
            Nuestros valores
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed"
          >
            Los principios innegociables que sustentan nuestra ética investigadora y relaciones humanas.
          </motion.p>
        </div>

        {/* 8 Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_LIST.map((val, idx) => {
            const Icon = getValueIcon(val.icon);

            return (
              <motion.div
                key={val.id}
                id={`value-card-${val.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="group relative rounded-2xl p-6 sm:p-7 bg-[#0B1D36]/80 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-[#00B4D8]/60 hover:bg-[#0B1D36] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl border ${val.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                    {val.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Principio I+D</span>
                  <span className="text-[#00B4D8] font-bold opacity-0 group-hover:opacity-100 transition-opacity">● APLICADO</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
