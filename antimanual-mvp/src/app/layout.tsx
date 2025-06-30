import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AntiManual - Archivo Digital de Leyes Mexicanas",
  description: "Archivo digital oficial para la comprensión de leyes mexicanas. Educación cívica y derechos digitales explicados de manera accesible.",
  keywords: "leyes mexicanas, derechos digitales, educación cívica, archivo legal, ciberseguridad",
  authors: [{ name: "AntiManual" }],
  openGraph: {
    title: "AntiManual - Archivo Digital de Leyes Mexicanas",
    description: "Archivo digital oficial para la comprensión de leyes mexicanas",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col paper-texture">
        {/* Línea de margen izquierdo estilo documento */}
        <div className="fixed left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent opacity-30 z-0"></div>
        
        {/* Header con estilo documento oficial */}
        <Header />
        
        {/* Contenido principal */}
        <main className="flex-grow relative z-10">
          <div className="min-h-full">
            {children}
          </div>
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Efectos de papel vintage */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-paper-300/10"></div>
        </div>
      </body>
    </html>
  );
}
