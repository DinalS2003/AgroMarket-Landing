import React, { useEffect } from 'react';
import { ArrowLeft, RefreshCw, Mail, Phone, Globe, Download, AlertCircle } from 'lucide-react';

interface RefundPolicyPageProps {
  onBack: () => void;
  onOpenDownload: () => void;
}

export const RefundPolicyPage: React.FC<RefundPolicyPageProps> = ({ onBack, onOpenDownload }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5FAF6] text-[#073B35]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#087F4E]/10 py-4 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#073B35] hover:text-[#087F4E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <a
            href="/downloads/AgroMarket.apk"
            download="AgroMarket.apk"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#087F4E] hover:bg-[#073B35] rounded-xl shadow-xs transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download AgroMarket APK</span>
          </a>
        </div>
      </header>

      {/* Main Document */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-neutral-200/80 shadow-xs">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold mb-4">
            <RefreshCw className="w-4 h-4" />
            <span>Customer Protection</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#073B35] tracking-tight">
            Refund and Return Policy
          </h1>

          <p className="text-xs text-[#68747D] mt-2 mb-8 pb-6 border-b border-neutral-100 font-medium">
            Last Updated: September 30, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-6 text-sm text-[#073B35]/90 leading-relaxed">
            <p>
              Welcome to <strong>Agro Market</strong> ("Agro Market", "we", "us", or "our"), available at{' '}
              <a href="https://agromarketlk.vercel.app/" className="text-[#087F4E] font-semibold underline">
                https://agromarketlk.vercel.app/
              </a>.
            </p>

            <p>
              Because agricultural produce comprises perishable fresh crops, this Refund and Return Policy sets out the clear procedures, cancellation rules, inspection guidelines, and dispute outcomes governing transactions between farmers and buyers on the Agro Market mobile platform.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              1. Order Cancellation and Eligibility
            </h2>
            <h3 className="text-base font-bold text-[#073B35]">Cancellation Before Farmer Acceptance</h3>
            <p>
              A buyer may cancel an order request at any time before the farmer accepts it. Since no payment is collected until after acceptance, zero cancellation fees apply.
            </p>

            <h3 className="text-base font-bold text-[#073B35]">Cancellation After Acceptance and Payment</h3>
            <p>
              Once a farmer accepts an order and payment has been completed, cancellation is subject to the order fulfillment status:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>
                <strong>Prior to Harvesting/Packing:</strong> If the farmer has not yet harvested or packed the crops specifically for the order, the buyer may request cancellation through the app or by mutual agreement with the farmer.
              </li>
              <li>
                <strong>Post-Harvest or In Transit:</strong> Because fresh agricultural goods are perishable, orders cannot be unilaterally cancelled once harvested, packed, or dispatched for delivery, except in cases of non-delivery or severe quality mismatch.
              </li>
            </ul>

            <h3 className="text-base font-bold text-[#073B35]">Cancellation by Farmer</h3>
            <p>
              If a farmer is unable to fulfill an accepted order due to unforeseen crop shortages, adverse weather, or logistical impediments, the farmer must cancel the order immediately. The buyer will receive a <strong>100% full refund</strong> of both the product subtotal and delivery fee.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              2. Produce Inspection upon Handover
            </h2>
            <p>
              Agricultural goods must be inspected at the point of handover:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>
                <strong>Farmer Delivery:</strong> The buyer must inspect the produce in the presence of the delivery person upon arrival.
              </li>
              <li>
                <strong>Buyer-Arranged Pickup:</strong> The buyer must verify the quantity (weight in kg), freshness, and quality grade before removing the produce from the farmer's collection landmark.
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed">
                <strong>Important:</strong> Obvious physical damage, spoilage, or substantial weight discrepancies must be documented with clear photographs and submitted immediately through the Agro Market mobile application dispute flow.
              </p>
            </div>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              3. Grounds for Refund or Dispute
            </h2>
            <p>Buyers are eligible to open a dispute under the following circumstances:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>
                <strong>Non-Delivery:</strong> The farmer or delivery transport failed to deliver the agreed order;
              </li>
              <li>
                <strong>Damaged or Spoiled Produce:</strong> Produce arrived damaged, spoiled, or rotten upon handover;
              </li>
              <li>
                <strong>Severe Quantity Discrepancy:</strong> The delivered weight is materially less than the confirmed kilogram quantity paid for; or
              </li>
              <li>
                <strong>Wrong Crop Delivered:</strong> The delivered crop materially differs from the listing description.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              4. Dispute Resolution Process
            </h2>
            <p>
              When a dispute is logged in the Agro Market mobile app, Agro Market reviews:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Submitted photos of the delivered produce;</li>
              <li>In-app chat correspondence between the buyer and farmer;</li>
              <li>Confirmed order specifications and delivery logs.</li>
            </ul>
            <p>Depending on the evidence, Agro Market may determine:</p>
            <ol className="list-decimal pl-5 space-y-1 text-neutral-700">
              <li>
                <strong>Full Refund:</strong> If produce was not delivered or was entirely unusable.
              </li>
              <li>
                <strong>Partial Refund:</strong> If only a fraction of the produce was deficient or under-weight, a proportional refund is issued while compensating the farmer for the accepted portion.
              </li>
              <li>
                <strong>Release to Farmer:</strong> If produce met the listing description and the buyer failed to collect without valid reason.
              </li>
            </ol>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              5. Refund Payment Method & Processing Timeline
            </h2>
            <p>
              All authorized refunds are processed directly to the original payment method (credit card, debit card, or supported bank account) used during checkout.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Refund processing is initiated within <strong>24 to 48 hours</strong> of dispute resolution.</li>
              <li>Depending on the issuing Sri Lankan commercial bank, funds typically reflect in the buyer's account within <strong>3 to 7 business days</strong>.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              6. Non-Refundable Situations
            </h2>
            <p>Refunds will not be approved in the following cases:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Buyer's remorse or change of mind after healthy, fresh produce has been delivered or collected;</li>
              <li>Spelling or storage degradation occurring after successful handover;</li>
              <li>Failure by the buyer to attend the scheduled pickup landmark or receive delivery; or</li>
              <li>Transactions arranged outside the Agro Market platform in violation of platform rules.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              7. Contact Us
            </h2>
            <p>
              For refund inquiries or assistance with an active order dispute, contact our support team:
            </p>

            <div className="mt-4 p-5 rounded-2xl bg-[#F5FAF6] border border-neutral-200/80 space-y-2 text-sm">
              <div className="font-extrabold text-[#073B35]">Agro Market Support</div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Mail className="w-4 h-4 text-[#087F4E]" />
                <span>Email: <a href="mailto:agromarketlk@gmail.com" className="text-[#087F4E] font-medium underline">agromarketlk@gmail.com</a></span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Phone className="w-4 h-4 text-[#087F4E]" />
                <span>Phone: <a href="tel:0767257041" className="text-[#087F4E] font-medium">0767257041</a></span>
              </div>
              <div className="flex items-center gap-2 text-neutral-700">
                <Globe className="w-4 h-4 text-[#087F4E]" />
                <span>Website: <a href="https://agromarketlk.vercel.app/" className="text-[#087F4E] font-medium underline">https://agromarketlk.vercel.app/</a></span>
              </div>
            </div>

          </div>

          <div className="mt-10 pt-6 border-t border-neutral-100 flex justify-between items-center">
            <button
              type="button"
              onClick={onBack}
              className="text-xs font-bold text-[#087F4E] hover:underline"
            >
              ← Back to Main Page
            </button>
            <span className="text-xs text-neutral-400">© 2026 Agro Market</span>
          </div>

        </div>
      </main>
    </div>
  );
};
