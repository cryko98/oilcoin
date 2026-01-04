import React from 'react';

const Chart: React.FC = () => {
  return (
    <section id="chart" className="py-20 relative bg-oil-black">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-display uppercase text-white">
              Live <span className="text-oil-gold">Chart</span>
            </h2>
         </div>
         
         <div className="rounded-xl overflow-hidden border-2 border-oil-gold/30 shadow-[0_0_30px_rgba(230,145,56,0.2)] bg-oil-dark">
            <style dangerouslySetInnerHTML={{__html: `
              #dexscreener-embed{position:relative;width:100%;padding-bottom:125%;}
              @media(min-width:1400px){#dexscreener-embed{padding-bottom:65%;}}
              #dexscreener-embed iframe{position:absolute;width:100%;height:100%;top:0;left:0;border:0;}
            `}} />
            <div id="dexscreener-embed">
              <iframe 
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