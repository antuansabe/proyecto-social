import { notFound } from 'next/navigation';
import { laws } from '@/data/laws';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import ShareButtonsClient from '@/components/ShareButtonsClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function LawPage({ params }: PageProps) {
  const resolvedParams = await params;
  const law = laws.find(l => l.slug === resolvedParams.slug);

  if (!law) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
              law.impact === 'high' ? 'bg-red-500/20 text-red-100' :
              law.impact === 'medium' ? 'bg-yellow-500/20 text-yellow-100' :
              'bg-green-500/20 text-green-100'
            }`}>
              {law.impact === 'high' ? 'Alto impacto' :
               law.impact === 'medium' ? 'Impacto medio' : 'Bajo impacto'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {law.title}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {law.description}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* How Does This Law Affect Me */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                ¿Cómo me afecta esta ley?
              </h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  La {law.title} establece un marco regulatorio que impacta directamente en tu vida digital diaria. 
                  Esta legislación define cómo deben protegerse tus datos personales, qué derechos tienes como usuario 
                  de servicios digitales, y cuáles son las obligaciones de las empresas que manejan tu información.
                </p>
                
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
                  Sectores que se ven afectados:
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {law.affectedSections.map((section, index) => (
                    <div key={index} className="flex items-center bg-blue-50 p-3 rounded-lg">
                      <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-800">{section}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* What Can I Do */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ¿Qué puedo hacer?
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Estos son los pasos concretos que puedes tomar para protegerte y ejercer tus derechos:
              </p>
              <div className="space-y-4">
                {law.actionableAdvice.map((advice, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-100 rounded-full p-1 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{advice}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Scroll Storytelling Placeholder */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Visualización Interactiva
              </h2>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-lg text-center">
                <svg className="w-16 h-16 text-purple-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 4h10m-10 0l-.5 9a2 2 0 002 2h7a2 2 0 002-2L19 8m-10 0V6a2 2 0 012-2h4a2 2 0 012 2v2" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Experiencia Interactiva Próximamente
                </h3>
                <p className="text-gray-600">
                  Aquí tendremos una experiencia de scroll storytelling que te guiará 
                  paso a paso a través de los aspectos más importantes de esta ley.
                </p>
                <div className="mt-4 text-sm text-purple-600 font-medium">
                  🚧 En desarrollo
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Myths and Truths */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mitos y Verdades
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Desmitifiquemos las ideas erróneas más comunes sobre esta ley:
              </p>
              <Accordion>
                {law.mythsAndTruths.map((item) => (
                  <AccordionItem key={item.id} title={`🚫 MITO: ${item.myth}`}>
                    <div className="space-y-3">
                      <div className="bg-green-50 border-l-4 border-green-400 p-4">
                        <p className="font-medium text-green-800 mb-2">
                          ✅ VERDAD: {item.truth}
                        </p>
                        <p className="text-green-700 text-sm">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </section>

        {/* Real Cases */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Casos Reales
              </h2>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Estos casos reales muestran cómo esta ley se aplica en la práctica:
              </p>
              <div className="space-y-6">
                {law.realCases.map((case_) => (
                  <div key={case_.id} className="border-l-4 border-blue-400 bg-blue-50 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {case_.title}
                      </h3>
                      <span className="text-sm text-gray-500">
                        {new Date(case_.date).toLocaleDateString('es-MX')}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      {case_.description}
                    </p>
                    <div className="bg-white border border-blue-200 p-3 rounded">
                      <p className="text-sm font-medium text-blue-800 mb-1">Resultado:</p>
                      <p className="text-sm text-gray-700">{case_.outcome}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Share Section */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">
                Comparte esta información
              </h2>
              <p className="text-gray-600">
                Ayuda a otros a entender sus derechos digitales
              </p>
            </CardHeader>
            <CardContent>
              <ShareButtonsClient 
                title={`${law.title} - AntiManual`}
                slug={resolvedParams.slug}
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}