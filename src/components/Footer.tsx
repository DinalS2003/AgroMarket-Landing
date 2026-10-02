import React from 'react';
import appLogo from '../assets/images/logo.jpeg';

interface FooterProps {
  onNavigatePage: (page: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigatePage }) => {
  return (
    <footer className="bg-white border-t border-neutral-200/80 pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-neutral-100">
          
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <img 
                src={`${appLogo}?v=logo_v3`} 
                alt="AgroMarket logo" 
                className="w-11 h-11 object-contain rounded-2xl shadow-2xs shrink-0" 
              />
              <span className="text-xl font-extrabold text-[#073B35]">
                AgroMarket
              </span>
            </div>
            <p className="text-sm font-semibold text-[#087F4E]">
              "Connecting Farms. Growing Markets."
            </p>
            <p className="text-xs text-[#68747D] max-w-sm">
              Sri Lankan mobile marketplace bridging local farmers and buyers with direct listings, transparent prices, and flexible delivery.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium text-[#68747D]">
            <a href="#home" className="hover:text-[#087F4E] transition-colors">
              Home
            </a>
            <a href="#features" className="hover:text-[#087F4E] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#087F4E] transition-colors">
              How It Works
            </a>
            <a href="#for-farmers" className="hover:text-[#087F4E] transition-colors">
              For Farmers
            </a>
            <a href="#for-buyers" className="hover:text-[#087F4E] transition-colors">
              For Buyers
            </a>
            <button
              type="button"
              onClick={() => onNavigatePage('privacy')}
              className="hover:text-[#087F4E] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('terms')}
              className="hover:text-[#087F4E] transition-colors cursor-pointer"
            >
              Terms and Conditions
            </button>
            <button
              type="button"
              onClick={() => onNavigatePage('refund')}
              className="hover:text-[#087F4E] transition-colors cursor-pointer"
            >
              Refund and Return Policy
            </button>
          </div>

        </div>

        {/* Support contact info and copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#68747D] gap-3">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 Agro Market. All rights reserved.</p>
            <span>·</span>
            <a href="mailto:agromarketlk@gmail.com" className="hover:text-[#087F4E] underline">
              agromarketlk@gmail.com
            </a>
            <span>·</span>
            <a href="tel:0767257041" className="hover:text-[#087F4E]">
              0767257041
            </a>
          </div>
          <p className="text-[11px] text-neutral-400">
            Promotional landing page for Agro Market Mobile App · https://agromarketlk.vercel.app/
          </p>
        </div>

      </div>
    </footer>
  );
};
