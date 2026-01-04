import React from 'react';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-oil-gold/20 py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
           <img 
              src="https://pbs.twimg.com/media/G9znCcgXUAAVXMq?format=jpg&name=small" 
              alt="OilCoin Logo" 
              className="h-8 w-8 rounded-full border border-oil-gold"
            />
           <span className="font-display text-xl text-white tracking-widest">$OILCOIN</span>
        </div>

        <div className="text-gray-500 text-sm text-center">
          <p>© 2026 OilCoin. All rights reserved.</p>
          <p className="mt-1 text-xs">
            $OILCOIN is a memecoin with no intrinsic value or expectation of financial return. 
            There is no formal team or roadmap. The coin is completely useless and for entertainment purposes only.
          </p>
        </div>

        <div className="flex gap-4">
           <a 
            href="https://x.com/oilcoinon_sol" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-oil-gold transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
           <a 
            href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL" 
            target="_blank" 
            rel="noreferrer"
            className="text-gray-400 hover:text-oil-gold transition-colors"
          >
            <Zap size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;