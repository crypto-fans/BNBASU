import React from 'react';
import { Bot, Gem, Wallet, Camera, Key, BarChart3 } from 'lucide-react';

const FEATURES = [
  {
    icon: <Bot size={48} />,
    title: "Precios Algorítmicos",
    text: "No adivinamos precios. Usamos Big Data para ajustar tu tarifa cada hora según la demanda del mercado."
  },
  {
    icon: <Gem size={48} />,
    title: "Mantenimiento Premium",
    text: "Inspecciones fotográficas tras cada salida. Tu propiedad se mantiene impecable, como el primer día."
  },
  {
    icon: <Wallet size={48} />,
    title: "Pagos Puntuales",
    text: "Transparencia total. Recibe reportes detallados y tu dinero directamente en tu cuenta bancaria."
  },
  {
    icon: <Camera size={48} />,
    title: "Fotos de Revista",
    text: "Producción fotográfica profesional incluida para que tu anuncio destaque sobre la competencia."
  },
  {
    icon: <Key size={48} />,
    title: "Check-in Autónomo",
    text: "Instalamos cerraduras inteligentes para que los huéspedes entren sin esperas. Cero fricción."
  },
  {
    icon: <BarChart3 size={48} />,
    title: "Dashboard Propietario",
    text: "Accede a tus estadísticas, calendario de ocupación y rendimientos en tiempo real desde tu móvil."
  }
];

export const Features: React.FC = () => {
  return (
    <section id="servicios" className="py-20 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">¿Por qué BNB Asu?</h2>
              <p className="text-slate-400">La fusión perfecta entre hospitalidad y tecnología.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
                {FEATURES.map((feat, idx) => (
                  <div key={idx} className="group p-8 rounded-2xl bg-brand-black border border-white/5 hover:border-brand-gold/50 transition duration-300 relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-brand-gold">
                          {feat.icon}
                      </div>
                      <div className="text-brand-gold mb-4 relative z-10">
                        {React.cloneElement(feat.icon as React.ReactElement, { size: 32 })}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4 relative z-10">{feat.title}</h3>
                      <p className="text-slate-400 text-sm relative z-10 leading-relaxed">
                          {feat.text}
                      </p>
                  </div>
                ))}
            </div>
        </div>
    </section>
  );
};