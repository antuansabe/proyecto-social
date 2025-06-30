'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ThreeJSBackground } from '@/components/ThreeJSBackground';
import { laws } from '@/data/laws';
import { legislativeRadarItems } from '@/data/legislativeRadar';

export default function Home() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500';
      case 'alert': return 'bg-yellow-500';
      case 'monitoring': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getImpactText = (impact: string) => {
    switch (impact) {
      case 'high': return 'Alto impacto';
      case 'medium': return 'Impacto medio';
      case 'low': return 'Bajo impacto';
      default: return 'Sin clasificar';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative">
      <ThreeJSBackground />
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AntiManual
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Entiende las leyes mexicanas que afectan tu vida digital. 
            Educación cívica accesible para todos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kit-defensa-digital">
              <Button size="lg" className="w-full sm:w-auto">
                Kit de Defensa Digital
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explorar Leyes
            </Button>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              ¿Por qué AntiManual?
            </h2>
            <p className="text-lg text-gray-600">
              Las leyes no deberían ser un misterio. Te ayudamos a entender cómo te afectan 
              las regulaciones mexicanas sobre tecnología y derechos digitales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Educación Accesible</h3>
              <p className="text-gray-600">
                Explicaciones claras sin jerga legal complicada
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Derechos Digitales</h3>
              <p className="text-gray-600">
                Conoce y protege tus derechos en el mundo digital
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acción Práctica</h3>
              <p className="text-gray-600">
                Consejos concretos que puedes aplicar hoy mismo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laws Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leyes Explicadas
            </h2>
            <p className="text-lg text-gray-600">
              Navega por las leyes mexicanas que más te afectan
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {laws.map((law) => (
              <Link key={law.id} href={`/ley/${law.slug}`}>
                <Card className="h-full hover:scale-105 transition-transform duration-200">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        law.impact === 'high' ? 'bg-red-100 text-red-800' :
                        law.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {getImpactText(law.impact)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {law.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      {law.description}
                    </p>
                    <div className="text-sm text-blue-600 font-medium">
                      Conoce cómo te afecta →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legislative Radar Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Radar Legislativo
            </h2>
            <p className="text-lg text-gray-600">
              Monitoreamos las leyes que están en desarrollo y pueden afectarte
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Ley/Regulación
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Estado
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Impacto
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">
                      Última Actualización
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {legislativeRadarItems.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <div>
                          <div className="font-medium text-gray-900">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-2 ${getStatusColor(item.status)}`}></div>
                          <span className="capitalize text-sm font-medium">
                            {item.status === 'monitoring' ? 'Monitoreando' :
                             item.status === 'alert' ? 'Alerta' : 'Crítico'}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          item.impact === 'high' ? 'bg-red-100 text-red-800' :
                          item.impact === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {getImpactText(item.impact)}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-600">
                        {new Date(item.lastUpdate).toLocaleDateString('es-MX')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}