import React from 'react';
import { Wallet, Coins, ArrowRightLeft, Rocket } from 'lucide-react';

interface StepCardProps {
  icon: any;
  title: string;
  desc: string;
  step: number;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, desc, step }) => (
  <div className="glass-panel p-6 rounded-xl relative hover:border-oil-gold transition-colors duration-300 group h-full">
    <div className="absolute -top-4 -left-4 w-10 h-10 bg-oil-gold rounded-full flex items-center justify-center font-black text-black text-xl shadow-lg z-10">
      {step}
    </div>
    <div className="flex flex-col items-center text-center space-y-4 pt-4">
      <div className="p-4 bg-oil-black rounded-full text-oil-gold group-hover:scale-110 transition-transform duration-300">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  </div>
);

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Create Wallet",
      desc: "Download Phantom Wallet or Solflare from the app store or browser extension store."
    },
    {
      icon: Coins,
      title: "Get $SOL",
      desc: "Buy SOL from an exchange (Binance, Coinbase) and send it to your new Solana wallet address."
    },
    {
      icon: Rocket,
      title: "Go to Pump.fun",
      desc: "Click the 'Buy Now' button on this site to open the official OilCoin pump.fun trading page."
    },
    {
      icon: ArrowRightLeft,
      title: "Swap for $OIL",
      desc: "Connect your wallet, enter the amount of SOL you want to spend, and click 'Buy'. Welcome to the oil fields!"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-oil-dark to-oil-black opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display uppercase text-white mb-4">
            How to Buy <span className="text-oil-gold">Instruction</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Become an oil tycoon in 4 simple steps. Join the movement before the reserves run dry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <StepCard 
              key={index}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              desc={step.desc}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
           <a 
              href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-oil-gold text-black font-black text-xl py-4 px-10 rounded-full hover:bg-white transition-all shadow-[0_0_25px_rgba(230,145,56,0.6)] animate-pulse"
            >
              START DRILLING NOW <Rocket size={24} />
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;