import React from 'react';
import { Calculator, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden animated-bg">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1556912173-3db996e16054?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
              alt="Luxury Interior"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold tracking-widest uppercase mb-8 animate-pulse-slow">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span> Tecnología Inmobiliaria
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight">
                Menos Estrés. <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-gold to-yellow-200 glow-text">Más Rentabilidad.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
                Transformamos tu departamento vacío en una máquina de ingresos pasivos. <strong className="text-white">Sin que muevas un dedo.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#calculadora" 
                  onClick={(e) => { e.preventDefault(); document.getElementById('calculadora')?.scrollIntoView({behavior:'smooth'}); }}
                  className="w-full sm:w-auto bg-brand-gold text-brand-black px-8 py-4 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(250,204,21,0.3)] hover:shadow-[0_0_50px_rgba(250,204,21,0.5)] hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
                >
                    <Calculator size={20} /> Calcular Ganancias
                </a>
                <button className="w-full sm:w-auto text-white px-8 py-4 rounded-xl font-semibold border border-white/20 hover:bg-white/10 transition flex items-center justify-center gap-2">
                    <Play size={20} /> Ver Demo
                </button>
            </div>
        </div>
    </header>
  );
};