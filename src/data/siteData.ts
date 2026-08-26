export interface Project { id: string; title: string; description: string; category: string; status?: string; image?: string; slug?: string; }
export interface OrgNode { id: string; name?: string; position: string; parentId?: string; image?: string; }

export const ACTIVE_PROJECTS: Project[] = [
  { id: 'cinematografico', title: 'Proyecto Cinematográfico', description: 'Proyecto creativo y estratégico actualmente en desarrollo.', category: 'CREATIVIDAD', status: 'En desarrollo', slug: 'proyecto-cinematografico' },
  { id: 'deportivo', title: 'Proyecto Deportivo', description: 'Proyecto orientado al desarrollo y aplicación de nuevas propuestas dentro del ámbito deportivo.', category: 'DEPORTE', status: 'En desarrollo', slug: 'proyecto-deportivo' },
  { id: 'industrial', title: 'Diseños Industriales', description: 'Diseños y desarrollos industriales actualmente en proceso.', category: 'INDUSTRIA', status: 'En proceso', slug: 'disenos-industriales' },
  { id: 'patentes', title: 'Patentes Activas', description: 'Procesos de innovación, propiedad intelectual y patentes actualmente en desarrollo.', category: 'PROPIEDAD INTELECTUAL', status: 'Activo', slug: 'patentes-activas' },
];
export const ORG_PLACEHOLDER: OrgNode[] = [
  { id: 'direccion', position: 'Dirección General' },
  { id: 'innovacion', position: 'Innovación y Desarrollo', parentId: 'direccion' },
  { id: 'operaciones', position: 'Operaciones y Proyectos', parentId: 'direccion' },
];
export const FUTURE_ROUTES = ['/proyectos', '/proyectos/:slug', '/patentes', '/disenos-industriales', '/equipo', '/noticias', '/admin'];

// Añadir aquí los enlaces oficiales cuando el cliente los confirme.
// Los botones permanecen ocultos mientras el valor sea null.
export const SOCIAL_LINKS = {
  whatsapp: null as string | null,
  facebook: null as string | null,
  instagram: null as string | null,
};
