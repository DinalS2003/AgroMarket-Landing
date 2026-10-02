import React from 'react';
import { 
  MapPin, 
  Sprout, 
  MessageSquare, 
  Truck, 
  ShieldCheck, 
  PackageCheck 
} from 'lucide-react';
import { FEATURES } from '../data/content';

export const Features: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#087F4E]" />;
      case 'Leaf':
        return <Sprout className="w-6 h-6 text-[#087F4E]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#087F4E]" />;
      case 'Truck':
        return <Truck className="w-6 h-6 text-[#087F4E]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#087F4E]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#087F4E]" />;
      default:
        return <Sprout className="w-6 h-6 text-[#087F4E]" />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-[#F5FAF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B35] tracking-tight mt-2">
            Everything You Need, In One App.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#68747D]">
            Designed specifically for Sri Lankan agricultural workflows, from smallholder harvest updates to reliable delivery coordination.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-[#087F4E]/30 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E5F4EA] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  {getIcon(feature.icon)}
                </div>
                
                <h3 className="text-xl font-bold text-[#073B35] mb-2.5">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-[#68747D] leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#68747D]">
                <span className="font-semibold text-[#087F4E]">Mobile Feature</span>
                <span>0{feature.id}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
