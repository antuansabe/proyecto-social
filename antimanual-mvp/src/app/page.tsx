'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, FileCard } from '@/components/ui/Card';
import { StampButton, FileButton } from '@/components/ui/Button';
import { ThreeJSBackground } from '@/components/ThreeJSBackground';
import { laws } from '@/data/laws';
import { legislativeRadarItems } from '@/data/legislativeRadar';

export default function Home() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-seal-600';
      case 'alert': return 'bg-amber-500';
      case 'monitoring': return 'bg-green-600';
      default: return 'bg-ink-400';
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

  const getStatusText = (status: string) => {
    switch (status) {
      case 'monitoring': return 'En monitoreo';
      case 'alert': return 'Requiere atención';
      case 'critical': return 'Crítico';
      default: return 'Estado desconocido';
    }
  };

  return (
    <div className="min-h-screen relative">
      <ThreeJSBackground />
      
      {/* Hero Section - Estilo cabecera de documento oficial */}
      <section className="relative py-16 lg:py-24">
        <div className="document-container">
          {/* Cabecera oficial */}
          <div className="text-center mb-16">
            <div className="mb-8">
              <div className="official-badge mx-auto mb-4">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Sistema Digital Oficial
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-mono font-bold text-ink-primary mb-6 typewriter">
              ARCHIVO DIGITAL LEGAL
            </h1>
            
            <div className="section-divider mx-auto max-w-md mb-8"></div>
            
            <p className="text-lg lg:text-xl text-ink-secondary max-w-4xl mx-auto leading-relaxed mb-8 font-mono">
              COMPRENDA LAS LEYES MEXICANAS QUE AFECTAN SU VIDA DIGITAL.<br />
              EDUCACIÓN CÍVICA Y LEGAL ACCESIBLE PARA TODOS LOS CIUDADANOS.
            </p>
            
            {/* Fecha y número de expediente */}
            <div className="flex justify-center items-center space-x-8 text-sm font-mono text-ink-400 mb-12">
              <span>EXPEDIENTE: AMD-2024-001</span>
              <span>•</span>
              <span>FECHA: {new Date().toLocaleDateString('es-MX')}</span>
            </div>
            
            {/* Botones de acción oficiales */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/kit-defensa-digital">
                <StampButton className="w-full sm:w-auto">
                  Acceder al Kit de Defensa
                </StampButton>
              </Link>
              
              <FileButton 
                icon={
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                }
              >
                Explorar Archivo Legal
              </FileButton>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section - Estilo formulario oficial */}
      <section className="py-16 bg-white/50">
        <div className="document-container">
          <Card variant="form" className="mb-12">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 border-2 border-seal-600 bg-white flex items-center justify-center">
                  <span className="text-seal-600 font-mono font-bold text-sm">i</span>
                </div>
                <h2 className="text-2xl font-mono font-bold text-ink-primary">
                  PROPÓSITO DEL ARCHIVO
                </h2>
              </div>
              
              <div className="section-divider mb-6"></div>
              
              <p className="text-ink-secondary font-mono leading-relaxed">
                ESTE ARCHIVO DIGITAL TIENE COMO OBJETIVO PRINCIPAL FACILITAR LA COMPRENSIÓN 
                DE LA LEGISLACIÓN MEXICANA RELACIONADA CON TECNOLOGÍA Y DERECHOS DIGITALES.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 border-2 border-border bg-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-mono font-semibold text-ink-primary uppercase tracking-wide">
                    Educación Accesible
                  </h3>
                  <p className="text-sm text-ink-secondary font-mono leading-relaxed">
                    Explicaciones claras sin terminología jurídica compleja, diseñadas para la comprensión ciudadana.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 border-2 border-border bg-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-mono font-semibold text-ink-primary uppercase tracking-wide">
                    Derechos Digitales
                  </h3>
                  <p className="text-sm text-ink-secondary font-mono leading-relaxed">
                    Protección y ejercicio de derechos fundamentales en el entorno digital contemporáneo.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 border-2 border-border bg-white flex items-center justify-center">
                    <svg className="w-6 h-6 text-ink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-mono font-semibold text-ink-primary uppercase tracking-wide">
                    Acción Práctica
                  </h3>
                  <p className="text-sm text-ink-secondary font-mono leading-relaxed">
                    Guías concretas y procedimientos aplicables en situaciones reales del ciudadano.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Laws Section - Estilo expedientes */}
      <section className="py-16">
        <div className="document-container">
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-10 h-10 border-2 border-seal-600 bg-white flex items-center justify-center">
                <svg className="w-6 h-6 text-seal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-mono font-bold text-ink-primary">
                  EXPEDIENTES LEGALES
                </h2>
                <p className="text-ink-secondary font-mono text-sm uppercase tracking-wide mt-1">
                  Documentos disponibles para consulta
                </p>
              </div>
            </div>
            
            <div className="section-divider mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {laws.map((law) => (
              <Link key={law.id} href={`/ley/${law.slug}`}>
                <FileCard
                  title={law.title}
                  type="Legislación Federal"
                  date={`Última actualización: 2024`}
                  status={law.status === 'active' ? 'active' : 'pending'}
                  className="transition-gentle hover:scale-[1.02]"
                >
                  <p className="text-sm text-ink-secondary font-mono mb-4 leading-relaxed">
                    {law.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-400 uppercase tracking-wide">
                        Nivel de impacto:
                      </span>
                      <span className={`official-badge ${
                        law.impact === 'high' ? 'bg-seal-50 text-seal-800 border-seal-200' :
                        law.impact === 'medium' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        'bg-green-50 text-green-800 border-green-200'
                      }`}>
                        {getImpactText(law.impact)}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-ink-400 uppercase tracking-wide">
                        Sectores afectados:
                      </span>
                      <span className="text-xs font-mono text-ink-600">
                        {law.affectedSections.length} sectores
                      </span>
                    </div>
                  </div>
                </FileCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legislative Radar Section - Estilo tabla oficial */}
      <section className="py-16 bg-white/30">
        <div className="document-container">
          <Card variant="document">
            <CardHeader>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-10 h-10 border-2 border-seal-600 bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-seal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-mono font-bold text-ink-primary">
                    RADAR LEGISLATIVO
                  </h2>
                  <p className="text-ink-secondary font-mono text-sm uppercase tracking-wide mt-1">
                    Monitoreo continuo de legislación en desarrollo
                  </p>
                </div>
              </div>
              
              <div className="section-divider mb-6"></div>
              
              <p className="text-ink-secondary font-mono text-sm leading-relaxed">
                SEGUIMIENTO EN TIEMPO REAL DE PROPUESTAS LEGISLATIVAS QUE PUEDEN AFECTAR 
                LOS DERECHOS DIGITALES DE LOS CIUDADANOS MEXICANOS.
              </p>
            </CardHeader>
            
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full font-mono text-sm">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-2 font-semibold text-ink-primary uppercase tracking-wide">
                        Documento Legal
                      </th>
                      <th className="text-left py-4 px-2 font-semibold text-ink-primary uppercase tracking-wide">
                        Estado
                      </th>
                      <th className="text-left py-4 px-2 font-semibold text-ink-primary uppercase tracking-wide">
                        Impacto
                      </th>
                      <th className="text-left py-4 px-2 font-semibold text-ink-primary uppercase tracking-wide">
                        Última Rev.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {legislativeRadarItems.map((item) => (
                      <tr key={item.id} className="border-b border-border hover:bg-white/50 transition-gentle">
                        <td className="py-4 px-2">
                          <div>
                            <div className="font-semibold text-ink-primary mb-1">{item.title}</div>
                            <div className="text-xs text-ink-secondary leading-relaxed">
                              {item.description}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="flex items-center space-x-2">
                            <div className={`w-3 h-3 ${getStatusColor(item.status)}`}></div>
                            <span className="text-xs uppercase tracking-wider">
                              {getStatusText(item.status)}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-2">
                          <span className={`official-badge ${
                            item.impact === 'high' ? 'bg-seal-50 text-seal-800 border-seal-200' :
                            item.impact === 'medium' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                            'bg-green-50 text-green-800 border-green-200'
                          }`}>
                            {getImpactText(item.impact)}
                          </span>
                        </td>
                        <td className="py-4 px-2 text-ink-400 text-xs">
                          {new Date(item.lastUpdate).toLocaleDateString('es-MX')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-mono text-ink-400 uppercase tracking-wide">
                    Total de documentos monitoreados: {legislativeRadarItems.length}
                  </p>
                  <div className="official-badge">
                    <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Actualización automática
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}