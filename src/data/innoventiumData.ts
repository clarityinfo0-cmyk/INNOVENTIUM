import { 
  PhilosophyPillar, 
  TimelineStep, 
  InnovationArea, 
  ProcessStage, 
  ValueItem, 
  Differentiator,
  ProjectItem 
} from '../types';

export const PHILOSOPHY_PILLARS: PhilosophyPillar[] = [
  {
    id: 'ciencia',
    title: 'Ciencia',
    subtitle: 'Rigor Epistemológico y Metodológico',
    description: 'Investigamos con rigor para comprender profundamente cada desafío. Fundamentamos cada hipótesis en ciencia empírica y modelos matemáticos avanzados.',
    icon: 'FlaskConical',
    color: 'border-[#00B4D8]/30 bg-[#0B1D36]/5 text-[#00B4D8]',
    accent: 'secondary',
    metrics: 'TRL 1-3 Fundamentación',
    keywords: ['Investigación Pura', 'Metodología Científica', 'Modelado Cuántico', 'Bioanálisis']
  },
  {
    id: 'tecnologia',
    title: 'Tecnología',
    subtitle: 'Arquitecturas de Vanguardia',
    description: 'Desarrollamos herramientas y soluciones que impulsan nuevos modelos de innovación. Convertimos principios abstractos en sistemas de hardware, software y biotecnología operativos.',
    icon: 'Cpu',
    color: 'border-[#7B6CF6]/30 bg-[#7B6CF6]/5 text-[#7B6CF6]',
    accent: 'accent1',
    metrics: 'TRL 4-6 Desarrollo Funcional',
    keywords: ['IA Generativa', 'Sistemas Embebidos', 'Materiales Avanzados', 'Robótica']
  },
  {
    id: 'innovacion',
    title: 'Innovación',
    subtitle: 'Transformación de Paradigmas',
    description: 'Convertimos ideas en proyectos capaces de transformar industrias. No buscamos mejoras marginales, sino saltos exponenciales que redefinan el estado del arte.',
    icon: 'Lightbulb',
    color: 'border-[#E8C547]/40 bg-[#E8C547]/10 text-[#E8C547]',
    accent: 'accent2',
    metrics: 'TRL 7-8 Validación en Entorno Real',
    keywords: ['Propiedad Intelectual', 'Patentes PCT', 'Modelos Disruptivos', 'Transferencia']
  },
  {
    id: 'impacto',
    title: 'Impacto',
    subtitle: 'Trascendencia Social y Productiva',
    description: 'Todo desarrollo busca generar beneficios reales para las personas y las organizaciones. Medimos el éxito a través de la sostenibilidad, la rentabilidad y el progreso humano.',
    icon: 'Target',
    color: 'border-[#2ECC71]/30 bg-[#2ECC71]/10 text-[#2ECC71]',
    accent: 'positive',
    metrics: 'TRL 9 Despliegue Masivo',
    keywords: ['Sostenibilidad Global', 'Descarbonización', 'Salud Pública', 'Eficiencia Industrial']
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: 1,
    phase: 'Fase 01',
    title: 'Idea',
    trl: 'TRL 1',
    shortDesc: 'Detección de necesidades críticas y concepción del principio teórico.',
    fullDesc: 'Identificación sistemática de cuellos de botella industriales, retos científicos no resueltos y oportunidades de disrupción tecnológica mediante análisis prospectivo y ciencia de frontera.',
    deliverables: ['Documento de Concepto', 'Revisión del Estado del Arte', 'Análisis de Viabilidad Preliminar'],
    duration: '2 - 4 Semanas',
    icon: 'Sparkles',
    color: 'secondary'
  },
  {
    id: 2,
    phase: 'Fase 02',
    title: 'Investigación',
    trl: 'TRL 2-3',
    shortDesc: 'Formulación analítica y prueba de concepto experimental en laboratorio.',
    fullDesc: 'Experimentación rigurosa, modelado computacional intensivo y pruebas empíricas iniciales para validar que las leyes físicas y matemáticas respaldan la hipótesis planteada.',
    deliverables: ['Protocolos de Laboratorio', 'Modelos Predictivos Simulación', 'Informe de Prueba de Concepto (PoC)'],
    duration: '1 - 3 Meses',
    icon: 'Search',
    color: 'secondary'
  },
  {
    id: 3,
    phase: 'Fase 03',
    title: 'Desarrollo',
    trl: 'TRL 4',
    shortDesc: 'Ingeniería de detalle y construcción de subsistemas funcionales.',
    fullDesc: 'Integración multidisciplinaria de hardware, software, síntesis química o algoritmos en un entorno de laboratorio controlado para crear la primera arquitectura unificada.',
    deliverables: ['Esquemáticos y Firmware', 'Arquitectura de Datos y Algoritmos', 'Benchmarking Técnico'],
    duration: '2 - 5 Meses',
    icon: 'Wrench',
    color: 'accent1'
  },
  {
    id: 4,
    phase: 'Fase 04',
    title: 'Prototipo',
    trl: 'TRL 5',
    shortDesc: 'Fabricación del Prototipo Alpha/Beta y pruebas en entorno simulado.',
    fullDesc: 'Construcción física o computacional del primer prototipo a escala representativa, sometido a pruebas de estrés y condiciones de operación cuasi-reales.',
    deliverables: ['Prototipo Alpha Operativo', 'Reporte de Tolerancias y Métricas', 'Ficha Técnica Funcional'],
    duration: '2 - 4 Meses',
    icon: 'Layers',
    color: 'accent1'
  },
  {
    id: 5,
    phase: 'Fase 05',
    title: 'Validación',
    trl: 'TRL 6-7',
    shortDesc: 'Ensayos rigurosos en entornos operativos reales e industriales.',
    fullDesc: 'Demostración de rendimiento y estabilidad en plantas piloto, pruebas de campo con usuarios o despliegues beta supervisados en condiciones extremas de mercado.',
    deliverables: ['Certificaciones de Cumplimiento', 'Informe de Validación de Campo', 'Métricas de Fiabilidad y Rendimiento'],
    duration: '3 - 6 Meses',
    icon: 'CheckCircle2',
    color: 'accent2'
  },
  {
    id: 6,
    phase: 'Fase 06',
    title: 'Propiedad Intelectual',
    trl: 'Activo IP',
    shortDesc: 'Protección legal, redacción y depósito de patentes nacionales e internacionales.',
    fullDesc: 'Estrategia integral de protección de activos intangibles, redacción de reivindicaciones de patente (PCT), registro de derechos de autor y salvaguarda de secretos industriales estratégicos.',
    deliverables: ['Solicitud de Patente (PCT/Nacional)', 'Dictamen de Libertad de Operación (FTO)', 'Estrategia de Blindaje de Marca e IP'],
    duration: '1 - 2 Meses',
    icon: 'ShieldCheck',
    color: 'accent2'
  },
  {
    id: 7,
    phase: 'Fase 07',
    title: 'Proyecto Productivo',
    trl: 'TRL 8',
    shortDesc: 'Industrialización, manufactura y modelo de negocio sostenible.',
    fullDesc: 'Transición del prototipo a línea de producción continua o plataforma SaaS industrial escalable, con cadena de suministro establecida y plan de transferencia tecnológica.',
    deliverables: ['Planes de Manufactura/Despliegue', 'Estructura de Costos Unitarios (BOM)', 'Manuales de Calidad y Operación'],
    duration: '3 - 6 Meses',
    icon: 'Factory',
    color: 'positive'
  },
  {
    id: 8,
    phase: 'Fase 08',
    title: 'Escalamiento',
    trl: 'TRL 9',
    shortDesc: 'Expansión global, transferencia tecnológica e impacto masivo continuo.',
    fullDesc: 'Despliegue comercial a gran escala, licenciamiento tecnológico internacional y retroalimentación cíclica para alimentar las futuras generaciones de innovación.',
    deliverables: ['Estrategia de Internacionalización', 'Alianzas con Líderes Globales', 'Métricas de Impacto Social y Económico'],
    duration: 'Continuo / Perpetuo',
    icon: 'TrendingUp',
    color: 'positive'
  }
];

