import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine } from 'lucide-react';
import appLogo from '../assets/images/logo.jpeg';

interface NavbarProps {
  onOpenDownload: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload, onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Farmers', href: '#for-farmers' },
    { label: 'For Buyers', href: '#for-buyers' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigateHome) {
      onNavigateHome();
      // allow default anchor scroll if on same page
    }
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#087F4E]/10 py-3' 
          : 'bg-[#F5FAF6] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Brand Wordmark & Logo */}
          <a 
            href="#home" 
            onClick={(e) => {
              if (onNavigateHome) onNavigateHome();
            }}
            className="flex items-center gap-3 text-[#073B35] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E] rounded-xl py-0.5"
            aria-label="AgroMarket - Official Mobile Application"
          >
            <img 
              src={`${appLogo}?v=logo_v3`} 
              alt="AgroMarket App Logo" 
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-2xl shadow-xs transition-transform duration-200 group-hover:scale-105 shrink-0" 
            />
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#073B35] leading-none">
                AgroMarket
              </span>
              <span className="text-[10px] font-bold text-[#087F4E] tracking-wider uppercase mt-1">
                Official Mobile App
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#68747D]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#087F4E] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E] rounded-md px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/downloads/AgroMarket.apk"
              download="AgroMarket.apk"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-[#087F4E] hover:bg-[#073B35] rounded-xl shadow-xs transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E] focus-visible:ring-offset-2 whitespace-nowrap active:scale-[0.98]"
            >
              <ArrowDownToLine className="w-4 h-4" />
              <span>Download AgroMarket APK</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className="md:hidden p-2 rounded-xl text-[#073B35] hover:bg-[#E5F4EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-4 border-t border-neutral-200/80 bg-white rounded-2xl px-4 shadow-lg space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-[#073B35] hover:bg-[#E5F4EA] hover:text-[#087F4E] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="/downloads/AgroMarket.apk"
                download="AgroMarket.apk"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-[#087F4E] rounded-xl shadow-sm"
              >
                <ArrowDownToLine className="w-4 h-4" />
                <span>Download AgroMarket APK</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
};
