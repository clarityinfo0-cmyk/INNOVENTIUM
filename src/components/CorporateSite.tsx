import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronRight, Mail, Menu, Play, X } from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { ACTIVE_PROJECTS } from '../data/siteData';

const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61593438346832';
const INSTAGRAM_URL = 'https://www.instagram.com/innoventiumlm/';
const WHATSAPP_MESSAGE = 'Hola equipo de INNOVENTIUM, me gustaría recibir más información sobre sus servicios y proyectos de innovación. ¿Podrían orientarme?';
const WHATSAPP_URL = `https://wa.me/526681830486?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const navLinks = [['Inicio', 'inicio'], ['Nosotros', 'nosotros'], ['Proyectos activos', 'proyectos'], ['Innovación', 'proceso'], ['Misión y visión', 'mision-vision'], ['Contacto', 'contacto']];
interface AthleticSupporter {
  id: string;
  name: string;
  alias?: string;
  role: string;
  image: string;
  record: { value: string; label: string; tone: 'win' | 'loss' | 'draw' }[];
  performance: { label: string; value: string }[];
  identity: { label: string; value: string }[];
  summary?: string;
  achievements?: string[];
  communityWork?: string[];
  socialValues?: string[];
  currentObjective?: string;
  videoUrl?: string;
}

const athleticSupporters: AthleticSupporter[] = [{
  id: 'luis-angel-castillo-soto',
  name: 'Luis Ángel Castillo Soto',
  alias: 'Flechita',
  role: 'Boxeador profesional',
  image: '/luis-angel-castillo-profile.png',
  record: [
    { value: '23', label: '15 KOs', tone: 'win' },
    { value: '2', label: '1 KO', tone: 'loss' },
    { value: '1', label: 'Empate', tone: 'draw' },
  ],
  performance: [
    { label: 'División', value: 'Peso supermosca' },
    { label: 'Combates', value: '26 · 125 rounds' },
    { label: 'KOs', value: '65.22%' },
    { label: 'Carrera', value: '2014–2026' },
    { label: 'Debut', value: '11 abril 2014' },
  ],
  identity: [
    { label: 'ID deportivo', value: '686979' },
    { label: 'Nombre', value: 'Luis Ángel Castillo Soto' },
    { label: 'Alias', value: 'Flechita' },
    { label: 'Nacionalidad', value: 'México' },
    { label: 'Guardia', value: 'Zurdo' },
    { label: 'Estatura', value: '167 cm' },
    { label: 'Alcance', value: '168 cm' },
    { label: 'Residencia', value: 'Ahome, Sinaloa' },
  ],
}, {
  id: 'carlos-araujo-arellano',
  name: 'Carlos Araujo Arellano',
  alias: 'El Príncipe',
  role: 'Boxeador profesional · Campeón Latino CMB · Conferencista motivacional · Promotor social',
  image: '/carlos-araujo-championship.jpg',
  record: [
    { value: '19', label: '16 KO', tone: 'win' },
    { value: '1', label: 'Derrota', tone: 'loss' },
    { value: '0', label: 'Empates', tone: 'draw' },
  ],
  performance: [
    { label: 'Récord profesional', value: '19 victorias · 1 derrota · 16 KO (84%)' },
    { label: 'Peleas profesionales', value: '20' },
    { label: 'Trayectoria deportiva', value: '19 años · 11 como profesional' },
    { label: 'Títulos', value: 'Campeón Latino CMB en dos divisiones' },
  ],
  identity: [
    { label: 'Edad', value: '31 años' },
    { label: 'Origen', value: 'Los Mochis, Sinaloa, México' },
    { label: 'Estatura', value: '1.72 m' },
    { label: 'Guardia', value: 'Derecha' },
    { label: 'División', value: 'Peso Pluma / Súper Pluma' },
  ],
  summary: 'Boxeador profesional originario de Los Mochis, Sinaloa, con 19 años de trayectoria en el deporte. Ejemplo de disciplina, resiliencia y superación. Campeón Latino del Consejo Mundial de Boxeo en dos divisiones. Hoy canaliza su experiencia en el ring hacia la transformación social, inspirando a jóvenes y familias a través de conferencias motivacionales y labor altruista.',
  achievements: [
    'Campeón Latino Peso Pluma · CMB / WBC',
    'Campeón Latino Peso Superpluma · CMB / WBC',
    'Reconocido por su pegada contundente en el norte del país.',
  ],
  communityWork: [
    'Mi carrera no termina en el ring. Mi compromiso es con mi gente.',
    'Conferencista para jóvenes: pláticas en escuelas, centros de rehabilitación y comunidades vulnerables sobre prevención de adicciones, disciplina y cómo salir adelante a través del deporte, con enfoque en Los Mochis y Sinaloa.',
    'Conferencista de superación personal: comparte herramientas de resiliencia, manejo de la derrota, disciplina, salud mental y valor del esfuerzo.',
    'Promotor del deporte como herramienta de transformación social: impulsa iniciativas para acercar a los jóvenes al deporte y generar oportunidades y empleos.',
  ],
  socialValues: ['Disciplina', 'Humildad', 'Respeto', 'Trabajo en equipo', 'Resiliencia', 'Altruismo', 'Orgullo mexicano'],
  currentObjective: 'Poner su imagen, trayectoria y legado al servicio de proyectos que generen un impacto positivo, empleos y oportunidades para la sociedad mexicana, inspirando a las nuevas generaciones a creer que sí se puede.',
}];
const values = [
  ['01', 'Integridad', 'Decidimos y actuamos con transparencia, rigor y respeto.'],
  ['02', 'Excelencia', 'Elevamos el estándar técnico en cada etapa del trabajo.'],
  ['03', 'Innovación continua', 'Aprendemos, cuestionamos y evolucionamos de forma permanente.'],
  ['04', 'Responsabilidad', 'Asumimos el impacto humano, industrial y ambiental de lo que creamos.'],
  ['05', 'Colaboración', 'Integramos perspectivas para construir mejores soluciones.'],
  ['06', 'Sostenibilidad', 'Diseñamos valor duradero para las personas y el planeta.'],
];
const process = ['Idea', 'Investigación', 'Desarrollo', 'Validación', 'Protección', 'Implementación'];

const supporterRecognition = [
  'En Innoventium, expresamos nuestro más profundo agradecimiento y reconocimiento a cada uno de los profesionales que hoy nos acompañan en esta etapa inicial. Con humildad y respeto, valoramos enormemente que hayan permitido que su rostro, trayectoria y legado formen parte de nuestro proyecto, avalando con su experiencia y visión lo que estamos construyendo.',
  'Este proyecto deportivo, nacido de raíces mexicanas y con visión corporativa de futuro, busca revolucionar el deporte y transformar la vida de miles de personas y familias. Su apoyo no solo fortalece nuestra iniciativa, sino que se convierte en el impulso que nos permitirá avanzar con mayor firmeza y velocidad hacia la meta.',
  'Sabemos que detrás de cada uno de ustedes hay años de esfuerzo, disciplina y pasión, ya sea en el campo deportivo, en los medios de comunicación o en ambos. Ese legado, que ya inspira a generaciones, también respalda un proyecto que pretende generar miles de empleos, oportunidades y un cambio positivo en la sociedad.',
  'Su colaboración es un acto de altruismo y visión: un apoyo que no espera nada a cambio, pero que deja huella. Gracias a ustedes, este proyecto no solo se valida, sino que se proyecta como una iniciativa con enorme potencial y futuro.',
  'Hoy, Innoventium se honra en contar con ustedes como impulsores de un sueño que comienza a hacerse realidad. Su nombre y su trayectoria quedarán ligados a este esfuerzo, y el reconocimiento será tan grande como el impacto que juntos lograremos.',
];

const SupportersSection: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const supporter = athleticSupporters[activeIndex];
  const previousSupporter = athleticSupporters[(activeIndex - 1 + athleticSupporters.length) % athleticSupporters.length];
  const nextSupporter = athleticSupporters[(activeIndex + 1) % athleticSupporters.length];
  const showPrevious = () => setActiveIndex(index => (index - 1 + athleticSupporters.length) % athleticSupporters.length);
  const showNext = () => setActiveIndex(index => (index + 1) % athleticSupporters.length);

  return <section id="impulsores" hidden={!isOpen} aria-hidden={!isOpen} className="section supporters-section scroll-mt-20"><div className="site-container">
    <div className="supporters-heading"><div><p className="eyebrow">PROYECTO DEPORTIVO</p><h2 className="section-title mt-4">Profesionales que impulsan una visión.</h2></div><p className="lead">Trayectorias que aportan experiencia, confianza y respaldo a una iniciativa mexicana con visión de futuro.</p></div>
    <div className="supporter-showcase">
      <aside className="supporter-recognition"><p className="eyebrow">UN RECONOCIMIENTO A SU TRAYECTORIA</p><h3>Gracias por impulsar este proyecto.</h3>{supporterRecognition.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</aside>
      <div className="supporter-viewer">
        <div className="supporter-navigation"><button type="button" className="supporter-nav-button supporter-nav-button--previous" onClick={showPrevious} aria-label={`Ver perfil anterior: ${previousSupporter.name}`}><small>Impulsor anterior</small><strong>{previousSupporter.name}</strong></button><span aria-live="polite">{activeIndex + 1} / {athleticSupporters.length}</span><button type="button" className="supporter-nav-button supporter-nav-button--next" onClick={showNext} aria-label={`Ver siguiente impulsor: ${nextSupporter.name}`}><small>Siguiente impulsor</small><strong>{nextSupporter.name}</strong><ChevronRight size={17} /></button></div>
        <article key={supporter.id} className="supporter-profile" aria-label={`Perfil de ${supporter.name}`}><header className="supporter-profile-header"><span>PERFIL PROFESIONAL</span><strong>{supporter.role}</strong></header><div className="supporter-profile-body"><div className="supporter-summary"><div className="supporter-record" aria-label="Récord profesional: 19 victorias, 1 derrota, 16 por nocaut">{supporter.record.map(item => <div key={item.tone} className={`record-stat record-stat--${item.tone}`}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div><div className={`supporter-media${supporter.image ? '' : ' supporter-media--placeholder'}${supporter.id === 'carlos-araujo-arellano' ? ' supporter-media--wide' : ''}`}>{supporter.image ? <img src={supporter.image} alt={`Retrato de ${supporter.name}`} loading="lazy" decoding="async" width={supporter.id === 'carlos-araujo-arellano' ? 1125 : 300} height={supporter.id === 'carlos-araujo-arellano' ? 728 : 388} /> : <div className="supporter-image-pending" aria-label="Fotografía pendiente de agregar"><span>{supporter.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span><small>Fotografía pendiente</small></div>}<span>IMPULSOR DEL PROYECTO DEPORTIVO</span></div></div><div className="supporter-data"><div className="supporter-identity"><p className="supporter-role">{supporter.role}</p><h3>{supporter.name}</h3>{supporter.alias && <p className="supporter-alias">“{supporter.alias}”</p>}</div><div className="supporter-tables"><dl>{supporter.performance.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl><dl>{supporter.identity.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></div>{supporter.summary && <p className="supporter-bio">{supporter.summary}</p>}{supporter.achievements && <div className="supporter-achievements"><strong>Títulos y reconocimientos</strong><ul>{supporter.achievements.map(item => <li key={item}>{item}</li>)}</ul></div>}{supporter.communityWork && <div className="supporter-community"><strong>Trayectoria social y altruista</strong>{supporter.communityWork.map(item => <p key={item}>{item}</p>)}</div>}{supporter.socialValues && <div className="supporter-values"><strong>Valores que lo representan</strong><p>{supporter.socialValues.join(' · ')}</p></div>}{supporter.currentObjective && <div className="supporter-objective"><strong>Objetivo actual</strong><p>{supporter.currentObjective}</p></div>}{supporter.videoUrl ? <a href={supporter.videoUrl} className="supporter-video-link" target="_blank" rel="noopener noreferrer"><Play size={17} /><span><strong>Ver testimonio</strong><small>Conocer su mensaje de apoyo</small></span></a> : <div className="supporter-video-placeholder" aria-label="Espacio preparado para un futuro testimonio en video"><Play size={17} /><span><strong>Próximamente: testimonio</strong><small>El video se cargará únicamente cuando esté disponible</small></span></div>}</div></div></article>
      </div>
    </div>
  </div></section>;
};

export const CorporateSite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [supportersOpen, setSupportersOpen] = useState(false);
  const orgScrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 28); onScroll(); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll); }, []);
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.section, .contact-section');
    sections.forEach(section => section.classList.add('section-reveal'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const centerOrgChart = () => {
      const viewer = orgScrollRef.current;
      if (viewer && window.innerWidth <= 640) viewer.scrollLeft = (viewer.scrollWidth - viewer.clientWidth) / 2;
    };
    const frame = window.requestAnimationFrame(centerOrgChart);
    window.addEventListener('resize', centerOrgChart);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('resize', centerOrgChart); };
  }, []);
  const goTo = (id: string) => { setMenuOpen(false); if (id === 'impulsores') { setSupportersOpen(true); window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 40); return; } document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };

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
      <section id="inicio" className="hero-section"><div className="hero-atmosphere" aria-hidden="true" /><div className="hero-noise" aria-hidden="true" /><div className="site-container hero-layout"><div className="hero-content"><p className="hero-eyebrow reveal reveal-1">CIENCIA · DESARROLLO · INNOVACIÓN</p><h1 className="hero-title reveal reveal-2">Innovación que <em>trasciende.</em></h1><p className="hero-copy reveal reveal-3">Transformamos conocimiento e ideas en proyectos de alto impacto, con rigor científico, visión empresarial y propósito.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row reveal reveal-4"><button onClick={() => goTo('nosotros')} className="button button--gold">Conocer Innoventium <ArrowRight size={17} /></button><button onClick={() => goTo('proyectos')} className="button button--outline">Explorar proyectos</button></div><div className="hero-proof reveal reveal-4"><span>Investigación aplicada</span><span>Propiedad intelectual</span><span>Desarrollo estratégico</span></div></div><div className="hero-visual reveal reveal-3" aria-hidden="true"><div className="hero-visual-frame"><span className="visual-index">IN—01</span><div className="visual-orbit visual-orbit--one"/><div className="visual-orbit visual-orbit--two"/><InnoventiumLogo height={260} variant="emblem" theme="dark" className="hero-emblem"/><div className="visual-caption"><small>VISIÓN / MÉTODO / IMPACTO</small><strong>Conocimiento en movimiento</strong></div></div></div></div><button onClick={() => goTo('nosotros')} className="hero-scroll" aria-label="Continuar a la siguiente sección"><span /> Descubrir</button></section>

      <section id="nosotros" className="section scroll-mt-20 bg-white"><div className="site-container"><div className="section-marker"><span>01</span><p>IDENTIDAD</p></div><div className="grid gap-12 lg:grid-cols-12 lg:gap-20"><div className="lg:col-span-5"><p className="eyebrow">INNOVENTIUM</p><h2 className="section-title mt-4">Innovación con <em>propósito.</em></h2><div className="about-signature"><span>80%</span><p>Rigor corporativo</p><span>20%</span><p>Visión tecnológica</p></div></div><div className="lg:col-span-7"><p className="lead">Somos una empresa científica orientada a la creación de innovaciones de alto impacto, el desarrollo de proyectos productivos y la generación de patentes que elevan los estándares de la industria.</p><p className="body-copy mt-5">Operamos bajo un compromiso inquebrantable con la ética, los valores humanos y el respeto por el medio ambiente, integrando ciencia, tecnología y creatividad con una visión de largo alcance.</p><div className="concept-row">{['Ciencia', 'Tecnología', 'Creatividad', 'Ética'].map((item, i) => <div key={item}><span>0{i + 1}</span>{item}</div>)}</div></div></div></div></section>

      <section id="proyectos" className="section scroll-mt-20"><div className="site-container"><div className="section-marker"><span>02</span><p>PORTAFOLIO</p></div><div className="project-heading"><div><p className="eyebrow">EN DESARROLLO</p><h2 className="section-title mt-4">Proyectos activos</h2></div><p className="lead">Ideas que hoy estamos convirtiendo en realidad.</p></div><div className="project-grid">{ACTIVE_PROJECTS.map((project, index) => { const content = <><span className="project-number">0{index + 1}</span><div className="flex items-start justify-between gap-4"><InnoventiumLogo height={44} variant="emblem" theme="light" /><span>{project.category}</span></div><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-footer"><span>{project.id === 'deportivo' ? 'Conocer impulsores' : project.status}</span><span className="project-arrow"><ChevronRight size={18} /></span></div></>; return project.id === 'deportivo' ? <button key={project.id} type="button" className="project-card project-card--interactive" onClick={() => goTo('impulsores')} aria-label="Conocer a los impulsores del proyecto deportivo">{content}</button> : <article key={project.id} className="project-card">{content}</article>; })}</div></div></section>

      <SupportersSection isOpen={supportersOpen} />

      <section id="proceso" className="section scroll-mt-20 bg-[var(--primary)] text-white"><div className="site-container"><p className="eyebrow eyebrow--dark">NUESTRO PROCESO</p><h2 className="section-title section-title--dark mt-4">De una idea a una innovación.</h2><div className="process-flow">{process.map((item, i) => <div key={item} className="process-step"><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></div></section>

      <section id="mision-vision" className="section scroll-mt-20 bg-white"><div className="site-container"><div className="max-w-2xl"><p className="eyebrow">RUMBO ESTRATÉGICO</p><h2 className="section-title mt-4">Propósito y horizonte.</h2></div><div className="mission-grid"><article><span>MISIÓN</span><h3>Convertir ideas en innovaciones.</h3><p>Convertir ideas en innovaciones y patentes que elevan el estándar de lo que se considera posible. Creamos soluciones de alto impacto con ciencia, tecnología y ética, orientadas al bien común y al respeto por el planeta.</p></article><article><span>VISIÓN</span><h3>Un referente internacional.</h3><p>Ser un referente internacional en investigación, desarrollo tecnológico e innovación aplicada, creando proyectos que definan una nueva generación de soluciones para el futuro.</p></article></div></div></section>

      <section className="section org-section border-y border-slate-200/70"><div className="site-container"><div className="org-heading"><div><p className="eyebrow">ORGANIZACIÓN</p><h2 className="section-title mt-4">Nuestra estructura</h2></div><p className="lead">Una organización diseñada para transformar conocimiento en resultados.</p></div><figure className="org-visual"><p className="org-mobile-hint">Desliza horizontalmente para conocer a todo el equipo</p><div ref={orgScrollRef} className="org-image-scroll" role="region" aria-label="Organigrama desplazable"><div className="org-image-frame"><img src="/organigrama-innoventium.jpg" alt="Organigrama organizacional de Innoventium" loading="lazy" decoding="async" /></div></div><figcaption>Estructura organizacional · INNOVENTIUM</figcaption></figure></div></section>

      <section className="section bg-white"><div className="site-container"><p className="eyebrow">NUESTRA FILOSOFÍA</p><h2 className="section-title mt-4">Principios para crear valor.</h2><div className="values-grid">{values.map(([number, title, text]) => <article key={title}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section id="contacto" className="contact-section scroll-mt-20"><div className="site-container"><div className="grid gap-10 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-8"><p className="eyebrow eyebrow--dark">CONTACTO</p><h2>Las ideas relevantes merecen desarrollarse.</h2><p>Conversemos sobre la próxima oportunidad.</p></div><a href="mailto:contacto@innoventiummx.com" className="contact-link lg:col-span-4"><Mail size={22} /><span>contacto@innoventiummx.com</span><ArrowRight size={18} /></a></div><div className="social-contact-grid" aria-label="Canales oficiales de Innoventium"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="social-contact social-contact--whatsapp" aria-label="Solicitar información por WhatsApp"><WhatsAppIcon size={22} /><span><strong>WhatsApp</strong><small>Solicitar información</small></span><ArrowRight size={17} /></a><a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="social-contact social-contact--facebook" aria-label="Visitar la página empresarial de Innoventium en Facebook"><FacebookIcon size={22} /><span><strong>Facebook</strong><small>Página empresarial</small></span><ArrowRight size={17} /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="social-contact social-contact--instagram" aria-label="Visitar el perfil empresarial de Innoventium en Instagram"><InstagramIcon size={22} /><span><strong>Instagram</strong><small>@innoventiumlm</small></span><ArrowRight size={17} /></a></div></div></section>
    </main>

    <footer className="site-footer"><div className="site-container"><div className="footer-top"><InnoventiumLogo height={48} variant="full" theme="dark" /><div><strong>Innovación perpetua.</strong><p>El futuro comienza con las ideas que decidimos desarrollar hoy.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} INNOVENTIUM</span><span>Investigación · Desarrollo · Propiedad intelectual</span></div></div></footer>
  </div>;
};
