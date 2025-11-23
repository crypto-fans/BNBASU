import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Roberto Martínez",
    role: "Dueño en The One",
    text: "Antes gestionaba yo mismo mis departamentos y era un caos. Con BNB Asu mis ingresos subieron un 35% y ya no me preocupo por la limpieza.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Laura Villalba",
    role: "Inversionista",
    text: "La transparencia en los reportes mensuales es lo que más valoro. Sé exactamente cuánto entra y sale. El mantenimiento es impecable.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "James Anderson",
    role: "Huésped Recurrente",
    text: "Stayed at a BNB Asu managed property in Villa Morra. 5-star hotel experience but with the comfort of a home. Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Confianza Generada
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-[#121212] p-8 rounded-2xl border border-white/5 relative hover:-translate-y-2 transition duration-300">
                    <div className="flex gap-1 text-brand-gold mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-slate-300 italic mb-8 relative z-10 leading-relaxed text-sm">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                        <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-brand-gold/30" />
                        <div>
                            <h4 className="font-bold text-white text-sm">{t.name}</h4>
                            <p className="text-xs text-slate-500">{t.role}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};