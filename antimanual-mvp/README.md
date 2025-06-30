# AntiManual MVP

## Descripción

AntiManual es un proyecto web pedagógico y cívico que tiene como objetivo explicar las leyes mexicanas de forma accesible y visual para la ciudadanía, con un enfoque especial en derechos digitales y ciberseguridad.

## Características del MVP

### 🏠 Landing Page
- Título y propósito del proyecto
- Cards de navegación para explorar leyes individuales
- Sección "Radar Legislativo" con monitoreo de leyes en desarrollo
- Diseño responsivo y moderno con TailwindCSS
- Fondo animado con partículas usando Three.js

### 📜 Páginas de Leyes Individuales
- **Ley de Ciberseguridad** (ejemplo implementado)
- Sección "¿Cómo me afecta esta ley?"
- Sección "¿Qué puedo hacer?" con consejos accionables
- Placeholder para scroll storytelling futuro
- Sección "Mitos y verdades" con acordeones interactivos
- Casos reales de aplicación de la ley
- Botones de compartir en redes sociales

### 🛡️ Kit de Defensa Digital
- Lista de aplicaciones recomendadas (Signal, Firefox, ProtonVPN, Bitwarden)
- Consejos técnicos esenciales
- Placeholder para infografías futuras
- Sección de emergencia para víctimas de ciberataques

### 📊 Radar Legislativo
- Tabla visual con estado de leyes monitoreadas
- Sistema de semáforos por color según impacto
- Información de última actualización

## Stack Tecnológico

- **Frontend**: Next.js 15.3.4 con App Router
- **Styling**: TailwindCSS
- **Visualizaciones**: Three.js para elementos interactivos
- **TypeScript**: Para type safety
- **Componentes**: Sistema modular y reutilizable

## Estructura del Proyecto

```
src/
├── app/                          # App Router de Next.js
│   ├── globals.css              # Estilos globales
│   ├── layout.tsx               # Layout principal
│   ├── page.tsx                 # Landing page
│   ├── kit-defensa-digital/     # Página del kit de defensa
│   └── ley/[slug]/             # Páginas dinámicas de leyes
├── components/
│   ├── ui/                      # Componentes de UI reutilizables
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── Accordion.tsx
│   │   └── ShareButtons.tsx
│   ├── layout/                  # Componentes de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── ThreeJSBackground.tsx    # Componente de animación 3D
├── data/                        # Datos estáticos del MVP
│   ├── laws.ts                  # Información de leyes
│   ├── digitalDefense.ts        # Apps y tips de seguridad
│   └── legislativeRadar.ts      # Datos del radar legislativo
└── types/                       # Definiciones de TypeScript
    └── index.ts
```

## Instalación y Desarrollo

### Requisitos
- Node.js 18+ 
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Linting
npm run lint
```

## URLs del MVP

- **Landing**: `/`
- **Kit de Defensa Digital**: `/kit-defensa-digital`
- **Ley de Ciberseguridad**: `/ley/ley-ciberseguridad`

## Datos de Ejemplo

El MVP incluye datos hardcoded para demostración:

- 1 ley completa (Ley de Ciberseguridad)
- 4 items en el radar legislativo
- 4 aplicaciones recomendadas
- 7 consejos de seguridad digital

## Funcionalidades Implementadas

✅ Navegación entre páginas  
✅ Diseño responsivo  
✅ Componentes reutilizables  
✅ Sistema de tipos con TypeScript  
✅ Animaciones con Three.js  
✅ Compartir en redes sociales  
✅ Accordiones interactivos  
✅ Tabla responsive del radar legislativo  

## Próximas Funcionalidades

🔄 Scroll storytelling interactivo  
🔄 Infografías y guías visuales  
🔄 CMS para gestión de contenido  
🔄 Base de datos para leyes  
🔄 Sistema de notificaciones  
🔄 Más leyes y casos de uso  

## Contribuir

Este es un proyecto educativo. Para contribuir:

1. Fork el repositorio
2. Crea una rama para tu feature
3. Implementa los cambios
4. Ejecuta `npm run build` para verificar
5. Crea un Pull Request

## Licencia

Proyecto educativo sin fines de lucro - 2024