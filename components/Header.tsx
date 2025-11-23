import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-black/90 backdrop-blur-lg border-b border-white/10 shadow-lg' : 'bg-transparent border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between relative">
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex-1">
                <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="text-white p-2">
                    {isMobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Logo */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:flex-1 flex items-center gap-2">
                <div className="bg-brand-gold text-brand-black p-1.5 px-2 rounded font-black text-lg shadow-[0_0_15px_rgba(250,204,21,0.6)]">B</div>
                <span className="font-bold text-xl tracking-tighter text-white">BNB<span className="text-brand-gold">Asu</span></span>
            </div>

            {/* Desktop Nav & CTA */}
            <div className="hidden md:flex flex-1 justify-end items-center gap-6">
                <a href="#servicios" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition">Servicios</a>
                <a href="#testimonios" className="text-sm font-medium text-slate-300 hover:text-brand-gold transition">Testimonios</a>
                
                <a href="#contacto" className="bg-brand-gold hover:bg-brand-goldhover text-brand-black px-6 py-2 rounded-full text-sm font-bold transition transform hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(250,204,21,0.4)]">
                    Acceso Propietarios
                </a>
            </div>
            
            {/* Mobile Right Spacer */}
            <div className="flex-1 md:hidden"></div>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-dark border-t border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
             <a href="#servicios" onClick={() => setIsMobileOpen(false)} className="text-slate-300 hover:text-brand-gold py-2 border-b border-white/5">Servicios</a>
             <a href="#calculadora" onClick={() => setIsMobileOpen(false)} className="text-slate-300 hover:text-brand-gold py-2 border-b border-white/5">Calculadora</a>
             <a href="#testimonios" onClick={() => setIsMobileOpen(false)} className="text-slate-300 hover:text-brand-gold py-2 border-b border-white/5">Testimonios</a>
             <button className="w-full mt-2 bg-brand-gold text-brand-black py-3 rounded-lg font-bold">Acceso Propietarios</button>
          </div>
        )}
    </nav>
  );
};