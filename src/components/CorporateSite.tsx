import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, Menu, X, Mail, ArrowUpRight, Lightbulb, Microscope, Network, ShieldCheck, Leaf, Scale, Building2 } from 'lucide-react';
import { InnoventiumLogo } from './InnoventiumLogo';

const capabilities = [
  { icon: Microscope, title: 'Investigación aplicada', text: 'Convertimos preguntas complejas en conocimiento accionable mediante metodologías rigurosas.' },
  { icon: Lightbulb, title: 'Desarrollo tecnológico', text: 'Diseñamos y validamos soluciones con foco en utilidad, viabilidad y adopción.' },
  { icon: Network, title: 'Innovación estratégica', text: 'Alineamos tecnología, personas y objetivos para generar valor sostenible.' },
];

const principles = [
  'Rigor técnico y criterio estratégico',
  'Colaboración cercana con cada organización',
  'Soluciones medibles y sostenibles',
  'Respeto por la información y la propiedad intelectual',
];

const process = [
  ['01', 'Entendemos', 'Escuchamos el contexto, los objetivos y las restricciones del reto.'],
  ['02', 'Diseñamos', 'Definimos una ruta de trabajo clara, viable y orientada a resultados.'],
  ['03', 'Desarrollamos', 'Construimos, iteramos y validamos con equipos multidisciplinarios.'],
  ['04', 'Acompañamos', 'Facilitamos la adopción y evolución de la solución en el tiempo.'],
];

