import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">AntiManual</h3>
            <p className="text-gray-300">
              Educación cívica y legal accesible para todos los mexicanos.
            </p>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/kit-defensa-digital" className="text-gray-300 hover:text-white transition-colors">
                  Kit de Defensa Digital
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Contacto</h4>
            <p className="text-gray-300">
              ¿Tienes dudas o sugerencias?
            </p>
            <p className="text-gray-300 mt-2">
              Contáctanos para mejorar este proyecto.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 AntiManual. Proyecto educativo sin fines de lucro.
          </p>
        </div>
      </div>
    </footer>
  );
};