export const INNOVATION_AREAS: InnovationArea[] = [
  {
    id: 'ia',
    icon: 'Brain',
    emoji: '🧠',
    title: 'Inteligencia Artificial',
    shortDesc: 'Desarrollo de soluciones inteligentes orientadas a optimizar procesos y potenciar la toma de decisiones.',
    detailedDesc: 'Investigamos y construimos redes neuronales profundas, modelos fundacionales especializados, agentes autónomos y sistemas de visión artificial para la resolución de problemáticas hipercomplejas en tiempo real.',
    color: 'border-[#00B4D8]/30 bg-[#00B4D8]/5 text-[#00B4D8]',
    gradient: 'border-[#00B4D8]/30 hover:border-[#00B4D8]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(0,180,216,0.35)]',
    badge: 'Deep Learning & Neuro-AI',
    technologies: [
      'Modelos de Lenguaje & Multimodales',
      'Agentes de Razonamiento Autónomo',
      'Visión por Computadora Industrial',
      'IA Confiable y Explicable (XAI)',
      'Optimización Cuántico-Inspirada'
    ],
    activeProjects: 8,
    stats: [
      { label: 'Precisión de Inferencia', value: '99.4%' },
      { label: 'Latencia Reducida', value: '-65%' },
      { label: 'Procesos Optimizados', value: '40+' }
    ],
    caseStudy: {
      title: 'OptiNeural Industrial Engine',
      summary: 'Sistema de IA predictiva que anticipa fallas mecánicas con 72 horas de anticipación en turbinas de alta exigencia.',
      impact: 'Reducción del 82% en paradas de producción no planificadas.'
    }
  },
  {
    id: 'energia',
    icon: 'Zap',
    emoji: '⚡',
    title: 'Energía',
    shortDesc: 'Investigación de tecnologías energéticas sostenibles para el desarrollo industrial.',
    detailedDesc: 'Desarrollo de celdas de almacenamiento de última generación, catalizadores para la producción eficiente de hidrógeno verde y algoritmos de balanceo dinámico para redes eléctricas inteligentes (Smart Grids).',
    color: 'border-[#E8C547]/40 bg-[#E8C547]/10 text-[#E8C547]',
    gradient: 'border-[#E8C547]/40 hover:border-[#E8C547]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(232,197,71,0.35)]',
    badge: 'Clean Energy & Storage',
    technologies: [
      'Baterías de Estado Sólido',
      'Electrólisis y Catálisis de Hidrógeno',
      'Smart Grid Energy Routing',
      'Captura y Conversión de Calor Residual',
      'Nanomateriales Fotovoltaicos'
    ],
    activeProjects: 6,
    stats: [
      { label: 'Eficiencia Energética', value: '+34%' },
      { label: 'Densidad Energética', value: '2.4x' },
      { label: 'Emisiones Evitadas', value: '1.2M Ton' }
    ],
    caseStudy: {
      title: 'H2-Matrix Synth Catalyst',
      summary: 'Catalizador nanoestructurado que reduce la temperatura requerida para la electrólisis de agua en un 40%.',
      impact: 'Producción de hidrógeno verde a costo paritario con combustibles fósiles.'
    }
  },
  {
    id: 'sustentabilidad',
    icon: 'Sprout',
    emoji: '🌱',
    title: 'Sustentabilidad',
    shortDesc: 'Innovaciones enfocadas en eficiencia ambiental y aprovechamiento responsable de los recursos.',
    detailedDesc: 'Diseño de biomateriales 100% circulares, tecnologías avanzadas de purificación y recirculación de agua industrial, y sistemas biológicos de captura acelerada de carbono atmosférico.',
    color: 'border-[#2ECC71]/30 bg-[#2ECC71]/10 text-[#2ECC71]',
    gradient: 'border-[#2ECC71]/30 hover:border-[#2ECC71]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(46,204,113,0.35)]',
    badge: 'Circular Economy & BioTech',
    technologies: [
      'Biopolímeros Compostables Industriales',
      'Bio-remediación de Suelos y Efluentes',
      'Direct Air Capture (DAC) Bio-asistida',
      'Reciclaje Químico de Alta Fidelidad',
      'Análisis de Ciclo de Vida Automatizado'
    ],
    activeProjects: 7,
    stats: [
      { label: 'Reciclabilidad', value: '100%' },
      { label: 'Huella de Carbono', value: 'Net Negative' },
      { label: 'Agua Ahorrada', value: '8.5M Lts/año' }
    ],
    caseStudy: {
      title: 'BioCirculix Polymer',
      summary: 'Biopolímero derivado de residuos agrícolas con resistencia mecánica superior al PET y degradación en 60 días.',
      impact: 'Sustitución de más de 500 toneladas de plástico virgen en aplicaciones de embalaje.'
    }
  },
  {
    id: 'industria',
    icon: 'Factory',
    emoji: '🏭',
    title: 'Industria',
    shortDesc: 'Tecnologías para optimizar productividad, automatización y procesos industriales.',
    detailedDesc: 'Integración de gemelos digitales (Digital Twins) de alta fidelidad física, robótica colaborativa adaptativa y sensórica IoT cuántica para fábricas inteligentes de cero defectos.',
    color: 'border-[#0B1D36]/20 bg-[#0B1D36]/5 text-[#0B1D36]',
    gradient: 'border-[#0B1D36]/30 hover:border-[#00B4D8]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(0,180,216,0.3)]',
    badge: 'Industry 4.0 & Digital Twins',
    technologies: [
      'Gemelos Digitales con Física en Tiempo Real',
      'Robótica Móvil Autónoma (AMR)',
      'Control Predictivo Multivariable (MPC)',
      'Manufactura Aditiva Metálica Directa',
      'Edge Computing Industrial de Ultra-Baja Latencia'
    ],
    activeProjects: 9,
    stats: [
      { label: 'OEE Incrementado', value: '+28%' },
      { label: 'Mantenimiento Preventivo', value: '100%' },
      { label: 'Cero Accidentes Graves', value: 'Certificado' }
    ],
    caseStudy: {
      title: 'SynchroTwin Factory Matrix',
      summary: 'Réplica virtual sincronizada de una planta siderúrgica continua que optimiza el flujo térmico en tiempo real.',
      impact: 'Ahorro de $4.2M USD anuales en consumo térmico y reducción del 18% en defectos.'
    }
  },
  {
    id: 'tecnologia-avanzada',
    icon: 'Satellite',
    emoji: '🛰',
    title: 'Tecnología Avanzada',
    shortDesc: 'Desarrollo de nuevas plataformas y herramientas tecnológicas de frontera.',
    detailedDesc: 'Desarrollo de micro-plataformas satelitales para observación de la Tierra, protocolos criptográficos post-cuánticos, fotónica integrada y sistemas de telecomunicaciones de ultra-alta velocidad.',
    color: 'border-[#7B6CF6]/30 bg-[#7B6CF6]/10 text-[#7B6CF6]',
    gradient: 'border-[#7B6CF6]/30 hover:border-[#7B6CF6]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(123,108,246,0.35)]',
    badge: 'Deep Tech & Aerospace',
    technologies: [
      'Constelaciones Satelitales LEO',
      'Criptografía Post-Cuántica (PQC)',
      'Chips Fotónicos de Interconexión',
      'Comunicaciones Láser Espacio-Tierra',
      'Sensores Inerciales Cuánticos'
    ],
    activeProjects: 5,
    stats: [
      { label: 'Ancho de Banda', value: '100 Gbps' },
      { label: 'Precisión Orbital', value: '< 1 metro' },
      { label: 'Resistencia Cuántica', value: 'NIST Level 5' }
    ],
    caseStudy: {
      title: 'AeroLink Q-Secure Transceiver',
      summary: 'Terminal de comunicación láser inter-satelital con cifrado inmune a computadoras cuánticas.',
      impact: 'Transmisión segura de telemetría geoespacial a velocidades 50x superiores a la radiofrecuencia.'
    }
  },
  {
    id: 'investigacion-cientifica',
    icon: 'Dna',
    emoji: '🧬',
    title: 'Investigación Científica',
    shortDesc: 'Proyectos interdisciplinarios orientados a resolver desafíos de alto impacto.',
    detailedDesc: 'Cruce sistemático entre biología molecular, física de la materia condensada y química computacional para diseñar moléculas terapéuticas, catalizadores orgánicos y materiales superconductores.',
    color: 'border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8]',
    gradient: 'border-[#00B4D8]/30 hover:border-[#00B4D8]',
    borderHover: 'group-hover:shadow-[0_0_30px_-5px_rgba(0,180,216,0.35)]',
    badge: 'Applied Life Sciences & Physics',
    technologies: [
      'Diseño Molecular De Novo',
      'Simulación Molecular Cuántica',
      'Biolixiviación de Tierras Raras',
      'Nanomedicina Dirigida',
      'Microfluidos para Cribado de Alto Rendimiento'
    ],
    activeProjects: 8,
    stats: [
      { label: 'Publicaciones Q1', value: '35+' },
      { label: 'Patentes Registradas', value: '18' },
      { label: 'Candidatos Moleculares', value: '120+' }
    ],
    caseStudy: {
      title: 'BioRare Extraction Method',
      summary: 'Método biológico utilizando bacterias extremófilas para la extracción limpia de neodimio y disprosio de relaves mineros.',
      impact: 'Recuperación del 91% de tierras raras sin empleo de ácidos contaminantes.'
    }
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: 1,
    title: 'Detectamos oportunidades',
    tagline: 'Vigilancia Tecnológica y Prospectiva',
    description: 'Monitoreamos fronteras científicas y demandas de mercado para identificar desafíos de alta trascendencia donde la innovación generará mayor ventaja competitiva.',
    icon: 'Radar',
    keyAction: 'Mapeo de vacíos tecnológicos y evaluación de impacto'
  },
  {
    step: 2,
    title: 'Investigamos',
    tagline: 'Profundidad Científica y Estado del Arte',
    description: 'Formulamos marcos teóricos exhaustivos, modelado analítico y pruebas empíricas rigurosas en laboratorio para descifrar la raíz del problema.',
    icon: 'Microscope',
    keyAction: 'Experimentación controlada y validación de hipótesis'
  },
  {
    step: 3,
    title: 'Diseñamos',
    tagline: 'Arquitectura Conceptual y Estrategia',
    description: 'Estructuramos la solución integrando principios de ingeniería de sistemas, modularidad, ergonomía, costo objetivo y sustentabilidad intrínseca.',
    icon: 'Compass',
    keyAction: 'Modelado CAD, simulaciones FEM/CFD y esquemáticos'
  },
  {
    step: 4,
    title: 'Desarrollamos',
    tagline: 'Ingeniería y Construcción Iterativa',
    description: 'Transformamos los diseños en prototipos funcionales y líneas de código robustas mediante ciclos ágiles de ingeniería y pruebas de estrés continuas.',
    icon: 'Cpu',
    keyAction: 'Fabricación de prototipos funcionales y síntesis técnica'
  },
  {
    step: 5,
    title: 'Validamos',
    tagline: 'Ensayos en Entornos Reales de Operación',
    description: 'Sometemos cada tecnología a pruebas de campo extremas, homologación de estándares internacionales y auditorías de rendimiento operativo.',
    icon: 'CheckSquare',
    keyAction: 'Pruebas piloto industriales y verificación de métricas'
  },
  {
    step: 6,
    title: 'Protegemos',
    tagline: 'Blindaje de Propiedad Intelectual',
    description: 'Redactamos y registramos patentes globales PCT, resguardamos secretos industriales y aseguramos la libertad de operación en mercados clave.',
    icon: 'Shield',
    keyAction: 'Depósito de patentes y blindaje jurídico de activos'
  },
  {
    step: 7,
    title: 'Escalamos',
    tagline: 'Despliegue Industrial y Expansión Global',
    description: 'Acompañamos la manufactura a gran escala, la transferencia tecnológica a socios industriales y la continua evolución del producto.',
    icon: 'Rocket',
    keyAction: 'Transferencia tecnológica y producción masiva'
  }
];

