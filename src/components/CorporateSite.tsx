import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronRight, Mail, Menu, X } from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';
import { ACTIVE_PROJECTS, ORG_PLACEHOLDER, type OrgNode } from '../data/siteData';

const navLinks = [['Inicio', 'inicio'], ['Nosotros', 'nosotros'], ['Proyectos activos', 'proyectos'], ['Innovación', 'proceso'], ['Misión y visión', 'mision-vision'], ['Contacto', 'contacto']];
const values = [
  ['01', 'Integridad', 'Decidimos y actuamos con transparencia, rigor y respeto.'],
  ['02', 'Excelencia', 'Elevamos el estándar técnico en cada etapa del trabajo.'],
  ['03', 'Innovación continua', 'Aprendemos, cuestionamos y evolucionamos de forma permanente.'],
  ['04', 'Responsabilidad', 'Asumimos el impacto humano, industrial y ambiental de lo que creamos.'],
  ['05', 'Colaboración', 'Integramos perspectivas para construir mejores soluciones.'],
  ['06', 'Sostenibilidad', 'Diseñamos valor duradero para las personas y el planeta.'],
];
const process = ['Idea', 'Investigación', 'Desarrollo', 'Validación', 'Protección', 'Implementación'];

const OrgChart: React.FC<{ nodes: OrgNode[] }> = ({ nodes }) => <div className="org-chart" aria-label="Organigrama provisional">{nodes.map((node, index) => <React.Fragment key={node.id}><div className="org-node"><span>{node.position}</span><small>{node.name ?? 'Por definir'}</small></div>{index < nodes.length - 1 && <div className="org-connector" aria-hidden="true" />}</React.Fragment>)}</div>;

