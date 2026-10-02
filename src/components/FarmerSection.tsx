import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import farmerImg from '../assets/images/farmer_smart_agriculture_1790756356998.jpg';

interface FarmerSectionProps {
  onJoinAsFarmer: () => void;
}

export const FarmerSection: React.FC<FarmerSectionProps> = ({ onJoinAsFarmer }) => {
  return (
    <section id="for-farmers" className="py-16 md:py-24 bg-white border-t border-[#087F4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Sri Lankan Farmer Photo */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
              <img
                src={farmerImg}
                alt="Sri Lankan farmer using a smartphone to manage crop listings"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B35]/90 via-[#073B35]/20 to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">Empowering Growers</span>
                <h4 className="text-lg font-bold text-white mt-1">Direct From The Soil To Market</h4>
                <p className="text-xs text-emerald-100/90 mt-1 max-w-md">
                  Sri Lankan farmers set their own farm-gate prices and communicate with buyers without intermediary price cuts.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy and Bullets */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold">
              <span>Farmer Portal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B35] tracking-tight leading-tight">
              Your Farm. Your Marketplace.
            </h2>

            <p className="text-base sm:text-lg text-[#68747D] leading-relaxed">
              AgroMarket gives farmers a simple way to showcase available produce and connect with buyers.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3.5 pt-2">
              {[
                "Create crop listings",
                "Manage quantity and price",
                "Receive and manage orders",
                "Offer pickup or delivery",
                "Communicate with buyers"
              ].map((bullet) => (
                <div key={bullet} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#087F4E] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base font-semibold text-[#073B35]">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-col items-start gap-2">
              <a
                href="/downloads/AgroMarket.apk"
                download="AgroMarket.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-[#087F4E] hover:bg-[#073B35] rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E]"
              >
                <span>Download AgroMarket APK</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-semibold text-[#087F4E]">Android APK • Direct Download</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
