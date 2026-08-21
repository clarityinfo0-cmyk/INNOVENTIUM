/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AccidentSection } from './components/AccidentSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TimelineSection } from './components/TimelineSection';
import { InnovationAreasSection } from './components/InnovationAreasSection';
import { ProcessSection } from './components/ProcessSection';
import { FutureVisionSection } from './components/FutureVisionSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { ValuesSection } from './components/ValuesSection';
import { WhyInnoventiumSection } from './components/WhyInnoventiumSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectExplorerModal } from './components/ProjectExplorerModal';
import { CinematicIntro } from './components/CinematicIntro';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [projectExplorerOpen, setProjectExplorerOpen] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string | null>(null);
  
  // 4K Cinematic intro state: starts automatically on first load
  const [introOpen, setIntroOpen] = useState(true);

  const handleOpenProjects = (category?: string) => {
    setSelectedCategoryFilter(category || null);
    setProjectExplorerOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactWithProject = (projectTitle: string) => {
    handleScrollToSection('contacto');
    setTimeout(() => {
      const descInput = document.getElementById('contact-challenge-desc') as HTMLTextAreaElement | null;
      if (descInput) {
        descInput.value = `Consulta de colaboración para el proyecto: ${projectTitle}\n\n`;
        descInput.focus();
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0B1D36] text-slate-100 selection:bg-[#00B4D8]/30 selection:text-[#00B4D8] font-sans relative overflow-x-hidden">
      
      {/* 4K Cinematic Intro Video/Animation Modal Experience */}
      <CinematicIntro
        isOpen={introOpen}
        onComplete={() => setIntroOpen(false)}
      />

      {/* Navigation Header */}
      <Navbar 
        onOpenProjects={() => handleOpenProjects()} 
        onOpenContact={() => handleScrollToSection('contacto')} 
        onReplayIntro={() => setIntroOpen(true)}
      />

      {/* Main Page Content - Structured according to the 12 sections */}
      <main className="relative">
        {/* 1. Hero (Pantalla Completa with Official Logo and 4K Intro Replay) */}
        <Hero 
          onExploreProjects={() => handleOpenProjects()}
          onLearnMore={() => handleScrollToSection('proposito')}
          onReplayIntro={() => setIntroOpen(true)}
        />

        {/* 2. Sección: La innovación no ocurre por accidente */}
        <AccidentSection />

        {/* 3. Nuestra filosofía */}
        <PhilosophySection />

        {/* 4. Ciclo de Innovación / Línea de tiempo iluminándose */}
        <TimelineSection />

        {/* 5. Nuestras áreas de innovación */}
        <InnovationAreasSection 
          onSelectCategory={(category) => handleOpenProjects(category)}
        />

        {/* 6. Nuestro proceso de innovación */}
        <ProcessSection />

        {/* 7. Innovación con visión de futuro */}
        <FutureVisionSection />

        {/* 8 & 9. Misión y Visión */}
        <MissionVisionSection />

        {/* 10. Nuestros valores */}
        <ValuesSection />

        {/* 11. ¿Por qué Innoventium? */}
        <WhyInnoventiumSection 
          onContactClick={() => handleScrollToSection('contacto')}
        />

        {/* 12. El futuro se construye hoy & Contacto */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => handleScrollToSection('contacto')} />

      {/* Interactive Project Repository & Innovation Explorer Modal */}
      <ProjectExplorerModal 
        isOpen={projectExplorerOpen}
        onClose={() => setProjectExplorerOpen(false)}
        initialCategory={selectedCategoryFilter}
        onContactProject={handleContactWithProject}
      />

      {/* Floating Instant WhatsApp Contact Action */}
      <FloatingWhatsApp />
    </div>
  );
}
