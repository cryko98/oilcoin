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
    // Simulate initial loading for effect
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full bg-oil-black flex flex-col items-center justify-center z-50">
        <div className="relative">
          <Droplet className="w-20 h-20 text-oil-gold animate-bounce" fill="currentColor" />
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-oil-gold font-bold text-xl tracking-widest uppercase">
            Loading Reserves...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-oil-black text-white selection:bg-oil-gold selection:text-black overflow-x-hidden">
      {/* Background Texture */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 2px 2px, #E69138 1px, transparent 0)`,
             backgroundSize: '40px 40px'
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