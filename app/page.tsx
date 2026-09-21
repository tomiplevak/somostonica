import { Hero } from "@/components/landing/hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0d0e] text-[#f8fafc]">
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0c0d0e]/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f35b04]" />
            <span className="text-lg font-bold tracking-tight text-white">
              somos tónica
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400">
            <span className="cursor-pointer hover:text-white transition-colors">
              Servicios
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Marcas
            </span>
            <span className="cursor-pointer hover:text-white transition-colors">
              Contacto
            </span>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Hero />
      </main>

      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Somos Tónica. Todos los derechos reservados.</p>
          <p className="text-slate-600">Estrategia · Branding · Contenido</p>
        </div>
      </footer>
    </div>
  );
}

