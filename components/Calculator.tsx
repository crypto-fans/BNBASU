import React, { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';

const ZONES = [
  { id: 'vm', name: 'Villa Morra', factor: 1.2 },
  { id: 'ca', name: 'Corp. Axis', factor: 1.1 },
  { id: 'ce', name: 'Centro', factor: 0.9 },
  { id: 'bj', name: 'Barrio Jara', factor: 0.8 },
];

export const Calculator: React.FC = () => {
  const [activeZone, setActiveZone] = useState(ZONES[0]);
  const [rooms, setRooms] = useState(2);

  const estimatedIncome = useMemo(() => {
    const basePerNight = 45; 
    let roomMultiplier = 1;
    if (rooms === 2) roomMultiplier = 1.8;
    if (rooms === 3) roomMultiplier = 2.6;
    if (rooms === 4) roomMultiplier = 4.5;

    const occupancy = 0.75;
    const days = 30;
    
    return Math.round(basePerNight * roomMultiplier * activeZone.factor * days * occupancy);
  }, [activeZone, rooms]);

  return (
    <section id="calculadora" className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="bg-[#121212] rounded-3xl p-8 md:p-12 shadow-2xl border border-brand-gold/20 glow-box relative overflow-hidden">
                
                {/* Decoración de fondo */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

                <div className="grid md:grid-cols-2 gap-16 relative z-10">
                    
                    {/* Columna Izquierda: Inputs */}
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <SlidersHorizontal className="text-brand-gold" /> Configura tu Propiedad
                        </h2>
                        
                        {/* Zone Selector */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Zona en Asunción</label>
                            <div className="grid grid-cols-2 gap-3">
                                {ZONES.map(zone => (
                                  <button
                                    key={zone.id}
                                    onClick={() => setActiveZone(zone)}
                                    className={`py-3 px-4 rounded-lg border text-sm font-semibold transition-all duration-300
                                      ${activeZone.id === zone.id 
                                        ? 'border-brand-gold bg-brand-gold/10 text-brand-gold shadow-[0_0_10px_rgba(250,204,21,0.2)]' 
                                        : 'border-white/10 text-white hover:border-brand-gold/50'}`}
                                  >
                                    {zone.name}
                                  </button>
                                ))}
                            </div>
                        </div>

                        {/* Room Slider */}
                        <div>
                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                              Habitaciones: <span className="text-brand-gold text-lg ml-1">{rooms}</span>
                            </label>
                            <input 
                              type="range" 
                              min="1" 
                              max="4" 
                              value={rooms}
                              onChange={(e) => setRooms(parseInt(e.target.value))}
                              className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                            />
                            <div className="flex justify-between text-xs text-slate-500 mt-2 font-mono">
                                <span>Studio</span>
                                <span>1 Hab</span>
                                <span>2 Hab</span>
                                <span>Penthouse</span>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Resultado DINERO */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-black border border-white/10 rounded-2xl p-8 text-center relative">
                            <p className="text-slate-500 text-sm uppercase tracking-wider font-bold mb-4">Potencial Mensual</p>
                            
                            <div className="text-5xl md:text-6xl font-black text-brand-money mb-2 tracking-tighter">
                                ${estimatedIncome.toLocaleString()}
                            </div>
                            
                            <div className="flex items-center justify-center gap-2 mb-8">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                <p class="text-xs text-slate-400">Actualizado hoy con IA</p>
                            </div>

                            <button className="w-full py-4 bg-brand-gold text-brand-black rounded-xl font-bold hover:bg-brand-goldhover transition shadow-lg uppercase tracking-wide transform active:scale-95">
                                Quiero ganar esto
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  );
};