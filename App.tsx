import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HowToBuy from './components/HowToBuy';
import Chart from './components/Chart';
import Footer from './components/Footer';
import { Droplet } from 'lucide-react';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll Animation Observer
  useEffect(() => {
    if (loading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [loading]);

  if (loading) {
    return (
      <div className="h-screen w-full bg-oil-black flex flex-col items-center justify-center z-50">
        <div className="relative">
          <Droplet className="w-20 h-20 text-oil-gold animate-bounce" fill="currentColor" />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-oil-gold font-bold text-xl tracking-widest uppercase whitespace-nowrap">
            Filling Barrels...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-oil-black text-white selection:bg-oil-gold selection:text-black overflow-x-hidden font-sans">
      {/* Dynamic Oil Bubbles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="bubbles">
           {[...Array(9)].map((_, i) => (
             <div key={i} className="bubble"></div>
           ))}
         </div>
      </div>
      
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E69138' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}
      />
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <HowToBuy />
        <Chart />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;