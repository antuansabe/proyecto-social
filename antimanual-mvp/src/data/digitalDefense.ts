import { DigitalDefenseApp } from '@/types';

export const digitalDefenseApps: DigitalDefenseApp[] = [
  {
    id: '1',
    name: 'Signal',
    category: 'messenger',
    description: 'Mensajería cifrada de extremo a extremo para comunicaciones seguras',
    downloadUrl: 'https://signal.org/download/',
    isRecommended: true
  },
  {
    id: '2',
    name: 'Firefox',
    category: 'browser',
    description: 'Navegador web con enfoque en privacidad y seguridad',
    downloadUrl: 'https://www.mozilla.org/firefox/',
    isRecommended: true
  },
  {
    id: '3',
    name: 'ProtonVPN',
    category: 'vpn',
    description: 'VPN gratuita desarrollada por los creadores de ProtonMail',
    downloadUrl: 'https://protonvpn.com/',
    isRecommended: true
  },
  {
    id: '4',
    name: 'Bitwarden',
    category: 'security',
    description: 'Gestor de contraseñas de código abierto',
    downloadUrl: 'https://bitwarden.com/',
    isRecommended: true
  }
];

export const digitalDefenseTips = [
  'Usa autenticación de dos factores en todas tus cuentas importantes',
  'Actualiza regularmente tu software y aplicaciones',
  'No compartas información personal sensible en redes sociales públicas',
  'Verifica la autenticidad de enlaces antes de hacer clic',
  'Realiza copias de seguridad regulares de tu información importante',
  'Usa redes WiFi públicas con precaución, preferiblemente con VPN',
  'Configura alertas de seguridad en tus cuentas bancarias y servicios importantes'
];