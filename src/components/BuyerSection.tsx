import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import buyerImg from '../assets/images/buyer_fresh_produce_1790756375139.jpg';

interface BuyerSectionProps {
  onStartExploring: () => void;
}

export const BuyerSection: React.FC<BuyerSectionProps> = ({ onStartExploring }) => {
  return (
    <section id="for-buyers" className="py-16 md:py-24 bg-[#F5FAF6] border-t border-[#087F4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy and Bullets */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold">
              <span>Buyer Experience</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B35] tracking-tight leading-tight">
              Buy Local. Buy Fresh.
            </h2>

            <p className="text-base sm:text-lg text-[#68747D] leading-relaxed">
              Filter local farmers by district, browse fresh produce, and manage your purchases from one simple Android app.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-3.5 pt-2">
              {[
                "Filter farmers by district",
                "Browse fresh produce",
                "View availability and prices",
                "Chat with farmers",
                "Choose delivery or pickup",
                "Pay securely"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-base font-bold text-white bg-[#073B35] hover:bg-[#087F4E] rounded-2xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B35]"
              >
                <span>Download AgroMarket APK</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-xs font-semibold text-[#087F4E]">Android APK • Direct Download</span>
            </div>

          </div>

          {/* Right Column: Authentic Sri Lankan Buyer Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-neutral-200">
              <img
                src={buyerImg}
                alt="Sri Lankan consumer holding a smartphone with fresh produce"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#073B35]/90 via-[#073B35]/20 to-transparent" />
              
              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-6 inset-x-6 text-white">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">Guaranteed Freshness</span>
                <h4 className="text-lg font-bold text-white mt-1">Farm-Fresh Quality at Fair Prices</h4>
                <p className="text-xs text-emerald-100/90 mt-1 max-w-md">
                  From wholesale kitchen sourcing to weekly household vegetables, connect with local growers right from your phone.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
