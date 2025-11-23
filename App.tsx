import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Calculator } from './components/Calculator';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { AdminDashboard } from './components/AdminDashboard';

// Simple Analytics Simulation
const trackVisit = () => {
  const STORAGE_KEY_VIEWS = 'bnb_total_views';
  const STORAGE_KEY_DEVICES = 'bnb_unique_devices';
  const DEVICE_ID_KEY = 'bnb_device_id';

  // 1. Get or Create Device ID
  let deviceId = localStorage.getItem(DEVICE_ID_KEY);
  if (!deviceId) {
    deviceId = 'dev_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(DEVICE_ID_KEY, deviceId);
  }

  // 2. Track View Count
  const currentViews = parseInt(localStorage.getItem(STORAGE_KEY_VIEWS) || '0');
  localStorage.setItem(STORAGE_KEY_VIEWS, (currentViews + 1).toString());

  // 3. Track Unique Devices
  let knownDevices = JSON.parse(localStorage.getItem(STORAGE_KEY_DEVICES) || '[]');
  if (!knownDevices.includes(deviceId)) {
    knownDevices.push(deviceId);
    localStorage.setItem(STORAGE_KEY_DEVICES, JSON.stringify(knownDevices));
  }
};

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'admin'>('landing');

  useEffect(() => {
    // Run analytics on mount
    trackVisit();

    // Check URL hash for admin quick access (optional)
    if (window.location.hash === '#admin') {
      setCurrentView('admin');
    }

    const handleHashChange = () => {
       if (window.location.hash === '#admin') setCurrentView('admin');
       else setCurrentView('landing');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentView === 'admin') {
    return <AdminDashboard onBack={() => {
        window.location.hash = '';
        setCurrentView('landing');
    }} />;
  }

  return (
    <div className="font-sans antialiased text-slate-200 bg-brand-black">
      <Header />
      
      <main>
        <Hero />
        <Calculator />
        <Features />
        <Testimonials />
        
        {/* CTA FINAL */}
        <section className="py-24 bg-brand-black relative overflow-hidden border-t border-white/10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent opacity-50"></div>
          <div className="relative z-10 text-center px-4">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                  ¿Listo para monetizar tu m²?
              </h2>
              <a 
                href="https://wa.me/595999000000" 
                className="inline-flex items-center justify-center gap-3 bg-brand-money hover:bg-green-500 text-white px-10 py-5 rounded-full font-bold text-xl transition transform hover:scale-105 shadow-[0_10px_30px_rgba(34,197,94,0.4)]"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 
                  Hablar con BNB Asu
              </a>
          </div>
        </section>
      </main>

      <Footer onAdminClick={() => {
        window.location.hash = '#admin';
        setCurrentView('admin');
      }} />
    </div>
  );
};

export default App;