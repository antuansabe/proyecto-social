import { Law } from '@/types';

export const laws: Law[] = [
  {
    id: '1',
    title: 'Ley de Ciberseguridad',
    description: 'Normativa que regula la protección de datos y sistemas digitales en México',
    slug: 'ley-ciberseguridad',
    impact: 'high',
    status: 'active',
    affectedSections: [
      'Usuarios de redes sociales',
      'Empresas con presencia digital',
      'Trabajadores remotos',
      'Estudiantes en línea'
    ],
    mythsAndTruths: [
      {
        id: '1',
        myth: 'El gobierno puede acceder a todos mis datos personales sin restricciones',
        truth: 'El acceso a datos personales está regulado y requiere procesos legales específicos',
        explanation: 'La ley establece protocolos claros para el acceso a información personal, requiriendo órdenes judiciales en la mayoría de casos.'
      },
      {
        id: '2',
        myth: 'Las empresas pueden usar mis datos como quieran',
        truth: 'Las empresas deben solicitar consentimiento explícito para el uso de datos personales',
        explanation: 'Existe un marco legal que obliga a las empresas a ser transparentes sobre el uso de datos y obtener consentimiento del usuario.'
      }
    ],
    actionableAdvice: [
      'Revisa y actualiza tu configuración de privacidad en redes sociales',
      'Usa contraseñas únicas y autenticación de dos factores',
      'Lee los términos y condiciones antes de aceptar servicios digitales',
      'Mantén tu software y aplicaciones actualizadas',
      'Reporta cualquier actividad sospechosa en tus cuentas'
    ],
    realCases: [
      {
        id: '1',
        title: 'Caso de filtración de datos bancarios',
        description: 'Una empresa financiera sufrió una filtración que expuso datos de 50,000 usuarios.',
        outcome: 'La empresa fue multada y obligada a implementar mejores medidas de seguridad.',
        date: '2023-08-15'
      },
      {
        id: '2',
        title: 'Robo de identidad digital',
        description: 'Ciudadano víctima de suplantación de identidad en redes sociales.',
        outcome: 'Se logró recuperar las cuentas y el agresor fue procesado legalmente.',
        date: '2023-11-22'
      }
    ]
  }
];