import React from 'react';
import { Smartphone, Download, X } from 'lucide-react';
import appLogo from '../assets/images/logo.png';

interface MobileStickyBannerProps {
  onOpenDownload: () => void;
}

export const MobileStickyBanner: React.FC<MobileStickyBannerProps> = ({ onOpenDownload }) => {
  const [dismissed, setDismissed] = React.useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/80 shadow-lg animate-in slide-in-from-bottom duration-200">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <img 
            src={`${appLogo}?v=4`} 
            alt="AgroMarket logo" 
            className="w-10 h-10 object-contain drop-shadow-xs shrink-0" 
          />
          <div className="truncate">
            <div className="text-xs font-extrabold text-[#073B35] truncate">AgroMarket Mobile App</div>
            <div className="text-[10px] text-[#68747D] truncate">Free · Android APK Sri Lanka</div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <a
            href="/downloads/AgroMarket.apk"
            download="AgroMarket.apk"
            className="px-3.5 py-1.5 rounded-xl bg-[#087F4E] text-white text-xs font-bold shadow-xs active:scale-95 transition-all flex items-center gap-1"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download APK</span>
          </a>
          
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="p-1 rounded-lg text-neutral-400 hover:text-neutral-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
