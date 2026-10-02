import React, { useState } from 'react';
import { PhoneMockup } from './PhoneMockup';
import { AppScreenType } from '../types';
import { ShoppingBag, FileText, UserCheck, PackageCheck } from 'lucide-react';

interface ShowcaseScreen {
  id: AppScreenType;
  label: string;
  badge: string;
  desc: string;
  benefit: string;
  icon: React.ReactNode;
}

export const AppShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<AppScreenType>('marketplace');

  const screens: ShowcaseScreen[] = [
    {
      id: 'marketplace',
      label: 'Marketplace',
      badge: 'Discovery',
      desc: 'Browse fresh crops by category, location, and farm-gate price',
      benefit: 'Browse fresh produce directly from verified Sri Lankan farmers',
      icon: <ShoppingBag className="w-4 h-4" />
    },
    {
      id: 'crop-details',
      label: 'Listing Detail',
      badge: 'Transparency',
      desc: 'Inspect harvest date, available quantity, and delivery options',
      benefit: 'Inspect farm origin, harvest date, and bulk stock availability',
      icon: <FileText className="w-4 h-4" />
    },
    {
      id: 'order-tracking',
      label: 'Order Details',
      badge: 'Fulfilment',
      desc: 'Follow orders from confirmation through harvesting and arrival',
      benefit: 'Track live order progress with PayHere secure payment and in-app grower chat',
      icon: <PackageCheck className="w-4 h-4" />
    },
    {
      id: 'farmer-profile',
      label: 'Farmer Profile',
      badge: 'Trust & Verification',
      desc: 'Discover grower credentials, active crops, and direct chat',
      benefit: 'Discover certified cultivator credentials and protected identities',
      icon: <UserCheck className="w-4 h-4" />
    }
  ];

  const currentScreen = screens.find((s) => s.id === activeScreen) || screens[0];

  return (
    <section id="app-showcase" className="py-16 md:py-24 bg-white border-t border-[#087F4E]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F4EA] text-xs font-bold uppercase tracking-wider text-[#087F4E]">
            Real App Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B35] tracking-tight mt-3 text-balance">
            Everything You Need, Right in Your Pocket.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#68747D]">
            Explore the screens inside the AgroMarket mobile application, crafted for seamless navigation in the field and at home.
          </p>
        </div>

        {/* Screen Selector Tabs (Segmented control style with keyboard accessibility) */}
        <div className="flex justify-center mb-10">
          <div 
            role="tablist" 
            aria-label="App screen selector"
            className="inline-flex flex-wrap items-center justify-center p-1.5 bg-[#F5FAF6] rounded-2xl border border-neutral-200/80 gap-1 sm:gap-2 max-w-full shadow-xs"
          >
            {screens.map((item) => {
              const isSelected = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  onClick={() => setActiveScreen(item.id)}
                  className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E] cursor-pointer ${
                    isSelected
                      ? 'bg-[#087F4E] text-white shadow-sm'
                      : 'text-[#073B35] hover:bg-[#E5F4EA]/70'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ================================================================ */}
        {/* DESKTOP LAYOUT (Hidden on mobile < md): Hero-Style Staged Presentation */}
        {/* ================================================================ */}
        <div className="hidden md:block mb-16">
          {/* Active Screen Caption */}
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#087F4E] uppercase tracking-wider bg-[#E5F4EA] px-2.5 py-1 rounded-md">
              {currentScreen.badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#073B35] mt-2">
              {currentScreen.label}: <span className="font-medium text-[#4B5563] text-lg sm:text-xl">{currentScreen.benefit}</span>
            </h3>
          </div>

          {/* Staged Multi-Phone Hero Fan */}
          <div className="relative max-w-5xl mx-auto px-4 py-6 flex items-center justify-center min-h-[580px]">
            {/* Ambient Background Glow in Earth/Green Tones */}
            <div 
              aria-hidden="true"
              className="absolute inset-0 bg-radial from-[#087F4E]/12 via-[#E5F4EA]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"
            />

            <div className="grid grid-cols-4 gap-4 lg:gap-6 items-center w-full max-w-4xl">
              {screens.map((item) => {
                const isSelected = activeScreen === item.id;
                
                // Rotations: Flanking phones tilt gently between -4 and +4 degrees
                let rotationClass = 'rotate-0';
                if (item.id === 'marketplace') rotationClass = '-rotate-4 hover:rotate-0';
                else if (item.id === 'crop-details') rotationClass = '-rotate-1 hover:rotate-0';
                else if (item.id === 'order-tracking') rotationClass = 'rotate-1 hover:rotate-0';
                else if (item.id === 'farmer-profile') rotationClass = 'rotate-4 hover:rotate-0';

                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveScreen(item.id)}
                    className={`transition-all duration-300 ease-out cursor-pointer flex flex-col items-center ${
                      isSelected
                        ? 'scale-105 z-20 opacity-100'
                        : 'scale-95 z-10 opacity-75 hover:opacity-100 hover:scale-100'
                    }`}
                  >
                    <div className={`transition-transform duration-300 ${isSelected ? 'rotate-0' : rotationClass}`}>
                      <PhoneMockup 
                        screen={item.id} 
                        priority={isSelected}
                        className={isSelected ? 'ring-2 ring-[#087F4E]/60 ring-offset-4 rounded-[48px]' : ''}
                      />
                    </div>
                    
                    {/* Caption underneath each phone */}
                    <div className="mt-4 text-center px-1">
                      <span className={`block text-xs font-bold transition-colors ${
                        isSelected ? 'text-[#087F4E]' : 'text-[#073B35]'
                      }`}>
                        {item.label}
                      </span>
                      <span className="block text-[11px] text-[#68747D] leading-tight mt-0.5 max-w-[190px]">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================================================================ */}
        {/* MOBILE LAYOUT (Only on mobile < md): Horizontal Scroll-Snap Carousel */}
        {/* ================================================================ */}
        <div className="md:hidden mb-12">
          {/* Active Screen Subtitle */}
          <div className="text-center mb-6 px-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087F4E] bg-[#E5F4EA] px-2.5 py-0.5 rounded-full">
              {currentScreen.badge}
            </span>
            <p className="text-xs text-[#68747D] mt-2 font-medium">
              Swipe left or right to inspect the real app screens
            </p>
          </div>

          {/* Swipeable Carousel with Scroll Snap (Strictly no horizontal overflow) */}
          <div className="w-full overflow-x-auto pb-6 pt-2 px-4 snap-x snap-mandatory flex gap-5 scrollbar-none">
            {screens.map((item) => {
              const isSelected = activeScreen === item.id;
              return (
                <div
                  key={item.id}
                  id={`panel-${item.id}`}
                  className="shrink-0 snap-center w-[270px] sm:w-[290px] flex flex-col items-center"
                >
                  <div 
                    onClick={() => setActiveScreen(item.id)}
                    className="w-full cursor-pointer"
                  >
                    <PhoneMockup 
                      screen={item.id} 
                      priority={isSelected}
                      className={isSelected ? 'ring-2 ring-[#087F4E]/60 rounded-[48px]' : ''}
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-4 text-center px-2">
                    <span className="inline-block text-xs font-bold text-[#073B35]">
                      {item.label}
                    </span>
                    <p className="text-xs text-[#087F4E] font-semibold mt-0.5">
                      {item.benefit}
                    </p>
                    <p className="text-[11px] text-[#68747D] mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Dot Navigation */}
          <div className="flex justify-center items-center gap-2 mt-2">
            {screens.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveScreen(item.id)}
                aria-label={`Select ${item.label} screen`}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  activeScreen === item.id 
                    ? 'w-6 h-2 bg-[#087F4E]' 
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile App Specifications Box (Preserved exactly as requested) */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-3xl bg-[#F5FAF6] border border-[#087F4E]/20 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
                Mobile Architecture
              </span>
              <h4 className="text-xl font-bold text-[#073B35]">
                AgroMarket Mobile App Specifications
              </h4>
              <p className="text-xs text-[#68747D]">
                Built from the ground up for low-bandwidth rural conditions and battery efficiency across Sri Lanka.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
              <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-center shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Download Size</span>
                <span className="text-sm font-extrabold text-[#073B35]">~24 MB</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-center shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">OS Compatibility</span>
                <span className="text-sm font-extrabold text-[#073B35]">Android &amp; iOS</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-center shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Payments</span>
                <span className="text-sm font-extrabold text-[#073B35]">PayHere Secure</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-neutral-200/80 text-center shadow-2xs">
                <span className="block text-[10px] uppercase font-bold text-neutral-400">Network Mode</span>
                <span className="text-sm font-extrabold text-[#087F4E]">3G / 4G Light</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
