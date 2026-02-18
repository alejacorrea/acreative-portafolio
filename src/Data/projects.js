import proyecto1 from '../assets/proyecto1.jpg';
import proyecto2 from '../assets/proyecto2.jpg';
import proyecto3 from '../assets/proyecto3.jpg';
import proyecto4 from '../assets/proyecto4.jpg';
import portafolio1 from '../assets/portafolio1.jpg';
import portafolio3 from '../assets/portafolio3.jpg';

const PROJECTS_DATA = [
  {
    id: 1,
    label: 'SOULMOVE',
    title: 'Identidad de Marca',
    category: 'Branding',
    image: proyecto1,
    images: [proyecto1, portafolio1, portafolio3], 
    description: 'Desarrollo de identidad visual completa para Soulmove, incluyendo logotipo, paleta de colores, tipografías y aplicaciones de marca alineadas a sus objetivos de negocio.',
    tags: ['branding', 'identidad', 'logo', 'marca'],
    year: '2025',
  },
  {
    id: 2,
    label: 'CATALOGO INNOVATION 2026',
    title: 'Diseño Editorial',
    category: 'Editorial Design',
    image: proyecto2,
    description: 'Diseño y diagramación de catálogo corporativo para Innovation 2026, combinando narrativa visual, tipografía editorial y fotografía de producto.',
    tags: ['editorial', 'catalogo', 'revista', 'diseño'],
    year: '2025',
  },
  {
    id: 3,
    label: 'ARTES META ADS E INSTAGRAM',
    title: 'Diseño Digital',
    category: 'Digital Design',
    image: proyecto3,
    description: 'Creación de piezas gráficas para campañas de Meta Ads e Instagram, optimizadas para conversión y coherencia visual con la identidad de marca.',
    tags: ['digital', 'redes', 'social media', 'ads', 'instagram'],
    year: '2025',
  },
  {
    id: 4,
    label: 'ACDesarrollo – Juego de Mesa',
    title: 'Proyectos Especiales',
    category: 'Product & Experience Design',
    image: proyecto4,
    description: 'Diseño completo de juego de mesa educativo para ACDesarrollo, incluyendo concepto, ilustraciones, packaging y experiencia de usuario.',
    tags: ['producto', 'juego', 'experiencia', 'especial'],
    year: '2026',
  },
];

export default PROJECTS_DATA;