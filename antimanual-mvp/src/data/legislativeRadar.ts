import { LegislativeRadarItem } from '@/types';

export const legislativeRadarItems: LegislativeRadarItem[] = [
  {
    id: '1',
    title: 'Ley de Ciberseguridad',
    status: 'monitoring',
    impact: 'high',
    description: 'Regulación activa sobre protección de datos y sistemas digitales',
    lastUpdate: '2024-01-15'
  },
  {
    id: '2',
    title: 'Reforma a Ley de Telecomunicaciones',
    status: 'alert',
    impact: 'medium',
    description: 'Propuesta de cambios en regulación de servicios de internet',
    lastUpdate: '2024-02-28'
  },
  {
    id: '3',
    title: 'Ley de Protección de Datos Personales Digital',
    status: 'critical',
    impact: 'high',
    description: 'Nueva propuesta que podría cambiar el manejo de datos personales',
    lastUpdate: '2024-03-10'
  },
  {
    id: '4',
    title: 'Regulación de Inteligencia Artificial',
    status: 'monitoring',
    impact: 'medium',
    description: 'Marco regulatorio emergente para IA y algoritmos',
    lastUpdate: '2024-02-20'
  }
];