export const VALUES_LIST: ValueItem[] = [
  {
    id: 'integridad',
    title: 'Integridad',
    description: 'Actuamos con honestidad intelectual absoluta, transparencia ética en nuestras investigaciones y apego estricto a los más altos estándares científicos.',
    icon: 'ShieldCheck',
    color: 'border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8]'
  },
  {
    id: 'excelencia',
    title: 'Excelencia',
    description: 'Buscamos la máxima precisión técnica y metodológica. Cada entregable y patente refleja nuestro compromiso con la calidad sin concesiones.',
    icon: 'Award',
    color: 'border-[#E8C547]/40 bg-[#E8C547]/10 text-[#E8C547]'
  },
  {
    id: 'innovacion-continua',
    title: 'Innovación continua',
    description: 'El conocimiento nunca se detiene. Reinvertimos constantemente en I+D para desafiar los límites de lo posible y crear el futuro hoy.',
    icon: 'Infinity',
    color: 'border-[#7B6CF6]/30 bg-[#7B6CF6]/10 text-[#7B6CF6]'
  },
  {
    id: 'responsabilidad',
    title: 'Responsabilidad',
    description: 'Asumimos el impacto ético, ambiental y humano de cada tecnología que desarrollamos, garantizando soluciones seguras y constructivas.',
    icon: 'CheckCircle',
    color: 'border-[#2ECC71]/30 bg-[#2ECC71]/10 text-[#2ECC71]'
  },
  {
    id: 'colaboracion',
    title: 'Colaboración',
    description: 'Fomentamos sinergias con universidades de élite, centros de investigación, industrias visionarias y mentes brillantes a escala global.',
    icon: 'Users',
    color: 'border-[#00B4D8]/30 bg-[#0B1D36]/5 text-[#00B4D8]'
  },
  {
    id: 'sostenibilidad',
    title: 'Sostenibilidad',
    description: 'Desarrollamos tecnologías concebidas desde su origen para regenerar el medio ambiente, minimizar residuos y preservar recursos para las próximas generaciones.',
    icon: 'Leaf',
    color: 'border-[#2ECC71]/30 bg-[#2ECC71]/10 text-[#2ECC71]'
  },
  {
    id: 'compromiso',
    title: 'Compromiso',
    description: 'Nos involucramos a largo plazo con el éxito tangible de cada proyecto, llevando cada iniciativa desde el laboratorio hasta su impacto en la sociedad.',
    icon: 'HeartHandshake',
    color: 'border-[#7B6CF6]/30 bg-[#7B6CF6]/10 text-[#7B6CF6]'
  },
  {
    id: 'respeto',
    title: 'Respeto',
    description: 'Valoramos la diversidad de perspectivas, el conocimiento empírico tradicional, la propiedad intelectual ajena y la dignidad de las personas.',
    icon: 'Sparkles',
    color: 'border-[#E8C547]/40 bg-[#E8C547]/10 text-[#E8C547]'
  }
];

