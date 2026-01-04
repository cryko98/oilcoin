import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-oil-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-display uppercase text-oil-gold mb-6">
              The New Black Gold
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">The meta has shifted.</strong> It's not just about cats and dogs anymore. It's about raw power. It's about <span className="text-oil-gold font-bold">$OILCOIN</span>.
              </p>
              
              <div className="p-6 rounded-xl bg-oil-black border-l-4 border-oil-gold shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">⚡ Toly Approved?</h3>
                <p className="italic text-gray-400">
                  Even the Solana Founder, <span className="text-oil-gold">Toly (Anatoly Yakovenko)</span>, couldn't ignore the energy. When the main man shills the narrative, you know the pipeline is ready to flow. 
                </p>
              </div>

              <div className="p-6 rounded-xl bg-oil-black border-l-4 border-blue-600 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-2">🇺🇸 The Trump Effect</h3>
                <p className="italic text-gray-400">
                  Oil is the hottest topic on the internet right now, thanks to <span className="text-white">Donald Trump</span> putting energy dominance back on the global stage. We are riding the biggest macro wave of 2024. Drill baby, drill!
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group">
            <div className="absolute inset-0 bg-oil-gold rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <img 
              src="https://wkkeyyrknmnynlcefugq.supabase.co/storage/v1/object/public/wasd/cccc.png" 
              alt="OilCoin Community Meme" 
              className="relative rounded-2xl border-2 border-oil-gold/30 shadow-2xl w-full transform group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;