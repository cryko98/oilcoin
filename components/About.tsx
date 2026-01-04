import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-oil-dark/50 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Content Column */}
          <div className="space-y-8 reveal">
            <h2 className="text-5xl md:text-6xl font-display uppercase text-transparent bg-clip-text bg-gradient-to-r from-oil-gold to-white mb-6 leading-none">
              The New <br/> Black Gold
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p className="text-xl">
                <strong className="text-white font-bold">The meta has shifted.</strong> It's not just about cats and dogs anymore. It's about raw industrial power. It's about <span className="text-oil-gold font-bold">$OILCOIN</span>.
              </p>
              
              <div className="p-6 rounded-xl glass-panel border-l-4 border-l-oil-gold hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <span className="text-oil-gold">⚡</span> Toly Approved?
                </h3>
                <p className="italic text-gray-400">
                  Even the Solana Founder, <span className="text-oil-gold font-semibold">Toly (Anatoly Yakovenko)</span>, couldn't ignore the energy. When the main man shills the narrative, you know the pipeline is ready to flow. 
                </p>
              </div>

              <div className="p-6 rounded-xl glass-panel border-l-4 border-l-blue-600 hover:bg-white/5 transition-colors duration-300">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                   <span className="text-blue-500">🇺🇸</span> The Trump Effect
                </h3>
                <p className="italic text-gray-400">
                  Oil is the hottest topic on the internet right now, thanks to <span className="text-white font-semibold">Donald Trump</span> putting energy dominance back on the global stage. We are riding the biggest macro wave of the year.
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group reveal delay-200">
            <div className="absolute -inset-4 bg-oil-gold rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden border border-oil-gold/30 shadow-2xl transform transition-transform duration-700 hover:scale-[1.02] hover:rotate-1">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/cccc.png" 
                  alt="OilCoin Community Meme" 
                  className="w-full h-auto object-cover"
                />
               <div className="absolute bottom-6 left-6 z-20">
                  <span className="bg-oil-gold text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Meme of the Year</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;