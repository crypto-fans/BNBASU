import React from 'react';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-[#050505] py-12 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6 opacity-50 hover:opacity-100 transition">
            <div className="bg-white/20 p-1 rounded text-xs font-bold text-brand-black">B</div>
            <span className="font-bold text-white">BNB Asu</span>
        </div>
        
        <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-slate-500 hover:text-brand-gold transition"><Instagram size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-brand-gold transition"><Facebook size={20} /></a>
            <a href="#" className="text-slate-500 hover:text-brand-gold transition"><Linkedin size={20} /></a>
        </div>

        <p className="text-slate-600 text-xs mb-4">© 2025 BNB Asu Property Management. Asunción, Paraguay.</p>
        
        <button 
          onClick={onAdminClick}
          className="text-[10px] text-slate-800 hover:text-brand-gold uppercase tracking-widest transition"
        >
          Admin Access
        </button>
    </footer>
  );
};