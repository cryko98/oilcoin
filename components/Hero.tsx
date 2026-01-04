import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const CA = "RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL";

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CA);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 pb-10 overflow-hidden">
      {/* Central Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-oil-gold rounded-full blur-[150px] opacity-10 pointer-events-none animate-pulse-glow"></div>

      <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="relative inline-block animate-float">
          <img 
            src="https://pbs.twimg.com/media/G9znCcgXUAAVXMq?format=jpg&name=small" 
            alt="OilCoin Barrel" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-oil-gold/50 shadow-[0_0_60px_rgba(230,145,56,0.4)] mx-auto mb-8 relative z-10 bg-black"
          />
           <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-oil-gold rounded-full blur-xl opacity-60 animate-pulse"></div>
        </div>
      </div>

      <h1 className="relative z-10 text-7xl md:text-9xl font-display font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 text-glow animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
        $OIL<span className="text-oil-gold">COIN</span>
      </h1>
      
      <p className="relative z-10 text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
        The black gold of Solana. 
        <br />
        <span className="text-oil-gold font-bold tracking-widest uppercase">Drill, Baby, Drill!</span>
      </p>

      {/* Contract Address Box */}
      <div className="relative z-10 glass-panel rounded-xl p-2 pl-5 pr-2 flex items-center max-w-full md:max-w-2xl mx-auto mb-10 border border-oil-gold/30 hover:border-oil-gold hover:shadow-[0_0_20px_rgba(230,145,56,0.3)] transition-all duration-300 animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
        <div className="flex flex-col items-start mr-4 overflow-hidden">
             <span className="text-[10px] text-oil-gold uppercase font-bold tracking-wider mb-0.5">Contract Address</span>
             <span className="text-xs md:text-sm font-mono text-gray-200 truncate w-full sm:w-auto select-all">
              {CA}
            </span>
        </div>
        <button 
          onClick={handleCopy}
          className="ml-auto bg-oil-gold hover:bg-white text-black p-2.5 rounded-lg transition-all duration-200 flex-shrink-0 shadow-lg transform active:scale-95"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>

      <div className="relative z-10 flex flex-wrap gap-5 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
        <a 
          href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
          target="_blank" 
          rel="noreferrer"
          className="group relative bg-oil-gold text-black font-black text-xl py-4 px-10 rounded-full shadow-[0_0_30px_rgba(230,145,56,0.4)] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_50px_rgba(230,145,56,0.6)] overflow-hidden"
        >
          <span className="relative z-10">BUY ON PUMP.FUN</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </a>
        <a 
          href="https://x.com/oilcoinon_sol"
          target="_blank" 
          rel="noreferrer"
          className="glass-panel text-white font-bold text-xl py-4 px-10 rounded-full flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 hover:bg-white/10"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          JOIN COMMUNITY
        </a>
      </div>
    </section>
  );
};

export default Hero;