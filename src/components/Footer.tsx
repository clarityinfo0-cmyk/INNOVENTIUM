import React, { useState } from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Award, 
  Lock,
  Send,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';

export const Footer: React.FC<{ onOpenContact: () => void }> = ({ onOpenContact }) => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="relative bg-[#0B1D36] text-slate-300 border-t border-[#00B4D8]/20 pt-16 sm:pt-20 pb-10 sm:pb-12 overflow-hidden">
      
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#00B4D8]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Identity (5 cols) */}
          <div className="sm:col-span-2 lg:col-span-5 space-y-6">
            <div className="flex items-center">
              <InnoventiumLogo 
                height={50} 
                variant="full" 
                theme="dark" 
                animated={false} 
              />
            </div>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Transformamos conocimiento en soluciones que impulsan el futuro. Investigación científica, desarrollo tecnológico e innovación aplicada con impacto real y sostenible.
            </p>

            {/* Scientific Standards Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00B4D8]" />
                Blindaje PCT & WIPO
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#2ECC71]" />
                Maduración TRL 1-9
              </span>
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                <Lock className="w-3.5 h-3.5 text-[#7B6CF6]" />
                Protocolo NDA Estricto
              </span>
            </div>

            {/* Redes Sociales & Contacto Directo */}
            <div className="pt-3">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Canales Oficiales y Contacto:
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/?text=Hola%20equipo%20de%20INNOVENTIUM,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20proyectos%20de%20I%2BD."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-whatsapp-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366] text-[#25D366] hover:text-black border border-[#25D366]/30 hover:border-[#25D366] text-xs font-bold transition-all shadow-sm group cursor-pointer"
                >
                  <WhatsAppIcon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>WhatsApp</span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-facebook-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 hover:border-[#1877F2] text-xs font-bold transition-all shadow-sm group cursor-pointer"
                >
                  <FacebookIcon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Facebook</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="footer-instagram-link"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#E4405F]/10 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] text-[#E4405F] hover:text-white border border-[#E4405F]/30 hover:border-[#E4405F] text-xs font-bold transition-all shadow-sm group cursor-pointer"
                >
                  <InstagramIcon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Navegación
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <a href="#hero" className="hover:text-[#00B4D8] transition-colors">Inicio</a>
              </li>
              <li>
                <a href="#proposito" className="hover:text-[#00B4D8] transition-colors">Propósito</a>
              </li>
              <li>
                <a href="#filosofia" className="hover:text-[#00B4D8] transition-colors">Nuestra Filosofía</a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-[#00B4D8] transition-colors">Ciclo de Innovación</a>
              </li>
              <li>
                <a href="#areas" className="hover:text-[#00B4D8] transition-colors">Áreas de I+D</a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-[#00B4D8] transition-colors">Proceso de Innovación</a>
              </li>
              <li>
                <a href="#valores" className="hover:text-[#00B4D8] transition-colors">Valores</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Áreas Científicas (2 cols) */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Áreas de I+D
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>🧠</span> Inteligencia Artificial
              </li>
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>⚡</span> Energía Sostenible
              </li>
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>🌱</span> Sustentabilidad
              </li>
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>🏭</span> Industria 4.0
              </li>
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>🛰</span> Tecnología Avanzada
              </li>
              <li className="hover:text-[#00B4D8] transition-colors flex items-center gap-1.5">
                <span>🧬</span> Investigación Científica
              </li>
            </ul>
          </div>

          {/* Col 4: Boletín Científico (3 cols) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-white font-bold">
              Boletín Tecnológico
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Recibe reportes trimestrales de patentes, descubrimientos científicos y tendencias en alta tecnología.
            </p>

            <form 
              onSubmit={handleSubscribe}
              className="space-y-2"
            >
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-[#0B1D36] border border-white/15 text-xs text-slate-200 focus:outline-none focus:border-[#00B4D8] transition-colors placeholder:text-slate-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#00B4D8] hover:bg-[#00B4D8]/80 text-[#0B1D36] transition-colors cursor-pointer"
                  title="Suscribirme"
                >
                  <Send className="w-3.5 h-3.5 font-bold" />
                </button>
              </div>
              {subscribed ? (
                <p className="text-[11px] text-[#2ECC71] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> ¡Suscripción confirmada!
                </p>
              ) : (
                <p className="text-[10px] text-slate-400">Sin spam. Desuscripción con un solo clic.</p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to top */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-slate-400 text-center sm:text-left">
            <span>© {new Date().getFullYear()} INNOVENTIUM. Todos los derechos reservados.</span>
            <span className="text-[#00B4D8] font-mono font-semibold">innovacion perpetua™</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-[#00B4D8] border border-white/10 transition-colors cursor-pointer font-mono text-xs"
            >
              <span>Volver arriba</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
