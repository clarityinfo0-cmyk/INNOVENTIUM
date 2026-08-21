import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Layers, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Play
} from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';
import { WhatsAppIcon, FacebookIcon, InstagramIcon } from './SocialIcons';

interface NavbarProps {
  onOpenProjects: () => void;
  onOpenContact: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenProjects, onOpenContact, onReplayIntro }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        'hero',
        'proposito',
        'filosofia',
        'timeline',
        'areas',
        'proceso',
        'futuro',
        'mision-vision',
        'valores',
        'por-que',
        'contacto'
      ];

      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Propósito', href: '#proposito', id: 'proposito' },
    { name: 'Filosofía', href: '#filosofia', id: 'filosofia' },
    { name: 'Ciclo I+D', href: '#timeline', id: 'timeline' },
    { name: 'Áreas', href: '#areas', id: 'areas' },
    { name: 'Proceso', href: '#proceso', id: 'proceso' },
    { name: 'Valores', href: '#valores', id: 'valores' },
    { name: 'Por qué', href: '#por-que', id: 'por-que' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B1D36]/95 backdrop-blur-xl border-b border-[#00B4D8]/20 py-2.5 sm:py-3 shadow-[0_10px_30px_-10px_rgba(11,29,54,0.6)]' 
          : 'bg-gradient-to-b from-[#0B1D36]/95 via-[#0B1D36]/60 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo with the official emblem and wordmark */}
        <a 
          href="#hero" 
          id="brand-logo-link"
          className="flex items-center group focus:outline-none transition-transform duration-300 hover:scale-[1.02]"
        >
          <InnoventiumLogo 
            height={42} 
            variant="full" 
            theme="dark" 
            animated={false} 
            className="shrink-0"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#0B1D36]/80 border border-[#00B4D8]/20 rounded-full px-3.5 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                  isActive 
                    ? 'text-[#00B4D8] bg-[#00B4D8]/15 shadow-[0_0_15px_rgba(0,180,216,0.3)] border border-[#00B4D8]/30 font-semibold' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5">
          {/* Replay 4K Intro button */}
          {onReplayIntro && (
            <button
              id="btn-nav-replay-intro"
              onClick={onReplayIntro}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#E8C547] hover:text-white bg-[#E8C547]/10 hover:bg-[#E8C547]/20 border border-[#E8C547]/30 rounded-xl transition-all cursor-pointer shadow-sm"
              title="Reproducir animación 4K de apertura"
            >
              <Play className="w-3.5 h-3.5 fill-[#E8C547]" />
              <span>Intro 4K</span>
            </button>
          )}

          <button
            id="btn-nav-explore-projects"
            onClick={onOpenProjects}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-slate-200 hover:text-[#00B4D8] bg-[#0B1D36]/90 hover:bg-[#0B1D36] border border-[#00B4D8]/30 hover:border-[#00B4D8] rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-[#00B4D8]" />
            <span>Proyectos I+D</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71] animate-pulse" />
          </button>

          <button
            id="btn-nav-contact"
            onClick={onOpenContact}
            className="relative group overflow-hidden px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-[#00B4D8] via-[#7B6CF6] to-[#00B4D8] bg-[length:200%_auto] hover:bg-right rounded-xl transition-all duration-500 shadow-[0_0_20px_rgba(0,180,216,0.35)] hover:shadow-[0_0_25px_rgba(0,180,216,0.6)] flex items-center gap-1.5 cursor-pointer"
          >
            <span className="relative z-10">Contáctanos</span>
            <ArrowRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile & Tablet Hamburger Button & Quick Actions */}
        <div className="flex lg:hidden items-center gap-2">
          {onReplayIntro && (
            <button
              id="btn-mobile-replay-intro"
              onClick={onReplayIntro}
              className="px-2.5 py-1.5 text-[#E8C547] bg-[#E8C547]/10 border border-[#E8C547]/30 rounded-xl text-xs flex items-center gap-1 cursor-pointer font-mono"
              title="Ver animación 4K"
            >
              <Play className="w-3 h-3 fill-[#E8C547]" />
              <span className="text-[11px] font-bold">4K</span>
            </button>
          )}

          <button
            id="btn-mobile-explore-quick"
            onClick={onOpenProjects}
            className="p-2 text-[#00B4D8] bg-[#0B1D36] border border-[#00B4D8]/30 rounded-xl text-xs flex items-center gap-1 cursor-pointer"
            aria-label="Explorar Proyectos"
          >
            <Layers className="w-4 h-4" />
          </button>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-white bg-[#0B1D36] border border-[#00B4D8]/30 rounded-xl focus:outline-none cursor-pointer"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#00B4D8]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0B1D36]/98 backdrop-blur-2xl border-b border-[#00B4D8]/20 px-5 sm:px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4 max-h-[85vh] overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between px-3 py-2 text-xs font-mono text-[#00B4D8] bg-[#00B4D8]/10 border border-[#00B4D8]/30 rounded-xl mb-2">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-4 h-4 text-[#00B4D8]" />
                INNOVENTIUM R&D HUB
              </span>
              <span className="text-[10px] text-[#2ECC71] font-semibold">TRL 1-9 ACTIVO</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-[#00B4D8] hover:bg-white/5 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2.5">
              {onReplayIntro && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onReplayIntro();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#E8C547]/10 border border-[#E8C547]/30 text-[#E8C547] text-sm font-medium flex items-center justify-center gap-2 font-mono"
                >
                  <Play className="w-4 h-4 fill-[#E8C547]" />
                  <span>Reproducir Intro Cinemática 4K</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProjects();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0B1D36] border border-[#00B4D8]/40 text-[#00B4D8] text-sm font-medium flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-[#00B4D8]" />
                <span>Explorar Repositorio de Proyectos</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#00B4D8] to-[#7B6CF6] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#00B4D8]/20"
              >
                <span>Iniciar Contacto I+D</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Social & WhatsApp Direct Links */}
              <div className="pt-2 flex items-center justify-center gap-3">
                <a
                  href="https://wa.me/?text=Hola%20equipo%20de%20INNOVENTIUM,%20me%20gustar%C3%ADa%20solicitar%20informaci%C3%B3n%20sobre%20sus%20proyectos%20de%20I%2BD."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 flex items-center gap-1.5 text-xs font-bold"
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon size={16} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#1877F2]/10 text-[#1877F2] border border-[#1877F2]/30 flex items-center gap-1.5 text-xs font-bold"
                  aria-label="Facebook"
                >
                  <FacebookIcon size={16} />
                  <span>Facebook</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#E4405F]/10 text-[#E4405F] border border-[#E4405F]/30 flex items-center gap-1.5 text-xs font-bold"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
