import React from 'react';
import { AppScreenType } from '../types';

interface PhoneMockupProps {
  screen?: AppScreenType;
  priority?: boolean;
  className?: string;
  interactive?: boolean;
  onScreenChange?: (screen: AppScreenType) => void;
  rotation?: number; // Optional degrees for desktop angled styling
}

interface ScreenMeta {
  src: string;
  alt: string;
  title: string;
  benefit: string;
}

const SCREEN_DATA: Record<AppScreenType, ScreenMeta> = {
  marketplace: {
    src: '/images/marketplace',
    alt: 'AgroMarket mobile marketplace screen showing fresh vegetables and transparent farm-gate prices',
    title: 'Marketplace',
    benefit: 'Browse fresh produce directly from local Sri Lankan farmers'
  },
  'crop-details': {
    src: '/images/listing-detail',
    alt: 'AgroMarket crop listing detail screen showing available bulk stock, harvest location, and grower rating',
    title: 'Crop Listing Detail',
    benefit: 'Inspect harvest date, available quantity, and direct delivery options'
  },
  'farmer-profile': {
    src: '/images/farmer-profile',
    alt: 'AgroMarket verified farmer profile screen with personal information and privacy protection',
    title: 'Farmer Profile',
    benefit: 'Discover certified grower credentials, active harvests, and protected identity'
  },
  'order-tracking': {
    src: '/images/order-details',
    alt: 'AgroMarket order status and tracking screen with response deadline and payment breakdown',
    title: 'Order Status & Tracking',
    benefit: 'Follow order progress from confirmation to harvest readiness and secure checkout'
  },
  'farmer-listing': {
    src: '/images/listing-detail',
    alt: 'AgroMarket crop listing screen',
    title: 'Crop Listing',
    benefit: 'Transparent bulk pricing with verified farm coordinates'
  }
};

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  screen = 'marketplace',
  priority = false,
  className = '',
  interactive = false,
  onScreenChange,
  rotation = 0
}) => {
  const current = SCREEN_DATA[screen] || SCREEN_DATA.marketplace;

  return (
    <div 
      className={`relative mx-auto w-full max-w-[280px] sm:max-w-[310px] md:max-w-[330px] group transition-all duration-300 ease-out ${className}`}
      style={{
        transform: rotation ? `rotate(${rotation}deg)` : undefined
      }}
    >
      {/* Ambient Brand Color Glow behind phone */}
      <div 
        aria-hidden="true"
        className="absolute -inset-4 sm:-inset-6 bg-gradient-to-tr from-[#087F4E]/20 via-[#149B5C]/15 to-transparent rounded-[54px] blur-2xl -z-10 opacity-70 group-hover:opacity-95 transition-opacity duration-500 pointer-events-none"
      />

      {/* Outer Phone Frame Chassis (CSS/SVG only) */}
      <div className="relative rounded-[46px] sm:rounded-[50px] p-[10px] sm:p-[11px] bg-gradient-to-b from-[#2D3330] via-[#1A201D] to-[#121614] shadow-[0_22px_60px_-15px_rgba(7,59,53,0.38),0_10px_25px_-5px_rgba(0,0,0,0.18),0_0_0_1px_rgba(255,255,255,0.12)] hover:-translate-y-1.5 transition-transform duration-300">
        
        {/* Hardware side button accents */}
        <div className="absolute top-20 -left-[2.5px] w-[2.5px] h-8 bg-neutral-600/60 rounded-l-sm" />
        <div className="absolute top-32 -left-[2.5px] w-[2.5px] h-12 bg-neutral-600/60 rounded-l-sm" />
        <div className="absolute top-48 -left-[2.5px] w-[2.5px] h-12 bg-neutral-600/60 rounded-l-sm" />
        <div className="absolute top-28 -right-[2.5px] w-[2.5px] h-16 bg-neutral-600/60 rounded-r-sm" />

        {/* Screen Bezel Frame with Rounded Corners */}
        <div className="relative overflow-hidden rounded-[36px] sm:rounded-[40px] bg-black border border-neutral-800/80 shadow-inner aspect-[414/896] w-full flex flex-col justify-start">
          
          {/* Subtle Punch-hole Camera Area */}
          <div 
            aria-hidden="true" 
            className="absolute top-2.5 left-1/2 -translate-x-1/2 z-20 w-3.5 h-3.5 rounded-full bg-black/90 ring-1 ring-white/10 pointer-events-none flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0d161a]" />
          </div>

          {/* High-Fidelity Screenshot Picture with WebP + Retina 2x Support */}
          <picture className="w-full h-full block">
            <source
              type="image/webp"
              srcSet={`${current.src}.webp?v=3 1x, ${current.src}@2x.webp?v=3 2x`}
            />
            <source
              type="image/png"
              srcSet={`${current.src}.png?v=3 1x, ${current.src}@2x.png?v=3 2x`}
            />
            <img
              src={`${current.src}.png?v=3`}
              alt={current.alt}
              width={414}
              height={896}
              loading={priority ? 'eager' : 'lazy'}
              decoding="async"
              className="w-full h-full object-cover object-top select-none pointer-events-none"
            />
          </picture>

          {/* Subtle Glass Reflection Layer */}
          <div 
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none"
          />

          {/* Optional Interactive Tap Target to Cycle Screens */}
          {interactive && (
            <button
              type="button"
              onClick={() => {
                if (!onScreenChange) return;
                const order: AppScreenType[] = ['marketplace', 'crop-details', 'farmer-profile', 'order-tracking'];
                const nextIdx = (order.indexOf(screen) + 1) % order.length;
                onScreenChange(order[nextIdx]);
              }}
              aria-label={`Current screen is ${current.title}. Tap to switch screen.`}
              className="absolute inset-0 w-full h-full opacity-0 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#087F4E] rounded-[36px] sm:rounded-[40px] z-10 cursor-pointer"
            />
          )}

        </div>

        {/* Bottom Home Indicator Line */}
        <div aria-hidden="true" className="w-24 h-1 bg-white/20 rounded-full mx-auto mt-2 pointer-events-none" />

      </div>
    </div>
  );
};