export const CorporateSite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  const goTo = (id: string) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

  return <div className="min-h-screen bg-[var(--background)] text-[var(--text-dark)]">
    <header className={`site-header ${scrolled || menuOpen ? 'site-header--solid' : ''}`}>
      <div className="site-container flex h-[76px] items-center justify-between">
        <button onClick={() => goTo('inicio')} aria-label="Ir al inicio"><InnoventiumLogo height={38} variant="full" theme={scrolled || menuOpen ? 'light' : 'dark'} animated={false} /></button>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegación principal">{navLinks.map(([name, id]) => <button key={id} onClick={() => goTo(id)} className="nav-link">{name}</button>)}</nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="menu-button xl:hidden" aria-expanded={menuOpen} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
      {menuOpen && <nav className="mobile-nav xl:hidden" aria-label="Navegación móvil">{navLinks.map(([name, id]) => <button key={id} onClick={() => goTo(id)}>{name}</button>)}</nav>}
    </header>

    <main>
      <section id="inicio" className="hero-section"><div className="hero-atmosphere" aria-hidden="true" /><div className="site-container relative z-10 flex min-h-screen items-center pt-24"><div className="max-w-4xl py-20"><p className="hero-eyebrow reveal reveal-1">CIENCIA · DESARROLLO · INNOVACIÓN</p><h1 className="hero-title reveal reveal-2">Innovación que trasciende.</h1><p className="hero-copy reveal reveal-3">Ciencia, desarrollo e innovación orientados a transformar ideas en proyectos de alto impacto.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row reveal reveal-4"><button onClick={() => goTo('nosotros')} className="button button--gold">Conocer Innoventium <ArrowRight size={17} /></button><button onClick={() => goTo('proyectos')} className="button button--outline">Proyectos activos</button></div></div></div><button onClick={() => goTo('nosotros')} className="hero-scroll" aria-label="Continuar a la siguiente sección"><span /> Descubrir</button></section>

      <section id="nosotros" className="section scroll-mt-20 bg-white"><div className="site-container grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-5"><p className="eyebrow">INNOVENTIUM</p><h2 className="section-title mt-4">Innovación con propósito.</h2></div><div className="lg:col-span-7"><p className="lead">Somos una empresa científica orientada a la creación de innovaciones de alto impacto, el desarrollo de proyectos productivos y la generación de patentes que elevan los estándares de la industria.</p><p className="body-copy mt-5">Operamos bajo un compromiso inquebrantable con la ética, los valores humanos y el respeto por el medio ambiente, integrando ciencia, tecnología y creatividad con una visión de largo alcance.</p><div className="concept-row">{['Ciencia', 'Tecnología', 'Creatividad', 'Ética'].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div></div></div></section>

      <section id="proyectos" className="section scroll-mt-20"><div className="site-container"><div className="max-w-2xl"><p className="eyebrow">PORTAFOLIO EN DESARROLLO</p><h2 className="section-title mt-4">Proyectos activos</h2><p className="lead mt-5">Ideas que hoy estamos convirtiendo en realidad.</p></div><div className="project-grid">{ACTIVE_PROJECTS.map(project => <article key={project.id} className="project-card"><div className="flex items-start justify-between gap-4"><InnoventiumLogo height={40} variant="emblem" theme="light" /><span>{project.category}</span></div><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-footer"><span>{project.status}</span><ChevronRight size={18} /></div></article>)}</div></div></section>

      <section id="proceso" className="section scroll-mt-20 bg-[var(--primary)] text-white"><div className="site-container"><p className="eyebrow eyebrow--dark">NUESTRO PROCESO</p><h2 className="section-title section-title--dark mt-4">De una idea a una innovación.</h2><div className="process-flow">{process.map((item, i) => <div key={item} className="process-step"><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div></section>

      <section id="mision-vision" className="section scroll-mt-20 bg-white"><div className="site-container"><div className="max-w-2xl"><p className="eyebrow">RUMBO ESTRATÉGICO</p><h2 className="section-title mt-4">Propósito y horizonte.</h2></div><div className="mission-grid"><article><span>MISIÓN</span><h3>Convertir ideas en innovaciones.</h3><p>Convertir ideas en innovaciones y patentes que elevan el estándar de lo que se considera posible. Creamos soluciones de alto impacto con ciencia, tecnología y ética, orientadas al bien común y al respeto por el planeta.</p></article><article><span>VISIÓN</span><h3>Un referente internacional.</h3><p>Ser un referente internacional en investigación, desarrollo tecnológico e innovación aplicada, creando proyectos que definan una nueva generación de soluciones para el futuro.</p></article></div></div></section>

      <section className="section border-y border-slate-200/70"><div className="site-container"><div className="grid gap-8 md:grid-cols-2 md:items-end"><div><p className="eyebrow">ORGANIZACIÓN</p><h2 className="section-title mt-4">Nuestra estructura</h2></div><p className="lead">Una organización diseñada para transformar conocimiento en resultados.</p></div><OrgChart nodes={ORG_PLACEHOLDER} /></div></section>

      <section className="section bg-white"><div className="site-container"><p className="eyebrow">NUESTRA FILOSOFÍA</p><h2 className="section-title mt-4">Principios para crear valor.</h2><div className="values-grid">{values.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="contacto" className="contact-section scroll-mt-20"><div className="site-container grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="eyebrow eyebrow--dark">CONTACTO</p><h2>Las ideas relevantes merecen desarrollarse.</h2><p>Conversemos sobre la próxima oportunidad.</p></div><a href="mailto:contacto@innoventium.tech" className="contact-link lg:col-span-4"><Mail size={22} /><span>contacto@innoventium.tech</span><ArrowRight size={18} /></a></div></section>
    </main>

    <footer className="site-footer"><div className="site-container"><div className="footer-top"><InnoventiumLogo height={48} variant="full" theme="dark" /><div><strong>Innovación perpetua.</strong><p>El futuro comienza con las ideas que decidimos desarrollar hoy.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} INNOVENTIUM</span><span>Investigación · Desarrollo · Propiedad intelectual</span></div></div></footer>
  </div>;
};
