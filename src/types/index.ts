export interface PhilosophyPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  metrics: string;
  keywords: string[];
}

export interface TimelineStep {
  id: number;
  phase: string;
  title: string;
  trl: string; // Technology Readiness Level (e.g. TRL 1-2)
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  duration: string;
  icon: string;
  color: string;
}

export interface InnovationArea {
  id: string;
  icon: string;
  emoji: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  color: string;
  gradient: string;
  borderHover: string;
  badge: string;
  technologies: string[];
  activeProjects: number;
  stats: {
    label: string;
    value: string;
  }[];
  caseStudy: {
    title: string;
    summary: string;
    impact: string;
  };
}

export interface ProcessStage {
  step: number;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  keyAction: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Differentiator {
  title: string;
  description: string;
  highlight: string;
  badge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'IA' | 'Energía' | 'Sustentabilidad' | 'Industria' | 'Tecnología Avanzada' | 'Investigación Científica';
  trlLevel: number;
  description: string;
  impactMetrics: string;
  technologies: string[];
  status: 'En Investigación' | 'Prototipo Validado' | 'Validación' | 'Protección de Patente' | 'Escalamiento Industrial';
  patentRef?: string;
  year: string;
}
