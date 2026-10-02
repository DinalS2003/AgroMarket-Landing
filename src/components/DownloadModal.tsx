import React, { useState } from 'react';
import { X, Check, QrCode, Smartphone, BellRing, Sparkles } from 'lucide-react';
import appLogo from '../assets/images/logo.jpeg';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlatform?: 'android' | 'ios' | 'both';
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  initialPlatform = 'both'
}) => {
  const [platform, setPlatform] = useState<'android' | 'ios'>(
    initialPlatform === 'ios' ? 'ios' : 'android'
  );
  const [contact, setContact] = useState('');
  const [userRole, setUserRole] = useState<'buyer' | 'farmer'>('buyer');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setContact('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-100 animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <img src={`${appLogo}?v=logo_v3`} alt="AgroMarket App" className="w-8 h-8 rounded-xl object-contain shadow-xs shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#087F4E]">
                AgroMarket Mobile App
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-[#073B35]">
              Download AgroMarket App
            </h3>
            <p className="text-xs sm:text-sm text-[#68747D] mt-1 leading-relaxed">
              Connect directly with farmers and buyers across Sri Lanka. Enter your mobile number or email to receive the direct app install link.
            </p>

            {/* Role preference */}
            <div className="my-4">
              <label className="block text-xs font-bold text-[#073B35] mb-1.5">
                I am downloading as a:
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setUserRole('buyer')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-all ${
                    userRole === 'buyer' 
                      ? 'bg-[#087F4E] text-white shadow-2xs' 
                      : 'bg-[#F5FAF6] text-neutral-600 border border-neutral-200'
                  }`}
                >
                  Buyer / Consumer
                </button>
                <button
                  type="button"
                  onClick={() => setUserRole('farmer')}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold text-center transition-all ${
                    userRole === 'farmer' 
                      ? 'bg-[#087F4E] text-white shadow-2xs' 
                      : 'bg-[#F5FAF6] text-neutral-600 border border-neutral-200'
                  }`}
                >
                  Farmer / Producer
                </button>
              </div>
            </div>

            {/* Direct APK Download Button */}
            <div className="my-5">
              <a
                href="/downloads/AgroMarket.apk"
                download="AgroMarket.apk"
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#087F4E] hover:bg-[#073B35] transition-colors shadow-xs flex items-center justify-center gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span>Download AgroMarket APK</span>
              </a>
              <span className="block text-center text-xs font-semibold text-[#087F4E] mt-1.5">
                Android APK • Direct Download
              </span>
            </div>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-neutral-200"></div>
              <span className="flex-shrink mx-3 text-xs text-neutral-400 font-medium">or send link to phone</span>
              <div className="flex-grow border-t border-neutral-200"></div>
            </div>

            {/* Notification form */}
            <form onSubmit={handleSubmit} className="space-y-3.5 pt-1">
              <div>
                <label className="block text-xs font-bold text-[#073B35] mb-1">
                  Mobile Phone Number or Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="07X XXX XXXX or email@domain.com"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-sm text-[#073B35] placeholder:text-neutral-400 focus:outline-none focus:border-[#087F4E] focus:ring-1 focus:ring-[#087F4E]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-[#073B35] bg-[#F5FAF6] border border-neutral-200 hover:bg-[#E5F4EA] transition-colors"
              >
                Send Install Link to Mobile
              </button>
            </form>

            {/* Clean QR code simulation note */}
            <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center gap-3 text-xs text-[#68747D]">
              <div className="w-10 h-10 rounded-lg bg-[#F5FAF6] border border-neutral-200 flex items-center justify-center shrink-0 text-[#087F4E]">
                <QrCode className="w-5 h-5" />
              </div>
              <p className="text-[11px] leading-tight">
                Store links are being configured for nationwide rollout. No third-party redirect is performed until certified build links are published.
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#E5F4EA] text-[#087F4E] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
            
            <h4 className="text-2xl font-extrabold text-[#073B35]">
              You're on the Priority List!
            </h4>
            
            <p className="text-sm text-[#68747D] leading-relaxed max-w-sm mx-auto">
              We've registered <strong className="text-[#073B35]">{contact}</strong> for the <span className="capitalize">{platform}</span> rollout for <strong className="text-[#073B35]">{userRole === 'buyer' ? 'buyers' : 'farmers'}</strong>. You will receive direct access instructions as your region activates.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-white bg-[#087F4E] hover:bg-[#073B35] transition-colors"
              >
                Back to Overview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
