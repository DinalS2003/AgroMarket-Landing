import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Mail, Phone, Globe, Download } from 'lucide-react';

interface PolicyPageProps {
  onBack: () => void;
  onOpenDownload: () => void;
}

export const PrivacyPolicyPage: React.FC<PolicyPageProps> = ({ onBack, onOpenDownload }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F5FAF6] text-[#073B35]">
      {/* Policy Header */}
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

      {/* Main Policy Document */}
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-neutral-200/80 shadow-xs">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5F4EA] text-[#087F4E] text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#073B35] tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs text-[#68747D] mt-2 mb-8 pb-6 border-b border-neutral-100 font-medium">
            Last Updated: September 30, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-6 text-sm text-[#073B35]/90 leading-relaxed">
            <p>
              <strong>Agro Market</strong> ("Agro Market", "we", "us", or "our") operates the Agro Market mobile application and website at{' '}
              <a href="https://agromarketlk.vercel.app/" className="text-[#087F4E] font-semibold underline">
                https://agromarketlk.vercel.app/
              </a>.
            </p>

            <p>
              We respect your privacy and are committed to protecting the personal information of farmers and buyers who use our platform.
            </p>

            <p>
              This Privacy Policy explains what information we collect, how we use it, how it is shared, and how we protect it.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              1. Information We Collect
            </h2>
            <p>
              Depending on how you use Agro Market, we may collect the following information.
            </p>

            <h3 className="text-base font-bold text-[#073B35]">Account Information</h3>
            <p>When you create an account, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Full name;</li>
              <li>Mobile phone number;</li>
              <li>National Identity Card (NIC) information;</li>
              <li>District;</li>
              <li>City; and</li>
              <li>Account and authentication information.</li>
            </ul>

            <h3 className="text-base font-bold text-[#073B35]">Farmer and Listing Information</h3>
            <p>When you register as a farmer and list agricultural produce, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Crop name and category;</li>
              <li>Available quantities and minimum order sizes;</li>
              <li>Price per kilogram;</li>
              <li>Harvest date and produce conditions;</li>
              <li>Farm location, district, city, and collection landmark; and</li>
              <li>Photographs of agricultural products.</li>
            </ul>

            <h3 className="text-base font-bold text-[#073B35]">Buyer and Order Information</h3>
            <p>When you place an order on Agro Market, we collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Order requests and quantities;</li>
              <li>Delivery address, landmark, or collection method;</li>
              <li>Fulfillment status and order history; and</li>
              <li>Communications regarding order handover and verification.</li>
            </ul>

            <h3 className="text-base font-bold text-[#073B35]">Payment Details</h3>
            <p>
              Payments through Agro Market are processed securely via <strong>PayHere</strong>. Agro Market does not store full payment card numbers or bank credentials on its servers. All payment transactions are encrypted and handled directly by PayHere.
            </p>

            <h3 className="text-base font-bold text-[#073B35]">In-App Communication</h3>
            <p>
              Agro Market provides an in-app messaging system for communication related to orders. To safeguard buyers and farmers from fraud and maintain platform integrity, automated moderation systems monitor messages to detect and prevent unauthorized off-platform transaction attempts.
            </p>

            <h3 className="text-base font-bold text-[#073B35]">Technical and Device Information</h3>
            <p>
              We automatically collect device identifiers, operating system version, app version, network connectivity status, and diagnostic crash logs to ensure reliable mobile app performance across Sri Lankan networks.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              2. How We Use Your Information
            </h2>
            <p>We use your information strictly to:</p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>Facilitate direct connections between local farmers and buyers;</li>
              <li>Process, confirm, and fulfill order requests;</li>
              <li>Coordinate farmer-provided or buyer-arranged pickup and delivery;</li>
              <li>Facilitate secure payment processing and dispute resolution through PayHere;</li>
              <li>Detect and prevent fraud, deceptive listings, and prohibited off-platform transactions; and</li>
              <li>Provide customer support and verify farmer account authenticity.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              3. Information Sharing and Disclosure
            </h2>
            <p>
              We do not sell your personal data. We disclose information only in the following contexts:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-700">
              <li>
                <strong>Between Buyer and Farmer:</strong> Once an order request is accepted, essential fulfillment details (such as buyer name, delivery landmark, and contact information) are shared to complete delivery or collection.
              </li>
              <li>
                <strong>Payment Partners:</strong> Transaction details are shared with PayHere to execute payments and process authorized refunds.
              </li>
              <li>
                <strong>Legal Requirements:</strong> We may disclose information if required under applicable laws of the Democratic Socialist Republic of Sri Lanka or to protect user safety.
              </li>
            </ul>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              4. Data Protection and Security
            </h2>
            <p>
              We implement industry-standard administrative and technical security measures, including SSL/TLS encryption for network communications, role-based access control, and secure tokenized authentication.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              5. Data Retention
            </h2>
            <p>
              We retain personal data as long as your account remains active and as required to fulfill orders, resolve disputes, and comply with statutory accounting and tax obligations.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              6. Your Rights
            </h2>
            <p>
              You have the right to review, update, or correct your personal profile information at any time directly through the Agro Market mobile app settings. You may also request account deactivation by contacting our support team.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              7. Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will indicate the date of the latest update at the top of this document. Continued use of Agro Market signifies acceptance of the revised policy.
            </p>

            <h2 className="text-xl font-bold text-[#073B35] pt-4 border-t border-neutral-100">
              8. Contact Us
            </h2>
            <p>If you have questions regarding this Privacy Policy, please contact us:</p>
            
            <div className="mt-4 p-5 rounded-2xl bg-[#F5FAF6] border border-neutral-200/80 space-y-2 text-sm">
              <div className="font-extrabold text-[#073B35]">Agro Market</div>
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
