'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-document border-b-2 border-border z-20">
      {/* Línea superior estilo documento oficial */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="document-container">
        <div className="flex justify-between items-center py-6">
          {/* Logo/Título estilo sello oficial */}
          <Link href="/" className="group flex items-center space-x-3 focus-visible-enhanced">
            {/* Icono de archivo oficial */}
            <div className="relative">
              <div className="w-10 h-10 border-2 border-seal-600 bg-white/90 flex items-center justify-center">
                <svg className="w-6 h-6 text-seal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              {/* Líneas de borde decorativas */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-seal-600"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-seal-600"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-seal-600"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-seal-600"></div>
            </div>
            
            <div className="flex flex-col">
              <h1 className="text-2xl font-mono font-semibold text-ink-primary tracking-tight">
                ANTIMANUAL
              </h1>
              <p className="text-xs text-ink-secondary uppercase tracking-widest font-mono">
                Archivo Digital Legal
              </p>
            </div>
          </Link>
          
          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="font-mono text-sm uppercase tracking-wide text-ink-secondary hover:text-seal-600 transition-gentle focus-visible-enhanced px-2 py-1"
            >
              Inicio
            </Link>
            <Link 
              href="/kit-defensa-digital" 
              className="font-mono text-sm uppercase tracking-wide text-ink-secondary hover:text-seal-600 transition-gentle focus-visible-enhanced px-2 py-1"
            >
              Kit de Defensa
            </Link>
            
            {/* Badge de estado oficial */}
            <div className="official-badge">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Activo
            </div>
          </nav>
          
          {/* Menú móvil */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-ink-secondary hover:text-seal-600 transition-gentle focus-visible-enhanced"
            aria-label="Abrir menú de navegación"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Menú móvil expandido */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-border mt-6 pt-6">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="font-mono text-sm uppercase tracking-wide text-ink-secondary hover:text-seal-600 transition-gentle focus-visible-enhanced px-2 py-2 border-l-2 border-transparent hover:border-seal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/kit-defensa-digital" 
                className="font-mono text-sm uppercase tracking-wide text-ink-secondary hover:text-seal-600 transition-gentle focus-visible-enhanced px-2 py-2 border-l-2 border-transparent hover:border-seal-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Kit de Defensa Digital
              </Link>
            </nav>
            
            {/* Información adicional en móvil */}
            <div className="mt-6 pt-4 border-t border-border">
              <div className="official-badge">
                Sistema Digital Activo
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Línea inferior estilo documento */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </header>
  );
};