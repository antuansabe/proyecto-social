'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { digitalDefenseApps, digitalDefenseTips } from '@/data/digitalDefense';

export default function DigitalDefenseKitPage() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'messenger':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        );
      case 'browser':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
        );
      case 'vpn':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'security':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l6-6v13l-6 6z" />
          </svg>
        );
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'messenger': return 'Mensajería Segura';
      case 'browser': return 'Navegador';
      case 'vpn': return 'VPN';
      case 'security': return 'Seguridad';
      default: return 'Otros';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'messenger': return 'bg-green-100 text-green-800';
      case 'browser': return 'bg-blue-100 text-blue-800';
      case 'vpn': return 'bg-purple-100 text-purple-800';
      case 'security': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kit de Defensa Digital
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Herramientas y consejos esenciales para proteger tu privacidad y seguridad digital
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Tu seguridad digital es importante
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  En la era digital, proteger tu información personal y mantenerte seguro en línea 
                  es fundamental. Este kit te proporciona las herramientas y conocimientos necesarios 
                  para navegar el mundo digital con confianza.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recommended Apps */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Aplicaciones Recomendadas
            </h2>
            <p className="text-lg text-gray-600">
              Estas aplicaciones han sido seleccionadas por su compromiso con la privacidad y seguridad
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {digitalDefenseApps.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-2 rounded-lg mr-3">
                        {getCategoryIcon(app.category)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${getCategoryColor(app.category)}`}>
                          {getCategoryName(app.category)}
                        </span>
                      </div>
                    </div>
                    {app.isRecommended && (
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                        ⭐ Recomendado
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {app.description}
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => window.open(app.downloadUrl, '_blank')}
                    className="w-full"
                  >
                    Descargar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Infographics Placeholder */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Infografías y Recursos Visuales
              </h2>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-lg text-center">
                <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Próximamente: Guías Visuales
                </h3>
                <p className="text-gray-600 mb-4">
                  Infografías interactivas y guías paso a paso para configurar tu seguridad digital
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">📱 Configuración móvil</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">🔐 Contraseñas seguras</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">🌐 Navegación privada</span>
                  <span className="bg-white px-3 py-1 rounded-full text-sm text-gray-600">📧 Email seguro</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Technical Tips */}
        <section className="mb-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Consejos Técnicos Esenciales
            </h2>
            <p className="text-lg text-gray-600">
              Prácticas fundamentales que puedes implementar hoy mismo
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {digitalDefenseTips.map((tip, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4 flex-shrink-0">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-700 leading-relaxed">{tip}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="mb-12">
          <Card className="bg-red-50 border-red-200">
            <CardHeader>
              <h2 className="text-2xl font-bold text-red-900 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                ¿Fuiste víctima de un ciberataque?
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-red-800 mb-4">
                Si has sido víctima de robo de identidad, fraude digital o cualquier otro ciberdelito, 
                estos son los pasos que debes seguir:
              </p>
              <div className="space-y-3">
                <div className="bg-white border border-red-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">1. Reporta inmediatamente</h3>
                  <p className="text-red-800 text-sm">
                    Contacta a tu banco, cambia tus contraseñas y reporta el incidente a las autoridades correspondientes.
                  </p>
                </div>
                <div className="bg-white border border-red-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">2. Documenta todo</h3>
                  <p className="text-red-800 text-sm">
                    Toma capturas de pantalla, guarda correos electrónicos y mantén un registro de todos los eventos.
                  </p>
                </div>
                <div className="bg-white border border-red-200 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-2">3. Busca ayuda profesional</h3>
                  <p className="text-red-800 text-sm">
                    Considera contactar a un abogado especializado en ciberdelitos si el daño es significativo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section>
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <CardContent className="pt-6 text-center">
              <h2 className="text-2xl font-bold mb-4">
                ¿Quieres aprender más sobre tus derechos digitales?
              </h2>
              <p className="text-blue-100 mb-6">
                Explora nuestras guías sobre las leyes mexicanas que protegen tu privacidad digital
              </p>
              <Button
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50 border-white"
                onClick={() => window.location.href = '/'}
              >
                Explorar Leyes
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}