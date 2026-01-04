import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'How to Buy', href: '#how-to-buy' },
    { name: 'Chart', href: 'https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL', external: true },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 glass-panel border-b border-oil-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://pbs.twimg.com/media/G9znCcgXUAAVXMq?format=jpg&name=small" 
              alt="OilCoin Logo" 
              className="h-10 w-10 rounded-full border-2 border-oil-gold shadow-[0_0_10px_#E69138]"
            />
            <span className="font-display text-2xl tracking-wider text-white">
              $OIL<span className="text-oil-gold">COIN</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="hover:text-oil-gold transition-colors duration-300 px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide flex items-center gap-1"
                >
                  {link.name}
                  {link.external && <ExternalLink size={14} />}
                </a>
              ))}
              <a 
                href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
                target="_blank"
                rel="noreferrer"
                className="bg-oil-gold hover:bg-oil-highlight text-black font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(230,145,56,0.5)]"
              >
                BUY NOW
              </a>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-oil-gold hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-oil-gold/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-oil-gold block px-3 py-4 rounded-md text-base font-bold text-center"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="https://pump.fun/RN4LQdSmaYkCKNnrN8eFjGZ9tUUPN6nriEdpCF74oiL"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center bg-oil-gold text-black font-bold py-3 mt-4 rounded-lg"
              >
                BUY NOW
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;