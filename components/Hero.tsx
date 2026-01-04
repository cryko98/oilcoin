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
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Glowing Orb Behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-oil-gold rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="relative z-10 animate-float">
        <img 
          src="https://pbs.twimg.com/media/G9znCcgXUAAVXMq?format=jpg&name=small" 
          alt="OilCoin Barrel" 
          className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-oil-gold shadow-[0_0_40px_rgba(230,145,56,0.6)] mx-auto mb-8"
        />
      </div>

      <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-4 text-glow">
        $OIL<span className="text-oil-gold">COIN</span>
      </h1>
      
      <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
        The only liquid asset you need. 
        <br />
        <span className="text-oil-gold font-bold">Drill, Baby, Drill!</span>
      </p>

      {/* Contract Address Box */}
      <div className="glass-panel rounded-xl p-2 pl-4 flex items-center max-w-full md:max-w-2xl mx-auto mb-8 border border-oil-gold/30 hover:border-oil-gold transition-colors duration-300">
        <span className="text-xs md:text-sm font-mono text-gray-300 truncate mr-4">
          {CA}
        </span>
        <button 
          onClick={handleCopy}
          className="ml-auto bg-oil-dark hover:bg-oil-gold hover:text-black text-oil-gold p-2 rounded-lg transition-all duration-200 flex-shrink-0"
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </button>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        <a 
          href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
          target="_blank" 
          rel="noreferrer"
          className="bg-oil-gold hover:bg-white hover:text-black text-black font-bold text-lg py-4 px-8 rounded-full shadow-[0_0_20px_rgba(230,145,56,0.4)] transition-all transform hover:-translate-y-1"
        >
          Buy on Pump.fun
        </a>
        <a 
          href="https://x.com/oilcoinon_sol"
          target="_blank" 
          rel="noreferrer"
          className="bg-black border border-white/20 hover:border-oil-gold hover:text-oil-gold text-white font-bold text-lg py-4 px-8 rounded-full flex items-center gap-2 transition-all transform hover:-translate-y-1"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow on X
        </a>
      </div>
    </section>
  );
};

export default Hero;