export const WHY_INNOVENTIUM: Differentiator[] = [
  {
    title: 'Investigación orientada a resultados.',
    description: 'No hacemos ciencia teórica aislada. Cada investigación nace con un objetivo productivo claro, métricas de viabilidad económica y validación de mercado.',
    highlight: '100% Proyectos con ROI y métricas tangibles',
    badge: 'Impacto Real'
  },
  {
    title: 'Desarrollo tecnológico.',
    description: 'Contamos con infraestructura de laboratorio, simulación computacional avanzada y capacidades de prototipado rápido para acortar drásticamente los ciclos de maduración tecnológica.',
    highlight: 'Capacidad de prototipado TRL 1 a TRL 9',
    badge: 'End-to-End'
  },
  {
    title: 'Innovación permanente.',
    description: 'Ecosistema de investigación continua que actualiza continuamente sus algoritmos, materiales y procesos para mantener a nuestros clientes a la vanguardia de su sector.',
    highlight: 'Ciclos continuos de mejora y patentes activas',
    badge: 'Evolución Ágil'
  },
  {
    title: 'Pensamiento multidisciplinario.',
    description: 'Unimos físicos, químicos, ingenieros en IA, biotecnólogos y estrategas de propiedad intelectual bajo un mismo techo colaborativo para abordar problemas desde múltiples ángulos.',
    highlight: '+12 disciplinas científicas integradas',
    badge: 'Sinergia Total'
  },
  {
    title: 'Soluciones con visión internacional.',
    description: 'Nuestras tecnologías cumplen los estándares normativos globales más exigentes (ISO, CE, FDA, PCT) listas para ser exportadas y transferidas a cualquier mercado del mundo.',
    highlight: 'Blindaje legal y normativo internacional',
    badge: 'Alcance Global'
  },
  {
    title: 'Compromiso con el progreso sostenible.',
    description: 'Toda tecnología creada en Innoventium incorpora principios de economía circular, descarbonización y valor compartido con las comunidades.',
    highlight: 'Alineación estricta con ODS y criterios ESG',
    badge: 'Futuro Positivo'
  }
];

