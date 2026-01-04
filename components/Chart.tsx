import React from 'react';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-24 relative bg-black/50">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-12 reveal">
            <h2 className="text-5xl md:text-6xl font-display uppercase text-white">
              Live <span className="text-oil-gold">Chart</span>
            </h2>
            <div className="h-1 w-24 bg-oil-gold mx-auto mt-4 rounded-full"></div>
         </div>
         
         <div className="glass-panel p-2 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(230,145,56,0.15)] reveal delay-200">
            <div className="relative w-full h-0 pb-[125%] lg:pb-[65%] bg-oil-dark/50 rounded-xl overflow-hidden">
              <iframe 
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://dexscreener.com/solana/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
                title="OilCoin Chart"
              ></iframe>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Chart;