export const CorporateSite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const goTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const links = [
    ['Inicio', 'inicio'], ['Enfoque', 'enfoque'], ['Capacidades', 'capacidades'], ['Proceso', 'proceso'], ['Contacto', 'contacto'],
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F7F8FA] text-[#132238]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/80 bg-[#F7F8FA]/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button onClick={() => goTo('inicio')} aria-label="Ir al inicio" className="shrink-0">
            <InnoventiumLogo height={43} variant="full" theme="light" animated={false} />
          </button>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegación principal">
            {links.slice(0, -1).map(([name, id]) => <button key={id} onClick={() => goTo(id)} className="text-sm font-medium text-slate-600 transition hover:text-[#0B3C68]">{name}</button>)}
            <button onClick={() => goTo('contacto')} className="rounded-lg bg-[#0B3C68] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#082f55]">Hablemos</button>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg border border-slate-300 p-2 text-[#0B3C68] lg:hidden" aria-label="Abrir menú">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && <nav className="border-t border-slate-200 bg-[#F7F8FA] px-5 py-4 lg:hidden" aria-label="Navegación móvil">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map(([name, id]) => <button key={id} onClick={() => goTo(id)} className="rounded-lg px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-slate-200/70">{name}</button>)}
          </div>
        </nav>}
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-[#0B2545] pb-20 pt-36 text-white sm:pb-28 sm:pt-44">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,#081b34_0%,#0b2545_60%,#123859_100%)]" />
          <div className="absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:72px_72px]" />
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C5A059] to-transparent" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:items-end lg:px-10">
            <div className="lg:col-span-8">
              <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-[#E0C47F]">INNOVACIÓN APLICADA</p>
              <h1 className="font-display max-w-4xl text-[clamp(2.7rem,6.5vw,5.8rem)] font-bold leading-[1.04]">Ideas rigurosas. Resultados que avanzan.</h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl">INNOVENTIUM acompaña a organizaciones que buscan convertir conocimiento, tecnología y visión en soluciones relevantes.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => goTo('capacidades')} className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF62] px-5 py-3.5 text-sm font-semibold text-[#0B2545] transition hover:bg-[#ead28f]">Conocer capacidades <ArrowRight className="h-4 w-4" /></button>
                <button onClick={() => goTo('contacto')} className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Iniciar una conversación</button>
              </div>
            </div>
            <aside className="border-l border-white/20 pl-6 lg:col-span-4 lg:mb-2">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#E0C47F]">NUESTRO COMPROMISO</p>
              <p className="mt-3 text-lg leading-relaxed text-slate-200">Trabajar con claridad, responsabilidad y atención a cada detalle.</p>
            </aside>
          </div>
          <div className="mx-auto mt-14 grid max-w-7xl grid-cols-1 border-t border-white/20 pt-5 text-xs font-medium tracking-wide text-slate-300 sm:grid-cols-3 sm:gap-8 sm:pt-6">
            <span className="py-2 sm:py-0">Investigación con propósito</span><span className="py-2 sm:border-l sm:border-white/20 sm:pl-8 sm:py-0">Ejecución responsable</span><span className="py-2 sm:border-l sm:border-white/20 sm:pl-8 sm:py-0">Colaboración de largo plazo</span>
          </div>
        </section>

        <section id="enfoque" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
            <div className="lg:col-span-5"><p className="section-eyebrow">NUESTRO ENFOQUE</p><h2 className="section-title mt-4">La innovación necesita dirección.</h2></div>
            <div className="lg:col-span-7"><p className="max-w-2xl text-lg leading-relaxed text-slate-600">Combinamos investigación, diseño y estrategia para abordar desafíos con una mirada amplia y una ejecución precisa. Cada iniciativa parte de una necesidad concreta y se construye en colaboración.</p><div className="mt-8 grid gap-x-8 gap-y-0 border-y border-slate-200 sm:grid-cols-2">{principles.map((item) => <div key={item} className="flex items-start gap-3 border-b border-slate-200 py-4 text-sm font-medium text-slate-700 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#B38F3F]" />{item}</div>)}</div></div>
          </div>
        </section>

        <section id="capacidades" className="scroll-mt-20 bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="max-w-2xl"><p className="section-eyebrow">CAPACIDADES</p><h2 className="section-title mt-4">De la pregunta a una solución con sentido.</h2></div><div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-3">{capabilities.map(({ icon: Icon, title, text }, index) => <article key={title} className="bg-white p-7 transition-colors hover:bg-[#FAFBFB] sm:p-8"><span className="text-sm font-semibold text-[#B38F3F]">0{index + 1}</span><Icon className="mt-9 h-7 w-7 text-[#0B3C68]" strokeWidth={1.5} /><h3 className="font-display mt-6 text-2xl font-bold">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
        </section>

        <section id="proceso" className="scroll-mt-20 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-2xl"><p className="section-eyebrow">CÓMO TRABAJAMOS</p><h2 className="section-title mt-4">Un proceso claro para avanzar con confianza.</h2></div><p className="max-w-sm text-sm leading-relaxed text-slate-600">Adaptamos cada etapa al contexto, manteniendo siempre visibilidad sobre las decisiones y próximos pasos.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">{process.map(([number, title, text]) => <article key={number} className="border-t-2 border-[#0B3C68] pt-5"><span className="text-sm font-semibold text-[#B38F3F]">{number}</span><h3 className="font-display mt-5 text-2xl font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p></article>)}</div></div>
        </section>

        <section className="bg-[#EAF0F2] py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:items-center lg:px-10"><div className="lg:col-span-7"><p className="section-eyebrow">RELACIONES QUE PERDURAN</p><h2 className="section-title mt-4">Tecnología con criterio, colaboración con propósito.</h2></div><div className="grid gap-4 sm:grid-cols-3 lg:col-span-5"><div className="border-l border-[#B38F3F] pl-4"><ShieldCheck className="h-5 w-5 text-[#0B3C68]" /><p className="mt-3 text-sm font-semibold">Confianza</p></div><div className="border-l border-[#B38F3F] pl-4"><Scale className="h-5 w-5 text-[#0B3C68]" /><p className="mt-3 text-sm font-semibold">Responsabilidad</p></div><div className="border-l border-[#B38F3F] pl-4"><Leaf className="h-5 w-5 text-[#0B3C68]" /><p className="mt-3 text-sm font-semibold">Sostenibilidad</p></div></div></div></section>

        <section id="contacto" className="scroll-mt-20 bg-[#0B2545] py-20 text-white sm:py-28"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10"><div className="lg:col-span-7"><p className="text-xs font-semibold tracking-[0.2em] text-[#E0C47F]">CONTACTO</p><h2 className="font-display mt-4 max-w-3xl text-[clamp(2.35rem,5vw,4.5rem)] font-bold leading-[1.08]">Construyamos la siguiente oportunidad.</h2><p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">Cuéntanos sobre tu desafío. Empecemos con una conversación clara y confidencial.</p></div><div className="flex flex-col justify-end lg:col-span-5"><a href="mailto:contacto@innoventium.tech" className="group rounded-xl border border-white/20 bg-white/5 p-6 transition hover:bg-white/10"><Mail className="h-6 w-6 text-[#E0C47F]" /><p className="mt-8 text-sm text-slate-300">Escríbenos a</p><p className="mt-1 flex items-center gap-2 text-lg font-semibold">contacto@innoventium.tech <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></p></a></div></div>
        </section>
      </main>
      <footer className="bg-[#081b34] py-7 text-slate-400"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 text-xs sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"><span>© {new Date().getFullYear()} INNOVENTIUM. Todos los derechos reservados.</span><span>Investigación · Desarrollo · Innovación aplicada</span></div></footer>
    </div>
  );
};
