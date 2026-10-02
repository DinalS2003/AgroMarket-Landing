import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  Smartphone, 
  Bell, 
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import { PhoneMockup } from './PhoneMockup';
import { AppScreenType } from '../types';

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  const [heroScreen, setHeroScreen] = useState<AppScreenType>('marketplace');

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-br from-[#E5F4EA]/80 via-transparent to-[#E5F4EA]/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Mobile App Headline, Store Badges, and QR */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Mobile App Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5F4EA] border border-[#087F4E]/20 text-[#087F4E] text-xs font-bold tracking-wide shadow-xs">
              <Smartphone className="w-4 h-4 text-[#087F4E]" />
              <span>Official Mobile Application · Sri Lanka</span>
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#073B35] tracking-tight leading-[1.12] text-balance">
              Fresh From Local Farms, Closer to You.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-[#68747D] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              AgroMarket connects Sri Lankan farmers and buyers through one simple mobile marketplace.
            </p>

            {/* Single Prominent Download Button */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-2">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
                <a
                  href="/downloads/AgroMarket.apk"
                  download="AgroMarket.apk"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#087F4E] hover:bg-[#073B35] text-white font-extrabold text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E]"
                >
                  <Smartphone className="w-5 h-5 text-white" />
                  <span>Download AgroMarket APK</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              <span className="text-xs font-semibold text-[#087F4E] flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F4E]" />
                <span>Android APK • Direct Download</span>
              </span>
            </div>

            {/* Mobile App Screen Quick Toggles */}
            <div className="pt-6 border-t border-neutral-200/70">
              <span className="block text-xs uppercase tracking-wider text-[#68747D] font-bold mb-2">
                Tap to preview mobile screen:
              </span>
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                {[
                  { id: 'marketplace', label: '1. Crop Market' },
                  { id: 'crop-details', label: '2. Crop Details' },
                  { id: 'farmer-profile', label: '3. Farmer Profile' },
                  { id: 'order-tracking', label: '4. Order Tracking' }
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setHeroScreen(s.id as AppScreenType)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      heroScreen === s.id
                        ? 'bg-[#073B35] text-white shadow-xs'
                        : 'bg-white text-neutral-600 hover:bg-[#E5F4EA] border border-neutral-200/80'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Smartphone Mockup with Real Mobile Push Notifications */}
          <div className="lg:col-span-6 xl:col-span-5 relative flex justify-center items-center">
            
            {/* Background Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#E5F4EA] blur-3xl -z-10" />

            {/* Floating Mobile Notification 1: Push Alert (Top Left) */}
            <div className="hidden sm:flex absolute -left-10 top-12 z-20 items-start gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg max-w-[210px] animate-bounce duration-[5000ms]">
              <div className="w-7 h-7 rounded-lg bg-[#087F4E] text-white flex items-center justify-center shrink-0">
                <Bell className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="flex items-center justify-between text-[8px] text-neutral-400 font-semibold">
                  <span>AGROMARKET</span>
                  <span>2m ago</span>
                </div>
                <div className="text-[10px] font-bold text-[#073B35] leading-tight mt-0.5">
                  Harvest Listed
                </div>
                <div className="text-[9px] text-neutral-500 leading-tight">
                  240kg Nuwara Eliya Carrots ready in Kandapola
                </div>
              </div>
            </div>

            {/* Floating Mobile Notification 2: In-App Chat (Top Right) */}
            <div className="hidden sm:flex absolute -right-8 top-32 z-20 items-start gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg max-w-[200px]">
              <div className="w-7 h-7 rounded-lg bg-[#073B35] text-white flex items-center justify-center shrink-0">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="flex items-center justify-between text-[8px] text-neutral-400 font-semibold">
                  <span>CHAT · BANDARA</span>
                  <span>Just now</span>
                </div>
                <div className="text-[10px] font-bold text-[#073B35] leading-tight mt-0.5">
                  "Freshly harvested this 6 AM"
                </div>
                <div className="text-[9px] text-[#087F4E] font-medium">
                  Direct message from grower
                </div>
              </div>
            </div>

            {/* Floating Mobile Notification 3: Secure Payment Protection (Bottom Left) */}
            <div className="hidden sm:flex absolute -left-12 bottom-24 z-20 items-start gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg max-w-[210px]">
              <div className="w-7 h-7 rounded-lg bg-[#E5F4EA] text-[#087F4E] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-[#073B35]">
                  Secure Payment Protected
                </div>
                <div className="text-[9px] text-neutral-500">
                  Secure direct payment on confirmed orders
                </div>
              </div>
            </div>

            {/* Floating Mobile Notification 4: Live Dispatch Tracking (Bottom Right) */}
            <div className="hidden sm:flex absolute -right-8 bottom-12 z-20 items-start gap-2.5 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg max-w-[190px]">
              <div className="w-7 h-7 rounded-lg bg-[#087F4E] text-white flex items-center justify-center shrink-0">
                <Truck className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-[#073B35]">
                  Driver Nuwan En Route
                </div>
                <div className="text-[9px] text-neutral-500">
                  Arriving at farm collection point
                </div>
              </div>
            </div>

            {/* The Main Realistic Smartphone Mockup */}
            <PhoneMockup 
              screen={heroScreen} 
              priority={true}
              interactive={true} 
              onScreenChange={(s) => setHeroScreen(s)}
            />

          </div>

        </div>
      </div>
    </section>
  );
};

