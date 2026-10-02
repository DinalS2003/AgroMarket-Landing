import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudienceSection } from './components/AudienceSection';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FarmerSection } from './components/FarmerSection';
import { BuyerSection } from './components/BuyerSection';
import { AppShowcase } from './components/AppShowcase';
import { DownloadCTA } from './components/DownloadCTA';
import { Footer } from './components/Footer';
import { DownloadModal } from './components/DownloadModal';
import { MobileStickyBanner } from './components/MobileStickyBanner';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { RefundPolicyPage } from './pages/RefundPolicyPage';

export type CurrentPage = 'home' | 'privacy' | 'terms' | 'refund';

export default function App() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>('home');
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  // Sync with URL Hash for direct linking (e.g. #privacy, #terms, #refund)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#privacy' || hash === '#privacypolicy') {
        setCurrentPage('privacy');
      } else if (hash === '#terms' || hash === '#termsandconditions') {
        setCurrentPage('terms');
      } else if (hash === '#refund' || hash === '#refundpolicy') {
        setCurrentPage('refund');
      } else if (!hash || hash === '#home') {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: CurrentPage) => {
    setCurrentPage(page);
    if (page === 'home') {
      window.location.hash = 'home';
    } else {
      window.location.hash = page;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleScrollTo = (elementId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const el = document.getElementById(elementId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Dedicated Policy Pages
  if (currentPage === 'privacy') {
    return (
      <>
        <PrivacyPolicyPage 
          onBack={() => navigateTo('home')} 
          onOpenDownload={handleOpenDownload} 
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === 'terms') {
    return (
      <>
        <TermsPage 
          onBack={() => navigateTo('home')} 
          onOpenDownload={handleOpenDownload} 
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
      </>
    );
  }

  if (currentPage === 'refund') {
    return (
      <>
        <RefundPolicyPage 
          onBack={() => navigateTo('home')} 
          onOpenDownload={handleOpenDownload} 
        />
        <DownloadModal
          isOpen={downloadModalOpen}
          onClose={() => setDownloadModalOpen(false)}
        />
      </>
    );
  }

  // Default: Main Mobile App Landing Page (Map removed as requested)
  return (
    <div className="min-h-screen flex flex-col bg-[#F5FAF6] text-[#073B35]">
      {/* Sticky Header */}
      <Navbar 
        onOpenDownload={handleOpenDownload} 
        onNavigateHome={() => navigateTo('home')}
      />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section with Large Smartphone Mockup & Single Download CTA */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* Value Proposition: "One App. Two Sides of the Market." */}
        <AudienceSection 
          onSelectFarmer={() => handleScrollTo('for-farmers')}
          onSelectBuyer={() => handleScrollTo('for-buyers')}
        />

        {/* 6 Core Feature Cards */}
        <Features />

        {/* 3-Step Buyer Workflow & Farmer Process */}
        <HowItWorks />

        {/* Farmer Showcase Section */}
        <FarmerSection onJoinAsFarmer={handleOpenDownload} />

        {/* Buyer Showcase Section */}
        <BuyerSection onStartExploring={handleOpenDownload} />

        {/* Horizontal & Interactive App Showcase */}
        <AppShowcase />

        {/* Final Download App CTA */}
        <DownloadCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Minimal Footer with Policy Links */}
      <Footer onNavigatePage={(page) => navigateTo(page)} />

      {/* Mobile-Only Sticky App Download Bar */}
      <MobileStickyBanner onOpenDownload={handleOpenDownload} />

      {/* Structured App Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </div>
  );
}
