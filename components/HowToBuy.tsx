import React from 'react';
import { Wallet, Coins, ArrowRightLeft, Rocket } from 'lucide-react';

interface StepCardProps {
  icon: any;
  title: string;
  desc: string;
  step: number;
  delay: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon: Icon, title, desc, step, delay }) => (
  <div className={`glass-panel glass-card-hover p-8 rounded-2xl relative group h-full reveal`} style={{ transitionDelay: delay }}>
    <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-oil-gold to-yellow-600 rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(230,145,56,0.5)] z-10 transform group-hover:rotate-12 transition-transform duration-300">
      {step}
    </div>
    <div className="flex flex-col items-center text-center space-y-5 pt-4">
      <div className="p-5 bg-black/50 border border-white/10 rounded-full text-oil-gold group-hover:scale-110 group-hover:text-white group-hover:bg-oil-gold transition-all duration-300 shadow-inner">
        <Icon size={36} />
      </div>
      <h3 className="text-2xl font-display tracking-wide text-white uppercase">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: "Create Wallet",
      desc: "Download Phantom Wallet or Solflare from the app store or browser extension store.",
      delay: "0s"
    },
    {
      icon: Coins,
      title: "Get $SOL",
      desc: "Buy SOL from an exchange (Binance, Coinbase) and send it to your new Solana wallet address.",
      delay: "0.2s"
    },
    {
      icon: Rocket,
      title: "Go to Pump.fun",
      desc: "Click the 'Buy Now' button on this site to open the official OilCoin pump.fun trading page.",
      delay: "0.4s"
    },
    {
      icon: ArrowRightLeft,
      title: "Swap for $OIL",
      desc: "Connect your wallet, enter the amount of SOL you want to spend, and click 'Buy'. Welcome to the oil fields!",
      delay: "0.6s"
    }
  ];

  return (
    <section id="how-to-buy" className="py-24 relative overflow-hidden">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-oil-dark via-oil-black to-black opacity-80 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-5xl md:text-6xl font-display uppercase text-white mb-6">
            How to <span className="text-oil-gold">Buy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
              delay={step.delay}
            />
          ))}
        </div>

        <div className="mt-20 text-center reveal">
           <a 
              href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-oil-gold to-yellow-500 text-black font-black text-2xl py-5 px-12 rounded-full hover:to-white hover:scale-105 transition-all shadow-[0_0_35px_rgba(230,145,56,0.6)] animate-pulse-glow"
            >
              START DRILLING <Rocket size={28} className="animate-bounce" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;