export const SAMPLE_PROJECTS: ProjectItem[] = [
  {
    id: 'prj-01',
    title: 'OptiNeural Industrial Core',
    category: 'IA',
    trlLevel: 8,
    description: 'Sistema neuronal profundo de mantenimiento predictivo y gemelo digital térmico para plantas siderúrgicas e hidroeléctricas.',
    impactMetrics: '82% menos paradas no planificadas, 18% ahorro energético',
    technologies: ['Deep Learning', 'PyTorch', 'Edge CUDA', 'Digital Twin'],
    status: 'Escalamiento Industrial',
    patentRef: 'PCT/IB2025/08912',
    year: '2025-2026'
  },
  {
    id: 'prj-02',
    title: 'H2-Matrix Nano-Catalyst',
    category: 'Energía',
    trlLevel: 7,
    description: 'Catalizador no noble a base de grafeno dopado para electrólisis de agua de mar a temperatura ambiente sin membrana ácida.',
    impactMetrics: '$1.45 USD/kg costo de producción de H2 Verde proyectado',
    technologies: ['Nanomateriales', 'Grafeno Dopado', 'Electroquímica de Flujo'],
    status: 'Validación',
    patentRef: 'PCT/IB2024/04119',
    year: '2024-2026'
  },
  {
    id: 'prj-03',
    title: 'BioCirculix Degradable Polymer',
    category: 'Sustentabilidad',
    trlLevel: 9,
    description: 'Polímero bio-sintetizado a partir de residuos lignocelulósicos con propiedades barrera idénticas al PET y descomposición marina en 90 días.',
    impactMetrics: 'Zero microplásticos residuales, huella de carbono negativa',
    technologies: ['Biopolímeros', 'Fermentación de Precisión', 'Enzimas Sintéticas'],
    status: 'Escalamiento Industrial',
    patentRef: 'PCT/IB2024/09301',
    year: '2024-2026'
  },
  {
    id: 'prj-04',
    title: 'AeroLink Quantum-Safe Transceiver',
    category: 'Tecnología Avanzada',
    trlLevel: 6,
    description: 'Módulo de comunicaciones ópticas satélite-tierra con cifrado fotónico post-cuántico resistente a algoritmos de Shor.',
    impactMetrics: '100 Gbps de enlace óptico seguro en órbita baja (LEO)',
    technologies: ['Fotónica Integrada', 'PQC Dilithium/Kyber', 'Láser Óptico'],
    status: 'Protección de Patente',
    patentRef: 'PCT/IB2025/01140',
    year: '2025-2026'
  },
  {
    id: 'prj-05',
    title: 'BioRare Extremophile Extraction',
    category: 'Investigación Científica',
    trlLevel: 5,
    description: 'Proceso de biolixiviación microbiana asistida por consorcios extremófilos para extracción limpia de tierras raras de escorias mineras.',
    impactMetrics: '91% recuperación de Neodimio y Disprosio sin ácidos tóxicos',
    technologies: ['Microbiología Aplicada', 'Bio-minería', 'Cribado Genómico'],
    status: 'Prototipo Validado',
    patentRef: 'PCT/IB2025/07442',
    year: '2025-2026'
  },
  {
    id: 'prj-06',
    title: 'SwarmGrid Autonomous AGV Robotics',
    category: 'Industria',
    trlLevel: 8,
    description: 'Enjambre de robots móviles autónomos guiados por IA descentralizada con algoritmo de evitación bio-inspirado y auto-orquestación.',
    impactMetrics: '+44% velocidad de throughput logístico en centros de distribución',
    technologies: ['Swarm Intelligence', 'SLAM LiDAR 3D', 'ROS2 Realtime'],
    status: 'Escalamiento Industrial',
    patentRef: 'PCT/IB2024/06283',
    year: '2024-2026'
  }
];
