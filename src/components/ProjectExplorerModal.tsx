import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Search, 
  Layers, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import { SAMPLE_PROJECTS } from '../data/innoventiumData';

interface ProjectExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string | null;
  onContactProject: (projectTitle: string) => void;
}

export const ProjectExplorerModal: React.FC<ProjectExplorerModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  onContactProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'Todos',
    'IA',
    'Energía',
    'Sustentabilidad',
    'Industria',
    'Tecnología Avanzada',
    'Investigación Científica',
  ];

  const filteredProjects = SAMPLE_PROJECTS.filter((prj) => {
    const matchesCat = selectedCategory === 'Todos' || prj.category === selectedCategory;
    const matchesSearch = 
      prj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prj.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  if (!isOpen) return null;

  return (
    <div 
      id="project-explorer-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl max-h-[90vh] bg-[#0B1D36] border border-[#00B4D8]/40 rounded-3xl flex flex-col shadow-[0_0_80px_-10px_rgba(0,180,216,0.35)] overflow-hidden"
      >
        {/* Modal Top Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0B1D36]">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#00B4D8]/10 text-[#00B4D8] border border-[#00B4D8]/30">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Repositorio de Proyectos I+D</span>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-white/5 text-[#00B4D8] border border-[#00B4D8]/30 font-bold">
                  {SAMPLE_PROJECTS.length} Proyectos Registrados
                </span>
              </h3>
              <p className="text-xs text-slate-300">
                Iniciativas tecnológicas activas, patentes protegidas y desarrollos en escalamiento.
              </p>
            </div>
          </div>

          <button
            id="btn-close-project-modal"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="p-6 border-b border-white/10 bg-[#0B1D36] space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por tecnología, patente, nombre..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#00B4D8] transition-colors placeholder:text-slate-500"
              />
            </div>

            {/* Quick Status Info */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
              <span>100% Blindaje PCT</span>
            </div>
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#00B4D8] text-[#0B1D36] font-bold shadow-[0_0_15px_rgba(0,180,216,0.5)]'
                    : 'bg-white/5 text-slate-300 hover:text-white border border-white/10 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {filteredProjects.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <p className="text-sm">No se encontraron proyectos para los filtros seleccionados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProjects.map((prj) => (
                <div
                  key={prj.id}
                  className="p-5 rounded-2xl bg-[#0B1D36]/80 border border-white/10 hover:border-[#00B4D8]/60 hover:bg-[#0B1D36] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Category & Status Header */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono font-bold text-[#00B4D8] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#00B4D8]/10 border border-[#00B4D8]/30">
                        {prj.category}
                      </span>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-300">
                          TRL {prj.trlLevel}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#2ECC71] border border-[#2ECC71]/30 font-semibold">
                          {prj.status}
                        </span>
                      </div>
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#00B4D8] transition-colors">
                      {prj.title}
                    </h4>

                    <p className="text-slate-300 text-xs leading-relaxed mb-4">
                      {prj.description}
                    </p>

                    {/* Impact metric */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block mb-0.5">Impacto Verificado:</span>
                      <p className="text-xs font-semibold text-[#2ECC71]">{prj.impactMetrics}</p>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {prj.technologies.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer with Patent & Contact */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-slate-400">
                      Patente: <strong className="text-slate-200">{prj.patentRef}</strong>
                    </span>

                    <button
                      onClick={() => {
                        onClose();
                        onContactProject(prj.title);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-[#00B4D8]/10 hover:bg-[#00B4D8] text-[#00B4D8] hover:text-[#0B1D36] border border-[#00B4D8]/30 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <span>Solicitar Colaboración</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom Banner */}
        <div className="p-4 border-t border-white/10 bg-[#0B1D36] flex items-center justify-between text-xs text-slate-400">
          <span>* Acceso a dossiers técnicos y acuerdos de transferencia bajo firma de NDA.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </motion.div>
    </div>
  );
};
