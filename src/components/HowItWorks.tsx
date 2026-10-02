import React from 'react';
import { Search, ShoppingBag, Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BUYER_STEPS, FARMER_WORKFLOW } from '../data/content';

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Search className="w-5 h-5 text-[#087F4E]" />;
      case 1:
        return <ShoppingBag className="w-5 h-5 text-[#087F4E]" />;
      case 2:
        return <Truck className="w-5 h-5 text-[#087F4E]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#087F4E]" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white border-t border-[#087F4E]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
            Simple Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073B35] tracking-tight mt-2">
            How It Works
          </h2>
          <p className="mt-3 text-base text-[#68747D]">
            Connecting the farm to your doorstep in three straightforward steps.
          </p>
        </div>

        {/* 3 Step Flow for Buyers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {/* Subtle connection line for desktop */}
          <div className="hidden md:block absolute top-14 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#087F4E]/20 via-[#087F4E]/40 to-[#087F4E]/20 z-0" />

          {BUYER_STEPS.map((step, idx) => (
            <div 
              key={step.number}
              className="relative z-10 bg-[#F5FAF6] rounded-3xl p-8 border border-neutral-200/70 text-center flex flex-col items-center hover:border-[#087F4E]/40 transition-all duration-200"
            >
              {/* Step Number Circle */}
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#087F4E]/20 flex items-center justify-center shadow-xs mb-6 group">
                <span className="text-lg font-extrabold text-[#087F4E]">{step.number}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold mb-3">
                {getStepIcon(idx)}
                <span>{step.title}</span>
              </div>

              <p className="text-sm text-[#68747D] leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Secondary Explanation For Farmers */}
        <div className="bg-[#F5FAF6] rounded-3xl p-6 sm:p-10 border border-[#087F4E]/20">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
              For Farmers
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#073B35] mt-1">
              A Direct Route to Market
            </h3>
          </div>

          {/* Workflow Chain */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FARMER_WORKFLOW.map((item, index) => (
              <div 
                key={item.step}
                className="bg-white p-5 rounded-2xl border border-neutral-200/80 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-[#087F4E] tracking-wider uppercase">Step 0{index + 1}</span>
                    {index < 3 && <ArrowRight className="w-4 h-4 text-neutral-300 hidden lg:block" />}
                  </div>
                  <div className="text-base font-bold text-[#073B35] mb-1">{item.step}</div>
                  <p className="text-xs text-[#68747D]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 text-xs text-[#68747D]">
            <span>List → Connect → Accept Orders → Fulfil</span>
          </div>
        </div>

      </div>
    </section>
  );
};
