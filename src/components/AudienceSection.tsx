import React from 'react';
import { Check, ArrowRight, Sprout, ShoppingBag } from 'lucide-react';

interface AudienceSectionProps {
  onSelectFarmer: () => void;
  onSelectBuyer: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({
  onSelectFarmer,
  onSelectBuyer
}) => {
  return (
    <section className="py-16 md:py-24 bg-white border-y border-[#087F4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
            Marketplace Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B35] tracking-tight mt-2">
            One App. Two Sides of the Market.
          </h2>
          <p className="mt-3 text-[#68747D] text-base">
            Whether cultivating the land or sourcing fresh farm produce for your home or business, AgroMarket brings both sides together.
          </p>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Farmers */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-[#F5FAF6] border border-[#087F4E]/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#087F4E] text-white flex items-center justify-center shadow-xs mb-6 group-hover:scale-105 transition-transform">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
                For Farmers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#073B35] mt-1 mb-3">
                Bring your harvest to more buyers.
              </h3>
              <p className="text-sm text-[#68747D] leading-relaxed mb-6">
                Take control of your agricultural sales with direct market access right from your mobile phone.
              </p>

              <ul className="space-y-3.5 mb-8">
                {[
                  "List available crops",
                  "Set prices and quantities",
                  "Manage orders",
                  "Configure delivery",
                  "Communicate with buyers"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#073B35] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E5F4EA] text-[#087F4E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={onSelectFarmer}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#087F4E] hover:bg-[#073B35] transition-all shadow-xs group-hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087F4E]"
            >
              <span>Join as a Farmer</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Card 2: Buyers */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-[#F5FAF6] border border-[#087F4E]/20 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#073B35] text-white flex items-center justify-center shadow-xs mb-6 group-hover:scale-105 transition-transform">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
                For Buyers
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#073B35] mt-1 mb-3">
                Find fresh produce from nearby farmers.
              </h3>
              <p className="text-sm text-[#68747D] leading-relaxed mb-6">
                Discover locally grown produce, transparent farm-gate pricing, and direct communication with Sri Lankan growers.
              </p>

              <ul className="space-y-3.5 mb-8">
                {[
                  "Discover nearby farmers",
                  "Browse available crops",
                  "Compare availability and prices",
                  "Chat with farmers",
                  "Order and pay securely"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#073B35] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#E5F4EA] text-[#087F4E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={onSelectBuyer}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#073B35] hover:bg-[#087F4E] transition-all shadow-xs group-hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#073B35]"
            >
              <span>Start Buying</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
