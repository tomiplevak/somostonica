import { ProgressBar } from "@/components/layout/progress-bar";
import { MorphingNav } from "@/components/layout/morphing-nav";
import { Hero } from "@/components/landing/hero";
import { Manifesto } from "@/components/landing/manifesto";
import { Method } from "@/components/landing/method";
import { Showcase } from "@/components/landing/showcase";
import { Contact } from "@/components/landing/contact";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#090a0b] text-[#f1f3f5] selection:bg-[#f35b04] selection:text-white">
      {/* Top scroll progress indicator */}
      <ProgressBar />

      {/* Dynamic morphing navigation */}
      <MorphingNav />

      {/* Main Narrative Structure */}
      <main className="relative flex flex-col">
        <Hero />
        <Manifesto />
        <Method />
        <Showcase />
        <Contact />
      </main>

      {/* Editorial Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f35b04]" />
            <span className="font-display font-bold tracking-tight text-white text-sm">
              somos tónica
            </span>
          </div>

          <p className="text-slate-500">
            © {new Date().getFullYear()} Somos Tónica Studio · Estrategia, Voz & Dirección Editorial.
          </p>

          <a
            href="#"
            className="text-slate-400 hover:text-white transition-colors duration-200"
          >
            Volver al inicio ↑
          </a>
        </div>
      </footer>
    </div>
  );
}
