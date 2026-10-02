import React from 'react';
import { Smartphone, Sparkles, CheckCircle2 } from 'lucide-react';
import landscapeImg from '../assets/images/sri_lankan_agricultural_landscape_1790756405901.jpg';

interface DownloadCTAProps {
  onOpenDownload: () => void;
}

export const DownloadCTA: React.FC<DownloadCTAProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-16 md:py-24 bg-[#F5FAF6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Banner with landscape backdrop */}
        <div className="relative rounded-[36px] overflow-hidden bg-[#073B35] text-white p-8 sm:p-14 lg:p-20 shadow-xl border border-[#087F4E]/30">
          
          {/* Background image with measured contrast scrim */}
          <div className="absolute inset-0 z-0">
            <img 
              src={landscapeImg} 
              alt="Sri Lankan agricultural landscape" 
              className="w-full h-full object-cover opacity-25"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#073B35] via-[#073B35]/95 to-[#073B35]/75" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-200 text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
              <span>AgroMarket Mobile Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Connect With AgroMarket?
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal">
              Download the AgroMarket mobile app and connect with farmers and buyers across Sri Lanka.
            </p>

            {/* Single Download App Button */}
            <div className="pt-2 flex flex-col items-center lg:items-start gap-2">
              <a
                href="/downloads/AgroMarket.apk"
                download="AgroMarket.apk"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-4 rounded-2xl bg-white text-[#073B35] hover:bg-emerald-50 transition-all duration-200 shadow-lg font-extrabold text-base group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-[0.98]"
              >
                <Smartphone className="w-5 h-5 text-[#087F4E]" />
                <span>Download AgroMarket APK</span>
              </a>
              <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Android APK • Direct Download</span>
              </span>
            </div>

            {/* Reassurance note */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-emerald-200/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Free to install for farmers and buyers</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Secure encrypted payments</span>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
